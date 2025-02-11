


repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.5.0  # Use the latest stable version
    hooks:
      - id: trailing-whitespace
      - id: end-of-file-fixer
      - id: check-yaml
      - id: check-json
      - id: check-added-large-files

  - repo: https://gitlab.com/pycqa/flake8
    rev: 6.1.0  # Use the latest stable version
    hooks:
      - id: flake8
        additional_dependencies: [flake8-bugbear, flake8-docstrings]

  - repo: https://github.com/hhatto/autopep8
    rev: v2.0.4
    hooks:
      - id: autopep8
        args: ["--in-place", "--aggressive", "--aggressive"]


pre-commit install
pre-commit run --all-files

autopep8 --in-place --aggressive --aggressive -r src/

autopep8 --diff -r src/

autoflake --in-place --remove-unused-variables --remove-all-unused-imports -r .

.flake8

[flake8]
ignore = E501, W293, W391  # Ignore long lines and blank line issues
max-line-length = 120  # Increase allowed line length
exclude = .git,__pycache__,venv,tests/*



pre-commit==3.6.0
black==24.2.0
autopep8==2.1.0
autoflake==2.2.1
flake8==7.0.0
coverage==7.4.1