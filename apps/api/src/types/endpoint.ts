import { RequestHandler } from 'express'

export type Endpoint = {
  auth?: boolean
  method?: 'get' | 'post'
  path: string
  handler: RequestHandler | ((deps?: any) => RequestHandler)
}
