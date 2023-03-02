import React, { FC } from "react";
import "../styles/Main/Main.css";
import DataCard from "./DataCard";
import PhraseCard from "./PhraseCard";
import { WeatherCard } from "./WeatherCard";


type WeatherCardType = {
  city: string;
  temp: number;
};

export const Main:FC<WeatherCardType> = ({city, temp}) => {
  return (
    <div className="main">
      <WeatherCard city={city} temp={temp}/>
      <DataCard />
      <PhraseCard />
    </div>
  );
}
