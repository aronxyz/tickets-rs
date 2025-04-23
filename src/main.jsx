import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { TicketsProvider } from './contexts/TicketsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <TicketsProvider><App /></TicketsProvider>
    </BrowserRouter>
  </StrictMode>,
)
