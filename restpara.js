function sum(...args) {
    let total = 0;
    for (const a of args) {
        total += a;
    }
    return total;
}
 
var a = sum(1, 2, 3);
console.log(a);