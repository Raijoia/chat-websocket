import { MongoClient } from "mongodb";


const cliente = new MongoClient(
  process.env.DBCONNECT
)

let documentosCollection;

try {
  await cliente.connect()
  const db = cliente.db("websockets")
  const documentosCollection = db.collection("documentos")
  console.log("conectou!")
} catch (error) {
  console.error(error)
}

export { documentosCollection };