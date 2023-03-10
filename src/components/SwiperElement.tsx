import React, { FC } from "react";
import "../styles/SwiperElement/SwiperElement.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Pagination } from "swiper";
import PhraseCard from "./PhraseCard";
import { WeatherCard } from "./WeatherCard";
import UseResize from "../hooks/UseResize";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { DataCard } from "./DataCard";
import { GeneralCardType } from "../types/types";

export const SwiperElement: FC<GeneralCardType> = ({
  city,
  temp,
  details,
  timezone,
  description,
  humidity,
  min,
  max,
  sunrise,
  sunset,
}) => {
  const { slidesPerView } = UseResize(700);

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
          <WeatherCard
            city={city}
            temp={temp}
            details={details}
            timezone={timezone}
          />
        </SwiperSlide>
        <SwiperSlide>
          <DataCard
            min={min}
            max={max}
            sunset={sunset}
            sunrise={sunrise}
            description={description}
            humidity={humidity}
            timezone={timezone}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PhraseCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
