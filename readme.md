Hello World!


 RUN apk update && \
    apk add --no-cache gcc g++ musl-dev gfortran libgfortran lapack-dev openblas-dev blas-dev \
    poppler-dev pkgconfig poppler-utils cmake

# Set environment variables to help SciPy find LAPACK/BLAS
ENV BLAS=/usr/lib/libblas.so \
    LAPACK=/usr/lib/liblapack.so \
    LD_LIBRARY_PATH=/usr/lib

