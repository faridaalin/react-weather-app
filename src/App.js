import React from "react";
import GlobalStyle from "./style/base/globalStyles";
import Theme from "./style/theme/theme";
import BigCircle from "./img/Ellipse_big.svg";
import MedCircle from "./img/Ellipse_med.svg";
import SmallCircle from "./img/Ellipse_small.svg";

import { Container } from "./style/container";

import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Theme>
        <Container>
          <img src={BigCircle} alt="circle" />
          <img src={MedCircle} alt="circle" />
          <img src={SmallCircle} alt="circle" />
        </Container>
      </Theme>
    </>
  );
}

export default App;