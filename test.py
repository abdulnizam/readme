response = client.post(
    "/query",
    data=json.dumps(test_data),
    content_type="application/json",
    headers={"x-access-token": "mock-token"}
)