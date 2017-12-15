var Yelp = require('node-yelp-fusion');
var yelp=new Yelp({ id:iaPF4Eg1J3mdjOwSWDIouKOrW_MyE5h7ZalfJ8hA9Y4a2jSM3YJdxBnPvUm6vmHyMlCfd0rgOa6rWjcU6gDkY3DyzT9aiG1pd3-B6iG-qkxzI4PiaRTsT7QuZMkyWnYx , secret:iaPF4Eg1J3mdjOwSWDIouKOrW_MyE5h7ZalfJ8hA9Y4a2jSM3YJdxBnPvUm6vmHyMlCfd0rgOa6rWjcU6gDkY3DyzT9aiG1pd3-B6iG-qkxzI4PiaRTsT7QuZMkyWnYx });
module.export.SEARCH=function(req, res)
{
    var zip=req.params.zip
   var type=req.params.type;

    yelp.reviews("zip-type")
    .then(function(result){
           res.json(result);
        });




//utility method for the module
var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(JSON.parse(content));
    //res.json(content);
}


/* GET all API Key Values Values */
module.exports.getyelpapi = function(req, res)
{
    console.log("Retrieving Key Store Values");
    
    
  
    //var darkyskyurl = 'https://api.darksky.net/forecast/' + process.env.DARK_SKY_KEY + 
    //         '/' + lat + ',' + lon;
    
    request(darkyskyurl, function(error, response, body){
        //console.log(body);
        sendJSONresponse(res, "200", body); 
    });

}