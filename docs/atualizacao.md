# Fluxo de atualização

## Atualização de código
1. Desenvolvedor altera código da aplicação Node.js ou Python.
2. Commit e push para o repositório Git.
3. Build das imagens Docker.
4. Recriação dos containers via Docker Compose.
5. Nginx mantém a frente da solução e aplica cache normalmente.

## Atualização de infraestrutura
1. Alteração no `docker-compose.yml`, `nginx.conf` ou observabilidade.
2. Commit e push para o repositório Git.
3. Rebuild ou restart do serviço impactado.
4. Validação dos endpoints, saúde e métricas.

## Fluxo resumido
Desenvolvedor -> Git -> Build -> Deploy local com Docker Compose -> Validação -> Monitoramento
