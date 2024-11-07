Hello World!

RUN apk update && \
    apk add --no-cache gcc g++ musl-dev gfortran libgfortran lapack-dev openblas-dev blas-dev \
    poppler-dev pkgconfig poppler-utils cmake ca-certificates && \
    update-ca-certificates
