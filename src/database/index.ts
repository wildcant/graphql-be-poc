import { BookModel, AuthorModel } from "./models"

export const books: BookModel[] = [
  {
    _id: "1",
    title: "The Awakening",
    authorId: "2",
  },
  {
    _id: "2",
    title: "City of Glass",
    authorId: "1",
  },
]

export const authors: AuthorModel[] = [
  {
    _id: "1",
    name: "pepe",
  },
  {
    _id: "2",
    name: "sancho",
  },
]

export * from "./models"
