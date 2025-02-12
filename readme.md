$ mutmut run --paths-to-mutate $SRC_DIR || true
- Mutation testing starting -
These are the steps:
1. A full test suite run will be made to make sure we
   can run the tests successfully and we know how long
   it takes (to detect infinite loops for example)
2. Mutants will be generated and checked
Results are stored in .mutmut-cache.
Print found mutants with `mutmut results`.
Legend for output:
🎉 Killed mutants.   The goal is for everything to end up in this bucket.
⏰ Timeout.          Test suite took 10 times as long as the baseline so were killed.
🤔 Suspicious.       Tests took a long time, but not long enough to be fatal.
🙁 Survived.         This means your tests need to be expanded.
🔇 Skipped.          Skipped.
mutmut cache is out of date, clearing it...
1. Running tests without mutations
⠦ Running...Done
2. Checking mutants
⠼ 421/1211  🎉 232  ⏰ 0  🤔 0  🙁 189  🔇 0WARNING: step_script could not run to completion because the timeout was exceeded. For more control over job and script timeouts see: https://docs.gitlab.com/ee/ci/runners/configure_runners.html#set-script-and-after_script-timeouts
