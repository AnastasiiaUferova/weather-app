import React, { FC } from "react";
import "../styles/Main/Main.css";
import { GeneralCardType } from "../types/types";
import { DataCard } from "./DataCard";
import PhraseCard from "./PhraseCard";
import { WeatherCard } from "./WeatherCard";

export const Main: FC<GeneralCardType> = ({
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
  return (
    <div className="main">
      <WeatherCard
        city={city}
        temp={temp}
        details={details}
        timezone={timezone}
      />
      <DataCard
        min={min}
        max={max}
        sunset={sunset}
        sunrise={sunrise}
        description={description}
        humidity={humidity}
        timezone={timezone}
      />
      <PhraseCard />
    </div>
  );
};
