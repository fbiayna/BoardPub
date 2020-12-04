function PromotionController(Users, Promotions) {
  function getMethod(req, res) {
    const { id } = req.query;
    Promotions.findById(id, (errorFindPromotions, promotionsList) => (errorFindPromotions
      ? res.send(errorFindPromotions)
      : res.json(promotionsList)));
  }

  return {
    getMethod,
  };
}

module.exports = PromotionController;
