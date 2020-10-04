import React, { useState, useEffect } from "react";
import apiConfig from "./utils/apiConfig";
import WeatherInterface from "./components/WeatherInterface";
import GlobalStyle from "./style/base/globalStyles";
import Theme from "./style/theme/theme";
import { Container, SearchField } from "./style/container";

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

  return (
    <>
      <GlobalStyle />
      <Theme>
        <Container>
          <SearchField
            placeholder="Search by city"
            type="search"
            onKeyPress={handleKeypress}
          />
          {query ? (
            weatherData && weatherData.name ? (
              <WeatherInterface {...weatherData} loader={loader} />
            ) : (
              <div>City with the name '{query}' does not exist.</div>
            )
          ) : null}
        </Container>
      </Theme>
    </>
  );
}

export default App;
