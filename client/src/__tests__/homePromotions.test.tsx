/* eslint-disable no-use-before-define */
/* eslint-disable react/display-name */
import React from 'react'
import HomePromotions from '../components/user/HomePromotions'
import { render } from '@testing-library/react-native'

jest.mock('../actions/actionsFunctions')

describe('HomePromotions', () => {
  test('renders correctly - HomePromotions', () => {
    const promotions = [
      {
        _id: '1',
        name: 'string',
        date: 'string',
        description: 'string',
        establishment: 'string',
        ubication: 'string',
        price: 'string',
        type: 'string'
      }]
    const { getByTestId } = render(<HomePromotions typePromotion={'menu'} promotions={promotions} />)

    expect(getByTestId('homePromotions')).toBeDefined()
  })
})
