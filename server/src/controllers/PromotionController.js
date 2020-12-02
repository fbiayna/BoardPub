function PromotionController (Users, Promotions) {
  function getMethod (req, res) {
    const { id } = req.query
    Promotions.find({ id }, (errorFindPromotion, Promotion) => (errorFindPromotion
      ? res.send(errorFindPromotion)
      : res.json(Promotion)))
  }

  return {
    getMethod
  }
}

module.exports = PromotionController
