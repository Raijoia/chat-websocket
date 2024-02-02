import { atualizaTexto } from "./documento.js"

const socket = io()

function selecionarDocumento(nomeDocumento) {
  socket.emit("selecionar-documento", nomeDocumento, (texto) => atualizaTexto(texto))
}

function enviarTexto(dados) {
  socket.emit("texto", dados)
}

socket.on("texto-cliente", (texto) => {
  atualizaTexto(texto)
})

export { enviarTexto, selecionarDocumento }