export type BookModel = {
  _id: string
  title: string
  authorId: string

  computedProperty?: number
}

export type AuthorModel = {
  _id: string
  name: string
}
