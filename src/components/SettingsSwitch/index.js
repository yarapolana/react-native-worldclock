import React from 'react'
import styled from 'styled-components/native'
import { Switch } from 'react-native'
import { colors } from '../../constants/global'

const Container = styled.View`
  background: ${colors.settingsButton};
  flex-direction: row;
  justify-content: space-between;
  border-radius: 12px;
  margin-bottom: 5px;
  margin-top: 5px;
`

const Text = styled.Text`
  font-size: 18px;
  color: black;
  padding: 28px;
`

const Switcher = styled.Switch`
  align-self: center;
  margin-right: 20px;
`

class Button extends React.Component {
  state = { switchValue: true }

  toggleSwitch = value => {
    this.setState({ switchValue: value })
  }

  render() {
    return (
      <Container>
        <Text>{this.props.text}</Text>
        <Switcher
          onValueChange={this.toggleSwitch}
          value={this.state.switchValue}
        />
      </Container>
    )
  }
}

export default Button
