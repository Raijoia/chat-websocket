import { documentosCollection } from "./dbConnect.js"

function obterDocumentos() {
  const documentos = documentosCollection.find().toArray()
  return documentos
}

function criarDocumento(nome) {
  const documento = documentosCollection.insertOne({
    nome,
    texto: ""
  })
  return documento
}

function encontrarDocumento(nome) {
  const documento = documentosCollection.findOne({
    nome,
  })
  return documento
}

function atualizarDocumento(nome, texto) {
  const atualizacao = documentosCollection.updateOne({
    nome
  }, {
    $set: {
      texto
    }
  })

  return atualizacao
}

function excluirDocumento(nome) {
  const resultado = documentosCollection.deleteOne({
    nome
  })
  return resultado
}

export {
  encontrarDocumento,
  atualizarDocumento,
  obterDocumentos,
  criarDocumento,
  excluirDocumento,
}
