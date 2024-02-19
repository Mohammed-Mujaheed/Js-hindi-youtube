const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);

    }

}

// user.welcomeMessage()
// user.username = "Mujju"
// user.welcomeMessage()
// console.log(this)


// function chai(){
//         let username = "hitesh"
        // console.log(this.username); //not working i.e undefined
        // console.log(username);  // working as expected
// }
    
// chai()

// const chai2 = function(){
//     let username2 = "amujju"
//     console.log(username2); // working as expected
// //     console.log(this.username2); //not working i.e undefined
//     console.log(this)  //it works 

// }

//  chai2()

// arrow function

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }

// chai()

// const addTwo = (num1, num2) => {
//         return num1 + num2      //explicit
//     }
     
// const addTwo = (num1, num2) =>  num1 + num2 
    
// const addTwo = (num1, num2) => ( num1 + num2 ) //implicit

// const addTwo = (num1, num2) => {username: "hitesh"} 
// const addTwo2 = (num1, num2) => ({username: "hitesh"}) // o/p will be return in object
// console.log(addTwo(7,3));

// console.log(addTwo2(7,3));

const f1 = (n1, n2) => ({name: "Mujju"})
// console.log(f1(1,2))
    