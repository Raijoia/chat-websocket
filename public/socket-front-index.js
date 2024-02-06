import { inserirLinkDocumento } from "./index.js";

const socket = io();


socket.emit("obter-documento", (documentos) => {
  documentos.forEach((documento) => {
    inserirLinkDocumento(documento.nome);
  });
});

function adicionarDocumento(nomeDocumento) {
  socket.emit("adicionar-documento", nomeDocumento);
}

socket.on("adicionar-documento-interface", (nomeDocumento) => {
  inserirLinkDocumento(nomeDocumento);
})

export { adicionarDocumento }