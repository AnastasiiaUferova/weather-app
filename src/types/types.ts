export type GeneralCardType = {
  city: string;
  temp: number;
  details: string;
  timezone: number;
  description: string;
  humidity: number;
  max: number;
  min: number;
  sunrise: number;
  sunset: number;
};

export type WeatherCardType = {
  city: string;
  temp: number;
  details: string;
  timezone: number;
};

export type DataCardType = {
  timezone: number;
  description: string;
  humidity: number;
  max: number;
  min: number;
  sunrise: number;
  sunset: number;
};

export interface WeatherIcons {
  [key: string]: string;
}

export type SunRiseCardType = {
  sunrise: number;
  sunset: number;
  timezone: number;
};

export type DataInfoContainerType = {
  description: string;
  humidity: number;
  max: number;
  min: number;
};
