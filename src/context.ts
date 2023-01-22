import { StandaloneServerContextFunctionArgument } from "@apollo/server/dist/esm/standalone"
import { authorsDataSource, booksDataSource, librariesDataSource } from "./datasources"

export async function context(_args: StandaloneServerContextFunctionArgument) {
  return {
    dataSources: {
      books: booksDataSource,
      authors: authorsDataSource,
      libraries: librariesDataSource,
    },
  }
}

export type IContext = Awaited<ReturnType<typeof context>>
