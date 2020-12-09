const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const promotionsSchema = new Schema({
  name: { type: String },
  price: { type: String },
  type: { type: String },
  description: { type: String },
  date: { type: String },
  establishment: { type: Schema.Types.ObjectId, ref: 'establishments' },
});

module.exports = model('promotions', promotionsSchema);
