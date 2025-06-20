'use client'

import { PropsWithChildren } from 'react'
import { ClientContext } from './ClientContext'
import { Client } from '../../client'

export type ClientProviderProps = PropsWithChildren<{
  client: Client
}>

export function ClientProvider (props: ClientProviderProps) {
  const { client, children } = props

  return (
    <ClientContext.Provider value={client}>
      {children}
    </ClientContext.Provider>
  )
}
