// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Redux
import { Provider } from 'react-redux';

// React router
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Layout components
import Header from './layout/Header';
import Footer from './layout/Footer';

// Page components
import Home from './page/Home';
import Connection from './page/Connection';
import User from './page/User';

// Style - Fonts
import 'normalize.css';
import './main.scss';

// Script
import { store } from './scripts/reduxToolkit/store';

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
      },
      {
        path: 'login',
        element: <Connection />
      },
      {
        path: 'user',
        element: <User />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Store provider */}
    <Provider store={store}>
      {/* Router provider */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
