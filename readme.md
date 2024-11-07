Hello World!


# Start with your base image (adjust the tag/version as needed)
FROM python:3.10-slim

# Create a non-root user and group
RUN groupadd -r appuser && useradd -r -g appuser appuser

# Set working directory
WORKDIR /app

# Copy your application files
COPY . /app

# Install your dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Change ownership of application files to the non-root user
RUN chown -R appuser:appuser /app

# Switch to the non-root user
USER appuser

# Specify the command to run your application
CMD ["python", "app.py"]
