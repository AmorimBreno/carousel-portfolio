import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/app.tsx'
import './app/styles/global.css'
import { NavbarProvider } from './app/contexts/sidebar-context.tsx'
import { CursorProvider } from './app/contexts/cursor-context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CursorProvider>
    <NavbarProvider>
      <App />
    </NavbarProvider>
    </CursorProvider>
  </React.StrictMode>
)
