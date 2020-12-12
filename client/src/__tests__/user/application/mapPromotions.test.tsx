/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable react/display-name */
import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import MapPromotions from '../../../components/user/MapPromotions'
import { render, fireEvent } from '@testing-library/react-native'
import { HomeReducer } from '../../../utils/interfaces'

jest.mock('@react-navigation/native')

const buildStore = configureStore([thunk])

describe('MapPromotions', () => {
  let promotions: HomeReducer
  let latitude: HomeReducer
  let longitude: HomeReducer
  let city: HomeReducer

  const wrapperFactory = (wrapperInitialState: any) => {
    const store = buildStore(wrapperInitialState)
    store.dispatch = jest.fn()

    return ({ children }:{children: ReactElement}): ReactElement => (
      <Provider store={store}>
        {children}
      </Provider>
    )
  }

  test('renders correctly - promotions null', () => {
    const initialState = { boardPubReducer: { promotions }, locationReducer: { latitude, longitude, city } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<MapPromotions />, { wrapper })

    expect(getByTestId('map-promotions')).toBeDefined()
  })
  test('renders correctly - promotions no null - latitude and longitude}', async () => {
    const initialState = { boardPubReducer: { promotions: [{ establishment: { coords: { latitude: 1, longitude: 1 } } }] }, locationReducer: { latitude: 1, longitude: 1, city: 'Barcelona' } }
    const wrapper = wrapperFactory(initialState)
    const navigation = { navigate: jest.fn() }

    const { getByTestId } = render(<MapPromotions />, { wrapper })

    const button = getByTestId('detailMap')

    await fireEvent.press(button)

    expect(button).toBeDefined()
  })
})
