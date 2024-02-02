import io from "./server.js"

const documentos = [
  {
    nome: "JavaScript",
    texto: "Este é o texto do documento JavaScript",
  },
  {
    nome: "Socket.io",
    texto: "Este é o texto do documento Socket.io",
  },
  {
    nome: "Node",
    texto: "Este é o texto do documento Node",
  },
]

io.on("connection", (socket) => {
  console.log("Usuário conectado")

  socket.on("selecionar-documento", (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento)

    const documento = encontrarDocumento(nomeDocumento)

    if (documento) {
      devolverTexto(documento.texto)
    }
  })

  socket.on("texto", ({ texto, nomeDocumento }) => {
    socket.to(nomeDocumento).emit("texto-cliente", texto)
  })
})

function encontrarDocumento(nomeDocumento) {
  const documento = documentos.find((doc) => doc.nome === nomeDocumento)
  return documento
}
