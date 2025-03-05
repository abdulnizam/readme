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



apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: kong-ingress
  namespace: aii-gail-kong-api-gateway
spec:
  rules:
  - host: 127.0.0.1
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: api-gateway-kong-proxy
            port:
              number: 80


kubectl delete ingress kong-ingress -n aii-gail-kong-api-gateway


echo 'export BROWSER="/Applications/Safari.app/Contents/MacOS/Safari"' >> ~/.zshrc
source ~/.zshrc  # Apply changes