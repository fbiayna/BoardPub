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
import firebase from 'firebase'
import * as Focus from '@react-navigation/native'

const buildStore = configureStore([thunk])
jest.mock('@react-navigation/native')

describe('Loading', () => {
  let user: User

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
  })

  test('renders correctly - establishment in favorites list - isFocused false ', () => {
    Focus.useIsFocused = jest.fn().mockReturnValue(false)

    const initialState = { loginReducer: { user } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<Loading />, { wrapper })

    expect(getByTestId('loading')).toBeDefined()
  })

  test('renders correctly - establishment in favorites list - isFocused true ', () => {
    Focus.useIsFocused = jest.fn().mockReturnValue(true)

    const initialState = { loginReducer: { user } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<Loading />, { wrapper })

    expect(getByTestId('loading')).toBeDefined()
  })
})
