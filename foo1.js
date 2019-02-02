"use strict";

{
  // enter new scope, TDZ starts
  var log = function log() {
    console.log(foo); // foo declared later
  }; // This is the TDZ and accessing foo 
  // would cause a ReferenceError


  var foo = 10; // TDZ ends

  log(); // called outside TDZ
}
