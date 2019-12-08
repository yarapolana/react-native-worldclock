import React from 'react'
import styled from 'styled-components/native'

import Routes from './routes'
import { colors } from './constants/global'

const Container = styled.View`
  flex: 1;
  background: ${colors.background};
`

export default function App() {
  return (
    <Container>
      <Routes />
    </Container>
  )
}
