import { ObjectId } from "mongodb"
import { BookModel } from "../../datasources"
import { LibraryModule } from "./types"

export const resolvers: LibraryModule.Resolvers = {
  Query: {
    library: async (_, args, context) => {
      const library = await context.dataSources.libraries.findUnique(new ObjectId(args.id))

      if (!library) {
        return null
      }

      return library
    },
  },

  Library: {
    id: (l) => l._id.toString(),
    books: async (l, __, context) =>
      (await context.dataSources.books.findMany(l.booksExternalIds)).filter(
        (b) => !(b instanceof Error)
      ) as BookModel[],
  },
}
