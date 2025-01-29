export interface IWeather {
  city: string;
  weather: { description: string };
  main: { temp: number };
}
