import React, { Component } from 'react'
import styled from 'styled-components/native'

import NavButton from '../NavButton'
import { avatar, phone, colors, shadow } from '../../constants/global'

import yara from '../../assets/images/avatar-yara.jpg'
import back from '../../assets/images/icon-arrow-left.png'

const name = 'Yara Polana'
const location = 'Reykjavík, Iceland'

const Container = styled.View`
  background: ${colors.settingsHeader};
  width: ${phone.width};
  height: 280px;
  padding-horizontal: 40px;
  padding-top: 40px;
  border-bottom-left-radius: 40;
  border-bottom-right-radius: 40;
`
const Nav = styled.View`
  justify-content: flex-start;
`

const Content = styled.View`
  justify-content: center;
  align-self: center;
`
const Name = styled.Text`
  color: ${colors.settingsTitle};
  padding-top: 17px;
  font-size: 32px;
  font-weight: 700;
`
const Location = styled.Text`
  color: ${colors.settingsSubTitle};
  padding-top: 7px;
  font-size: 20px;
  font-weight: 600;
`

const Avatar = styled.View`
  background: ${colors.primary};
  width: ${avatar.size};
  height: ${avatar.size};
  border-radius: ${avatar.size / 2};
  margin-top: 30px;
  align-self: center;
  shadow-color: ${shadow.avatar};
  shadow-offset: 0 0;
  shadow-opacity: 0.36;
  shadow-radius: 43px;
  z-index: 20;
`

const Image = styled.Image`
  flex: 1;
  width: ${avatar.size};
  height: ${avatar.size};
  border-radius: ${avatar.size / 2};
`

export default function SettingsHeader({ onClick }) {
  return (
    <Container>
      <Nav>
        <NavButton
          background={colors.settingsHeader}
          shadow={colors.settingsHeader}
          shadowOpacity={0}
          image={back}
          onClick={onClick}
        />
      </Nav>
      <Content>
        <Name>{name}</Name>
        <Location>{location}</Location>
        <Avatar>
          <Image source={yara} resizeMode="contain" />
        </Avatar>
      </Content>
    </Container>
  )
}

SettingsHeader.navigationOptions = ({ navigation }) => ({
  tabBarVisible: false,
})
