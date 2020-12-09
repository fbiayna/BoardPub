/* eslint-disable no-use-before-define */
import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import FavoritesMenu from '../FavoritesMenu'

const Stack = createStackNavigator()

export default function FavoritesNavigation () {
  return (
    <Stack.Navigator headerMode={'none'} screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
      <Stack.Screen name="favoritos" component={FavoritesMenu} />
    </Stack.Navigator>
  )
}
