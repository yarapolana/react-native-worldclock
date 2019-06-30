import React, { Component } from "react";
import styled from "styled-components/native";

import Header from "../components/Header";
import Clock from "../components/Clock";
import Time from "../components/Clock/Time";

import { colors, clock } from "../constants/global";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${colors.background};
`;

const Title = styled.Text`
  color: ${colors.clockTitle};
  font-size: 30px;
  padding-bottom: 10px;
`;

export default class ClockScreen extends Component {
  static navigationOptions = ({ navigation }) => ({});

  constructor(props) {
    super(props);

    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    setInterval(this.update, 1000);
  }

  update = () => {
    this.setState({
      time: new Date()
    });
  };

  render() {
    const h = this.state.time.getHours();
    const m = this.state.time.getMinutes();
    const s = this.state.time.getSeconds();

    return (
      <Container>
        <Header />
        <Clock />
        <Title>Reykjavík</Title>
        <Time
          time={`${h % 12}:${m < 10 ? "0" + m : m}${h < 12 ? " AM" : " PM"}`}
        />
      </Container>
    );
  }
}
