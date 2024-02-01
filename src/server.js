import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";
import exp from "constants";

const app = express();
const PORT = process.env.PORT || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorio = path.join(caminhoAtual, "../..", "public");

app.use(express.static(diretorio));

const servidorHttp = http.createServer(app);

servidorHttp.listen(PORT, () => {
  console.log(`Porta => ${PORT}`)
})

const io = new Server(servidorHttp);

export default io;