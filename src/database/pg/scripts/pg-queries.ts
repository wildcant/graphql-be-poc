#!/usr/bin/env tsx

import { knex } from "../knex-instance"
;(async () => {
  const options = process.argv.slice(2)
  if (options.includes("insert")) {
    const [author] = await knex("authors").insert({ name: "Rasputin" }, ["id"])
    await knex("books").insert({
      title: "Gamma",
      author: author.id,
    })
  }

  console.log(await knex("authors"))
  console.log(await knex("books"))
})()
