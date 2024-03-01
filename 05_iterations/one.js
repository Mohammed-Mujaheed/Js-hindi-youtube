//for
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

for (let i = 0; i <= 10; i++) {
    const element = i;
    // if(element == 7){
    //     console.log("7 is the worst number");
    // }
    console.log(element);
    // console.log(`${i}`);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
    //    console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j );
        
    }
    
}

// let myArray = ['md', 'mujju', 'mj']

// console.log(myArray.length);
// for (let index = 0; index <= myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

    
// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
   
// }

let r1 = [0, 1, 2, 3, 4, 5, 6, 7, 5, 8, 9, 10 ] 
for (let index = 0; index <= r1.length ; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        // continue
        break
    }
//    console.log(`Value of i is ${index}`);
   
}
