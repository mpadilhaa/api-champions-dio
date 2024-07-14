import express, { json } from "express";
import router from "./routes";
import cors from "cors";

function createApp() {
  const server = express();

  server.use(json());

  server.use("/api", router);

  const corsOptions = {
    origin: "http://felipao.sistem.com",
    methods: ["GET"],
  };

  server.use(cors(corsOptions));

  return server;
}

export default createApp;
