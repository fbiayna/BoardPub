/* eslint-disable no-import-assign */
/* eslint-disable no-use-before-define */
/* eslint-disable react/display-name */
import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import LoginUser from '../../components/login/LoginUser'
import { render } from '@testing-library/react-native'
import { User } from '../../utils/interfaces'
import * as Firebase from 'firebase'
import * as Focus from '@react-navigation/native'

const buildStore = configureStore([thunk])
jest.mock('@react-navigation/native')

describe('LoginUser should be', () => {
  let user: User
  let logInExists: boolean

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
  })

  test('isFocused - false', () => {
    Focus.useIsFocused = jest.fn().mockReturnValue(false)

    const initialState = { userReducer: { user }, authReducer: { logInExists } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<LoginUser />, { wrapper })

    expect(getByTestId('loginUser')).toBeDefined()
  })

  test('firebaseUser - false', () => {
    Focus.useIsFocused = jest.fn().mockReturnValue(true)
    Firebase.auth = jest.fn().mockReturnValue({ onAuthStateChanged: jest.fn().mockReturnValue({}) })

    const initialState = { userReducer: { user }, authReducer: { logInExists } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<LoginUser />, { wrapper })

    expect(getByTestId('loginUser')).toBeDefined()
  })
})
