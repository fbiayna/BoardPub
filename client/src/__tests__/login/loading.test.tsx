/* eslint-disable no-import-assign */
/* eslint-disable no-use-before-define */
/* eslint-disable react/display-name */
import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import Loading from '../../components/login/Loading'
import { render } from '@testing-library/react-native'
import { User } from '../../utils/interfaces'
import * as Focus from '@react-navigation/native'

const buildStore = configureStore([thunk])
jest.mock('@react-navigation/native')

describe('Loading', () => {
  let user: User
  let logInExists: string

  const wrapperFactory = (wrapperInitialState: any) => {
    const store = buildStore(wrapperInitialState)
    store.dispatch = jest.fn()

    return ({ children }:{children: ReactElement}): ReactElement => (
      <Provider store={store}>
        {children}
      </Provider>
    )
  }

  beforeEach(() => {
    user = {
      _id: 'Skylab',
      admin: false,
      name: 'Ferran',
      surname: 'Biayna',
      email: 'skylab@correo',
      photo: 'skylab.png',
      sub: '123'
    }
    logInExists = 'Skylab'
  })

  test('renders correctly  - isFocused false - logInExists', () => {
    Focus.useIsFocused = jest.fn().mockReturnValue(false)
    Focus.reset = jest.fn().mockReturnValue({
      index: 0,
      routes: [{ name: 'loginStart' }]
    })

    const initialState = { userReducer: { user }, authReducer: { logInExists } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<Loading />, { wrapper })

    expect(getByTestId('loading')).toBeDefined()
  })

  test('renders correctly - isFocused true - logInExists ', () => {
    Focus.useIsFocused = jest.fn().mockReturnValue(true)
    Focus.reset = jest.fn().mockReturnValue({
      index: 0,
      routes: [{ name: 'loginStart' }]
    })

    const initialState = { userReducer: { user }, authReducer: { logInExists } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<Loading />, { wrapper })

    expect(getByTestId('loading')).toBeDefined()
  })

  test('renders correctly - isFocused true - logInExists undefined ', () => {
    Focus.useIsFocused = jest.fn().mockReturnValue(true)
    Focus.reset = jest.fn().mockReturnValue({
      index: 0,
      routes: [{ name: 'loginStart' }]
    })

    const initialState = { userReducer: { user }, authReducer: { logInExists: undefined } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<Loading />, { wrapper })

    expect(getByTestId('loading')).toBeDefined()
  })

  test('renders correctly - isFocused true - logInExists false ', () => {
    Focus.useIsFocused = jest.fn().mockReturnValue(true)
    Focus.reset = jest.fn().mockReturnValue({
      index: 0,
      routes: [{ name: 'loginStart' }]
    })

    const initialState = { userReducer: { user }, authReducer: { logInExists: false } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<Loading />, { wrapper })

    expect(getByTestId('loading')).toBeDefined()
  })
})
