const mongoose = require('mongoose')

const { Schema, model } = mongoose

const usersSchema = new Schema({
  username: { type: String },
  password: { type: String },
  email: { type: String },
  admin: { type: Boolean },
  favorites: [{ type: Schema.Types.ObjectId, ref: 'establishments' }],
  establishment: { type: Schema.Types.ObjectId, ref: 'establishments' },
  promotions: [{ type: Schema.Types.ObjectId, ref: 'promotions' }]
})

module.exports = model('users', usersSchema)
