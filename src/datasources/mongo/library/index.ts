import { MongoDataSource } from "../types"
import { loaders } from "../loaders"
import { LibraryModel } from "./model"

export * from "./model"
export interface ILibraryDataSource extends MongoDataSource<LibraryModel> {}

export const librariesDataSource: ILibraryDataSource = {
  findUnique: async (id) => loaders.libraryById.load(id),
}
