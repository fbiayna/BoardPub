const express = require('express');
const PromotionsController = require('../controllers/PromotionsController');
const PromotionController = require('../controllers/PromotionController');

function promotionsRouter(Users, Establishments, Promotions) {
  const router = express.Router();
  const promotions = PromotionsController(Users, Promotions);
  const promotion = PromotionController(Users, Promotions);

  router.route('/')
    .get(promotions.getMethod);

  router.route('/promotion')
    .get(promotion.getMethod);

  return router;
}

module.exports = promotionsRouter;
