from controller.routes import doc_manager_router_v1
from fastapi.middleware.cors import CORSMiddleware

from fastapi import FastAPI

description = """
This is the Document Manager Microservice

It will forward the document received from the Orchestrator to the DB(stub)
"""

origins = ["http://localhost", "http://localhost:8080"]

app = FastAPI(title="Document Manager", description=description)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(doc_manager_router_v1, prefix="/v1")
