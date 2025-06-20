import { Pool } from 'pg'
import { logger } from '../logger'

let openedPool: Pool | undefined
let poolPromise: Promise<Pool> | undefined

/**
 * Gets a PostgreSQL connection pool.
 * If the pool has already been created, it returns that.
 * If not, it creates a new pool using the DATABASE_URL environment variable.
 * If the DATABASE_URL is not set, it throws an error.
 * @returns A promise that resolves to a PostgreSQL connection pool.
 */
export async function getPool(): Promise<Pool> {
  // Return already-created pool
  if (openedPool) return openedPool

  // If we are already creating the pool, wait for that promise
  if (poolPromise) return poolPromise

  // Otherwise, create the promise and save it
  poolPromise = (async () => {
    const env = process.env.DATABASE_URL
    if (!env) {
      throw new Error(`Cannot get pool: DATABASE_URL is not set`)
    }

    const pool = new Pool({ connectionString: env })
    pool.on('error', (error, _client) => {
      logger.error(error, 'Unexpected error on Pool client')
    })

    // Save the successful pool
    openedPool = pool
    return pool
  })()

  try {
    return await poolPromise
  } finally {
    // Clear the promise after it's resolved so we don't hold onto it forever
    poolPromise = undefined
  }
}
