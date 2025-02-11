$ if [[ -n "$FLAKE8_IGNORE_CODES" ]]; then IGNORE_OPTION="--ignore=${FLAKE8_IGNORE_CODES}"; fi
$ if [[ -n "$FLAKE8_SELECT_CODES" ]]; then SELECT_OPTION="--select=${FLAKE8_SELECT_CODES}"; fi
$ flake8 ${IGNORE_OPTION} ${SELECT_OPTION} ${FLAKE8_ADDITIONAL_OPTS} ${SOURCE_DIR}
./src/config.py:4:80: E501 line too long (90 > 79 characters)
./src/config.py:5:1: F401 'typing.Callable' imported but unused
./src/config.py:15:80: E501 line too long (91 > 79 characters)
./src/config.py:19:1: W293 blank line contains whitespace
./src/config.py:20:1: E302 expected 2 blank lines, found 1
./src/config.py:24:80: E501 line too long (121 > 79 characters)
./src/config.py:25:80: E501 line too long (131 > 79 characters)
./src/config.py:30:5: E265 block comment should start with '# '
./src/config.py:38:1: W293 blank line contains whitespace
./src/config.py:48:1: W293 blank line contains whitespace
./src/config.py:53:80: E501 line too long (99 > 79 characters)
./src/config.py:54:80: E501 line too long (98 > 79 characters)
./src/config.py:56:80: E501 line too long (102 > 79 characters)
./src/config.py:68:59: W291 trailing whitespace
./src/config.py:69:29: E128 continuation line under-indented for visual indent
./src/config.py:70:29: E128 continuation line under-indented for visual indent
./src/config.py:71:29: E128 continuation line under-indented for visual indent
./src/config.py:72:29: E128 continuation line under-indented for visual indent
./src/config.py:72:80: E501 line too long (81 > 79 characters)
./src/config.py:73:29: E128 continuation line under-indented for visual indent
./src/config.py:82:1: W293 blank line contains whitespace
./src/config.py:87:23: W291 trailing whitespace
./src/config.py:89:1: W293 blank line contains whitespace
./src/config.py:94:1: E302 expected 2 blank lines, found 1
./src/config.py:98:1: E302 expected 2 blank lines, found 1
./src/config.py:100:26: W292 no newline at end of file
./src/controller/routes.py:7:80: E501 line too long (82 > 79 characters)
./src/controller/routes.py:14:1: F401 'config.settings' imported but unused
./src/controller/routes.py:145:1: W293 blank line contains whitespace
./src/controller/routes.py:160:5: F841 local variable 'error' is assigned to but never used
./src/controller/routes.py:219:9: W291 trailing whitespace
./src/controller/routes.py:224:1: W293 blank line contains whitespace
./src/controller/routes.py:225:80: E501 line too long (88 > 79 characters)
./src/controller/routes.py:233:80: E501 line too long (83 > 79 characters)
./src/controller/routes.py:255:80: E501 line too long (83 > 79 characters)
./src/controller/routes.py:266:80: E501 line too long (84 > 79 characters)
./src/controller/routes.py:267:80: E501 line too long (81 > 79 characters)
./src/controller/routes.py:294:80: E501 line too long (86 > 79 characters)
./src/controller/routes.py:364:80: E501 line too long (83 > 79 characters)
./src/controller/routes.py:375:80: E501 line too long (88 > 79 characters)
./src/controller/routes.py:397:80: E501 line too long (97 > 79 characters)
./src/controller/routes.py:446:80: E501 line too long (119 > 79 characters)
./src/controller/routes.py:476:80: E501 line too long (102 > 79 characters)
./src/controller/routes.py:483:80: E501 line too long (99 > 79 characters)
./src/controller/routes.py:487:80: E501 line too long (81 > 79 characters)
./src/model/aws/aws_helpers.py:9:1: E302 expected 2 blank lines, found 1
./src/model/aws/aws_helpers.py:27:1: E302 expected 2 blank lines, found 1
./src/model/aws/aws_helpers.py:48:1: E302 expected 2 blank lines, found 1
./src/model/aws/aws_helpers.py:58:80: E501 line too long (106 > 79 characters)
./src/model/aws/aws_helpers.py:63:19: W292 no newline at end of file
./src/model/chunk_and_vectorise.py:5:1: F401 'os' imported but unused
./src/model/chunk_and_vectorise.py:6:1: F401 'boto3' imported but unused
./src/model/chunk_and_vectorise.py:14:1: E302 expected 2 blank lines, found 1
./src/model/chunk_and_vectorise.py:14:80: E501 line too long (86 > 79 characters)
./src/model/chunk_and_vectorise.py:28:31: E203 whitespace before ':'
./src/model/chunk_and_vectorise.py:38:1: E302 expected 2 blank lines, found 1
./src/model/chunk_and_vectorise.py:45:80: E501 line too long (95 > 79 characters)
./src/model/chunk_and_vectorise.py:48:80: E501 line too long (100 > 79 characters)
./src/model/chunk_and_vectorise.py:52:80: E501 line too long (99 > 79 characters)
./src/model/chunk_and_vectorise.py:55:80: E501 line too long (96 > 79 characters)
./src/model/chunk_and_vectorise.py:72:1: W293 blank line contains whitespace
./src/model/chunk_and_vectorise.py:74:1: W293 blank line contains whitespace
./src/model/chunk_and_vectorise.py:77:80: E501 line too long (83 > 79 characters)
./src/model/chunk_and_vectorise.py:88:1: W293 blank line contains whitespace
./src/model/chunk_and_vectorise.py:89:1: W293 blank line contains whitespace
./src/model/chunk_and_vectorise.py:90:5: E303 too many blank lines (2)
./src/model/content_creation/content_creation_funcs.py:11:80: E501 line too long (87 > 79 characters)
./src/model/content_creation/content_creation_funcs.py:12:80: E501 line too long (81 > 79 characters)
./src/model/content_creation/content_creation_funcs.py:18:80: E501 line too long (105 > 79 characters)
./src/model/content_creation/content_creation_funcs.py:21:80: E501 line too long (123 > 79 characters)
./src/model/content_creation/content_creation_funcs.py:25:80: E501 line too long (86 > 79 characters)
./src/model/content_creation/content_creation_funcs.py:26:80: E501 line too long (90 > 79 characters)
./src/model/content_creation/content_creation_funcs.py:29:80: E501 line too long (157 > 79 characters)
./src/model/content_creation/content_creation_funcs.py:30:80: E501 line too long (102 > 79 characters)
./src/model/content_creation/content_creation_funcs.py:31:80: E501 line too long (142 > 79 characters)
./src/model/content_creation/content_creation_funcs.py:66:80: E501 line too long (85 > 79 characters)
./src/model/content_creation/content_creation_funcs.py:66:83: E203 whitespace before ':'
./src/model/content_creation/content_creation_funcs.py:85:39: E203 whitespace before ':'
./src/model/content_creation/content_creation_funcs.py:89:80: E501 line too long (86 > 79 characters)
./src/model/content_creation/content_creation_funcs.py:99:80: E501 line too long (90 > 79 characters)
./src/model/content_creation/content_creation_funcs.py:118:80: E501 line too long (93 > 79 characters)
./src/model/content_creation/content_creation_funcs.py:119:80: E501 line too long (99 > 79 characters)
./src/model/content_creation/content_creation_funcs.py:125:80: E501 line too long (103 > 79 characters)
./src/model/content_creation/content_creation_funcs.py:130:80: E501 line too long (108 > 79 characters)
./src/model/content_creation/content_creation_funcs.py:133:80: E501 line too long (84 > 79 characters)
./src/model/content_creation/content_creation_funcs.py:142:80: E501 line too long (84 > 79 characters)
./src/model/content_creation/content_creation_funcs.py:154:80: E501 line too long (97 > 79 characters)
./src/model/content_creation/content_creation_funcs.py:160:80: E501 line too long (82 > 79 characters)
./src/model/content_creation/content_creation_funcs.py:175:80: E501 line too long (87 > 79 characters)
./src/model/content_creation/content_creation_funcs.py:176:80: E501 line too long (96 > 79 characters)
./src/model/content_creation/content_creation_funcs.py:178:80: E501 line too long (98 > 79 characters)
./src/model/content_creation/content_creation_funcs.py:182:80: E501 line too long (91 > 79 characters)
./src/model/content_creation/content_creation_funcs.py:189:80: E501 line too long (82 > 79 characters)
./src/model/content_creation/llama3handler.py:2:80: E501 line too long (89 > 79 characters)
./src/model/content_creation/llama3handler.py:7:80: E501 line too long (92 > 79 characters)
./src/model/content_creation/llama3handler.py:13:80: E501 line too long (80 > 79 characters)
./src/model/content_creation/llama3handler.py:19:80: E501 line too long (85 > 79 characters)
./src/model/content_creation/llama3handler.py:61:80: E501 line too long (98 > 79 characters)
./src/model/content_creation/llama3handler.py:70:80: E501 line too long (98 > 79 characters)
./src/model/content_creation/llama3handler.py:84:80: E501 line too long (100 > 79 characters)
./src/model/content_creation/llama3handler.py:90:80: E501 line too long (100 > 79 characters)
./src/model/content_creation/llama3handler.py:103:80: E501 line too long (99 > 79 characters)
./src/model/content_creation/llama3handler.py:110:80: E501 line too long (97 > 79 characters)
./src/model/content_creation/llama3handler.py:116:80: E501 line too long (86 > 79 characters)
./src/model/content_creation/llama3handler.py:128:80: E501 line too long (83 > 79 characters)
./src/model/content_creation/llama3handler.py:133:80: E501 line too long (83 > 79 characters)
./src/model/content_creation/llama3handler.py:137:80: E501 line too long (90 > 79 characters)
./src/model/content_creation/llama3handler.py:138:80: E501 line too long (87 > 79 characters)
./src/model/content_creation/llama3handler.py:167:80: E501 line too long (97 > 79 characters)
./src/model/content_creation/llama3handler.py:170:80: E501 line too long (93 > 79 characters)
./src/model/content_creation/prompt_builder.py:36:80: E501 line too long (99 > 79 characters)
./src/model/content_creation/prompt_builder.py:45:80: E501 line too long (91 > 79 characters)
./src/model/content_creation/prompt_builder.py:50:80: E501 line too long (80 > 79 characters)
./src/model/content_creation/prompt_builder.py:52:80: E501 line too long (99 > 79 characters)
./src/model/content_creation/prompt_builder.py:55:80: E501 line too long (92 > 79 characters)
./src/model/content_creation/prompt_builder.py:57:80: E501 line too long (96 > 79 characters)
./src/model/content_creation/prompt_builder.py:76:80: E501 line too long (80 > 79 characters)
./src/model/content_creation/prompt_builder.py:83:80: E501 line too long (83 > 79 characters)
./src/model/content_creation/prompt_builder.py:93:80: E501 line too long (83 > 79 characters)
./src/model/content_creation/prompt_builder.py:94:80: E501 line too long (81 > 79 characters)
./src/model/content_creation/prompt_builder.py:95:80: E501 line too long (83 > 79 characters)
./src/model/content_creation/prompt_builder.py:126:80: E501 line too long (92 > 79 characters)
./src/model/content_creation/prompt_builder.py:127:80: E501 line too long (100 > 79 characters)
./src/model/content_creation/prompt_builder.py:128:80: E501 line too long (95 > 79 characters)
./src/model/content_creation/prompt_builder.py:142:80: E501 line too long (124 > 79 characters)
./src/model/content_creation/prompt_builder.py:171:80: E501 line too long (88 > 79 characters)
./src/model/content_creation/prompt_builder.py:175:80: E501 line too long (84 > 79 characters)
./src/model/content_creation/prompt_builder.py:176:80: E501 line too long (90 > 79 characters)
./src/model/content_creation/prompt_builder.py:178:80: E501 line too long (94 > 79 characters)
./src/model/content_creation/prompt_builder.py:180:80: E501 line too long (92 > 79 characters)
./src/model/content_creation/prompt_builder.py:194:80: E501 line too long (80 > 79 characters)
./src/model/csi/secrets_loader.py:6:1: E302 expected 2 blank lines, found 1
./src/model/csi/secrets_loader.py:19:5: E722 do not use bare 'except'
./src/model/csi/secrets_loader.py:26:5: E722 do not use bare 'except'
./src/model/csi/secrets_loader.py:29:36: W292 no newline at end of file
./src/model/dao.py:8:1: E302 expected 2 blank lines, found 1
./src/model/dao.py:13:1: E305 expected 2 blank lines after class or function definition, found 1
./src/model/dao.py:15:1: E302 expected 2 blank lines, found 1
./src/model/dao.py:20:1: W293 blank line contains whitespace
./src/model/dao.py:21:31: W291 trailing whitespace
./src/model/dao.py:23:1: E302 expected 2 blank lines, found 1
./src/model/dao.py:27:42: E203 whitespace before ':'
./src/model/dao.py:27:43: E231 missing whitespace after ':'
./src/model/dao.py:33:1: W293 blank line contains whitespace
./src/model/dao.py:34:1: E302 expected 2 blank lines, found 1
./src/model/dao.py:40:42: E202 whitespace before '}'
./src/model/dao.py:44:9: E265 block comment should start with '# '
./src/model/dao.py:48:9: E265 block comment should start with '# '
./src/model/dao.py:48:34: W291 trailing whitespace
./src/model/dao.py:53:80: E501 line too long (82 > 79 characters)
./src/model/dao.py:54:1: W293 blank line contains whitespace
./src/model/dao.py:60:1: W293 blank line contains whitespace
./src/model/dao.py:69:80: E501 line too long (88 > 79 characters)
./src/model/dao.py:70:1: W293 blank line contains whitespace
./src/model/dao.py:71:80: E501 line too long (94 > 79 characters)
./src/model/dao.py:76:80: E501 line too long (82 > 79 characters)
./src/model/dao.py:77:1: W293 blank line contains whitespace
./src/model/dao.py:78:1: E302 expected 2 blank lines, found 1
./src/model/dao.py:80:9: W291 trailing whitespace
./src/model/dao.py:84:62: E202 whitespace before '}'
./src/model/dao.py:84:80: E501 line too long (99 > 79 characters)
./src/model/dao.py:85:1: W293 blank line contains whitespace
./src/model/dao.py:92:1: W293 blank line contains whitespace
./src/model/dao.py:93:21: E711 comparison to None should be 'if cond is None:'
./src/model/dao.py:94:80: E501 line too long (102 > 79 characters)
./src/model/dao.py:95:80: E501 line too long (104 > 79 characters)
./src/model/dao.py:96:1: W293 blank line contains whitespace
./src/model/dao.py:99:1: W293 blank line contains whitespace
./src/model/dao.py:101:1: W293 blank line contains whitespace
./src/model/dao.py:104:80: E501 line too long (82 > 79 characters)
./src/model/dao.py:105:1: W293 blank line contains whitespace
./src/model/dao.py:106:1: E302 expected 2 blank lines, found 1
./src/model/dao.py:108:9: W291 trailing whitespace
./src/model/dao.py:113:39: E231 missing whitespace after ':'
./src/model/dao.py:113:80: E501 line too long (87 > 79 characters)
./src/model/dao.py:114:1: W293 blank line contains whitespace
./src/model/dao.py:121:1: W293 blank line contains whitespace
./src/model/dao.py:122:21: E711 comparison to None should be 'if cond is None:'
./src/model/dao.py:123:80: E501 line too long (102 > 79 characters)
./src/model/dao.py:124:80: E501 line too long (87 > 79 characters)
./src/model/dao.py:125:1: W293 blank line contains whitespace
./src/model/dao.py:128:1: W293 blank line contains whitespace
./src/model/dao.py:130:1: W293 blank line contains whitespace
./src/model/dao.py:133:80: E501 line too long (82 > 79 characters)
./src/model/dao.py:135:1: E302 expected 2 blank lines, found 1
./src/model/dao.py:137:9: W291 trailing whitespace
./src/model/dao.py:142:39: E231 missing whitespace after ':'
./src/model/dao.py:142:80: E501 line too long (85 > 79 characters)
./src/model/dao.py:143:1: W293 blank line contains whitespace
./src/model/dao.py:148:21: E711 comparison to None should be 'if cond is None:'
./src/model/dao.py:149:80: E501 line too long (102 > 79 characters)
./src/model/dao.py:150:80: E501 line too long (111 > 79 characters)
./src/model/dao.py:151:26: E711 comparison to None should be 'if cond is None:'
./src/model/dao.py:153:80: E501 line too long (100 > 79 characters)
./src/model/dao.py:156:80: E501 line too long (86 > 79 characters)
./src/model/dao.py:160:80: E501 line too long (83 > 79 characters)
./src/model/dao.py:164:41: E203 whitespace before ':'
./src/model/dao.py:167:80: E501 line too long (81 > 79 characters)
./src/model/dao.py:169:1: W293 blank line contains whitespace
./src/model/dao.py:170:80: E501 line too long (86 > 79 characters)
./src/model/dao.py:175:80: E501 line too long (82 > 79 characters)
./src/model/dao.py:176:1: W293 blank line contains whitespace
./src/model/dao.py:178:80: E501 line too long (84 > 79 characters)
./src/model/dao.py:186:1: W293 blank line contains whitespace
./src/model/dao.py:188:80: E501 line too long (137 > 79 characters)
./src/model/dao.py:189:80: E501 line too long (104 > 79 characters)
./src/model/dao.py:190:1: W293 blank line contains whitespace
./src/model/dao.py:191:80: E501 line too long (106 > 79 characters)
./src/model/dao.py:195:80: E501 line too long (90 > 79 characters)
./src/model/dao.py:196:80: E501 line too long (82 > 79 characters)
./src/model/dao.py:197:1: W391 blank line at end of file
./src/model/db_connection.py:2:1: F401 'bson.binary.UuidRepresentation' imported but unused
./src/model/db_connection.py:4:1: F401 'os' imported but unused
./src/model/db_connection.py:10:1: E302 expected 2 blank lines, found 1
./src/model/db_connection.py:20:1: W293 blank line contains whitespace
./src/model/db_connection.py:23:80: E501 line too long (122 > 79 characters)
./src/model/db_connection.py:24:80: E501 line too long (176 > 79 characters)
./src/model/db_connection.py:32:1: W293 blank line contains whitespace
./src/model/db_connection.py:35:21: W292 no newline at end of file
./src/model/gail_util_funcs.py:55:80: E501 line too long (95 > 79 characters)
./src/model/gail_util_funcs.py:56:80: E501 line too long (85 > 79 characters)
./src/model/gail_util_funcs.py:74:80: E501 line too long (104 > 79 characters)
./src/model/gail_util_funcs.py:86:80: E501 line too long (122 > 79 characters)
./src/model/generate_powerpoint/combine_script_and_bullets.py:3:80: E501 line too long (95 > 79 characters)
./src/model/generate_powerpoint/combine_script_and_bullets.py:4:80: E501 line too long (85 > 79 characters)
./src/model/generate_powerpoint/generate_powerpoint_presentation.py:44:1: E302 expected 2 blank lines, found 1
./src/model/generate_powerpoint/generate_powerpoint_presentation.py:59:1: E302 expected 2 blank lines, found 1
./src/model/generate_powerpoint/generate_powerpoint_presentation.py:68:32: E203 whitespace before ':'
./src/model/generate_powerpoint/generate_powerpoint_presentation.py:81:80: E501 line too long (89 > 79 characters)
./src/model/generate_powerpoint/generate_powerpoint_presentation.py:83:80: E501 line too long (94 > 79 characters)
./src/model/generate_powerpoint/generate_powerpoint_presentation.py:178:80: E501 line too long (92 > 79 characters)
./src/model/generate_powerpoint/generate_powerpoint_presentation.py:209:80: E501 line too long (80 > 79 characters)
./src/model/generate_powerpoint/generate_powerpoint_presentation.py:269:80: E501 line too long (99 > 79 characters)
./src/model/generate_powerpoint/generate_powerpoint_presentation.py:322:80: E501 line too long (91 > 79 characters)
./src/model/generate_powerpoint/generate_powerpoint_presentation.py:462:80: E501 line too long (91 > 79 characters)
./src/model/generate_powerpoint/generate_powerpoint_presentation.py:530:80: E501 line too long (89 > 79 characters)
./src/model/generate_powerpoint/generate_powerpoint_presentation.py:750:80: E501 line too long (89 > 79 characters)
./src/model/generate_powerpoint/generate_powerpoint_presentation.py:764:80: E501 line too long (80 > 79 characters)
./src/model/generate_powerpoint/generate_powerpoint_presentation.py:822:1: E402 module level import not at top of file
./src/model/generate_powerpoint/generate_powerpoint_presentation.py:824:1: E402 module level import not at top of file
