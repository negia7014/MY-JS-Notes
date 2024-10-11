// object can create using literal and constructor
// object literal

// They are unique and immutable. Even if you create multiple symbols with the same description ("key1"), each symbol is different from the others.

//const JsUser = {}
const mySymb = Symbol("key1") // how to use symbol as a key in obj
const JsUser = {
    name : "Abhishek",
    "Full name" : "abhisheknegi",
    age : 21,
    //mySymb: "myKeys1",
    [mySymb] : "myKeys1",
    location : "noida",
    email : "abhishek@microsoft.com",
    isloggedIn : false,
    // pass array in obj
    lastloginDays :["Monday","wednesday"]
}
// oject can be access
//console.log(JsUser.email);

//console.log(JsUser["email"]) // using square brackets 
// console.log(JsUser[email]) ReferenceError: email is not defined
// it give error beacuse email behind the scene is tracked as a string
//console.log(JsUser.Full name); // we cannot access string key using dOT OPERATOR

//console.log(JsUser["Full name"])
//console.log(typeof JsUser.mySymb) //JsUser.mySymb looks for a property literally named mySymb.

//console.log(typeof JsUser[mySymb]) //JsUser.mySymb looks for a property literally named mySymb.

// how to change value of object
JsUser.email = "abhishek@chatgpt.com";

// we can't cahnge the value of object
//Object.freeze( JsUser)
JsUser.email = "abhishek@openAI.com"
//console.log(JsUser)

// pass function in an object
JsUser.greeting = function(){
    console.log("Hello Js Users!");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js Users : ${this.name}`)
}
//console.log(JsUser.greeting); //[Function (anonymous)]

//console.log(JsUser.greetingTwo); // [Function (anonymous)]

//console.log(JsUser.greeting());
//console.log(JsUser.greetingTwo());

// declare object using constructor (Singleton)
const tinderUser = new Object()  // singleton object

// pass obj with-in another object
 const regularUser = {
    email : "abhi@gmail.com",
    fullname : {
        username : {
            firstname : "Abhishek",
            Lastname : "Negi"
        }
    }
 }
 //console.log(regularUser.fullname)
//console.log(regularUser.fullname.username.firstname)

const obj1 = {
    1: "A",
    2: "b"
}
const obj2 = {
    3:"A",
    4:"b"
}

// Combining two object into one object
//const obj3 = {obj1,obj2}
//console.log(obj3)

//usinrg assign method -> it did shallow copies
//const obj3 = Object.assign({},obj1,obj2);  // target and source
//console.log(obj3);

// using spread operator 
const obj3 = { ...obj1, ...obj2}
//console.log(obj3)

// array of object -> jab database se values aayengi
const users = [
    {
        id:1,
        email:"abhi@gmail.com"
    },
    {
        id:2,
        email:"negi@gmail.com"
    }
]

users[0].email

// we can get each and every keys of object in the form array
//console.log(Object.keys(JsUser))
//console.log(Object.values(JsUser))
// it converts each keys and values in form of array
//console.log(Object.entries(JsUser)) 

// many times haam object me looping karte values nikalte hai but bahut baar vo values exist nhi karti hai ko crash hone ka chance hai
//console.log(JsUser.hasOwnProperty('age'))

const course = {
    coursename : "web-development",
    price:"1000",
    courseInstructor:"Abhishek-Negi"
}

/*Object Destructuring in JavaScript is a syntax that allows you to extract properties from an object and assign them to variables  */
//course.courseInstructor

//const {coursename,courseInstructor} = course
//console.log(courseInstructor)
//console.log(coursename)

const {coursename:courses,courseInstructor:Instructor} = course
console.log(courses)
console.log(Instructor)