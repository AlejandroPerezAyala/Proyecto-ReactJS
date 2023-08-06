import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

const Header = () => {
  return (
    <header>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src="/Header.webp" alt=""/></SwiperSlide>
        <SwiperSlide><img src="/Header2.webp" alt="" /></SwiperSlide>
      </Swiper>
    </header>
  )
}

export default Header





