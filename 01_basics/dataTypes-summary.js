// primitive

// 7 types : String,Number,

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}


// console.log(typeof anotherId);
// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(myFunction);

// **************************************************************

// Stack (Primitive), Heap (Non-Primitive)
let myYoutubename = "mohammedmujaheeddotcom"

let anothername = myYoutubename

anothername = "mujju unstopable"

// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email: "mj@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "mujjualbella@google.com"

// console.log(userOne.email);
// console.log(userTwo.email);

let x = 5;
let y = x; // y now holds a copy of the value 5
// y = x+5
x = 10;   // Changing x does not affect the value of y
// y = x+5;

console.log(x);
console.log(y);

let obj1 = { name: 'Alice' };
let obj2 = obj1;  // Both obj1 and obj2 reference the same object in memory
obj1.name = 'Bob'; // Changing obj1 also changes obj2

// console.log(`obj1:${obj1}, obj2:${obj2}`);

console.log(obj1)

console.log(obj2)
