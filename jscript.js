'use strict';

/***
 * 
 *          HOME PAGE 
 * 
 ***/

function shoeConverter(sizeIn) {
    // convert user input to float (because half sizes)
    sizeIn = parseFloat(sizeIn);

  // if W option is selected, 
  document.getElementById("converted-size-display").innerHTML= (sizeIn - 2)
  // if M / Y option is selected, 
  document.getElementById("converted-size-display").innerHTML= (sizeIn + 2)
  // M max 12 min 2
  // W max 14 min 4
  
  // If M selected AND shoe size  > 12
  // "It may be difficult finding styles in that size."

    // site does NOT contain youth sizes
}

