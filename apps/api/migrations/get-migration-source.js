const fs = require('fs')
const path = require('path')

function getMigrationSource (migrationName, migrationsDir) {
  const file = path.join(
    __dirname,
    migrationsDir,
    migrationName
  )

  const result = fs.readFileSync(file, 'utf8')

  return result
}

module.exports = {
  getMigrationSource
}
