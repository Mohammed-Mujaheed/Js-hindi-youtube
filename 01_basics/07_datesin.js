// Dates
// node 01_basics/07_datesin.js

// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 11, 7 ,17,41)
// console.log(myCreatedDate.getMonth())
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("02-07-2024")
// console.log(myCreatedDate.toDateString())
//  console.log(myCreatedDate.toUTCString())
//  console.log(myCreatedDate.getTimezoneOffset())


// let myTimeStamp = Date.now()
// console.log(myTimeStamp.toLocaleString())
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.toLocaleString());
// console.log(newDate.getMonth());
// console.log(newDate.getMonth() + 10);
// console.log(newDate.getDay());
// console.log(newDate.getDate());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getVarDate());

newDate.toLocaleString('default', {
    weekday: "long",
    
})
