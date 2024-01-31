// node 01_basics/05_strings.js
const name = "Mujaheed"
const repoCount = 50

// console.log(name + repoCount + " Value"); //older version of style 

//new one is here below
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh2-hc-com')

// console.log(gameName[8]);
// console.log(gameName.__proto__);

// console.log(gameName.charAt(8));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url)
// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))
// console.log(url.includes('com'))

// console.log(gameName.split('2'));

// let singleQuotesString = 'Hello, World!';
// let doubleQuotesString = "Hello, World!";
// let backticksString = `Hello, World!`;

// console.log(singleQuotesString)
// console.log(doubleQuotesString)
// console.log(backticksString)

// String.prototype.reverse = function() {
//     return this.split('').reverse().join('');
//   };
  
//   let reversedString = 'deehajuM'.reverse();
//   console.log(reversedString); // Outputs: !dlroW ,olleH

String.prototype.reverse = function() {
    return this.split("").reverse().join("");
};

let reversedString = 'deehajuM demmahoM'.reverse();
console.log(reversedString)
  




