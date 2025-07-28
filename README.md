before_script:
  - apt-get update
  - apt-get install -y curl gnupg
  - curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  - apt-get install -y nodejs