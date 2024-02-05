import { MongoClient } from "mongodb";
import "dotenv/config"


const cliente = new MongoClient(
  process.env.DBCONNECT
)

let documentosCollection;

try {
  await cliente.connect()
  const db = cliente.db("websockets")
  documentosCollection = db.collection("documentos")
  console.log("conectou!")
} catch (error) {
  console.error(error)
}

export { documentosCollection };