import React from "react";
import styled from "styled-components/native";

import { colors } from "../../constants/global";

const ButtonWrap = styled.TouchableOpacity`
  background: ${props => props.bg};
  width: 52px;
  height: 52px;
  padding: 5px;
  border-radius: 50px;
  shadow-color: ${props => props.sc};
  shadow-offset: 0 8px;
  shadow-opacity: ${props => props.so};
  shadow-radius: 12px;
`;

const Image = styled.Image`
  margin: auto;
`;

const Text = styled.Text`
  font-size: 18px;
  color: black;
  text-align: center;
`;

const Button = props => (
  <ButtonWrap
    bg={props.background}
    sc={props.shadow}
    so={props.shadowOpacity}
    onPress={props.onClick}
  >
    <Image source={props.image} />
  </ButtonWrap>
);

export default Button;
