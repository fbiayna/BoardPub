/* eslint-disable no-import-assign */
/* eslint-disable no-use-before-define */
/* eslint-disable react/display-name */
import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import LoginUser from '../../components/login/LoginUser'
import { render, fireEvent } from '@testing-library/react-native'
import { User } from '../../utils/interfaces'
import * as Focus from '@react-navigation/native'

const buildStore = configureStore([thunk])
jest.mock('@react-navigation/native')

describe('LoginUser should be', () => {
  let user: User
  let logInExists: boolean
  let logInState: boolean

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
    logInExists = true
    logInState = true
  })

  test('isFocused - false - logInExists', () => {
    Focus.useIsFocused = jest.fn().mockReturnValue(false)

    const initialState = { userReducer: { user }, authReducer: { logInExists } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<LoginUser />, { wrapper })

    expect(getByTestId('loginUser')).toBeDefined()
  })

  test('isFocused - true - logInExists undefined, isLogging true', () => {
    Focus.useIsFocused = jest.fn().mockReturnValue(true)

    const initialState = { userReducer: { user }, authReducer: { logInExists: undefined, logInState: true } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<LoginUser />, { wrapper })

    expect(getByTestId('loginUser')).toBeDefined()
  })

  test('Sign In button - is Press', async () => {
    Focus.useIsFocused = jest.fn().mockReturnValue(true)

    const initialState = { userReducer: { user }, authReducer: { logInExists: undefined } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<LoginUser />, { wrapper })

    const button = getByTestId('signIn-button')

    await fireEvent.press(button)

    expect(button).toBeDefined()
  })
})
