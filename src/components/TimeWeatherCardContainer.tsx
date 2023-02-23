import React from 'react';
import {TimeWeatherCard} from './TimeWeatherCard';
import { Images } from "../utilities/Utilities";


export default function TimeWeatherCardContainer() {
  return (
    <div className='time-weather-card-container'>
        <TimeWeatherCard url={Images["Clear-sky-sun"]} timeNumber={9} timeSign={'AM'} temp={10}/>
        <TimeWeatherCard url={Images["Clear-sky-sun"]} timeNumber={12} timeSign={'PM'} temp={10}/>
        <TimeWeatherCard url={Images["Clear-sky-sun"]} timeNumber={15} timeSign={'PM'} temp={10}/>
        <TimeWeatherCard url={Images["Clear-sky-sun"]} timeNumber={18} timeSign={'PM'} temp={10}/>
    </div>
  )
}
