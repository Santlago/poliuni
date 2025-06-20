'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Client } from '../client'

import { ReactNode, useState } from 'react'
import { ClientProvider } from '@/contexts'

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [client] = useState(new Client())
  const [queryClient] = useState(new QueryClient())

  return (
    <ClientProvider client={client}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ClientProvider>
  )
}
