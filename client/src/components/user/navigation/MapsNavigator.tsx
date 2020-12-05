/* eslint-disable no-use-before-define */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Favorites from '../Favorites'

const Stack = createStackNavigator()

export default function MapsNavigator () {
  return (
    <Stack.Navigator headerMode={'none'} >
        <Stack.Screen name="favorites" component={Favorites} />
    </Stack.Navigator>
  )
}
