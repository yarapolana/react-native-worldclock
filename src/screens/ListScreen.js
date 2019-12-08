import React, { Component } from 'react'
import styled from 'styled-components/native'

import Header from '../components/Header'
import ClockSmall from '../components/Clock/ClockSmall'
import Time from '../components/Clock/Time'

import { colors, phone } from '../constants/global'

const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${colors.background};
`

const Title = styled.Text`
  color: black;
  font-size: 30px;
`

const ListItem = styled.View`
  width: ${phone.width};
  height: 110px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1.1px;
  border-style: solid;
  border-bottom-color: #ccd1da;
`

const TextWrap = styled.View`
  flex-direction: column;
`

const ListContent = styled.View`
  justify-content: space-between;
  flex-direction: row;
  flex: 1;
`

const ListClock = styled.View`
  weight: 70px;
  height: 70px;
`

const ListZone = styled.Text`
  font-size: 26px;
`

const ListTime = styled.Text`
  font-size: 20px;
`

const ListDate = styled.Text`
  font-size: 20px;
  margin-right: 20px;
`

export default function ListScreen() {
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
      <ListItem>
        <ClockSmall />
        <ListContent>
          <TextWrap>
            <ListZone>Paris</ListZone>
            <ListTime>
              {`${h % 12}:${m < 10 ? `0${m}` : m}${h < 12 ? ' AM' : ' PM'}`}
            </ListTime>
          </TextWrap>
          <ListDate>asd</ListDate>
        </ListContent>
      </ListItem>
      <Title> local time </Title>
    </Container>
  )
}
