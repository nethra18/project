{ // enter new scope, TDZ starts
    let log = function () {
        console.log(foo); // foo declared later
    };
 
    // This is the TDZ and accessing foo 
    // would cause a ReferenceError
 
    let foo = 10; // TDZ ends
    log(); // called outside TDZ
}