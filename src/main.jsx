import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import AuthProvider from './pages/Providers/AuthProvider'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='max-w-6xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
