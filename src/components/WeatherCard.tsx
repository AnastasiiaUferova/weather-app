import React, { FC } from "react";
import "../styles/WeatherCard/WeatherCard.css";
import { WeatherCardType } from "../types/types";
import { fullDate, Images, weekDay } from "../utilities/Utilities";

export const WeatherCard: FC<WeatherCardType> = ({ city, temp }) => {
  return (
    <div className="weather">
      <div className="weather__date-location">
        <div className="weather__date-location-container">
          <h2 className="weather__date-location-day">{weekDay}</h2>
          <p className="weather__date-location-date">{fullDate}</p>
          <p className="weather__date-location-location">{city}</p>
        </div>
      </div>

      <div className="weather__temp">
        <img
          className="weather__temp-img"
          alt="weather icon"
          src={Images["Clear-sky-sun"]}
        ></img>
        <p className="weather__temp-decription">Sunny</p>
        <p className="weather__temp-temp">{Math.round(temp)}°C</p>
      </div>
    </div>
  );
};
