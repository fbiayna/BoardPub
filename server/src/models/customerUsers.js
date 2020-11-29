const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const customerUsersSchema = new Schema({
  username: { type: String },
  email: { type: String },
  favorites: [{ type: Schema.Types.ObjectId, ref: 'favorites' }],
});

module.exports = model('customer-users', customerUsersSchema);
