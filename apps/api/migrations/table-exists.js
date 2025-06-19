async function tableExists (client, table) {
  const result = await client.query(
    `
      SELECT EXISTS (
        SELECT FROM information_schema.tables
        WHERE  table_name = $1
      ) as exists
    `,
    [table]
  )

  return result.rows[0].exists
}

module.exports = {
  tableExists
}
