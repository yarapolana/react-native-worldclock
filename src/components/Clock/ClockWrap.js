import React, { Component } from 'react'
import styled from 'styled-components/native'
import { colors, shadow, clock } from '../../constants/global'

import dots from '../../assets/images/clock-dots.png'

const Container = styled.View`
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${clock.size};
  height: ${clock.size};
`

const ClockShadow = styled.View`
  background: ${colors.clockBackground};
  shadow-color: ${shadow.main};
  shadow-offset: -38px 0;
  shadow-opacity: 0.41;
  shadow-radius: 54px;
  position: absolute;
  width: ${clock.size};
  height: ${clock.size};
  border-radius: ${clock.size / 2};
`

const ClockShadowDark = styled.View`
  background: ${colors.clockBackground};
  shadow-color: ${shadow.dark};
  shadow-offset: 50px 0;
  shadow-opacity: 0.55;
  shadow-radius: 54px;
  position: absolute;
  width: ${clock.size};
  height: ${clock.size};
  border-radius: ${clock.size / 2};
`

const ClockShadowWhite = styled.View`
  background: ${colors.clockBackground};
  shadow-color: ${shadow.main};
  shadow-offset: -11px 0;
  shadow-opacity: 1;
  shadow-radius: 44px;
  position: absolute;
  width: ${clock.size};
  height: ${clock.size};
  border-radius: ${clock.size / 2};
`

const ClockShadowColor = styled.View`
  background: ${colors.clockBackground};
  shadow-color: ${shadow.color};
  shadow-offset: 10px 0;
  shadow-opacity: 1;
  shadow-radius: 44px;
  position: absolute;
  border: 1px solid #e5ecfb;
  width: ${clock.size};
  height: ${clock.size};
  border-radius: ${clock.size / 2};
`

const ClockDots = styled.Image`
  width: ${clock.size - 40};
  height: ${clock.size - 40};
  position: absolute;
`

const ClockFace = styled.View`
  background: ${colors.clockFace};
  width: ${clock.size - 80};
  height: ${clock.size - 80};
  border-radius: ${(clock.size - 80) / 2};
  shadow-color: ${shadow.color};
  shadow-offset: 4px 0;
  shadow-opacity: 0.35;
  shadow-radius: 10px;
  position: absolute;
`

const ClockPin = styled.View`
  background: ${colors.primary};
  border-radius: 6px;
  width: 12px;
  height: 12px;
`

const ClockWrap = props => {
  const { children } = props
  return (
    <Container>
      <ClockShadow />
      <ClockShadowDark />
      <ClockShadowWhite />
      <ClockShadowColor />
      <ClockDots source={dots} />
      <ClockFace />
      {children}
      <ClockPin />
    </Container>
  )
}

export default ClockWrap
