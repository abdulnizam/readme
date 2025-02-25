
tests/tests_model/test_dao.py EEEEEEEEEEEEEEEEEEEEEEEE                                                                                                           [100%]

================================================================================ ERRORS ================================================================================
_________________________________________________________ ERROR at setup of test_send_learning_to_db_exception _________________________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4500444304'>, <MagicMock name='client' id='4500449360'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
        """Apply mocks before importing `aws_helpers`."""
        global send_file_to_db, send_learning_to_db, send_chunks_to_db, \
            get_all_chunks, get_all_topics, get_name_from_datbase, remove_by_learning_id, \
            remove_document_from_source_documents, connect_db, NamePurposeTopics
>       from model.dao import (
            send_file_to_db,
            send_learning_to_db,
            send_chunks_to_db,
            get_all_chunks,
            get_all_topics,
            get_name_from_datbase,
            remove_by_learning_id,
            remove_document_from_source_documents,
            connect_db,
        )
E       ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/dao.py)

tests/tests_model/test_dao.py:13: ImportError
-------------------------------------------------------------------------- Captured log setup --------------------------------------------------------------------------
ERROR    config:config.py:107 Unable to locate credentials
ERROR    config:config.py:107 Unable to locate credentials
__________________________________________________________ ERROR at setup of test_send_chunks_to_db_exception __________________________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4500444304'>, <MagicMock name='client' id='4500449360'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
        """Apply mocks before importing `aws_helpers`."""
        global send_file_to_db, send_learning_to_db, send_chunks_to_db, \
            get_all_chunks, get_all_topics, get_name_from_datbase, remove_by_learning_id, \
            remove_document_from_source_documents, connect_db, NamePurposeTopics
>       from model.dao import (
            send_file_to_db,
            send_learning_to_db,
            send_chunks_to_db,
            get_all_chunks,
            get_all_topics,
            get_name_from_datbase,
            remove_by_learning_id,
            remove_document_from_source_documents,
            connect_db,
        )
E       ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/dao.py)

tests/tests_model/test_dao.py:13: ImportError
___________________________________________________________ ERROR at setup of test_get_all_chunks_exception ____________________________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4500444304'>, <MagicMock name='client' id='4500449360'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
        """Apply mocks before importing `aws_helpers`."""
        global send_file_to_db, send_learning_to_db, send_chunks_to_db, \
            get_all_chunks, get_all_topics, get_name_from_datbase, remove_by_learning_id, \
            remove_document_from_source_documents, connect_db, NamePurposeTopics
>       from model.dao import (
            send_file_to_db,
            send_learning_to_db,
            send_chunks_to_db,
            get_all_chunks,
            get_all_topics,
            get_name_from_datbase,
            remove_by_learning_id,
            remove_document_from_source_documents,
            connect_db,
        )
E       ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/dao.py)

tests/tests_model/test_dao.py:13: ImportError
________________________________________________________________ ERROR at setup of test_send_file_to_db ________________________________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4500444304'>, <MagicMock name='client' id='4500449360'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
        """Apply mocks before importing `aws_helpers`."""
        global send_file_to_db, send_learning_to_db, send_chunks_to_db, \
            get_all_chunks, get_all_topics, get_name_from_datbase, remove_by_learning_id, \
            remove_document_from_source_documents, connect_db, NamePurposeTopics
>       from model.dao import (
            send_file_to_db,
            send_learning_to_db,
            send_chunks_to_db,
            get_all_chunks,
            get_all_topics,
            get_name_from_datbase,
            remove_by_learning_id,
            remove_document_from_source_documents,
            connect_db,
        )
E       ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/dao.py)

tests/tests_model/test_dao.py:13: ImportError
___________________________________________________________ ERROR at setup of test_send_file_to_db_exception ___________________________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4500444304'>, <MagicMock name='client' id='4500449360'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
        """Apply mocks before importing `aws_helpers`."""
        global send_file_to_db, send_learning_to_db, send_chunks_to_db, \
            get_all_chunks, get_all_topics, get_name_from_datbase, remove_by_learning_id, \
            remove_document_from_source_documents, connect_db, NamePurposeTopics
>       from model.dao import (
            send_file_to_db,
            send_learning_to_db,
            send_chunks_to_db,
            get_all_chunks,
            get_all_topics,
            get_name_from_datbase,
            remove_by_learning_id,
            remove_document_from_source_documents,
            connect_db,
        )
E       ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/dao.py)

tests/tests_model/test_dao.py:13: ImportError
______________________________________________________________ ERROR at setup of test_send_learning_to_db ______________________________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4500444304'>, <MagicMock name='client' id='4500449360'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
        """Apply mocks before importing `aws_helpers`."""
        global send_file_to_db, send_learning_to_db, send_chunks_to_db, \
            get_all_chunks, get_all_topics, get_name_from_datbase, remove_by_learning_id, \
            remove_document_from_source_documents, connect_db, NamePurposeTopics
>       from model.dao import (
            send_file_to_db,
            send_learning_to_db,
            send_chunks_to_db,
            get_all_chunks,
            get_all_topics,
            get_name_from_datbase,
            remove_by_learning_id,
            remove_document_from_source_documents,
            connect_db,
        )
E       ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/dao.py)

tests/tests_model/test_dao.py:13: ImportError
_______________________________________________________________ ERROR at setup of test_send_chunks_to_db _______________________________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4500444304'>, <MagicMock name='client' id='4500449360'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
        """Apply mocks before importing `aws_helpers`."""
        global send_file_to_db, send_learning_to_db, send_chunks_to_db, \
            get_all_chunks, get_all_topics, get_name_from_datbase, remove_by_learning_id, \
            remove_document_from_source_documents, connect_db, NamePurposeTopics
>       from model.dao import (
            send_file_to_db,
            send_learning_to_db,
            send_chunks_to_db,
            get_all_chunks,
            get_all_topics,
            get_name_from_datbase,
            remove_by_learning_id,
            remove_document_from_source_documents,
            connect_db,
        )
E       ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/dao.py)

tests/tests_model/test_dao.py:13: ImportError
________________________________________________________________ ERROR at setup of test_get_all_chunks _________________________________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4500444304'>, <MagicMock name='client' id='4500449360'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
        """Apply mocks before importing `aws_helpers`."""
        global send_file_to_db, send_learning_to_db, send_chunks_to_db, \
            get_all_chunks, get_all_topics, get_name_from_datbase, remove_by_learning_id, \
            remove_document_from_source_documents, connect_db, NamePurposeTopics
>       from model.dao import (
            send_file_to_db,
            send_learning_to_db,
            send_chunks_to_db,
            get_all_chunks,
            get_all_topics,
            get_name_from_datbase,
            remove_by_learning_id,
            remove_document_from_source_documents,
            connect_db,
        )
E       ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/dao.py)

tests/tests_model/test_dao.py:13: ImportError
________________________________________________________________ ERROR at setup of test_get_all_topics _________________________________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4500444304'>, <MagicMock name='client' id='4500449360'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
        """Apply mocks before importing `aws_helpers`."""
        global send_file_to_db, send_learning_to_db, send_chunks_to_db, \
            get_all_chunks, get_all_topics, get_name_from_datbase, remove_by_learning_id, \
            remove_document_from_source_documents, connect_db, NamePurposeTopics
>       from model.dao import (
            send_file_to_db,
            send_learning_to_db,
            send_chunks_to_db,
            get_all_chunks,
            get_all_topics,
            get_name_from_datbase,
            remove_by_learning_id,
            remove_document_from_source_documents,
            connect_db,
        )
E       ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/dao.py)

tests/tests_model/test_dao.py:13: ImportError
____________________________________________________________ ERROR at setup of test_get_name_from_database _____________________________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4500444304'>, <MagicMock name='client' id='4500449360'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
        """Apply mocks before importing `aws_helpers`."""
        global send_file_to_db, send_learning_to_db, send_chunks_to_db, \
            get_all_chunks, get_all_topics, get_name_from_datbase, remove_by_learning_id, \
            remove_document_from_source_documents, connect_db, NamePurposeTopics
>       from model.dao import (
            send_file_to_db,
            send_learning_to_db,
            send_chunks_to_db,
            get_all_chunks,
            get_all_topics,
            get_name_from_datbase,
            remove_by_learning_id,
            remove_document_from_source_documents,
            connect_db,
        )
E       ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/dao.py)

tests/tests_model/test_dao.py:13: ImportError
_______________________________________________________ ERROR at setup of test_get_name_from_database_not_found ________________________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4500444304'>, <MagicMock name='client' id='4500449360'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
        """Apply mocks before importing `aws_helpers`."""
        global send_file_to_db, send_learning_to_db, send_chunks_to_db, \
            get_all_chunks, get_all_topics, get_name_from_datbase, remove_by_learning_id, \
            remove_document_from_source_documents, connect_db, NamePurposeTopics
>       from model.dao import (
            send_file_to_db,
            send_learning_to_db,
            send_chunks_to_db,
            get_all_chunks,
            get_all_topics,
            get_name_from_datbase,
            remove_by_learning_id,
            remove_document_from_source_documents,
            connect_db,
        )
E       ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/dao.py)

tests/tests_model/test_dao.py:13: ImportError
_______________________________________________________ ERROR at setup of test_get_name_from_database_invalid_id _______________________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4500444304'>, <MagicMock name='client' id='4500449360'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
        """Apply mocks before importing `aws_helpers`."""
        global send_file_to_db, send_learning_to_db, send_chunks_to_db, \
            get_all_chunks, get_all_topics, get_name_from_datbase, remove_by_learning_id, \
            remove_document_from_source_documents, connect_db, NamePurposeTopics
>       from model.dao import (
            send_file_to_db,
            send_learning_to_db,
            send_chunks_to_db,
            get_all_chunks,
            get_all_topics,
            get_name_from_datbase,
            remove_by_learning_id,
            remove_document_from_source_documents,
            connect_db,
        )
E       ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/dao.py)

tests/tests_model/test_dao.py:13: ImportError
_______________________________________________________ ERROR at setup of test_get_name_from_database_exception ________________________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4500444304'>, <MagicMock name='client' id='4500449360'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
        """Apply mocks before importing `aws_helpers`."""
        global send_file_to_db, send_learning_to_db, send_chunks_to_db, \
            get_all_chunks, get_all_topics, get_name_from_datbase, remove_by_learning_id, \
            remove_document_from_source_documents, connect_db, NamePurposeTopics
>       from model.dao import (
            send_file_to_db,
            send_learning_to_db,
            send_chunks_to_db,
            get_all_chunks,
            get_all_topics,
            get_name_from_datbase,
            remove_by_learning_id,
            remove_document_from_source_documents,
            connect_db,
        )
E       ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/dao.py)

tests/tests_model/test_dao.py:13: ImportError
_____________________________________________________________ ERROR at setup of test_remove_by_learning_id _____________________________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4500444304'>, <MagicMock name='client' id='4500449360'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
        """Apply mocks before importing `aws_helpers`."""
        global send_file_to_db, send_learning_to_db, send_chunks_to_db, \
            get_all_chunks, get_all_topics, get_name_from_datbase, remove_by_learning_id, \
            remove_document_from_source_documents, connect_db, NamePurposeTopics
>       from model.dao import (
            send_file_to_db,
            send_learning_to_db,
            send_chunks_to_db,
            get_all_chunks,
            get_all_topics,
            get_name_from_datbase,
            remove_by_learning_id,
            remove_document_from_source_documents,
            connect_db,
        )
E       ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/dao.py)

tests/tests_model/test_dao.py:13: ImportError
_____________________________________________________ ERROR at setup of test_remove_document_from_source_documents _____________________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4500444304'>, <MagicMock name='client' id='4500449360'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
        """Apply mocks before importing `aws_helpers`."""
        global send_file_to_db, send_learning_to_db, send_chunks_to_db, \
            get_all_chunks, get_all_topics, get_name_from_datbase, remove_by_learning_id, \
            remove_document_from_source_documents, connect_db, NamePurposeTopics
>       from model.dao import (
            send_file_to_db,
            send_learning_to_db,
            send_chunks_to_db,
            get_all_chunks,
            get_all_topics,
            get_name_from_datbase,
            remove_by_learning_id,
            remove_document_from_source_documents,
            connect_db,
        )
E       ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/dao.py)

tests/tests_model/test_dao.py:13: ImportError
______________________________________________________________ ERROR at setup of test_get_all_chunks_none ______________________________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4500444304'>, <MagicMock name='client' id='4500449360'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
        """Apply mocks before importing `aws_helpers`."""
        global send_file_to_db, send_learning_to_db, send_chunks_to_db, \
            get_all_chunks, get_all_topics, get_name_from_datbase, remove_by_learning_id, \
            remove_document_from_source_documents, connect_db, NamePurposeTopics
>       from model.dao import (
            send_file_to_db,
            send_learning_to_db,
            send_chunks_to_db,
            get_all_chunks,
            get_all_topics,
            get_name_from_datbase,
            remove_by_learning_id,
            remove_document_from_source_documents,
            connect_db,
        )
E       ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/dao.py)

tests/tests_model/test_dao.py:13: ImportError
________________________________________________________ ERROR at setup of test_get_all_chunks_source_documents ________________________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4500444304'>, <MagicMock name='client' id='4500449360'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
        """Apply mocks before importing `aws_helpers`."""
        global send_file_to_db, send_learning_to_db, send_chunks_to_db, \
            get_all_chunks, get_all_topics, get_name_from_datbase, remove_by_learning_id, \
            remove_document_from_source_documents, connect_db, NamePurposeTopics
>       from model.dao import (
            send_file_to_db,
            send_learning_to_db,
            send_chunks_to_db,
            get_all_chunks,
            get_all_topics,
            get_name_from_datbase,
            remove_by_learning_id,
            remove_document_from_source_documents,
            connect_db,
        )
E       ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/dao.py)

tests/tests_model/test_dao.py:13: ImportError
______________________________________________________________ ERROR at setup of test_get_all_topics_none ______________________________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4500444304'>, <MagicMock name='client' id='4500449360'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
        """Apply mocks before importing `aws_helpers`."""
        global send_file_to_db, send_learning_to_db, send_chunks_to_db, \
            get_all_chunks, get_all_topics, get_name_from_datbase, remove_by_learning_id, \
            remove_document_from_source_documents, connect_db, NamePurposeTopics
>       from model.dao import (
            send_file_to_db,
            send_learning_to_db,
            send_chunks_to_db,
            get_all_chunks,
            get_all_topics,
            get_name_from_datbase,
            remove_by_learning_id,
            remove_document_from_source_documents,
            connect_db,
        )
E       ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/dao.py)

tests/tests_model/test_dao.py:13: ImportError
________________________________________________________ ERROR at setup of test_get_all_topics_source_documents ________________________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4500444304'>, <MagicMock name='client' id='4500449360'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
        """Apply mocks before importing `aws_helpers`."""
        global send_file_to_db, send_learning_to_db, send_chunks_to_db, \
            get_all_chunks, get_all_topics, get_name_from_datbase, remove_by_learning_id, \
            remove_document_from_source_documents, connect_db, NamePurposeTopics
>       from model.dao import (
            send_file_to_db,
            send_learning_to_db,
            send_chunks_to_db,
            get_all_chunks,
            get_all_topics,
            get_name_from_datbase,
            remove_by_learning_id,
            remove_document_from_source_documents,
            connect_db,
        )
E       ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/dao.py)

tests/tests_model/test_dao.py:13: ImportError
________________________________________________________ ERROR at setup of test_remove_by_learning_id_not_found ________________________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4500444304'>, <MagicMock name='client' id='4500449360'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
        """Apply mocks before importing `aws_helpers`."""
        global send_file_to_db, send_learning_to_db, send_chunks_to_db, \
            get_all_chunks, get_all_topics, get_name_from_datbase, remove_by_learning_id, \
            remove_document_from_source_documents, connect_db, NamePurposeTopics
>       from model.dao import (
            send_file_to_db,
            send_learning_to_db,
            send_chunks_to_db,
            get_all_chunks,
            get_all_topics,
            get_name_from_datbase,
            remove_by_learning_id,
            remove_document_from_source_documents,
            connect_db,
        )
E       ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/dao.py)

tests/tests_model/test_dao.py:13: ImportError
_______________________________________________________ ERROR at setup of test_remove_by_learning_id_delete_one ________________________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4500444304'>, <MagicMock name='client' id='4500449360'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
        """Apply mocks before importing `aws_helpers`."""
        global send_file_to_db, send_learning_to_db, send_chunks_to_db, \
            get_all_chunks, get_all_topics, get_name_from_datbase, remove_by_learning_id, \
            remove_document_from_source_documents, connect_db, NamePurposeTopics
>       from model.dao import (
            send_file_to_db,
            send_learning_to_db,
            send_chunks_to_db,
            get_all_chunks,
            get_all_topics,
            get_name_from_datbase,
            remove_by_learning_id,
            remove_document_from_source_documents,
            connect_db,
        )
E       ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/dao.py)

tests/tests_model/test_dao.py:13: ImportError
________________________________________________ ERROR at setup of test_remove_document_from_source_documents_not_found ________________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4500444304'>, <MagicMock name='client' id='4500449360'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
        """Apply mocks before importing `aws_helpers`."""
        global send_file_to_db, send_learning_to_db, send_chunks_to_db, \
            get_all_chunks, get_all_topics, get_name_from_datbase, remove_by_learning_id, \
            remove_document_from_source_documents, connect_db, NamePurposeTopics
>       from model.dao import (
            send_file_to_db,
            send_learning_to_db,
            send_chunks_to_db,
            get_all_chunks,
            get_all_topics,
            get_name_from_datbase,
            remove_by_learning_id,
            remove_document_from_source_documents,
            connect_db,
        )
E       ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/dao.py)

tests/tests_model/test_dao.py:13: ImportError
_______________________________________________ ERROR at setup of test_remove_document_from_source_documents_update_one ________________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4500444304'>, <MagicMock name='client' id='4500449360'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
        """Apply mocks before importing `aws_helpers`."""
        global send_file_to_db, send_learning_to_db, send_chunks_to_db, \
            get_all_chunks, get_all_topics, get_name_from_datbase, remove_by_learning_id, \
            remove_document_from_source_documents, connect_db, NamePurposeTopics
>       from model.dao import (
            send_file_to_db,
            send_learning_to_db,
            send_chunks_to_db,
            get_all_chunks,
            get_all_topics,
            get_name_from_datbase,
            remove_by_learning_id,
            remove_document_from_source_documents,
            connect_db,
        )
E       ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/dao.py)

tests/tests_model/test_dao.py:13: ImportError
__________________________________________________________________ ERROR at setup of test_connect_db ___________________________________________________________________

mock_get_settings_and_boto3 = (<MagicMock name='get_settings' id='4500444304'>, <MagicMock name='client' id='4500449360'>)

    @pytest.fixture(scope="module", autouse=True)
    def setup_mocked_aws_helpers(mock_get_settings_and_boto3):
        """Apply mocks before importing `aws_helpers`."""
        global send_file_to_db, send_learning_to_db, send_chunks_to_db, \
            get_all_chunks, get_all_topics, get_name_from_datbase, remove_by_learning_id, \
            remove_document_from_source_documents, connect_db, NamePurposeTopics
>       from model.dao import (
            send_file_to_db,
            send_learning_to_db,
            send_chunks_to_db,
            get_all_chunks,
            get_all_topics,
            get_name_from_datbase,
            remove_by_learning_id,
            remove_document_from_source_documents,
            connect_db,
        )
E       ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-document-management/src/model/dao.py)

tests/tests_model/test_dao.py:13: ImportError
=========================================================================== warnings summary ===========================================================================
tests/tests_model/test_dao.py::test_send_learning_to_db_exception
tests/tests_model/test_dao.py::test_send_learning_to_db_exception
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
src/model/aws/aws_helpers.py                                           38     38     0%
src/model/chunk_and_vectorise.py                                       56     56     0%
src/model/content_creation/__init__.py                                  0      0   100%
src/model/content_creation/content_creation_funcs.py                   56     56     0%
src/model/content_creation/llama3handler.py                            44     44     0%
src/model/content_creation/prompt_builder.py                           54     54     0%
src/model/csi/__init__.py                                               0      0   100%
src/model/csi/secrets_loader.py                                        22     18    18%
src/model/dao.py                                                      124    103    17%
src/model/db_connection.py                                             25     19    24%
src/model/doc_exporter.py                                              92     92     0%
src/model/embeddings_model_config.py                                    7      7     0%
src/model/gail_util_funcs.py                                           64     64     0%
src/model/generate_powerpoint/__init__.py                               0      0   100%
src/model/generate_powerpoint/combine_script_and_bullets.py            10     10     0%
src/model/generate_powerpoint/generate_powerpoint_presentation.py     226    226     0%
src/model/get_relevant_chunks.py                                      108    108     0%
src/model/pii_mask.py                                                  60     60     0%
src/model/process_uploaded_file.py                                     97     97     0%
src/model/scan_file_for_malware.py                                     22     22     0%
---------------------------------------------------------------------------------------
TOTAL                                                                1375   1303     5%

======================================================================= short test summary info ========================================================================
ERROR tests/tests_model/test_dao.py::test_send_learning_to_db_exception - ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-...
ERROR tests/tests_model/test_dao.py::test_send_chunks_to_db_exception - ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-...
ERROR tests/tests_model/test_dao.py::test_get_all_chunks_exception - ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-...
ERROR tests/tests_model/test_dao.py::test_send_file_to_db - ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-...
ERROR tests/tests_model/test_dao.py::test_send_file_to_db_exception - ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-...
ERROR tests/tests_model/test_dao.py::test_send_learning_to_db - ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-...
ERROR tests/tests_model/test_dao.py::test_send_chunks_to_db - ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-...
ERROR tests/tests_model/test_dao.py::test_get_all_chunks - ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-...
ERROR tests/tests_model/test_dao.py::test_get_all_topics - ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-...
ERROR tests/tests_model/test_dao.py::test_get_name_from_database - ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-...
ERROR tests/tests_model/test_dao.py::test_get_name_from_database_not_found - ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-...
ERROR tests/tests_model/test_dao.py::test_get_name_from_database_invalid_id - ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-...
ERROR tests/tests_model/test_dao.py::test_get_name_from_database_exception - ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-...
ERROR tests/tests_model/test_dao.py::test_remove_by_learning_id - ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-...
ERROR tests/tests_model/test_dao.py::test_remove_document_from_source_documents - ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-...
ERROR tests/tests_model/test_dao.py::test_get_all_chunks_none - ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-...
ERROR tests/tests_model/test_dao.py::test_get_all_chunks_source_documents - ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-...
ERROR tests/tests_model/test_dao.py::test_get_all_topics_none - ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-...
ERROR tests/tests_model/test_dao.py::test_get_all_topics_source_documents - ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-...
ERROR tests/tests_model/test_dao.py::test_remove_by_learning_id_not_found - ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-...
ERROR tests/tests_model/test_dao.py::test_remove_by_learning_id_delete_one - ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-...
ERROR tests/tests_model/test_dao.py::test_remove_document_from_source_documents_not_found - ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-...
ERROR tests/tests_model/test_dao.py::test_remove_document_from_source_documents_update_one - ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-...
ERROR tests/tests_model/test_dao.py::test_connect_db - ImportError: cannot import name 'send_file_to_db' from 'model.dao' (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/content-creation-...
