function EstablishmentController(Establishments) {
  function getMethod(req, res) {
    const { id } = req.query;
    Establishments.findById(id,
      (errorFindEstablishments, EstablishmentsList) => (errorFindEstablishments
        ? res.send(errorFindEstablishments)
        : res.json(EstablishmentsList)));
  }

  function postMethod(req, res) {
    const { newEstablishment } = req.body;
    Establishments.create(newEstablishment,
      (errorNewEstablishment, correctNewEstablishment) => (errorNewEstablishment
        ? res.send(errorNewEstablishment)
        : res.json(correctNewEstablishment)));
  }

  return {
    getMethod, postMethod,
  };
}

module.exports = EstablishmentController;
