import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    darkGreen: "#02423E",
    lightGreen: "#4DCCC6",
  },

  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
  fontEright: {
    light: "300",
    regular: "400",
    medium: "500",
    bold: "700",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
