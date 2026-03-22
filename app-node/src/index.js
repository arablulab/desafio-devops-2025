const express = require("express");
const client = require("prom-client");

const app = express();
const port = process.env.PORT || 3000;

const register = new client.Registry();
client.collectDefaultMetrics({ register });

const httpRequests = new client.Counter({
  name: "node_app_http_requests_total",
  help: "Total de requisicoes HTTP recebidas pela aplicacao Node.js",
  labelNames: ["method", "route", "status_code"],
});

register.registerMetric(httpRequests);

app.use((req, res, next) => {
  res.on("finish", () => {
    httpRequests.inc({
      method: req.method,
      route: req.route ? req.route.path : req.path,
      status_code: res.statusCode,
    });
  });
  next();
});

app.get("/texto", (req, res) => {
  res.set("Content-Type", "application/json");
  res.send({
    app: "node",
    mensagem: "Aplicacao Node.js no ar",
  });
});

app.get("/hora", (req, res) => {
  res.set("Content-Type", "application/json");
  res.send({
    app: "node",
    horario_atual: new Date().toISOString(),
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", app: "node" });
});

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Node app ouvindo na porta ${port}`);
});
