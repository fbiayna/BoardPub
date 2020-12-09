function PromotionsController(Promotions) {
  function getMethod(req, res) {
    Promotions.find({})
      .populate({ path: 'establishment' })
      .exec((errorFindPromotions, promotionsList) => (errorFindPromotions
        ? res.send(errorFindPromotions)
        : res.json(promotionsList)));
  }

  return {
    getMethod,
  };
}

module.exports = PromotionsController;
