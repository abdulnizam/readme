from controller.routes import generate_content_router_v1
from fastapi.middleware.cors import CORSMiddleware

from fastapi import FastAPI

description = '''
This is the content creation microservice
'''

origins = ['http://localhost', 'http://localhost:8083']

app = FastAPI(title='generate_content_microservice',
              description=description
              )

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

app.include_router(generate_content_router_v1, prefix='/v1')
