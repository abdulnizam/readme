Hello World!



FROM python:3.9-alpine

RUN groupadd -r appuser && useradd -r -g appuser appuser

WORKDIR /app

COPY . /app

RUN apk update && apk add --no-cache ca-certificates && update-ca-certificates

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

RUN chown -R appuser:appuser /app

USER appuser

EXPOSE 8080
CMD [ "uvicorn", "main:app", "--app-dir", "./src", "--reload", "--host", "0.0.0.0", "--port", "8080" ]



#6 [2/8] RUN groupadd -r appuser && useradd -r -g appuser appuser
#6 0.184 /bin/sh: groupadd: not found
#6 ERROR: process "/bin/sh -c groupadd -r appuser && useradd -r -g appuser appuser" did not complete successfully: exit code: 127
------
 > [2/8] RUN groupadd -r appuser && useradd -r -g appuser appuser:
0.184 /bin/sh: groupadd: not found
------
WARNING: current commit information was not captured by the build: git was not found in the system: exec: "git": executable file not found in $PATH
Dockerfile:4
--------------------
   2 |     FROM python:3.9-alpine
   3 |     
   4 | >>> RUN groupadd -r appuser && useradd -r -g appuser appuser
   5 |     
   6 |     WORKDIR /app
