const mongoose = require('mongoose')

const { Schema, model } = mongoose

const establishmentsSchema = new Schema({
  name: { type: String },
  ubication: { type: String },
  coords: { latitude: { type: Number }, longitude: { type: Number } },
  city: { type: String },
  photo: { type: String },
  description: { type: String },
  rating: { type: String }
})

export default model('establishments', establishmentsSchema)
