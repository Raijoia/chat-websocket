import { documentosCollection } from "./dbConnect.js"

function encontrarDocumento(nome) {
  const documento = documentosCollection.findOne({
    nome,
  })
  return documento
}

export { encontrarDocumento }
