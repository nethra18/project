"use strict";

// // it prints output 10 at 10 times//
// for(var i=0; i<10; i++)
// setTimeout(
//     function() {
//         console.log(i);
//     },
//     i*100
// );
// //     }
// // }
// // var a=10;
// // a = 'test';
// console.log('start');
// setTimeout(
//     function() {
//         console.log('timeout')
//     },1000
// );
// console.log('end');
// 'use strict'
// const a = 'test'; //read only 
// a = 12; // you cant reassign new value to this variable
// for(let i = 0; i < 10; i++){
//  setTimeout(
//     function() {
//          console.log(i);
//     },
//    i*100
// );
// } // we get outpue of 0 to 9
// var test=function(a){
// return {a:'test',b:'data'};
// }
// var test=(a)=> {a:'test',b:'data'}) // arrow function 
//template/literal string//
// const name = 'mike';
// const msg = 'hello from' + name+'good morning!'; // semicolon is not mandatory
// const msg1='hello from ${name}good morning';
// console.log(msg1);
// spread attributes
// ...spread operator 
// function sumOfNos(...a){ // it is taking multiple values and converting into an array
//     let sum = 0
//     for(let i=0;i<a.length;i++){
//     sum += a[i];
// }
// console.log(sum);
// }
// sumOfNos(1,2,3); // output is 6
// let user={
//     name:'mike'
//     test:()=>console.log('test')
// }
// user.name // conventional array technique
// user.test() //test is a function
// user['name'] // this is in widely using in programings
// user ['test']()
// //difference b/w .key and [key]
// const key='name';
// user.key // undefined error
// user[key] // it will take this has variable
var user = {
  userName: 'mike',
  userAge: 21
};
var userName = user.userName; // it is extracting the particular data to be display

var userAge = user.userAge;
console.log(userName); // it gives output of mike that is username

console.log(userAge);
