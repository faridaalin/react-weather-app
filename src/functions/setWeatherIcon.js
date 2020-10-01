import React from "react";
import { WiNightSnowThunderstorm } from "react-icons/wi";
import { RiDrizzleLine } from "react-icons/ri";
import { WiRainMix } from "react-icons/wi";
import { FaRegSnowflake } from "react-icons/fa";
import { WiDayFog } from "react-icons/wi";
import { BiSun } from "react-icons/bi";
import { BsCloud } from "react-icons/bs";

const setWeatherIcon = (value) => {
  switch (true) {
    case value >= 200 && value <= 232:
      return <WiNightSnowThunderstorm />;
    case value >= 300 && value <= 321:
      return <RiDrizzleLine />;

    case value >= 500 && value <= 531:
      return <WiRainMix />;

    case value >= 600 && value <= 622:
      return <FaRegSnowflake />;

    case value >= 700 && value <= 781:
      return <WiDayFog />;

    case value === 800:
      return <BiSun />;

    case value >= 801 && value <= 804:
      return <BsCloud />;

    default:
      return <BsCloud />;
  }
};

export default setWeatherIcon;
