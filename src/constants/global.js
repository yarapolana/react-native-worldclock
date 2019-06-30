import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const colors = {
  primary: "#D92D7B",
  secondary: "#fff",
  accent: "#D1DCEE",
  settingsHeader: "#142550",
  settingsTitle: "#EDF1FB",
  settingsSubTitle: "#66718D",
  settingsButton: "#F7F9FC",
  background: "#ecf1fd",
  backgroundDark: "#142550",
  clockBackground: "#E7EEFB",
  clockFace: "#EDF1FB",
  clockFaceSmall: "#E3EAF8",
  clockTitle: "#D81F72"
};

export const shadow = {
  main: "#fff",
  color: "#c4d4e7",
  dark: "#c7d6ea",
  avatar: "#1A3781"
};

export const clock = {
  size: 337,
  hourColor: "#0C0F1F",
  handWidth: 4,
  handHeight: 154,
  handRadius: 4,
  minuteColor: "#D81F72",
  secondColor: "#9FA7BC"
};

export const phone = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height
};

export const avatar = {
  size: 130
};
