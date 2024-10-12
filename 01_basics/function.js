function sayMyName(){
    console.log("Abhishek Negi")
}

sayMyName // function reference
//sayMyName() // function execution

/*function addTwoNumber(number1,number2){
    console.log(number1+number2)
}*/

//const result = addTwoNumber(3,5)
//console.log("Result: ", result) //  undefined

function addTwoNumber(number1,number2){
    let result = number1 + number2
    return result 
   // console.log("abhishke") // unreachable code
}
//const result = addTwoNumber(3,5)
//console.log("Result: ", result)

function loginUserMessage(username){
    return `${username} just logged in`
}
//console.log(loginUserMessage("Abhishek Negi"))
//console.log(loginUserMessage()) //undefined just logged in

/*function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username")
        return 
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())
*/

function loginUserMessage(username = "abhi"){
    if(username === undefined){
        console.log("please enter a username")
        return 
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage())
//console.log(loginUserMessage("Abhishek Negi")) // it override the value abhi

//rest->To collect multiple elements or arguments into a single array or object.
// spread->To distribute the elements of an array, object, or iterable into individual elements.

/*function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,100,300,500))*/


function calculateCartPrice(val1,val2, ...num1){
    return num1;
}
//console.log(calculateCartPrice(200,100,300,500))

// pass object as an argument in the function
const user = {
    username : "Abhishek",
    price : 200
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleObject(user)

handleObject({
    username : " Abhishek Negi",
    price:2000
})

// pass array as an argument in a function
const myArray = [200,500,100,400]

function returnsecondvalue(getarray){
    return getarray[2]
}
//console.log(returnsecondvalue(myArray))

console.log(returnsecondvalue([200,500,400,100]))

// Global and loca scope 
  //if()

// SCOPE LEVEL
// Nested function
function one(){
    const username= "abhishek"

    function two(){
       const website = "Linkdein"
       // console.log(username);
    }
 //  console.log(website)
    two()
}
    one()

// MINI HOSITING

//console.log(addone(6)) //7

function addone(num){
    return num+1;
}
//addone(6)


//addTwo(6) //Cannot access 'addTwo' before initialization
const addTwo = function(num){  // expression
    return num+2
}
//addTwo(6)

// this and arrow function

const users = {
    username : "abhishek",
    price :1000,
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`); // current context
        console.log(this)
    }
}

//users.welcomeMessage()
//users.username = "NegiBhai"
//users.welcomeMessage()
//console.log(this)   // {}

const addOne = function(){
    let username = "abhishek"
    //console.log(this.username)//undefined
}
//addOne()

// ARROW FUNCTION

const addne = ()=>{
    let username = "abhishek"
    console.log(this.username)//undefined
}
//addne()

//  ()=>{ }

/*const Add = (num1,num2) =>{
    return num1+num2;
}
console.log(Add(3,5))
*/

// implicit return 
//const Add = (num1,num2) =>  num1 + num2
//const Add = (num1,num2) =>  (num1 + num2)

const Add = (num1,num2) =>  ({username:"abhishek"})
//console.log(Add(3,5))

// IIFE(Immediately Invoked Function Expression)
// a function which is call immediately execute and global scope ke variable declaration ke pollution ko hatane ke liye IIFE use hota hai 



//(function defination)(execution call)

(()=>{
    console.log("First IIFE: DB connected to");
})();

// write two IIFE in one file 

(function chai(){  // named IIFE
    console.log("Second IIFE: DB Connected");
})();

((name)=>{  // unnamed IIFE
    console.log(`First IIFE: DB connected to${name}`);
})('abhishek');

