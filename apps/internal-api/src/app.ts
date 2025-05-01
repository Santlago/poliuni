import express from 'express'
import http from 'http'

const port = process.env.PORT ?? 3000

export async function buildApp (): Promise<{ server: any }> {
  const app = express()

  const server = http.createServer(app)

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })

  return { server }
}
