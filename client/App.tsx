/* eslint-disable no-use-before-define */
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'
import firebase from 'firebase'
import { firebaseConfig } from './src/firebase/config'
import BoardPubNavigation from './src/components/user/navigation/BoardPubNavigation'

const store = configureStore({})

firebase.initializeApp(firebaseConfig)

export default function App () {
  return (
    <Provider store={store}>
      <BoardPubNavigation/>
    </Provider>
  )
}
