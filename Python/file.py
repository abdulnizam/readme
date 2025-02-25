import logging
from langchain_aws import BedrockEmbeddings
from model.scenario1_prompts import (
    make_topic_outline_prompts,
    make_facilitator_speaker_notes_usr_prompt,
    make_facilitator_slides_bullets_usr_prompt,
    make_kc_usr_prompt_from_list_of_scripts,
)
from model.scenario1_prompts import (
    ONE_SHOT_SPEAKER_NOTES_USR_PROMPT,
    ONE_SHOT_SPEAKER_NOTES_OUTPUT,
    ONE_SHOT_SLIDES_BULLETS_USR_PROMPT,
    ONE_SHOT_SLIDES_BULLETS_OUTPUT,
    FACILITATOR_SPEAKER_NOTES_SYS_PROMPT,
    FACILITATOR_SLIDES_BULLETS_SYS_PROMPT,
)
from model.scenario1_prompts import (
    ONE_SHOT_TOPIC_OUTLINES_USR_PROMPT,
    ONE_SHOT_TOPIC_OUTLINES_OUTPUT,
    ONE_SHOT_TOPIC_OUTLINES_USR_PROMPT_2,
    ONE_SHOT_TOPIC_OUTLINES_OUTPUT_2,
    KNOWLEDGE_CHECK_SYS_PROMPT,
)
from model.content_creation_funcs import (
    run_concurrent_prompts,
    run_json_prompt,
    remove_similarities,
    apply_sentence_case_to_title,
    capitalise_script_headings,
    shuffle_kc_choices,
)
from model.ai_models_config import llama3_70b
from model.aws.aws_helpers import get_client
from config import get_settings

logger = logging.getLogger()

# Define constants once
TOPIC_OUTLINES_ONE_SHOT = [
    llama3_70b.format_one_shot(
        ONE_SHOT_TOPIC_OUTLINES_USR_PROMPT, ONE_SHOT_TOPIC_OUTLINES_OUTPUT
    ),
    llama3_70b.format_one_shot(
        ONE_SHOT_TOPIC_OUTLINES_USR_PROMPT_2, ONE_SHOT_TOPIC_OUTLINES_OUTPUT_2
    ),
]
SPEAKER_NOTES_ONE_SHOT = [
    llama3_70b.format_one_shot(
        ONE_SHOT_SPEAKER_NOTES_USR_PROMPT, ONE_SHOT_SPEAKER_NOTES_OUTPUT
    )
]
FACILITATOR_SLIDES_BULLETS_ONE_SHOT = [
    llama3_70b.format_one_shot(
        ONE_SHOT_SLIDES_BULLETS_USR_PROMPT, ONE_SHOT_SLIDES_BULLETS_OUTPUT
    )
]


def list_to_markdown(lst, i=0):
    """Converts nested lists to markdown-formatted bullet points"""

    if isinstance(lst, str):
        # Already a string (markdown format)!
        return lst

    TAB_VAL = "    "

    if isinstance(lst, list):
        result = ""
        for item in lst:
            if isinstance(item, list):
                j = i + 1
                result += list_to_markdown(item, j)
            else:
                tabs = i * TAB_VAL
                result += tabs + "- " + str(item) + "\n"
        return result
    else:
        return str(lst)


# For converting bulletpoints: Markdown -> List


def markdown_to_list(markdown):
    """Converts markdown-formatted bullet points to a nested list"""

    if isinstance(markdown, list):
        # Already a list!
        return markdown

    markdown = markdown.strip()
    lines = markdown.split("\n")
    result = []
    stack = [result]
    last_indent = 0
    for line in lines:
        indent = 0
        while line.startswith(" "):
            indent += 1
            line = line[1:]
        if indent > last_indent:
            sublist = []
            stack[-1].append(sublist)
            stack.append(sublist)
        elif indent < last_indent:
            while indent < last_indent:
                stack.pop()
                last_indent = len(stack) - 1
        if line.strip():
            stack[-1].append(line[2:].strip())
        last_indent = indent
    while len(stack) > 1:
        stack.pop()
    return result


def combine_script_and_bullets(speaker_notes_json, slide_content_json):
    """
    The speaker notes and slide content will be returned by the LLM as 2 separate JSON objects.
    This function combines them into a single object, to be returned to the frontend.
    """
    combined_obj = {"slides": []}
    for slide1, slide2 in zip(
        speaker_notes_json["slides"], slide_content_json["slides"]
    ):
        combined_slide = {"heading": slide1["heading"]}
        if "script" in slide1:
            combined_slide["script"] = slide1["script"]
        if "bullet_points" in slide2:
            combined_slide["bullet_points"] = slide2["bullet_points"]
        combined_obj["slides"].append(combined_slide)
    return combined_obj


def transform_list_of_bullets_to_string(slides):
    """
    The LLM returns the bulletpoints in the form of a nested list.
    This function transforms the list of bulletpoints (for each slide) into a markdown-formatted string.
    """
    for slide in slides:
        bullet_points = slide["bullet_points"]
        if isinstance(bullet_points, list):
            slide["bullet_points"] = list_to_markdown(bullet_points)
    return slides


def deduplicate_topic_outlines_objectives(topic_outlines: list[dict]):
    """
    Remove duplicate or similar objectives from a list of topic outlines.

    Args:
        topic_outlines (list[dict]): A list of dictionaries representing topic outlines.
            Each dictionary should have a key
            "objectives" containing a list of strings representing the objectives of the topic.
        embeddings (BedrockEmbeddings): An instance of the BedrockEmbeddings class used to vectorise the objectives.

    Returns:
        topic_outlines (list[dict]): A list of dictionaries representing the topic outlines
            with duplicate or similar objectives removed. Each dictionary will have a key "objectives"
            containing a list of strings representing the deduplicated objectives.
        removed_objectives (list[str]): A list of strings representing the objectives
            that were detected as similar / duplicates, and hence, were removed.
    """

    # Extract all objectives and flatten to a single list
    all_objectives = [o for to in topic_outlines for o in to["objectives"]]

    # TODO: need to review where to store this logic
    client = get_client("bedrock-runtime")

    embedding_model_id = get_settings().bedrock_embedding_model_id

    embeddings = BedrockEmbeddings(client=client, model_id=embedding_model_id)

    # Vectorise
    vec_objectives = embeddings.embed_documents(all_objectives)

    # Deduplicate
    deduplicated_objectives = remove_similarities(all_objectives, vec_objectives)

    removed_objectives = [
        obj for obj in all_objectives if obj not in deduplicated_objectives
    ]

    # Loop through each item in the original topic outlines
    for to in topic_outlines:
        # Create a new list of objectives that are in the deduplicated_objectives list
        new_objectives = []
        for objective in to["objectives"]:
            if objective in deduplicated_objectives:
                # Ensure that if 2 objectives are EXACTLY the same, only 1 is included in the output
                deduplicated_objectives.remove(objective)
                new_objectives.append(objective)
        if len(new_objectives) == 0:  # If all objectives removed
            new_objectives = [
                to["objectives"][0]
            ]  # Just maintain the original first objective from the topic
        # Replace the old objectives list with the new one
        to["objectives"] = new_objectives

    return topic_outlines, removed_objectives


def post_process_topic_outlines(
    topic_outlines: list[dict],
    relevant_topic_citations: list[list[dict]],
    low_relevancy_flags: list[bool] = None,
):
    # Iterate through all topics and apply relevant formatting
    for i, citations in enumerate(relevant_topic_citations):

        # Convert to string
        if isinstance(topic_outlines[i]["objectives"], list):
            topic_outlines[i]["objectives"] = list_to_markdown(
                topic_outlines[i]["objectives"]
            )

        # Append citations
        if "citations" not in topic_outlines[i]:
            topic_outlines[i]["citations"] = citations

        # Append relevancy flags (Warn users if no relevant chunks detected)
        if (
            "low_relevancy_flag" not in topic_outlines[i]
            and low_relevancy_flags is not None
        ):
            topic_outlines[i]["low_relevancy_flag"] = low_relevancy_flags[i]

        # Apply capitalisation of titles according to words in the objectives (sentence case)
        topic_outlines[i]["title"] = apply_sentence_case_to_title(
            topic_outlines[i]["title"], topic_outlines[i]["objectives"]
        )

    return topic_outlines


async def generate_topic_outlines(
    module_title: str,
    topic_descriptions_list: list[str],
    relevant_topic_citations: list[list[dict]],
    low_relevancy_flags: list[bool],
):

    logger.info("Generating topics")

    # Format a prompt to generate each topic outline
    topic_outline_prompts = make_topic_outline_prompts(
        module_title,
        topic_descriptions_list,
        relevant_topic_citations,
        TOPIC_OUTLINES_ONE_SHOT,
    )
    # Generate all responses (topic outlines)
    topic_outlines = run_concurrent_prompts(
        topic_outline_prompts, llama3_70b, is_json=True, style_guide_llm=llama3_70b
    )

    # Remove duplicates (compare with other topic outlines)
    topic_outlines, _ = deduplicate_topic_outlines_objectives(topic_outlines)

    # Apply post-processing
    topic_outlines = post_process_topic_outlines(
        topic_outlines,
        relevant_topic_citations,
        low_relevancy_flags,
    )

    logger.info("Topic outlines generated")
    return topic_outlines


async def generate_speaker_notes(
    generated_topic_outlines, relevant_topic_citations, topic_index
):

    logger.info("Generating speaker notes")
    # GENERATE SPEAKER NOTES------------------------------------------------------------------------
    # TODO: tech debt - in computing we start counting from 0

    # Make the prompt
    facilitator_speaker_notes_usr_prompt = make_facilitator_speaker_notes_usr_prompt(
        generated_topic_outlines, topic_index + 1, relevant_topic_citations
    )
    # Run the prompt
    facilitator_speaker_notes_json = run_json_prompt(
        llama_llm=llama3_70b,
        usr_prompt=facilitator_speaker_notes_usr_prompt,
        style_guide_llm=llama3_70b,
        sys_prompt=FACILITATOR_SPEAKER_NOTES_SYS_PROMPT,
        few_shots=SPEAKER_NOTES_ONE_SHOT,
    )
    logger.info("Speaker notes generated")
    return facilitator_speaker_notes_json


async def generate_facilitator_ppt(
    facilitator_speaker_notes_json, relevant_topic_citations
):
    logger.info("Generating Facilitator powerpoint")
    # Make the prompt
    facilitator_slides_bullets_usr_prompt = make_facilitator_slides_bullets_usr_prompt(
        facilitator_speaker_notes_json
    )
    # Run the prompt
    facilitator_slides_bullets_json = run_json_prompt(
        llama_llm=llama3_70b,
        usr_prompt=facilitator_slides_bullets_usr_prompt,
        style_guide_llm=llama3_70b,
        sys_prompt=FACILITATOR_SLIDES_BULLETS_SYS_PROMPT,
        few_shots=FACILITATOR_SLIDES_BULLETS_ONE_SHOT,
    )
    # Post-process to ensure string formatting
    facilitator_slides_bullets_json["slides"] = transform_list_of_bullets_to_string(
        facilitator_slides_bullets_json["slides"]
    )
    # Combine with speaker notes
    facilitator_pptx_json = combine_script_and_bullets(
        facilitator_speaker_notes_json, facilitator_slides_bullets_json
    )
    # Post-process to apply capitalisation of headings
    capital_context = "\n".join(
        [
            slide["script"] + "\n" + slide["bullet_points"]
            for slide in facilitator_pptx_json["slides"]
        ]
    )
    facilitator_pptx_json = capitalise_script_headings(
        facilitator_pptx_json, capital_context
    )
    # Append citations to output before returning to frontend (UI)
    facilitator_pptx_json["citations"] = relevant_topic_citations
    logger.info("Facilitator powerpoint generated")
    return facilitator_pptx_json


async def generate_knowledge_check_from_list_of_scripts(
    list_of_scripts_json, topic_outline
):
    logger.info("Entered generate_knowledge_check_from_list_of_scripts")

    topic_outline["objectives"] = markdown_to_list(topic_outline["objectives"])

    contexts, knowledge_check_usr_prompt = make_kc_usr_prompt_from_list_of_scripts(
        list_of_scripts_json, topic_outline["objectives"]
    )

    logger.info("Attempting to run_json_prompt")
    knowledge_check_json = run_json_prompt(
        llama_llm=llama3_70b,
        usr_prompt=knowledge_check_usr_prompt,
        sys_prompt=KNOWLEDGE_CHECK_SYS_PROMPT,
        style_guide_llm=llama3_70b,
    )

    # Post-process to shuffle the answers (avoid answer always 'B')
    knowledge_check_json = shuffle_kc_choices(knowledge_check_json)

    for question_set in knowledge_check_json["questions"]:
        if isinstance(question_set["choices"], list):
            question_set["choices"] = list_to_markdown(
                question_set["choices"]
            )  # Convert to string

    knowledge_check_json["contexts"] = contexts
    logger.info("Knowledge check generated")
    return knowledge_check_json
