const CustomerUser = require('../models/usersModel');
const CustomerUserController = require('../controllers/CustomerController')(CustomerUser);

jest.mock('../models/usersModel');

describe('CustomerUserController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
    };
    CustomerUser.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => { callback(false, 'customer'); }),
      }),
    });

    CustomerUserController.getMethod({}, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on getMethod', () => {
    const res = {
      send: jest.fn(),
    };
    CustomerUser.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => { callback(true, 'errorFindCustomer'); }),
      }),
    });

    CustomerUserController.getMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response json on postMethod', () => {
    const req = { body: { user: 'Skylab' } };
    const res = {
      json: jest.fn(),
    };
    CustomerUser.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'newUser');
    });

    CustomerUserController.postMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call response error on postMethod', () => {
    const req = { body: { user: 'Skylab' } };
    const res = {
      send: jest.fn(),
    };
    CustomerUser.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorNewUser');
    });

    CustomerUserController.postMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response error on putMethod', () => {
    const req = { body: { user: { _id: '1', favorites: 'Skylab' }, establishment: 'Skylab' } };
    const res = {
      send: jest.fn(),
    };
    CustomerUser.findOneAndUpdate = jest.fn().mockImplementationOnce(
      (id, update, options, callback) => {
        callback(true, 'errorNewFavorite');
      },
    );
    CustomerUserController.putMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response error on putMethod', () => {
    const req = { body: { user: { _id: '1', favorites: 'Skylab' }, establishment: 'Skylab' } };
    const res = {
      send: jest.fn(),
    };
    CustomerUser.findOneAndUpdate = jest.fn().mockImplementationOnce(
      (id, update, options, callback) => {
        callback(true, 'NewFavorite');
      },
    );
    CustomerUserController.putMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response json on putMethod', () => {
    const req = { body: { user: { _id: '1', favorites: 'Skylab' }, establishment: 'Skylab' } };
    const res = {
      json: jest.fn(),
    };
    CustomerUser.findOneAndUpdate = jest.fn().mockImplementationOnce(
      (id, update, options, callback) => {
        callback(false, 'NewFavorite');
      },
    );
    CustomerUserController.putMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call response error on deleteMethod', () => {
    const req = { body: { user: { _id: '1', favorites: [{ _id: '1' }] }, deleteFavorite: 'Skylab' } };
    const res = {
      send: jest.fn(),
    };
    CustomerUser.findOneAndUpdate = jest.fn().mockImplementationOnce(
      (id, update, options, callback) => {
        callback(true, 'errorDeleteFavorite');
      },
    );
    CustomerUserController.deleteMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response json on deleteMethod', () => {
    const req = { body: { user: { _id: '1', favorites: [{ _id: '1' }] }, deleteFavorite: 'Skylab' } };
    const res = {
      json: jest.fn(),
    };
    CustomerUser.findOneAndUpdate = jest.fn().mockImplementationOnce(
      (id, update, options, callback) => {
        callback(false, 'deleteTheFavorite');
      },
    );
    CustomerUserController.deleteMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });
});
