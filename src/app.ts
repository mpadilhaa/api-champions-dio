import express, { Request, Response, json } from "express";
import { getPlayer } from "./controllers/players-controller";

function createApp() {
  const server = express();

  server.use(json());

  server.get("/players", getPlayer);

  return server;
}

export default createApp;
