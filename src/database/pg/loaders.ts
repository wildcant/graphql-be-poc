import DataLoader from "dataloader"
import { AuthorModel } from "./author"
import { BookModel } from "./book"
import { knex } from "./knex-instance"
import { mapTo } from "./utils"

/**
 * Data Loaders.
 */
export const loaders = {
  bookById: new DataLoader<number, BookModel | null>((keys) =>
    knex("books")
      .whereIn("id", keys)
      .select()
      .then((rows) => mapTo(rows, keys, (x) => x.id))
  ),
  authorById: new DataLoader<number, AuthorModel | null>((keys) =>
    knex("authors")
      .whereIn("id", keys)
      .select()
      .then((rows) => mapTo(rows, keys, (x) => x.id))
  ),
}
