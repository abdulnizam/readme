FROM python:3.12-alpine@sha256:c610e4a94a0e8b888b4b225bfc0e6b59dee607b1e61fb63ff3926083ff617216

RUN addgroup -S appuser && adduser -S appuser -G appuser

WORKDIR /app

COPY . /app

# Pre-create Prisma binary cache
ENV PRISMA_PYTHON_CACHE_DIR=/app/.prisma_cache \
    PRISMA_BINARY_CACHE_DIR=/app/.prisma_cache

RUN mkdir -p "$PRISMA_PYTHON_CACHE_DIR" \
    && chmod -R 777 "$PRISMA_PYTHON_CACHE_DIR" \
    && mkdir -p /app/tmp && chmod -R 777 /app/tmp

ENV TMPDIR=/app/tmp

RUN apk update \
    # Install compilers and packages
    && apk add --no-cache ca-certificates cargo curl g++ gcc openssl rust \
    && update-ca-certificates \
    && pip install --upgrade pip \
    && pip install --default-timeout=100 -r requirements.txt \
    && apk add --no-cache nodejs npm \
    && npm update -g npm \
    && ln -s /usr/lib/libssl.so.1.1 /usr/lib/libssl.so \
    && ln -s /usr/lib/libcrypto.so.1.1 /usr/lib/libcrypto.so \
    # Patch AzureAISearchRetriever to fix HTTP protocol handling
    && echo 'import re; \
file_path = next(p for p in __import__("pathlib").Path("/usr/local/lib/python3.12/site-packages").glob("**/azure_ai_search.py") if "langchain_community/retrievers" in str(p)); \
content = file_path.read_text(); \
new_function = """    def _build_search_url(self, query: str) -> str:\n        url_suffix = get_from_env("", "AZURE_AI_SEARCH_URL_SUFFIX", DEFAULT_URL_SUFFIX)\n\n        # Extract protocol and remaining part if protocol exists\n        if "://" in self.service_name:\n            protocol, remaining = self.service_name.split("://", 1)\n            has_protocol = True\n        else:\n            protocol = "https"  # Default to HTTPS\n            remaining = self.service_name\n            has_protocol = False\n\n        # Handle different cases based on whether service_name already contains url_suffix\n        if url_suffix in remaining:\n            base_url = f"{protocol}://{remaining}/" if not has_protocol else f"{self.service_name}/"\n        else:\n            base_url = f"{protocol}://{remaining}.{url_suffix}/"\n\n        endpoint_path = f"indexes/{self.index_name}/docs?api-version={self.api_version}"\n        top_param = f"&$top={self.top_k}" if self.top_k else ""\n        filter_param = f"&$filter={self.filter}" if self.filter else ""\n\n        return base_url + endpoint_path + f"&search={query}" + top_param + filter_param"""; \
pattern = r"    def _build_search_url\(self, query: str\) -> str:[\s\S]*?(?=\n    @property|\n    def _search)"; \
file_path.write_text(re.sub(pattern, new_function, content))' | python \
    # Change ownership of /app to appuser
    && chown -R appuser:appuser /app \
    && prisma generate \
    # Install en_core_web_lg model
    && python -m spacy download en_core_web_lg \
    && python -c "import spacy; nlp = spacy.load('en_core_web_lg'); print('en_core_web_lg loaded successfully by spacy.load()!')"

# Switch to non-root user
USER appuser

EXPOSE 5001

ENV NAME="a-cubed-backend"

CMD ["python", "app.py"]




error in the pipeline

#10 90.85 fetch https://dl-cdn.alpinelinux.org/alpine/v3.22/main/x86_64/APKINDEX.tar.gz
#10 90.92 fetch https://dl-cdn.alpinelinux.org/alpine/v3.22/community/x86_64/APKINDEX.tar.gz
#10 91.21 (1/7) Installing ada-libs (2.9.2-r4)
#10 91.22 (2/7) Installing icu-data-en (76.1-r1)
#10 91.24 Executing icu-data-en-76.1-r1.post-install
#10 91.24 *
#10 91.24 * If you need ICU with non-English locales and legacy charset support, install
#10 91.24 * package icu-data-full.
#10 91.24 *
#10 91.24 (3/7) Installing icu-libs (76.1-r1)
#10 91.27 (4/7) Installing simdjson (3.12.0-r0)
#10 91.28 (5/7) Installing simdutf (7.2.1-r0)
#10 91.28 (6/7) Installing nodejs (22.16.0-r2)
#10 91.59 (7/7) Installing npm (11.3.0-r0)
#10 91.80 Executing busybox-1.37.0-r18.trigger
#10 91.80 OK: 709 MiB in 74 packages
#10 92.03 npm warn Unknown builtin config "globalignorefile". This will stop working in the next major version of npm.
#10 92.03 npm warn Unknown builtin config "python". This will stop working in the next major version of npm.
#10 92.43 
#10 92.43 up to date in 435ms
#10 92.49 Configuring npm...
#10 92.61 npm warn Unknown builtin config "globalignorefile". This will stop working in the next major version of npm.
#10 92.61 npm warn Unknown builtin config "python". This will stop working in the next major version of npm.
#10 92.78 npm warn Unknown builtin config "globalignorefile". This will stop working in the next major version of npm.
#10 92.78 npm warn Unknown builtin config "python". This will stop working in the next major version of npm.
#10 92.81 npm error `timeout` is not a valid npm option
#10 92.81 npm error A complete log of this run can be found in: /root/.npm/_logs/2025-07-28T09_17_40_099Z-debug-0.log
#10 ERROR: process "/bin/sh -c apk update     && apk add --no-cache ca-certificates cargo curl g++ gcc openssl rust     && update-ca-certificates     && pip install --upgrade pip     && pip install --default-timeout=100 -r requirements.txt     && apk add --no-cache nodejs npm     && npm update -g npm     && echo \"Configuring npm...\"     && npm config set registry https://registry.npmmirror.com/     && npm config set timeout 300000     && echo \"Installing Prisma CLI...\"     && npm install prisma@5.17.0 --fetch-timeout=300000     && ln -s /usr/lib/libssl.so.1.1 /usr/lib/libssl.so     && ln -s /usr/lib/libcrypto.so.1.1 /usr/lib/libcrypto.so     && echo 'import re; file_path = next(p for p in __import__(\"pathlib\").Path(\"/usr/local/lib/python3.12/site-packages\").glob(\"**/azure_ai_search.py\") if \"langchain_community/retrievers\" in str(p)); content = file_path.read_text(); new_function = \"\"\"    def _build_search_url(self, query: str) -> str:\\n        url_suffix = get_from_env(\"\", \"AZURE_AI_SEARCH_URL_SUFFIX\", DEFAULT_URL_SUFFIX)\\n\\n        # Extract protocol and remaining part if protocol exists\\n        if \"://\" in self.service_name:\\n            protocol, remaining = self.service_name.split(\"://\", 1)\\n            has_protocol = True\\n        else:\\n            protocol = \"https\"  # Default to HTTPS\\n            remaining = self.service_name\\n            has_protocol = False\\n\\n        # Handle different cases based on whether service_name already contains url_suffix\\n        if url_suffix in remaining:\\n            base_url = f\"{protocol}://{remaining}/\" if not has_protocol else f\"{self.service_name}/\"\\n        else:\\n            base_url = f\"{protocol}://{remaining}.{url_suffix}/\"\\n\\n        endpoint_path = f\"indexes/{self.index_name}/docs?api-version={self.api_version}\"\\n        top_param = f\"&$top={self.top_k}\" if self.top_k else \"\"\\n        filter_param = f\"&$filter={self.filter}\" if self.filter else \"\"\\n\\n        return base_url + endpoint_path + f\"&search={query}\" + top_param + filter_param\"\"\"; pattern = r\"    def _build_search_url\\(self, query: str\\) -> str:[\\s\\S]*?(?=\\n    @property|\\n    def _search)\"; file_path.write_text(re.sub(pattern, new_function, content))' | python     && chown -R appuser:appuser /app     && prisma generate     && python -m spacy download en_core_web_lg     && python -c \"import spacy; nlp = spacy.load('en_core_web_lg'); print('en_core_web_lg loaded successfully by spacy.load()!')\"" did not complete successfully: exit code: 1
------
 > [6/6] RUN apk update     && apk add --no-cache ca-certificates cargo curl g++ gcc openssl rust     && update-ca-certificates     && pip install --upgrade pip     && pip install --default-timeout=100 -r requirements.txt     && apk add --no-cache nodejs npm     && npm update -g npm     && echo "Configuring npm..."     && npm config set registry https://registry.npmmirror.com/     && npm config set timeout 300000     && echo "Installing Prisma CLI..."     && npm install prisma@5.17.0 --fetch-timeout=300000     && ln -s /usr/lib/libssl.so.1.1 /usr/lib/libssl.so     && ln -s /usr/lib/libcrypto.so.1.1 /usr/lib/libcrypto.so     && echo 'import re; file_path = next(p for p in __import__("pathlib").Path("/usr/local/lib/python3.12/site-packages").glob("**/azure_ai_search.py") if "langchain_community/retrievers" in str(p)); content = file_path.read_text(); new_function = """    def _build_search_url(self, query: str) -> str:\n        url_suffix = get_from_env("", "AZURE_AI_SEARCH_URL_SUFFIX", DEFAULT_URL_SUFFIX)\n\n        # Extract protocol and remaining part if protocol exists\n        if "://" in self.service_name:\n            protocol, remaining = self.service_name.split("://", 1)\n            has_protocol = True\n        else:\n            protocol = "https"  # Default to HTTPS\n            remaining = self.service_name\n            has_protocol = False\n\n        # Handle different cases based on whether service_name already contains url_suffix\n        if url_suffix in remaining:\n            base_url = f"{protocol}://{remaining}/" if not has_protocol else f"{self.service_name}/"\n        else:\n            base_url = f"{protocol}://{remaining}.{url_suffix}/"\n\n        endpoint_path = f"indexes/{self.index_name}/docs?api-version={self.api_version}"\n        top_param = f"&$top={self.top_k}" if self.top_k else ""\n        filter_param = f"&$filter={self.filter}" if self.filter else ""\n\n        return base_url + endpoint_path + f"&search={query}" + top_param + filter_param"""; pattern = r"    def _build_search_url\(self, query: str\) -> str:[\s\S]*?(?=\n    @property|\n    def _search)"; file_path.write_text(re.sub(pattern, new_function, content))' | python     && chown -R appuser:appuser /app     && prisma generate     && python -m spacy download en_core_web_lg     && python -c "import spacy; nlp = spacy.load('en_core_web_lg'); print('en_core_web_lg loaded successfully by spacy.load()!')":
92.03 npm warn Unknown builtin config "python". This will stop working in the next major version of npm.
92.43 
92.43 up to date in 435ms
92.49 Configuring npm...
92.61 npm warn Unknown builtin config "globalignorefile". This will stop working in the next major version of npm.
92.61 npm warn Unknown builtin config "python". This will stop working in the next major version of npm.
92.78 npm warn Unknown builtin config "globalignorefile". This will stop working in the next major version of npm.
92.78 npm warn Unknown builtin config "python". This will stop working in the next major version of npm.
92.81 npm error `timeout` is not a valid npm option
92.81 npm error A complete log of this run can be found in: /root/.npm/_logs/2025-07-28T09_17_40_099Z-debug-0.log
------
Dockerfile:19
--------------------
  18 |     
  19 | >>> RUN apk update \
  20 | >>>     # Install compilers and packages
  21 | >>>     && apk add --no-cache ca-certificates cargo curl g++ gcc openssl rust \
  22 | >>>     && update-ca-certificates \
  23 | >>>     && pip install --upgrade pip \
  24 | >>>     && pip install --default-timeout=100 -r requirements.txt \
  25 | >>>     && apk add --no-cache nodejs npm \
  26 | >>>     && npm update -g npm \
  27 | >>>     && echo "Configuring npm..." \
  28 | >>>     && npm config set registry https://registry.npmmirror.com/ \
  29 | >>>     && npm config set timeout 300000 \
  30 | >>>     && echo "Installing Prisma CLI..." \
  31 | >>>     && npm install prisma@5.17.0 --fetch-timeout=300000 \
  32 | >>>     && ln -s /usr/lib/libssl.so.1.1 /usr/lib/libssl.so \
  33 | >>>     && ln -s /usr/lib/libcrypto.so.1.1 /usr/lib/libcrypto.so \
  34 | >>>     # Patch AzureAISearchRetriever to fix HTTP protocol handling
  35 | >>>     && echo 'import re; \
  36 | >>> file_path = next(p for p in __import__("pathlib").Path("/usr/local/lib/python3.12/site-packages").glob("**/azure_ai_search.py") if "langchain_community/retrievers" in str(p)); \
  37 | >>> content = file_path.read_text(); \
  38 | >>> new_function = """    def _build_search_url(self, query: str) -> str:\n        url_suffix = get_from_env("", "AZURE_AI_SEARCH_URL_SUFFIX", DEFAULT_URL_SUFFIX)\n\n        # Extract protocol and remaining part if protocol exists\n        if "://" in self.service_name:\n            protocol, remaining = self.service_name.split("://", 1)\n            has_protocol = True\n        else:\n            protocol = "https"  # Default to HTTPS\n            remaining = self.service_name\n            has_protocol = False\n\n        # Handle different cases based on whether service_name already contains url_suffix\n        if url_suffix in remaining:\n            base_url = f"{protocol}://{remaining}/" if not has_protocol else f"{self.service_name}/"\n        else:\n            base_url = f"{protocol}://{remaining}.{url_suffix}/"\n\n        endpoint_path = f"indexes/{self.index_name}/docs?api-version={self.api_version}"\n        top_param = f"&$top={self.top_k}" if self.top_k else ""\n        filter_param = f"&$filter={self.filter}" if self.filter else ""\n\n        return base_url + endpoint_path + f"&search={query}" + top_param + filter_param"""; \
  39 | >>> pattern = r"    def _build_search_url\(self, query: str\) -> str:[\s\S]*?(?=\n    @property|\n    def _search)"; \
  40 | >>> file_path.write_text(re.sub(pattern, new_function, content))' | python \
  41 | >>>     # Change ownership of /app to appuser
  42 | >>>     && chown -R appuser:appuser /app \
  43 | >>>     && prisma generate \
  44 | >>>     # Install en_core_web_lg model
  45 | >>>     && python -m spacy download en_core_web_lg \
  46 | >>>     && python -c "import spacy; nlp = spacy.load('en_core_web_lg'); print('en_core_web_lg loaded successfully by spacy.load()!')"
  47 |     
--------------------
ERROR: failed to solve: process "/bin/sh -c apk update     && apk add --no-cache ca-certificates cargo curl g++ gcc openssl rust     && update-ca-certificates     && pip install --upgrade pip     && pip install --default-timeout=100 -r requirements.txt     && apk add --no-cache nodejs npm     && npm update -g npm     && echo \"Configuring npm...\"     && npm config set registry https://registry.npmmirror.com/     && npm config set timeout 300000     && echo \"Installing Prisma CLI...\"     && npm install prisma@5.17.0 --fetch-timeout=300000     && ln -s /usr/lib/libssl.so.1.1 /usr/lib/libssl.so     && ln -s /usr/lib/libcrypto.so.1.1 /usr/lib/libcrypto.so     && echo 'import re; file_path = next(p for p in __import__(\"pathlib\").Path(\"/usr/local/lib/python3.12/site-packages\").glob(\"**/azure_ai_search.py\") if \"langchain_community/retrievers\" in str(p)); content = file_path.read_text(); new_function = \"\"\"    def _build_search_url(self, query: str) -> str:\\n        url_suffix = get_from_env(\"\", \"AZURE_AI_SEARCH_URL_SUFFIX\", DEFAULT_URL_SUFFIX)\\n\\n        # Extract protocol and remaining part if protocol exists\\n        if \"://\" in self.service_name:\\n            protocol, remaining = self.service_name.split(\"://\", 1)\\n            has_protocol = True\\n        else:\\n            protocol = \"https\"  # Default to HTTPS\\n            remaining = self.service_name\\n            has_protocol = False\\n\\n        # Handle different cases based on whether service_name already contains url_suffix\\n        if url_suffix in remaining:\\n            base_url = f\"{protocol}://{remaining}/\" if not has_protocol else f\"{self.service_name}/\"\\n        else:\\n            base_url = f\"{protocol}://{remaining}.{url_suffix}/\"\\n\\n        endpoint_path = f\"indexes/{self.index_name}/docs?api-version={self.api_version}\"\\n        top_param = f\"&$top={self.top_k}\" if self.top_k else \"\"\\n        filter_param = f\"&$filter={self.filter}\" if self.filter else \"\"\\n\\n        return base_url + endpoint_path + f\"&search={query}\" + top_param + filter_param\"\"\"; pattern = r\"    def _build_search_url\\(self, query: str\\) -> str:[\\s\\S]*?(?=\\n    @property|\\n    def _search)\"; file_path.write_text(re.sub(pattern, new_function, content))' | python     && chown -R appuser:appuser /app     && prisma generate     && python -m spacy download en_core_web_lg     && python -c \"import spacy; nlp = spacy.load('en_core_web_lg'); print('en_core_web_lg loaded successfully by spacy.load()!')\"" did not complete successfully: exit code: 1
