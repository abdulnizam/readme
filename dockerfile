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
    && npm config set registry https://registry.npmmirror.com/ \
    && npm install prisma@5.17.0 \
    && ln -s /usr/lib/libssl.so.1.1 /usr/lib/libssl.so || true \
    && ln -s /usr/lib/libcrypto.so.1.1 /usr/lib/libcrypto.so || true

# Patch Azure AI Search Retriever (LangChain bugfix)
RUN echo 'import re; \
file_path = next(p for p in __import__("pathlib").Path("/usr/local/lib/python3.12/site-packages").glob("**/azure_ai_search.py") if "langchain_community/retrievers" in str(p)); \
content = file_path.read_text(); \
new_function = """    def _build_search_url(self, query: str) -> str:\n        url_suffix = get_from_env("", "AZURE_AI_SEARCH_URL_SUFFIX", DEFAULT_URL_SUFFIX)\n\n        if "://" in self.service_name:\n            protocol, remaining = self.service_name.split("://", 1)\n            has_protocol = True\n        else:\n            protocol = "https"\n            remaining = self.service_name\n            has_protocol = False\n\n        if url_suffix in remaining:\n            base_url = f"{protocol}://{remaining}/" if not has_protocol else f"{self.service_name}/"\n        else:\n            base_url = f"{protocol}://{remaining}.{url_suffix}/"\n\n        endpoint_path = f"indexes/{self.index_name}/docs?api-version={self.api_version}"\n        top_param = f"&$top={self.top_k}" if self.top_k else ""\n        filter_param = f"&$filter={self.filter}" if self.filter else ""\n\n        return base_url + endpoint_path + f"&search={query}" + top_param + filter_param"""; \
pattern = r"    def _build_search_url\(self, query: str\) -> str:[\s\S]*?(?=\n    @property|\n    def _search)"; \
file_path.write_text(re.sub(pattern, new_function, content))' | python

# Run Prisma generate & Spacy model download
RUN chown -R appuser:appuser /app \
    && npx prisma generate \
    && python -m spacy download en_core_web_lg \
    && python -c "import spacy; nlp = spacy.load('en_core_web_lg'); print('✅ SpaCy model loaded.')"

USER appuser

EXPOSE 5001

ENV NAME="a-cubed-backend"

CMD ["python", "app.py"]