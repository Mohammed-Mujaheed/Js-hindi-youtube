// node 02_basics/01_arrays.js

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr)
// console.log(myArr[2])
// console.log(myArr[5])

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[2])
// console.log(myArr2[5])
// Arrays methods

// myArr.push(11)
// myArr.push(8)
// myArr.pop()
// myArr.push(11)
// console.log(myArr)

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr)

//slice and splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3);
// console.log(myArr.slice(1, 3));
console.log(myn1);
console.log("A", myArr);
// // console.log("\n")

console.log("C", myArr);
const myn2 = myArr.splice(1, 3, 9);
console.log(myn2);
console.log("C", myArr);

