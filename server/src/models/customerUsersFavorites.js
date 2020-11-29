const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const customerUsersFavoritesSchema = new Schema({
  name: { type: String },
});

module.exports = model('favorites', customerUsersFavoritesSchema);
