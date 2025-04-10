import os
import hashlib
from base64 import b64encode, b64decode
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.primitives import padding
from cryptography.hazmat.backends import default_backend

# 🔐 Load 256-bit MOK key from environment (injected by Azure Key Vault during deployment)
SECRET_KEY = os.environ.get("EMAIL_ENCRYPTION_KEY")

if not SECRET_KEY:
    raise ValueError("EMAIL_ENCRYPTION_KEY environment variable is not set")

# ✅ Derive a 32-byte AES key (256-bit)
KEY = hashlib.sha256(SECRET_KEY.encode()).digest()

# ⚠️ Fixed IV (initialization vector)
IV = b"0123456789abcdef"  # 16 bytes (AES block size)

def encrypt_email(email: str) -> str:
    """
    Encrypts the email using AES-256-CBC and returns a base64-encoded string.
    """
    backend = default_backend()
    cipher = Cipher(algorithms.AES(KEY), modes.CBC(IV), backend=backend)
    encryptor = cipher.encryptor()

    # Pad data to AES block size
    padder = padding.PKCS7(128).padder()  # 128-bit block size for AES
    padded_data = padder.update(email.encode()) + padder.finalize()

    encrypted = encryptor.update(padded_data) + encryptor.finalize()
    return b64encode(encrypted).decode("utf-8")

def decrypt_email(encrypted_email: str) -> str:
    """
    Decrypts a base64-encoded encrypted email back to plain text.
    """
    backend = default_backend()
    cipher = Cipher(algorithms.AES(KEY), modes.CBC(IV), backend=backend)
    decryptor = cipher.decryptor()

    decoded_data = b64decode(encrypted_email)
    decrypted_padded = decryptor.update(decoded_data) + decryptor.finalize()

    # Unpad data
    unpadder = padding.PKCS7(128).unpadder()
    decrypted = unpadder.update(decrypted_padded) + unpadder.finalize()

    return decrypted.decode("utf-8")