/* eslint-disable no-use-before-define */
import React from 'react'
import LoginUser from '../../components/login/LoginUser'
import { render } from '@testing-library/react-native'

describe('Login Component', () => {
  test('should be defined', () => {
    const { getByTestId } = render(<LoginUser />)

    expect(getByTestId('loginUser')).toBeDefined()
  })
})
