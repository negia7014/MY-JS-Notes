// string is an object
// to concatenate string
//string in js is immutable to maintain data integity and also ensure that string behave in predictive behave accross different operation
const name = "abhishek"
const repocount = 50
//console.log(name + repocount + " Value");
// now-a-day we use string interpolation instead of contcatenate
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
const gameName = new String('abhishek N')
//console.log(gameName[0]);
//console.log(gameName.__proto__); // {}

//console.log(gameName.length);
//console.log(gameName.toUpperCase()); // but original string does not change beacuse string is primitive and it store in stack memory and in stack value are copies

console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString)

const newStringone = "  abhi    "; // this string come in input form 
console.log(newStringone);
console.log(newStringone.trim()); // it remove starting space and end space 

const url = "https://abhi.com/abhi%20negi";
console.log(url.replace('%20','__'));

console.log(url.includes('__'));

console.log(gameName.split(' ')); // it convert string into array
