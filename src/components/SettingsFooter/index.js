import React, { Component } from 'react'
import styled from 'styled-components/native'

import { avatar, phone, colors, shadow } from '../../constants/global'

import NavButton from '../NavButton'
import SettingsAdButton from './SettingsAdButton'

import back from '../../assets/images/icon-arrow-left.png'

const Container = styled.View`
  background: ${colors.secondary};
  position: absolute;
  bottom: 0;
  width: ${phone.width};
  /* height: 240px; */
`

const Separator = styled.View`
  background: ${colors.background};
  height: 30px;
  border-bottom-left-radius: 30;
  border-bottom-right-radius: 30;
`

const Content = styled.View`
  padding-horizontal: 40px;
  padding-top: 10px;
`

export default function SettingsHeader() {
  return (
    <Container>
      <Separator />
      <Content>
        <SettingsAdButton />
      </Content>
    </Container>
  )
}

SettingsHeader.navigationOptions = ({ navigation }) => ({
  tabBarVisible: false,
})
