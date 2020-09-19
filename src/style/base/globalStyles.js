import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}
html, body {
    background: #ECFAF9;
    font-family: 'Montserrat Alternates', sans-serif;
    overflow-x: hidden;
    height: 100%;
  }

  img {
    width: 100%;
  }
`;

export default GlobalStyle;
