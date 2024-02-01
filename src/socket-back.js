import io from "./server.js"

io.on("connection", (socket) => {
  console.log("Usuário conectado")
  
  socket.on("selecionar-documento", (nomeDocumento) => {
    socket.join(nomeDocumento)
  })

  socket.on("texto", (texto) => {
    socket.broadcast.emit("texto-cliente", texto)
  })
})
