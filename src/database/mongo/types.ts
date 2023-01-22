import { ObjectId } from "mongodb"

export interface MongoDataSource<T> {
  findUnique: (id: ObjectId) => Promise<T>
}
