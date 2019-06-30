import React, { Component } from "react";
import styled from "styled-components/native";
import { colors } from "../../../constants/global";

const Container = styled.View``;

const TimeText = styled.Text`
  color: black;
  font-weight: 500;
  font-size: 47px;
`;

const Time = (props) => (
  <Container>
    <TimeText>{props.time}</TimeText>
  </Container>
);

export default Time
