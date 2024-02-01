import React, {useState} from 'react'

import Footer from '../../component/Footer/Footer'
import  './home.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Header from '../../component/Header/Header';

export const Home = () => {
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
   
    <div >
        <Header />
        
        <div className='relative h-screen'>
          {/*--------------- Forward Arrow --------------*/}
        <div className=" swiper-button image-swiper-button-next">
        <IoIosArrowForward />
      </div>

          {/*--------------- Backwar Arrow --------------*/}
      <div className="swiper-button image-swiper-button-prev">
        <IoIosArrowBack />
      </div>
      <Swiper      
        slidesPerView={1}
        // spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,          
        }}
        
        speed={1200}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled"
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide className=' relative bg-cover bg-center'>
          <img src="https://lirp.cdn-website.com/524ab2f6/dms3rep/multi/opt/Small+Home+Which+Optimises+Property+Value-640w.jpg" alt="" srcset="" className='block w-full'/>
          <div  className="absolute top-1/2 transform -translate-y-1/2 left-0   p-4 ps-28 ">
        <h1 className="text-4xl font-semibold text-white">Constriction Its Best</h1>
        <p className='text-white mt-8'>Ideal theme for any construction buiness you nedd
          <br />
          With Visual Composer, Revoulation Slider and other awesome <br />
          features, just got batter, With new options you can't go wrong.
        </p>
      </div>
          </SwiperSlide>
        <SwiperSlide className=' relative bg-cover bg-center'>
          <img src="https://lirp.cdn-website.com/524ab2f6/dms3rep/multi/opt/Small+Home+Which+Optimises+Property+Value-640w.jpg" alt="" srcset="" className='block w-full'/>
          <div  className="absolute top-1/2 transform -translate-y-1/2 left-0   p-4 ps-28 ">
        <h1 className="text-4xl font-semibold text-white">Constriction Its Best</h1>
        <p className='text-white mt-8'>Ideal theme for any construction buiness you nedd
          <br />
          With Visual Composer, Revoulation Slider and other awesome <br />
          features, just got batter, With new options you can't go wrong.
        </p>
      </div>
          </SwiperSlide>
       
      </Swiper>
    </div>
        <Footer />
    </div>
  )
}
