/* eslint-disable no-use-before-define */
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'
import DetailPromotion from './src/components/user/DetailPromotion'

const store = configureStore({})

export default function App () {
  return (
    <Provider store={store}>
      <DetailPromotion/>
    </Provider>
  )
}
