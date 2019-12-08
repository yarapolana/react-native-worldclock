import React, { Component } from 'react'
import styled from 'styled-components/native'

import { phone, colors } from '../../constants/global'

import NavButton from '../NavButton'

import plus from '../../assets/images/icon-plus.png'
import edit from '../../assets/images/icon-edit.png'

const Container = styled.View`
  flex-direction: row;
  width: ${phone.width};
  height: 110px;
  padding-horizontal: 40px;
  padding-top: 43px;
  justify-content: space-between;
`

export default function Header() {
  return (
    <Container>
      <NavButton
        background={colors.primary}
        shadow={colors.primary}
        shadowOpacity={0.49}
        image={plus}
      />
      <NavButton
        background={colors.secondary}
        shadow={colors.accent}
        shadowOpacity={1}
        image={edit}
      />
    </Container>
  )
}
