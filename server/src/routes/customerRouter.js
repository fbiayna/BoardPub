const express = require('express');
const customerController = require('../controllers/CustomerController');

function customerRouter(Users, Favorites) {
  const router = express.Router();
  const customer = customerController(Users, Favorites);

  router.route('/')
    .get(customer.getMethod)
    .post(customer.postMethod)
    .delete(customer.deleteMethod);

  return router;
}

module.exports = customerRouter;
