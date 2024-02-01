import express from "express";
import url from "url";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorio = path.join(caminhoAtual, "../..", "public");

app.use(express.static(diretorio));

app.listen(PORT, () => {
  console.log(`Porta => ${PORT}`)
})