// index.js
import express from "express";
import cors from "cors";
import excuses from "./excuses.js";
import { logRequest } from "./requestLogger.js";
const app = express();
const PORT = 3000;

app.use(cors());

app.get("/excuse", (req, res) => {
  const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
  const ip = req.ip;

  logRequest(ip, "/excuse");

  res.json({ excuse: randomExcuse });
});

app.get("/", (req, res) => {
  const ip = req.ip;

  logRequest(ip, "/");

  res.send(
    "Welcome to Developer Excuse Generator API! Use /excuse to get an excuse."
  );
});

app.listen(PORT, () => {
  // console.log(`Server is running at http://localhost:${PORT}`);
});
