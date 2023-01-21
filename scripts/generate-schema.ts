#!/usr/bin/env tsx

import { loadFilesSync } from "@graphql-tools/load-files"
import { mergeTypeDefs } from "@graphql-tools/merge"
import { writeFileSync } from "fs"
import { print } from "graphql"
import path from "path"
import { fileURLToPath } from "url"
import chokidar from "chokidar"

const __filename = fileURLToPath(import.meta.url)
const __root = path.dirname(path.dirname(__filename))
const dir = `${__root}/src/modules/**/*.graphql`
const prefix = `# 
# -------------------------------------------------------
# THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
# -------------------------------------------------------
#
`

function generateSchema() {
  try {
    const loadedFiles = loadFilesSync(dir)
    const typeDefs = mergeTypeDefs(loadedFiles)
    const printedTypeDefs = print(typeDefs)
    writeFileSync("schema.graphql", `${prefix}\n${printedTypeDefs}`)
    console.log("The definitions have been updated.")
  } catch (error) {
    console.error("There was an error generating the new schema. ", error)
  }
}

const options = process.argv.slice(2)

if (options.includes("watch")) {
  const watcher = chokidar.watch(dir)
  console.log("Watching your graphql files...")
  watcher.on("change", async (file) => {
    console.log(`[${new Date().toLocaleTimeString()}] "${file}" has been changed.`)
    generateSchema()
  })
} else {
  generateSchema()
}
