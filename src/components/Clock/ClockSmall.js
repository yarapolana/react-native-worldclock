import React, { Component } from "react";
import styled from "styled-components/native";

import { colors, clock } from "../../constants/global";

const Container = styled.View`
  background: ${colors.background};
  width: 100px;
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  `;



const ClockFace = styled.View`
  background: ${colors.clockFaceSmall};
  width: ${clock.size - 272};
  height: ${clock.size - 272};
  border-radius: 32px;
  position: absolute;
`;

const ClockPin = styled.View`
  background: ${colors.primary};
  border-radius: 6px;
  width: 5px;
  height: 5px;
`;
const Text = styled.Text``

const ClockSmall = () => (
  <Container>
    <ClockFace></ClockFace>
    <ClockPin />
  </Container>
);
export default ClockSmall;