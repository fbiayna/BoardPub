function PromotionsController(Users, Promotions) {
  function getMethod(req, res) {
    Promotions.find({}, (errorFindPromotions, promotionsList) => (errorFindPromotions
      ? res.send(errorFindPromotions)
      : res.json(promotionsList)));
  }

  return {
    getMethod,
  };
}

module.exports = PromotionsController;
