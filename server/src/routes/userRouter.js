const express = require('express');
const userController = require('../controllers/UserController');

function userRouter(Users) {
  const router = express.Router();
  const user = userController(Users);

  router.route('/')
    .get(user.getMethod)
    .post(user.postMethod)
    .put(user.putMethod)
    .delete(user.deleteMethod);

  return router;
}

module.exports = userRouter;
