mongoose = require('mongoose');


var ClothingSchema = new mongoose.Schema({
  type: String,
  name:  String,
  address: String,
  city: String,
  state: String,
  zip: Number,
  phone:   Number,
  dayandtime: Number,
  whattobring: String,
  review: String,
  })
  mongoose.model('ClothingLocations', ClothingSchema,'ClothingLocations')