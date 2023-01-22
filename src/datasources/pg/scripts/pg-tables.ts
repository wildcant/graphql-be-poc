#!/usr/bin/env tsx

import { knex } from "../knex"

export async function createTables() {
  if (await knex.schema.hasTable("books")) {
    await knex.schema.dropTable("books")
  }

  if (await knex.schema.hasTable("authors")) {
    await knex.schema.dropTable("authors")
  }

  await knex.schema.createTable("authors", function (table) {
    table.increments("id").primary()
    table.string("name")
    table.timestamps()
  })

  await knex.schema.createTable("books", function (table) {
    table.increments("id").primary()
    table.string("title")
    table.integer("computedProperty")

    table.integer("author").unsigned().notNullable()
    table.foreign("author").references("id").inTable("authors")

    table.timestamps()
  })
}
