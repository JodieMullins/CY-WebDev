'use strict';

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
};









/***
 * 
 *          SEASONAL / DESIGNS 
 * 
 ***/

// Where do I want to pull this image from? 
// const crim = 

// on click, I want the image to shrink or otherwise thumbnail 
// on click, name and min bid price should appear

// or, or , or, ORRRRRR
// on click
// Create 2 rectangles overlapping the shoe image
// name and min bid price










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
};

// create variable saleDate and set it equal to October 31st of closest upcoming sale
let saleDate = new Date(saleYear, 9, 31);

// calculating ms total of time in a day
let dayMilliseconds = 1000 * 60 * 60 * 24;

// Find remaining days until next sale
let remainingDays = Math.ceil(
    (saleDate.getTime() - today.getTime()) / (dayMilliseconds)
);

// let todayMessage = "Today is " + today + "."

let saleMessage = ("There are " + remainingDays + " days remaining until the next HUGE Halloween sale!");

document.getElementById("countdown-here").innerText = saleMessage;