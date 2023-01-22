import { ObjectId } from "mongodb"

export type LibraryModel = {
  _id: ObjectId
  name: string
  address: string
  booksExternalIds: number[]
}
