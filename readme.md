
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
⠴ Running...Done
Traceback (most recent call last):
  File "/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv4/bin/mutmut", line 8, in <module>
    sys.exit(climain())
             ~~~~~~~^^
  File "/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv4/lib/python3.13/site-packages/click/core.py", line 1161, in __call__
    return self.main(*args, **kwargs)
           ~~~~~~~~~^^^^^^^^^^^^^^^^^
  File "/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv4/lib/python3.13/site-packages/click/core.py", line 1082, in main
    rv = self.invoke(ctx)
  File "/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv4/lib/python3.13/site-packages/click/core.py", line 1697, in invoke
    return _process_result(sub_ctx.command.invoke(sub_ctx))
                           ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^
  File "/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv4/lib/python3.13/site-packages/click/core.py", line 1443, in invoke
    return ctx.invoke(self.callback, **ctx.params)
           ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv4/lib/python3.13/site-packages/click/core.py", line 788, in invoke
    return __callback(*args, **kwargs)
  File "/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv4/lib/python3.13/site-packages/mutmut/__init__.py", line 893, in wrapper
    f(*args, **kwargs)
    ~^^^^^^^^^^^^^^^^^
  File "/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv4/lib/python3.13/site-packages/mutmut/__main__.py", line 170, in run
    sys.exit(do_run(argument, paths_to_mutate, disable_mutation_types, enable_mutation_types, runner,
             ~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                    tests_dir, test_time_multiplier, test_time_base, swallow_output, use_coverage,
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                    dict_synonyms, pre_mutation, post_mutation, use_patch_file, paths_to_exclude,
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                    simple_output, no_progress, ci, rerun_all))
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv4/lib/python3.13/site-packages/mutmut/__main__.py", line 448, in do_run
    parse_run_argument(argument, config, dict_synonyms, mutations_by_file, paths_to_exclude, paths_to_mutate, tests_dirs)
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv4/lib/python3.13/site-packages/mutmut/__main__.py", line 475, in parse_run_argument
    update_line_numbers(filename)
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^
  File "/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv4/lib/python3.13/site-packages/mutmut/cache.py", line 88, in wrapper
    return f(*args, **kwargs)
  File "<string>", line 2, in update_line_numbers
  File "/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv4/lib/python3.13/site-packages/pony/orm/core.py", line 519, in new_func
    result = func(*args, **kwargs)
  File "/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv4/lib/python3.13/site-packages/mutmut/cache.py", line 369, in update_line_numbers
    cached_line_objects = list(sourcefile.lines.order_by(Line.line_number))
                               ~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
  File "/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv4/lib/python3.13/site-packages/pony/orm/core.py", line 3593, in order_by
    return wrapper.select().order_by(*args)
           ~~~~~~~~~~~~~~^^
  File "/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv4/lib/python3.13/site-packages/pony/orm/core.py", line 3578, in select
    query = reverse.entity._select_all()
  File "/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv4/lib/python3.13/site-packages/pony/orm/core.py", line 4371, in _select_all
    return Query(entity._default_iter_name_, entity._default_genexpr_, {}, { '.0' : entity })
  File "/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv4/lib/python3.13/site-packages/pony/orm/core.py", line 5713, in __init__
    pickled_tree = pickle_ast(tree)
  File "/Users/adbul.nizam1/Library/CloudStorage/OneDrive-SecureEngineering/Developer/venv4/lib/python3.13/site-packages/pony/utils/utils.py", line 383, in pickle_ast
    pickler.persistent_id = _persistent_id
    ^^^^^^^^^^^^^^^^^^^^^
AttributeError: '_pickle.Pickler' object attribute 'persistent_id' is read-only
