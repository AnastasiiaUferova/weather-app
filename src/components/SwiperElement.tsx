import React, { useEffect, useState } from 'react';
import "../styles/SwiperElement/SwiperElement.css"
import { useDebouncedCallback } from 'use-debounce';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, Pagination } from 'swiper';
import PhraseCard from "./PhraseCard";
import WeatherCard from "./WeatherCard";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SwiperElement() {


  const [ slidesPerView, setSlidesPerView] = useState(2)

  const Resize = useDebouncedCallback(
    () => {
        if (window.innerWidth <= 700) {
          setSlidesPerView(1)
        }
        else setSlidesPerView(2)
    }, 200
)

    useEffect(() => {
    
        window.addEventListener('resize', Resize)
        return () => {
            window.removeEventListener('resize', Resize);
    } }, [Resize])


  return (
    <>
      <Swiper
      modules={[Pagination, Keyboard, Navigation]}
      navigation={true}
      spaceBetween={20}
      slidesPerView={slidesPerView}
      keyboard={true}
      pagination={{ clickable: true }} 
    >
      <SwiperSlide><WeatherCard  /></SwiperSlide>
      <SwiperSlide><WeatherCard/></SwiperSlide>
      <SwiperSlide><PhraseCard /></SwiperSlide>
    </Swiper>
    </>
  )
}


