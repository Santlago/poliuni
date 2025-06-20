import { createApp, loadEndpoints, logger } from './app'
import { ENDPOINTS_DIR, PORT } from './constants'
import { createServer } from 'http'

async function main () {
  logger.info('Starting server')

  // Load endpoints
  const loadedEndpoints = await loadEndpoints(ENDPOINTS_DIR)

  const endpoints = loadedEndpoints

  logger.info('Loaded %d endpoints', endpoints.length)

  const app = createApp({ endpoints })

  const server = createServer(app)

  // Listen on PORT
  server.on('error', (error => {
    logger.error(error, 'Error starting server')
    process.exit(1)
  }))

  server.listen(PORT, () => {
    logger.info('Server is running on http://localhost:%s', PORT)
  })
}

main()
