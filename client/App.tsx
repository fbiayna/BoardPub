/* eslint-disable no-use-before-define */
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomePromotionsMenu from './src/components/user/HomePromotionsMenu'
import DetailPromotion from './src/components/user/DetailPromotion'

const store = configureStore({})
const Stack = createStackNavigator()

export default function App () {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={HomePromotionsMenu}/>
        <Stack.Screen name="detail" component={DetailPromotion}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}
