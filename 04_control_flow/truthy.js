//it's nothing but implicitly assuming that a value is true or fasle 
 

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'fasle', " ", [], {}, function(){}

// examples

// const userEmail = "mj@gmail.com"
// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email")
// }

// const num1 = "0"
// if (num1) {
//     console.log(`${num1} is a truthy value`)   
// } else {
//     console.log(`${num1} is a falsy value`)
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");

// }

 //or
// if(Object.values(emptyObj).length === 0){
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null,undefined

let val1;
//  val1 = 5 ?? 10
//  val1 = null ?? 10
 val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

// console.log(val1)

// Terniary Operator 
//condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

const marks = 98;
const grade =
     marks >= 90 
      ? "A" 
      : marks >= 90 
      ? "B"
      : marks >= 80
      ? "C"
      : marks >= 70
      ? "D"
      : marks >= 60
      ? "E"
      : "F";
      
console.log(grade)
