FROM python:3.9-alpine

# Create a non-root user with Alpine commands
RUN addgroup -S appuser && adduser -S appuser -G appuser

WORKDIR /app

COPY . /app

# Install ca-certificates and update certificates
RUN apk update && apk add --no-cache ca-certificates && update-ca-certificates

# Install dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Change ownership of /app to appuser
RUN chown -R appuser:appuser /app

# Switch to non-root user
USER appuser

EXPOSE 8080

# Run the application
CMD [ "uvicorn", "main:app", "--app-dir", "./src", "--reload", "--host", "0.0.0.0", "--port", "8080" ]
