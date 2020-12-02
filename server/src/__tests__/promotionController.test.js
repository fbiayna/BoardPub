/* eslint-disable node/no-callback-literal */
const Promotions = require('../models/promotionsModel')
const Users = require('../models/usersModel')
const PromotionController = require('../controllers/PromotionController')(Users, Promotions)

jest.mock('../models/usersModel')
jest.mock('../models/promotionsModel')

describe('PromotionController', () => {
  test('should call response json on getMethod', () => {
    const req = { query: { id: '1' } }
    const res = {
      json: jest.fn()
    }
    Promotions.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'Promotion')
    })

    PromotionController.getMethod(req, res)

    expect(res.json).toHaveBeenCalled()
  })

  test('should call response error on getMethod', () => {
    const req = { query: { id: '1' } }
    const res = {
      send: jest.fn()
    }
    Promotions.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorFindPromotion')
    })

    PromotionController.getMethod(req, res)

    expect(res.send).toHaveBeenCalled()
  })
})
