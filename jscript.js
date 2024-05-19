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
  // M max 12 min 2
  // W max 14 min 4
  
  // If M selected AND shoe size goes above 12
  // " You may struggle finding styles in that size"
}

