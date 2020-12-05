/* eslint-disable no-use-before-define */
import React from 'react'
import Login from '../../components/login/Login'
import { render } from '@testing-library/react-native'

describe('Login Component', () => {
  test('should be defined', () => {
    const { getByTestId } = render(<Login />)

    expect(getByTestId('login')).toBeDefined()
  })
})
