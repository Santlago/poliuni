const { createHash, randomUUID } = require('crypto')
const { createMigrationTable } = require('./create-migration-table')
const { getMigrationNames } = require('./get-migration-names')
const { getMigrationSource } = require('./get-migration-source')
const { migrationApplied } = require('./migration-applied')
const { tableExists } = require('./table-exists')

const RESET = '\x1b[0m'
const GREEN = '\x1b[32m'
const YELLOW = '\x1b[33m'

async function runMigrations (client) {
  const migrationTableExists = await tableExists(client, '__migration')

  if (!migrationTableExists) {
    await createMigrationTable(client)
  }

  const migrationNames = getMigrationNames('migrations_single')

  let applied = 0

  for (const migrationName of migrationNames) {
    const appliedHash = await migrationApplied(client, migrationName)
    const source = getMigrationSource(migrationName, 'migrations_single')
    const hash = createHash('sha256').update(source).digest('hex')


    if (appliedHash === hash) {
      console.log(`Migration \"${migrationName}\" already applied`)
      continue
    } else if (appliedHash) {
      console.log(YELLOW + 'WARNING' + RESET + `: Migration \"${migrationName}\" already applied, but was modified since`)
      continue
    }

    await client.query(source)

    const id = randomUUID()

    await client.query(
      `INSERT INTO __migration (id, migration_name, date, hash) VALUES ($1, $2, now(), $3);`,
      [id, migrationName, hash]
    )

    applied++
    console.log(GREEN + 'SUCCESS' + RESET + `: Applied migration \"${migrationName}\"`)
  }

  if (applied === 0) {
    console.log('No new migrations to apply')
  }
}

module.exports = {
  runMigrations
}
