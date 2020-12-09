const express = require('express');
const PromotionsController = require('../controllers/PromotionsController');
const PromotionController = require('../controllers/PromotionController');
const EstablishmentController = require('../controllers/EstablishmentController');

function promotionsRouter(Establishments, Promotions) {
  const router = express.Router();
  const promotions = PromotionsController(Promotions);
  const promotion = PromotionController(Promotions);
  const establishment = EstablishmentController(Establishments);

  router.route('/')
    .get(promotions.getMethod);

  router.route('/promotion')
    .get(promotion.getMethod)
    .post(promotion.postMethod);

  router.route('/establishment')
    .get(establishment.getMethod)
    .post(establishment.postMethod);

  return router;
}

module.exports = promotionsRouter;
