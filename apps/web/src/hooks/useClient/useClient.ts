'use client'

import { useContext } from 'react'
import { Client } from '../../client'
import { ClientContext } from '../../contexts'

export function useClient (): Client {
  return useContext(ClientContext)
}
