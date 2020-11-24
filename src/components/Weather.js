import React, { useState, useEffect } from "react";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState();
  const [cityName, setCityName] = useState(props.city);

  const apiBase = "https://api.openweathermap.org/data/2.5/weather";
  const apiKey = "6e9aed0efb2cfee1ab2aab9cb2492671";
  const apiURL = `${apiBase}?q=${cityName}&appid=${apiKey}`;

  useEffect(() => {
    setWeatherData(null);

    // Fetch weather data
    fetch(apiURL)
      .then((r) => r.json())
      .then((data) => {
        setWeatherData(data);
      });
  }, [cityName]);

  function handleCityChange(e) {
    const value = e.target.value;
    if (!value) return;

    setCityName(value);
  }

  return (
    <div>
      <h3>{cityName}</h3>

      {!weatherData && <div>Loading...</div>}

      {weatherData && (
        <div>
          <p>Cloud coverage: {weatherData.clouds.all}%</p>

          <p>Pressure: {weatherData.main.pressure}</p>

          <p>Wind: {weatherData.wind.speed} m/s</p>
        </div>
      )}

      <select onChange={handleCityChange}>
        <option value="">Select city...</option>
        <option value="Paris">Paris</option>
        <option value="Madrid">Madrid</option>
        <option value="Bali">Bali</option>
        <option value="Tokyo">Tokyo</option>
      </select>
    </div>
  );
}
