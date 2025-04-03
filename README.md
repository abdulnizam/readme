Traceback (most recent call last):
  File "/app/app.py", line 11, in <module>
    from functions.searchresponse import generate_response
  File "/app/functions/searchresponse.py", line 43, in <module>
    llm = AzureChatOpenAI(
        azure_endpoint=os.getenv("AZOPENAI_API_ENDPOINT"),
    ...<4 lines>...
        temperature=0,
    )
  File "/usr/local/lib/python3.13/site-packages/langchain_core/load/serializable.py", line 125, in __init__
    super().__init__(*args, **kwargs)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
  File "/usr/local/lib/python3.13/site-packages/pydantic/main.py", line 243, in __init__
    validated_self = self.__pydantic_validator__.validate_python(data, self_instance=self)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/usr/local/lib/python3.13/site-packages/pydantic/_internal/_mock_val_ser.py", line 100, in __getattr__
    raise PydanticUserError(self._error_message, code=self._code)
pydantic.errors.PydanticUserError: `AzureChatOpenAI` is not fully defined; you should define `BaseCache`, then call `AzureChatOpenAI.model_rebuild()`.
For further information visit https://errors.pydantic.dev/2.11/u/class-not-fully-defined



import logging
import os
import datetime

from dotenv import load_dotenv
from openai import OpenAIError

from langchain.chains import (
    create_history_aware_retriever,
    create_retrieval_chain,
)
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import (
    ChatPromptTemplate,
    MessagesPlaceholder,
)
from langchain_core.messages import HumanMessage
from langchain_openai import AzureChatOpenAI

from modules.errors import handle_openai_error, handle_other_error
from modules.extended_azure_ai_search import ExtendedAzureAISearchRetriever
from modules.dwp_ask_config import DWPAskConfig

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Load environment variables
load_dotenv()
ais_vars = {}
ais_vars["CONTENT"] = os.getenv("FIELDS_CONTENT")
ais_vars["INDEX_NAME"] = os.getenv("AIS_INDEX_NM")
ais_vars["TITLE_FIELD"] = os.getenv("FIELDS_TITLE")
ais_vars["URL_FIELD"] = os.getenv("FIELDS_URL")
ais_vars["ENDPOINT"] = os.getenv("AIS_ENDP")
ais_vars["API_KEY"] = os.getenv("AIS_KEY")
ais_vars["SEMANTIC_CONFIG"] = os.getenv("AIS_SEMANTIC_CONFIG")
os.environ["AZURE_AI_SEARCH_SERVICE_NAME"] = ais_vars["ENDPOINT"]
os.environ["AZURE_AI_SEARCH_INDEX_NAME"] = ais_vars["INDEX_NAME"]
os.environ["AZURE_AI_SEARCH_API_KEY"] = ais_vars["API_KEY"]


# initialise LLM
llm = AzureChatOpenAI(
    azure_endpoint=os.getenv("AZOPENAI_API_ENDPOINT"),
    azure_deployment=os.getenv("AZOPENAI_DEP_NAME"),
    openai_api_key=os.getenv("AZOPENAI_API_KEY"),
    openai_api_type=os.getenv("AZOPENAI_API_TYPE"),
    openai_api_version=os.getenv("AZOPENAI_API_VERSION"),
    temperature=0,
)


def convert_chat_history(chat_history):
    """
    Converts chat history from the following form (which we pass to/from backend):
    [
        {
            "question": user_input,
            "answer": text_response,
            "citations": citations,
            "timestamp": datetime.now().isoformat(),
        }
    ]

    to a langchain-processable form (using HumanMessage format, which cannot be json serialized)
    """

    langchain_chat_history = []
    for chat in chat_history:
        question = chat[0]
        answer = chat[1]
        langchain_chat_history.extend([HumanMessage(content=question), answer])
    return langchain_chat_history


def remove_bold_markdown(input_string):
    """
    Remove bold markdown formatting from a given input string.

    Args:
        input_string (str): The input string containing bold markdown formatting.

    Returns:
        str: The input string with the bold markdown formatting removed.
    """

    return input_string.replace("**", "")


def remove_missing_glossary_terms(text):
    """
    Remove glossary terms that are not present in the main content of the text.
    Needed as sometimes the model gives abbreviations from the context, instead of the output.

    Args:
        text (str): The input text containing main content and glossary.

    Returns:
        str: The updated text with glossary terms removed if they aren't present in main content.
    """

    # Check for presence of glossary
    glossary_id = "### Glossary"
    if glossary_id in text:
        # Split the text into the main content and the glossary
        main_content, glossary = text.split("### Glossary")

        # Split the glossary into individual terms
        glossary_terms = [term.strip() for term in glossary.split("- ")]

        # Remove terms from the glossary if they are not present in the main content
        updated_glossary = ""
        for term in glossary_terms:
            if term != "":
                if term.split(":")[0].strip().lower() in main_content.lower():
                    updated_glossary += "- " + term + "\n"

        if updated_glossary != "":  # If terms remain in glossary
            # Combine the main content and updated glossary
            updated_text = main_content + "### Glossary\n" + updated_glossary
        else:
            updated_text = main_content

        return updated_text

    return text


def remove_trailing_newlines(text):
    """Removes trailing newlines from the input text.

    Args:
        text (str): The input text from which trailing newlines are to be removed.

    Returns:
        str: The input text with trailing newlines removed."""

    while text.endswith("\n"):
        text = text[:-1]
    return text


def post_process_response(
    citations, ai_answer, no_documents_in_context_response_string
):
    """
    Post-process the answer by first checking presence of Documents.
    Return a default answer if 0 Documents are used as context for answer generation.
    Then post-process the AI generated answer by removing bold markdown, missing glossary terms, and trailing newlines

    Args:
        citations (list): A list of document contexts containing metadata and page content.
        ai_answer (str): The AI-generated answer that needs to be post-processed.
        no_documents_in_context_response_string (str): The response string to return when there are 0 Documents used as context for answer generation.

    Returns:
        str: The post-processed answer
    """

    if (
        not citations
    ):  # Checks if there are no Documents in the citations returned by AI Search.
        # Only executes in edge cases where ALL documents have been removed by country-specific pre-processing.
        # Or executes when 0 Documents are returned by AI Search because of the question.
        logger.warning("DWPASK-BE-SR-06")
        answer = no_documents_in_context_response_string
    else:  # Apply post-processing functions
        answer_no_bold = remove_bold_markdown(ai_answer)
        answer = remove_missing_glossary_terms(answer_no_bold)
        answer = remove_trailing_newlines(answer)

    return answer


def format_citations(contexts):
    """
    Group citations based on policy title and combine chunks into a single string.

    Args:
        contexts (list): A list of document contexts containing metadata and page content.

    Returns:
        list: A list of formatted citations with combined chunks and metadata.
    """
    citations = {}

    # Iterate through contexts and group based on title
    for document in contexts:
        policy_title = document.metadata["policy_title"]
        policy_url = document.metadata["policy_url"]
        raw_hybrid_search_document_chunk_relevance_score = document.metadata[
            "@search.score"
        ]
        semantic_reranker_document_chunk_relevance_score = document.metadata[
            "@search.rerankerScore"
        ]
        page_content = document.page_content

        if policy_title in citations:
            citations[policy_title]["chunks"].append(page_content)
        else:
            citations[policy_title] = {
                "title": policy_title,
                "url": policy_url,
                "chunks": [page_content],
                "raw_hybrid_search_document_chunk_relevance_score": raw_hybrid_search_document_chunk_relevance_score,
                "semantic_reranker_document_chunk_relevance_score": semantic_reranker_document_chunk_relevance_score,
            }

    # Combine chunks into a single string, adding extract titles
    formatted_citations = []
    for citation in citations.values():
        combined_chunks = ""
        for i, chunk in enumerate(citation["chunks"]):
            # Avoid breaking markdown in extracts
            if not chunk.startswith(("#", "*", "-", "1", "|")):
                chunk = "..." + chunk  # Indicate continuation
            if i == 0:
                combined_chunks += f"# Extract {i+1}:\n{chunk} ..."
            else:
                combined_chunks += f"\n\n\n# Extract {i+1}:\n{chunk} ..."
        citation["chunks"] = combined_chunks
        formatted_citations.append(citation)

    return formatted_citations


def get_current_date():
    """
    Get the current date formatted as a string.
    This function retrieves the current date and formats it in the following
    format: 'DayOfWeek Day Month Year'. For example, 'Thursday 13 February 2025'

    Returns:
        str: A string representing the current date in the specified format.
    """

    try:
        # Get the current date and format it
        current_date = datetime.datetime.now().strftime("%A %d %B %Y")

        return current_date
    
    except Exception as e:
        # Catch any Exception and return current date as an empty string in case of any problem
        logger.warning("ERROR GETTING CURRENT DATE")
        logger.warning(e)

        return ""


def invoke_response(
    rag_chain, question, history, country_prompt, format_prompt, current_date
):
    """
    Invoke a RAG response from the LLM, based on the input question and chat history.

    Args:
        rag_chain (RAGChain): The RAG chain to be invoked.
        question (str): The input question to be processed by the model.
        history (list): The chat history to provide context for the model.
        country_prompt (str): The prompt related to the country for the model.
        format_prompt (str): The prompt related to the format instructions for the model.

    Returns:
        tuple: A tuple containing the citations extracted and the AI answer generated by the model.
    """
    logger.info("DWPASK-BE-SR-03")
    try:
        ai_response = rag_chain.invoke(
            {
                "input": question,
                "chat_history": history,
                "country_prompt": country_prompt,
                "format_instructions": format_prompt,
                "current_date": current_date,
            }
        )
        citations = format_citations(ai_response["context"])
        ai_answer = ai_response["answer"]
    except OpenAIError as e:
        logger.error("OPEN AI ERROR")
        logger.error(e)
        handle_openai_error(e)
    # Some errors just come back as "Exception" - no specific error types
    except Exception as e:  # pylint: disable=broad-except
        logger.error("STANDARD ERROR")
        logger.error(e)
        handle_other_error(e)
    logger.info("DWPASK-BE-SR-04")
    return citations, ai_answer


def generate_response(question, chat_history, config: DWPAskConfig, location=None):
    """
    Generates a response to a prompt based on the chat history and user input.
    """
    logger.info("DWPASK-BE-SR-01")

    # Initialise citation relevance threshold
    citation_relevance_threshold = float(config.citation_relevance_threshold)

    # Initialise retriever (with location)
    retriever = ExtendedAzureAISearchRetriever(
        content_key=ais_vars["CONTENT"],
        top_k=3,
        index_name=ais_vars["INDEX_NAME"],
        semantic_search=True,
        semantic_configuration=ais_vars["SEMANTIC_CONFIG"],
        location=location,
        citation_relevance_threshold=citation_relevance_threshold,
    )

    # Initialise prompts
    qa_system_prompt = config.qa_system_prompt
    format_prompt = config.format_prompt
    contextualize_q_system_prompt = config.contextualize_q_system_prompt

    # Initialise default response string when 0 documents are used as context for the AI generated answer
    no_documents_in_context_response_string = (
        config.no_documents_in_context_response_string
    )

    # Initialise current date
    # Current date is just used to be passed in to the system prompt via invoke_response() as {current_date}
    # This is to give the AI model extra context on 'today's date' at runtime
    current_date = get_current_date()

    # Remove duplicate Qs from history
    chat_history_unique = []
    if len(chat_history) > 0:
        chat_history_unique = set(
            # Only use prev 2 Q&A chats (avoid hitting token limit) now using 1 only to address ITHC LLM Poisoning ticket
            [(dic["question"], dic["answer"]) for dic in chat_history[-1:]]
        )
    # Convert chat history so langchain can process it
    langchain_history = convert_chat_history(chat_history_unique)

    # Contextualize question
    contextualize_q_prompt = ChatPromptTemplate.from_messages(
        [
            ("system", contextualize_q_system_prompt),
            MessagesPlaceholder("chat_history"),
            ("human", "{input}"),
        ]
    )
    history_aware_retriever = create_history_aware_retriever(
        llm, retriever, contextualize_q_prompt
    )

    # Set country specific prompts based on claimant location value passed in from the front end
    if location:
        location = location.lower()
        if location in {
            country.lower() for country in config.countries
        }:  # Check an allowable country was specified
            country_prompt = f"""
            **IMPORTANT**: The claimant’s country of residence is **{location.capitalize()}**.
            Where information in your output is unique to guidance or policy which applies in {location.capitalize()}, ensure that this is made clear.
            """
        else:  # otherwise, default to UK
            country_prompt = """
            **IMPORTANT**: The claimant’s country of residence is in the United Kingdom.
            Where information in your response is unique to an individual country's guidance or policy, ensure that this is made clear.
            """
    else:
        country_prompt = ""

    qa_prompt = ChatPromptTemplate.from_messages(
        [
            ("system", qa_system_prompt),
            MessagesPlaceholder("chat_history"),
            ("human", "{input}"),
        ]
    )

    question_answer_chain = create_stuff_documents_chain(llm, qa_prompt)
    rag_chain = create_retrieval_chain(history_aware_retriever, question_answer_chain)

    citations, ai_answer = invoke_response(
        rag_chain,
        question,
        langchain_history,
        country_prompt,
        format_prompt,
        current_date,
    )

    # 1 Attempt to regen answer if model says "I don't know" or "I do not have..." or "I'm sorry..." on 1st invocation
    if ai_answer.lower().startswith("i do") or ai_answer.lower().startswith("i'm"):
        logger.info("DWPASK-BE-SR-05")
        # Update chat_history - changing the history will lead to a different response
        answer = post_process_response(
            citations, ai_answer, no_documents_in_context_response_string
        )
        langchain_history.extend([HumanMessage(content=question), answer])
        # Invoke the model (retry the question)
        citations, ai_answer = invoke_response(
            rag_chain,
            question,
            langchain_history,
            country_prompt,
            format_prompt,
            current_date,
        )

    answer = post_process_response(
        citations, ai_answer, no_documents_in_context_response_string
    )
    logger.info("DWPASK-BE-SR-02")
    return (answer, citations)
