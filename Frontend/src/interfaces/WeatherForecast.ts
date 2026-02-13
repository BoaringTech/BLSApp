export interface WeatherForecast {
  date: string;
  temperatureC: number;
  summary: string;
  temperatureF: number;
} // data type for WeatherForecast from the backend

export async function fetchWeatherForecast(): Promise<WeatherForecast[]> {
  const response = await fetch('/weatherforecast');
  const data = await response.json();
  return data as WeatherForecast[];
} // function to fetch WeatherForecast data from the backend