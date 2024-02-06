import { atualizarDocumento, criarDocumento, encontrarDocumento, obterDocumentos } from "./documentosDb.js"
import io from "./server.js"

io.on("connection", (socket) => {
  console.log("Usuário conectado")
  socket.on("obter-documento", async (devolverDocumentos) =>  {
    const documentos = await obterDocumentos();
    devolverDocumentos(documentos)
  })

  socket.on("selecionar-documento", async (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento)

    const documento = await encontrarDocumento(nomeDocumento)

    if (documento) {
      devolverTexto(documento.texto)
    }
  })

  socket.on("adicionar-documento", async (nomeDocumento) => {
    const existe = await (encontrarDocumento(nomeDocumento)) !== null

    if (existe) {
      socket.emit("documento-existe", nomeDocumento);
    } else {
      const documento = await criarDocumento(nomeDocumento)
  
      if(documento.acknowledged) {
        io.emit('adicionar-documento-interface', nomeDocumento)
      }
    }
  })

  socket.on("texto", async ({ texto, nomeDocumento }) => {
    const atualizacao = await atualizarDocumento(nomeDocumento, texto)

    if (atualizacao.modifiedCount) {
      socket.to(nomeDocumento).emit("texto-cliente", texto)
    }
  })
})
