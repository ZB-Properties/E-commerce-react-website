import React from 'react'
import { Swiper } from 'swiper/react'
import { SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import slider_items from '../Assets/Slider'
import './Slider.css'
import { Link } from 'react-router-dom'

const Slider = () => {
  return (
    <div className='s-container'>
    <Swiper 
  
     modules={[Pagination, Navigation]}
     className='mySwiper'
     navigation={true}
    loopFillGroupWithBlank={true}
     slidesPerView={1} spaceBetween={42} slidesPerGroup={1} loop={true}>
    {slider_items.map((slide, i) => (
        <SwiperSlide key={i} bg={slide.bg}>
           <div className='left-s'>
            <div className='name'>
                <span>{slide.title}</span>
                <span>{slide.Desc}</span>
            </div>
            
            <Link style={{ textDecoration: 'none' }} to='/shop'><button className='home-btn'>Shop Now</button></Link>
            </div>

            <div className='right-s'>
                <img src={slide.imgURL2} alt='' className='slide-img'></img>
            </div>
           
        </SwiperSlide>
    ))}
    </Swiper>

    </div>
  )
}

export default Slider
