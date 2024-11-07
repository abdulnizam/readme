Hello World!


 Downloading https://nexus.nonprod.dwpcloud.uk/repository/pypi/packages/scipy/1.13.0/scipy-1.13.0.tar.gz (57.2 MB)
45.06      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 57.2/57.2 MB 12.2 MB/s eta 0:00:00
47.23   Installing build dependencies: started
58.59   Installing build dependencies: finished with status 'done'
58.60   Getting requirements to build wheel: started
58.65   Getting requirements to build wheel: finished with status 'done'
58.66   Installing backend dependencies: started
68.27   Installing backend dependencies: finished with status 'done'
68.27   Preparing metadata (pyproject.toml): started
69.62   Preparing metadata (pyproject.toml): finished with status 'error'
69.63   error: subprocess-exited-with-error
69.63   
69.63   × Preparing metadata (pyproject.toml) did not run successfully.
69.63   │ exit code: 1
69.63   ╰─> [46 lines of output]
69.63       + meson setup /tmp/pip-install-uyshm3be/scipy_3676ea59c93f4cdca185de58292579c9 /tmp/pip-install-uyshm3be/scipy_3676ea59c93f4cdca185de58292579c9/.mesonpy-pc6xq5xq -Dbuildtype=release -Db_ndebug=if-release -Db_vscrt=md --native-file=/tmp/pip-install-uyshm3be/scipy_3676ea59c93f4cdca185de58292579c9/.mesonpy-pc6xq5xq/meson-python-native-file.ini
69.63       The Meson build system
69.63       Version: 1.6.0
69.63       Source dir: /tmp/pip-install-uyshm3be/scipy_3676ea59c93f4cdca185de58292579c9
69.63       Build dir: /tmp/pip-install-uyshm3be/scipy_3676ea59c93f4cdca185de58292579c9/.mesonpy-pc6xq5xq
69.63       Build type: native build
69.63       Project name: scipy
69.63       Project version: 1.13.0
69.63       C compiler for the host machine: cc (gcc 12.2.1 "cc (Alpine 12.2.1_git20220924-r10) 12.2.1 20220924")
69.63       C linker for the host machine: cc ld.bfd 2.40
69.63       C++ compiler for the host machine: c++ (gcc 12.2.1 "c++ (Alpine 12.2.1_git20220924-r10) 12.2.1 20220924")
69.63       C++ linker for the host machine: c++ ld.bfd 2.40
69.63       Cython compiler for the host machine: cython (cython 3.0.11)
69.63       Host machine cpu family: aarch64
69.63       Host machine cpu: aarch64
69.63       Program python found: YES (/usr/local/bin/python)
69.63       Found pkg-config: YES (/usr/bin/pkg-config) 1.9.5
69.63       Run-time dependency python found: YES 3.11
69.63       Program cython found: YES (/tmp/pip-build-env-53kpwxb6/overlay/bin/cython)
69.63       Compiler for C supports arguments -Wno-unused-but-set-variable: YES
69.63       Compiler for C supports arguments -Wno-unused-function: YES
69.63       Compiler for C supports arguments -Wno-conversion: YES
69.63       Compiler for C supports arguments -Wno-misleading-indentation: YES
69.63       Library m found: YES
69.63       Fortran compiler for the host machine: gfortran (gcc 12.2.1 "GNU Fortran (Alpine 12.2.1_git20220924-r10) 12.2.1 20220924")
69.63       Fortran linker for the host machine: gfortran ld.bfd 2.40
69.63       Compiler for Fortran supports arguments -Wno-conversion: YES
69.63       Checking if "-Wl,--version-script" : links: YES
69.63       Program tools/generate_f2pymod.py found: YES (/usr/local/bin/python /tmp/pip-install-uyshm3be/scipy_3676ea59c93f4cdca185de58292579c9/tools/generate_f2pymod.py)
69.63       Program scipy/_build_utils/tempita.py found: YES (/usr/local/bin/python /tmp/pip-install-uyshm3be/scipy_3676ea59c93f4cdca185de58292579c9/scipy/_build_utils/tempita.py)
69.63       Program pythran found: YES 0.15.0 0.15.0 (/tmp/pip-build-env-53kpwxb6/overlay/bin/pythran)
69.63       Did not find CMake 'cmake'
69.63       Found CMake: NO
69.63       Run-time dependency xsimd found: NO (tried pkgconfig and cmake)
69.63       Run-time dependency threads found: YES
69.63       Library npymath found: YES
69.63       Library npyrandom found: YES
69.63       pybind11-config found: YES (/tmp/pip-build-env-53kpwxb6/overlay/bin/pybind11-config) 2.12.1
69.63       Run-time dependency pybind11 found: YES 2.12.1
69.63       Run-time dependency scipy-openblas found: NO (tried pkgconfig)
69.63       Run-time dependency openblas found: NO (tried pkgconfig and cmake)
69.63       Run-time dependency openblas found: NO (tried pkgconfig)
69.63       
69.63       ../scipy/meson.build:163:9: ERROR: Dependency "OpenBLAS" not found, tried pkgconfig
69.63       
69.63       A full log can be found at /tmp/pip-install-uyshm3be/scipy_3676ea59c93f4cdca185de58292579c9/.mesonpy-pc6xq5xq/meson-logs/meson-log.txt
69.63       [end of output]
69.63   
69.63   note: This error originates from a subprocess, and is likely not a problem with pip.
71.84 error: metadata-generation-failed
71.84 
71.84 × Encountered error while generating package metadata.
71.84 ╰─> See above for output.
71.84 
71.84 note: This is an issue with the package mentioned above, not pip.
71.84 hint: See above for details.
