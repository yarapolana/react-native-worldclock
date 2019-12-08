import React from 'react'
import styled from 'styled-components/native'

import { colors } from '../../constants/global'

const ButtonWrap = styled.TouchableOpacity`
  background: ${colors.settingsButton};
  flex-direction: row;
  justify-content: space-between;
  border-radius: 12px;
  margin-bottom: 5px;
  margin-top: 5px;
  z-index: 1;
`

const Image = styled.Image`
  margin: auto 0;
  margin-right: 16;
`

const Text = styled.Text`
  font-size: 18px;
  color: black;
  padding: 28px;
`

const Button = props => {
  const { onClick, text, image } = props

  return (
    <ButtonWrap onPress={onClick}>
      <Text>{text}</Text>
      <Image source={image} />
    </ButtonWrap>
  )
}

export default Button
