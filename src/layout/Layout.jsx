import React from 'react'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'
import { Link, Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <div>          
    <Link to="/login">Login</Link>
        <br />
        <Link to="/signup">Signup</Link>
        {Outlet}
    
    </div>
  )
}

export default Layout