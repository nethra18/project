// // var names = ['Nethra', 'gayatri', 'Peter'];
// // var lengths = names.map(name => name.length);
 
// // console.log(lengths);




// const numbers = [1,2,3,4,5];
// const double = numbers.map(x => x*2);
// console.log(double);

var officers = [
    { id:1, name:"netra", location:"bangalore"},
    { id:2, name:"latha", location:"mysore"},
];
const officersIds = officers.map(officers =>officers.id);
const officerslocation = officers.map(officers =>officers.location);
console.log(officersIds);
console.log(officerslocation);