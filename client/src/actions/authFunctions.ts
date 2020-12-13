import firebase from 'firebase'
import actionAuthTypes from './actionAuthTypes'
import { getUser } from './userFunctions'

function checkIfLoggedInSuccess (exists: boolean) {
  return {
    type: actionAuthTypes.CHECK_LOGIN_SUCCESS,
    logInExists: exists
  }
}

function checkIfLoggedInSuccessError (noExists: boolean) {
  return {
    type: actionAuthTypes.CHECK_LOGIN_ERROR,
    logInExists: noExists
  }
}

export function checkIfLoggedIn () {
  return (dispatch: Function) => {
    firebase.auth().onAuthStateChanged((firebaseUser:any) => {
      if (firebaseUser) {
        const { providerData } = firebaseUser
        dispatch(getUser(providerData[0].uid))
        dispatch(checkIfLoggedInSuccess(true))
      } else {
        dispatch(checkIfLoggedInSuccessError(false))
      }
    })
  }
}
