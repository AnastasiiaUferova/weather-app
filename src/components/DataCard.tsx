import React from "react";
import "../styles/DataCard/DataCard.css";
import DataInfoContainer from "./DataInfoContainer";
import TimeWeatherCardContainer from "../components/TimeWeatherCardContainer";
import SunRiseCardContainer from "./SunRiseCardContainer";

export default function DataCard() {
  return (
    <div className="data">
      <DataInfoContainer />
      <TimeWeatherCardContainer />
      <SunRiseCardContainer />
    </div>
  );
}
