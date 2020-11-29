const express = require('express');
const AdminController = require('../controllers/AdminController');
const EstablishmentController = require('../controllers/EstablishmentController');
const PromotionsController = require('../controllers/PromotionsController');
const PromotionController = require('../controllers/PromotionController');

function adminRouter(AdminUsers, AdminUsersEstablishments, AdminUsersPromotions) {
  const router = express.Router();
  const admin = AdminController(AdminUsers, AdminUsersEstablishments, AdminUsersPromotions);
  const establishment = EstablishmentController(AdminUsers, AdminUsersEstablishments);
  const promotions = PromotionsController(AdminUsers, AdminUsersPromotions);
  const promotion = PromotionController(AdminUsers, AdminUsersPromotions);

  router.route('/')
    .get(admin.getMethod)
    .post(admin.postMethod);

  router.route('/profile')
    .get(establishment.getMethod)
    .post(establishment.postMethod)
    .put(establishment.putMethod);

  router.route('/promotions')
    .get(promotions.getMethod)
    .post(promotions.postMethod);

  router.route('/promotions/:promotionId')
    .get(promotion.getMethod)
    .put(promotion.putMethod)
    .delete(promotion.putMethod);

  return router;
}

module.exports = adminRouter;
