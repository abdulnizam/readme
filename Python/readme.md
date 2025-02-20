
tests/test_main.py EEEEEEEEEEE                                                                                     [100%]

========================================================= ERRORS =========================================================
_______________________________________ ERROR at setup of test_app_initialization ________________________________________

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_dependencies():
        """Setup mocked dependencies before tests"""
>       with patch("controller.routes.some_dependency") as mock_dependency:

tests/test_main.py:14: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x12fbba910>

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
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/controller/routes.py'> does not have the attribute 'some_dependency'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
________________________________________ ERROR at setup of test_router_inclusion _________________________________________

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_dependencies():
        """Setup mocked dependencies before tests"""
>       with patch("controller.routes.some_dependency") as mock_dependency:

tests/test_main.py:14: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x12fbba910>

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
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/controller/routes.py'> does not have the attribute 'some_dependency'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
_______________ ERROR at setup of test_writeknowledgecheck_edge_cases[input_data0-200-expected_response0] ________________

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_dependencies():
        """Setup mocked dependencies before tests"""
>       with patch("controller.routes.some_dependency") as mock_dependency:

tests/test_main.py:14: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x12fbba910>

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
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/controller/routes.py'> does not have the attribute 'some_dependency'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
_______________ ERROR at setup of test_writeknowledgecheck_edge_cases[input_data1-400-expected_response1] ________________

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_dependencies():
        """Setup mocked dependencies before tests"""
>       with patch("controller.routes.some_dependency") as mock_dependency:

tests/test_main.py:14: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x12fbba910>

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
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/controller/routes.py'> does not have the attribute 'some_dependency'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
_______________ ERROR at setup of test_writeknowledgecheck_edge_cases[input_data2-422-expected_response2] ________________

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_dependencies():
        """Setup mocked dependencies before tests"""
>       with patch("controller.routes.some_dependency") as mock_dependency:

tests/test_main.py:14: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x12fbba910>

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
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/controller/routes.py'> does not have the attribute 'some_dependency'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
___________________________ ERROR at setup of test_writepowerpoint_edge_cases[input_data0-201] ___________________________

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_dependencies():
        """Setup mocked dependencies before tests"""
>       with patch("controller.routes.some_dependency") as mock_dependency:

tests/test_main.py:14: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x12fbba910>

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
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/controller/routes.py'> does not have the attribute 'some_dependency'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
___________________________ ERROR at setup of test_writepowerpoint_edge_cases[input_data1-400] ___________________________

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_dependencies():
        """Setup mocked dependencies before tests"""
>       with patch("controller.routes.some_dependency") as mock_dependency:

tests/test_main.py:14: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x12fbba910>

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
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/controller/routes.py'> does not have the attribute 'some_dependency'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
___________________________ ERROR at setup of test_writepowerpoint_edge_cases[input_data2-422] ___________________________

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_dependencies():
        """Setup mocked dependencies before tests"""
>       with patch("controller.routes.some_dependency") as mock_dependency:

tests/test_main.py:14: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x12fbba910>

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
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/controller/routes.py'> does not have the attribute 'some_dependency'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
__________________________________________ ERROR at setup of test_cors_enabled ___________________________________________

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_dependencies():
        """Setup mocked dependencies before tests"""
>       with patch("controller.routes.some_dependency") as mock_dependency:

tests/test_main.py:14: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x12fbba910>

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
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/controller/routes.py'> does not have the attribute 'some_dependency'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
__________________________________________ ERROR at setup of test_404_not_found __________________________________________

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_dependencies():
        """Setup mocked dependencies before tests"""
>       with patch("controller.routes.some_dependency") as mock_dependency:

tests/test_main.py:14: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x12fbba910>

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
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/controller/routes.py'> does not have the attribute 'some_dependency'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
___________________________________________ ERROR at setup of test_healthcheck ___________________________________________

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_dependencies():
        """Setup mocked dependencies before tests"""
>       with patch("controller.routes.some_dependency") as mock_dependency:

tests/test_main.py:14: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1446: in __enter__
    original, local = self.get_original()
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

self = <unittest.mock._patch object at 0x12fbba910>

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
E           AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/controller/routes.py'> does not have the attribute 'some_dependency'

../../../../../.homebrew/Cellar/python@3.11/3.11.9_1/Frameworks/Python.framework/Versions/3.11/lib/python3.11/unittest/mock.py:1419: AttributeError
==================================================== warnings summary ====================================================
../venv6/lib/python3.11/site-packages/pydantic/fields.py:1032
../venv6/lib/python3.11/site-packages/pydantic/fields.py:1032
  /Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv6/lib/python3.11/site-packages/pydantic/fields.py:1032: PydanticDeprecatedSince20: Using extra keyword arguments on `Field` is deprecated and will be removed. Use `json_schema_extra` instead. (Extra keys: 'metadata'). Deprecated in Pydantic V2.0 to be removed in V3.0. See Pydantic V2 Migration Guide at https://errors.pydantic.dev/2.10/migration/
    warn(

<frozen importlib._bootstrap>:241
<frozen importlib._bootstrap>:241
  <frozen importlib._bootstrap>:241: DeprecationWarning: builtin type SwigPyPacked has no __module__ attribute

<frozen importlib._bootstrap>:241
<frozen importlib._bootstrap>:241
  <frozen importlib._bootstrap>:241: DeprecationWarning: builtin type SwigPyObject has no __module__ attribute

<frozen importlib._bootstrap>:241
  <frozen importlib._bootstrap>:241: DeprecationWarning: builtin type swigvarlink has no __module__ attribute

-- Docs: https://docs.pytest.org/en/stable/how-to/capture-warnings.html

---------- coverage: platform darwin, python 3.11.9-final-0 ----------
Name                                                                Stmts   Miss  Cover
---------------------------------------------------------------------------------------
src/__init__.py                                                         0      0   100%
src/config.py                                                          48      7    85%
src/controller/__init__.py                                              0      0   100%
src/controller/routes.py                                              263    177    33%
src/main.py                                                             8      0   100%
src/model/__init__.py                                                   0      0   100%
src/model/aws/__init__.py                                               0      0   100%
src/model/aws/aws_helpers.py                                           38     26    32%
src/model/chunk_and_vectorise.py                                       45     36    20%
src/model/content_creation/__init__.py                                  0      0   100%
src/model/content_creation/content_creation_funcs.py                   56     56     0%
src/model/content_creation/llama3handler.py                            44     44     0%
src/model/content_creation/prompt_builder.py                           54     54     0%
src/model/csi/__init__.py                                               0      0   100%
src/model/csi/secrets_loader.py                                        22     18    18%
src/model/dao.py                                                      131    111    15%
src/model/db_connection.py                                             25     19    24%
src/model/gail_util_funcs.py                                           64     55    14%
src/model/generate_powerpoint/__init__.py                               0      0   100%
src/model/generate_powerpoint/combine_script_and_bullets.py            10     10     0%
src/model/generate_powerpoint/generate_powerpoint_presentation.py     226    187    17%
src/model/get_relevant_chunks.py                                       64     51    20%
src/model/pii_mask.py                                                  38     30    21%
src/model/process_uploaded_file.py                                     88     71    19%
src/model/scan_file_for_malware.py                                     22     13    41%
---------------------------------------------------------------------------------------
TOTAL                                                                1246    965    23%

================================================ short test summary info =================================================
ERROR tests/test_main.py::test_app_initialization - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering...
ERROR tests/test_main.py::test_router_inclusion - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering...
ERROR tests/test_main.py::test_writeknowledgecheck_edge_cases[input_data0-200-expected_response0] - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering...
ERROR tests/test_main.py::test_writeknowledgecheck_edge_cases[input_data1-400-expected_response1] - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering...
ERROR tests/test_main.py::test_writeknowledgecheck_edge_cases[input_data2-422-expected_response2] - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering...
ERROR tests/test_main.py::test_writepowerpoint_edge_cases[input_data0-201] - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering...
ERROR tests/test_main.py::test_writepowerpoint_edge_cases[input_data1-400] - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering...
ERROR tests/test_main.py::test_writepowerpoint_edge_cases[input_data2-422] - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering...
ERROR tests/test_main.py::test_cors_enabled - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering...
ERROR tests/test_main.py::test_404_not_found - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering...
ERROR tests/test_main.py::test_healthcheck - AttributeError: <module 'controller.routes' from '/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering...
============================================= 7 warnings, 11 errors in 8.12s ======
