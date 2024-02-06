import { alertAndRedirect, atualizaTexto } from "./documento.js"

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

function excluirDocumento(nomeDocumento) {
  socket.emit("excluir-documento", nomeDocumento)
}

socket.on("excluir-documento-interface", (nome) => {
  alertAndRedirect(nome)
})

export { enviarTexto, selecionarDocumento, excluirDocumento }