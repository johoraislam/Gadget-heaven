import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router'
import router from './router'
import { CartProvider } from './components/Context/CartContext'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <div className="bg-gray-100 min-h-screen">
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </CartProvider>
  </StrictMode>,
)
