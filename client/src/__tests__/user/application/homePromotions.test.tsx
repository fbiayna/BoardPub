/* eslint-disable no-use-before-define */
/* eslint-disable react/display-name */
import React from 'react'
import HomePromotionsList from '../../../components/user/HomePromotionsList'
import { render } from '@testing-library/react-native'

jest.mock('../../../actions/actionsFunctions')

describe('HomePromotionsList', () => {
  test('renders correctly - HomePromotionsList', () => {
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
    const { getByTestId } = render(<HomePromotionsList typePromotion={'menu'} promotions={promotions} />)

    expect(getByTestId('homePromotions')).toBeDefined()
  })
})
