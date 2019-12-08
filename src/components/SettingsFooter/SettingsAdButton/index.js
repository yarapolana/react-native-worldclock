import React from 'react'
import styled from 'styled-components/native'

import { colors } from '../../../constants/global'

import separator from '../../../assets/images/vertical-separator.png'

const ButtonWrap = styled.TouchableOpacity`
  background: ${colors.primary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  margin-bottom: 25px;
  margin-top: 5px;
  padding-left: 20px;
  padding-right: 10px;
`

const TextContainer = styled.View`
  flex-direction: column;
  padding-vertical: 24px;
`

const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.secondary};
`

const SubTitle = styled.Text`
  font-size: 12px;
  color: ${colors.secondary};
  opacity: 0.45;
  padding-top: 5px;
`

const PriceContainer = styled.View`
  background: #b41d61;
  width: 64px;
  height: 64px;
  border-radius: 34px;
  justify-content: center;
  align-items: center;
`

const Price = styled.Text`
  color: white;
  font-size: 22px;
  font-weight: 700;
`

const Separator = styled.Image`
  margin-left: 80px;
`

const Button = props => (
  <ButtonWrap>
    <TextContainer>
      <Title>Go Ad Free</Title>
      <SubTitle>Buy Premium</SubTitle>
    </TextContainer>
    <Separator source={separator} />
    <PriceContainer>
      <Price>$5</Price>
    </PriceContainer>
  </ButtonWrap>
)

export default Button
