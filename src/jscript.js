'use strict';

// is it best practice to have multiple .js files??


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
    console.log('Node Server is running on http://localhost:5000..');
});


/***
 * 
 *          HOME PAGE 
 * 
 ***/

function temperatureConverter(valNum) {

    // convert user string input to float
    valNum = parseFloat(valNum);

    // grab this item and display the output of 
    // an equation to translate Celcius into Fahrenheit 
    document.getElementById("outputFahrenheit").innerText=(valNum * 1.8) +32 ;
}






/***
 * 
 *          PROMO 
 * 
 ***/

// grab today's date
let today = new Date();
// detail today's year
let saleYear = today.getFullYear();

// if the date is after October 31st (so any time November 1 and later)
if (today.getMonth() == 9 && today.getDate() > 31) {

    // add another year until the sale date
    saleYear = saleYear + 1;
}

// create variable saleDate and set it equal to October 31st of closest upcoming sale
let saleDate = new Date(saleYear, 9, 31);

// calculating ms total of time in a day
let dayMilliseconds = 1000 * 60 * 60 * 24;

// Find remaining days until next sale
let remainingDays = Math.ceil(
    (saleDate.getTime() - today.getTime()) /
    (dayMilliseconds)
);

let todayMessage = "Today is " + today + "."

let saleMessage = "There are " + remainingDays + " days remaining until the next HUGE Halloween sale!"



document.getElementById("countdown-here").innerText = saleMessage