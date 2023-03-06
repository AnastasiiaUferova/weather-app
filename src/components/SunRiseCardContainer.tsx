import React, { FC } from "react";
import { SunRiseCard } from "./SunRiseCard";
import Sunrise from "../images/Sunrise.svg";
import Sunset from "../images/Sunset.svg";
import "../styles/SunRiseCard/SunRiseCard.css";
import { SunRiseCardType } from "../types/types";

export const SunRiseCardContainer: FC<SunRiseCardType> = ({
  sunrise,
  sunset,
}) => {
  return (
    <div className="sunrise-card-container">
      <SunRiseCard
        url={Sunrise}
        title="Sunrise"
        time={new Date(sunrise * 1000).toLocaleTimeString("en-IN", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      />
      <SunRiseCard
        url={Sunset}
        title="Sunset"
        time={new Date(sunset * 1000).toLocaleTimeString("en-IN", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      />
    </div>
  );
};
