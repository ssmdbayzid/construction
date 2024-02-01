import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'

const Header = () => {
const [open, setOpen] = useState(false)
const [scroll, setScroll] = useState()

const onChange = () =>{
  if(window.scrollY >= 90){
      setScroll(true)
  }else{
      setScroll(false)
  }
}
window.addEventListener("scroll", onChange)

  return (
    <div className="bg-gray-100">
  <div className="h-screen flex overflow-hidden bg-gray-200">
    {/*------------------ Sidebar ---------------------*/}
    <div
      className={`absolute bg-gray-800 text-white w-56 min-h-screen overflow-y-auto transition-transform transform
       ${open ? "translate-x-0" : "-translate-x-full"} ease-in-out duration-300"
      id="sidebar`}
    >
      {/* Your Sidebar Content */}
      <Menu />
    </div>
    {/* Content */}
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Navbar */}
      <div className={`fixed ${scroll && "bg-black/50"} w-full shadow`}>
        <div className="container max-w-[1170px] mx-auto">
          <div className="flex justify-between items-center py-4 px-2">
            <img src="https://anpsthemes.com/constructo-demo-3/wp-content/uploads/2015/03/constructo-logo-yelow1.png" alt="" />

            <ul className="mt-4 flex gap-10">
          
            <Link to={"/home"} className="block text-white font-semibold hover:text-indigo-400">
              Home
            </Link>            
            <Link to={"/about"} className="block text-white font-semibold hover:text-indigo-400">
              About
            </Link>            
            <Link to={"/Services"} className="block text-white font-semibold hover:text-indigo-400">
              Services
            </Link>            
            <Link to={"/Contact"} className="block text-white font-semibold hover:text-indigo-400">
              Contact
            </Link>  
      </ul>
            <button
              onClick={()=> setOpen(!open)}
              className="md:hidden text-gray-500 hover:text-gray-600"
              id="open-sidebar"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
           
          </div>
        </div>
      </div>
      {/* Content Body */}
      <div className="h-screen bg-[url('https://lirp.cdn-website.com/524ab2f6/dms3rep/multi/opt/Small+Home+Which+Optimises+Property+Value-640w.jpg')] bg-no-repeat bg-cover flex items-center bg-opacity-20">

      <div className="flex-1 overflow-auto p-4 ps-28 ">
        <h1 className="text-4xl font-semibold text-white">Constriction Its Best</h1>
        <p className='text-white mt-8'>Ideal theme for any construction buiness you nedd
          <br />
          With Visual Composer, Revoulation Slider and other awesome <br />
          features, just got batter, With new options you can't go wrong.
        </p>
      </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Header