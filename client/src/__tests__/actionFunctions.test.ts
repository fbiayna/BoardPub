import axios from 'axios'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { requestPromotions } from '../actions/actionsFunctions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore()

jest.mock('axios')

describe('actionFunctions', () => {
  describe('requestPromotions - promise resolve', () => {
    const promoType = 'menu'
    beforeEach(async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve({ data: ['Skylab mola!'] }))
      await store.dispatch(requestPromotions(promoType))
    })

    test('should call axios', () => {
      expect(axios.get).toHaveBeenCalled()
    })
    test('should call axios just once', () => {
      expect(axios.get.mock.calls[0].length).toBe(2)
    })
  })

  describe('requestPromotions - promise rejected', () => {
    beforeEach(async () => {
      const promoType = 'menu'
      axios.get.mockImplementationOnce(() => Promise.reject(Error))
      await store.dispatch(requestPromotions(promoType))
    })

    test('should call axios', () => {
      expect(axios.get).toHaveBeenCalled()
    })
    test('should call axios just once', () => {
      expect(axios.get.mock.calls[0].length).toBe(2)
    })
  })
})
