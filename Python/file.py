from model.content_creation_funcs import run_concurrent_prompts
from model.generate_core_content import (
    markdown_to_list,
    deduplicate_topic_outlines_objectives,
    post_process_topic_outlines,
)
from model.ai_models_config import llama3_70b
from model.scenario1_prompts import (
    make_topic_outline_prompts,
    ONE_SHOT_TOPIC_OUTLINES_USR_PROMPT,
    ONE_SHOT_TOPIC_OUTLINES_OUTPUT,
    ONE_SHOT_TOPIC_OUTLINES_USR_PROMPT_2,
    ONE_SHOT_TOPIC_OUTLINES_OUTPUT_2,
)

# Define constants
TOPIC_OUTLINES_ONE_SHOT = [
    llama3_70b.format_one_shot(
        ONE_SHOT_TOPIC_OUTLINES_USR_PROMPT, ONE_SHOT_TOPIC_OUTLINES_OUTPUT
    ),
    llama3_70b.format_one_shot(
        ONE_SHOT_TOPIC_OUTLINES_USR_PROMPT_2, ONE_SHOT_TOPIC_OUTLINES_OUTPUT_2
    ),
]


async def regenerate_topic_outline(
    topic_outlines,
    module_title,
    topic_descriptions_list,
    relevant_topic_citations,
    topic_index,
):

    # Ensure topic outlines have objectives as list (not markdown)
    for to in topic_outlines:
        if isinstance(to["objectives"], str):
            to["objectives"] = markdown_to_list(to["objectives"])

    # Format a prompt to generate each topic outline
    topic_outline_prompts = make_topic_outline_prompts(
        module_title,
        topic_descriptions_list,
        relevant_topic_citations,
        TOPIC_OUTLINES_ONE_SHOT,
    )

    # Pick out the prompt for the single topic to regenerate
    regen_topic_outline_prompt = [topic_outline_prompts[topic_index]]

    # Regenerate response for the topic
    regenerated_topic_outline = run_concurrent_prompts(
        regen_topic_outline_prompt, llama3_70b, is_json=True, style_guide_llm=llama3_70b
    )[0]

    # Replace the topic outline that we regenerated
    topic_outlines[topic_index] = regenerated_topic_outline

    # Remove duplicates (compare with other topic outlines)
    topic_outlines, _ = deduplicate_topic_outlines_objectives(topic_outlines)

    # Apply post-processing
    topic_outlines = post_process_topic_outlines(
        topic_outlines,
        relevant_topic_citations,
    )

    renegerated_topic_outline = topic_outlines[topic_index]
    return renegerated_topic_outline
