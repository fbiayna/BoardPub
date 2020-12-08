const User = require('../models/usersModel');
const UserController = require('../controllers/UserController')(User);

jest.mock('../models/usersModel');

describe('UserController', () => {
  test('should call response json on getMethod', () => {
    const req = { query: '1' };
    const res = {
      json: jest.fn(),
    };
    User.findOne = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => { callback(false, 'customer'); }),
      }),
    });

    UserController.getMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on getMethod', () => {
    const req = { query: '1' };
    const res = {
      send: jest.fn(),
    };
    User.findOne = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => { callback(true, 'errorFindCustomer'); }),
      }),
    });

    UserController.getMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response json on postMethod', () => {
    const req = { body: { user: 'Skylab' } };
    const res = {
      json: jest.fn(),
    };
    User.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'newUser');
    });

    UserController.postMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call response error on postMethod', () => {
    const req = { body: { user: 'Skylab' } };
    const res = {
      send: jest.fn(),
    };
    User.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorNewUser');
    });

    UserController.postMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response error on putMethod', () => {
    const req = { body: { user: { _id: '1', favorites: 'Skylab' }, establishment: 'Skylab' } };
    const res = {
      send: jest.fn(),
    };
    User.findOneAndUpdate = jest.fn().mockImplementationOnce(
      (id, update, options, callback) => {
        callback(true, 'errorNewFavorite');
      },
    );
    UserController.putMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response error on putMethod', () => {
    const req = { body: { user: { _id: '1', favorites: 'Skylab' }, establishment: 'Skylab' } };
    const res = {
      send: jest.fn(),
    };
    User.findOneAndUpdate = jest.fn().mockImplementationOnce(
      (id, update, options, callback) => {
        callback(true, 'NewFavorite');
      },
    );
    UserController.putMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response json on putMethod', () => {
    const req = { body: { user: { _id: '1', favorites: 'Skylab' }, establishment: 'Skylab' } };
    const res = {
      json: jest.fn(),
    };
    User.findOneAndUpdate = jest.fn().mockImplementationOnce(
      (id, update, options, callback) => {
        callback(false, 'NewFavorite');
      },
    );
    UserController.putMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call response error on deleteMethod', () => {
    const req = { body: { user: { _id: '1', favorites: [{ _id: '1' }] }, deleteFavorite: 'Skylab' } };
    const res = {
      send: jest.fn(),
    };
    User.findOneAndUpdate = jest.fn().mockImplementationOnce(
      (id, update, options, callback) => {
        callback(true, 'errorDeleteFavorite');
      },
    );
    UserController.deleteMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response json on deleteMethod', () => {
    const req = { body: { user: { _id: '1', favorites: [{ _id: '1' }] }, deleteFavorite: 'Skylab' } };
    const res = {
      json: jest.fn(),
    };
    User.findOneAndUpdate = jest.fn().mockImplementationOnce(
      (id, update, options, callback) => {
        callback(false, 'deleteTheFavorite');
      },
    );
    UserController.deleteMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });
});
