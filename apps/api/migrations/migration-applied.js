async function migrationApplied (client, migrationName) {
  const result = await client.query(
    'SELECT hash FROM __migration WHERE migration_name = $1',
    [migrationName]
  )

  return result.rows[0]?.hash ?? null
}

module.exports = {
  migrationApplied
}
