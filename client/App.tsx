/* eslint-disable no-use-before-define */
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BoardPubNavigation from './src/components/user/navigation/BoardPubNavigation'
import LoginNavigator from './src/components/user/navigation/LoginNavigator'
import firebase from 'firebase'
import { firebaseConfig } from './src/firebase/config'

const store = configureStore({})
const Stack = createStackNavigator()

firebase.initializeApp(firebaseConfig)

export default function App () {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name={'login'} component={LoginNavigator}/>
        <Stack.Screen name={'application'} component={BoardPubNavigation}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}
