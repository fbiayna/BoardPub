/* eslint-disable no-use-before-define */
import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import Profile from '../Profile'

const Stack = createStackNavigator()

export default function UserNavigator () {
  return (
    <Stack.Navigator headerMode={'none'} screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
        <Stack.Screen name="perfil" component={Profile} />
    </Stack.Navigator>
  )
}
