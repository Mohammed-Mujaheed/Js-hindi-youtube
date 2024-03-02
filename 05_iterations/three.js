// for of loop

// ["", "", ""]
// [{}, {},{}]


// for (const iterator of object) {
    
// }


const arr = [1, 2, 3, 4, 5]
let result = "";

for (const digits of arr) {

result += digits

    // console.log(digits);
    
}
// console.log(result);


const greetings = "Hello world!"
// let result = "";
for (const greet of greetings) {
    // result += greet;


    // console.log(`${greet}`);
    // console.log(result);
}

// console.log(result);



// const greetings = "Hello world!";
// let result = "";

// for (const greet of greetings) {
//     // result += greet;
//     result =  result + greet;
// }

// console.log(result);

//Maps - it's a object it takes only unique values wihtout repeatition
//  it holds key-value pairs
const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
// map.set('IN', "India")

console.log(map);

for (const [key,value ]of map) {
    // console.log(key, '->', value);
    
}

const myObject = {

    'game1': 'NFS',
    'game2': 'Spiderman'

}

// map.delete('USA')
// console.log(map.get('USA'))


//usually object cant excute directly as maps there is another method to run it is below
for (const [key, value] of Object.entries(myObject)) {
    // console.log(key, ':-', value);
    // console.log(`${key}: ${value}`);
    
}
