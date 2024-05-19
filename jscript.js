'use strict';

/***
 * 
 *          HOME PAGE 
 * 
 ***/

function shoeConverter(sizeNum) {
    // convert user input to integer
  sizeNum = parseFloat(sizeNum);
  
  // if W option is selected, 
  document.getElementById("converted-size-display").innerHTML= (sizeNum - 2)
  // if M / Y option is selected, 
  document.getElementById("converted-size-display").innerHTML= (sizeNum + 2)
}

