import '../assets/index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'

import { App } from './App'
import {
  ConnectionsProvider,
  LocalizationProvider,
  ThemeProvider
} from './services'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <ConnectionsProvider>
        <LocalizationProvider defaultLocale="en">
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </LocalizationProvider>
      </ConnectionsProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
