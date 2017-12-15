var mongoose = require('mongoose');
var ClothingLocations = mongoose.model('ClothingLocations')
var FoodLocations = mongoose.model('FoodLocations');
var UtilityLocations = mongoose.model('UtilityLocations');


//utility method for the module
var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
}

//// Resource Data ////////////////////////////////////////////////////////////////
/* GET all Resources */
module.exports.FoodLocationsReadAll = function(req, res) {
    console.log("Finding all Food Resources ", req);

    FoodLocations
        .find({})
        .exec(function(err, FoodLocations) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
            }
            console.log(FoodLocations);
            sendJSONresponse(res, 200, FoodLocations);
        });
}

/* GET Food resource */
module.exports.FoodLocationsReadOne = function(req, res) {
    console.log('Finding Food Resources', req.params);
    if (req.params.zip && req.params.type) {
        FoodLocations
            .find({
                zip: req.params.zip
            })
            .exec(function(err, FoodLocations) {
                if (!FoodLocations) {
                    sendJSONresponse(res, 404, {
                        "message": "zip not found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(FoodLocations);
                sendJSONresponse(res, 200, FoodLocations);
            });
    }
    else {
        console.log('No zipcode value specified');
        sendJSONresponse(res, 404, {
            "message": "No  value in request"
        });
    }
};

//// Clothing Locations ////////////////////////////////////////////////////////////////
/* GET all Clothing records */
module.exports.ClothingLocationsaReadAll = function(req, res) {
    console.log("Finding all Clothing Resources Records", req);

    ClothingLocations
        .find({})
        .exec(function(err, ClothingLocations) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
            }
            console.log(ClothingLocations);
            sendJSONresponse(res, 200, ClothingLocations);
        });
}

/* GET ClothingLocations by zip */
module.exports.ClothingLocationsReadOne = function(req, res) {
    console.log('Finding Clothing Locations ', req.params);
    if (req.params.zip && req.params.type) {
        ClothingLocations
            .find({
                zip: req.params.zip
            })
            .exec(function(err, ClothingLocations) {
                if (!ClothingLocations) {
                    sendJSONresponse(res, 404, {
                        "message": "zip value not found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(ClothingLocations);
                sendJSONresponse(res, 200, ClothingLocations);
            });
    }
    else {
        console.log('No zip code  specified');
        sendJSONresponse(res, 404, {
            "message": "No zip code in request"
        });
    }
};

//// Utility Locations //////////////////////////////////////////////////////////////
/* GET Utility Locations by zipcode */
module.exports.UtilityLocationsReadOne = function(req, res) {
    console.log('Finding Utility Locations ', req.params);
    if (req.params.zip && req.params.typeof) {
    UtilityLocations
            .find({
                zip: req.params.zip
            })
            .exec(function(err, UtilityLocations) {
                if (!UtilityLocations) {
                    sendJSONresponse(res, 404, {
                        "message": "zip value not found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(UtilityLocations);
                sendJSONresponse(res, 200, UtilityLocations);
            });
    }
    else {
        console.log('No zip code  specified');
        sendJSONresponse(res, 404, {
            "message": "No zip code in request"
        });
    }
};
    

        //obtain the given weight value
   /*     var givenWeight = req.params.weight;
        
        //weight selected from interpolation below
        var selectedWeight = 0;        

        //find the min weight in the data - returns a Promise
        var minWeight = LandingData.aggregate([ 
            {
                $group: 
                {
                    _id: null, 
                    minValue: { 
                        $min : "$weight" 
                        
                    }
                
                }
            }]
        ).exec();
        
        //find the max weight in the data - returns a Promise
        var maxWeight = LandingData.aggregate([ 
            {
                $group: 
                {
                    _id: null, 
                    maxValue: { 
                        $max : "$weight" 
                        
                    }
                
                }
            }]
        ).exec();

        //find the closest number below - returns a Promise
        var closestBelow = LandingData.find({
            'weight': {
                $lte: givenWeight
            }
        })
        .sort({
            'weight': -1
        })
        .limit(1)
        .exec();
        
        //find the closest number above - returns a Promise
        var closestAbove = LandingData.find({
            'weight': {
                $gte: givenWeight
            }
        })
        .sort({
            'weight': 1
        })
        .limit(1)
        .exec();  */       

        //using promises to chain these together - http://mongoosejs.com/docs/promises.html
        //and here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
     /*         //that is a lambda expression below - a shortcut for a function
            .then( results => {
                //console.log(results);
                
                var below = results[2][0].weight;
                console.log("below: " + below);
                
                var above = results[3][0].weight;
                console.log("above: " + above);
                
                //which is smaller?
                var sequence = [Math.abs(givenWeight - below), Math.abs(givenWeight - above)];
                
                console.log("difference between given weight and lower: " + sequence[0]);
                console.log("difference between given weight and hight: " + sequence[1]);
                
                //magic - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
                var lowval = Math.min.apply(Math, sequence);
                
                console.log("low value: " + lowval);                
                
                var key = sequence.indexOf(lowval);
                
                console.log("key: " + key);
                
                var selectedWeight = 0;
                
                switch(key){
                    case 0:
                        selectedWeight = below;
                        break;
                    case 1:
                        selectedWeight = above;
                        break;
                }*/
                
                console.log("Selected Zip: " + selectedzip);
                
               /* LandingData
                    .find({
                        'flaps': req.params.flaps,
                        'weight': selectedWeight
                    })
                    .exec(function(err, landingData) {
                        if (!landingData) {
                            sendJSONresponse(res, 404, {
                                "message": "weight value not found"
                            });
                            return;
                        }
                        else if (err) {
                            console.log(err);
                            sendJSONresponse(res, 404, err);
                            return;
                        }
                        
                        console.log(landingData);
                        sendJSONresponse(res, 200, landingData);
                    });                
                
            }
        );
    }
    else {
        console.log('No weight value specified');
        sendJSONresponse(res, 404, {
            "message": "No weight value in request"
        });
    }
};

/* GET all ClimbData records */
/*module.exports.landingDataReadAll = function(req, res) {
    console.log("Finding all Landing Data Records", req);

    LandingData
        .find({})
        .exec(function(err, climbData) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
            }
            console.log(climbData);
            sendJSONresponse(res, 200, climbData);
        });
}*/