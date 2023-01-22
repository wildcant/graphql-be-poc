#!/usr/bin/env tsx

import { knex } from "../knex"

export async function seed(args: string[]) {
  const options = process.argv.slice(2).length ? process.argv.slice(2) : args

  if (options.includes("insert")) {
    const [author] = await knex("authors").insert({ name: "Rasputin" }, ["id"])
    const books = ["The emperor handbook", "Origin of everything"]
    await Promise.all(
      books.map((title) =>
        knex("books").insert({
          title: title,
          author: author.id,
        })
      )
    )
  }

  console.log(await knex("authors"))
  console.log(await knex("books"))
}
