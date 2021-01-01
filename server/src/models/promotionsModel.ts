const mongoose = require('mongoose')

const { Schema, model } = mongoose

interface Promotions {
  name: string,
  price: string,
  type: string,
  photo: string,
  description: string,
  date: string,
}

const promotionsSchema: Promotions = new Schema({
  name: { type: String },
  price: { type: String },
  type: { type: String },
  photo: { type: String },
  description: { type: String },
  date: { type: String }
})

export default model('promotions', promotionsSchema)
