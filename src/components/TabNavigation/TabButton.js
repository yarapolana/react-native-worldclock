import React, { Component } from "react";
import styled from "styled-components/native";

const Container = styled.View`
  height: 90px;
`;

const Button = styled.TouchableOpacity`
  height: 90px;
`;

const Icon = styled.Image``;

const Title = styled.Text`
  font-size: 14px;
  font-weight: 700;
`;

export default class TabButton extends Component {
  handlePress = () => {};

  render() {
    const { routeName, isActive } = this.props;

    const iconImage = tabBarIcons[isActive ? "active" : inactive][routeName];

    return (
      <Button onPress={this.handlePress}>
        <Icon source={iconImage} />
        <Title> textInComponent </Title>
      </Button>
    );
  }
}
