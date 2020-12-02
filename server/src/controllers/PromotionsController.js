function PromotionsController (Users, Promotions) {
  function getMethod (req, res) {
    const { type } = req.query
    Promotions.find({ type }, (errorFindPromotions, promotionsList) => (errorFindPromotions
      ? res.send(errorFindPromotions)
      : res.json(promotionsList)))
  }

  return {
    getMethod
  }
}

module.exports = PromotionsController
