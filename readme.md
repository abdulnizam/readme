import sys

def override_paths():
    if "--paths-to-mutate" in sys.argv:
        sys.argv[sys.argv.index("--paths-to-mutate") + 1] = "src/model/index.py"

override_paths()




Modify mutmut_config.py to Override Paths

You can force Mutmut to replace the --paths-to-mutate argument before it runs: