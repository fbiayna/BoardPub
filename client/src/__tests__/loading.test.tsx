/* eslint-disable no-use-before-define */
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import React from 'react'
import Loading from '../components/loading/LoadingGif'
import renderer from 'react-test-renderer'

describe('Loading Component', () => {
  test('should be defined', () => {
    const store = configureStore({})
    store.dispatch = jest.fn()

    const loading = renderer.create(<Provider store={store} >
      <Loading /></Provider>)

    expect(loading).toMatchSnapshot()
  })
})
