stages:
  - install
  - build
  - deploy

npm_install:
  stage: install
  tags: [non-prod-runner]   # Your non-prod GitLab runner
  script:
    - npm ci                 # Clean and reproducible install
  artifacts:
    paths:
      - node_modules/
    expire_in: 1 hour

build_or_deploy:
  stage: deploy
  tags: [prod-runner]        # Your production GitLab runner
  dependencies:
    - npm_install            # Pulls artifact from install job
  script:
    - echo "Using node_modules from previous job"
    - npm run build          # or whatever you want to do