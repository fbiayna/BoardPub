const express = require('express');
// const AdminController = require('../controllers/AdminController');
// const EstablishmentController = require('../controllers/EstablishmentController');
const PromotionsController = require('../controllers/PromotionsController');
// const PromotionController = require('../controllers/PromotionController');

function adminRouter(Users, Establishments, Promotions) {
  const router = express.Router();
  //   const admin = AdminController(Users, Establishments, Promotions);
  //   const establishment = EstablishmentController(Users, Establishments);
  const promotions = PromotionsController(Users, Promotions);
  //   const promotion = PromotionController(Users, Promotions);

  //   router.route('/')
  //     .get(admin.getMethod)
  //     .post(admin.postMethod);

  //   router.route('/profile')
  //     .get(establishment.getMethod)
  //     .post(establishment.postMethod)
  //     .put(establishment.putMethod);

  router.route('/promotions')
    .get(promotions.getMethod);
  // .post(promotions.postMethod);

  //   router.route('/promotions/:promotionId')
  //     .get(promotion.getMethod)
  //     .put(promotion.putMethod)
  //     .delete(promotion.deleteMethod);

  return router;
}

module.exports = adminRouter;
