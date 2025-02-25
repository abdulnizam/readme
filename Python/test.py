@pytest.fixture(autouse=True)
def mock_functions():
    with patch("controller.routes.get_content_for_methods") as mock_get_content, \
         patch("controller.routes.fetch_relevant_chunks") as mock_fetch_chunks, \
         patch("controller.routes.generate_topic_outlines") as mock_generate_topics, \
         patch("controller.routes.generate_speaker_notes") as mock_generate_speaker_notes, \
         patch("controller.routes.generate_facilitator_ppt") as mock_generate_facilitator_ppt, \
         patch("controller.routes.generate_knowledge_check_from_list_of_scripts") as mock_generate_knowledge_check, \
         patch("controller.routes.regenerate_topic_outline") as mock_regenerate_topic_outline, \
         patch("controller.routes.shorten_speaker_notes") as mock_shorten_notes, \
         patch("controller.routes.elaborate_speaker_notes") as mock_elaborate_notes, \
         patch("controller.routes.more_formal_speaker_notes") as mock_more_formal_notes, \
         patch("controller.routes.less_formal_speaker_notes") as mock_less_formal_notes, \
         patch("controller.routes.harder_knowledge_check_multi_answer") as mock_harder_multi, \
         patch("controller.routes.easier_knowledge_check_true_false") as mock_true_false, \
         patch("controller.routes.knowledge_check_case_study") as mock_case_study, \
         patch("controller.routes.shorten_bullet_points") as mock_shorten_bullets, \
         patch("controller.routes.knowledge_check_add_question") as mock_add_question:
        
        mock_get_content.return_value = {"name": "Module 1", "topics": ["Topic 1", "Topic 2"]}
        mock_fetch_chunks.return_value = {"Relevant chunk citations: ": {"relevant_chunks": ["Citation 1", "Citation 2"]}}
        mock_generate_topics.return_value = [{"title": "Generated Topic", "objectives": "Some objectives"}]
        mock_generate_speaker_notes.return_value = {"slides": [{"heading": "Slide 1", "script": "Speaker notes"}]}
        mock_generate_facilitator_ppt.return_value = {"slides": [{"heading": "Slide 1", "script": "Speaker notes", "bullet_points": "Bullets"}]}
        mock_generate_knowledge_check.return_value = {"questions": [{"question": "What is AI?", "choices": ["A", "B", "C"], "answer": "A"}]}
        mock_regenerate_topic_outline.return_value = {"title": "Regenerated Topic", "objectives": "Updated Objectives"}
        mock_shorten_notes.return_value = {"slides": [{"heading": "Slide 1", "script": "Shortened Speaker Notes"}]}
        mock_shorten_bullets.return_value = {"bullet_points": "- AI basics"}
        mock_elaborate_notes.return_value = {"slides": [{"heading": "Slide 1", "script": "Elaborated Speaker Notes"}]}
        mock_more_formal_notes.return_value = {"slides": [{"heading": "Slide 1", "script": "More Formal Notes"}]}
        mock_less_formal_notes.return_value = {"slides": [{"heading": "Slide 1", "script": "Less Formal Notes"}]}
        mock_harder_multi.return_value = {"question": "Multi-choice question", "choices": ["A", "B", "C"], "answer": "A"}
        mock_true_false.return_value = {"question": "Is AI real?", "choices": ["True", "False"], "answer": "True"}
        mock_case_study.return_value = {"question": "Case Study Question", "choices": ["Option 1", "Option 2"], "answer": "Option 1"}
        mock_add_question.return_value = {"question": "New Question", "choices": ["X", "Y"], "answer": "X"}

        yield