/* eslint-disable no-use-before-define */
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'
import { NavigationContainer } from '@react-navigation/native'
import BoardPubNavigation from './src/components/user/navigation/BoardPubNavigation'

const store = configureStore({})

export default function App () {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <BoardPubNavigation/>
    </NavigationContainer>
    </Provider>
  )
}
