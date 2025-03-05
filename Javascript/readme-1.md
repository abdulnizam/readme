api-gateway-kong-proxy.aii-gail-kong-api-gateway.svc.cluster.local



curl http://localhost:8080/api/v1/namespaces/aii-gail-kong-api-gateway/services/api-gateway-kong-proxy


kubectl proxy --port=8080


kubectl get pods -n aii-gail-kong-api-gateway

kubectl port-forward svc/api-gateway-kong-proxy -n aii-gail-kong-api-gateway 8080:80

kubectl get svc -n aii-gail-kong-api-gateway


kubectl patch svc api-gateway-kong-proxy -n aii-gail-kong-api-gateway -p '{"spec": {"type": "NodePort"}}'



kubectl patch svc api-gateway-kong-proxy -n aii-gail-kong-api-gateway -p '{"spec": {"type": "ClusterIP", "ports": [{"port": 80, "protocol": "TCP", "targetPort": 80}]}}'


curl -v http://localhost:31234

kubectl get svc api-gateway-kong-proxy -n aii-gail-kong-api-gateway