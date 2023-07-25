import React from 'react'
import ReactDOM from 'react-dom/client'

import '../assets/index.css'
import { App } from './App'
import { LocalizationProvider, ThemeProvider } from './services'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LocalizationProvider defaultLocale="en">
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LocalizationProvider>
  </React.StrictMode>
)
