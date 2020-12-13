import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { checkIfLoggedIn } from '../../actions/authFunctions'
import firebase from 'firebase'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore()

jest.mock('firebase')

describe('AuthFunctions', () => {
  describe('checkIfLoggedIn - firebaseUser', () => {
    beforeEach(() => {
      firebase.auth = jest.fn().mockReturnValue({
        onAuthStateChanged: jest.fn().mockImplementationOnce(
          (firebaseUser) => { firebaseUser({ providerData: [{ uid: 1 }] }) })
      })
      store.dispatch(checkIfLoggedIn())
    })

    test('should call firebase.auth', () => {
      expect(firebase.auth).toHaveBeenCalled()
    })
  })

  describe('checkIfLoggedIn - !firebaseUser', () => {
    beforeEach(() => {
      firebase.auth = jest.fn().mockReturnValue({
        onAuthStateChanged: jest.fn()
      })
      store.dispatch(checkIfLoggedIn())
    })

    test('should call firebase.auth', () => {
      expect(firebase.auth).toHaveBeenCalled()
    })
  })
})
