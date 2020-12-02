
import actionTypes from '../actions/actionTypes'
import boardPubReducer from '../reducers/boardPubReducer'

describe('boardPubReducer', () => {
  test('should return promotions -> actionTypes = LOAD_PROMOTIONS', () => {
    const testPromotions = { promotion: '¡pizzas para todos!' }
    const promotionsAction = {
      type: actionTypes.LOAD_PROMOTIONS,
      promotions: testPromotions
    }

    const state = boardPubReducer({}, promotionsAction)

    expect(state).toEqual({ promotions: testPromotions })
  })

  test('should return error -> actionTypes = LOAD_PROMOTIONS_ERROR', () => {
    const testPromotions = 'error'
    const promotionsAction = {
      type: actionTypes.LOAD_PROMOTIONS_ERROR,
      error: testPromotions
    }

    const state = boardPubReducer({}, promotionsAction)

    expect(state).toEqual({ error: testPromotions })
  })

  test('should return promotion -> actionTypes = LOAD_PROMOTION', () => {
    const testPromotion = { promotion: '¡pizzas para todos!' }
    const promotionsAction = {
      type: actionTypes.LOAD_PROMOTION,
      promotion: testPromotion
    }

    const state = boardPubReducer({}, promotionsAction)

    expect(state).toEqual({ promotion: testPromotion })
  })

  test('should return error -> actionTypes = LOAD_PROMOTION_ERROR', () => {
    const testPromotion = 'error'
    const promotionsAction = {
      type: actionTypes.LOAD_PROMOTION_ERROR,
      error: testPromotion
    }

    const state = boardPubReducer({}, promotionsAction)

    expect(state).toEqual({ error: testPromotion })
  })

  test('should return the default state', () => {
    const state = boardPubReducer({}, { type: 'boardPub' })

    expect(state).toEqual({})
  })
})
