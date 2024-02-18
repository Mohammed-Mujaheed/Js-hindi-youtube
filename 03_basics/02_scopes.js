let a = 300

if(true){
    const a  = 30;
    let b = 10
    const c = 20
   

// console.log("INNER: ", a)

}


// console.log(a);
// console.log(b);
// console.log(c);

// ex-1
// Global variable
const globalVar = "I'm global!";

function exampleFunction() {
  // Accessing the global variable
  console.log(globalVar);

}

// exampleFunction(); // Outputs: I'm global!


// ex-2

function exampleFunction2() {
    // Local variable
    const localVar = "I'm local!";
  
    // Accessing the local variable
    console.log(localVar);
  }
  
//   exampleFunction2(); // Outputs: I'm local!
  
// Trying to access localVar outside the function will result in an error
//   console.log(localVar); // This line would cause an error


// Global variable
const globalVar2 = "I'm global!";

function exampleFunction3() {

  // Local variable
  const localVar2 = "I'm local!";
  // console.log("the local var2 is: ",localVar2);
  // console.log("the global var2 is: ",globalVar2);

}

// console.log(localVar2)

// exampleFunction3();

function one(){
  const username = "Mujju"

  function two(){
    const website = "Youtube"
    console.log(username);
  }

  // console.log(website);
  two()

}

//one()

if(true) {
  const username = "mj-bhai"
  // if(username === "mj-bhai"){  //or
  if(true){
    const website = " youtube"
    // console.log(username + website);
  }

  //  else{
  //   console.log("please check the spelling")
  // }

  // console.log(website);

}

// console.log(username)

// ************************ Interesting **********************

// console.log(addone(5))
function addone(num){ 
  return num + 1
 
}

// console.log(addTwo(5))
const addTwo = function(num){  // it is generally called as expression 
                              // when if fnc is assign to var/const
    return num + 2
}



// Function Declaration
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Mujju"))

// Function Expression
const greetExpression = function(name) {
  return "Hello, " + name + "!";
};
console.log(greetExpression("Mujju"))


// Arrow function example  //it is known for its concise text
const greetArrow = (name) => "Hello, " + name + "!";
console.log(greetArrow("Mujju"))


  