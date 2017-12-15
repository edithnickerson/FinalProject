mongoose = require('mongoose');


var FoodSchema = new mongoose.Schema({
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
  var ClothingSchema = new mongoose.Schema({
  type: String,	  
  name: String, 
  address:  String,
  city: String,
  state: String,
  zip: Number,
  phone: String,
  dayandtime:   Number,
  whattobring: String,
  review: String,
  
  })
  var UtilitySchema = new mongoose.Schema({
  type: String,
  name: String, 
  address:  String,
  city: String,
  state: String,
  zip: Number,
  phone: String,
  dayandtime:   Number,
  whattobring: String,
  review: String,
  })
mongoose.model('ResourceSchema', FoodLocations, 'ResourceSchema', UtilityLocations, 'ResourceSchema', ClothingLocations);


