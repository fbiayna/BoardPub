const express = require('express');
const customerController = require('../controllers/CustomerController');
const favoritesController = require('../controllers/FavoritesController');

function customerRouter(CustomerUsers, CustomerUsersFavorites) {
  const router = express.Router();
  const customer = customerController(CustomerUsers, CustomerUsersFavorites);
  const favorites = favoritesController(CustomerUsers, CustomerUsersFavorites);

  router.route('/')
    .get(customer.getMethod);

  router.route('/favorites')
    .get(favorites.getMethod)
    .post(favorites.postMethod)
    .delete(favorites.putMethod);

  return router;
}

module.exports = customerRouter;
