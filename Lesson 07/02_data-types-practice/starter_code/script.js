// Use a console.log to print out "hello world!" by using the given variables. Try using concatenation and interpolation for two different methods.
// How can you do interpolation? https://stackoverflow.com/questions/1408289/how-can-i-do-string-interpolation-in-javascript
// Using research sources, like Documentation and Stack Overflow, is a vital skill for programmers! 
const message = "hello";
const recepient = "world";

console.log(message + " " + recepient + "!")

// One plus one is...? Research as many ways as you can for adding 1 to the number variable.
// Then, console.log the phrase "1 + 1 is 2" by using the updated value of the number variable.
let number = 1;

// Data types can cause unexpected issues in Javascript. Use the typeof operator to investigate and log the type of the following variables. Your console messages should be formatted like so: "clearancePrice is a number"
// Documentation on typeof: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
const programmingIsCool = true;
const clearancePrice = 1.99;
const lifeTheUniverseAndEverything = 42;
const theCruelestMonth = "April";

console.log(typeof programmingIsCool);
console.log(typeof clearancePrice); 
console.log(typeof lifeTheUniverseAndEverything);
console.log(typeof theCruelestMonth);
console.log(typeof iDoNotKnow)
console.log(typeof iDoNotExist);

if(typeof iDoNoExist == "undefined") {
    console.log("iDoNotExist has not been set")
}
/* function parameters */
function addMe(firstVal, secondVal){
    console.log(firstVal + secondVal);
}
addMe(2,2);

function hal(myName){
    console.log("I'm sorry, " + myName + " can't do that")
}
hal("Dave")

function nameFun(myName){
    let nameLength = myName.length;
    console.log("The name " + myName + " has " + 
    nameLength + " leters.")
}
nameFun("Dave")
nameFun("Lisa")
nameFun("Lucille")

function addFour(inputNumber){
    let outputNumber = inputNumber + 4 
}