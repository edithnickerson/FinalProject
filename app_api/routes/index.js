var express             = require('express');
var router              = express.Router();
var ctrlFoodLocations    = require('../controllers/FoodLocations');
var ctrlClothingLocations     = require('../controllers/ClothingLocations');
var ctrlUtilityLocations    = require('../controllers/UtilityLocations');
//var ctrlyelpapi   = require('../controllers/yelpapi');



/* Food DATA*/ 
router.get('/FoodLocations', ctrlFoodLocations.FoodLocationsReadOne);
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
//router.get('/yelpapi', ctrlyelpapi.getyelpapi);

module.exports = router;
