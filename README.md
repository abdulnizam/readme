
FROM python:3.12-alpine@sha256:c610e4a94a0e8b888b4b225bfc0e6b59dee607b1e61fb63ff3926083ff617216

# Create non-root user
RUN addgroup -S appuser && adduser -S appuser -G appuser

WORKDIR /app

COPY . /app

# Set environment variables for Prisma cache and tmp dir
ENV PRISMA_PYTHON_CACHE_DIR=/app/.prisma_cache \
    PRISMA_BINARY_CACHE_DIR=/app/.prisma_cache \
    TMPDIR=/app/tmp

# Prepare cache directories with open permissions
RUN mkdir -p "$PRISMA_PYTHON_CACHE_DIR" "$TMPDIR" \
    && chmod -R 777 "$PRISMA_PYTHON_CACHE_DIR" "$TMPDIR"

# Install base packages, dependencies, Node.js, and Prisma CLI
RUN apk update \
    && apk add --no-cache \
        ca-certificates \
        cargo \
        curl \
        g++ \
        gcc \
        openssl \
        rust \
        nodejs \
        npm \
    && update-ca-certificates \
    && pip install --upgrade pip \
    && pip install --default-timeout=100 -r requirements.txt \
    && npm install -g npm \
    && npm config set registry https://nexus.nonprod.dwpcloud.uk/repository/npm/ \
    && npm install prisma@5.17.0 \
    && ln -s /usr/lib/libssl.so.1.1 /usr/lib/libssl.so || true \
    && ln -s /usr/lib/libcrypto.so.1.1 /usr/lib/libcrypto.so || true

# Patch AzureAISearchRetriever to fix HTTP protocol handling
RUN echo 'import re; \
file_path = next(p for p in __import__("pathlib").Path("/usr/local/lib/python3.12/site-packages").glob("**/azure_ai_search.py") if "langchain_community/retrievers" in str(p)); \
content = file_path.read_text(); \
new_function = """    def _build_search_url(self, query: str) -> str:\n        url_suffix = get_from_env("", "AZURE_AI_SEARCH_URL_SUFFIX", DEFAULT_URL_SUFFIX)\n\n        if "://" in self.service_name:\n            protocol, remaining = self.service_name.split("://", 1)\n            has_protocol = True\n        else:\n            protocol = "https"\n            remaining = self.service_name\n            has_protocol = False\n\n        if url_suffix in remaining:\n            base_url = f"{protocol}://{remaining}/" if not has_protocol else f"{self.service_name}/"\n        else:\n            base_url = f"{protocol}://{remaining}.{url_suffix}/"\n\n        endpoint_path = f"indexes/{self.index_name}/docs?api-version={self.api_version}"\n        top_param = f"&$top={self.top_k}" if self.top_k else ""\n        filter_param = f"&$filter={self.filter}" if self.filter else ""\n\n        return base_url + endpoint_path + f"&search={query}" + top_param + filter_param"""; \
pattern = r"    def _build_search_url\(self, query: str\) -> str:[\s\S]*?(?=\n    @property|\n    def _search)"; \
file_path.write_text(re.sub(pattern, new_function, content))' | python

# Run Prisma generate
RUN chown -R appuser:appuser /app \
    && npx prisma generate \
    # Install en_core_web_lg model
    && python -m spacy download en_core_web_lg \
    && python -c "import spacy; nlp = spacy.load('en_core_web_lg'); print('en_core_web_lg loaded successfully by spacy.load()!')"

# Switch to non-root user
USER appuser

EXPOSE 5001

ENV NAME="a-cubed-backend"

CMD ["python", "app.py"]

now getting this error

Use the --root-user-action option if you know what you are doing and want to suppress this warning.
#10 94.56 npm warn Unknown builtin config "globalignorefile". This will stop working in the next major version of npm.
#10 94.57 npm warn Unknown builtin config "python". This will stop working in the next major version of npm.
#10 165.1 npm error code ECONNRESET
#10 165.1 npm error syscall read
#10 165.1 npm error errno ECONNRESET
#10 165.1 npm error network request to https://registry.npmjs.org/npm failed, reason: read ECONNRESET
#10 165.1 npm error network This is a problem related to network connectivity.
#10 165.1 npm error network In most cases you are behind a proxy or have bad network settings.
#10 165.1 npm error network
#10 165.1 npm error network If you are behind a proxy, please make sure that the
#10 165.1 npm error network 'proxy' config is set properly.  See: 'npm help config'
#10 165.1 npm error A complete log of this run can be found in: /root/.npm/_logs/2025-07-28T10_01_28_065Z-debug-0.log
#10 DONE 165.5s
#11 [7/8] RUN echo 'import re; file_path = next(p for p in __import__("pathlib").Path("/usr/local/lib/python3.12/site-packages").glob("**/azure_ai_search.py") if "langchain_community/retrievers" in str(p)); content = file_path.read_text(); new_function = """    def _build_search_url(self, query: str) -> str:\n        url_suffix = get_from_env("", "AZURE_AI_SEARCH_URL_SUFFIX", DEFAULT_URL_SUFFIX)\n\n        if "://" in self.service_name:\n            protocol, remaining = self.service_name.split("://", 1)\n            has_protocol = True\n        else:\n            protocol = "https"\n            remaining = self.service_name\n            has_protocol = False\n\n        if url_suffix in remaining:\n            base_url = f"{protocol}://{remaining}/" if not has_protocol else f"{self.service_name}/"\n        else:\n            base_url = f"{protocol}://{remaining}.{url_suffix}/"\n\n        endpoint_path = f"indexes/{self.index_name}/docs?api-version={self.api_version}"\n        top_param = f"&$top={self.top_k}" if self.top_k else ""\n        filter_param = f"&$filter={self.filter}" if self.filter else ""\n\n        return base_url + endpoint_path + f"&search={query}" + top_param + filter_param"""; pattern = r"    def _build_search_url\(self, query: str\) -> str:[\s\S]*?(?=\n    @property|\n    def _search)"; file_path.write_text(re.sub(pattern, new_function, content))' | python
#11 DONE 0.8s
#12 [8/8] RUN chown -R appuser:appuser /app     && npx prisma generate     && python -m spacy download en_core_web_lg     && python -c "import spacy; nlp = spacy.load('en_core_web_lg'); print('en_core_web_lg loaded successfully by spacy.load()!')"
#12 10.26 npm warn Unknown builtin config "globalignorefile". This will stop working in the next major version of npm.
#12 10.26 npm warn Unknown builtin config "python". This will stop working in the next major version of npm.
#12 11.51 Installing Prisma CLI
#12 82.22 An error ocurred while installing the Prisma CLI; npm install log: npm warn Unknown builtin config "globalignorefile". This will stop working in the next major version of npm.
#12 82.22 npm warn Unknown builtin config "python". This will stop working in the next major version of npm.
#12 82.22 npm warn Unknown env config "globalignorefile". This will stop working in the next major version of npm.
#12 82.22 npm warn Unknown env config "python". This will stop working in the next major version of npm.
#12 82.22 npm error code ECONNRESET
#12 82.22 npm error syscall read
#12 82.22 npm error errno ECONNRESET
#12 82.22 npm error network request to https://registry.npmjs.org/prisma failed, reason: read ECONNRESET
#12 82.22 npm error network This is a problem related to network connectivity.
#12 82.22 npm error network In most cases you are behind a proxy or have bad network settings.
#12 82.22 npm error network
#12 82.22 npm error network If you are behind a proxy, please make sure that the
#12 82.22 npm error network 'proxy' config is set properly.  See: 'npm help config'
#12 82.22 npm error A complete log of this run can be found in: /root/.npm/_logs/2025-07-28T10_02_51_630Z-debug-0.log
#12 82.22 
#12 82.22 Traceback (most recent call last):
#12 82.22   File "/usr/local/bin/prisma", line 8, in <module>
#12 82.22     sys.exit(main())
#12 82.22              ^^^^^^
#12 82.22   File "/usr/local/lib/python3.12/site-packages/prisma/cli/cli.py", line 37, in main
#12 82.22     sys.exit(prisma.run(args[1:]))
#12 82.22              ^^^^^^^^^^^^^^^^^^^^
#12 82.22   File "/usr/local/lib/python3.12/site-packages/prisma/cli/prisma.py", line 35, in run
#12 82.23     entrypoint = ensure_cached().entrypoint
#12 82.23                  ^^^^^^^^^^^^^^^
#12 82.23   File "/usr/local/lib/python3.12/site-packages/prisma/cli/prisma.py", line 99, in ensure_cached
#12 82.23     proc.check_returncode()
#12 82.23   File "/usr/local/lib/python3.12/subprocess.py", line 502, in check_returncode
#12 82.23     raise CalledProcessError(self.returncode, self.args, self.stdout,
#12 82.23 subprocess.CalledProcessError: Command '['/usr/bin/npm', 'install', 'prisma@5.17.0']' returned non-zero exit status 1.
#12 ERROR: process "/bin/sh -c chown -R appuser:appuser /app     && npx prisma generate     && python -m spacy download en_core_web_lg     && python -c \"import spacy; nlp = spacy.load('en_core_web_lg'); print('en_core_web_lg loaded successfully by spacy.load()!')\"" did not complete successfully: exit code: 1
------
 > [8/8] RUN chown -R appuser:appuser /app     && npx prisma generate     && python -m spacy download en_core_web_lg     && python -c "import spacy; nlp = spacy.load('en_core_web_lg'); print('en_core_web_lg loaded successfully by spacy.load()!')":
82.22     sys.exit(prisma.run(args[1:]))
82.22              ^^^^^^^^^^^^^^^^^^^^
82.22   File "/usr/local/lib/python3.12/site-packages/prisma/cli/prisma.py", line 35, in run
82.23     entrypoint = ensure_cached().entrypoint
82.23                  ^^^^^^^^^^^^^^^
82.23   File "/usr/local/lib/python3.12/site-packages/prisma/cli/prisma.py", line 99, in ensure_cached
82.23     proc.check_returncode()
82.23   File "/usr/local/lib/python3.12/subprocess.py", line 502, in check_returncode
82.23     raise CalledProcessError(self.returncode, self.args, self.stdout,
82.23 subprocess.CalledProcessError: Command '['/usr/bin/npm', 'install', 'prisma@5.17.0']' returned non-zero exit status 1.
------
Dockerfile:49
--------------------
  48 |     # Run Prisma generate
  49 | >>> RUN chown -R appuser:appuser /app \
  50 | >>>     && npx prisma generate \
  51 | >>>     # Install en_core_web_lg model
  52 | >>>     && python -m spacy download en_core_web_lg \
  53 | >>>     && python -c "import spacy; nlp = spacy.load('en_core_web_lg'); print('en_core_web_lg loaded successfully by spacy.load()!')"
  54 |     
--------------------
ERROR: failed to solve: process "/bin/sh -c chown -R appuser:appuser /app     && npx prisma generate     && python -m spacy download en_core_web_lg     && python -c \"import spacy; nlp = spacy.load('en_core_web_lg'); print('en_core_web_lg loaded successfully by spacy.load()!')\"" did not complete successfully: exit code: 1
