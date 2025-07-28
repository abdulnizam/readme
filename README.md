pre_pipeline_tests:
  <<: *nonprod_env
  stage: pre_pipeline_checks
  environment: nonprod_env
  image: python:3.12@sha256:ea82769a4ac96a0afc6f57eb3ebd3d2ccf9d760ac2321877795453d145fe5051
  rules:
    - if: "$CI_MERGE_REQUEST_TARGET_BRANCH_NAME == 'develop'"
      when: always
    - if: "$CI_COMMIT_BRANCH == 'develop'"
      when: never
  script:
    - pip install -r requirements.txt
    - prisma generate
    - pytest
