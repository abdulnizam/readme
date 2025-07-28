#11 [7/9] RUN npm config set registry https://nexus.nonprod.dwpcloud.uk/repository/npm/     && npm config set strict-ssl false     && npm install prisma@5.17.0
#11 0.613 npm warn Unknown builtin config "globalignorefile". This will stop working in the next major version of npm.
#11 0.613 npm warn Unknown builtin config "python". This will stop working in the next major version of npm.
#11 0.798 npm warn Unknown builtin config "globalignorefile". This will stop working in the next major version of npm.
#11 0.799 npm warn Unknown builtin config "python". This will stop working in the next major version of npm.
#11 0.962 npm warn Unknown builtin config "globalignorefile". This will stop working in the next major version of npm.
#11 0.963 npm warn Unknown builtin config "python". This will stop working in the next major version of npm.
#11 12.30 
#11 12.30 added 6 packages in 11s
#11 DONE 15.9s
#12 [8/9] RUN echo 'import re; file_path = next(p for p in __import__("pathlib").Path("/usr/local/lib/python3.12/site-packages").glob("**/azure_ai_search.py") if "langchain_community/retrievers" in str(p)); content = file_path.read_text(); new_function = """    def _build_search_url(self, query: str) -> str:\n        url_suffix = get_from_env("", "AZURE_AI_SEARCH_URL_SUFFIX", DEFAULT_URL_SUFFIX)\n\n        if "://" in self.service_name:\n            protocol, remaining = self.service_name.split("://", 1)\n            has_protocol = True\n        else:\n            protocol = "https"\n            remaining = self.service_name\n            has_protocol = False\n\n        if url_suffix in remaining:\n            base_url = f"{protocol}://{remaining}/" if not has_protocol else f"{self.service_name}/"\n        else:\n            base_url = f"{protocol}://{remaining}.{url_suffix}/"\n\n        endpoint_path = f"indexes/{self.index_name}/docs?api-version={self.api_version}"\n        top_param = f"&$top={self.top_k}" if self.top_k else ""\n        filter_param = f"&$filter={self.filter}" if self.filter else ""\n\n        return base_url + endpoint_path + f"&search={query}" + top_param + filter_param"""; pattern = r"    def _build_search_url\(self, query: str\) -> str:[\s\S]*?(?=\n    @property|\n    def _search)"; file_path.write_text(re.sub(pattern, new_function, content))' | python
#12 DONE 0.9s
#13 [9/9] RUN chown -R appuser:appuser /app     && ./node_modules/.bin/prisma generate     && python -m spacy download en_core_web_lg     && python -c "import spacy; nlp = spacy.load('en_core_web_lg'); print('SpaCy model loaded.')"
#13 14.48 Prisma schema loaded from schema.prisma
#13 17.13 Warning: The binaryTargets option is not officially supported by Prisma Client Python.
#13 18.24 
#13 18.24 ✔ Generated Prisma Client Python (v0.15.0) to ./../usr/local/lib/python3.12/site-packages/prisma in 1.12s
#13 18.24 
#13 19.38 Traceback (most recent call last):
#13 19.38   File "/usr/local/lib/python3.12/site-packages/urllib3/connectionpool.py", line 787, in urlopen
#13 19.38     response = self._make_request(
#13 19.38                ^^^^^^^^^^^^^^^^^^^
#13 19.38   File "/usr/local/lib/python3.12/site-packages/urllib3/connectionpool.py", line 488, in _make_request
#13 19.38     raise new_e
#13 19.38   File "/usr/local/lib/python3.12/site-packages/urllib3/connectionpool.py", line 464, in _make_request
#13 19.38     self._validate_conn(conn)
#13 19.38   File "/usr/local/lib/python3.12/site-packages/urllib3/connectionpool.py", line 1093, in _validate_conn
#13 19.38     conn.connect()
#13 19.38   File "/usr/local/lib/python3.12/site-packages/urllib3/connection.py", line 790, in connect
#13 19.38     sock_and_verified = _ssl_wrap_socket_and_match_hostname(
#13 19.38                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
#13 19.38   File "/usr/local/lib/python3.12/site-packages/urllib3/connection.py", line 969, in _ssl_wrap_socket_and_match_hostname
#13 19.38     ssl_sock = ssl_wrap_socket(
#13 19.38                ^^^^^^^^^^^^^^^^
#13 19.38   File "/usr/local/lib/python3.12/site-packages/urllib3/util/ssl_.py", line 480, in ssl_wrap_socket
#13 19.38     ssl_sock = _ssl_wrap_socket_impl(sock, context, tls_in_tls, server_hostname)
#13 19.38                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
#13 19.38   File "/usr/local/lib/python3.12/site-packages/urllib3/util/ssl_.py", line 524, in _ssl_wrap_socket_impl
#13 19.39     return ssl_context.wrap_socket(sock, server_hostname=server_hostname)
#13 19.39            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
#13 19.39   File "/usr/local/lib/python3.12/ssl.py", line 455, in wrap_socket
#13 19.39     return self.sslsocket_class._create(
#13 19.39            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
#13 19.39   File "/usr/local/lib/python3.12/ssl.py", line 1041, in _create
#13 19.39     self.do_handshake()
#13 19.39   File "/usr/local/lib/python3.12/ssl.py", line 1319, in do_handshake
#13 19.39     self._sslobj.do_handshake()
#13 19.39 ConnectionResetError: [Errno 104] Connection reset by peer
#13 19.39 
#13 19.39 During handling of the above exception, another exception occurred:
#13 19.39 
#13 19.39 Traceback (most recent call last):
#13 19.39   File "/usr/local/lib/python3.12/site-packages/requests/adapters.py", line 667, in send
#13 19.39     resp = conn.urlopen(
#13 19.39            ^^^^^^^^^^^^^
#13 19.39   File "/usr/local/lib/python3.12/site-packages/urllib3/connectionpool.py", line 841, in urlopen
#13 19.39     retries = retries.increment(
#13 19.39               ^^^^^^^^^^^^^^^^^^
#13 19.39   File "/usr/local/lib/python3.12/site-packages/urllib3/util/retry.py", line 474, in increment
#13 19.39     raise reraise(type(error), error, _stacktrace)
#13 19.39           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
#13 19.39   File "/usr/local/lib/python3.12/site-packages/urllib3/util/util.py", line 38, in reraise
#13 19.39     raise value.with_traceback(tb)
#13 19.39   File "/usr/local/lib/python3.12/site-packages/urllib3/connectionpool.py", line 787, in urlopen
#13 19.39     response = self._make_request(
#13 19.39                ^^^^^^^^^^^^^^^^^^^
#13 19.39   File "/usr/local/lib/python3.12/site-packages/urllib3/connectionpool.py", line 488, in _make_request
#13 19.39     raise new_e
#13 19.39   File "/usr/local/lib/python3.12/site-packages/urllib3/connectionpool.py", line 464, in _make_request
#13 19.39     self._validate_conn(conn)
#13 19.39   File "/usr/local/lib/python3.12/site-packages/urllib3/connectionpool.py", line 1093, in _validate_conn
#13 19.39     conn.connect()
#13 19.39   File "/usr/local/lib/python3.12/site-packages/urllib3/connection.py", line 790, in connect
#13 19.39     sock_and_verified = _ssl_wrap_socket_and_match_hostname(
#13 19.39                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
#13 19.39   File "/usr/local/lib/python3.12/site-packages/urllib3/connection.py", line 969, in _ssl_wrap_socket_and_match_hostname
#13 19.39     ssl_sock = ssl_wrap_socket(
#13 19.39                ^^^^^^^^^^^^^^^^
#13 19.39   File "/usr/local/lib/python3.12/site-packages/urllib3/util/ssl_.py", line 480, in ssl_wrap_socket
#13 19.39     ssl_sock = _ssl_wrap_socket_impl(sock, context, tls_in_tls, server_hostname)
#13 19.39                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
#13 19.39   File "/usr/local/lib/python3.12/site-packages/urllib3/util/ssl_.py", line 524, in _ssl_wrap_socket_impl
#13 19.39     return ssl_context.wrap_socket(sock, server_hostname=server_hostname)
#13 19.39            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
#13 19.39   File "/usr/local/lib/python3.12/ssl.py", line 455, in wrap_socket
#13 19.39     return self.sslsocket_class._create(
#13 19.39            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
#13 19.39   File "/usr/local/lib/python3.12/ssl.py", line 1041, in _create
#13 19.39     self.do_handshake()
#13 19.39   File "/usr/local/lib/python3.12/ssl.py", line 1319, in do_handshake
#13 19.39     self._sslobj.do_handshake()
#13 19.39 urllib3.exceptions.ProtocolError: ('Connection aborted.', ConnectionResetError(104, 'Connection reset by peer'))
#13 19.39 
#13 19.39 During handling of the above exception, another exception occurred:
#13 19.39 
#13 19.39 Traceback (most recent call last):
#13 19.39   File "<frozen runpy>", line 198, in _run_module_as_main
#13 19.39   File "<frozen runpy>", line 88, in _run_code
#13 19.39   File "/usr/local/lib/python3.12/site-packages/spacy/__main__.py", line 4, in <module>
#13 19.39     setup_cli()
#13 19.39   File "/usr/local/lib/python3.12/site-packages/spacy/cli/_util.py", line 87, in setup_cli
#13 19.39     command(prog_name=COMMAND)
#13 19.39   File "/usr/local/lib/python3.12/site-packages/click/core.py", line 1442, in __call__
#13 19.39     return self.main(*args, **kwargs)
#13 19.39            ^^^^^^^^^^^^^^^^^^^^^^^^^^
#13 19.39   File "/usr/local/lib/python3.12/site-packages/typer/core.py", line 757, in main
#13 19.40     return _main(
#13 19.40            ^^^^^^
#13 19.40   File "/usr/local/lib/python3.12/site-packages/typer/core.py", line 195, in _main
#13 19.40     rv = self.invoke(ctx)
#13 19.40          ^^^^^^^^^^^^^^^^
#13 19.40   File "/usr/local/lib/python3.12/site-packages/click/core.py", line 1830, in invoke
#13 19.40     return _process_result(sub_ctx.command.invoke(sub_ctx))
#13 19.40                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
#13 19.40   File "/usr/local/lib/python3.12/site-packages/click/core.py", line 1226, in invoke
#13 19.40     return ctx.invoke(self.callback, **ctx.params)
#13 19.40            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
#13 19.40   File "/usr/local/lib/python3.12/site-packages/click/core.py", line 794, in invoke
#13 19.40     return callback(*args, **kwargs)
#13 19.40            ^^^^^^^^^^^^^^^^^^^^^^^^^
#13 19.40   File "/usr/local/lib/python3.12/site-packages/typer/main.py", line 699, in wrapper
#13 19.40     return callback(**use_params)
#13 19.40            ^^^^^^^^^^^^^^^^^^^^^^
#13 19.40   File "/usr/local/lib/python3.12/site-packages/spacy/cli/download.py", line 44, in download_cli
#13 19.40     download(model, direct, sdist, *ctx.args)
#13 19.40   File "/usr/local/lib/python3.12/site-packages/spacy/cli/download.py", line 85, in download
#13 19.40     compatibility = get_compatibility()
#13 19.40                     ^^^^^^^^^^^^^^^^^^^
#13 19.40   File "/usr/local/lib/python3.12/site-packages/spacy/cli/download.py", line 130, in get_compatibility
#13 19.40     r = requests.get(about.__compatibility__)
#13 19.40         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
#13 19.40   File "/usr/local/lib/python3.12/site-packages/requests/api.py", line 73, in get
#13 19.40     return request("get", url, params=params, **kwargs)
#13 19.40            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
#13 19.40   File "/usr/local/lib/python3.12/site-packages/requests/api.py", line 59, in request
#13 19.40     return session.request(method=method, url=url, **kwargs)
#13 19.40            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
#13 19.40   File "/usr/local/lib/python3.12/site-packages/requests/sessions.py", line 589, in request
#13 19.40     resp = self.send(prep, **send_kwargs)
#13 19.40            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
#13 19.40   File "/usr/local/lib/python3.12/site-packages/requests/sessions.py", line 703, in send
#13 19.40     r = adapter.send(request, **kwargs)
#13 19.40         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
#13 19.40   File "/usr/local/lib/python3.12/site-packages/requests/adapters.py", line 682, in send
#13 19.40     raise ConnectionError(err, request=request)
#13 19.40 requests.exceptions.ConnectionError: ('Connection aborted.', ConnectionResetError(104, 'Connection reset by peer'))
#13 ERROR: process "/bin/sh -c chown -R appuser:appuser /app     && ./node_modules/.bin/prisma generate     && python -m spacy download en_core_web_lg     && python -c \"import spacy; nlp = spacy.load('en_core_web_lg'); print('SpaCy model loaded.')\"" did not complete successfully: exit code: 1
------
 > [9/9] RUN chown -R appuser:appuser /app     && ./node_modules/.bin/prisma generate     && python -m spacy download en_core_web_lg     && python -c "import spacy; nlp = spacy.load('en_core_web_lg'); print('SpaCy model loaded.')":
19.40            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
19.40   File "/usr/local/lib/python3.12/site-packages/requests/sessions.py", line 589, in request
19.40     resp = self.send(prep, **send_kwargs)
19.40            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
19.40   File "/usr/local/lib/python3.12/site-packages/requests/sessions.py", line 703, in send
19.40     r = adapter.send(request, **kwargs)
19.40         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
19.40   File "/usr/local/lib/python3.12/site-packages/requests/adapters.py", line 682, in send
19.40     raise ConnectionError(err, request=request)
19.40 requests.exceptions.ConnectionError: ('Connection aborted.', ConnectionResetError(104, 'Connection reset by peer'))
------
Dockerfile:50
--------------------
  49 |     # Generate Prisma client and install Spacy model
  50 | >>> RUN chown -R appuser:appuser /app \
  51 | >>>     && ./node_modules/.bin/prisma generate \
  52 | >>>     && python -m spacy download en_core_web_lg \
  53 | >>>     && python -c "import spacy; nlp = spacy.load('en_core_web_lg'); print('SpaCy model loaded.')"
  54 |     
--------------------
ERROR: failed to solve: process "/bin/sh -c chown -R appuser:appuser /app     && ./node_modules/.bin/prisma generate     && python -m spacy download en_core_web_lg     && python -c \"import spacy; nlp = spacy.load('en_core_web_lg'); print('SpaCy model loaded.')\"" did not complete successfully: exit code: 1
