import { atualizaTexto } from "./documento.js"

const socket = io()

function selecionarDocumento(nomeDocumento) {
  socket.emit("selecionar-documento", nomeDocumento)
}

function enviarTexto(texto) {
  socket.emit("texto", texto)
}

socket.on("texto-cliente", (texto) => {
  atualizaTexto(texto)
})

export { enviarTexto, selecionarDocumento }