'use strict';

/***
 * 
 *         SEARCH BAR (AUTOCOMPLETE FEATURE)
 * 
 ***/


/***
// create array to hold words that will autocomplete
let autocompleteChoices = ["sale", "speaker", "blue", "red", "red sole", "yellow", "green", "black", "bluetooth", "purple", "orange", "white", "gold", "silver", "metallic", "new", "brown", "sneaker", "pumps", "heels"]

// create variables to reference input text where they need to go
const searchbars = document.getElementsByClassName("search-bars");
let resultsHTML = document.getElementById("autocomplete-display");

searchbars.oninput = function () {

    // create an empty array
    let autoresults = [];

    // .this references search bar object, from which 
    // a value exists, captured within the variable userInput    
    const userInput = this.value;

    // use javascript to display an empty string value for the unordered list displaying from the search bar
    resultsHTML.innerText = "";

    // in the instance a user starts typing into the search bar,
    if (userInput.length > 0) {
        // the empty array is to return information based on user's input
        autoresults = getResults(userInput);

        for (i = 0; i <autoresults.length; i++) {
            resultsHTML.innerHTML += "<li>" + autoresults[i] + "</li>";
        }
    }

} // END searchbars.oninput function


// DEFINE getResults
function getResults(input) {

    const results = [];

    for (i = 0; i < autocompleteChoices.length; i++) {
        if (input === autocompleteChoices[i].slice(0, input.length)) {
            results.push(autocompleteChoices[i]);

        }
    }


    return results;
} // END getResults

resultsHTML.onclick = function (event) {
    const setValue = event.target.innerText;
    searchbars.value = setValue;
    this.innerText = "";
};
 ***/
let data = ["sale", "speaker", "blue", "red", "red sole", "yellow", "green", "black", "bluetooth", "purple", "orange", "white", "gold", "silver", "metallic", "new", "brown", "sneaker", "pumps", "heels"];

const autocomplete = document.getElementsByClassName("search-bars");
const resultsHTML = document.getElementById("results");


autocomplete.oninput = function () {
    let results = [];
    const userInput = this.value;
    resultsHTML.innerHTML = "";
    if (userInput.length > 0) {
      results = getResults(userInput);
      resultsHTML.style.display = "block";
      for (i = 0; i < results.length; i++) {
        resultsHTML.innerHTML += "<ul>" + results[i] + "</ul>";
      }
    }
  };

  function getResults(input) {
    const results = [];
    for (i = 0; i < data.length; i++) {
      if (input === data[i].slice(0, input.length)) {
        results.push(data[i]);
      }
    }
    return results;
  }

  resultsHTML.onclick = function(event) {
    const setValue = event.target.innerText;
    autocomplete.value = setValue;
    this.innerHTML = "";
  };


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


// is it best practice to have multiple .js files??



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