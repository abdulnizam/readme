Hello World!


# Install required system dependencies with apk
RUN apk update && \
    apk add --no-cache gcc g++ musl-dev gfortran libgfortran lapack-dev blas-dev \
    poppler-dev pkgconfig poppler-utils

# Set environment variables to help SciPy find LAPACK/BLAS
ENV BLAS=/usr/lib/libblas.so \
    LAPACK=/usr/lib/liblapack.so
