import React, { FC } from "react";
import "../styles/DataCard/DataCard.css";
import { DataInfoContainer } from "./DataInfoContainer";
import TimeWeatherCardContainer from "../components/TimeWeatherCardContainer";
import { SunRiseCardContainer } from "./SunRiseCardContainer";
import { DataCardType } from "../types/types";

export const DataCard: FC<DataCardType> = ({
  description,
  humidity,
  min,
  max,
  sunrise,
  sunset,
}) => {
  return (
    <div className="data">
      <DataInfoContainer
        min={min}
        max={max}
        humidity={humidity}
        description={description}
      />
      <TimeWeatherCardContainer />
      <SunRiseCardContainer sunrise={sunrise} sunset={sunset} />
    </div>
  );
};
