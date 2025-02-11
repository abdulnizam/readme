[mutmut]
paths_to_mutate = ["src/"]
use_coverage = true
coverage_file = "coverage.xml"
test_command = "pytest --maxfail=1 --disable-warnings --cov=src --cov-report=xml"