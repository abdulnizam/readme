Collecting scipy==1.13.0 (from -r requirements.txt (line 26))
  Using cached https://nexus.nonprod.dwpcloud.uk/repository/pypi/packages/scipy/1.13.0/scipy-1.13.0.tar.gz (57.2 MB)
  Installing build dependencies ... done
  Getting requirements to build wheel ... done
  Preparing metadata (pyproject.toml) ... error
  error: subprocess-exited-with-error
  
  × Preparing metadata (pyproject.toml) did not run successfully.
  │ exit code: 1
  ╰─> [53 lines of output]
      + meson setup /private/var/folders/j1/pxt2_0g14m736c824y5f965w0000gp/T/pip-install-97zq___z/scipy_1badc711d25641a8b7284d825d9432bd /private/var/folders/j1/pxt2_0g14m736c824y5f965w0000gp/T/pip-install-97zq___z/scipy_1badc711d25641a8b7284d825d9432bd/.mesonpy-130_ifqe -Dbuildtype=release -Db_ndebug=if-release -Db_vscrt=md --native-file=/private/var/folders/j1/pxt2_0g14m736c824y5f965w0000gp/T/pip-install-97zq___z/scipy_1badc711d25641a8b7284d825d9432bd/.mesonpy-130_ifqe/meson-python-native-file.ini
      The Meson build system
      Version: 1.7.0
      Source dir: /private/var/folders/j1/pxt2_0g14m736c824y5f965w0000gp/T/pip-install-97zq___z/scipy_1badc711d25641a8b7284d825d9432bd
      Build dir: /private/var/folders/j1/pxt2_0g14m736c824y5f965w0000gp/T/pip-install-97zq___z/scipy_1badc711d25641a8b7284d825d9432bd/.mesonpy-130_ifqe
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
      Program cython found: YES (/private/var/folders/j1/pxt2_0g14m736c824y5f965w0000gp/T/pip-build-env-60iel5mc/overlay/bin/cython)
      Compiler for C supports arguments -Wno-unused-but-set-variable: YES
      Compiler for C supports arguments -Wno-unused-function: YES
      Compiler for C supports arguments -Wno-conversion: YES
      Compiler for C supports arguments -Wno-misleading-indentation: YES
      Library m found: YES
      
      ../meson.build:78:0: ERROR: Unknown compiler(s): [['gfortran'], ['flang-new'], ['flang'], ['nvfortran'], ['pgfortran'], ['ifort'], ['ifx'], ['g95']]
      The following exception(s) were encountered:
      Running `gfortran --help` gave "[Errno 2] No such file or directory: 'gfortran'"
      Running `gfortran --version` gave "[Errno 2] No such file or directory: 'gfortran'"
      Running `gfortran -V` gave "[Errno 2] No such file or directory: 'gfortran'"
      Running `flang-new --help` gave "[Errno 2] No such file or directory: 'flang-new'"
      Running `flang-new --version` gave "[Errno 2] No such file or directory: 'flang-new'"
      Running `flang-new -V` gave "[Errno 2] No such file or directory: 'flang-new'"
      Running `flang --help` gave "[Errno 2] No such file or directory: 'flang'"
      Running `flang --version` gave "[Errno 2] No such file or directory: 'flang'"
      Running `flang -V` gave "[Errno 2] No such file or directory: 'flang'"
      Running `nvfortran --help` gave "[Errno 2] No such file or directory: 'nvfortran'"
      Running `nvfortran --version` gave "[Errno 2] No such file or directory: 'nvfortran'"
      Running `nvfortran -V` gave "[Errno 2] No such file or directory: 'nvfortran'"
      Running `pgfortran --help` gave "[Errno 2] No such file or directory: 'pgfortran'"
      Running `pgfortran --version` gave "[Errno 2] No such file or directory: 'pgfortran'"
      Running `pgfortran -V` gave "[Errno 2] No such file or directory: 'pgfortran'"
      Running `ifort --help` gave "[Errno 2] No such file or directory: 'ifort'"
      Running `ifort --version` gave "[Errno 2] No such file or directory: 'ifort'"
      Running `ifort -V` gave "[Errno 2] No such file or directory: 'ifort'"
      Running `ifx --help` gave "[Errno 2] No such file or directory: 'ifx'"
      Running `ifx --version` gave "[Errno 2] No such file or directory: 'ifx'"
      Running `ifx -V` gave "[Errno 2] No such file or directory: 'ifx'"
      Running `g95 --help` gave "[Errno 2] No such file or directory: 'g95'"
      Running `g95 --version` gave "[Errno 2] No such file or directory: 'g95'"
      Running `g95 -V` gave "[Errno 2] No such file or directory: 'g95'"
      
      A full log can be found at /private/var/folders/j1/pxt2_0g14m736c824y5f965w0000gp/T/pip-install-97zq___z/scipy_1badc711d25641a8b7284d825d9432bd/.mesonpy-130_ifqe/meson-logs/meson-log.txt
      [end of output]
  
  note: This error originates from a subprocess, and is likely not a problem with pip.
