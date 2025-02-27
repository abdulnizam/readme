from fastapi import FastAPI
import time
import asyncio

app = FastAPI()

@app.get("/test")
async def test():
    start_time = time.time()
    
    print("Start processing request")
    await asyncio.sleep(5)  # Simulating delay
    print("Finished processing request")

    end_time = time.time()
    processing_time = round(end_time - start_time, 2)

    return {"message": "Request processed", "processing_time": f"{processing_time}s"}




    curl -w "\nTotal time: %{time_total}s\n" -o /dev/null -s http://127.0.0.1:8000/test


    import requests
    import time
    from concurrent.futures import ThreadPoolExecutor
    
    URL = "http://127.0.0.1:8000/test"
    
    def send_request():
        response = requests.get(URL)
        print(response.json())
    
    start_time = time.time()
    
    with ThreadPoolExecutor(max_workers=3) as executor:
        executor.map(send_request, range(3))
    
    end_time = time.time()
    print(f"Total execution time: {round(end_time - start_time, 2)}s")