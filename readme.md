Hello World!


 => ERROR [2/7] RUN apk update &&     apk add --no-cache gcc g++ musl-dev gfortran libgfortan lapack-dev blas-dev     poppler-dev pkgconfig poppler-util  1.0s
------                                                                                                                                                         
 > [2/7] RUN apk update &&     apk add --no-cache gcc g++ musl-dev gfortran libgfortan lapack-dev blas-dev     poppler-dev pkgconfig poppler-utils:            
0.071 fetch https://dl-cdn.alpinelinux.org/alpine/v3.18/main/aarch64/APKINDEX.tar.gz                                                                           
0.301 fetch https://dl-cdn.alpinelinux.org/alpine/v3.18/community/aarch64/APKINDEX.tar.gz                                                                      
0.511 v3.18.9-86-g4434729a973 [https://dl-cdn.alpinelinux.org/alpine/v3.18/main]                                                                               
0.511 v3.18.9-85-g0bcb737fe3f [https://dl-cdn.alpinelinux.org/alpine/v3.18/community]                                                                          
0.511 OK: 19965 distinct packages available
0.526 fetch https://dl-cdn.alpinelinux.org/alpine/v3.18/main/aarch64/APKINDEX.tar.gz
0.709 fetch https://dl-cdn.alpinelinux.org/alpine/v3.18/community/aarch64/APKINDEX.tar.gz
0.907 ERROR: unable to select packages:
0.907   libgfortan (no such package):
0.907     required by: world[libgfortan]
------
Dockerfile:5
--------------------
   4 |     
   5 | >>> RUN apk update && \
   6 | >>>     apk add --no-cache gcc g++ musl-dev gfortran libgfortan lapack-dev blas-dev \ 
   7 | >>>     poppler-dev pkgconfig poppler-utils
   8 |     
