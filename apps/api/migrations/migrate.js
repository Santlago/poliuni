require('dotenv').config();
const { Client } = require('pg');
const { runMigrations } = require('./run-migrations')

const connectionString = process.env.DATABASE_URL
console.log('ConnectionString', connectionString);

const client = new Client({
  connectionString
})

const RESET = '\x1b[0m'
const MAGENTA = '\x1b[35m'

async function migration () {
  await client.connect()

  console.log(MAGENTA + '⛁ SINGLE' + RESET)
  await runMigrations(client)

  await client.end()
}

migration();
