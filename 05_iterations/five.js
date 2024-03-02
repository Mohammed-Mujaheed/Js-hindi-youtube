// forEach loop
// console.log(this);  o/p >> {}

const coding = ["js", "ruby", "java", "python", "cpp"]

//in for each loop no need to use funtion name

coding.forEach(function (val){
    // console.log(val)
})

//by using arrow funtion 
coding.forEach( (item) => {
    // console.log(item);
})


// function printMe(item){
//     console.log(item);
// }
// console.log(printMe);

// or

 coding.forEach(function(item){
    // console.log(item);
})

coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);

})


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

// myCoding.forEach( (val)=> {
//     console.log(val.languageName, "->", val.languageFileName);
//     // console.log(val.languageFileName);
// })


myCoding.forEach( ) //call back function
myCoding.filter( ) // predicate
myCoding.map( )  // call back function

