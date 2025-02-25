tests/tests_model/test_chunk_and_vectorise.py EE.EEEE                                                                                                                                                         [100%]

====================================================================================================== ERRORS =======================================================================================================
____________________________________________________________________________________ ERROR at setup of test_chunk_and_vectorise _____________________________________________________________________________________

mocker = <pytest_mock.plugin.MockerFixture object at 0x113870710>

    @pytest.fixture
    def mock_embeddings(mocker):
        """Mocks the BedrockEmbeddings model."""
        mock_embedder = MagicMock()
>       mocker.patch(
            "model.chunk_and_vectorise.BedrockEmbeddings",
            return_value=mock_embedder,
        )

tests/tests_model/test_chunk_and_vectorise.py:17: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
../venv6/lib/python3.11/site-packages/pytest_mock/plugin.py:440: in __call__
    return self._start_patch(
../venv6/lib/python3.11/site-packages/pytest_mock/plugin.py:258: in _start_patch
    mocked: MockType = p.start()
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1594: in start
    result = self.__enter__()
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

self = <unittest.mock._patch object at 0x113855d50>

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
E           AttributeError: <module 'model.chunk_and_vectorise' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/chunk_and_vectorise.py'> does not have the attribute 'BedrockEmbeddings'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
------------------------------------------------------------------------------------------------ Captured log setup -------------------------------------------------------------------------------------------------
ERROR    config:config.py:107 Unable to locate credentials
ERROR    config:config.py:107 Unable to locate credentials
_______________________________________________________________________________ ERROR at setup of test_chunk_and_vectorise_700_words ________________________________________________________________________________

mocker = <pytest_mock.plugin.MockerFixture object at 0x114711910>

    @pytest.fixture
    def mock_embeddings(mocker):
        """Mocks the BedrockEmbeddings model."""
        mock_embedder = MagicMock()
>       mocker.patch(
            "model.chunk_and_vectorise.BedrockEmbeddings",
            return_value=mock_embedder,
        )

tests/tests_model/test_chunk_and_vectorise.py:17: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
../venv6/lib/python3.11/site-packages/pytest_mock/plugin.py:440: in __call__
    return self._start_patch(
../venv6/lib/python3.11/site-packages/pytest_mock/plugin.py:258: in _start_patch
    mocked: MockType = p.start()
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1594: in start
    result = self.__enter__()
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

self = <unittest.mock._patch object at 0x112ada710>

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
E           AttributeError: <module 'model.chunk_and_vectorise' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/chunk_and_vectorise.py'> does not have the attribute 'BedrockEmbeddings'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
_______________________________________________________________________________ ERROR at setup of test_chunk_and_vectorise_500_words ________________________________________________________________________________

mocker = <pytest_mock.plugin.MockerFixture object at 0x111c6a7d0>

    @pytest.fixture
    def mock_embeddings(mocker):
        """Mocks the BedrockEmbeddings model."""
        mock_embedder = MagicMock()
>       mocker.patch(
            "model.chunk_and_vectorise.BedrockEmbeddings",
            return_value=mock_embedder,
        )

tests/tests_model/test_chunk_and_vectorise.py:17: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
../venv6/lib/python3.11/site-packages/pytest_mock/plugin.py:440: in __call__
    return self._start_patch(
../venv6/lib/python3.11/site-packages/pytest_mock/plugin.py:258: in _start_patch
    mocked: MockType = p.start()
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1594: in start
    result = self.__enter__()
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

self = <unittest.mock._patch object at 0x1063eebd0>

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
E           AttributeError: <module 'model.chunk_and_vectorise' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/chunk_and_vectorise.py'> does not have the attribute 'BedrockEmbeddings'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
_______________________________________________________________________________ ERROR at setup of test_chunk_and_vectorise_512_words ________________________________________________________________________________

mocker = <pytest_mock.plugin.MockerFixture object at 0x109033e50>

    @pytest.fixture
    def mock_embeddings(mocker):
        """Mocks the BedrockEmbeddings model."""
        mock_embedder = MagicMock()
>       mocker.patch(
            "model.chunk_and_vectorise.BedrockEmbeddings",
            return_value=mock_embedder,
        )

tests/tests_model/test_chunk_and_vectorise.py:17: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
../venv6/lib/python3.11/site-packages/pytest_mock/plugin.py:440: in __call__
    return self._start_patch(
../venv6/lib/python3.11/site-packages/pytest_mock/plugin.py:258: in _start_patch
    mocked: MockType = p.start()
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1594: in start
    result = self.__enter__()
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

self = <unittest.mock._patch object at 0x111cee710>

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
E           AttributeError: <module 'model.chunk_and_vectorise' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/chunk_and_vectorise.py'> does not have the attribute 'BedrockEmbeddings'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
_______________________________________________________________________________ ERROR at setup of test_chunk_and_vectorise_empty_text _______________________________________________________________________________

mocker = <pytest_mock.plugin.MockerFixture object at 0x11486a290>

    @pytest.fixture
    def mock_embeddings(mocker):
        """Mocks the BedrockEmbeddings model."""
        mock_embedder = MagicMock()
>       mocker.patch(
            "model.chunk_and_vectorise.BedrockEmbeddings",
            return_value=mock_embedder,
        )

tests/tests_model/test_chunk_and_vectorise.py:17: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
../venv6/lib/python3.11/site-packages/pytest_mock/plugin.py:440: in __call__
    return self._start_patch(
../venv6/lib/python3.11/site-packages/pytest_mock/plugin.py:258: in _start_patch
    mocked: MockType = p.start()
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1594: in start
    result = self.__enter__()
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

self = <unittest.mock._patch object at 0x11486b090>

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
E           AttributeError: <module 'model.chunk_and_vectorise' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/chunk_and_vectorise.py'> does not have the attribute 'BedrockEmbeddings'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
____________________________________________________________________________ ERROR at setup of test_chunk_and_vectorise_chunking_failure ____________________________________________________________________________

mocker = <pytest_mock.plugin.MockerFixture object at 0x113a20490>

    @pytest.fixture
    def mock_embeddings(mocker):
        """Mocks the BedrockEmbeddings model."""
        mock_embedder = MagicMock()
>       mocker.patch(
            "model.chunk_and_vectorise.BedrockEmbeddings",
            return_value=mock_embedder,
        )

tests/tests_model/test_chunk_and_vectorise.py:17: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
../venv6/lib/python3.11/site-packages/pytest_mock/plugin.py:440: in __call__
    return self._start_patch(
../venv6/lib/python3.11/site-packages/pytest_mock/plugin.py:258: in _start_patch
    mocked: MockType = p.start()
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1594: in start
    result = self.__enter__()
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

self = <unittest.mock._patch object at 0x111d3e6d0>

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
E           AttributeError: <module 'model.chunk_and_vectorise' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/chunk_and_vectorise.py'> does not have the attribute 'BedrockEmbeddings'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
================================================================================================= warnings summary ==================================================================================================
tests/tests_model/test_chunk_and_vectorise.py::test_chunk_and_vectorise
tests/tests_model/test_chunk_and_vectorise.py::test_chunk_and_vectorise
  /Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv6/lib/python3.11/site-packages/pydantic/fields.py:1032: PydanticDeprecatedSince20: Using extra keyword arguments on `Field` is deprecated and will be removed. Use `json_schema_extra` instead. (Extra keys: 'metadata'). Deprecated in Pydantic V2.0 to be removed in V3.0. See Pydantic V2 Migration Guide at https://errors.pydantic.dev/2.10/migration/
    warn(

-- Docs: https://docs.pytest.org/en/stable/how-to/capture-warnings.html

---------- coverage: platform darwin, python 3.11.9-final-0 ----------
Name                                                                Stmts   Miss  Cover
---------------------------------------------------------------------------------------
src/__init__.py                                                         0      0   100%
src/config.py                                                          48      7    85%
src/controller/__init__.py                                              0      0   100%
src/controller/routes.py                                              214    214     0%
src/main.py                                                             8      8     0%
src/model/__init__.py                                                   0      0   100%
src/model/aws/__init__.py                                               0      0   100%
src/model/aws/aws_helpers.py                                           38     29    24%
src/model/chunk_and_vectorise.py                                       56     37    34%
src/model/content_creation/__init__.py                                  0      0   100%
src/model/content_creation/content_creation_funcs.py                   56     56     0%
src/model/content_creation/llama3handler.py                            44     44     0%
src/model/content_creation/prompt_builder.py                           54     54     0%
src/model/csi/__init__.py                                               0      0   100%
src/model/csi/secrets_loader.py                                        22     22     0%
src/model/dao.py                                                      124    124     0%
src/model/db_connection.py                                             25     25     0%
src/model/doc_exporter.py                                              92     92     0%
src/model/embeddings_model_config.py                                    7      2    71%
src/model/gail_util_funcs.py                                           64     64     0%
src/model/generate_powerpoint/__init__.py                               0      0   100%
src/model/generate_powerpoint/combine_script_and_bullets.py            10     10     0%
src/model/generate_powerpoint/generate_powerpoint_presentation.py     226    226     0%
src/model/get_relevant_chunks.py                                      108    108     0%
src/model/pii_mask.py                                                  60     60     0%
src/model/process_uploaded_file.py                                     97     97     0%
src/model/scan_file_for_malware.py                                     22     22     0%
---------------------------------------------------------------------------------------
TOTAL                                                                1375   1301     5%

============================================================================================== short test summary info ==============================================================================================
ERROR tests/tests_model/test_chunk_and_vectorise.py::test_chunk_and_vectorise - AttributeError: <module 'model.chunk_and_vectorise' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/chunk_and_vectorise.py'> ...
ERROR tests/tests_model/test_chunk_and_vectorise.py::test_chunk_and_vectorise_700_words - AttributeError: <module 'model.chunk_and_vectorise' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/chunk_and_vectorise.py'> ...
ERROR tests/tests_model/test_chunk_and_vectorise.py::test_chunk_and_vectorise_500_words - AttributeError: <module 'model.chunk_and_vectorise' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/chunk_and_vectorise.py'> ...
ERROR tests/tests_model/test_chunk_and_vectorise.py::test_chunk_and_vectorise_512_words - AttributeError: <module 'model.chunk_and_vectorise' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/chunk_and_vectorise.py'> ...
ERROR tests/tests_model/test_chunk_and_vectorise.py::test_chunk_and_vectorise_empty_text - AttributeError: <module 'model.chunk_and_vectorise' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/chunk_and_vectorise.py'> ...
ERROR tests/tests_model/test_chunk_and_vectorise.py::test_chunk_and_vectorise_chunking_failure - AttributeError: <module 'model.chunk_and_vectorise' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/chunk_and_vectorise.py'> ...
====================================================================================== 1 passed, 2 warnings, 6 errors in 5.71s ==
