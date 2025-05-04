async function createMigrationTable (client) {
  await client.query(`
    create table __migration (
      id uuid primary key,
      migration_name varchar(256) unique not null,
      date timestamp not null,
      hash varchar(64) not null
    )
  `)
}

module.exports = {
  createMigrationTable
}
