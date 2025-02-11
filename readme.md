[notice] To update, run: pip install --upgrade pip
$ mutmut run --paths-to-mutate $SRC_DIR || true
Usage: mutmut run [OPTIONS] [MUTANT_NAMES]...
Try 'mutmut run --help' for help.
Error: No such option: --paths-to-mutate
$ mutmut junitxml --suspicious-policy=error --untested-policy=skipped > ./junitreport.xml
Usage: mutmut [OPTIONS] COMMAND [ARGS]...
Try 'mutmut --help' for help.
Error: No such command 'junitxml'.
Uploading artifacts for failed job
00:06
Uploading artifacts...
./junitreport.xml: found 1 matching artifact files and directories 
Uploading artifacts as "junit" to coordinator... 201 Created  id=9108422975 responseStatus=201 Created token=glcbt-66
Cleaning up project directory and file based variables
00:00
ERROR: Job failed: command terminated with exit code 2
