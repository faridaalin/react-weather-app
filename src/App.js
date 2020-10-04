import React, { useState, useEffect } from "react";
import apiConfig from "./utils/apiConfig";
import SearchBox from "./components/SearchBox";
import WeatherInterface from "./components/WeatherInterface";

function App() {
  const [loader, setLoader] = useState(false);
  const [query, setQuery] = useState(null);
  const [weatherData, setWeatherData] = useState({});

  const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiConfig.API_KEY}`;

  useEffect(() => {
    if (!query) return;

    const fetchWeather = async (URL) => {
      setLoader(true);
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setWeatherData(data);
        setLoader(false);
      } catch {
        console.error();
      }
    };
    fetchWeather(weatherApi);
  }, [query, weatherApi]);

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      let { value } = e.target;
      if (value.length < 1) {
        return;
      }
      setQuery(value.trim());
      value = "";
    }
  };

  return query ? (
    weatherData && weatherData.name ? (
      <WeatherInterface
        handleKeypress={handleKeypress}
        {...weatherData}
        loader={loader}
      />
    ) : (
      <SearchBox
        message={`City with the name '${query}' does not exist.`}
        handleKeypress={handleKeypress}
      />
    )
  ) : (
    <SearchBox message="" handleKeypress={handleKeypress} />
  );
}

export default App;
