/* eslint-disable no-use-before-define */
import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import GoBack from '../../../components/user/navigation/GoBack'
import { CommonActions, useNavigation } from '@react-navigation/native'

jest.mock('../../../actions/promotionsFunctions')
jest.mock('@react-navigation/native')

describe('GoBack', () => {
  test('renders correctly - GoBack', () => {
    const { getByTestId } = render(<GoBack />)

    expect(getByTestId('goBack')).toBeDefined()
  })

  test('renders correctly - GoBack', async () => {
    const nav = useNavigation()
    nav.dispatch = jest.fn().mockImplementation(() => ({ CommonActions: { goBack: jest.fn() } }))

    const { getByTestId } = render(<GoBack />)

    const button = getByTestId('goBackButton')

    await fireEvent.press(button)

    expect(CommonActions.goBack).toHaveBeenCalled()
  })
})
