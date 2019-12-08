import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
// import { createStackNavigator } from 'react-navigation-stack'

import styled from 'styled-components/native'

// import Header from './components/Header'
// import TabNavigation from './components/TabNavigation'

import ClockScreen from './screens/ClockScreen'
import ListScreen from './screens/ListScreen'
import SettingsScreen from './screens/SettingsScreen'
// import TestScreen from './screens/TestScreen'

import clock from './assets/images/icon-alarm.png'
import list from './assets/images/icon-list.png'
import settings from './assets/images/icon-settings.png'

const Icon = styled.Image`
  width: 35px;
  height: 35px;
  margin-bottom: 10px;
  opacity: ${props => props.color};
`

const TabNavigator = createBottomTabNavigator(
  {
    CLOCK: {
      screen: ClockScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon source={clock} color={`${focused ? 1 : 0.25}`} />
        ),
      }),
    },
    LIST: {
      screen: ListScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon source={list} color={`${focused ? 1 : 0.25}`} />
        ),
      }),
    },
    SETTINGS: {
      screen: SettingsScreen,
      navigationOptions: ({ navigation }) => ({
        header: null,
        tabBarVisible: false,
        tabBarIcon: ({ focused }) => (
          <Icon source={settings} color={`${focused ? 1 : 0.25}`} />
        ),
      }),
    },
  },
  {
    initialRouteName: 'LIST',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      activeTintColor: 'black', // active icon color
      inactiveTintColor: 'rgba(0,0,0,0.25)', // inactive icon color
      labelStyle: { fontSize: 14, fontWeight: 'bold' },
      indicatorStyle: {
        backgroundColor: '#000',
        borderBottomColor: '000',
        borderBottomWidth: 2,
      },
      style: {
        backgroundColor: 'transparent', // TabBar background
        borderTopColor: 'transparent',
      },
    },
  },
)

export default createAppContainer(TabNavigator)
