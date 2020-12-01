/* eslint-disable no-use-before-define */
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import React from 'react'
import renderer from 'react-test-renderer'
import Login from '../components/login/Login'

describe('Login Component', () => {
  test('should be defined', () => {
    const store = configureStore({})
    store.dispatch = jest.fn()

    const login = renderer.create(<Provider store={store} >
      <Login /></Provider>)

    expect(login).toMatchSnapshot()
  })
})
