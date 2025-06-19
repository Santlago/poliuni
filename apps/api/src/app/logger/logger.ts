import pino from 'pino'
import { LOG_LEVEL } from '../../constants'

export const logger = pino({
  level: LOG_LEVEL,
  serializers: {
    buffer: obj => obj instanceof Buffer
      ? { type: 'Buffer', length: obj.length }
      : obj
  }
})
