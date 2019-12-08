import React, { Component } from 'react'
import styled from 'styled-components/native'

import SettingsHeader from '../components/SettingsHeader'
import SettingsButton from '../components/SettingsButton'
import SettingsSwitch from '../components/SettingsSwitch'
import SettingsFooter from '../components/SettingsFooter'

import { colors, phone } from '../constants/global'

import chevron from '../assets/images/icon-chevron-right.png'

const Container = styled.View`
  background: ${colors.background};
  flex: 1;
`
const Content = styled.ScrollView`
  padding-horizontal: 30px;
`

const Title = styled.Text`
  color: ${colors.settingsHeader};
  padding-top: 70px;
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: 500;
`

export default function SettingsScreen({ navigation }) {
  const { goBack } = navigation
  return (
    <Container>
      <SettingsHeader onClick={() => goBack()} />
      <Content>
        <Title> Settings </Title>
        <SettingsButton text="Clock Type" image={chevron} />
        <SettingsButton text="Date Format" image={chevron} />
        <SettingsSwitch text="24-Hour Time" />
      </Content>
      <SettingsFooter />
    </Container>
  )
}
