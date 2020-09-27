import React, { useState, useEffect } from "react";
import GlobalStyle from "./style/base/globalStyles";
import Theme from "./style/theme/theme";
import { WiNightSnowThunderstorm } from "react-icons/wi";
import { RiDrizzleLine } from "react-icons/ri";
import { WiRainMix } from "react-icons/wi";
import { FaRegSnowflake } from "react-icons/fa";
import { WiDayFog } from "react-icons/wi";
import { BiSun } from "react-icons/bi";
import { BsCloud } from "react-icons/bs";

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
      } catch {
        console.error();
      }
    };
    fetchWeather(weatherApi);
  }, [query, weatherApi]);

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      let value = e.target.value;
      setQuery(value.trim());
      value = "";
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

  const setWeatherIcon = (value) => {
    switch (true) {
      case value >= 200 && value <= 232:
        return <WiNightSnowThunderstorm />;
        break;
      case value >= 300 && value <= 321:
        return <RiDrizzleLine />;
        break;
      case value >= 500 && value <= 531:
        return <WiRainMix />;
        break;
      case value >= 600 && value <= 622:
        return <FaRegSnowflake />;
        break;
      case value >= 700 && value <= 781:
        return <WiDayFog />;
        break;
      case value === 800:
        return <BiSun />;
        break;
      case value >= 801 && value <= 804:
        return <BsCloud />;
        break;

      default:
        return <BsCloud />;
    }
  };

  const calCelcius = (temp) => {
    let celcius = Math.floor(temp - 273.15);
    return celcius;
  };

  const getTimeFromDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const min = date.getMinutes();
    return `${hours}:${min}`;
  };

  if (!weather.weather) {
    return (
      <SearchField
        placeholder="Search by city"
        type="search"
        onKeyPress={handleKeypress}
      />
    );
  }

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

            <Time>{setDate(new Date())}</Time>
            <Header>
              {weather.name}, {weather.sys.country}
            </Header>
            <IconContainer>
              {setWeatherIcon(weather.weather[0].id)}
            </IconContainer>
            <WeatherInfo>
              <SubHeading>{weather.weather[0].main}</SubHeading>
              <Temperature>{calCelcius(weather.main.temp)}°</Temperature>

              <MinMaxTemp>
                <span>Min {calCelcius(weather.main.temp_max)}°</span>
                <span>Max {calCelcius(weather.main.temp_min)}°</span>
              </MinMaxTemp>
            </WeatherInfo>

            <SunsetSunrise className="sunset-sunrise">
              <Daylength>
                <p>{getTimeFromDate(weather.sys.sunrise)}</p>
                <p>SUNRISE</p>
              </Daylength>
              <Daylength>
                <p>{getTimeFromDate(weather.sys.sunset)}</p>
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
