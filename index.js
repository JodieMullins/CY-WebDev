
/***
 * 
 *         EXPRESS SERVER
 * 
 ***/

//Bring in the express server and create application
let express = require('express')

// Creates an Express application (and many other objects from this application object)
let app = express();

// use the express Router object
let router = express.Router()
let shoes = [
    {"id": 1, "name": "Crim"}
    {"id": 2, "name": "Beaups"}
    {"id": 3, "name": "Miskle"}
    {"id": 3, "name": "Hesker"}
]

// Create GET to return a list of all shoes
router.get('/', function (req, res, next) {
    res.send("Crimflowers");
});

// Configure router so all routes are prefixed with /api/v1
app.use('/api/', router)
// ALL REST APIs in this server are called:
// https://localhost:5000/api

// Create server to listen on port 5000
var server = app.listen(5000, function () {
    console.log('Node Server is running on http://localhost:5000.');
});
