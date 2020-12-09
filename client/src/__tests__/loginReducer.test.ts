
import actionTypes from '../actions/actionTypes'
import loginReducer from '../reducers/loginReducer'

describe('loginReducer', () => {
  test('should return user -> actionTypes = LOAD_USER', () => {
    const testuser = { user: 'Skylab' }
    const userAction = {
      type: actionTypes.LOAD_USER,
      user: testuser
    }

    const state = loginReducer({}, userAction)

    expect(state).toEqual({ user: testuser })
  })

  test('should return error -> actionTypes = LOAD_USER_ERROR', () => {
    const testuser = 'error'
    const userAction = {
      type: actionTypes.LOAD_USER_ERROR,
      error: testuser
    }

    const state = loginReducer({}, userAction)

    expect(state).toEqual({ error: testuser })
  })

  test('should return user -> actionTypes = ADD_AND_LOAD_USER', () => {
    const testUser = { user: 'Skylab' }
    const userAction = {
      type: actionTypes.ADD_AND_LOAD_USER,
      user: testUser
    }

    const state = loginReducer({}, userAction)

    expect(state).toEqual({ user: testUser })
  })

  test('should return error -> actionTypes = ADD_AND_LOAD_USER_ERROR', () => {
    const testUser = 'error'
    const userAction = {
      type: actionTypes.ADD_AND_LOAD_USER_ERROR,
      error: testUser
    }

    const state = loginReducer({}, userAction)

    expect(state).toEqual({ error: testUser })
  })

  test('should return user -> actionTypes = ADD_FAVORITE', () => {
    const testFavorite = 'skylab'
    const userAction = {
      type: actionTypes.ADD_FAVORITE,
      favorite: testFavorite
    }
    const initialState = { user: { favorites: ['1'] } }

    const state = loginReducer(initialState, userAction)

    expect(state.user.favorites).toEqual(['1', 'skylab'])
  })

  test('should return error -> actionTypes = ADD_FAVORITE_ERROR', () => {
    const testUser = 'error'
    const userAction = {
      type: actionTypes.ADD_FAVORITE_ERROR,
      error: testUser
    }

    const state = loginReducer({}, userAction)

    expect(state).toEqual({ error: testUser })
  })

  test('should return user -> actionTypes = DELETE_FAVORITE', () => {
    const testDeleteFavorite = 'skylab'
    const userAction = {
      type: actionTypes.DELETE_FAVORITE,
      favorite: testDeleteFavorite
    }
    const initialState = { user: { favorites: ['1', 'skylab'] } }

    const state = loginReducer(initialState, userAction)

    expect(state.user.favorites).toEqual(['1'])
  })

  test('should return error -> actionTypes = DELETE_FAVORITE_ERROR', () => {
    const testUser = 'error'
    const userAction = {
      type: actionTypes.DELETE_FAVORITE_ERROR,
      error: testUser
    }

    const state = loginReducer({}, userAction)

    expect(state).toEqual({ error: testUser })
  })

  test('should return the default state', () => {
    const state = loginReducer({}, { type: 'skylab' })

    expect(state).toEqual({})
  })
})
