import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hero from './Components/Navbar/Hero';
import Home from './Home/Home';
import Shop from './Pages/Shop';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Cart from './Pages/Cart';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/e-commerce-react-website', element: <Hero /> },
      {
         path:'/Home', element: <Home />
      },
      {
         path:'/shop', element: <Shop />
      },
      {
         path:'/login', element: <Login />
      },
      {
         path:'/register', element: <Register />
      },
      {
         path:'/Card/:id', element: <ProductDetails />
      },
      {
         path:'/Cart', element: <Cart />
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);


reportWebVitals();
