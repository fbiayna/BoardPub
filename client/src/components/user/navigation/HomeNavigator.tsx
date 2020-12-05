/* eslint-disable no-use-before-define */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomePromotionsMenu from '../HomePromotionsMenu'
import DetailPromotion from '../DetailPromotion'

const Stack = createStackNavigator()

export default function HomeNavigator () {
  return (
    <Stack.Navigator headerMode={'none'} >
        <Stack.Screen name="promotions" component={HomePromotionsMenu} />
        <Stack.Screen name="detail" component={DetailPromotion}/>
    </Stack.Navigator>
  )
}
