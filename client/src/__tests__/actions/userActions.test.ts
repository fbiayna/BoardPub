import axios from 'axios'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { getUser, addAndGetUser, newUserState } from '../../actions/userFunctions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore()

jest.mock('axios')

describe('actionFunctions', () => {
  describe('getUser - promise resolve', () => {
    beforeEach(async () => {
      const sub = '1'
      axios.get.mockImplementationOnce(() => Promise.resolve({ data: ['Skylab mola!'] }))
      await store.dispatch(getUser(sub))
    })

    test('should call axios', () => {
      expect(axios.get).toHaveBeenCalled()
    })
    test('should call axios just once', () => {
      expect(axios.get.mock.calls[0].length).toBe(2)
    })
  })

  describe('getUser - promise rejected', () => {
    beforeEach(async () => {
      const sub = '1'
      axios.get.mockImplementationOnce(() => Promise.reject(Error))
      await store.dispatch(getUser(sub))
    })

    test('should call axios', () => {
      expect(axios.get).toHaveBeenCalled()
    })
    test('should call axios just once', () => {
      expect(axios.get.mock.calls[0].length).toBe(2)
    })
  })
  describe('addAndGetUser - promise resolve', () => {
    const user = {
      given_name: 'ferran',
      family_name: 'biayna',
      email: 'ferranbiayna',
      photo: '123.png',
      sub: '12345678'
    }
    beforeEach(async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve({ data: ['Skylab mola!'] }))
      await store.dispatch(addAndGetUser(user))
    })

    test('should call axios', () => {
      expect(axios.get).toHaveBeenCalled()
    })
    test('should call axios just once', () => {
      expect(axios.get.mock.calls[0].length).toBe(2)
    })
  })

  describe('addAndGetUser - promise rejected', () => {
    beforeEach(async () => {
      const user = {
        given_name: 'ferran',
        family_name: 'biayna',
        email: 'ferranbiayna',
        photo: '123.png',
        sub: '12345678'
      }
      axios.get.mockImplementationOnce(() => Promise.reject(Error))
      await store.dispatch(addAndGetUser(user))
    })

    test('should call axios', () => {
      expect(axios.get).toHaveBeenCalled()
    })
    test('should call axios just once', () => {
      expect(axios.get.mock.calls[0].length).toBe(2)
    })
  })
})
