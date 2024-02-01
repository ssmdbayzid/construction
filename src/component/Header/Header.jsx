import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'

import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Header = () => {
const [open, setOpen] = useState(false)
const [scroll, setScroll] = useState(false)

const onChange = () =>{
  if(window.scrollY >= 90){
      setScroll(true)
  }else{
      setScroll(false)
  }
}
window.addEventListener("scroll", onChange)

  return (
    <div className={`fixed z-[9999] ${scroll && "bg-black/50"} w-full  py-2`}>
<div className="container max-w-[1170px] mx-auto">
  <div className="flex justify-between items-center py-4 px-2">
    <img src="https://anpsthemes.com/constructo-demo-3/wp-content/uploads/2015/03/constructo-logo-yelow1.png" alt="" />

    <ul className=" hidden md:flex gap-10">
  
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
<div
  className={`absolute bg-gray-800 text-white w-56 min-h-screen overflow-y-auto transition-transform transform
   ${open ? "translate-x-0" : "-translate-x-full"} ease-in-out duration-300"
  id="sidebar`}
>
  {/* Your Sidebar Content */}
  <Menu />
 </div>
 </div>  
  )
}

export default Header

{/* <div className={`fixed ${scroll && "bg-black/50"} w-full  py-2`}>
<div className="container max-w-[1170px] mx-auto">
  <div className="flex justify-between items-center py-4 px-2">
    <img src="https://anpsthemes.com/constructo-demo-3/wp-content/uploads/2015/03/constructo-logo-yelow1.png" alt="" />

    <ul className=" flex gap-10">
  
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
<div
  className={`absolute bg-gray-800 text-white w-56 min-h-screen overflow-y-auto transition-transform transform
   ${open ? "translate-x-0" : "-translate-x-full"} ease-in-out duration-300"
  id="sidebar`}
>
  {/* Your Sidebar Content */}
//   <Menu />
// </div>
// </div>   */}