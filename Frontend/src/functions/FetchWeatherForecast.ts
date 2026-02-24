import { type WeatherForecast } from "../interfaces/WeatherForecast";

export async function fetchWeatherForecast(): Promise<WeatherForecast[]> {
  const response = await fetch('/weatherforecast');
  const data = await response.json();
  return data as WeatherForecast[];
} // function to fetch WeatherForecast data from the backend