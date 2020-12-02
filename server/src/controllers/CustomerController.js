function CustomerController (Users) {
  function getMethod (req, res) {
    Users.find({})
      .populate({ path: 'favorites' })
      .exec((errorFindCustomer, customer) => (errorFindCustomer
        ? res.send(errorFindCustomer)
        : res.json(customer)))
  }

  function postMethod (req, res) {
    const { user } = req.body
    Users.create(user, (errorNewUser, newUser) => (errorNewUser
      ? res.send(errorNewUser)
      : res.json(newUser)))
  }

  function putMethod (req, res) {
    const { user: { _id, favorites }, establishment } = req.body
    Users.findOneAndUpdate(_id, { favorites: [establishment._id, ...favorites] },
      { new: true }, (errorNewFavorite, newFavorite) => (errorNewFavorite
        ? res.send(errorNewFavorite)
        : res.json(newFavorite)))
  }

  function deleteMethod (req, res) {
    const { user: { _id, favorites }, deleteFavorite } = req.body
    Users.findOneAndUpdate(_id, {
      favorites: favorites.filter(
        (establishment) => establishment._id !== deleteFavorite._id
      )
    },
    { new: true }, (errorDeleteFavorite, deleteTheFavorite) => (errorDeleteFavorite
      ? res.send(errorDeleteFavorite)
      : res.json(deleteTheFavorite)))
  }

  return {
    getMethod, postMethod, putMethod, deleteMethod
  }
}

module.exports = CustomerController
