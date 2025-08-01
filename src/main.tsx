import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { routeTree } from './routeTree.gen'
import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'

const router = createRouter({ routeTree })

const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)