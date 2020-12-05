/* eslint-disable no-use-before-define */
import React from 'react'
import { render } from '@testing-library/react-native'
import GoBack from '../../../components/user/navigation/GoBack'

jest.mock('../../../actions/actionsFunctions')
jest.mock('@react-navigation/native')

describe('GoBack', () => {
  test('renders correctly - GoBack', () => {
    const { getByTestId } = render(<GoBack />)

    expect(getByTestId('goBack')).toBeDefined()
  })
})
