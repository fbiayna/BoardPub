/* eslint-disable react/display-name */
/* eslint-disable no-use-before-define */
import React, { ReactElement } from 'react'
import { render } from '@testing-library/react-native'
import BoardPubNavigation from '../../../components/user/navigation/BoardPubNavigation'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { User } from 'utils/interfaces'
import { act } from 'react-test-renderer'

const buildStore = configureStore([thunk])

describe('User Navigation Component', () => {
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

  test('should be defined', async () => {
    const initialState = { userReducer: { user } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<BoardPubNavigation />, { wrapper })

    const view = getByTestId('loading')

    await act(async () => { expect(view).toBeDefined() })
  })
})
