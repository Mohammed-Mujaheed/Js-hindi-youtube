//Immediately Invoked function Expressions (IIFE)

// (function() {
//     // code inside the IIFE
//     var x = 10;
//     console.log(x); // Output: 10
//   })();

  

(function chai(){
    // named IIFE
    // console.log(`DB CONNECTED`);
})(); // (;-> semicolon in this line is very imp if u r writing another iife 
//          just below it, in order to stop exction at first then move to the secnd iife)

( (name) => {
    // console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');

(() => {
  console.log(`mujju lives in India`)
})()











