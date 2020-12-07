function UserController(Users) {
  function getMethod(req, res) {
    const { query: { sub } } = req;
    Users.find(sub)
      .populate({ path: 'favorites' })
      .exec((errorFindUser, User) => (errorFindUser
        ? res.send(errorFindUser)
        : res.json(User)));
  }

  function postMethod(req, res) {
    const { newUser } = req.body;
    Users.create(newUser, (errorNewUser, correctNewUser) => (errorNewUser
      ? res.send(errorNewUser)
      : res.json(correctNewUser)));
  }

  function putMethod(req, res) {
    const { user: { _id, favorites }, establishment } = req.body;
    Users.findOneAndUpdate(_id, { favorites: [establishment._id, ...favorites] },
      { new: true }, (errorNewFavorite, newFavorite) => (errorNewFavorite
        ? res.send(errorNewFavorite) : res.json(newFavorite)));
  }

  function deleteMethod(req, res) {
    const { user: { _id, favorites }, deleteFavorite } = req.body;
    Users.findOneAndUpdate(_id, {
      favorites: favorites.filter(
        (establishment) => establishment._id !== deleteFavorite._id,
      ),
    },
    { new: true }, (errorDeleteFavorite, deleteTheFavorite) => (errorDeleteFavorite
      ? res.send(errorDeleteFavorite) : res.json(deleteTheFavorite)));
  }

  return {
    getMethod, postMethod, putMethod, deleteMethod,
  };
}

module.exports = UserController;
