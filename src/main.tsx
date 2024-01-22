// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// React router
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Layout components
import Header from './layout/Header';
import Footer from './layout/Footer';

// Page components
import Home from './page/Home'

// Style - Fonts
import 'normalize.css';
import './main.scss';

const router = createBrowserRouter([
  // Main route
  {
    path: '/',
    element: <>
      <Header />
      <Footer />
    </>,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
