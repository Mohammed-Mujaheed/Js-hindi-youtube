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
// const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
const obj3 = Object.assign({obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2, obj4)

console.log(obj3)
