export type WeatherCardType = {
  city: string;
  temp: number;
  details: string;
  timezone: number;
};

export interface WeatherIcons {
  [key: string]: string;
}
