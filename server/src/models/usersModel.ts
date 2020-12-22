const mongoose = require('mongoose')

const { Schema, model } = mongoose

const usersSchema = new Schema({
  admin: { type: Boolean },
  username: { type: String },
  password: { type: String },
  name: { type: String },
  surname: { type: String },
  email: { type: String },
  photo: { type: String },
  sub: { type: String },
  favorites: [{ type: Schema.Types.ObjectId, ref: 'establishments' }],
  establishment: { type: Schema.Types.ObjectId, ref: 'establishments' },
  promotions: [{ type: Schema.Types.ObjectId, ref: 'promotions' }]
})

export default model('users', usersSchema)
