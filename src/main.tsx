//MAIN FILE
import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes/AppRoutes'
import './index.css'
import { Nav } from './components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Nav />
    <AppRoutes />
  </React.StrictMode>,
)
