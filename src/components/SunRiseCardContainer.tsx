import React, { FC } from "react";
import { SunRiseCard } from "./SunRiseCard";
import Sunrise from "../images/Sunrise.svg";
import Sunset from "../images/Sunset.svg";
import "../styles/SunRiseCard/SunRiseCard.css";
import { SunRiseCardType } from "../types/types";

export const SunRiseCardContainer: FC<SunRiseCardType> = ({
  sunrise,
  sunset,
  timezone,
}) => {
  const unixTimestamp = 1646902800; // Unix timestamp representing sunrise time in UTC
  const date = new Date(unixTimestamp * 1000); // Convert Unix timestamp to JavaScript Date object
  const sunriseTime = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }); // Convert to 12-hour format

  return (
    <div className="sunrise-card-container">
      <SunRiseCard
        url={Sunrise}
        title="Sunrise"
        time={new Date((sunrise + timezone) * 1000).toLocaleString("en-IN", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      />
      <SunRiseCard
        url={Sunset}
        title="Sunset"
        time={new Date((sunset + timezone) * 1000).toLocaleTimeString("en-IN", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      />
    </div>
  );
};
