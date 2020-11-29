const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const adminUsersPromotionsSchema = new Schema({
  name: { type: String },
  price: { type: String },
  type: { type: String },
  description: { type: String },
  date: { type: String },
});

module.exports = model('promotions', adminUsersPromotionsSchema);
