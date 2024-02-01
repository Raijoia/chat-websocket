import io from "./server.js"

io.on("connection", (socket) => {
  console.log("Usuário conectado")

  socket.on("texto", (texto) => {
    socket.broadcast.emit("texto-cliente", texto)
  })
})
