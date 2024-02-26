// node 04_control_flow/one.js

// comparasions
// <, >, <=, >=, ==, !=, ===, !==
// if


// if(2 !== "2"){
//     // console.log("janabe aali Mohammed")
// }

// const temp = 70;
// if(temp < 60){
//     console.log("temp is less than 60")
// } else {
//     console.log("temp is greater than 60")
// }

// console.log("finally executed")

// const score = 200
// if (score > 100) {
//     const power = "fly" // it will give error for line 27th
//    or // var power = "fly"  // it will execute the code along with 27th line
//     console.log(`User power: ${power}`);    
// }
// console.log(`User power: ${power}`);

// const balance = 1000
// if(balance > 500) console.log("test");
// if(balance > 500) console.log("test"),console.log("test2");

// if(balance < 500){
//     console.log("less than 500");
// } else if(balance < 750){
//     console.log("less than 750")
// } else if (balance < 900){
//     console.log("less than 900")
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
    
}