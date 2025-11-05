import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// This registers the PWA service worker
import { registerSW } from 'virtual:pwa-register'

// Automatically updates the service worker
registerSW({ immediate: true })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
