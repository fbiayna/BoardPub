function CustomerController(Users, Establishments) {
  function getMethod(req, res) {
    Users.find({})
      .populate({ path: 'favorites' })
      .exec((errorFindCustomer, customer) => (errorFindCustomer
        ? res.send(errorFindCustomer)
        : res.json(customer)));
  }

  function postMethod(req, res) {
    const { _id } = req.body;
    Establishments.findOneAndRemove(_id,
      (errorUpdateFavorite, favoriteUpdated) => (errorUpdateFavorite
        ? res.send(errorUpdateFavorite)
        : res.json(favoriteUpdated._id)));
  }

  async function putMethod(req, res) {
    const { user: { favorites, ...userInfo } } = req.body;
    try {
      const favoritesResponse = await Establishments.create(favorites);
      const UsersResponse = await Users.create(
        {
          ...userInfo,
          favorites: favoritesResponse.map((local) => local._id),
        },
      );
      res.json(UsersResponse);
    } catch (error) {
      res.send(error);
    }
  }

  function deleteMethod(req, res) {
    const { _id } = req.body;
    Establishments.findOneAndRemove(_id,
      (errorDeleteFavorite, favoriteDeleted) => (errorDeleteFavorite
        ? res.send(errorDeleteFavorite)
        : res.json(favoriteDeleted._id)));
  }
  return {
    getMethod, postMethod, putMethod, deleteMethod,
  };
}

module.exports = CustomerController;
