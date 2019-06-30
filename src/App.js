import React, { Component } from "react";
import Routes from "./routes";
import styled from "styled-components/native";
import { colors } from "./constants/global";

const Container = styled.View`
  flex: 1;
  background: ${colors.background};
`;

export default class App extends Component {
  render() {
    return (
      <Container>
        <Routes />
      </Container>
    );
  }
}
