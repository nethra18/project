"use strict";

var numbers = [1, 2];
var moreNumbers = [3, 4];
var allNumbers = [].concat(numbers, moreNumbers);
console.log(allNumbers); // [1, 2, 3, 4]
