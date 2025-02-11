pip install scipy==1.13.0
WARNING: Ignoring invalid distribution ~umpy (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv/lib/python3.13/site-packages)
WARNING: Ignoring invalid distribution ~umpy (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv/lib/python3.13/site-packages)
Looking in indexes: https://nexus.nonprod.dwpcloud.uk/repository/pypi/simple
Collecting scipy==1.13.0
  Using cached https://nexus.nonprod.dwpcloud.uk/repository/pypi/packages/scipy/1.13.0/scipy-1.13.0.tar.gz (57.2 MB)
  Installing build dependencies ... done
  Getting requirements to build wheel ... done
  Preparing metadata (pyproject.toml) ... error
  error: subprocess-exited-with-error
  
  × Preparing metadata (pyproject.toml) did not run successfully.
  │ exit code: 1
  ╰─> [125 lines of output]
      + meson setup /private/var/folders/j1/pxt2_0g14m736c824y5f965w0000gp/T/pip-install-jesariu1/scipy_b91351b9c2d0470db496bd2a99356737 /private/var/folders/j1/pxt2_0g14m736c824y5f965w0000gp/T/pip-install-jesariu1/scipy_b91351b9c2d0470db496bd2a99356737/.mesonpy-1h6mvouq -Dbuildtype=release -Db_ndebug=if-release -Db_vscrt=md --native-file=/private/var/folders/j1/pxt2_0g14m736c824y5f965w0000gp/T/pip-install-jesariu1/scipy_b91351b9c2d0470db496bd2a99356737/.mesonpy-1h6mvouq/meson-python-native-file.ini
      The Meson build system
      Version: 1.7.0
      Source dir: /private/var/folders/j1/pxt2_0g14m736c824y5f965w0000gp/T/pip-install-jesariu1/scipy_b91351b9c2d0470db496bd2a99356737
      Build dir: /private/var/folders/j1/pxt2_0g14m736c824y5f965w0000gp/T/pip-install-jesariu1/scipy_b91351b9c2d0470db496bd2a99356737/.mesonpy-1h6mvouq
      Build type: native build
      Project name: scipy
      Project version: 1.13.0
      C compiler for the host machine: cc (clang 16.0.0 "Apple clang version 16.0.0 (clang-1600.0.26.4)")
      C linker for the host machine: cc ld64 1115.7.3
      C++ compiler for the host machine: c++ (clang 16.0.0 "Apple clang version 16.0.0 (clang-1600.0.26.4)")
      C++ linker for the host machine: c++ ld64 1115.7.3
      Cython compiler for the host machine: cython (cython 3.0.12)
      Host machine cpu family: aarch64
      Host machine cpu: aarch64
      Program python found: YES (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv/bin/python3.13)
      Found pkg-config: YES (/Users/adbul.nizam1/.homebrew/bin/pkg-config) 0.29.2
      Run-time dependency python found: YES 3.13
      Program cython found: YES (/private/var/folders/j1/pxt2_0g14m736c824y5f965w0000gp/T/pip-build-env-utxhv7w7/overlay/bin/cython)
      Compiler for C supports arguments -Wno-unused-but-set-variable: YES
      Compiler for C supports arguments -Wno-unused-function: YES
      Compiler for C supports arguments -Wno-conversion: YES
      Compiler for C supports arguments -Wno-misleading-indentation: YES
      Library m found: YES
      Fortran compiler for the host machine: gfortran (gcc 14.2.0 "GNU Fortran (Homebrew GCC 14.2.0_1) 14.2.0")
      Fortran linker for the host machine: gfortran ld64 1115.7.3
      Compiler for Fortran supports arguments -Wno-conversion: YES
      Compiler for C supports link arguments -Wl,-ld_classic: YES
      Checking if "-Wl,--version-script" links: NO
      Program tools/generate_f2pymod.py found: YES (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv/bin/python3.13 /private/var/folders/j1/pxt2_0g14m736c824y5f965w0000gp/T/pip-install-jesariu1/scipy_b91351b9c2d0470db496bd2a99356737/tools/generate_f2pymod.py)
      Program scipy/_build_utils/tempita.py found: YES (/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv/bin/python3.13 /private/var/folders/j1/pxt2_0g14m736c824y5f965w0000gp/T/pip-install-jesariu1/scipy_b91351b9c2d0470db496bd2a99356737/scipy/_build_utils/tempita.py)
      Program pythran found: YES 0.15.0 0.15.0 (/private/var/folders/j1/pxt2_0g14m736c824y5f965w0000gp/T/pip-build-env-utxhv7w7/overlay/bin/pythran)
      Did not find CMake 'cmake'
      Found CMake: NO
      Run-time dependency xsimd found: NO (tried pkgconfig, framework and cmake)
      Run-time dependency threads found: YES
      Library npymath found: YES
      Library npyrandom found: YES
      pybind11-config found: YES (/private/var/folders/j1/pxt2_0g14m736c824y5f965w0000gp/T/pip-build-env-utxhv7w7/overlay/bin/pybind11-config) 2.12.1
      Run-time dependency pybind11 found: YES 2.12.1
      Run-time dependency scipy-openblas found: NO (tried pkgconfig)
      Run-time dependency openblas found: YES 0.3.29
      Dependency openblas found: YES 0.3.29 (cached)
      Compiler for C supports arguments -Wno-maybe-uninitialized: NO
      Compiler for C supports arguments -Wno-discarded-qualifiers: NO
      Compiler for C supports arguments -Wno-empty-body: YES
      Compiler for C supports arguments -Wno-implicit-function-declaration: YES
      Compiler for C supports arguments -Wno-parentheses: YES
      Compiler for C supports arguments -Wno-switch: YES
      Compiler for C supports arguments -Wno-unused-label: YES
      Compiler for C supports arguments -Wno-unused-result: YES
      Compiler for C supports arguments -Wno-unused-variable: YES
      Compiler for C++ supports arguments -Wno-cpp: YES
      Compiler for C++ supports arguments -Wno-deprecated-declarations: YES
      Compiler for C++ supports arguments -Wno-class-memaccess: NO
      Compiler for C++ supports arguments -Wno-format-truncation: NO
      Compiler for C++ supports arguments -Wno-non-virtual-dtor: YES
      Compiler for C++ supports arguments -Wno-sign-compare: YES
      Compiler for C++ supports arguments -Wno-switch: YES
      Compiler for C++ supports arguments -Wno-terminate: NO
      Compiler for C++ supports arguments -Wno-unused-but-set-variable: YES
      Compiler for C++ supports arguments -Wno-unused-function: YES
      Compiler for C++ supports arguments -Wno-unused-local-typedefs: YES
      Compiler for C++ supports arguments -Wno-unused-variable: YES
      Compiler for C++ supports arguments -Wno-int-in-bool-context: YES
      Compiler for Fortran supports arguments -Wno-argument-mismatch: YES
      Compiler for Fortran supports arguments -Wno-conversion: YES (cached)
      Compiler for Fortran supports arguments -Wno-intrinsic-shadow: YES
      Compiler for Fortran supports arguments -Wno-maybe-uninitialized: YES
      Compiler for Fortran supports arguments -Wno-surprising: YES
      Compiler for Fortran supports arguments -Wno-uninitialized: YES
      Compiler for Fortran supports arguments -Wno-unused-dummy-argument: YES
      Compiler for Fortran supports arguments -Wno-unused-label: YES
      Compiler for Fortran supports arguments -Wno-unused-variable: YES
      Compiler for Fortran supports arguments -Wno-tabs: YES
      Compiler for Fortran supports arguments -Wno-argument-mismatch: YES (cached)
      Compiler for Fortran supports arguments -Wno-conversion: YES (cached)
      Compiler for Fortran supports arguments -Wno-maybe-uninitialized: YES (cached)
      Compiler for Fortran supports arguments -Wno-unused-dummy-argument: YES (cached)
      Compiler for Fortran supports arguments -Wno-unused-label: YES (cached)
      Compiler for Fortran supports arguments -Wno-unused-variable: YES (cached)
      Compiler for Fortran supports arguments -Wno-tabs: YES (cached)
      Checking if "Check atomic builtins without -latomic" links: YES
      Configuring __config__.py using configuration
      Checking for function "open_memstream" : YES
      Configuring messagestream_config.h using configuration
      Compiler for Fortran supports arguments -w: YES
      Checking for size of "void*" : 8
      Compiler for Fortran supports arguments -w: YES (cached)
      Build targets in project: 234
      
      scipy 1.13.0
      
        User defined options
          Native files: /private/var/folders/j1/pxt2_0g14m736c824y5f965w0000gp/T/pip-install-jesariu1/scipy_b91351b9c2d0470db496bd2a99356737/.mesonpy-1h6mvouq/meson-python-native-file.ini
          b_ndebug    : if-release
          b_vscrt     : md
          buildtype   : release
      
      Found ninja-1.12.1 at /Users/adbul.nizam1/.homebrew/bin/ninja
      + /Users/adbul.nizam1/.homebrew/bin/ninja
      [1/1475] Generating scipy/linalg/cython_linalg with a custom command (wrapped by meson to set env)
      [2/1475] Copying file scipy/stats/_stats.pxd
      [3/1475] Copying file scipy/stats/_biasedurn.pxd
      [4/1475] Copying file scipy/stats/templated_pyufunc.pxd
      [5/1475] Copying file scipy/stats/__init__.py
      [6/1475] Generating scipy/special/cython_special with a custom command
      [7/1475] Compiling C object scipy/libdummy_g77_abi_wrappers.a.p/_build_utils_src_wrap_dummy_g77_abi.c.o
      FAILED: scipy/libdummy_g77_abi_wrappers.a.p/_build_utils_src_wrap_dummy_g77_abi.c.o
      cc -Iscipy/libdummy_g77_abi_wrappers.a.p -Iscipy -I../scipy -I../../../pip-build-env-utxhv7w7/overlay/lib/python3.13/site-packages/numpy/_core/include -I/Users/adbul.nizam1/.homebrew/opt/python@3.13/Frameworks/Python.framework/Versions/3.13/include/python3.13 -I/Users/adbul.nizam1/.homebrew/Cellar/openblas/0.3.29/include -I/Users/adbul.nizam1/.homebrew/opt/openblas/include -fdiagnostics-color=always -DNDEBUG -Wall -Winvalid-pch -std=c99 -O3 -Wno-unused-but-set-variable -Wno-unused-function -Wno-conversion -Wno-misleading-indentation -DNPY_NO_DEPRECATED_API=NPY_1_9_API_VERSION -fopenmp -MD -MQ scipy/libdummy_g77_abi_wrappers.a.p/_build_utils_src_wrap_dummy_g77_abi.c.o -MF scipy/libdummy_g77_abi_wrappers.a.p/_build_utils_src_wrap_dummy_g77_abi.c.o.d -o scipy/libdummy_g77_abi_wrappers.a.p/_build_utils_src_wrap_dummy_g77_abi.c.o -c ../scipy/_build_utils/src/wrap_dummy_g77_abi.c
      clang: error: unsupported option '-fopenmp'
      [8/1475] Copying file scipy/optimize/cython_optimize/__init__.py
      [9/1475] Generating scipy/stats/_stats_gen_pyx with a custom command
      [10/1475] Scanning modules
      [11/1475] Scanning modules
      [12/1475] Scanning modules
      [13/1475] Scanning modules
      [14/1475] Scanning modules
      [15/1475] Scanning modules
      [16/1475] Scanning modules
      [17/1475] Scanning modules
      [18/1475] Scanning modules
      [19/1475] Scanning modules
      [20/1475] Compiling C object scipy/lib_fortranobject.a.p/189d86f3a2f61fd1e4d3315991ecec3b0d1d9cae_site-packages_numpy_f2py_src_fortranobject.c.o
      ninja: build stopped: subcommand failed.
      [end of output]
  
  note: This error originates from a subprocess, and is likely not a problem with pip.
