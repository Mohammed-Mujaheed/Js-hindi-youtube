//Immediately Invoked function Expressions (IIFE)

// (function() {
//     // code inside the IIFE
//     var x = 10;
//     console.log(x); // Output: 10
//   })();

  

  (function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')