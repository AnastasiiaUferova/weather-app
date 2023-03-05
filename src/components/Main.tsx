import React, { FC } from "react";
import "../styles/Main/Main.css";
import { WeatherCardType } from "../types/types";
import DataCard from "./DataCard";
import PhraseCard from "./PhraseCard";
import { WeatherCard } from "./WeatherCard";

export const Main: FC<WeatherCardType> = ({
  city,
  temp,
  details,
  timezone,
}) => {
  return (
    <div className="main">
      <WeatherCard
        city={city}
        temp={temp}
        details={details}
        timezone={timezone}
      />
      <DataCard />
      <PhraseCard />
    </div>
  );
};
