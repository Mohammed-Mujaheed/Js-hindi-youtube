//for in loop


const myObject = {
    js: 'javacript',
    cpp: 'C++',
    rb: "RUby",
    swift: "swift by apple"

}

// by using for of loop
// for (const [key, value] of Object.entries(myObject)) {
//     console.log(`${key} shortcut is for ${value}`)
// }

for (const key in myObject) {
//    console.log(myObject[key]);    

    }

// by using for in loop
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`)
        
}

