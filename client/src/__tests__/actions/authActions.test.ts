import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { checkIfLoggedIn, signInWithGoogleAsync } from '../../actions/authFunctions'
import * as Google from 'expo-google-app-auth'
import firebase from 'firebase'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore()

jest.mock('firebase')
jest.mock('expo-google-app-auth')

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

  describe('signInWithGoogleAsync - result type success', () => {
    beforeEach(async () => {
      Google.logInAsync.mockImplementationOnce(() => Promise.resolve({ type: 'success' }))
      await store.dispatch(signInWithGoogleAsync())
    })

    test('should call firebase.auth', () => {
      expect(Google.logInAsync).toHaveBeenCalled()
    })
  })

  describe('signInWithGoogleAsync - result type other', () => {
    beforeEach(async () => {
      Google.logInAsync.mockImplementationOnce(() => Promise.resolve({ type: 'other' }))
      await store.dispatch(signInWithGoogleAsync())
    })

    test('should call firebase.auth', () => {
      expect(Google.logInAsync).toHaveBeenCalled()
    })
  })

  describe('signInWithGoogleAsync - result error', () => {
    beforeEach(async () => {
      Google.logInAsync.mockImplementationOnce(() => Promise.reject(Error))
      await store.dispatch(signInWithGoogleAsync())
    })

    test('should call firebase.auth', () => {
      expect(Google.logInAsync).toHaveBeenCalled()
    })
  })
})
