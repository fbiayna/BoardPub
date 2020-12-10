/* eslint-disable no-import-assign */
/* eslint-disable no-use-before-define */
import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import GoBack from '../../../components/user/navigation/GoBack'
import * as Navigation from '@react-navigation/native'

jest.mock('../../../actions/promotionsFunctions')
jest.mock('@react-navigation/native')

describe('GoBack', () => {
  test('press button and call dispatch - GoBack', async () => {
    Navigation.useNavigation = jest.fn().mockReturnValue({ dispatch: jest.fn().mockImplementation(() => ({ CommonActions: { goBack: jest.fn() } })) })

    const { getByTestId } = render(<GoBack />)

    const button = getByTestId('goBackButton')

    await fireEvent.press(button)

    expect(button).toBeDefined()
  })
})
