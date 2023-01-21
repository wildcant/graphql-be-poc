import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { loadFilesSync } from "@graphql-tools/load-files"
import { mergeResolvers } from "@graphql-tools/merge"
import { readFileSync } from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const typeDefs = readFileSync("schema.graphql", { encoding: "utf-8" })
const resolversArray = loadFilesSync(path.join(`${__dirname}/modules/**/resolvers.ts`))
const resolvers = mergeResolvers(resolversArray)

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
})

console.log(`🚀  Server ready at: ${url}`)
