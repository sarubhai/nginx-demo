# NGINX Configurations Demo with Docker

### Create Self Signed Certificate
```
openssl req -x509 -nodes -days 365 \
    -subj "/C=DE/ST=Berlin/L=Berlin/O=appdev24/OU=dev/CN=nginx.demo" \
    -newkey rsa:4096 -keyout selfsigned.key \
    -out selfsigned.crt
```

## NGINX as Web Server
- Web Server
- Content Caching
- SSL/TLS Termination
- HTTP Redirection

```
docker-compose -f webserver-docker-compose.yml up -d
```

## NGINX as Load Balancer
- Load Balancer
- SSL/TLS Termination
- HTTP Redirection

```
docker-compose -f loadbalancer-docker-compose.yml up -d
```

## NGINX as Reverse Proxy
- Reverse Proxy
- API Gateway
- SSL/TLS Termination
- HTTP Redirection

```
docker-compose -f reverseproxy-docker-compose.yml up -d --build
```

[Test Demo Website](https://nginx.demo)

[Reference Blog Article](https://appdev24.com/pages/44/docker-nginx-reverse-proxy)
