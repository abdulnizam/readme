Fetching changes with git depth set to 20...
Initialized empty Git repository in /builds/dwp/content-artificial-intelligence-tooling/content-creation-generate-content/.git/
Created fresh repository.
Checking out f1b770d9 as detached HEAD (ref is refs/merge-requests/29/head)...
Skipping Git submodules setup
Restoring cache
00:04
Checking cache for content-creation-generate-content-non_protected...
Downloading cache from https://dwp-shared-nonprod-gitlab-cache.s3.dualstack.eu-west-2.amazonaws.com/Runner-Cache/project/62770619/content-creation-generate-content-non_protected  ETag="f5d4aaf437e07ebe3c292cde14b2caaa"
Successfully extracted cache
Executing "step_script" stage of the job script
00:40
$ if [[ -f "$PYTHON_REQUIREMENTS_FILE" ]]; then # collapsed multi-line command
installing dependencies specified in requirements.txt
Collecting boto3==1.35.70 (from -r requirements.txt (line 1))
  Obtaining dependency information for boto3==1.35.70 from https://files.pythonhosted.org/packages/dd/ee/cbae52e3a54c96330359fcd0a883072a0970c3a9ed2f3022eec6adf1d40d/boto3-1.35.70-py3-none-any.whl.metadata
  Using cached boto3-1.35.70-py3-none-any.whl.metadata (6.7 kB)
Collecting fastapi==0.115.5 (from -r requirements.txt (line 2))
  Obtaining dependency information for fastapi==0.115.5 from https://files.pythonhosted.org/packages/54/c4/148d5046a96c428464557264877ae5a9338a83bbe0df045088749ec89820/fastapi-0.115.5-py3-none-any.whl.metadata
  Using cached fastapi-0.115.5-py3-none-any.whl.metadata (27 kB)
Collecting json_repair==0.30.3 (from -r requirements.txt (line 3))
  Obtaining dependency information for json_repair==0.30.3 from https://files.pythonhosted.org/packages/fd/2d/79a46330c4b97ee90dd403fb0d267da7b25b24d7db604c5294e5c57d5f7c/json_repair-0.30.3-py3-none-any.whl.metadata
  Using cached json_repair-0.30.3-py3-none-any.whl.metadata (11 kB)
Collecting langchain-aws==0.2.7 (from -r requirements.txt (line 4))
  Obtaining dependency information for langchain-aws==0.2.7 from https://files.pythonhosted.org/packages/3f/4c/3f60d00fbe294f4ea332c98d9d06f5cce6819427b7b2b08ddebc74da5e58/langchain_aws-0.2.7-py3-none-any.whl.metadata
  Using cached langchain_aws-0.2.7-py3-none-any.whl.metadata (3.2 kB)
Collecting pydantic==2.10.2 (from -r requirements.txt (line 5))
  Obtaining dependency information for pydantic==2.10.2 from https://files.pythonhosted.org/packages/d5/74/da832196702d0c56eb86b75bfa346db9238617e29b0b7ee3b8b4eccfe654/pydantic-2.10.2-py3-none-any.whl.metadata
  Using cached pydantic-2.10.2-py3-none-any.whl.metadata (170 kB)
Collecting pydantic-settings==2.6.1 (from -r requirements.txt (line 6))
  Obtaining dependency information for pydantic-settings==2.6.1 from https://files.pythonhosted.org/packages/5e/f9/ff95fd7d760af42f647ea87f9b8a383d891cdb5e5dbd4613edaeb094252a/pydantic_settings-2.6.1-py3-none-any.whl.metadata
  Using cached pydantic_settings-2.6.1-py3-none-any.whl.metadata (3.5 kB)
Collecting regex==2024.11.6 (from -r requirements.txt (line 7))
  Obtaining dependency information for regex==2024.11.6 from https://files.pythonhosted.org/packages/11/9b/5a05d2040297d2d254baf95eeeb6df83554e5e1df03bc1a6687fc4ba1f66/regex-2024.11.6-cp311-cp311-musllinux_1_2_x86_64.whl.metadata
  Using cached regex-2024.11.6-cp311-cp311-musllinux_1_2_x86_64.whl.metadata (40 kB)
Requirement already satisfied: requests==2.32.3 in /usr/local/lib/python3.11/site-packages (from -r requirements.txt (line 8)) (2.32.3)
Collecting uvicorn==0.32.1 (from -r requirements.txt (line 9))
  Obtaining dependency information for uvicorn==0.32.1 from https://files.pythonhosted.org/packages/50/c1/2d27b0a15826c2b71dcf6e2f5402181ef85acf439617bb2f1453125ce1f3/uvicorn-0.32.1-py3-none-any.whl.metadata
  Using cached uvicorn-0.32.1-py3-none-any.whl.metadata (6.6 kB)
Collecting nltk (from -r requirements.txt (line 10))
  Obtaining dependency information for nltk from https://files.pythonhosted.org/packages/4d/66/7d9e26593edda06e8cb531874633f7c2372279c3b0f46235539fe546df8b/nltk-3.9.1-py3-none-any.whl.metadata
  Using cached nltk-3.9.1-py3-none-any.whl.metadata (2.9 kB)
Collecting pre-commit (from -r requirements.txt (line 11))
  Obtaining dependency information for pre-commit from https://files.pythonhosted.org/packages/43/b3/df14c580d82b9627d173ceea305ba898dca135feb360b6d84019d0803d3b/pre_commit-4.1.0-py2.py3-none-any.whl.metadata
  Using cached pre_commit-4.1.0-py2.py3-none-any.whl.metadata (1.3 kB)
Collecting autopep8 (from -r requirements.txt (line 12))
  Obtaining dependency information for autopep8 from https://files.pythonhosted.org/packages/9e/43/53afb8ba17218f19b77c7834128566c5bbb100a0ad9ba2e8e89d089d7079/autopep8-2.3.2-py2.py3-none-any.whl.metadata
  Using cached autopep8-2.3.2-py2.py3-none-any.whl.metadata (16 kB)
Collecting autoflake (from -r requirements.txt (line 13))
  Obtaining dependency information for autoflake from https://files.pythonhosted.org/packages/a2/ee/3fd29bf416eb4f1c5579cf12bf393ae954099258abd7bde03c4f9716ef6b/autoflake-2.3.1-py3-none-any.whl.metadata
  Using cached autoflake-2.3.1-py3-none-any.whl.metadata (7.6 kB)
Collecting flake8 (from -r requirements.txt (line 14))
  Obtaining dependency information for flake8 from https://files.pythonhosted.org/packages/d9/42/65004373ac4617464f35ed15931b30d764f53cdd30cc78d5aea349c8c050/flake8-7.1.1-py2.py3-none-any.whl.metadata
  Using cached flake8-7.1.1-py2.py3-none-any.whl.metadata (3.8 kB)
Collecting mypy (from -r requirements.txt (line 15))
  Obtaining dependency information for mypy from https://files.pythonhosted.org/packages/72/af/19ff499b6f1dafcaf56f9881f7a965ac2f474f69f6f618b5175b044299f5/mypy-1.15.0-cp311-cp311-musllinux_1_2_x86_64.whl.metadata
  Downloading mypy-1.15.0-cp311-cp311-musllinux_1_2_x86_64.whl.metadata (2.1 kB)
Collecting pytest==8.3.4 (from -r requirements.txt (line 18))
  Obtaining dependency information for pytest==8.3.4 from https://files.pythonhosted.org/packages/11/92/76a1c94d3afee238333bc0a42b82935dd8f9cf8ce9e336ff87ee14d9e1cf/pytest-8.3.4-py3-none-any.whl.metadata
  Using cached pytest-8.3.4-py3-none-any.whl.metadata (7.5 kB)
Collecting pytest-asyncio==0.25.3 (from -r requirements.txt (line 19))
  Obtaining dependency information for pytest-asyncio==0.25.3 from https://files.pythonhosted.org/packages/67/17/3493c5624e48fd97156ebaec380dcaafee9506d7e2c46218ceebbb57d7de/pytest_asyncio-0.25.3-py3-none-any.whl.metadata
  Using cached pytest_asyncio-0.25.3-py3-none-any.whl.metadata (3.9 kB)
Collecting pytest-mock==3.14.0 (from -r requirements.txt (line 20))
  Obtaining dependency information for pytest-mock==3.14.0 from https://files.pythonhosted.org/packages/f2/3b/b26f90f74e2986a82df6e7ac7e319b8ea7ccece1caec9f8ab6104dc70603/pytest_mock-3.14.0-py3-none-any.whl.metadata
  Using cached pytest_mock-3.14.0-py3-none-any.whl.metadata (3.8 kB)
Collecting pytest-cov==6.0.0 (from -r requirements.txt (line 21))
  Obtaining dependency information for pytest-cov==6.0.0 from https://files.pythonhosted.org/packages/36/3b/48e79f2cd6a61dbbd4807b4ed46cb564b4fd50a76166b1c4ea5c1d9e2371/pytest_cov-6.0.0-py3-none-any.whl.metadata
  Using cached pytest_cov-6.0.0-py3-none-any.whl.metadata (27 kB)
Collecting pytest-anyio (from -r requirements.txt (line 22))
  Obtaining dependency information for pytest-anyio from https://files.pythonhosted.org/packages/c6/25/bd6493ae85d0a281b6a0f248d0fdb1d9aa2b31f18bcd4a8800cf397d8209/pytest_anyio-0.0.0-py2.py3-none-any.whl.metadata
  Using cached pytest_anyio-0.0.0-py2.py3-none-any.whl.metadata (353 bytes)
Collecting pytest-mock-resources==2.12.1 (from -r requirements.txt (line 23))
  Obtaining dependency information for pytest-mock-resources==2.12.1 from https://files.pythonhosted.org/packages/8f/74/e0fa7cd27e0f4275f74e988116b5f3736ea803b96d7e09581422bc0a6dad/pytest_mock_resources-2.12.1-py3-none-any.whl.metadata
  Using cached pytest_mock_resources-2.12.1-py3-none-any.whl.metadata (7.9 kB)
Collecting pytest-timeout==2.3.1 (from -r requirements.txt (line 24))
  Obtaining dependency information for pytest-timeout==2.3.1 from https://files.pythonhosted.org/packages/03/27/14af9ef8321f5edc7527e47def2a21d8118c6f329a9342cc61387a0c0599/pytest_timeout-2.3.1-py3-none-any.whl.metadata
  Using cached pytest_timeout-2.3.1-py3-none-any.whl.metadata (20 kB)
Collecting pytest-xdist==3.5.0 (from -r requirements.txt (line 25))
  Obtaining dependency information for pytest-xdist==3.5.0 from https://files.pythonhosted.org/packages/50/37/125fe5ec459321e2d48a0c38672cfc2419ad87d580196fd894e5f25230b0/pytest_xdist-3.5.0-py3-none-any.whl.metadata
  Using cached pytest_xdist-3.5.0-py3-none-any.whl.metadata (3.1 kB)
Collecting botocore<1.36.0,>=1.35.70 (from boto3==1.35.70->-r requirements.txt (line 1))
  Obtaining dependency information for botocore<1.36.0,>=1.35.70 from https://files.pythonhosted.org/packages/fc/dd/d87e2a145fad9e08d0ec6edcf9d71f838ccc7acdd919acc4c0d4a93515f8/botocore-1.35.99-py3-none-any.whl.metadata
  Using cached botocore-1.35.99-py3-none-any.whl.metadata (5.7 kB)
Collecting jmespath<2.0.0,>=0.7.1 (from boto3==1.35.70->-r requirements.txt (line 1))
  Obtaining dependency information for jmespath<2.0.0,>=0.7.1 from https://files.pythonhosted.org/packages/31/b4/b9b800c45527aadd64d5b442f9b932b00648617eb5d63d2c7a6587b7cafc/jmespath-1.0.1-py3-none-any.whl.metadata
  Using cached jmespath-1.0.1-py3-none-any.whl.metadata (7.6 kB)
Collecting s3transfer<0.11.0,>=0.10.0 (from boto3==1.35.70->-r requirements.txt (line 1))
  Obtaining dependency information for s3transfer<0.11.0,>=0.10.0 from https://files.pythonhosted.org/packages/66/05/7957af15543b8c9799209506df4660cba7afc4cf94bfb60513827e96bed6/s3transfer-0.10.4-py3-none-any.whl.metadata
  Using cached s3transfer-0.10.4-py3-none-any.whl.metadata (1.7 kB)
Collecting starlette<0.42.0,>=0.40.0 (from fastapi==0.115.5->-r requirements.txt (line 2))
  Obtaining dependency information for starlette<0.42.0,>=0.40.0 from https://files.pythonhosted.org/packages/96/00/2b325970b3060c7cecebab6d295afe763365822b1306a12eeab198f74323/starlette-0.41.3-py3-none-any.whl.metadata
  Using cached starlette-0.41.3-py3-none-any.whl.metadata (6.0 kB)
Collecting typing-extensions>=4.8.0 (from fastapi==0.115.5->-r requirements.txt (line 2))
  Obtaining dependency information for typing-extensions>=4.8.0 from https://files.pythonhosted.org/packages/26/9f/ad63fc0248c5379346306f8668cda6e2e2e9c95e01216d2b8ffd9ff037d0/typing_extensions-4.12.2-py3-none-any.whl.metadata
  Using cached typing_extensions-4.12.2-py3-none-any.whl.metadata (3.0 kB)
Collecting langchain-core<0.4,>=0.3.15 (from langchain-aws==0.2.7->-r requirements.txt (line 4))
  Obtaining dependency information for langchain-core<0.4,>=0.3.15 from https://files.pythonhosted.org/packages/9f/65/27a586c8871a0632d747059eb97855b49ac6dea12b263a79f6c1b4f18b99/langchain_core-0.3.34-py3-none-any.whl.metadata
  Using cached langchain_core-0.3.34-py3-none-any.whl.metadata (5.9 kB)
Collecting numpy<2,>=1 (from langchain-aws==0.2.7->-r requirements.txt (line 4))
  Obtaining dependency information for numpy<2,>=1 from https://files.pythonhosted.org/packages/df/a0/4e0f14d847cfc2a633a1c8621d00724f3206cfeddeb66d35698c4e2cf3d2/numpy-1.26.4-cp311-cp311-musllinux_1_1_x86_64.whl.metadata
  Using cached numpy-1.26.4-cp311-cp311-musllinux_1_1_x86_64.whl.metadata (61 kB)
Collecting annotated-types>=0.6.0 (from pydantic==2.10.2->-r requirements.txt (line 5))
  Obtaining dependency information for annotated-types>=0.6.0 from https://files.pythonhosted.org/packages/78/b6/6307fbef88d9b5ee7421e68d78a9f162e0da4900bc5f5793f6d3d0e34fb8/annotated_types-0.7.0-py3-none-any.whl.metadata
  Using cached annotated_types-0.7.0-py3-none-any.whl.metadata (15 kB)
Collecting pydantic-core==2.27.1 (from pydantic==2.10.2->-r requirements.txt (line 5))
  Obtaining dependency information for pydantic-core==2.27.1 from https://files.pythonhosted.org/packages/8d/c8/b4139b2f78579960353c4cd987e035108c93a78371bb19ba0dc1ac3b3220/pydantic_core-2.27.1-cp311-cp311-musllinux_1_1_x86_64.whl.metadata
  Using cached pydantic_core-2.27.1-cp311-cp311-musllinux_1_1_x86_64.whl.metadata (6.6 kB)
Collecting python-dotenv>=0.21.0 (from pydantic-settings==2.6.1->-r requirements.txt (line 6))
  Obtaining dependency information for python-dotenv>=0.21.0 from https://files.pythonhosted.org/packages/6a/3e/b68c118422ec867fa7ab88444e1274aa40681c606d59ac27de5a5588f082/python_dotenv-1.0.1-py3-none-any.whl.metadata
  Using cached python_dotenv-1.0.1-py3-none-any.whl.metadata (23 kB)
Requirement already satisfied: charset-normalizer<4,>=2 in /usr/local/lib/python3.11/site-packages (from requests==2.32.3->-r requirements.txt (line 8)) (3.3.2)
Requirement already satisfied: idna<4,>=2.5 in /usr/local/lib/python3.11/site-packages (from requests==2.32.3->-r requirements.txt (line 8)) (3.7)
Requirement already satisfied: urllib3<3,>=1.21.1 in /usr/local/lib/python3.11/site-packages (from requests==2.32.3->-r requirements.txt (line 8)) (2.2.2)
Requirement already satisfied: certifi>=2017.4.17 in /usr/local/lib/python3.11/site-packages (from requests==2.32.3->-r requirements.txt (line 8)) (2024.7.4)
Collecting click>=7.0 (from uvicorn==0.32.1->-r requirements.txt (line 9))
  Obtaining dependency information for click>=7.0 from https://files.pythonhosted.org/packages/7e/d4/7ebdbd03970677812aac39c869717059dbb71a4cfc033ca6e5221787892c/click-8.1.8-py3-none-any.whl.metadata
  Using cached click-8.1.8-py3-none-any.whl.metadata (2.3 kB)
Collecting h11>=0.8 (from uvicorn==0.32.1->-r requirements.txt (line 9))
  Obtaining dependency information for h11>=0.8 from https://files.pythonhosted.org/packages/95/04/ff642e65ad6b90db43e668d70ffb6736436c7ce41fcc549f4e9472234127/h11-0.14.0-py3-none-any.whl.metadata
  Using cached h11-0.14.0-py3-none-any.whl.metadata (8.2 kB)
Requirement already satisfied: iniconfig in /usr/local/lib/python3.11/site-packages (from pytest==8.3.4->-r requirements.txt (line 18)) (2.0.0)
Requirement already satisfied: packaging in /usr/local/lib/python3.11/site-packages (from pytest==8.3.4->-r requirements.txt (line 18)) (24.1)
Requirement already satisfied: pluggy<2,>=1.5 in /usr/local/lib/python3.11/site-packages (from pytest==8.3.4->-r requirements.txt (line 18)) (1.5.0)
Requirement already satisfied: coverage[toml]>=7.5 in /usr/local/lib/python3.11/site-packages (from pytest-cov==6.0.0->-r requirements.txt (line 21)) (7.6.0)
Collecting sqlalchemy!=1.4.0,!=1.4.1,!=1.4.10,!=1.4.11,!=1.4.12,!=1.4.13,!=1.4.14,!=1.4.15,!=1.4.16,!=1.4.17,!=1.4.18,!=1.4.19,!=1.4.2,!=1.4.20,!=1.4.21,!=1.4.22,!=1.4.23,!=1.4.3,!=1.4.4,!=1.4.5,!=1.4.6,!=1.4.7,!=1.4.8,!=1.4.9,>1.0 (from pytest-mock-resources==2.12.1->-r requirements.txt (line 23))
  Obtaining dependency information for sqlalchemy!=1.4.0,!=1.4.1,!=1.4.10,!=1.4.11,!=1.4.12,!=1.4.13,!=1.4.14,!=1.4.15,!=1.4.16,!=1.4.17,!=1.4.18,!=1.4.19,!=1.4.2,!=1.4.20,!=1.4.21,!=1.4.22,!=1.4.23,!=1.4.3,!=1.4.4,!=1.4.5,!=1.4.6,!=1.4.7,!=1.4.8,!=1.4.9,>1.0 from https://files.pythonhosted.org/packages/24/ab/8ba2588c2eb1d092944551354d775ef4fc0250badede324d786a4395d10e/SQLAlchemy-2.0.38-cp311-cp311-musllinux_1_2_x86_64.whl.metadata
  Using cached SQLAlchemy-2.0.38-cp311-cp311-musllinux_1_2_x86_64.whl.metadata (9.6 kB)
Collecting execnet>=1.1 (from pytest-xdist==3.5.0->-r requirements.txt (line 25))
  Obtaining dependency information for execnet>=1.1 from https://files.pythonhosted.org/packages/43/09/2aea36ff60d16dd8879bdb2f5b3ee0ba8d08cbbdcdfe870e695ce3784385/execnet-2.1.1-py3-none-any.whl.metadata
  Using cached execnet-2.1.1-py3-none-any.whl.metadata (2.9 kB)
Collecting joblib (from nltk->-r requirements.txt (line 10))
  Obtaining dependency information for joblib from https://files.pythonhosted.org/packages/91/29/df4b9b42f2be0b623cbd5e2140cafcaa2bef0759a00b7b70104dcfe2fb51/joblib-1.4.2-py3-none-any.whl.metadata
  Using cached joblib-1.4.2-py3-none-any.whl.metadata (5.4 kB)
Collecting tqdm (from nltk->-r requirements.txt (line 10))
  Obtaining dependency information for tqdm from https://files.pythonhosted.org/packages/d0/30/dc54f88dd4a2b5dc8a0279bdd7270e735851848b762aeb1c1184ed1f6b14/tqdm-4.67.1-py3-none-any.whl.metadata
  Using cached tqdm-4.67.1-py3-none-any.whl.metadata (57 kB)
Collecting cfgv>=2.0.0 (from pre-commit->-r requirements.txt (line 11))
  Obtaining dependency information for cfgv>=2.0.0 from https://files.pythonhosted.org/packages/c5/55/51844dd50c4fc7a33b653bfaba4c2456f06955289ca770a5dbd5fd267374/cfgv-3.4.0-py2.py3-none-any.whl.metadata
  Using cached cfgv-3.4.0-py2.py3-none-any.whl.metadata (8.5 kB)
Collecting identify>=1.0.0 (from pre-commit->-r requirements.txt (line 11))
  Obtaining dependency information for identify>=1.0.0 from https://files.pythonhosted.org/packages/03/00/1fd4a117c6c93f2dcc5b7edaeaf53ea45332ef966429be566ca16c2beb94/identify-2.6.7-py2.py3-none-any.whl.metadata
  Using cached identify-2.6.7-py2.py3-none-any.whl.metadata (4.4 kB)
Collecting nodeenv>=0.11.1 (from pre-commit->-r requirements.txt (line 11))
  Obtaining dependency information for nodeenv>=0.11.1 from https://files.pythonhosted.org/packages/d2/1d/1b658dbd2b9fa9c4c9f32accbfc0205d532c8c6194dc0f2a4c0428e7128a/nodeenv-1.9.1-py2.py3-none-any.whl.metadata
  Using cached nodeenv-1.9.1-py2.py3-none-any.whl.metadata (21 kB)
Collecting pyyaml>=5.1 (from pre-commit->-r requirements.txt (line 11))
  Obtaining dependency information for pyyaml>=5.1 from https://files.pythonhosted.org/packages/45/73/0f49dacd6e82c9430e46f4a027baa4ca205e8b0a9dce1397f44edc23559d/PyYAML-6.0.2-cp311-cp311-musllinux_1_1_x86_64.whl.metadata
  Using cached PyYAML-6.0.2-cp311-cp311-musllinux_1_1_x86_64.whl.metadata (2.1 kB)
Requirement already satisfied: virtualenv>=20.10.0 in /usr/local/lib/python3.11/site-packages (from pre-commit->-r requirements.txt (line 11)) (20.26.3)
Collecting pycodestyle>=2.12.0 (from autopep8->-r requirements.txt (line 12))
  Obtaining dependency information for pycodestyle>=2.12.0 from https://files.pythonhosted.org/packages/3a/d8/a211b3f85e99a0daa2ddec96c949cac6824bd305b040571b82a03dd62636/pycodestyle-2.12.1-py2.py3-none-any.whl.metadata
  Using cached pycodestyle-2.12.1-py2.py3-none-any.whl.metadata (4.5 kB)
Collecting pyflakes>=3.0.0 (from autoflake->-r requirements.txt (line 13))
  Obtaining dependency information for pyflakes>=3.0.0 from https://files.pythonhosted.org/packages/d4/d7/f1b7db88d8e4417c5d47adad627a93547f44bdc9028372dbd2313f34a855/pyflakes-3.2.0-py2.py3-none-any.whl.metadata
  Using cached pyflakes-3.2.0-py2.py3-none-any.whl.metadata (3.5 kB)
Collecting mccabe<0.8.0,>=0.7.0 (from flake8->-r requirements.txt (line 14))
  Obtaining dependency information for mccabe<0.8.0,>=0.7.0 from https://files.pythonhosted.org/packages/27/1a/1f68f9ba0c207934b35b86a8ca3aad8395a3d6dd7921c0686e23853ff5a9/mccabe-0.7.0-py2.py3-none-any.whl.metadata
  Using cached mccabe-0.7.0-py2.py3-none-any.whl.metadata (5.0 kB)
Collecting mypy_extensions>=1.0.0 (from mypy->-r requirements.txt (line 15))
  Obtaining dependency information for mypy_extensions>=1.0.0 from https://files.pythonhosted.org/packages/2a/e2/5d3f6ada4297caebe1a2add3b126fe800c96f56dbe5d1988a2cbe0b267aa/mypy_extensions-1.0.0-py3-none-any.whl.metadata
  Downloading mypy_extensions-1.0.0-py3-none-any.whl.metadata (1.1 kB)
Collecting anyio (from pytest-anyio->-r requirements.txt (line 22))
  Obtaining dependency information for anyio from https://files.pythonhosted.org/packages/46/eb/e7f063ad1fec6b3178a3cd82d1a3c4de82cccf283fc42746168188e1cdd5/anyio-4.8.0-py3-none-any.whl.metadata
  Using cached anyio-4.8.0-py3-none-any.whl.metadata (4.6 kB)
Collecting python-dateutil<3.0.0,>=2.1 (from botocore<1.36.0,>=1.35.70->boto3==1.35.70->-r requirements.txt (line 1))
  Obtaining dependency information for python-dateutil<3.0.0,>=2.1 from https://files.pythonhosted.org/packages/ec/57/56b9bcc3c9c6a792fcbaf139543cee77261f3651ca9da0c93f5c1221264b/python_dateutil-2.9.0.post0-py2.py3-none-any.whl.metadata
  Using cached python_dateutil-2.9.0.post0-py2.py3-none-any.whl.metadata (8.4 kB)
Collecting langsmith<0.4,>=0.1.125 (from langchain-core<0.4,>=0.3.15->langchain-aws==0.2.7->-r requirements.txt (line 4))
  Obtaining dependency information for langsmith<0.4,>=0.1.125 from https://files.pythonhosted.org/packages/8b/e4/5380e8229c442e406404977d2ec71a9db6a3e6a89fce7791c6ad7cd2bdbe/langsmith-0.3.8-py3-none-any.whl.metadata
  Using cached langsmith-0.3.8-py3-none-any.whl.metadata (14 kB)
Collecting tenacity!=8.4.0,<10.0.0,>=8.1.0 (from langchain-core<0.4,>=0.3.15->langchain-aws==0.2.7->-r requirements.txt (line 4))
  Obtaining dependency information for tenacity!=8.4.0,<10.0.0,>=8.1.0 from https://files.pythonhosted.org/packages/b6/cb/b86984bed139586d01532a587464b5805f12e397594f19f931c4c2fbfa61/tenacity-9.0.0-py3-none-any.whl.metadata
  Using cached tenacity-9.0.0-py3-none-any.whl.metadata (1.2 kB)
Collecting jsonpatch<2.0,>=1.33 (from langchain-core<0.4,>=0.3.15->langchain-aws==0.2.7->-r requirements.txt (line 4))
  Obtaining dependency information for jsonpatch<2.0,>=1.33 from https://files.pythonhosted.org/packages/73/07/02e16ed01e04a374e644b575638ec7987ae846d25ad97bcc9945a3ee4b0e/jsonpatch-1.33-py2.py3-none-any.whl.metadata
  Using cached jsonpatch-1.33-py2.py3-none-any.whl.metadata (3.0 kB)
Collecting greenlet!=0.4.17 (from sqlalchemy!=1.4.0,!=1.4.1,!=1.4.10,!=1.4.11,!=1.4.12,!=1.4.13,!=1.4.14,!=1.4.15,!=1.4.16,!=1.4.17,!=1.4.18,!=1.4.19,!=1.4.2,!=1.4.20,!=1.4.21,!=1.4.22,!=1.4.23,!=1.4.3,!=1.4.4,!=1.4.5,!=1.4.6,!=1.4.7,!=1.4.8,!=1.4.9,>1.0->pytest-mock-resources==2.12.1->-r requirements.txt (line 23))
  Obtaining dependency information for greenlet!=0.4.17 from https://files.pythonhosted.org/packages/f4/fb/201e1b932e584066e0f0658b538e73c459b34d44b4bd4034f682423bc801/greenlet-3.1.1-cp311-cp311-musllinux_1_1_x86_64.whl.metadata
  Using cached greenlet-3.1.1-cp311-cp311-musllinux_1_1_x86_64.whl.metadata (3.8 kB)
Collecting sniffio>=1.1 (from anyio->pytest-anyio->-r requirements.txt (line 22))
  Obtaining dependency information for sniffio>=1.1 from https://files.pythonhosted.org/packages/e9/44/75a9c9421471a6c4805dbf2356f7c181a29c1879239abab1ea2cc8f38b40/sniffio-1.3.1-py3-none-any.whl.metadata
  Using cached sniffio-1.3.1-py3-none-any.whl.metadata (3.9 kB)
Requirement already satisfied: distlib<1,>=0.3.7 in /usr/local/lib/python3.11/site-packages (from virtualenv>=20.10.0->pre-commit->-r requirements.txt (line 11)) (0.3.8)
Requirement already satisfied: filelock<4,>=3.12.2 in /usr/local/lib/python3.11/site-packages (from virtualenv>=20.10.0->pre-commit->-r requirements.txt (line 11)) (3.15.4)
Requirement already satisfied: platformdirs<5,>=3.9.1 in /usr/local/lib/python3.11/site-packages (from virtualenv>=20.10.0->pre-commit->-r requirements.txt (line 11)) (3.11.0)
Collecting jsonpointer>=1.9 (from jsonpatch<2.0,>=1.33->langchain-core<0.4,>=0.3.15->langchain-aws==0.2.7->-r requirements.txt (line 4))
  Obtaining dependency information for jsonpointer>=1.9 from https://files.pythonhosted.org/packages/71/92/5e77f98553e9e75130c78900d000368476aed74276eb8ae8796f65f00918/jsonpointer-3.0.0-py2.py3-none-any.whl.metadata
  Using cached jsonpointer-3.0.0-py2.py3-none-any.whl.metadata (2.3 kB)
Collecting httpx<1,>=0.23.0 (from langsmith<0.4,>=0.1.125->langchain-core<0.4,>=0.3.15->langchain-aws==0.2.7->-r requirements.txt (line 4))
  Obtaining dependency information for httpx<1,>=0.23.0 from https://files.pythonhosted.org/packages/2a/39/e50c7c3a983047577ee07d2a9e53faf5a69493943ec3f6a384bdc792deb2/httpx-0.28.1-py3-none-any.whl.metadata
  Using cached httpx-0.28.1-py3-none-any.whl.metadata (7.1 kB)
Collecting orjson<4.0.0,>=3.9.14 (from langsmith<0.4,>=0.1.125->langchain-core<0.4,>=0.3.15->langchain-aws==0.2.7->-r requirements.txt (line 4))
  Obtaining dependency information for orjson<4.0.0,>=3.9.14 from https://files.pythonhosted.org/packages/f8/d2/fc67523656e43a0c7eaeae9007c8b02e86076b15d591e9be11554d3d3138/orjson-3.10.15-cp311-cp311-musllinux_1_2_x86_64.whl.metadata
  Using cached orjson-3.10.15-cp311-cp311-musllinux_1_2_x86_64.whl.metadata (41 kB)
Requirement already satisfied: requests-toolbelt<2.0.0,>=1.0.0 in /usr/local/lib/python3.11/site-packages (from langsmith<0.4,>=0.1.125->langchain-core<0.4,>=0.3.15->langchain-aws==0.2.7->-r requirements.txt (line 4)) (1.0.0)
Collecting zstandard<0.24.0,>=0.23.0 (from langsmith<0.4,>=0.1.125->langchain-core<0.4,>=0.3.15->langchain-aws==0.2.7->-r requirements.txt (line 4))
  Obtaining dependency information for zstandard<0.24.0,>=0.23.0 from https://files.pythonhosted.org/packages/52/5a/87d6971f0997c4b9b09c495bf92189fb63de86a83cadc4977dc19735f652/zstandard-0.23.0-cp311-cp311-musllinux_1_2_x86_64.whl.metadata
  Using cached zstandard-0.23.0-cp311-cp311-musllinux_1_2_x86_64.whl.metadata (3.0 kB)
Collecting six>=1.5 (from python-dateutil<3.0.0,>=2.1->botocore<1.36.0,>=1.35.70->boto3==1.35.70->-r requirements.txt (line 1))
  Obtaining dependency information for six>=1.5 from https://files.pythonhosted.org/packages/b7/ce/149a00dd41f10bc29e5921b496af8b574d8413afcd5e30dfa0ed46c2cc5e/six-1.17.0-py2.py3-none-any.whl.metadata
  Using cached six-1.17.0-py2.py3-none-any.whl.metadata (1.7 kB)
Collecting httpcore==1.* (from httpx<1,>=0.23.0->langsmith<0.4,>=0.1.125->langchain-core<0.4,>=0.3.15->langchain-aws==0.2.7->-r requirements.txt (line 4))
  Obtaining dependency information for httpcore==1.* from https://files.pythonhosted.org/packages/87/f5/72347bc88306acb359581ac4d52f23c0ef445b57157adedb9aee0cd689d2/httpcore-1.0.7-py3-none-any.whl.metadata
  Using cached httpcore-1.0.7-py3-none-any.whl.metadata (21 kB)
Using cached boto3-1.35.70-py3-none-any.whl (139 kB)
Using cached fastapi-0.115.5-py3-none-any.whl (94 kB)
Using cached json_repair-0.30.3-py3-none-any.whl (18 kB)
Using cached langchain_aws-0.2.7-py3-none-any.whl (87 kB)
Using cached pydantic-2.10.2-py3-none-any.whl (456 kB)
Using cached pydantic_settings-2.6.1-py3-none-any.whl (28 kB)
Using cached regex-2024.11.6-cp311-cp311-musllinux_1_2_x86_64.whl (781 kB)
Using cached uvicorn-0.32.1-py3-none-any.whl (63 kB)
Using cached pytest-8.3.4-py3-none-any.whl (343 kB)
Using cached pytest_asyncio-0.25.3-py3-none-any.whl (19 kB)
Using cached pytest_mock-3.14.0-py3-none-any.whl (9.9 kB)
Using cached pytest_cov-6.0.0-py3-none-any.whl (22 kB)
Using cached pytest_mock_resources-2.12.1-py3-none-any.whl (58 kB)
Using cached pytest_timeout-2.3.1-py3-none-any.whl (14 kB)
Using cached pytest_xdist-3.5.0-py3-none-any.whl (42 kB)
Using cached pydantic_core-2.27.1-cp311-cp311-musllinux_1_1_x86_64.whl (2.1 MB)
Using cached nltk-3.9.1-py3-none-any.whl (1.5 MB)
Using cached pre_commit-4.1.0-py2.py3-none-any.whl (220 kB)
Using cached autopep8-2.3.2-py2.py3-none-any.whl (45 kB)
Using cached autoflake-2.3.1-py3-none-any.whl (32 kB)
Using cached flake8-7.1.1-py2.py3-none-any.whl (57 kB)
Downloading mypy-1.15.0-cp311-cp311-musllinux_1_2_x86_64.whl (12.4 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 12.4/12.4 MB 48.4 MB/s eta 0:00:00
Using cached pytest_anyio-0.0.0-py2.py3-none-any.whl (2.0 kB)
Using cached annotated_types-0.7.0-py3-none-any.whl (13 kB)
Using cached botocore-1.35.99-py3-none-any.whl (13.3 MB)
Using cached cfgv-3.4.0-py2.py3-none-any.whl (7.2 kB)
Using cached click-8.1.8-py3-none-any.whl (98 kB)
Using cached execnet-2.1.1-py3-none-any.whl (40 kB)
Using cached h11-0.14.0-py3-none-any.whl (58 kB)
Using cached identify-2.6.7-py2.py3-none-any.whl (99 kB)
Using cached jmespath-1.0.1-py3-none-any.whl (20 kB)
Using cached langchain_core-0.3.34-py3-none-any.whl (412 kB)
Using cached mccabe-0.7.0-py2.py3-none-any.whl (7.3 kB)
Downloading mypy_extensions-1.0.0-py3-none-any.whl (4.7 kB)
Using cached nodeenv-1.9.1-py2.py3-none-any.whl (22 kB)
Using cached numpy-1.26.4-cp311-cp311-musllinux_1_1_x86_64.whl (18.1 MB)
Using cached pycodestyle-2.12.1-py2.py3-none-any.whl (31 kB)
Using cached pyflakes-3.2.0-py2.py3-none-any.whl (62 kB)
Using cached python_dotenv-1.0.1-py3-none-any.whl (19 kB)
Using cached PyYAML-6.0.2-cp311-cp311-musllinux_1_1_x86_64.whl (756 kB)
Using cached s3transfer-0.10.4-py3-none-any.whl (83 kB)
Using cached SQLAlchemy-2.0.38-cp311-cp311-musllinux_1_2_x86_64.whl (3.2 MB)
Using cached starlette-0.41.3-py3-none-any.whl (73 kB)
Using cached anyio-4.8.0-py3-none-any.whl (96 kB)
Using cached typing_extensions-4.12.2-py3-none-any.whl (37 kB)
Using cached joblib-1.4.2-py3-none-any.whl (301 kB)
Using cached tqdm-4.67.1-py3-none-any.whl (78 kB)
Using cached greenlet-3.1.1-cp311-cp311-musllinux_1_1_x86_64.whl (1.2 MB)
Using cached jsonpatch-1.33-py2.py3-none-any.whl (12 kB)
Using cached langsmith-0.3.8-py3-none-any.whl (332 kB)
Using cached python_dateutil-2.9.0.post0-py2.py3-none-any.whl (229 kB)
Using cached sniffio-1.3.1-py3-none-any.whl (10 kB)
Using cached tenacity-9.0.0-py3-none-any.whl (28 kB)
Using cached httpx-0.28.1-py3-none-any.whl (73 kB)
Using cached httpcore-1.0.7-py3-none-any.whl (78 kB)
Using cached jsonpointer-3.0.0-py2.py3-none-any.whl (7.6 kB)
Using cached orjson-3.10.15-cp311-cp311-musllinux_1_2_x86_64.whl (129 kB)
Using cached six-1.17.0-py2.py3-none-any.whl (11 kB)
Using cached zstandard-0.23.0-cp311-cp311-musllinux_1_2_x86_64.whl (5.2 MB)
Installing collected packages: zstandard, typing-extensions, tqdm, tenacity, sniffio, six, regex, pyyaml, python-dotenv, pytest, pyflakes, pycodestyle, orjson, numpy, nodeenv, mypy_extensions, mccabe, jsonpointer, json_repair, joblib, jmespath, identify, h11, greenlet, execnet, click, cfgv, annotated-types, uvicorn, sqlalchemy, python-dateutil, pytest-xdist, pytest-timeout, pytest-mock, pytest-cov, pytest-asyncio, pydantic-core, pre-commit, nltk, mypy, jsonpatch, httpcore, flake8, autopep8, autoflake, anyio, starlette, pytest-mock-resources, pytest-anyio, pydantic, httpx, botocore, s3transfer, pydantic-settings, langsmith, fastapi, langchain-core, boto3, langchain-aws
  Attempting uninstall: pytest
    Found existing installation: pytest 8.2.0
    Uninstalling pytest-8.2.0:
      Successfully uninstalled pytest-8.2.0
  Attempting uninstall: pytest-cov
    Found existing installation: pytest-cov 4.1.0
    Uninstalling pytest-cov-4.1.0:
      Successfully uninstalled pytest-cov-4.1.0
Successfully installed annotated-types-0.7.0 anyio-4.8.0 autoflake-2.3.1 autopep8-2.3.2 boto3-1.35.70 botocore-1.35.99 cfgv-3.4.0 click-8.1.8 execnet-2.1.1 fastapi-0.115.5 flake8-7.1.1 greenlet-3.1.1 h11-0.14.0 httpcore-1.0.7 httpx-0.28.1 identify-2.6.7 jmespath-1.0.1 joblib-1.4.2 json_repair-0.30.3 jsonpatch-1.33 jsonpointer-3.0.0 langchain-aws-0.2.7 langchain-core-0.3.34 langsmith-0.3.8 mccabe-0.7.0 mypy-1.15.0 mypy_extensions-1.0.0 nltk-3.9.1 nodeenv-1.9.1 numpy-1.26.4 orjson-3.10.15 pre-commit-4.1.0 pycodestyle-2.12.1 pydantic-2.10.2 pydantic-core-2.27.1 pydantic-settings-2.6.1 pyflakes-3.2.0 pytest-8.3.4 pytest-anyio-0.0.0 pytest-asyncio-0.25.3 pytest-cov-6.0.0 pytest-mock-3.14.0 pytest-mock-resources-2.12.1 pytest-timeout-2.3.1 pytest-xdist-3.5.0 python-dateutil-2.9.0.post0 python-dotenv-1.0.1 pyyaml-6.0.2 regex-2024.11.6 s3transfer-0.10.4 six-1.17.0 sniffio-1.3.1 sqlalchemy-2.0.38 starlette-0.41.3 tenacity-9.0.0 tqdm-4.67.1 typing-extensions-4.12.2 uvicorn-0.32.1 zstandard-0.23.0
WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
[notice] A new release of pip is available: 23.2.1 -> 25.0
[notice] To update, run: pip install --upgrade pip
$ pip install mypy types-all
Requirement already satisfied: mypy in /usr/local/lib/python3.11/site-packages (1.15.0)
Collecting types-all
  Obtaining dependency information for types-all from https://files.pythonhosted.org/packages/4f/8b/7232dd2851fc69fcc2cbb7cc5688103e336cf7d698b20b419190145a57e4/types_all-1.0.0-py2.py3-none-any.whl.metadata
  Downloading types_all-1.0.0-py2.py3-none-any.whl.metadata (4.1 kB)
Requirement already satisfied: typing_extensions>=4.6.0 in /usr/local/lib/python3.11/site-packages (from mypy) (4.12.2)
Requirement already satisfied: mypy_extensions>=1.0.0 in /usr/local/lib/python3.11/site-packages (from mypy) (1.0.0)
Collecting types-DateTimeRange (from types-all)
  Obtaining dependency information for types-DateTimeRange from https://files.pythonhosted.org/packages/40/a2/687cb52b9602222282eb98c41ef99b3484506fbc4855a06544fcf3079d2a/types_DateTimeRange-2.0.0.6-py3-none-any.whl.metadata
  Downloading types_DateTimeRange-2.0.0.6-py3-none-any.whl.metadata (1.6 kB)
Collecting types-Deprecated (from types-all)
  Obtaining dependency information for types-Deprecated from https://files.pythonhosted.org/packages/27/ed/9091bd7a90d3e2e08ee8c0bdbf0c826d3d9e3730ddd9b15cb64f4ae51b9b/types_Deprecated-1.2.15.20241117-py3-none-any.whl.metadata
  Downloading types_Deprecated-1.2.15.20241117-py3-none-any.whl.metadata (1.8 kB)
Collecting types-Flask (from types-all)
  Obtaining dependency information for types-Flask from https://files.pythonhosted.org/packages/60/6c/a98a0c29c39d8a6283ac704f3d36f0d570d8dee931e9d46d6cc60d436bec/types_Flask-1.1.6-py3-none-any.whl.metadata
  Downloading types_Flask-1.1.6-py3-none-any.whl.metadata (1.1 kB)
Collecting types-JACK-Client (from types-all)
  Obtaining dependency information for types-JACK-Client from https://files.pythonhosted.org/packages/7b/1e/8f0ff877a6c6ef5bca2c755b02237e48e8248c9361491f4e4aeda74d4142/types_JACK_Client-0.5.10.20241112-py3-none-any.whl.metadata
  Downloading types_JACK_Client-0.5.10.20241112-py3-none-any.whl.metadata (1.9 kB)
Collecting types-Jinja2 (from types-all)
  Obtaining dependency information for types-Jinja2 from https://files.pythonhosted.org/packages/b7/b0/e79d84748f1d34304f13191424348a719c3febaa3493835370fe9528e1e6/types_Jinja2-2.11.9-py3-none-any.whl.metadata
  Downloading types_Jinja2-2.11.9-py3-none-any.whl.metadata (1.1 kB)
Collecting types-Markdown (from types-all)
  Obtaining dependency information for types-Markdown from https://files.pythonhosted.org/packages/04/26/3c9730e845cfd0d587e0dfa9c1975f02f9f49407afbf30800094bdac0286/types_Markdown-3.7.0.20241204-py3-none-any.whl.metadata
  Downloading types_Markdown-3.7.0.20241204-py3-none-any.whl.metadata (2.0 kB)
Collecting types-MarkupSafe (from types-all)
  Obtaining dependency information for types-MarkupSafe from https://files.pythonhosted.org/packages/bc/d6/b8effb1c48539260a5eb4196afc55efac4ea1684a4991977555eb266b2ef/types_MarkupSafe-1.1.10-py3-none-any.whl.metadata
  Downloading types_MarkupSafe-1.1.10-py3-none-any.whl.metadata (1.1 kB)
Collecting types-Pillow (from types-all)
  Obtaining dependency information for types-Pillow from https://files.pythonhosted.org/packages/66/23/e81a5354859831fcf54d488d33b80ba6133ea84f874a9c0ec40a4881e133/types_Pillow-10.2.0.20240822-py3-none-any.whl.metadata
  Downloading types_Pillow-10.2.0.20240822-py3-none-any.whl.metadata (1.8 kB)
Collecting types-PyJWT (from types-all)
  Obtaining dependency information for types-PyJWT from https://files.pythonhosted.org/packages/5a/65/41dc35b71cbd44dbc40583ab1d7b919e7b5c269ec36b9cee8e26c5d665a0/types_PyJWT-1.7.1-py2.py3-none-any.whl.metadata
  Downloading types_PyJWT-1.7.1-py2.py3-none-any.whl.metadata (1.1 kB)
Collecting types-PyMySQL (from types-all)
  Obtaining dependency information for types-PyMySQL from https://files.pythonhosted.org/packages/3e/04/d02323dd4dfd6e0af4ecbb88a00215c37aa79894a2d158390700c84c8597/types_PyMySQL-1.1.0.20241103-py3-none-any.whl.metadata
  Downloading types_PyMySQL-1.1.0.20241103-py3-none-any.whl.metadata (2.0 kB)
Collecting types-PyYAML (from types-all)
  Obtaining dependency information for types-PyYAML from https://files.pythonhosted.org/packages/e8/c1/48474fbead512b70ccdb4f81ba5eb4a58f69d100ba19f17c92c0c4f50ae6/types_PyYAML-6.0.12.20241230-py3-none-any.whl.metadata
  Downloading types_PyYAML-6.0.12.20241230-py3-none-any.whl.metadata (1.8 kB)
Collecting types-Routes (from types-all)
  Obtaining dependency information for types-Routes from https://files.pythonhosted.org/packages/5e/91/d69ec85cf43b2fe7039db7500382e16e65e5f343554763ad9c7358f63195/types_Routes-2.5.0-py3-none-any.whl.metadata
  Downloading types_Routes-2.5.0-py3-none-any.whl.metadata (848 bytes)
Collecting types-Werkzeug (from types-all)
  Obtaining dependency information for types-Werkzeug from https://files.pythonhosted.org/packages/4a/c1/eaf8426126eafa46d649afb2fddede327043fbc2e84021b8b09a7fa15115/types_Werkzeug-1.0.9-py3-none-any.whl.metadata
  Downloading types_Werkzeug-1.0.9-py3-none-any.whl.metadata (1.0 kB)
Collecting types-aiofiles (from types-all)
  Obtaining dependency information for types-aiofiles from https://files.pythonhosted.org/packages/ff/da/77902220df98ce920444cf3611fa0b1cf0dc2cfa5a137c55e93829aa458e/types_aiofiles-24.1.0.20241221-py3-none-any.whl.metadata
  Downloading types_aiofiles-24.1.0.20241221-py3-none-any.whl.metadata (1.8 kB)
Collecting types-annoy (from types-all)
  Obtaining dependency information for types-annoy from https://files.pythonhosted.org/packages/d9/c6/88583d1f7dab9a6be9799552dbdda066e904b1601e8e350098d48f539ac5/types_annoy-1.17.8.4-py3-none-any.whl.metadata
  Downloading types_annoy-1.17.8.4-py3-none-any.whl.metadata (1.5 kB)
Collecting types-atomicwrites (from types-all)
  Obtaining dependency information for types-atomicwrites from https://files.pythonhosted.org/packages/8d/18/3e6d9e83ef176dfbf59152086f7629c344b6384ece6044bfb411f4ffd57a/types_atomicwrites-1.4.5.1-py3-none-any.whl.metadata
  Downloading types_atomicwrites-1.4.5.1-py3-none-any.whl.metadata (1.3 kB)
Collecting types-backports (from types-all)
  Obtaining dependency information for types-backports from https://files.pythonhosted.org/packages/db/9d/34fa6d6086b3e6c13d90d7697caad79e1c94a55677b099c5737a373856d2/types_backports-0.1.3-py2.py3-none-any.whl.metadata
  Downloading types_backports-0.1.3-py2.py3-none-any.whl.metadata (878 bytes)
Collecting types-backports-abc (from types-all)
  Obtaining dependency information for types-backports-abc from https://files.pythonhosted.org/packages/e9/7d/4cb7e896075e2dd1ab681a901c17a1690062f82b38913023176dccaa6551/types_backports_abc-0.5.2-py3-none-any.whl.metadata
  Downloading types_backports_abc-0.5.2-py3-none-any.whl.metadata (895 bytes)
Collecting types-bleach (from types-all)
  Obtaining dependency information for types-bleach from https://files.pythonhosted.org/packages/60/4c/7699723b86ed7ce9a2a21fb437be8ae9658e9faecaae5cd6d02632bc77f4/types_bleach-6.2.0.20241123-py3-none-any.whl.metadata
  Downloading types_bleach-6.2.0.20241123-py3-none-any.whl.metadata (1.8 kB)
Collecting types-boto (from types-all)
  Obtaining dependency information for types-boto from https://files.pythonhosted.org/packages/79/b7/b6596aac9907fda72e90ce6d11554497d6369583012ed370424291e1432d/types_boto-2.49.18.20241019-py3-none-any.whl.metadata
  Downloading types_boto-2.49.18.20241019-py3-none-any.whl.metadata (2.0 kB)
Collecting types-cachetools (from types-all)
  Obtaining dependency information for types-cachetools from https://files.pythonhosted.org/packages/27/4d/fd7cc050e2d236d5570c4d92531c0396573a1e14b31735870e849351c717/types_cachetools-5.5.0.20240820-py3-none-any.whl.metadata
  Downloading types_cachetools-5.5.0.20240820-py3-none-any.whl.metadata (1.7 kB)
Collecting types-certifi (from types-all)
  Obtaining dependency information for types-certifi from https://files.pythonhosted.org/packages/b5/63/2463d89481e811f007b0e1cd0a91e52e141b47f9de724d20db7b861dcfec/types_certifi-2021.10.8.3-py3-none-any.whl.metadata
  Downloading types_certifi-2021.10.8.3-py3-none-any.whl.metadata (1.4 kB)
Collecting types-characteristic (from types-all)
  Obtaining dependency information for types-characteristic from https://files.pythonhosted.org/packages/cb/a0/cfcba23d01f67e235a4a44ddc888641ea77b4a0f062dc17eb07dbe8e9b86/types_characteristic-14.3.7-py3-none-any.whl.metadata
  Downloading types_characteristic-14.3.7-py3-none-any.whl.metadata (1.3 kB)
Collecting types-chardet (from types-all)
  Obtaining dependency information for types-chardet from https://files.pythonhosted.org/packages/10/35/2a06c5c892eb1a0a4f4f74a6aff1ade05da82444af0190cf731761f2c46c/types_chardet-5.0.4.6-py3-none-any.whl.metadata
  Downloading types_chardet-5.0.4.6-py3-none-any.whl.metadata (1.5 kB)
Collecting types-click (from types-all)
  Obtaining dependency information for types-click from https://files.pythonhosted.org/packages/ee/ad/607454a5f991c5b3e14693a7113926758f889138371058a5f72f567fa131/types_click-7.1.8-py3-none-any.whl.metadata
  Downloading types_click-7.1.8-py3-none-any.whl.metadata (1.0 kB)
Collecting types-click-spinner (from types-all)
  Obtaining dependency information for types-click-spinner from https://files.pythonhosted.org/packages/6c/18/a91759a305754051649e8a3f877541223062d615e0ceee31c24558dc5204/types_click_spinner-0.1.13.20240311-py3-none-any.whl.metadata
  Downloading types_click_spinner-0.1.13.20240311-py3-none-any.whl.metadata (1.6 kB)
Collecting types-colorama (from types-all)
  Obtaining dependency information for types-colorama from https://files.pythonhosted.org/packages/b7/83/6944b4fa01efb2e63ac62b791a8ddf0fee358f93be9f64b8f152648ad9d3/types_colorama-0.4.15.20240311-py3-none-any.whl.metadata
  Downloading types_colorama-0.4.15.20240311-py3-none-any.whl.metadata (1.6 kB)
Collecting types-contextvars (from types-all)
  Obtaining dependency information for types-contextvars from https://files.pythonhosted.org/packages/41/5e/770b3dd271a925b4428ee17664536d037695698eb764b4c5ed6fe815169b/types_contextvars-2.4.7.3-py3-none-any.whl.metadata
  Downloading types_contextvars-2.4.7.3-py3-none-any.whl.metadata (1.5 kB)
Collecting types-croniter (from types-all)
  Obtaining dependency information for types-croniter from https://files.pythonhosted.org/packages/dc/ec/ff0222b912fdff040a1908ea226f64ff5a1a384a4062a8714eb8b80ea5d9/types_croniter-5.0.1.20241205-py3-none-any.whl.metadata
  Downloading types_croniter-5.0.1.20241205-py3-none-any.whl.metadata (1.8 kB)
Collecting types-cryptography (from types-all)
  Obtaining dependency information for types-cryptography from https://files.pythonhosted.org/packages/b6/36/92dfe7e5056694e78caefd05b383140c74c7fcbfc63d26ee514c77f2d8a2/types_cryptography-3.3.23.2-py3-none-any.whl.metadata
  Downloading types_cryptography-3.3.23.2-py3-none-any.whl.metadata (1.4 kB)
Collecting types-dataclasses (from types-all)
  Obtaining dependency information for types-dataclasses from https://files.pythonhosted.org/packages/31/85/23ab2bbc280266af5bf22ded4e070946d1694d1721ced90666b649eaa795/types_dataclasses-0.6.6-py3-none-any.whl.metadata
  Downloading types_dataclasses-0.6.6-py3-none-any.whl.metadata (1.3 kB)
Collecting types-dateparser (from types-all)
  Obtaining dependency information for types-dateparser from https://files.pythonhosted.org/packages/eb/c3/7bbc3d907eaa5cf604207f19b60be5773e12065c621e1bb61f7f9f5159ec/types_dateparser-1.2.0.20250208-py3-none-any.whl.metadata
  Downloading types_dateparser-1.2.0.20250208-py3-none-any.whl.metadata (2.0 kB)
Collecting types-decorator (from types-all)
  Obtaining dependency information for types-decorator from https://files.pythonhosted.org/packages/88/0e/59b9637fa66fbe419886b17d59b90e5e4256325c01f94f81dcc44fbeda53/types_decorator-5.1.8.20250121-py3-none-any.whl.metadata
  Downloading types_decorator-5.1.8.20250121-py3-none-any.whl.metadata (2.0 kB)
Collecting types-docopt (from types-all)
  Obtaining dependency information for types-docopt from https://files.pythonhosted.org/packages/a2/91/9fc73a8ecfcc82a8be2e21f8e63fc35ffcd3a67771ac95a6dfba49a15ab8/types_docopt-0.6.11.20241107-py3-none-any.whl.metadata
  Downloading types_docopt-0.6.11.20241107-py3-none-any.whl.metadata (2.2 kB)
Collecting types-docutils (from types-all)
  Obtaining dependency information for types-docutils from https://files.pythonhosted.org/packages/59/b6/10ba95739f2cbb9c5bd2f6568148d62b468afe01a94c633e8892a2936d8a/types_docutils-0.21.0.20241128-py3-none-any.whl.metadata
  Downloading types_docutils-0.21.0.20241128-py3-none-any.whl.metadata (2.0 kB)
Collecting types-emoji (from types-all)
  Obtaining dependency information for types-emoji from https://files.pythonhosted.org/packages/f3/b0/fa907f45a260a1f84f5aa3f39f0d63865115991244fa7725fa1e23a34259/types_emoji-2.1.0.3-py3-none-any.whl.metadata
  Downloading types_emoji-2.1.0.3-py3-none-any.whl.metadata (1.4 kB)
Collecting types-enum34 (from types-all)
  Obtaining dependency information for types-enum34 from https://files.pythonhosted.org/packages/1d/43/44dd693abfd50602867a7c37a46b1642e1e54185f980d3feb0d4250c42d6/types_enum34-1.1.8-py3-none-any.whl.metadata
  Downloading types_enum34-1.1.8-py3-none-any.whl.metadata (853 bytes)
Collecting types-fb303 (from types-all)
  Obtaining dependency information for types-fb303 from https://files.pythonhosted.org/packages/2d/03/23c04b43768c78d9f4f4cb35c181776203204f65e945a6cb69be857875cc/types_fb303-1.0.0-py3-none-any.whl.metadata
  Downloading types_fb303-1.0.0-py3-none-any.whl.metadata (842 bytes)
Collecting types-filelock (from types-all)
  Obtaining dependency information for types-filelock from https://files.pythonhosted.org/packages/c7/3f/2346b8821ebc17e1c291c2ea11ec15c0b1c9241d29eaa28f2e7f9db42088/types_filelock-3.2.7-py3-none-any.whl.metadata
  Downloading types_filelock-3.2.7-py3-none-any.whl.metadata (1.4 kB)
Collecting types-first (from types-all)
  Obtaining dependency information for types-first from https://files.pythonhosted.org/packages/3a/dc/812ac3259121ac02110584f1fdb32daff71888533f8cdc5d253420280578/types_first-2.0.5.20240806-py3-none-any.whl.metadata
  Downloading types_first-2.0.5.20240806-py3-none-any.whl.metadata (1.6 kB)
Collecting types-freezegun (from types-all)
  Obtaining dependency information for types-freezegun from https://files.pythonhosted.org/packages/96/48/3380ecdafe5646f4e9e31814297073aeb6929c474212377189cbee228b50/types_freezegun-1.1.10-py3-none-any.whl.metadata
  Downloading types_freezegun-1.1.10-py3-none-any.whl.metadata (1.4 kB)
Collecting types-frozendict (from types-all)
  Obtaining dependency information for types-frozendict from https://files.pythonhosted.org/packages/f7/ce/b82dc24a102905e86e45502e23ee60bbc57703ba1b82a65f12a43486b4f2/types_frozendict-2.0.9-py3-none-any.whl.metadata
  Downloading types_frozendict-2.0.9-py3-none-any.whl.metadata (1.4 kB)
Collecting types-futures (from types-all)
  Obtaining dependency information for types-futures from https://files.pythonhosted.org/packages/11/ce/d4d0907c8ab69a38ab6205c2549364cd65c8b6c3d354fded37141c636c07/types_futures-3.3.8-py3-none-any.whl.metadata
  Downloading types_futures-3.3.8-py3-none-any.whl.metadata (859 bytes)
Collecting types-geoip2 (from types-all)
  Obtaining dependency information for types-geoip2 from https://files.pythonhosted.org/packages/f2/47/1349e5ecac64a45b8ce2e446f7bf5845a914b4f633bba664854737cd955f/types_geoip2-3.0.0-py3-none-any.whl.metadata
  Downloading types_geoip2-3.0.0-py3-none-any.whl.metadata (1.1 kB)
Collecting types-ipaddress (from types-all)
  Obtaining dependency information for types-ipaddress from https://files.pythonhosted.org/packages/ea/f0/77dcbd8ff526b0f9989fb4bc92b5c584679710e0e7e0cc1527ba084ce04a/types_ipaddress-1.0.8-py3-none-any.whl.metadata
  Downloading types_ipaddress-1.0.8-py3-none-any.whl.metadata (1.2 kB)
Collecting types-itsdangerous (from types-all)
  Obtaining dependency information for types-itsdangerous from https://files.pythonhosted.org/packages/55/88/51732cae3f281af4db869bc039c3320048dcbb26cb57222e3f8073bf09f8/types_itsdangerous-1.1.6-py3-none-any.whl.metadata
  Downloading types_itsdangerous-1.1.6-py3-none-any.whl.metadata (1.1 kB)
Collecting types-kazoo (from types-all)
  Obtaining dependency information for types-kazoo from https://files.pythonhosted.org/packages/bc/cd/ff036e8607098cfb88a5d9e834726d41df8163f117a3b9587e9b57d03e30/types_kazoo-0.1.3-py3-none-any.whl.metadata
  Downloading types_kazoo-0.1.3-py3-none-any.whl.metadata (854 bytes)
Collecting types-maxminddb (from types-all)
  Obtaining dependency information for types-maxminddb from https://files.pythonhosted.org/packages/54/3a/7c9f2efd9cb43f0277c32c9b27969b19664c730784165f00a1e3ae6e5530/types_maxminddb-1.5.0-py3-none-any.whl.metadata
  Downloading types_maxminddb-1.5.0-py3-none-any.whl.metadata (1.1 kB)
Collecting types-mock (from types-all)
  Obtaining dependency information for types-mock from https://files.pythonhosted.org/packages/02/6d/7710612643616654ca0094234bce0f0448f4aa9d6f3057e4681143f73e73/types_mock-5.1.0.20240425-py3-none-any.whl.metadata
  Downloading types_mock-5.1.0.20240425-py3-none-any.whl.metadata (1.5 kB)
Collecting types-mypy-extensions (from types-all)
  Obtaining dependency information for types-mypy-extensions from https://files.pythonhosted.org/packages/5d/40/4310c54771d38cd86a1ec21b8f7fc44ce30cbb9eacc299ad4c699bb1c64c/types_mypy_extensions-1.0.0.20240311-py3-none-any.whl.metadata
  Downloading types_mypy_extensions-1.0.0.20240311-py3-none-any.whl.metadata (1.6 kB)
Collecting types-nmap (from types-all)
  Obtaining dependency information for types-nmap from https://files.pythonhosted.org/packages/6e/21/983b5941086df8b4b8ed223f956a311f305554a83bd085c80333e1bf6ad2/types_nmap-0.1.6-py3-none-any.whl.metadata
  Downloading types_nmap-0.1.6-py3-none-any.whl.metadata (836 bytes)
Collecting types-openssl-python (from types-all)
  Obtaining dependency information for types-openssl-python from https://files.pythonhosted.org/packages/0c/d7/259fa4fdfff2fe53a0d38c3c9e04c761232764a5cf110933941c23b2da10/types_openssl_python-0.1.3-py2.py3-none-any.whl.metadata
  Downloading types_openssl_python-0.1.3-py2.py3-none-any.whl.metadata (942 bytes)
Collecting types-orjson (from types-all)
  Obtaining dependency information for types-orjson from https://files.pythonhosted.org/packages/55/84/b34abd2d08381c5113e475908a1d79d27dc9a15f669213cee4ca03d1a891/types_orjson-3.6.2-py3-none-any.whl.metadata
  Downloading types_orjson-3.6.2-py3-none-any.whl.metadata (1.0 kB)
Collecting types-paramiko (from types-all)
  Obtaining dependency information for types-paramiko from https://files.pythonhosted.org/packages/8e/e5/afb514829e7184e7518a62c014dc364f7a9d47f9112ff26c63835cbf0de5/types_paramiko-3.5.0.20240928-py3-none-any.whl.metadata
  Downloading types_paramiko-3.5.0.20240928-py3-none-any.whl.metadata (1.9 kB)
Collecting types-pathlib2 (from types-all)
  Obtaining dependency information for types-pathlib2 from https://files.pythonhosted.org/packages/5a/1e/f5f0020d41cb6fed3fb459d94d28f0aad81394db89e9d3a3038bfc64f855/types_pathlib2-2.3.0-py3-none-any.whl.metadata
  Downloading types_pathlib2-2.3.0-py3-none-any.whl.metadata (860 bytes)
INFO: pip is looking at multiple versions of types-all to determine which version is compatible with other requirements. This could take a while.
ERROR: Could not find a version that satisfies the requirement types-pkg-resources (from types-all) (from versions: 0.1.0, 0.1.1, 0.1.2, 0.1.3)
ERROR: No matching distribution found for types-pkg-resources
[notice] A new release of pip is available: 23.2.1 -> 25.0
[notice] To update, run: pip install --upgrade pip
Uploading artifacts for failed job
00:05
Uploading artifacts...
WARNING: mypy.xml: no matching files. Ensure that the artifact path is relative to the working directory (/builds/dwp/content-artificial-intelligence-tooling/content-creation-generate-content) 
ERROR: No files to upload                          
Cleaning up project directory and file based variables
00:00
ERROR: Job failed: command terminated with exit code 1
