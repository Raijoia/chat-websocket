import { inserirLinkDocumento } from "./index.js";

const socket = io();

socket.emit("obter-documento", (documentos) => {
  documentos.forEach((documento) => {
    inserirLinkDocumento(documento.nome);
  });
});