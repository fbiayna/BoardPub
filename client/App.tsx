/* eslint-disable no-use-before-define */
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'
// import HomePromotionsMenu from './src/components/user/HomePromotionsMenu'
import Login from './src/components/login/Login'

const store = configureStore({})

export default function App () {
  return (
    <Provider store={store}>
      <Login/>
    </Provider>
  )
}
