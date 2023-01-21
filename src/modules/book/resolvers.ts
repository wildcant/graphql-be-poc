import { BookModule } from "./types"

const specialCase = true

export const resolvers: BookModule.Resolvers = {
  Query: {
    book: async (_, args, context) => {
      const book = await context.dataSources.books.findUnique(args.id)

      if (!book) {
        return null
      }

      if (specialCase) {
        // Define the computed property in the db model in case we need to access this property from multiple resolvers.
        book.computedProperty = 123
      }

      return book
    },
  },

  Book: {
    id: (b) => b.id,
    author: async (b, _, c) => c.dataSources.authors.findUnique(b.author),

    computedProperty: (b) => b.computedProperty,
    computedPropertyDoubled: (b) => b.computedProperty * 2,

    editorial: () => ({
      name: "This property is computed and doesn't exist in db model",
    }),
  },
}
