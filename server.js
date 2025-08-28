
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ ok: true, name: process.env.SERVICE_NAME || "backend", message: "Service is running" });
});

app.get("/ping", (_, res) => {
  res.json({ pong: true, at: new Date().toISOString() });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`[${process.env.SERVICE_NAME || "backend"}] listening on http://localhost:${PORT}`);
});
