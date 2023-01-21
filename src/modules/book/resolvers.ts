import { authors, books } from "database"
import { BookModule } from "./types"

const specialCase = true

export const resolvers: BookModule.Resolvers = {
  Query: {
    book: () => {
      const book = books[0]

      if (specialCase) {
        // Seems useful to define the computed property in the db model in case
        // we need to access this property from multiple resolvers.
        book.computedProperty = 123
      }

      return book
    },
  },
  Book: {
    id: (b) => b._id,
    author: (b) => authors.find((a) => a._id === b.authorId),

    computedProperty: (b) => b.computedProperty,
    computedPropertyDoubled: (b) => b.computedProperty * 2,

    editorial: () => ({
      name: "This property is computed and doesn't exist in db model",
    }),
  },
}
