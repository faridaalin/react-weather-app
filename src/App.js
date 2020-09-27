import React, { useState, useEffect } from "react";
import GlobalStyle from "./style/base/globalStyles";
import Theme from "./style/theme/theme";
import { WiDayCloudy } from "react-icons/wi";

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
} from "./style/container";

import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const API_KEY = `3461048c2ed9b08e6865d81fb15b4fb6`;
  const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`;

  useEffect(() => {
    if (!query) return;

    const fetchWeather = async (URL_API) => {
      try {
        const res = await fetch(URL_API);
        const data = await res.json();
        setWeather(data);
        setQuery("");
      } catch {
        console.error();
      }
    };
    fetchWeather(weatherApi);
  }, [query, weatherApi]);

  const handleKeyup = (e) => {
    if (e.key === "Enter") {
      setQuery(e.target.value.trim());
    }
  };

  const setDate = (date) => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "Mai",
      "June",
      "July",
      "August",
      "September",
      "November",
      "December",
    ];

    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const today = date.getDate();
    const year = date.getFullYear();
    const todaysDate = `${day}, ${month} ${today} ${year} `;
    return todaysDate;
  };

  return (
    <>
      <GlobalStyle />
      <Theme>
        <MyProviderStyled>
          <Container>
            <SearchField
              placeholder="Search by city"
              type="text"
              onKeyUp={handleKeyup}
            />

            <Time>{setDate(new Date())}</Time>
            <Header>London</Header>
            <IconContainer>
              <WiDayCloudy />
            </IconContainer>
            <WeatherInfo>
              <SubHeading>Sunny</SubHeading>
              <Temperature>28°</Temperature>

              <MinMaxTemp>
                <span>Min 19°</span>
                <span>Max 32°</span>
              </MinMaxTemp>
            </WeatherInfo>

            <SunsetSunrise className="sunset-sunrise">
              <Daylength>
                <p>6:35AM</p>
                <p>SUNRISE</p>
              </Daylength>
              <Daylength>
                <p>8:35PM</p>
                <p>SUNSET</p>
              </Daylength>
            </SunsetSunrise>
          </Container>
        </MyProviderStyled>
      </Theme>
    </>
  );
}

export default App;
