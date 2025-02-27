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
    from concurrent.futures import ThreadPoolExecutor, as_completed
    
    URL = "http://127.0.0.1:8000/test"
    
    def send_request():
        start_time = time.time()
        response = requests.get(URL)
        end_time = time.time()
        
        print(response.json())
        return end_time - start_time  # Return processing time per request
    
    start_time = time.time()
    
    with ThreadPoolExecutor(max_workers=3) as executor:
        futures = [executor.submit(send_request) for _ in range(3)]  # Launch 3 requests
        for future in as_completed(futures):  # Wait for all requests to finish
            print(f"Request finished in {round(future.result(), 2)}s")
    
    end_time = time.time()
    print(f"Total execution time: {round(end_time - start_time, 2)}s")