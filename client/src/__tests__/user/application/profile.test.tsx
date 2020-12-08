/* eslint-disable no-use-before-define */
/* eslint-disable react/display-name */
import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import Profile from '../../../components/user/Profile'
import { render, fireEvent } from '@testing-library/react-native'
import firebase from 'firebase'

jest.mock('../../../actions/userFunctions')
jest.mock('@react-navigation/native')
jest.mock('firebase')

const buildStore = configureStore([thunk])

describe('Profile', () => {
  const wrapperFactory = (wrapperInitialState: any) => {
    const store = buildStore(wrapperInitialState)
    store.dispatch = jest.fn()

    return ({ children }:{children: ReactElement}): ReactElement => (
        <Provider store={store}>
            {children}
        </Provider>
    )
  }

  test('renders - user - null', () => {
    const initialState = { loginReducer: { user: null } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<Profile />, { wrapper })

    expect(getByTestId('list-profile')).toBeDefined()
  })

  test('renders null - user', () => {
    const initialState = { loginReducer: { user: { admin: true, favorites: ['1', '2'] } } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<Profile />, { wrapper })

    expect(getByTestId('list-profile')).toBeDefined()
  })

  test('button should be define', async () => {
    firebase.auth = jest.fn().mockImplementation(() => ({ signOut: jest.fn() }))
    const initialState = { loginReducer: { user: '1' } }
    const wrapper = wrapperFactory(initialState)

    const { getByTestId } = render(<Profile />, { wrapper })

    const button = getByTestId('signOut')

    await fireEvent.press(button)

    expect(firebase.auth).toHaveBeenCalled()
  })
})
