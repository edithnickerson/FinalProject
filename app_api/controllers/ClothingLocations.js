var mongoose = require('mongoose');
var ClothingLocations = mongoose.model('ClothingLocations');

//utility method for the module
var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(content);
}

/* GET all Resource records */
module.exports.ClothingLocationsReadAll= function(req, res)
{
  console.log("Finding all Food Resources", req);
  
  ClothingLocations
    .find({})
    .exec(function(err, ClothingLocations){
      if(err){
        console.log(err);
        sendJSONresponse(res, 404, err);
      }
      console.log(ClothingLocations);
      sendJSONresponse(res, 200, ClothingLocations);
    });
}