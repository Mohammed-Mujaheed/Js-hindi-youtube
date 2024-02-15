// const tinderUser  = new Object() // it's a singleton object
// const tinderUser = {} // it is not a singleton object 

const tinderUser = {
//     id: "123abs",
//     name: "Sammy",
//     isLoggedIn: false
}

tinderUser.id = "456klmn"
tinderUser.name = "Mujju"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const regularUser = {
    email: "some@gamil.com",
    fullname: {
        userfullname:{
            firstname: "Mohammed",
            lastname: "Mujaheed"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)
// console.log(regularUser.fullname.userfullname.lastname)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj2, obj1, obj4)

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(tinderUser)
// console.log(users[1])
// console.log(users[1].email)


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(Object.entries(users[1]));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('mujju'));

const course = {
    coursename: "Js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}

// console.log(course.courseInstructor)

const {courseInstructor:sir} = course
const {coursename:subjeect} = course
// console.log(courseInstructor)
console.log(sir);
console.log(subjeect)

// console.log(course)
// console.log(Object.keys(course))
// console.log(Object.values(course))
// console.log(Object.entries(course))

let MUJJU = {
    name:"Mohammed Mujaheed",
    USN: "3PD21EI007",
    Locality: "gulbarga"
}

// Location = "gulbarga"

let{name:n, USN:u, Locality:l} = MUJJU
let{} = course

console.log(MUJJU)
console.log(n)
console.log(u)
console.log(l)