/* eslint-disable no-use-before-define */
import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import Favorites from '../Favorites'

const Stack = createStackNavigator()

export default function MapsNavigation () {
  return (
    <Stack.Navigator headerMode={'none'} screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
        <Stack.Screen name="favorites" component={Favorites} />
    </Stack.Navigator>
  )
}
