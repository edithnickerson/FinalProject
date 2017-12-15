var mongoose = require('mongoose');
var FoodLocations = mongoose.model('FoodLocations');

//utility method for the module
var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(content);
}

/* GET all Resource records */
module.exports.FoodLocationsReadAll= function(req, res)
{
  console.log("Finding all Food Resources", req);
  
  FoodLocations
    .find({})
    .exec(function(err, FoodLocations){
      if(err){
        console.log(err);
        sendJSONresponse(res, 404, err);
      }
      console.log(FoodLocations);
      sendJSONresponse(res, 200, FoodLocations);
    });
}