var express             = require('express');
var router              = express.Router();
var ctrlFoodLocations    = require('../controllers/food');
var ctrlClothingLocations     = require('../controllers/clothi');
var ctrlUtilityLocations    = require('../controllers/utility');
var ctrlyelpapi   = require('../controllers/yelpapi');
var MONGO_URI=require('MONGO_URI');
var db= MONGO_URI('mongodb://edithnickerson:edithnickerson@ds013901.mlab.com:13901/resourcedb'['FoodLocations,ClothingLocations, UtilityLocations'] );

/* Food DATA*/ 
router.get('/FoodLocations/:zip', ctrlFoodLocations.FoodLocationsReadOne);
router.get('/FoodLocations', ctrlFoodLocations.FoodLocationsReadAll);

/* CLothing DATA */
router.get('/ClothingLocations/:zip', ctrlClothingLocations.ClothingLocationsReadOne);
router.get('/ClothingLocations', ctrlClothingLocations.ClothingLocationsReadAll);

/* Utility DATA */
router.get('/UtilityLocations/:zip', ctrlUtilityLocations.UtilityLocationsReadOne);
router.get('/UtilityLocations', ctrlUtilityLocations.UtilityLocationsReadAll);

/* AIRPORT DATA */
//router.get('/airportdata', ctrlAirportData.airportDataReadAll);

/* API KEYS */
router.get('/yelpapi', ctrlyelpapi.getReviews);

module.exports = router;
