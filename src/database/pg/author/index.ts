import { DataSource } from "../data-source"
import { loaders } from "../loaders"
import { AuthorModel } from "./model"

export * from "./model"

export interface IAuthorDataSource extends DataSource<AuthorModel> {}

export const authorsDataSource: IAuthorDataSource = {
  findUnique: (id) => loaders.authorById.load(id),
}
