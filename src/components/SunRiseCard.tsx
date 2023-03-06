import React, { FC } from "react";

type SunRiseCardType = {
  title: string;
  time: string;
  url: string;
};

export const SunRiseCard: FC<SunRiseCardType> = ({ url, title, time }) => {
  return (
    <div className="sunrise-card">
      <h3 className="sunrise-card__title">{title}</h3>
      <p className="sunrise-card__time">{time}</p>
      <img alt="sunrise-icon" src={url}></img>
    </div>
  );
};
