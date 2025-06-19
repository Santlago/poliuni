import { RequestHandler } from 'express'

/**
 * The health endpoint does not require authentication.
 * It returns a simple "Healthy" message to indicate that the server is running.
 */
export const method = 'get'

export const handler: RequestHandler = async (req, res) => {
  res.status(200).send('Healthy')
}
