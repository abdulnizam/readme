import os
import hashlib
from base64 import b64encode, b64decode
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad

# 🔐 Load 256-bit MOK key from environment (injected by Azure Key Vault during deployment)
SECRET_KEY = os.environ.get("EMAIL_ENCRYPTION_KEY")

if not SECRET_KEY:
    raise ValueError("EMAIL_ENCRYPTION_KEY environment variable is not set")

# ✅ Derive 32-byte AES-256 key from the secret using SHA-256
KEY = hashlib.sha256(SECRET_KEY.encode()).digest()

# ⚠️ Fixed IV (initialization vector) – you can switch to random IVs for better security
IV = b"0123456789abcdef"  # 16 bytes (AES block size)

def encrypt_email(email: str) -> str:
    """
    Encrypt an email using AES-256-CBC and return base64-encoded string.
    """
    cipher = AES.new(KEY, AES.MODE_CBC, IV)
    padded_data = pad(email.encode(), AES.block_size)
    encrypted = cipher.encrypt(padded_data)
    return b64encode(encrypted).decode("utf-8")

def decrypt_email(encrypted_email: str) -> str:
    """
    Decrypt a base64-encoded encrypted email string.
    """
    cipher = AES.new(KEY, AES.MODE_CBC, IV)
    decrypted_data = cipher.decrypt(b64decode(encrypted_email))
    return unpad(decrypted_data, AES.block_size).decode("utf-8")