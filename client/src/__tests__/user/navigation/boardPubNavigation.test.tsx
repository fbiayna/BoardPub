/* eslint-disable no-use-before-define */
/* eslint-disable react/display-name */
import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import BoardPubNavigation from '../../../components/user/navigation/ApplicationNavigation'
import { render } from '@testing-library/react-native'
import { Reducer } from '../../../utils/interfaces'

jest.mock('../../../actions/actionsFunctions')
jest.mock('@react-navigation/bottom-tabs')

const buildStore = configureStore([thunk])

describe('BoardPubNavigation', () => {
  let promotions: Reducer

  const wrapperFactory = (wrapperInitialState: any) => {
    const store = buildStore(wrapperInitialState)
    store.dispatch = jest.fn()

    return ({ children }:{children: ReactElement}): ReactElement => (
      <Provider store={store}>
        {children}
      </Provider>
    )
  }

  test('renders correctly - promotions===null', () => {
    const initialState = { boardPubReducer: { promotions } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<BoardPubNavigation />, { wrapper })

    expect(getByTestId('list-promotions')).toBeDefined()
  })
})
