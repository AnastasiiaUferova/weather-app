import React from "react";
import { SunRiseCard } from "./SunRiseCard";
import Sunrise from "../images/Sunrise.svg";
import Sunset from "../images/Sunset.svg";
import "../styles/SunRiseCard/SunRiseCard.css";

export default function SunRiseCardContainer() {
  return (
    <div className="sunrise-card-container">
      <SunRiseCard url={Sunrise} title="Sunrise" time="7:40" timeSign="AM" />
      <SunRiseCard url={Sunset} title="Sunset" time="5:45" timeSign="PM" />
    </div>
  );
}
