import React, { FC } from "react";
import "../styles/Main/Main.css";
import DataCard from "./DataCard";
import PhraseCard from "./PhraseCard";
import { WeatherCard } from "./WeatherCard";


type WeatherCardType = {
  city: string;
};

export const Main:FC<WeatherCardType> = ({city}) => {
  return (
    <div className="main">
      <WeatherCard city={city}/>
      <DataCard />
      <PhraseCard />
    </div>
  );
}
