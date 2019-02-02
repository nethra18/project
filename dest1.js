"use strict";

// [a, b] = [10, 20];
// console.log(a);
// // expected output: 10
// console.log(b);
// // expected output: 20
// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(rest);
// // expected output: [30,40,50]
// //Array destructuring Progran
// var foo = ['one', 'two', 'three'];
// var [one, two, three] = foo;
// console.log(one); 
// console.log(two); 
// console.log(three); 
// //here reassigning the value of a and b
// var {a = 10, b = 5} = {a: 20,b: 25};
// console.log(a); // 3
// console.log(b); // 5 



//For of iteration and destructuring//
var people = [{
  name: 'Mike Smith',
  family: {
    mother: 'Jane Smith',
    father: 'Harry Smith',
    sister: 'Samantha Smith'
  },
  age: 35
}, {
  name: 'Tom Jones',
  family: {
    mother: 'Norah Jones',
    father: 'Richard Jones',
    brother: 'Howard Jones'
  },
  age: 25
}];

for (var _i = 0; _i < people.length; _i++) {
  var _people$_i = people[_i],
      n = _people$_i.name,
      _people$_i$family = _people$_i.family,
      f = _people$_i$family.father,
      m = _people$_i$family.mother;
  console.log('Name: ' + n + ', Father: ' + f + n + ', mother: ' + m);
} // "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"
