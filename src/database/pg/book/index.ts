import { DataSource } from "../data-source"
import { loaders } from "../loaders"
import { BookModel } from "./model"

export * from "./model"

export interface IBookDataSource extends DataSource<BookModel> {}

export const booksDataSource: IBookDataSource = {
  findUnique: async (id) => loaders.bookById.load(id),
}
