import io from "./server.js"

io.on("connection", (socket) => {
  console.log("Usuário conectado")

  socket.on("texto", (texto) => {
    console.log(texto)
  })
})
