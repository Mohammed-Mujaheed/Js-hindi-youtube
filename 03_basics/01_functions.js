function sayMYName(){

    console.log("M");
    console.log("U");
    console.log("J");
    console.log("A");
    console.log("H");
    console.log("E");
    console.log("E");
    console.log("D");

}

// sayMYName()
// sayMYName --> it is just a reference 
// sayMYName() --> it's both reference i.e sayMyName + execute i.e ()

function addTwoNumbers(n1 , n2){
    // console.log(3+5);
    console.log(n1 + n2);
    
}

// addTwoNumbers(8, 9)

// addTwoNumbers(8, "a")
// addTwoNumbers("a", 9)

function f1(number1, number2){

    // let result = number1 + number2;
    // let result = console.log(number1 + number2); //it's not appropriate line
    // return result

    return number1 + number2;   //best shortest line 

}

const result = f1(3,5);
// console.log("Resul :", result)

function loginUserMessage(username){
    if(!username){
        console.log("please enter a username");
        return
    } 
    return `${username} just logged in`
}

// console.log(loginUserMessage(NaN));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage(null));
// console.log(loginUserMessage(0));
// console.log(loginUserMessage());  // all above lines are same output 
                                // bcoz all exhibit same type i.e undefined

function addnums(a,b){
    // return a+b;
    let sum = a + b;

    console.log(sum);
}

// addnums(3,4)

//  let sum = addnums(5,6);
//  console.log(sum);
// console.log(addnums(2,5))


// some medium level function operation

function calculateCarPrice(...num1){
    return num1

}

// console.log(calculateCarPrice(200, 400, 600, 5200));
// console.log(calculateCarPrice());
// console.log(calculateCarPrice(200, 500));

const user = {
    username: "Mujju",
    price:199
}

function handleObject(anyObject){
    // console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject( {
    username: "Mujju",
    price:199
})

const myNewArray = [100, 200, 500]

function returnSecondValue(getArray){
    
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))

// console.log(returnSecondValue(
//     [100, 200, 500]
// ))

