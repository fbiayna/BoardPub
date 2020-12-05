/* eslint-disable no-use-before-define */
/* eslint-disable react/display-name */
import React from 'react'
import Favorites from '../../../components/user/Favorites'
import { render } from '@testing-library/react-native'

jest.mock('../../../actions/actionsFunctions')

describe('Favorites', () => {
  test('renders correctly - Favorites', () => {
    const { getByTestId } = render(<Favorites />)

    expect(getByTestId('homePromotions')).toBeDefined()
  })
})
