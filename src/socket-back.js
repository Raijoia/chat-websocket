import { encontrarDocumento } from "./documentosDb.js"
import io from "./server.js"

io.on("connection", (socket) => {
  console.log("Usuário conectado")

  socket.on("selecionar-documento", async (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento)

    const documento = await encontrarDocumento(nomeDocumento)

    console.log(documento)

    if (documento) {
      devolverTexto(documento.texto)
    }
  })

  socket.on("texto", ({ texto, nomeDocumento }) => {
    const documento = encontrarDocumento(nomeDocumento)

    if(documento) {
      documento.texto = texto
      socket.to(nomeDocumento).emit("texto-cliente", texto)
    }
  })
})
