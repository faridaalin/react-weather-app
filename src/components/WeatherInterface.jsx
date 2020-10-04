import React from "react";
import { ClipLoader } from "react-spinners";
import setDate from "../utils/setDate";
import calCelcius from "../utils/calCelcius";
import getTime from "../utils/getTime";
import setWeatherIcon from "../functions/setWeatherIcon";


import {
    Time,
    Header,
    IconContainer,
    WeatherInfo,
    SubHeading,
    Temperature,
    MinMaxTemp,
    SunsetSunrise,
    Daylength,

    LoaderContainer,
} from "../style/container";

export default function WeatherInterface({ loader, ...weatherData }) {

    if (loader) {
        return (
            <LoaderContainer>
                <ClipLoader color="#053532" loading={loader} />
            </LoaderContainer>
        )
    }

    return (
        <>
            <Time>{setDate(new Date())}</Time>
            <Header>
                {weatherData.name}, {weatherData.sys.country}
            </Header>
            <IconContainer>
                {setWeatherIcon(weatherData.weather[0].id)}
            </IconContainer>
            <WeatherInfo>
                <SubHeading>{weatherData.weather[0].description}</SubHeading>
                <Temperature>{calCelcius(weatherData.main.temp)}°</Temperature>

                <MinMaxTemp>
                    <span>Min {calCelcius(weatherData.main.temp_max)}°</span>
                    <span>Max {calCelcius(weatherData.main.temp_min)}°</span>
                </MinMaxTemp>
            </WeatherInfo>

            <SunsetSunrise className="sunset-sunrise">
                <Daylength>
                    <p>{getTime(weatherData.sys.sunrise)}</p>
                    <p>SUNRISE</p>
                </Daylength>
                <Daylength>
                    <p>{getTime(weatherData.sys.sunset)}</p>
                    <p>SUNSET</p>
                </Daylength>
            </SunsetSunrise>
        </>)
}
