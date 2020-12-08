/* eslint-disable no-use-before-define */
/* eslint-disable react/display-name */
import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import DetailPromotion from '../../../components/user/DetailPromotion'
import { render } from '@testing-library/react-native'

jest.mock('../../../actions/promotionsFunctions')
jest.mock('@react-navigation/native')

const buildStore = configureStore([thunk])

describe('DetailPromotion', () => {
  const wrapperFactory = (wrapperInitialState: any) => {
    const store = buildStore(wrapperInitialState)
    store.dispatch = jest.fn()

    return ({ children }:{children: ReactElement}): ReactElement => (
      <Provider store={store}>
        {children}
      </Provider>
    )
  }

  test('renders correctly - promotion===null', () => {
    const initialState = { boardPubReducer: { id: '1', promotion: null } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<DetailPromotion />, { wrapper })

    expect(getByTestId('detail')).toBeDefined()
  })
  test('renders correctly - promotion==={}', () => {
    const initialState = { boardPubReducer: { id: '1', promotion: {} } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<DetailPromotion />, { wrapper })

    expect(getByTestId('detail')).toBeDefined()
  })
})
