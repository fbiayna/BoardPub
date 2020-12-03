const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const promotionsSchema = new Schema({
  name: { type: String },
  price: { type: String },
  type: { type: String },
  description: { type: String },
  date: { type: String },
});

module.exports = model('promotions', promotionsSchema);
