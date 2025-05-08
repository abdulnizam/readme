# Install OpenSSL 1.1 (for Prisma compatibility)
RUN apk add --no-cache openssl1.1-compat \
 && ln -s /usr/lib/libssl.so.1.1 /usr/lib/libssl.so \
 && ln -s /usr/lib/libcrypto.so.1.1 /usr/lib/libcrypto.so


generator client {
  provider = "prisma-client-py"
  binaryTargets = ["linux-musl"]
}



docker build -t myapp .
docker run -it myapp /bin/sh
/app/.prisma_cache/node_modules/prisma/query-engine-linux-* --version