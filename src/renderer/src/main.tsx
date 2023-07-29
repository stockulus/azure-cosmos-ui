import React from 'react'
import ReactDOM from 'react-dom/client'

import '../assets/index.css'
import { App } from './App'
import {
  ConnectionsProvider,
  LocalizationProvider,
  ThemeProvider
} from './services'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConnectionsProvider>
      <LocalizationProvider defaultLocale="en">
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </LocalizationProvider>
    </ConnectionsProvider>
  </React.StrictMode>
)
