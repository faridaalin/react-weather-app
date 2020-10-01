import React from "react";
import { IconContext } from "react-icons";

import styled from "styled-components";

export const Container = styled.div`
  width: 375px;
  height: 812px;
  padding: 36px;
`;

export const SearchField = styled.input`
  border: none;
  background-color: #d2f9f7;
  padding: 16px;
  border-radius: 10px;
  margin-bottom: 40px;
  width: 100%;

  ::placeholder {
    color: #51928f;
  
`;

export const Time = styled.time`
  font-weight: 100;
  color: ${({ theme }) => theme.colors.darkGreen};
`;
export const Header = styled.h1`
  font-size: 32px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.green};
`;

const MyProvider = ({ className, children }) => (
  <IconContext.Provider value={{ className }}>{children}</IconContext.Provider>
);

export const MyProviderStyled = styled(MyProvider)`
  font-size: 150px;
  color: ${({ theme }) => theme.colors.darkGreen};
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px 0;
`;
export const WeatherInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const SubHeading = styled.h2`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.darkGreen};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
export const Temperature = styled.h3`
  font-size: 83px;
  margin: 32px 0 8px;
  color: ${({ theme }) => theme.colors.darkGreen};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
export const MinMaxTemp = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  font-size: 22px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: #1f5855;
`;
export const SunsetSunrise = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 32px;
`;
export const Daylength = styled.div`
  background: #d2f9f7;
  padding: 12px;
  font-size: 16px;
  box-shadow: 0px 0px 20px #a4bbe6;
`;
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
