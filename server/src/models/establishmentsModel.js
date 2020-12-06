const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const establishmentsSchema = new Schema({
  name: { type: String },
  ubication: { type: String },
  country: { type: String },
  photo: { type: String },
  description: { type: String },
  rating: { type: String },
});

module.exports = model('establishments', establishmentsSchema);
