Configuring Health Probes in Azure Application Gateway for our Azure AI Search Service
Summary: we’ve identified an issue while configuring health probes in Azure Application Gateway for our Azure AI Search service. Initially we have used /health as an endpoint to verify the AI search health, but unfortunately this endpoint doesn’t work anymore. We have similar endpoint for Open AI but not sure why it’s been removed for AI search service.
 
Problem: Azure AI Search does not expose a native /health endpoint or any unauthenticated endpoint that returns a 200 OK status. All data plane requests (including basic endpoint checks) require an api-key in the request header. However:
Azure Application Gateway health probes cannot send custom headers (like api-key).
This results in 403 Forbidden responses, causing the backend to be marked unhealthy, even when the service is up.
 
Why this happens:
AI Search uses API key–based authentication for all data plane operations.
The /indexes, /docs, and other endpoints are protected.
App Gateway cannot authenticate or pass headers – it’s a simple HTTP GET checker.
 
Proposed solution:
To work around this limitation, we are proposing to implement a custom health-check proxy endpoint, such as /ai-search-health, within our backend or a lightweight Azure Function. This endpoint will:
Internally call Azure AI Search using the required api-key.
Return 200 OK only if the AI Search service responds correctly.
Be exposed publicly (or within our VNET) so that Application Gateway can probe it.