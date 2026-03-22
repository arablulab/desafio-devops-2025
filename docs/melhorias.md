# Pontos de melhoria

## Segurança
- Adicionar varredura de vulnerabilidades nas imagens.
- Assinar imagens Docker e publicar em registry.
- Restringir portas expostas apenas ao necessário.
- Adicionar rate limiting no Nginx.

## Confiabilidade
- Incluir testes automatizados para validar cache e rotas.
- Adicionar retries e circuit breaker em cenário real.
- Persistir dashboards do Grafana com volume dedicado.

## Escalabilidade
- Migrar de Docker Compose para Kubernetes ou ECS em ambiente produtivo.
- Substituir cache local do Nginx por Redis em caso de múltiplas réplicas.
- Colocar load balancer externo em produção.

## Observabilidade
- Criar dashboards prontos no Grafana.
- Adicionar traces distribuídos com OpenTelemetry.
- Expor logs estruturados em JSON.
