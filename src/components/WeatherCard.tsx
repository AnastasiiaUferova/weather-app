import React, { FC } from "react";
import "../styles/WeatherCard/WeatherCard.css";
import { Images } from "../utilities/Utilities";


type WeatherCardType = {
  city: string;
  temp: number;
};
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
const day = weekday[d.getDay()];
const date = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });




export const WeatherCard:FC<WeatherCardType> = ({city, temp}) => {

  return (
    <div className="weather">
      <div className="weather__date-location">
        <div className="weather__date-location-container">
          <h2 className="weather__date-location-day">{day}</h2>
          <p className="weather__date-location-date">{date}</p>
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
        <p className="weather__temp-temp">{temp}°C</p>
      </div>
    </div>
  );
}
