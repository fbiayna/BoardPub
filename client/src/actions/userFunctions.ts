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

export function getUser (sub: string) {
  return async (dispatch: Function) => {
    try {
      const user = await axios.get(`${hostUrl()}/user`, { params: { sub } })
      dispatch(requestUserSuccess(user.data))
    } catch (error) {
      dispatch(requestUserError(error))
    }
  }
}

export function addAndGetUser (user: any) {
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
      const user = await axios.post(`${hostUrl()}/user`, { newUser })
      dispatch(requestUserSuccess(user.data))
    } catch (error) {
      dispatch(requestUserError(error))
    }
  }
}
