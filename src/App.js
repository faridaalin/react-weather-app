import React from "react";
import GlobalStyle from "./style/base/globalStyles";
import Theme from "./style/theme/theme";
import { CircleBig, CircleMed, CircleSmall } from "./style/circles/circle";
// import BigCircle from "./img/Ellipse_big.svg";
// import MedCircle from "./img/Ellipse_med.svg";
// import SmallCircle from "./img/Ellipse_small.svg";

import { Container } from "./style/container";

import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Theme>
        <Container>
          <div>
            <CircleBig />
          </div>

          <div>
            <CircleMed />
          </div>
          <div>
            <CircleSmall />
          </div>

          <div>Weather App</div>
        </Container>
      </Theme>
    </>
  );
}

export default App;
