mutmut_config.py

# Define test command (Change this based on your test framework)
test_command = "pytest --maxfail=1 --disable-warnings --quiet"

# List of paths to exclude from mutation testing
exclude_paths = [
    "tests/",  # Exclude test files
    "migrations/",  # Exclude Django migrations
    "config.py",  # Exclude config files
]

# Timeout for running tests (in seconds)
timeout_factor = 2.0  # Increase if tests take too long

# Use cache to speed up runs
use_coverage = True  # Set to True to only mutate covered code