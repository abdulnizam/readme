pip install --upgrade certifi



import ssl
import certifi
ssl._create_default_https_context = ssl._create_unverified_context

import nltk
nltk.download('punkt_tab')


python -m nltk.downloader punkt


import nltk
nltk.data.find('tokenizers/punkt')