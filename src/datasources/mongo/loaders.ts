import DataLoader from "dataloader"
import { ObjectId } from "mongodb"
import { mapTo } from "../utils"
import { getMongoClient } from "./client"
import { LibraryModel } from "./library/model"

export const loaders = {
  libraryById: new DataLoader<ObjectId, LibraryModel | null>((keys) =>
    getMongoClient().then((client) =>
      client.libraries
        .find({ _id: { $in: keys } })
        .toArray()
        .then((docs) =>
          mapTo(
            docs,
            keys.map((k) => k.toString()),
            (x) => x._id.toString()
          )
        )
    )
  ),
}
