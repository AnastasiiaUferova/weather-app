import React, { FC } from 'react';
import "../styles/TimeWeatherCard/TimeWeatherCard.css"

type TimeWeatherCardType = {
    url: string;
    timeNumber: number;
    timeSign: string;
    temp: number;
}


export const TimeWeatherCard: FC<TimeWeatherCardType> = ({url, timeNumber, temp, timeSign}) => {
    return (
        <div className='time-weather-card'>
            <img alt="weather-icon" src={url}></img>
            <p className='time-weather-card__time'>{timeNumber}{timeSign}</p>
            <p className='time-weather-card__temp'>{temp}C°</p>
        </div>
)
}


