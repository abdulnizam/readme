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

docker run -p 8081:8081 -v $(pwd)/default.conf:/etc/nginx/conf.d/default.conf:ro nginx


version: '3'
services:
  nginx:
    image: nginx
    ports:
      - "8081:8081"
    volumes:
      - ./default.conf:/etc/nginx/conf.d/default.conf:ro



docker-compose up -d



nginx-1  | 172.20.0.1 - - [06/Mar/2025:16:42:49 +0000] "POST /api/doc-manager/v1/uploadnameandpurpose HTTP/1.1" 502 559 "http://localhost:8080/learning-and-development/input?page=3&content=continuous-aim-subject" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36" "::1"
nginx-1  | 2025/03/06 16:42:49 [error] 27#27: *10 connect() failed (111: Connection refused) while connecting to upstream, client: 172.20.0.1, server: , request: "POST /api/doc-manager/v1/uploadnameandpurpose HTTP/1.1", upstream: "http://127.0.0.1:8100/api/doc-manager/v1/uploadnameandpurpose", host: "localhost:8081", referrer: "http://localhost:8080/learning-and-development/input?page=3&content=continuous-aim-subject"
nginx-1  | 2025/03/06 16:42:49 [warn] 27#27: *10 upstream server temporarily disabled while connecting to upstream, client: 172.20.0.1, server: , request: "POST /api/doc-manager/v1/uploadnameandpurpose HTTP/1.1", upstream: "http://127.0.0.1:8100/api/doc-manager/v1/uploadnameandpurpose", host: "localhost:8081", referrer: "http://localhost:8080/learning-and-development/input?page=3&content=continuous-aim-subject"
nginx-1  | 2025/03/06 16:42:49 [error] 27#27: *10 connect() failed (111: Connection refused) while connecting to upstream, client: 172.20.0.1, server: , request: "POST /api/doc-manager/v1/uploadnameandpurpose HTTP/1.1", upstream: "http://127.0.0.1:8100/api/doc-manager/v1/uploadnameandpurpose", host: "localhost:8081", referrer: "http://localhost:8080/learning-and-development/input?page=3&content=continuous-aim-subject"
nginx-1  | 2025/03/06 16:42:49 [warn] 27#27: *10 upstream server temporarily disabled while connecting to upstream, client: 172.20.0.1, server: , request: "POST /api/doc-manager/v1/uploadnameandpurpose HTTP/1.1", upstream: "http://127.0.0.1:8100/api/doc-manager/v1/uploadnameandpurpose", host: "localhost:8081", referrer: "http://localhost:8080/learning-and-development/input?page=3&content=continuous-aim-subject"
