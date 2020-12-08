/* eslint-disable no-use-before-define */
/* eslint-disable react/display-name */
import React from 'react'
import HomePromotionsList from '../../../components/user/HomePromotionsList'
import { render, fireEvent } from '@testing-library/react-native'

jest.mock('../../../actions/promotionsFunctions')
jest.mock('@react-navigation/native')

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
  test('Login button should be press', async () => {
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
    const navigation = { navigate: jest.fn() }

    const { getByTestId } = render(<HomePromotionsList typePromotion={'menu'} promotions={promotions} navigation={navigation}/>)
    const button = getByTestId('promotion')

    await fireEvent.press(button)

    expect(navigation.navigate).toHaveBeenCalled()
  })
})
