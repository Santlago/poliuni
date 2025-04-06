import { buildApp } from './app'

const port = process.env.PORT ?? 3000

async function main (): Promise<void> {
  const { server } = await buildApp()
}

void main()
