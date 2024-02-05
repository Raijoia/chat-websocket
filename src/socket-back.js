import { atualizarDocumento, encontrarDocumento } from "./documentosDb.js"
import io from "./server.js"

io.on("connection", (socket) => {
  console.log("Usuário conectado")

  socket.on("selecionar-documento", async (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento)

    const documento = await encontrarDocumento(nomeDocumento)

    if (documento) {
      devolverTexto(documento.texto)
    }
  })

  socket.on("texto", async ({ texto, nomeDocumento }) => {
    const atualizacao = await atualizarDocumento(nomeDocumento, texto)

    if (atualizacao.modifiedCount) {
      socket.to(nomeDocumento).emit("texto-cliente", texto)
    }
  })
})
