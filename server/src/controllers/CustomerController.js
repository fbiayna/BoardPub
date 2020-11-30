function CustomerController(Users, Favorites) {
  function getMethod(req, res) {
    Users.find({})
      .populate({ path: 'favorites' })
      .exec((errorFindCustomer, customer) => (errorFindCustomer
        ? res.send(errorFindCustomer)
        : res.json(customer)));
  }

  async function postMethod(req, res) {
    const { user: { favorites, ...userInfo } } = req.body;
    try {
      const favoritesResponse = await Favorites.create(favorites);
      const UsersResponse = await Users.create(
        {
          ...userInfo,
          favorites: favoritesResponse.map((collaborator) => collaborator._id),
        },
      );
      res.json(UsersResponse);
    } catch (error) {
      res.send(error);
    }
  }

  function deleteMethod(req, res) {
    const { _id } = req.body;
    Users.findOneAndRemove(_id,
      (errorDeleteProject, projectDeleted) => (errorDeleteProject
        ? res.send(errorDeleteProject)
        : res.json(projectDeleted._id)));
  }
  return {
    getMethod, postMethod, deleteMethod,
  };
}

module.exports = CustomerController;
