var mongoose = require('mongoose');
var UtilityLocations = mongoose.model('UtilityLocations');

//utility method for the module
var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(content);
}

/* GET all Resource records */
module.exports.UtilityLocationsReadAll= function(req, res)
{
  console.log("Finding all Utility Resources", req);
  
  UtilityLocations
    .find({})
    .exec(function(err, UtilityLocations){
      if(err){
        console.log(err);
        sendJSONresponse(res, 404, err);
      }
      console.log(UtilityLocations);
      sendJSONresponse(res, 200, UtilityLocations);
    });
}