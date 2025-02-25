def test_markdown_to_list_already_list():
    """✅ Test case when markdown input is already a list"""
    input_data = ["Point 1", ["Subpoint 1.1", "Subpoint 1.2"], "Point 2"]
    assert markdown_to_list(input_data) == input_data  # ✅ Should return the same list



@patch("model.generate_core_content.run_json_prompt")
@patch("model.generate_core_content.make_kc_usr_prompt_from_list_of_scripts")
async def test_generate_knowledge_check_from_list_of_scripts(mock_make_kc, mock_run):
    """✅ Test case for generating a knowledge check from scripts"""

    mock_make_kc.return_value = (
        ["context1", "context2"],  # ✅ Simulated contexts
        "Generate a knowledge check based on these contexts.",  # ✅ Simulated user prompt
    )

    mock_run.return_value = {
        "questions": [
            {
                "question": "What is AI?",
                "choices": ["A. A robot", "B. A field of study", "C. A database"],
                "answer": "B",
            }
        ]
    }

    list_of_scripts_json = [{"text": "AI is a field of study"}]
    topic_outline = {"objectives": ["Define AI"]}

    result = await generate_knowledge_check_from_list_of_scripts(
        list_of_scripts_json, topic_outline
    )

    assert "questions" in result
    assert isinstance(result["questions"], list)  # ✅ Questions should be a list
    assert "contexts" in result
    assert result["contexts"] == ["context1", "context2"]  # ✅ Should return contexts