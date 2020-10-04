import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import GlobalStyle from "./style/base/globalStyles";
import setDate from "./utils/setDate";
import calCelcius from "./utils/calCelcius";
import getTime from "./utils/getTime";
import setWeatherIcon from "./functions/setWeatherIcon";
import Theme from "./style/theme/theme";
import apiConfig from "./utils/apiConfig";

import {
  Container,
  SearchField,
  Time,
  Header,
  MyProviderStyled,
  IconContainer,
  WeatherInfo,
  SubHeading,
  Temperature,
  MinMaxTemp,
  SunsetSunrise,
  Daylength,
  LoaderContainer,
} from "./style/container";

function App() {
  const [loader, setLoader] = useState(false);
  const [query, setQuery] = useState(null);
  const [weather, setWeather] = useState(null);

  const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiConfig.API_KEY}`;

  useEffect(() => {
    if (!query) return;

    const fetchWeather = async (URL) => {
      setLoader(true);
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setWeather(data);
        setLoader(false);
      } catch {
        console.error();
      }
    };
    fetchWeather(weatherApi);
  }, [query, weatherApi]);

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      let value = e.target.value;
      if (value.length < 1) {
        return;
      }
      setQuery(value.trim());
      value = "";
    }
  };

  if (query) {
    if (weather && weather.name) {
      return (
        <>
          <GlobalStyle />
          <Theme>
            <MyProviderStyled>
              <Container>
                <SearchField
                  placeholder="Search by city"
                  type="text"
                  onKeyPress={handleKeypress}
                />
                <LoaderContainer>
                  <ClipLoader color="#053532" loading={loader} />
                </LoaderContainer>

                <Time>{setDate(new Date())}</Time>
                <Header>
                  {weather.name}, {weather.sys.country}
                </Header>
                <IconContainer>
                  {setWeatherIcon(weather.weather[0].id)}
                </IconContainer>
                <WeatherInfo>
                  <SubHeading>{weather.weather[0].description}</SubHeading>
                  <Temperature>{calCelcius(weather.main.temp)}°</Temperature>

                  <MinMaxTemp>
                    <span>Min {calCelcius(weather.main.temp_max)}°</span>
                    <span>Max {calCelcius(weather.main.temp_min)}°</span>
                  </MinMaxTemp>
                </WeatherInfo>

                <SunsetSunrise className="sunset-sunrise">
                  <Daylength>
                    <p>{getTime(weather.sys.sunrise)}</p>
                    <p>SUNRISE</p>
                  </Daylength>
                  <Daylength>
                    <p>{getTime(weather.sys.sunset)}</p>
                    <p>SUNSET</p>
                  </Daylength>
                </SunsetSunrise>
              </Container>
            </MyProviderStyled>
          </Theme>
        </>
      );
    } else {
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
              <div>City with the name "{query}"" does not exist.</div>
            </Container>
          </Theme>
        </>
      );
    }
  } else {
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
          </Container>
        </Theme>
      </>
    );
  }
}

export default App;
