// React
import React from 'react'
import ReactDOM from 'react-dom/client'

// React router
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Layout components
import Header from './layout/Header'

// Style - Fonts
import 'normalize.css'
import './main.scss'

const router = createBrowserRouter([
  // Main route
  {
    path: '/',
    element: <Header />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
