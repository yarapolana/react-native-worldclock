import React, { Component } from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";

import clock from "../../assets/images/icon-alarm.png";
import list from "../../assets/images/icon-list.png";
import settings from "../../assets/images/icon-settings.png";
import TabButton from "./TabButton";

const Container = styled.View`
  height: 90px;
  flex-direction: row;
`;

const Button = styled.TouchableOpacity``;

export default class TabNavigation extends Component {
  static defaultProps = {};

  renderItem = (route, index) => {
    const { navigation, jumpToIndex } = this.props;

    const focused = index === navigation.state.index;
    const color = focused
      ? this.props.activeTintColor
      : this.props.inactiveTintColor;

    let TabScene = {
      focused: focused,
      route: route,
      tintColor: color
    };

    return (
      <Button>
        <View>
          {this.props.renderItem(TabScene)}
          <Text>{this.props.getLabel(TabScene)}</Text>
        </View>
      </Button>
    );
  };

  render() {
    const { navigation, onTabPress } = this.props;
    const { routes, index } = navigation.state;

    return (
      <View>
        {routes && routes.map((route, index) => this.renderItem(route, index))}
      </View>
    );
  }
}
