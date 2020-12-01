const Promotions = require('../models/promotionsModel');
const Users = require('../models/usersModel');
const PromotionsController = require('../controllers/PromotionsController')(Users, Promotions);

jest.mock('../models/usersModel');
jest.mock('../models/promotionsModel');

describe('PromotionsController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
    };
    Promotions.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'PromotionsList');
    });

    PromotionsController.getMethod({}, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call response error on getMethod', () => {
    const res = {
      send: jest.fn(),
    };
    Promotions.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorFindPromotions');
    });

    PromotionsController.getMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });
});
