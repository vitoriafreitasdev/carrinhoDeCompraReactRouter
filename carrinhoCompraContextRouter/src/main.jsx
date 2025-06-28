import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route, Navigate } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Products from './components/Products.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,  
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/products",
        element: <Products/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
