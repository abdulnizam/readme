from fastapi import FastAPI
import asyncio

app = FastAPI()

@app.get("/test")
async def test():
    print("Start processing request")
    await asyncio.sleep(5)  # Simulates a slow operation (e.g., DB query)
    print("Finished processing request")
    return {"message": "Request processed"}