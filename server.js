
/***
 * 
 *         EXPRESS SERVER
 * 
 ***/


// reference https://www.npmjs.com/package/express


//Bring in the express server and create application
const express = require('express');



// Creates an Express application (and many other objects from this application object)
const app = express();

const PORT = 3000;

// pull module info
let shoeInfo = require('./info/shoeInfo');

// bring in export in case of errors
let errorHelper = require('./helpers/errorHelpers');

// use the express Router object
const router = express.Router();

//Configure middleware to support JSON data parsing in request object
// support passing through JSON data via body of data
app.use(express.json());


// variable holds info pulling from module
// let shoes = shoeInfo.get();


// Create GET to return a list of all shoes
router.get('/', function (req, res, next) {

  // if goes to get and returns valid request, return 200 response code to signify success
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

  // go through the shoe JSON object and search for requested data
  shoeInfo.search(searchObject, function (data) {
    // succeessfully retrieving data will display 200 response with message as specified 
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


  
router.post('/', function (req, res, next) {
  // put into body of request the shoe object
  shoeInfo.insert(req.body, function(data) {
    // as long as succeeds, create 201 code and pass back data
    res.status(201).json({
      "status": 201,
      "statusText": "Created",
      "message": "New Pair Added.",
      "data": data
    });
  }, function(err) {
    next(err);
  });
});


router.put('/:id', function (req, res, next) {
  // goes and grabs the shoe value
  shoeInfo.getById(req.params.id, function (data) {
    if (data) {
      // Attempt to update the data if found
      shoeInfo.update(req.body, req.params.id, function (data) {
        res.status(200).json({
          "status": 200,
          "statusText": "OK",
          "message": "Shoes '" + req.params.id + "' updated.",
          "data": data
        });
      });
    }
    else {
      // if shoe data was not found / nonexistent, return a 404 error code
      res.status(404).send({
        "status": 404,
        "statusText": "Not Found",
        "message": "The pair of shoes '" + req.params.id + "' could not be found.",
        "error": {
          "code": "NOT_FOUND",
          "message": "The pair of shoes '" + req.params.id + "' could not be found."
        }
      });
    }
  }, function(err) {
    next(err);
  });
});

// create delete response
router.delete('/:id', function (req, res, next) {
  shoeInfo.getById(req.params.id, function (data) {
    if (data) {
      // Attempt to delete the data
      shoeInfo.delete(req.params.id, function (data) {
        res.status(200).json({
          "status": 200,
          "statusText": "OK",
          "message": "The shoes '" + req.params.id + "' have been deleted.",
          "data": "Shoes '" + req.params.id + "' deleted."
        });
      });
    }
    else {
      res.status(404).send({
        "status": 404,
        "statusText": "Not Found",
        "message": "The shoes '" + req.params.id + "' could not be found.",
        "error": {
          "code": "NOT_FOUND",
          "message": "The shoes '" + req.params.id + "' could not be found."
        }
      });
    }
  }, function(err) {
    next(err);
  });
});


router.patch('/:id', function (req, res, next) {
  // look for shoe id pass through as parameter
  shoeInfo.getById(req.params.id, function (data) {
    if (data) {
      // Attempt to update the data
      // Will only update specific properties 
      shoeInfo.update(req.body, req.params.id, function (data) {
        res.status(200).json({
          "status": 200,
          "statusText": "OK",
          "message": "Shoes '" + req.params.id + "' patched.",
          "data": data
        });
      });
    }
    else {
      res.status(404).send({
        "status": 404,
        "statusText": "Not Found",
        "message": "The shoes '" + req.params.id + "' could not be found.",
        "error": {
          "code": "NOT_FOUND",
          "message": "The shoes '" + req.params.id + "' could not be found."
        }
      });
    }
  }, function (err) {
    next(err);
  });
});

// Configure router so all routes are prefixed with /api/v1
app.use('/api/', router);
// ALL REST APIs in this server are called:
// https://localhost:5000/api


/**
function errorBuilder(err) {
  return {
    "status": 500,
    "statusText": "Internal Server Error",
    "message": err.message,
    "error": {
      "errno": err.errno,
      "call": err.syscall,
      "code": "INTERNAL_SERVER_ERROR",
      "message": err.message
    }
};
};




// ADD EXCEPTION HANDLING
// EXCEPTION HANDLING NEEDS TO BE LAST, BEFORE SERVER APP

// 4 PARAMETERS, FIRST BEING ERROR OBJECT
app.use(function(err, req, res, next) {
  res.status(500).json({
    // OVERRIDE STANDARD ERROR OBJECT WITH OUR OWN
    "status": 500,
    "statusText": "Internal Server Error",
    "message": err.message,
    "error": {
      "code": "INTERNAL_SERVER_ERROR",
      "message": err.message
    }
  });
});

*/


// Configure exception logger
// WHY DOES IT SAY app.use(errorHelper.logErrorsToConsole);   on Pluralsight???????????????????
//app.use(errorHelper.logErrorsToConsole);



// Configure exception logger to file
app.use(errorHelper.logErrorsToFile);



// Configure client error handler
app.use(errorHelper.clientErrorHandler);



// Configure catch-all exception middleware last
app.use(errorHelper.errorHandler);



// Create Server to listen on port 3000
let run = app.listen(PORT, (err) => {
  if(!err)
    console.log("Server is running and App is currently listening on port " + PORT)
  else
    console.log("ERROR has occurred: " + err);
  }
);

run();

// Create server to listen on port 5000
var server = app.listen(5000, function () {
    console.log('Node Server is running on http://localhost:5000.');
});

