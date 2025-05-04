const fs = require('fs')
const path = require('path')

function getMigrationNames (migrationsDir) {
  const folder = path.join(
    __dirname,
    migrationsDir
  )

  const result = getRecursiveEntries(folder)

  return result
}

function getRecursiveEntries (rootDir) {
  const result = []

  const entries = fs.readdirSync(rootDir, { withFileTypes: true })

  for (const entry of entries) {
    if (entry.isFile()) {
      result.push(entry.name)
    } else if (entry.isDirectory()) {
      for (const dir of getRecursiveEntries(path.join(rootDir, entry.name))) {
        result.push(entry.name + '/' + dir)
      }
    }
  }

  return result
}

module.exports = {
  getMigrationNames
}
