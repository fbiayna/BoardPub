const express = require('express');
const customerController = require('../controllers/CustomerController');

function customerRouter(Users) {
  const router = express.Router();
  const customer = customerController(Users);

  router.route('/')
    .get(customer.getMethod)
    .post(customer.postMethod)
    .put(customer.putMethod)
    .delete(customer.deleteMethod);

  return router;
}

module.exports = customerRouter;
