import { knex } from "../../pg/knex"
import { getMongoClient } from "../client"
;(async () => {
  try {
    const client = await getMongoClient()
    const database = client.db("bookstore")
    database.dropDatabase()
    const books = await knex("books")
    await client.libraries.insertOne({
      name: "Library of Alexandria",
      address: "Alexandria, Egypt",
      booksExternalIds: books.map(({ id }) => id),
    })

    console.log(await client.libraries.find().toArray())
  } catch (error) {
    console.error(error)
  }
})()
