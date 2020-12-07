import axios from 'axios'
import { hostUrl } from '../utils/hostUrl'
import actionTypes from './actionTypes'

function requestUserSuccess (user: object) {
  return {
    type: actionTypes.LOAD_USER,
    user
  }
}

function requestUserError (error: string) {
  return {
    type: actionTypes.LOAD_USER_ERROR,
    error
  }
}

export function loadUser (sub: any) {
  return async (dispatch: Function) => {
    console.log('load')
    try {
      const promotions = await axios.get(`${hostUrl()}/user`, { params: { sub } })
      console.log(promotions.data)
      dispatch(requestUserSuccess(promotions.data))
    } catch (error) {
      dispatch(requestUserError(error))
    }
  }
}

export function addAndLoadUser (user: any) {
  return async (dispatch: Function) => {
    const newUser = {
      admin: false,
      name: user.given_name,
      surname: user.family_name,
      email: user.email,
      photo: user.picture,
      sub: user.sub
    }
    try {
      const promotions = await axios.post(`${hostUrl()}/user`, { newUser })
      dispatch(requestUserSuccess(promotions.data))
    } catch (error) {
      dispatch(requestUserError(error))
    }
  }
}
