# Arquitetura

## Componentes
- **Nginx**: reverse proxy e camada de cache.
- **App 1 (Node.js)**: entrega `/texto` e `/hora`, com cache de 10 segundos via Nginx.
- **App 2 (Python/FastAPI)**: entrega `/texto` e `/hora`, com cache de 1 minuto via Nginx.
- **Prometheus**: coleta métricas das aplicações e do cAdvisor.
- **Grafana**: visualização das métricas.
- **cAdvisor**: métricas de containers.

## Fluxo
1. O usuário acessa o Nginx pela porta `8080`.
2. O Nginx encaminha a requisição para a aplicação correta.
3. As respostas de `/app1/*` ficam em cache por 10 segundos.
4. As respostas de `/app2/*` ficam em cache por 60 segundos.
5. Prometheus coleta métricas e Grafana exibe dashboards.

## Endpoints principais
- `http://localhost:8080/app1/texto`
- `http://localhost:8080/app1/hora`
- `http://localhost:8080/app2/texto`
- `http://localhost:8080/app2/hora`
- `http://localhost:9090` Prometheus
- `http://localhost:3000` Grafana
- `http://localhost:8081` cAdvisor
