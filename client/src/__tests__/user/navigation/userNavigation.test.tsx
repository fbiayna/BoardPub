/* eslint-disable no-use-before-define */
import React from 'react'
import { render } from '@testing-library/react-native'
import UserNavigation from '../../../components/user/navigation/UserNavigation'

describe('User Navigation Component', () => {
  test('should be defined', () => {
    const { getByTestId } = render(<UserNavigation />)
    expect(getByTestId('loading')).toBeDefined()
  })
})
