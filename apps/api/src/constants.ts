import path from 'path'

export const CORS_ORIGINS = process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : ['*']

export const ENDPOINTS_DIR = path.join(__dirname, 'endpoints')

export const LOG_LEVEL = process.env.LOG_LEVEL || 'info'

export const PORT = process.env.PORT || 3000
