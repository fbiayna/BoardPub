/* eslint-disable no-use-before-define */
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'
import HomePromotionsMenu from './src/components/user/HomePromotionsMenu'

const store = configureStore({})

export default function App () {
  return (
    <Provider store={store}>
      <HomePromotionsMenu/>
    </Provider>
  )
}
