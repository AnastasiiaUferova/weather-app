import React from "react";
import "../styles/Main/Main.css";
import DataCard from "./DataCard";
import PhraseCard from "./PhraseCard";
import WeatherCard from "./WeatherCard";

export default function Main() {
  return <div className="main">
    <WeatherCard />
    <PhraseCard />
    <WeatherCard />
  
  </div>;
}
