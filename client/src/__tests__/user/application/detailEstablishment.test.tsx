/* eslint-disable no-import-assign */
/* eslint-disable no-use-before-define */
/* eslint-disable react/display-name */
import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import DetailEstablishment from '../../../components/user/DetailEstablishment'
import { render } from '@testing-library/react-native'
import { Establishment } from '../../../utils/interfaces'
import * as Route from '@react-navigation/native'

const buildStore = configureStore([thunk])
jest.mock('@react-navigation/native')

describe('DetailEstablishment', () => {
  let establishment: Establishment

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
    establishment = {
      _id: '1',
      name: 'Coders',
      ubication: 'Barcelona',
      city: 'Barcelona',
      photo: 'skylab.png',
      description: 'Skylab mola molt!',
      rating: '4.8'
    }
  })

  test('renders correctly - establishment in favorites list ', () => {
    Route.useRoute = jest.fn().mockReturnValue({ params: { id: '1' } })
    Route.useNavigation = jest.fn().mockReturnValue({ dispatch: jest.fn() })

    const initialState = { promotionsReducer: { establishment: { _id: 1 } } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<DetailEstablishment />, { wrapper })

    expect(getByTestId('detail-establishment')).toBeDefined()
  })

  test('renders correctly - establishment, user - null', () => {
    Route.useRoute = jest.fn().mockReturnValue({ params: { id: '1' } })
    Route.useNavigation = jest.fn().mockReturnValue({ dispatch: jest.fn() })

    const initialState = { promotionsReducer: { establishment } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<DetailEstablishment />, { wrapper })

    expect(getByTestId('detail-establishment')).toBeDefined()
  })
})
