/* eslint-disable no-import-assign */
/* eslint-disable no-use-before-define */
/* eslint-disable react/display-name */
import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import DetailPromotion from '../../../components/user/DetailPromotion'
import { render, fireEvent } from '@testing-library/react-native'
import { Promotion, User } from '../../../utils/interfaces'
import * as Nav from '@react-navigation/native'

const buildStore = configureStore([thunk])
jest.mock('@react-navigation/native')

describe('DetailPromotion', () => {
  let promotion: Promotion
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
    promotion = {
      _id: 'Skylab',
      name: 'Pizza',
      date: 'Jue 10 Dic 2020',
      description: 'Skylab mola',
      establishment: {
        _id: 'Skylab',
        name: 'Coders',
        ubication: 'Barcelona',
        city: 'Barcelona',
        photo: 'Skylab.png',
        description: 'Skylab mola',
        rating: '4'
      },
      ubication: 'Barcelona',
      price: '123',
      type: 'drink'
    }
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

  test('renders correctly - establishment in favorites list ', () => {
    Nav.useIsFocused = jest.fn().mockReturnValue(false)
    Nav.useRoute = jest.fn().mockReturnValue({ params: { id: '1' } })
    Nav.useNavigation = jest.fn().mockReturnValue({ dispatch: jest.fn() })

    const initialState = { promotionsReducer: { promotion: { _id: '1', establishment: { _id: '1' } } }, userReducer: { user: { favorites: [{ _id: '1' }] } } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<DetailPromotion />, { wrapper })

    expect(getByTestId('detail')).toBeDefined()
  })

  test('renders correctly - establishment not in favorites list - should press button add and call the function inside', async () => {
    Nav.useIsFocused = jest.fn().mockReturnValue(true)
    Nav.useRoute = jest.fn().mockReturnValue({ params: { id: '1' } })
    Nav.useNavigation = jest.fn().mockReturnValue({ dispatch: jest.fn() })

    const initialState = { promotionsReducer: { promotion: { _id: '1', establishment: { _id: '2' } } }, userReducer: { user: { favorites: [{ _id: '1' }] } } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<DetailPromotion />, { wrapper })

    const button = getByTestId('addFavorite')

    await fireEvent.press(button)

    expect(button).toBeDefined()
  })

  test('renders correctly - promotions, user - null', () => {
    Nav.useRoute = jest.fn().mockReturnValue({ params: { id: '1' } })
    Nav.useNavigation = jest.fn().mockReturnValue({ dispatch: jest.fn() })

    const initialState = { promotionsReducer: { promotion }, userReducer: { user } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<DetailPromotion />, { wrapper })

    expect(getByTestId('detail')).toBeDefined()
  })
})
