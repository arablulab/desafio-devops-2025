# Desafio DevOps 2025

## Executive Summary

Esta entrega foi concebida não apenas para atender ao desafio técnico, mas para demonstrar uma abordagem de arquitetura orientada a operação, escalabilidade e evolução contínua. A solução utiliza containerização, proxy reverso, separação entre serviços e base para observabilidade, mantendo simplicidade de execução local e aderência a padrões modernos de DevOps.

---

## Objetivo

Demonstrar a construção de uma solução containerizada com boas práticas de DevOps, incluindo:

- Containerização de aplicações
- Proxy reverso com Nginx
- Cache de requisições
- Observabilidade básica
- Estrutura preparada para evolução futura

---

## Arquitetura

### Componentes

- Nginx (proxy reverso + cache)
- Aplicação Node.js (serviço principal)
- Aplicação Python (serviço auxiliar)
- Estrutura de observabilidade

---

## Considerações Técnicas

A solução foi projetada com foco em simplicidade operacional e evolução arquitetural, permitindo transição futura para ambientes distribuídos e cloud native.

A separação de serviços e uso de proxy reverso possibilita escalabilidade horizontal e desacoplamento entre camadas, aderindo a boas práticas modernas de arquitetura.

---

## Próximos Passos

- Migração para Kubernetes
- Implementação de GitOps com ArgoCD
- Pipeline CI/CD completo
- Observabilidade com Prometheus e Grafana
- Implementação de práticas DevSecOps
- Governança e controle de custos (FinOps)

## Diagrama de Arquitetura

```text
Cliente
   |
   v
Nginx (proxy + cache)
   |
   +-------> App Node.js
   |
   +-------> App Python
