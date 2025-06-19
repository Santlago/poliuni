import { Endpoint } from '../../types/endpoint'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import express, { RequestHandler, type Express } from 'express'
import { CORS_ORIGINS } from '../../constants'
import { errorHandler } from './error-handler'

export type CreateAppOptions = {
  endpoints?: Endpoint[] | Record<string, Omit<Endpoint, 'path'>>
}

const DEFAULT_ENDPOINT_METHOD = 'post'

export function createApp (options: CreateAppOptions = {}): Express {
  const app = express()

  app.use(cors({ origin: CORS_ORIGINS, credentials: true }))
  app.use(cookieParser())
  app.use(express.json())

  for (const endpoint of getEndpoints(options.endpoints)) {
    const {
      method = DEFAULT_ENDPOINT_METHOD,
      path,
      handler
    } = endpoint

    if (isRequestHandler(handler)) {
      app[method](path, handler)
    } else {
      throw new Error(`Endpoint handler for ${path} is not a valid request handler`)
    }
  }

  app.use(errorHandler)

  return app
}

function getEndpoints (endpoints: CreateAppOptions['endpoints']): Endpoint[] {
  if (!endpoints) {
    return []
  }

  if (Array.isArray(endpoints)) {
    return endpoints
  }

  return Object.entries(endpoints).map(([key, value]) => ({
    path: `/${key}`,
    ...value
  }))
}

function isRequestHandler (handler: any): handler is RequestHandler {
  return typeof handler === 'function' && handler.length > 1
}
