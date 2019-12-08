import React, { Component } from 'react'
import styled from 'styled-components/native'

import Header from '../components/Header'
import Clock from '../components/Clock'
import Time from '../components/Clock/Time'

import { colors, clock } from '../constants/global'

const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${colors.background};
`

const Title = styled.Text`
  color: ${colors.clockTitle};
  font-size: 30px;
  padding-bottom: 10px;
`

export default function ClockScreen({ navigation }) {
  const [time, setTime] = React.useState(new Date())

  React.useEffect(() => {
    setInterval(handleUpdate, 1000)
  }, [])

  const handleUpdate = () => {
    setTime(new Date())
  }

  const h = time.getHours()
  const m = time.getMinutes()
  const s = time.getSeconds()

  return (
    <Container>
      <Header />
      <Clock />
      <Title>Reykjavík</Title>
      <Time
        time={`${h % 12}:${m < 10 ? `0${m}` : m}${h < 12 ? ' AM' : ' PM'}`}
      />
    </Container>
  )
}
