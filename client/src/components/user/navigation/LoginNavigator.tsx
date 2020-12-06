/* eslint-disable no-use-before-define */
import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import Login from '../../login/Login'
import LoginUser from '../../login/LoginUser'

const Stack = createStackNavigator()

export default function LoginNavigator () {
  return (
    <Stack.Navigator headerMode={'none'} screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} >
        <Stack.Screen name="loginStart" component={Login} />
        <Stack.Screen name="loginUser" component={LoginUser}/>
    </Stack.Navigator>
  )
}
