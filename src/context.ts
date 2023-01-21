import { StandaloneServerContextFunctionArgument } from "@apollo/server/dist/esm/standalone"
import { authorsDataSource, booksDataSource } from "./database"

export async function context(_args: StandaloneServerContextFunctionArgument) {
  return {
    dataSources: {
      books: booksDataSource,
      authors: authorsDataSource,
    },
  }
}

export type IContext = Awaited<ReturnType<typeof context>>
