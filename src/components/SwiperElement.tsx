import React from "react";
import "../styles/SwiperElement/SwiperElement.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Pagination } from "swiper";
import PhraseCard from "./PhraseCard";
import WeatherCard from "./WeatherCard";
import UseResize from "../hooks/UseResize";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DataCard from "./DataCard";

export default function SwiperElement() {
  const { slidesPerView } = UseResize(700);

  console.log(slidesPerView);

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
        <SwiperSlide>
          <WeatherCard />
        </SwiperSlide>
        <SwiperSlide>
          <DataCard />
        </SwiperSlide>
        <SwiperSlide>
          <PhraseCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
