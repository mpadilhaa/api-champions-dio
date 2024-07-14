import express, { json } from "express";
import router from "./routes";

function createApp() {
  const server = express();

  server.use(json());

  server.use("/api", router);

  return server;
}

export default createApp;
