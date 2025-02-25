    AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src/controller/routes.py'> does not have the attribute 'generate_knowledge_check_for_facilitator_powerpoint'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
_______________________________________________________ ERROR at setup of test_router_generate_knowledge_check_500 _______________________________________________________

    @pytest.fixture(autouse=True)
    def mock_functions():
>       with patch("controller.routes.get_content_for_methods") as mock_get_content, \
                patch("controller.routes.fetch_relevant_chunks") as mock_fetch_chunks, \
                patch("controller.routes.generate_topic_outlines") as mock_generate_topics, \
                patch("controller.routes.generate_speaker_notes") as mock_generate_speaker_notes, \
                patch("controller.routes.generate_facilitator_ppt") as mock_generate_facilitator_ppt, \
                patch("controller.routes.generate_knowledge_check_for_facilitator_powerpoint") as mock_generate_knowledge_check, \
                patch("controller.routes.regenerate_topic_outline") as mock_regenerate_topic_outline, \
                patch("controller.routes.shorten_speaker_notes") as mock_shorten_notes, \
                patch("controller.routes.elaborate_speaker_notes") as mock_elaborate_notes, \
                patch("controller.routes.more_formal_speaker_notes") as mock_more_formal_notes, \
                patch("controller.routes.less_formal_speaker_notes") as mock_less_formal_notes, \
                patch("controller.routes.harder_knowledge_check_multi_answer") as mock_harder_multi, \
                patch("controller.routes.easier_knowledge_check_true_false") as mock_true_false, \
                patch("controller.routes.knowledge_check_case_study") as mock_case_study, \
                patch("controller.routes.shorten_bullet_points") as mock_shorten_bullets, \
                patch("controller.routes.knowledge_check_add_question") as mock_add_question:  # noqa: E501

tests/test_routes.py:20: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x16c2b3010>

    def get_original(self):
        target = self.getter()
        name = self.attribute
    
        original = DEFAULT
        local = False
    
        try:
            original = target.__dict__[name]
        except (AttributeError, KeyError):
            original = getattr(target, name, DEFAULT)
        else:
            local = True
    
        if name in _builtins and isinstance(target, ModuleType):
            self.create = True
    
        if not self.create and original is DEFAULT:
>           raise AttributeError(
                "%s does not have the attribute %r" % (target, name)
            )
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src/controller/routes.py'> does not have the attribute 'generate_knowledge_check_for_facilitator_powerpoint'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
_______________________________________________________ ERROR at setup of test_router_generate_knowledge_check_400 _______________________________________________________

    @pytest.fixture(autouse=True)
    def mock_functions():
>       with patch("controller.routes.get_content_for_methods") as mock_get_content, \
                patch("controller.routes.fetch_relevant_chunks") as mock_fetch_chunks, \
                patch("controller.routes.generate_topic_outlines") as mock_generate_topics, \
                patch("controller.routes.generate_speaker_notes") as mock_generate_speaker_notes, \
                patch("controller.routes.generate_facilitator_ppt") as mock_generate_facilitator_ppt, \
                patch("controller.routes.generate_knowledge_check_for_facilitator_powerpoint") as mock_generate_knowledge_check, \
                patch("controller.routes.regenerate_topic_outline") as mock_regenerate_topic_outline, \
                patch("controller.routes.shorten_speaker_notes") as mock_shorten_notes, \
                patch("controller.routes.elaborate_speaker_notes") as mock_elaborate_notes, \
                patch("controller.routes.more_formal_speaker_notes") as mock_more_formal_notes, \
                patch("controller.routes.less_formal_speaker_notes") as mock_less_formal_notes, \
                patch("controller.routes.harder_knowledge_check_multi_answer") as mock_harder_multi, \
                patch("controller.routes.easier_knowledge_check_true_false") as mock_true_false, \
                patch("controller.routes.knowledge_check_case_study") as mock_case_study, \
                patch("controller.routes.shorten_bullet_points") as mock_shorten_bullets, \
                patch("controller.routes.knowledge_check_add_question") as mock_add_question:  # noqa: E501

tests/test_routes.py:20: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x13cf744d0>

    def get_original(self):
        target = self.getter()
        name = self.attribute
    
        original = DEFAULT
        local = False
    
        try:
            original = target.__dict__[name]
        except (AttributeError, KeyError):
            original = getattr(target, name, DEFAULT)
        else:
            local = True
    
        if name in _builtins and isinstance(target, ModuleType):
            self.create = True
    
        if not self.create and original is DEFAULT:
>           raise AttributeError(
                "%s does not have the attribute %r" % (target, name)
            )
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src/controller/routes.py'> does not have the attribute 'generate_knowledge_check_for_facilitator_powerpoint'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
______________________________________________________ ERROR at setup of test_router_reprompt_shorter_speaker_notes ______________________________________________________

    @pytest.fixture(autouse=True)
    def mock_functions():
>       with patch("controller.routes.get_content_for_methods") as mock_get_content, \
                patch("controller.routes.fetch_relevant_chunks") as mock_fetch_chunks, \
                patch("controller.routes.generate_topic_outlines") as mock_generate_topics, \
                patch("controller.routes.generate_speaker_notes") as mock_generate_speaker_notes, \
                patch("controller.routes.generate_facilitator_ppt") as mock_generate_facilitator_ppt, \
                patch("controller.routes.generate_knowledge_check_for_facilitator_powerpoint") as mock_generate_knowledge_check, \
                patch("controller.routes.regenerate_topic_outline") as mock_regenerate_topic_outline, \
                patch("controller.routes.shorten_speaker_notes") as mock_shorten_notes, \
                patch("controller.routes.elaborate_speaker_notes") as mock_elaborate_notes, \
                patch("controller.routes.more_formal_speaker_notes") as mock_more_formal_notes, \
                patch("controller.routes.less_formal_speaker_notes") as mock_less_formal_notes, \
                patch("controller.routes.harder_knowledge_check_multi_answer") as mock_harder_multi, \
                patch("controller.routes.easier_knowledge_check_true_false") as mock_true_false, \
                patch("controller.routes.knowledge_check_case_study") as mock_case_study, \
                patch("controller.routes.shorten_bullet_points") as mock_shorten_bullets, \
                patch("controller.routes.knowledge_check_add_question") as mock_add_question:  # noqa: E501

tests/test_routes.py:20: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x16c248e50>

    def get_original(self):
        target = self.getter()
        name = self.attribute
    
        original = DEFAULT
        local = False
    
        try:
            original = target.__dict__[name]
        except (AttributeError, KeyError):
            original = getattr(target, name, DEFAULT)
        else:
            local = True
    
        if name in _builtins and isinstance(target, ModuleType):
            self.create = True
    
        if not self.create and original is DEFAULT:
>           raise AttributeError(
                "%s does not have the attribute %r" % (target, name)
            )
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src/controller/routes.py'> does not have the attribute 'generate_knowledge_check_for_facilitator_powerpoint'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
_ ERROR at setup of test_router_reprompt_speaker_notes[elaborate-controller.routes.elaborate_speaker_notes-controller.routes.elaborate_bullet_points-Elaborated Speaker Notes-Detailed Bullet Points] _

    @pytest.fixture(autouse=True)
    def mock_functions():
>       with patch("controller.routes.get_content_for_methods") as mock_get_content, \
                patch("controller.routes.fetch_relevant_chunks") as mock_fetch_chunks, \
                patch("controller.routes.generate_topic_outlines") as mock_generate_topics, \
                patch("controller.routes.generate_speaker_notes") as mock_generate_speaker_notes, \
                patch("controller.routes.generate_facilitator_ppt") as mock_generate_facilitator_ppt, \
                patch("controller.routes.generate_knowledge_check_for_facilitator_powerpoint") as mock_generate_knowledge_check, \
                patch("controller.routes.regenerate_topic_outline") as mock_regenerate_topic_outline, \
                patch("controller.routes.shorten_speaker_notes") as mock_shorten_notes, \
                patch("controller.routes.elaborate_speaker_notes") as mock_elaborate_notes, \
                patch("controller.routes.more_formal_speaker_notes") as mock_more_formal_notes, \
                patch("controller.routes.less_formal_speaker_notes") as mock_less_formal_notes, \
                patch("controller.routes.harder_knowledge_check_multi_answer") as mock_harder_multi, \
                patch("controller.routes.easier_knowledge_check_true_false") as mock_true_false, \
                patch("controller.routes.knowledge_check_case_study") as mock_case_study, \
                patch("controller.routes.shorten_bullet_points") as mock_shorten_bullets, \
                patch("controller.routes.knowledge_check_add_question") as mock_add_question:  # noqa: E501

tests/test_routes.py:20: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x16c2b8b90>

    def get_original(self):
        target = self.getter()
        name = self.attribute
    
        original = DEFAULT
        local = False
    
        try:
            original = target.__dict__[name]
        except (AttributeError, KeyError):
            original = getattr(target, name, DEFAULT)
        else:
            local = True
    
        if name in _builtins and isinstance(target, ModuleType):
            self.create = True
    
        if not self.create and original is DEFAULT:
>           raise AttributeError(
                "%s does not have the attribute %r" % (target, name)
            )
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src/controller/routes.py'> does not have the attribute 'generate_knowledge_check_for_facilitator_powerpoint'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
_ ERROR at setup of test_router_reprompt_speaker_notes[more-professional-controller.routes.more_formal_speaker_notes-controller.routes.more_formal_bullet_points-More Professional Speaker Notes-Professional Bullet Points] _

    @pytest.fixture(autouse=True)
    def mock_functions():
>       with patch("controller.routes.get_content_for_methods") as mock_get_content, \
                patch("controller.routes.fetch_relevant_chunks") as mock_fetch_chunks, \
                patch("controller.routes.generate_topic_outlines") as mock_generate_topics, \
                patch("controller.routes.generate_speaker_notes") as mock_generate_speaker_notes, \
                patch("controller.routes.generate_facilitator_ppt") as mock_generate_facilitator_ppt, \
                patch("controller.routes.generate_knowledge_check_for_facilitator_powerpoint") as mock_generate_knowledge_check, \
                patch("controller.routes.regenerate_topic_outline") as mock_regenerate_topic_outline, \
                patch("controller.routes.shorten_speaker_notes") as mock_shorten_notes, \
                patch("controller.routes.elaborate_speaker_notes") as mock_elaborate_notes, \
                patch("controller.routes.more_formal_speaker_notes") as mock_more_formal_notes, \
                patch("controller.routes.less_formal_speaker_notes") as mock_less_formal_notes, \
                patch("controller.routes.harder_knowledge_check_multi_answer") as mock_harder_multi, \
                patch("controller.routes.easier_knowledge_check_true_false") as mock_true_false, \
                patch("controller.routes.knowledge_check_case_study") as mock_case_study, \
                patch("controller.routes.shorten_bullet_points") as mock_shorten_bullets, \
                patch("controller.routes.knowledge_check_add_question") as mock_add_question:  # noqa: E501

tests/test_routes.py:20: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x16c201250>

    def get_original(self):
        target = self.getter()
        name = self.attribute
    
        original = DEFAULT
        local = False
    
        try:
            original = target.__dict__[name]
        except (AttributeError, KeyError):
            original = getattr(target, name, DEFAULT)
        else:
            local = True
    
        if name in _builtins and isinstance(target, ModuleType):
            self.create = True
    
        if not self.create and original is DEFAULT:
>           raise AttributeError(
                "%s does not have the attribute %r" % (target, name)
            )
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src/controller/routes.py'> does not have the attribute 'generate_knowledge_check_for_facilitator_powerpoint'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
_ ERROR at setup of test_router_reprompt_speaker_notes[more-casual-controller.routes.less_formal_speaker_notes-controller.routes.less_formal_bullet_points-More Casual Speaker Notes-Casual Bullet Points] _

    @pytest.fixture(autouse=True)
    def mock_functions():
>       with patch("controller.routes.get_content_for_methods") as mock_get_content, \
                patch("controller.routes.fetch_relevant_chunks") as mock_fetch_chunks, \
                patch("controller.routes.generate_topic_outlines") as mock_generate_topics, \
                patch("controller.routes.generate_speaker_notes") as mock_generate_speaker_notes, \
                patch("controller.routes.generate_facilitator_ppt") as mock_generate_facilitator_ppt, \
                patch("controller.routes.generate_knowledge_check_for_facilitator_powerpoint") as mock_generate_knowledge_check, \
                patch("controller.routes.regenerate_topic_outline") as mock_regenerate_topic_outline, \
                patch("controller.routes.shorten_speaker_notes") as mock_shorten_notes, \
                patch("controller.routes.elaborate_speaker_notes") as mock_elaborate_notes, \
                patch("controller.routes.more_formal_speaker_notes") as mock_more_formal_notes, \
                patch("controller.routes.less_formal_speaker_notes") as mock_less_formal_notes, \
                patch("controller.routes.harder_knowledge_check_multi_answer") as mock_harder_multi, \
                patch("controller.routes.easier_knowledge_check_true_false") as mock_true_false, \
                patch("controller.routes.knowledge_check_case_study") as mock_case_study, \
                patch("controller.routes.shorten_bullet_points") as mock_shorten_bullets, \
                patch("controller.routes.knowledge_check_add_question") as mock_add_question:  # noqa: E501

tests/test_routes.py:20: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x16c23fd90>

    def get_original(self):
        target = self.getter()
        name = self.attribute
    
        original = DEFAULT
        local = False
    
        try:
            original = target.__dict__[name]
        except (AttributeError, KeyError):
            original = getattr(target, name, DEFAULT)
        else:
            local = True
    
        if name in _builtins and isinstance(target, ModuleType):
            self.create = True
    
        if not self.create and original is DEFAULT:
>           raise AttributeError(
                "%s does not have the attribute %r" % (target, name)
            )
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src/controller/routes.py'> does not have the attribute 'generate_knowledge_check_for_facilitator_powerpoint'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
____________________ ERROR at setup of test_router_reprompt_speaker_notes_exceptions[invalid-type-500-An error occured in regenerating speaker notes] ____________________

    @pytest.fixture(autouse=True)
    def mock_functions():
>       with patch("controller.routes.get_content_for_methods") as mock_get_content, \
                patch("controller.routes.fetch_relevant_chunks") as mock_fetch_chunks, \
                patch("controller.routes.generate_topic_outlines") as mock_generate_topics, \
                patch("controller.routes.generate_speaker_notes") as mock_generate_speaker_notes, \
                patch("controller.routes.generate_facilitator_ppt") as mock_generate_facilitator_ppt, \
                patch("controller.routes.generate_knowledge_check_for_facilitator_powerpoint") as mock_generate_knowledge_check, \
                patch("controller.routes.regenerate_topic_outline") as mock_regenerate_topic_outline, \
                patch("controller.routes.shorten_speaker_notes") as mock_shorten_notes, \
                patch("controller.routes.elaborate_speaker_notes") as mock_elaborate_notes, \
                patch("controller.routes.more_formal_speaker_notes") as mock_more_formal_notes, \
                patch("controller.routes.less_formal_speaker_notes") as mock_less_formal_notes, \
                patch("controller.routes.harder_knowledge_check_multi_answer") as mock_harder_multi, \
                patch("controller.routes.easier_knowledge_check_true_false") as mock_true_false, \
                patch("controller.routes.knowledge_check_case_study") as mock_case_study, \
                patch("controller.routes.shorten_bullet_points") as mock_shorten_bullets, \
                patch("controller.routes.knowledge_check_add_question") as mock_add_question:  # noqa: E501

tests/test_routes.py:20: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x16c2d2790>

    def get_original(self):
        target = self.getter()
        name = self.attribute
    
        original = DEFAULT
        local = False
    
        try:
            original = target.__dict__[name]
        except (AttributeError, KeyError):
            original = getattr(target, name, DEFAULT)
        else:
            local = True
    
        if name in _builtins and isinstance(target, ModuleType):
            self.create = True
    
        if not self.create and original is DEFAULT:
>           raise AttributeError(
                "%s does not have the attribute %r" % (target, name)
            )
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src/controller/routes.py'> does not have the attribute 'generate_knowledge_check_for_facilitator_powerpoint'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
_____________________ ERROR at setup of test_router_reprompt_speaker_notes_exceptions[elaborate-500-An error occured in regenerating speaker notes] ______________________

    @pytest.fixture(autouse=True)
    def mock_functions():
>       with patch("controller.routes.get_content_for_methods") as mock_get_content, \
                patch("controller.routes.fetch_relevant_chunks") as mock_fetch_chunks, \
                patch("controller.routes.generate_topic_outlines") as mock_generate_topics, \
                patch("controller.routes.generate_speaker_notes") as mock_generate_speaker_notes, \
                patch("controller.routes.generate_facilitator_ppt") as mock_generate_facilitator_ppt, \
                patch("controller.routes.generate_knowledge_check_for_facilitator_powerpoint") as mock_generate_knowledge_check, \
                patch("controller.routes.regenerate_topic_outline") as mock_regenerate_topic_outline, \
                patch("controller.routes.shorten_speaker_notes") as mock_shorten_notes, \
                patch("controller.routes.elaborate_speaker_notes") as mock_elaborate_notes, \
                patch("controller.routes.more_formal_speaker_notes") as mock_more_formal_notes, \
                patch("controller.routes.less_formal_speaker_notes") as mock_less_formal_notes, \
                patch("controller.routes.harder_knowledge_check_multi_answer") as mock_harder_multi, \
                patch("controller.routes.easier_knowledge_check_true_false") as mock_true_false, \
                patch("controller.routes.knowledge_check_case_study") as mock_case_study, \
                patch("controller.routes.shorten_bullet_points") as mock_shorten_bullets, \
                patch("controller.routes.knowledge_check_add_question") as mock_add_question:  # noqa: E501

tests/test_routes.py:20: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x16c2c1310>

    def get_original(self):
        target = self.getter()
        name = self.attribute
    
        original = DEFAULT
        local = False
    
        try:
            original = target.__dict__[name]
        except (AttributeError, KeyError):
            original = getattr(target, name, DEFAULT)
        else:
            local = True
    
        if name in _builtins and isinstance(target, ModuleType):
            self.create = True
    
        if not self.create and original is DEFAULT:
>           raise AttributeError(
                "%s does not have the attribute %r" % (target, name)
            )
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src/controller/routes.py'> does not have the attribute 'generate_knowledge_check_for_facilitator_powerpoint'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
__________________________________________________________________ ERROR at setup of test_get_liveness ___________________________________________________________________

    @pytest.fixture(autouse=True)
    def mock_functions():
>       with patch("controller.routes.get_content_for_methods") as mock_get_content, \
                patch("controller.routes.fetch_relevant_chunks") as mock_fetch_chunks, \
                patch("controller.routes.generate_topic_outlines") as mock_generate_topics, \
                patch("controller.routes.generate_speaker_notes") as mock_generate_speaker_notes, \
                patch("controller.routes.generate_facilitator_ppt") as mock_generate_facilitator_ppt, \
                patch("controller.routes.generate_knowledge_check_for_facilitator_powerpoint") as mock_generate_knowledge_check, \
                patch("controller.routes.regenerate_topic_outline") as mock_regenerate_topic_outline, \
                patch("controller.routes.shorten_speaker_notes") as mock_shorten_notes, \
                patch("controller.routes.elaborate_speaker_notes") as mock_elaborate_notes, \
                patch("controller.routes.more_formal_speaker_notes") as mock_more_formal_notes, \
                patch("controller.routes.less_formal_speaker_notes") as mock_less_formal_notes, \
                patch("controller.routes.harder_knowledge_check_multi_answer") as mock_harder_multi, \
                patch("controller.routes.easier_knowledge_check_true_false") as mock_true_false, \
                patch("controller.routes.knowledge_check_case_study") as mock_case_study, \
                patch("controller.routes.shorten_bullet_points") as mock_shorten_bullets, \
                patch("controller.routes.knowledge_check_add_question") as mock_add_question:  # noqa: E501

tests/test_routes.py:20: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x16c24aed0>

    def get_original(self):
        target = self.getter()
        name = self.attribute
    
        original = DEFAULT
        local = False
    
        try:
            original = target.__dict__[name]
        except (AttributeError, KeyError):
            original = getattr(target, name, DEFAULT)
        else:
            local = True
    
        if name in _builtins and isinstance(target, ModuleType):
            self.create = True
    
        if not self.create and original is DEFAULT:
>           raise AttributeError(
                "%s does not have the attribute %r" % (target, name)
            )
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src/controller/routes.py'> does not have the attribute 'generate_knowledge_check_for_facilitator_powerpoint'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
__________________________________________________________________ ERROR at setup of test_get_readiness __________________________________________________________________

    @pytest.fixture(autouse=True)
    def mock_functions():
>       with patch("controller.routes.get_content_for_methods") as mock_get_content, \
                patch("controller.routes.fetch_relevant_chunks") as mock_fetch_chunks, \
                patch("controller.routes.generate_topic_outlines") as mock_generate_topics, \
                patch("controller.routes.generate_speaker_notes") as mock_generate_speaker_notes, \
                patch("controller.routes.generate_facilitator_ppt") as mock_generate_facilitator_ppt, \
                patch("controller.routes.generate_knowledge_check_for_facilitator_powerpoint") as mock_generate_knowledge_check, \
                patch("controller.routes.regenerate_topic_outline") as mock_regenerate_topic_outline, \
                patch("controller.routes.shorten_speaker_notes") as mock_shorten_notes, \
                patch("controller.routes.elaborate_speaker_notes") as mock_elaborate_notes, \
                patch("controller.routes.more_formal_speaker_notes") as mock_more_formal_notes, \
                patch("controller.routes.less_formal_speaker_notes") as mock_less_formal_notes, \
                patch("controller.routes.harder_knowledge_check_multi_answer") as mock_harder_multi, \
                patch("controller.routes.easier_knowledge_check_true_false") as mock_true_false, \
                patch("controller.routes.knowledge_check_case_study") as mock_case_study, \
                patch("controller.routes.shorten_bullet_points") as mock_shorten_bullets, \
                patch("controller.routes.knowledge_check_add_question") as mock_add_question:  # noqa: E501

tests/test_routes.py:20: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x16c18d7d0>

    def get_original(self):
        target = self.getter()
        name = self.attribute
    
        original = DEFAULT
        local = False
    
        try:
            original = target.__dict__[name]
        except (AttributeError, KeyError):
            original = getattr(target, name, DEFAULT)
        else:
            local = True
    
        if name in _builtins and isinstance(target, ModuleType):
            self.create = True
    
        if not self.create and original is DEFAULT:
>           raise AttributeError(
                "%s does not have the attribute %r" % (target, name)
            )
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src/controller/routes.py'> does not have the attribute 'generate_knowledge_check_for_facilitator_powerpoint'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
___________________________________________________ ERROR at setup of test_router_add_new_question_to_knowledge_check ____________________________________________________

    @pytest.fixture(autouse=True)
    def mock_functions():
>       with patch("controller.routes.get_content_for_methods") as mock_get_content, \
                patch("controller.routes.fetch_relevant_chunks") as mock_fetch_chunks, \
                patch("controller.routes.generate_topic_outlines") as mock_generate_topics, \
                patch("controller.routes.generate_speaker_notes") as mock_generate_speaker_notes, \
                patch("controller.routes.generate_facilitator_ppt") as mock_generate_facilitator_ppt, \
                patch("controller.routes.generate_knowledge_check_for_facilitator_powerpoint") as mock_generate_knowledge_check, \
                patch("controller.routes.regenerate_topic_outline") as mock_regenerate_topic_outline, \
                patch("controller.routes.shorten_speaker_notes") as mock_shorten_notes, \
                patch("controller.routes.elaborate_speaker_notes") as mock_elaborate_notes, \
                patch("controller.routes.more_formal_speaker_notes") as mock_more_formal_notes, \
                patch("controller.routes.less_formal_speaker_notes") as mock_less_formal_notes, \
                patch("controller.routes.harder_knowledge_check_multi_answer") as mock_harder_multi, \
                patch("controller.routes.easier_knowledge_check_true_false") as mock_true_false, \
                patch("controller.routes.knowledge_check_case_study") as mock_case_study, \
                patch("controller.routes.shorten_bullet_points") as mock_shorten_bullets, \
                patch("controller.routes.knowledge_check_add_question") as mock_add_question:  # noqa: E501

tests/test_routes.py:20: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x16c2b3d50>

    def get_original(self):
        target = self.getter()
        name = self.attribute
    
        original = DEFAULT
        local = False
    
        try:
            original = target.__dict__[name]
        except (AttributeError, KeyError):
            original = getattr(target, name, DEFAULT)
        else:
            local = True
    
        if name in _builtins and isinstance(target, ModuleType):
            self.create = True
    
        if not self.create and original is DEFAULT:
>           raise AttributeError(
                "%s does not have the attribute %r" % (target, name)
            )
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src/controller/routes.py'> does not have the attribute 'generate_knowledge_check_for_facilitator_powerpoint'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
_______________________________________________ ERROR at setup of test_router_add_new_question_to_knowledge_check_failure ________________________________________________

    @pytest.fixture(autouse=True)
    def mock_functions():
>       with patch("controller.routes.get_content_for_methods") as mock_get_content, \
                patch("controller.routes.fetch_relevant_chunks") as mock_fetch_chunks, \
                patch("controller.routes.generate_topic_outlines") as mock_generate_topics, \
                patch("controller.routes.generate_speaker_notes") as mock_generate_speaker_notes, \
                patch("controller.routes.generate_facilitator_ppt") as mock_generate_facilitator_ppt, \
                patch("controller.routes.generate_knowledge_check_for_facilitator_powerpoint") as mock_generate_knowledge_check, \
                patch("controller.routes.regenerate_topic_outline") as mock_regenerate_topic_outline, \
                patch("controller.routes.shorten_speaker_notes") as mock_shorten_notes, \
                patch("controller.routes.elaborate_speaker_notes") as mock_elaborate_notes, \
                patch("controller.routes.more_formal_speaker_notes") as mock_more_formal_notes, \
                patch("controller.routes.less_formal_speaker_notes") as mock_less_formal_notes, \
                patch("controller.routes.harder_knowledge_check_multi_answer") as mock_harder_multi, \
                patch("controller.routes.easier_knowledge_check_true_false") as mock_true_false, \
                patch("controller.routes.knowledge_check_case_study") as mock_case_study, \
                patch("controller.routes.shorten_bullet_points") as mock_shorten_bullets, \
                patch("controller.routes.knowledge_check_add_question") as mock_add_question:  # noqa: E501

tests/test_routes.py:20: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x12d0cd050>

    def get_original(self):
        target = self.getter()
        name = self.attribute
    
        original = DEFAULT
        local = False
    
        try:
            original = target.__dict__[name]
        except (AttributeError, KeyError):
            original = getattr(target, name, DEFAULT)
        else:
            local = True
    
        if name in _builtins and isinstance(target, ModuleType):
            self.create = True
    
        if not self.create and original is DEFAULT:
>           raise AttributeError(
                "%s does not have the attribute %r" % (target, name)
            )
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src/controller/routes.py'> does not have the attribute 'generate_knowledge_check_for_facilitator_powerpoint'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
_________________________________________________________ ERROR at setup of test_router_reprompt_knowledge_check _________________________________________________________

    @pytest.fixture(autouse=True)
    def mock_functions():
>       with patch("controller.routes.get_content_for_methods") as mock_get_content, \
                patch("controller.routes.fetch_relevant_chunks") as mock_fetch_chunks, \
                patch("controller.routes.generate_topic_outlines") as mock_generate_topics, \
                patch("controller.routes.generate_speaker_notes") as mock_generate_speaker_notes, \
                patch("controller.routes.generate_facilitator_ppt") as mock_generate_facilitator_ppt, \
                patch("controller.routes.generate_knowledge_check_for_facilitator_powerpoint") as mock_generate_knowledge_check, \
                patch("controller.routes.regenerate_topic_outline") as mock_regenerate_topic_outline, \
                patch("controller.routes.shorten_speaker_notes") as mock_shorten_notes, \
                patch("controller.routes.elaborate_speaker_notes") as mock_elaborate_notes, \
                patch("controller.routes.more_formal_speaker_notes") as mock_more_formal_notes, \
                patch("controller.routes.less_formal_speaker_notes") as mock_less_formal_notes, \
                patch("controller.routes.harder_knowledge_check_multi_answer") as mock_harder_multi, \
                patch("controller.routes.easier_knowledge_check_true_false") as mock_true_false, \
                patch("controller.routes.knowledge_check_case_study") as mock_case_study, \
                patch("controller.routes.shorten_bullet_points") as mock_shorten_bullets, \
                patch("controller.routes.knowledge_check_add_question") as mock_add_question:  # noqa: E501

tests/test_routes.py:20: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x16c18e750>

    def get_original(self):
        target = self.getter()
        name = self.attribute
    
        original = DEFAULT
        local = False
    
        try:
            original = target.__dict__[name]
        except (AttributeError, KeyError):
            original = getattr(target, name, DEFAULT)
        else:
            local = True
    
        if name in _builtins and isinstance(target, ModuleType):
            self.create = True
    
        if not self.create and original is DEFAULT:
>           raise AttributeError(
                "%s does not have the attribute %r" % (target, name)
            )
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src/controller/routes.py'> does not have the attribute 'generate_knowledge_check_for_facilitator_powerpoint'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
_________________________________________________ ERROR at setup of test_router_reprompt_knowledge_check_scenario_based __________________________________________________

    @pytest.fixture(autouse=True)
    def mock_functions():
>       with patch("controller.routes.get_content_for_methods") as mock_get_content, \
                patch("controller.routes.fetch_relevant_chunks") as mock_fetch_chunks, \
                patch("controller.routes.generate_topic_outlines") as mock_generate_topics, \
                patch("controller.routes.generate_speaker_notes") as mock_generate_speaker_notes, \
                patch("controller.routes.generate_facilitator_ppt") as mock_generate_facilitator_ppt, \
                patch("controller.routes.generate_knowledge_check_for_facilitator_powerpoint") as mock_generate_knowledge_check, \
                patch("controller.routes.regenerate_topic_outline") as mock_regenerate_topic_outline, \
                patch("controller.routes.shorten_speaker_notes") as mock_shorten_notes, \
                patch("controller.routes.elaborate_speaker_notes") as mock_elaborate_notes, \
                patch("controller.routes.more_formal_speaker_notes") as mock_more_formal_notes, \
                patch("controller.routes.less_formal_speaker_notes") as mock_less_formal_notes, \
                patch("controller.routes.harder_knowledge_check_multi_answer") as mock_harder_multi, \
                patch("controller.routes.easier_knowledge_check_true_false") as mock_true_false, \
                patch("controller.routes.knowledge_check_case_study") as mock_case_study, \
                patch("controller.routes.shorten_bullet_points") as mock_shorten_bullets, \
                patch("controller.routes.knowledge_check_add_question") as mock_add_question:  # noqa: E501

tests/test_routes.py:20: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x16c2e1190>

    def get_original(self):
        target = self.getter()
        name = self.attribute
    
        original = DEFAULT
        local = False
    
        try:
            original = target.__dict__[name]
        except (AttributeError, KeyError):
            original = getattr(target, name, DEFAULT)
        else:
            local = True
    
        if name in _builtins and isinstance(target, ModuleType):
            self.create = True
    
        if not self.create and original is DEFAULT:
>           raise AttributeError(
                "%s does not have the attribute %r" % (target, name)
            )
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src/controller/routes.py'> does not have the attribute 'generate_knowledge_check_for_facilitator_powerpoint'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
___________________________________________________ ERROR at setup of test_router_reprompt_knowledge_check_open_ended ____________________________________________________

    @pytest.fixture(autouse=True)
    def mock_functions():
>       with patch("controller.routes.get_content_for_methods") as mock_get_content, \
                patch("controller.routes.fetch_relevant_chunks") as mock_fetch_chunks, \
                patch("controller.routes.generate_topic_outlines") as mock_generate_topics, \
                patch("controller.routes.generate_speaker_notes") as mock_generate_speaker_notes, \
                patch("controller.routes.generate_facilitator_ppt") as mock_generate_facilitator_ppt, \
                patch("controller.routes.generate_knowledge_check_for_facilitator_powerpoint") as mock_generate_knowledge_check, \
                patch("controller.routes.regenerate_topic_outline") as mock_regenerate_topic_outline, \
                patch("controller.routes.shorten_speaker_notes") as mock_shorten_notes, \
                patch("controller.routes.elaborate_speaker_notes") as mock_elaborate_notes, \
                patch("controller.routes.more_formal_speaker_notes") as mock_more_formal_notes, \
                patch("controller.routes.less_formal_speaker_notes") as mock_less_formal_notes, \
                patch("controller.routes.harder_knowledge_check_multi_answer") as mock_harder_multi, \
                patch("controller.routes.easier_knowledge_check_true_false") as mock_true_false, \
                patch("controller.routes.knowledge_check_case_study") as mock_case_study, \
                patch("controller.routes.shorten_bullet_points") as mock_shorten_bullets, \
                patch("controller.routes.knowledge_check_add_question") as mock_add_question:  # noqa: E501

tests/test_routes.py:20: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x16c233890>

    def get_original(self):
        target = self.getter()
        name = self.attribute
    
        original = DEFAULT
        local = False
    
        try:
            original = target.__dict__[name]
        except (AttributeError, KeyError):
            original = getattr(target, name, DEFAULT)
        else:
            local = True
    
        if name in _builtins and isinstance(target, ModuleType):
            self.create = True
    
        if not self.create and original is DEFAULT:
>           raise AttributeError(
                "%s does not have the attribute %r" % (target, name)
            )
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src/controller/routes.py'> does not have the attribute 'generate_knowledge_check_for_facilitator_powerpoint'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
__________________________________________________ ERROR at setup of test_router_reprompt_knowledge_check_multi_select ___________________________________________________

    @pytest.fixture(autouse=True)
    def mock_functions():
>       with patch("controller.routes.get_content_for_methods") as mock_get_content, \
                patch("controller.routes.fetch_relevant_chunks") as mock_fetch_chunks, \
                patch("controller.routes.generate_topic_outlines") as mock_generate_topics, \
                patch("controller.routes.generate_speaker_notes") as mock_generate_speaker_notes, \
                patch("controller.routes.generate_facilitator_ppt") as mock_generate_facilitator_ppt, \
                patch("controller.routes.generate_knowledge_check_for_facilitator_powerpoint") as mock_generate_knowledge_check, \
                patch("controller.routes.regenerate_topic_outline") as mock_regenerate_topic_outline, \
                patch("controller.routes.shorten_speaker_notes") as mock_shorten_notes, \
                patch("controller.routes.elaborate_speaker_notes") as mock_elaborate_notes, \
                patch("controller.routes.more_formal_speaker_notes") as mock_more_formal_notes, \
                patch("controller.routes.less_formal_speaker_notes") as mock_less_formal_notes, \
                patch("controller.routes.harder_knowledge_check_multi_answer") as mock_harder_multi, \
                patch("controller.routes.easier_knowledge_check_true_false") as mock_true_false, \
                patch("controller.routes.knowledge_check_case_study") as mock_case_study, \
                patch("controller.routes.shorten_bullet_points") as mock_shorten_bullets, \
                patch("controller.routes.knowledge_check_add_question") as mock_add_question:  # noqa: E501

tests/test_routes.py:20: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x16c1a8fd0>

    def get_original(self):
        target = self.getter()
        name = self.attribute
    
        original = DEFAULT
        local = False
    
        try:
            original = target.__dict__[name]
        except (AttributeError, KeyError):
            original = getattr(target, name, DEFAULT)
        else:
            local = True
    
        if name in _builtins and isinstance(target, ModuleType):
            self.create = True
    
        if not self.create and original is DEFAULT:
>           raise AttributeError(
                "%s does not have the attribute %r" % (target, name)
            )
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src/controller/routes.py'> does not have the attribute 'generate_knowledge_check_for_facilitator_powerpoint'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
_______________________________________________________ ERROR at setup of test_router_reprompt_knowledge_check_500 _______________________________________________________

    @pytest.fixture(autouse=True)
    def mock_functions():
>       with patch("controller.routes.get_content_for_methods") as mock_get_content, \
                patch("controller.routes.fetch_relevant_chunks") as mock_fetch_chunks, \
                patch("controller.routes.generate_topic_outlines") as mock_generate_topics, \
                patch("controller.routes.generate_speaker_notes") as mock_generate_speaker_notes, \
                patch("controller.routes.generate_facilitator_ppt") as mock_generate_facilitator_ppt, \
                patch("controller.routes.generate_knowledge_check_for_facilitator_powerpoint") as mock_generate_knowledge_check, \
                patch("controller.routes.regenerate_topic_outline") as mock_regenerate_topic_outline, \
                patch("controller.routes.shorten_speaker_notes") as mock_shorten_notes, \
                patch("controller.routes.elaborate_speaker_notes") as mock_elaborate_notes, \
                patch("controller.routes.more_formal_speaker_notes") as mock_more_formal_notes, \
                patch("controller.routes.less_formal_speaker_notes") as mock_less_formal_notes, \
                patch("controller.routes.harder_knowledge_check_multi_answer") as mock_harder_multi, \
                patch("controller.routes.easier_knowledge_check_true_false") as mock_true_false, \
                patch("controller.routes.knowledge_check_case_study") as mock_case_study, \
                patch("controller.routes.shorten_bullet_points") as mock_shorten_bullets, \
                patch("controller.routes.knowledge_check_add_question") as mock_add_question:  # noqa: E501

tests/test_routes.py:20: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x16c2e3010>

    def get_original(self):
        target = self.getter()
        name = self.attribute
    
        original = DEFAULT
        local = False
    
        try:
            original = target.__dict__[name]
        except (AttributeError, KeyError):
            original = getattr(target, name, DEFAULT)
        else:
            local = True
    
        if name in _builtins and isinstance(target, ModuleType):
            self.create = True
    
        if not self.create and original is DEFAULT:
>           raise AttributeError(
                "%s does not have the attribute %r" % (target, name)
            )
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src/controller/routes.py'> does not have the attribute 'generate_knowledge_check_for_facilitator_powerpoint'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
============================================================================ warnings summary ============================================================================
tests/test_routes.py::test_router_generate_topic_outlines
tests/test_routes.py::test_router_generate_topic_outlines
tests/test_routes.py::test_router_generate_topic_outlines
tests/test_routes.py::test_router_generate_topic_outlines
tests/test_routes.py::test_router_generate_topic_outlines
tests/test_routes.py::test_router_generate_topic_outlines
  /Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv6/lib/python3.11/site-packages/pydantic/fields.py:1032: PydanticDeprecatedSince20: Using extra keyword arguments on `Field` is deprecated and will be removed. Use `json_schema_extra` instead. (Extra keys: 'metadata'). Deprecated in Pydantic V2.0 to be removed in V3.0. See Pydantic V2 Migration Guide at https://errors.pydantic.dev/2.10/migration/
    warn(

-- Docs: https://docs.pytest.org/en/stable/how-to/capture-warnings.html

---------- coverage: platform darwin, python 3.11.9-final-0 ----------
Name                                       Stmts   Miss  Cover
--------------------------------------------------------------
src/config.py                                 50      7    86%
src/constants/constants.py                     4      0   100%
src/controller/__init__.py                     0      0   100%
src/controller/routes.py                     238    163    32%
src/main.py                                    8      8     0%
src/model/__init__.py                          0      0   100%
src/model/ai_models_config.py                 10      0   100%
src/model/aws/__init__.py                      0      0   100%
src/model/aws/aws_helpers.py                  38     18    53%
src/model/content_creation_funcs.py          308    241    22%
src/model/continuous_learning_prompts.py      64     64     0%
src/model/fetch_content_for_methods.py        21     15    29%
src/model/fetch_relevant_chunks.py            30     20    33%
src/model/generate_continuous_content.py      67     67     0%
src/model/generate_core_content.py           136    113    17%
src/model/llama3handler.py                    80     30    62%
src/model/prompt_builder.py                   57      2    96%
src/model/regnerate_content.py                17     11    35%
src/model/reprompt_content.py                123     87    29%
src/model/scenario1_prompts.py               189     18    90%
--------------------------------------------------------------
TOTAL                                       1440    864    40%

======================================================================== short test summary info =========================================================================
ERROR tests/test_routes.py::test_router_generate_topic_outlines - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src...
ERROR tests/test_routes.py::test_router_generate_topic_outlines_400 - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src...
ERROR tests/test_routes.py::test_router_generate_topic_outlines_500 - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src...
ERROR tests/test_routes.py::test_router_regenerate_topic_outlines - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src...
ERROR tests/test_routes.py::test_router_regenerate_topic_outlines_400 - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src...
ERROR tests/test_routes.py::test_router_regenerate_topic_outlines_500 - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src...
ERROR tests/test_routes.py::test_generate_speaker_notes_and_facilitator_powerpoint - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src...
ERROR tests/test_routes.py::test_generate_speaker_notes_and_facilitator_powerpoint_500 - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src...
ERROR tests/test_routes.py::test_router_generate_knowledge_check_for_facilitator_powerpoint - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src...
ERROR tests/test_routes.py::test_router_generate_knowledge_check_powerpoint_script - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src...
ERROR tests/test_routes.py::test_router_generate_knowledge_check_500 - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src...
ERROR tests/test_routes.py::test_router_generate_knowledge_check_400 - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src...
ERROR tests/test_routes.py::test_router_reprompt_shorter_speaker_notes - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src...
ERROR tests/test_routes.py::test_router_reprompt_speaker_notes[elaborate-controller.routes.elaborate_speaker_notes-controller.routes.elaborate_bullet_points-Elaborated Speaker Notes-Detailed Bullet Points] - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src...
ERROR tests/test_routes.py::test_router_reprompt_speaker_notes[more-professional-controller.routes.more_formal_speaker_notes-controller.routes.more_formal_bullet_points-More Professional Speaker Notes-Professional Bullet Points] - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src...
ERROR tests/test_routes.py::test_router_reprompt_speaker_notes[more-casual-controller.routes.less_formal_speaker_notes-controller.routes.less_formal_bullet_points-More Casual Speaker Notes-Casual Bullet Points] - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src...
ERROR tests/test_routes.py::test_router_reprompt_speaker_notes_exceptions[invalid-type-500-An error occured in regenerating speaker notes] - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src...
ERROR tests/test_routes.py::test_router_reprompt_speaker_notes_exceptions[elaborate-500-An error occured in regenerating speaker notes] - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src...
ERROR tests/test_routes.py::test_get_liveness - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src...
ERROR tests/test_routes.py::test_get_readiness - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src...
ERROR tests/test_routes.py::test_router_add_new_question_to_knowledge_check - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src...
ERROR tests/test_routes.py::test_router_add_new_question_to_knowledge_check_failure - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src...
ERROR tests/test_routes.py::test_router_reprompt_knowledge_check - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src...
ERROR tests/test_routes.py::test_router_reprompt_knowledge_check_scenario_based - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src...
ERROR tests/test_routes.py::test_router_reprompt_knowledge_check_open_ended - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src...
ERROR tests/test_routes.py::test_router_reprompt_knowledge_check_multi_select - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src...
ERROR tests/test_routes.py::test_router_reprompt_knowledge_check_500 - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-generate-content/src...
