import { atualizaTexto } from "./documento"

const socket = io()

function enviarTexto(texto) {
  socket.emit("texto", texto)
}

socket.on("texto-cliente", (texto) => {
  atualizaTexto(texto)
})

export { enviarTexto }