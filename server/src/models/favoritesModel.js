const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const favoritesSchema = new Schema({
  name: { type: String },
});

module.exports = model('favorites', favoritesSchema);
