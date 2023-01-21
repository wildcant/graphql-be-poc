import { authors } from "database"
import { AuthorModule } from "./types"

export const resolvers: AuthorModule.Resolvers = {
  Query: {
    author: () => authors[0],
  },
  Author: {
    id: ({ _id }) => _id,
    name: ({ name }) => name,
  },
}
