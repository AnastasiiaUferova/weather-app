import React from "react";
import "../styles/WeatherCard/WeatherCard.css";
import { Images } from "../utilities/Utilities";

export default function WeatherCard() {
  return (
    <div className="weather">
      <div className="weather__date-location">
        <div className="weather__date-location-container">
          <h2 className="weather__date-location-day">Tuesday</h2>
          <p className="weather__date-location-date">20 Jun 2022</p>
          <p className="weather__date-location-location">Warsaw, PLN</p>
        </div>
      </div>

      <div className="weather__temp">
        <img
          className="weather__temp-img"
          alt="weather icon"
          src={Images["Clear-sky-sun"]}
        ></img>
        <p className="weather__temp-decription">Sunny</p>
        <p className="weather__temp-temp">29 °C</p>
      </div>
    </div>
  );
}
