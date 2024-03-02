const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
    // console.log(item);
    return item
} )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//by using filter loop
// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// console.log(newNums);

//by using forEach loop
const newNums = []
myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
})
// console.log(newNums);


//general doubt clearification
let m1 = 'mj';
 m1 = 'nj' // this is called overwrite 
// console.log(m1);

const m2 = 'mj';
//  m2 = 'nj' // but you cant overwrite here bcoz it is a const which immutable
// console.log(m2);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
 
  let userbooks = books.filter( (bk) => {
     return bk.genre === 'History'
  })  // using arrow function explicitly i.e writing return

 userbooks = books.filter( (bk) => 
(bk.publish >= 1999 && bk.genre === 'History' )) // using arrow
//    function implicitly i.e without writing {} $ return

// console.log(userbooks);