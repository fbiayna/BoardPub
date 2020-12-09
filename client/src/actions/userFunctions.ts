import axios from 'axios'
import { User } from 'utils/interfaces'
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

function requestAddAndLoadUserSuccess (user: object) {
  return {
    type: actionTypes.ADD_AND_LOAD_USER,
    user
  }
}

function requestAddAndLoadUserError (error: string) {
  return {
    type: actionTypes.ADD_AND_LOAD_USER_ERROR,
    error
  }
}

function requestAddFavoritesSuccess (userUpdated: User) {
  return {
    type: actionTypes.ADD_FAVORITE,
    userUpdated
  }
}

function requestAddFavoritesError (error: string) {
  return {
    type: actionTypes.ADD_FAVORITE_ERROR,
    error
  }
}

function requestDeleteFavoriteSuccess (favorite: User) {
  return {
    type: actionTypes.DELETE_FAVORITE,
    favorite
  }
}

function requestDeleteFavoriteError (error: string) {
  return {
    type: actionTypes.DELETE_FAVORITE_ERROR,
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
      dispatch(requestAddAndLoadUserSuccess(user.data))
    } catch (error) {
      dispatch(requestAddAndLoadUserError(error))
    }
  }
}

export function addFavorite (user: User, establishmentId: string) {
  return async (dispatch: Function) => {
    try {
      const userUpdated = await axios.put(`${hostUrl()}/user`, { user, establishmentId })
      console.log(userUpdated.data)
      dispatch(requestAddFavoritesSuccess(userUpdated.data))
    } catch (error) {
      dispatch(requestAddFavoritesError(error))
    }
  }
}

export function deleteFavorite (establishmentId: string) {
  return async (dispatch: Function) => {
    try {
      const deletedFavorite = await axios.delete(`${hostUrl()}/user`, { data: { establishmentId } })
      dispatch(requestDeleteFavoriteSuccess(deletedFavorite.data))
    } catch (error) {
      dispatch(requestDeleteFavoriteError(error))
    }
  }
}
