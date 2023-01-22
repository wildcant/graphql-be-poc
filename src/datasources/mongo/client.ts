import { Collection, MongoClient, OptionalId } from "mongodb"
import { LibraryModel } from "./library/model"

const uri = "mongodb://localhost:27018/bookstore"

let mongoClientSingleton: MongoClient
export async function getMongoClientSingleton() {
  if (!mongoClientSingleton) {
    mongoClientSingleton = new MongoClient(uri)
    await mongoClientSingleton.connect()
  }
  return mongoClientSingleton
}

interface ExtendedMongoClient extends MongoClient {
  libraries: Collection<OptionalId<LibraryModel>>
}
export async function getMongoClient(): Promise<ExtendedMongoClient> {
  try {
    const client = await getMongoClientSingleton()
    const database = client.db("bookstore")
    Object.assign(client, {
      libraries: database.collection<LibraryModel>("library"),
    })
    return client as ExtendedMongoClient
  } catch (error) {
    console.error(error)
  }
}
