
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

  test('should return the default state', () => {
    const state = loginReducer({}, { type: 'skylab' })

    expect(state).toEqual({})
  })
})