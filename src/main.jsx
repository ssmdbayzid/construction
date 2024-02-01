import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import { Home } from './Pages/Home/Home';



// import router from './Router/router.js'

// import router from './router/router.js'

const router = createBrowserRouter([
 {
  path:"/",
  element : <Home />
 }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
    
    <div>
    <RouterProvider router={router} />
    </div>
    
    </div>
    
  </React.StrictMode>,
)
