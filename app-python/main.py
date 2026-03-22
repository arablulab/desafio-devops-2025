from datetime import datetime, timezone

from fastapi import FastAPI, Response
from prometheus_client import Counter, CONTENT_TYPE_LATEST, generate_latest

app = FastAPI(title="Desafio DevOps Python")

http_requests = Counter(
    "python_app_http_requests_total",
    "Total de requisicoes HTTP recebidas pela aplicacao Python",
    ["method", "path"],
)


@app.middleware("http")
async def count_requests(request, call_next):
    response = await call_next(request)
    http_requests.labels(method=request.method, path=request.url.path).inc()
    return response


@app.get("/texto")
def texto():
    return {"app": "python", "mensagem": "Aplicacao Python no ar"}


@app.get("/hora")
def hora():
    return {"app": "python", "horario_atual": datetime.now(timezone.utc).isoformat()}


@app.get("/health")
def health():
    return {"status": "ok", "app": "python"}


@app.get("/metrics")
def metrics():
    return Response(generate_latest(), media_type=CONTENT_TYPE_LATEST)
