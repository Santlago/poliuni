'use client'

import { createContext } from 'react'
import { Client } from '../../client'

export const ClientContext = createContext<Client>(new Client)
