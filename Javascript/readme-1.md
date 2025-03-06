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
  - host: api-gateway-kong-proxy.aii-gail-kong-api-gateway.svc.cluster.local
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


curl -H "Host: api-gateway-kong-proxy.aii-gail-kong-api-gateway.svc.cluster.local" http://localhost:8080


nginx.conf

server {
    listen 8081;
    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host api-gateway-kong-proxy.aii-gail-kong-api-gateway.svc.cluster.local;
    }
}



docker run --rm -d -p 8081:8081 -v ./nginx.conf:/etc/nginx/nginx.conf nginx


/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf
10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
/docker-entrypoint.sh: Sourcing /docker-entrypoint.d/15-local-resolvers.envsh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
/docker-entrypoint.sh: Configuration complete; ready for start up
2025/03/06 16:35:16 [emerg] 1#1: "server" directive is not allowed here in /etc/nginx/nginx.conf:1
nginx: [emerg] "server" directive is not allowed here in /etc/nginx/nginx.conf:1
