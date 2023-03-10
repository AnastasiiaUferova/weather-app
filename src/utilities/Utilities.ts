import BrokenClouds from "../images/Broken-clouds.svg";
import ClearSkyNight from "../images/Clear-sky-night.svg";
import ClearSkySun from "../images/Clear-sky-sun.svg";
import FewCloudsDay from "../images/Few-clouds-day.svg";
import FewCloudsNight from "../images/Few-clouds-night.svg";
import Mist from "../images/Mist.svg";
import RainDay from "../images/Rain-day.svg";
import RainNight from "../images/Rain-night.svg";
import ScatteredCloudsDay from "../images/Scattered-clouds-day.svg";
import ScatteredCloudsNight from "../images/Scattered-clouds-night.svg";
import ShowerRainDay from "../images/Shower-rain-day.svg";
import ShowerRainNight from "../images/Shower-rain-night.svg";
import Snow from "../images/Snow.svg";
import Thunderstorm from "../images/Thunderstorm.svg";
import { WeatherIcons } from "../types/types";

export const Images = {
  "Broken-Clouds": BrokenClouds,
  "Clear-sky-night": ClearSkyNight,
  "Clear-sky-sun": ClearSkySun,
  "Few-clouds-day": FewCloudsDay,
  "Few-clouds-night": FewCloudsNight,
  Mist: Mist,
  "Rain-day": RainDay,
  "Rain-night": RainNight,
  "Scattered-clouds-day": ScatteredCloudsDay,
  "Scattered-clouds-nigth": ScatteredCloudsNight,
  "Shower-rain-day": ShowerRainDay,
  "Shower-rain-night": ShowerRainNight,
  Snow: Snow,
  Thunderstorm: Thunderstorm,
};

export const Icons: WeatherIcons = {
  Thunderstorm: Images["Thunderstorm"],
  Snow: Images["Snow"],
  Clouds: Images["Scattered-clouds-day"],
  Clear: Images["Clear-sky-sun"],
  Mist: Images["Mist"],
  Smoke: Images["Mist"],
  Haze: Images["Mist"],
  Fog: Images["Mist"],
  Sand: Images["Mist"],
  Dust: Images["Mist"],
  Ash: Images["Mist"],
  Squall: Images["Mist"],
  Tornado: Images["Mist"],
  Rain: Images["Rain-day"],
  Drizzle: Images["Shower-rain-day"],
};

export const NightIcons: WeatherIcons = {
  Thunderstorm: Images["Thunderstorm"],
  Snow: Images["Snow"],
  Clouds: Images["Scattered-clouds-nigth"],
  Clear: Images["Clear-sky-night"],
  Mist: Images["Mist"],
  Smoke: Images["Mist"],
  Haze: Images["Mist"],
  Fog: Images["Mist"],
  Sand: Images["Mist"],
  Dust: Images["Mist"],
  Ash: Images["Mist"],
  Squall: Images["Mist"],
  Tornado: Images["Mist"],
  Rain: Images["Rain-night"],
  Drizzle: Images["Shower-rain-night"],
};

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = new Date();
export const weekDay = weekday[date.getDay()];
export const fullDate = date.toLocaleDateString("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});
