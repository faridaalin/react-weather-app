import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    darkGreen: "#053532",
    green: "#377571",
    lightGreen: "#d2f9f7",
  },

  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
  fontWeight: {
    xsLight: "200",
    light: "300",
    regular: "400",
    medium: "500",
    bold: "600",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
