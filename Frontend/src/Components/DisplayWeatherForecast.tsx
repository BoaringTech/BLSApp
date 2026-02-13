import { useEffect, useState } from "react";
import type { WeatherForecast } from "../interfaces/WeatherForecast";

function DisplayWeatherForecast() {
  const [weatherForcast, setWeatherForecast] = useState<WeatherForecast[]>([]);

  useEffect(() => {
    fetch("/weatherforecast")
      .then((response) => response.json())
      .then((data) => setWeatherForecast(data));
  }, []);

  return (
    <div>
      <h1>Weather Forecast</h1>
      <table className="table">
        <tr>
          <th>Date</th>
          <th>TemperatureF</th>
          <th>TemperatureC</th>
          <th>Summary</th>
        </tr>
        {weatherForcast.map((forecast) => (
          <tr key={forecast.date}>
            <td>{forecast.date}</td>
            <td>{forecast.temperatureF}</td>
            <td>{forecast.temperatureC}</td>
            <td>{forecast.summary}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default DisplayWeatherForecast;
