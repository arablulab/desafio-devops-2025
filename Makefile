up:
	docker compose up --build -d

down:
	docker compose down -v

logs:
	docker compose logs -f

ps:
	docker compose ps

test-cache:
	@echo "App 1 (TTL 10s)"
	@curl -i http://localhost:8080/app1/hora | grep X-Cache-Status || true
	@curl -i http://localhost:8080/app1/hora | grep X-Cache-Status || true
	@echo ""
	@echo "App 2 (TTL 60s)"
	@curl -i http://localhost:8080/app2/hora | grep X-Cache-Status || true
	@curl -i http://localhost:8080/app2/hora | grep X-Cache-Status || true
