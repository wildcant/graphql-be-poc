import Knex from "knex"

const config = {
  client: "postgres",
  connection: {
    host: process.env.DATABASE_HOST ?? "127.0.0.1",
    port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT) : 5434,
    database: process.env.DATABASE_NAME ?? "bookstore",
    user: process.env.DATABASE_USERNAME ?? "postgres",
    password: process.env.DATABASE_PASSWORD ?? "12345",
    ssl: process.env.DATABASE_SSL ?? false,
  },
}

// TODO: Transform to singleton.
export const knex = Knex({
  client: config.client,
  connection: {
    host: config.connection.host,
    port: config.connection.port,
    user: config.connection.user,
    password: config.connection.password,
    database: config.connection.database,
  },
  debug: true,
})
