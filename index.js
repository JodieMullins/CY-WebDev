
/***
 * 
 *         EXPRESS SERVER
 * 
 ***/


// reference https://www.npmjs.com/package/express


//Bring in the express server and create application
let express = require('express')



// Creates an Express application (and many other objects from this application object)
let app = express();



// pull module info
let shoeInfo = require('./info/shoeInfo');



// use the express Router object
let router = express.Router();


// variable holds info pulling from module
// let shoes = shoeInfo.get();


// Create GET to return a list of all shoes
router.get('/', function (req, res, next) {

    shoeInfo.get(function (data) {
        res.status(200).json({
            "status":200,
            "statusText": "OK",
            "message": "All shoes retrieved.",
            "data":data
        });
    }, function(err) {
        next(err);
    });
});



// Create GET/search?id=n&name=str to search for shoes by 'id' and/or 'name'
router.get('/search', function (req, res, next) {
  let searchObject = {
    "id": req.query.id,
    "name": req.query.name
  };

  shoeInfo.search(searchObject, function (data) {
    res.status(200).json({
      "status": 200,
      "statusText": "OK",
      "message": "All shoes retrieved.",
      "data": data
    });
  }, function (err) {
    next(err);
  });
});




// Create GET/ID to return a single shoe
// map ":id" parameter to id of json for get request
router.get('/:id', function (req, res, next) {
  // dynamic id parameter 
    shoeInfo.getById(req.params.id, function (data) {
      // if real shoe object exists, 200 response
      if (data) {
        res.status(200).json({
          "status": 200,
          "statusText": "OK",
          "message": "Single pair of shoes retrieved.",
          "data": data
        });
      }
      // if object does not exist, create 404 NOT FOUND 
      else {
        res.status(404).send({
          "status": 404,
          "statusText": "Not Found",
          "message": "The pair '" + req.params.id + "' could not be found.",
          "error": {

            // code property established stating NOT_FOUND
            "code": "NOT_FOUND",
            "message": "The pair '" + req.params.id + "' could not be found."
          }
        });
      }
    }, function (err) {
      next(err);
    });
  });



// Configure router so all routes are prefixed with /api/v1
app.use('/api/', router)
// ALL REST APIs in this server are called:
// https://localhost:5000/api





// Create server to listen on port 5000
var server = app.listen(5000, function () {
    console.log('Node Server is running on http://localhost:5000.');
});
