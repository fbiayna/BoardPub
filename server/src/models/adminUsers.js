const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const adminUsersSchema = new Schema({
  username: { type: String },
  password: { type: String },
  establishment: { type: Schema.Types.ObjectId, ref: 'admin-users-establishments' },
  promotions: [{ type: Schema.Types.ObjectId, ref: 'promotions' }],
});

module.exports = model('admin-users', adminUsersSchema);
