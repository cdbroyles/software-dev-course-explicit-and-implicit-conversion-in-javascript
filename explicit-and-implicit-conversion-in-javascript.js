/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;  // The string "5" is implicitly converted to a number 5 due to the subtraction operator.  If the addition operator was used, the string "5" would be concatenated to the number 2 to get the string "52".
console.log("The result is: " + result);

let isValid = Boolean("false");  // The string "false" is a truthy value, so the boolean function will return true.  I am unsure if this code is supposed to have an error, or if it is supposed to run due to a true boolean value.
if (isValid) {
    console.log("This is valid!");
}

let age = Number("25");  // Explicit type conversion from string to number.  By doing this, the string "25" is converted to a number 25 which can now be added to 5 to get the total age.
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

// Part 2: Write Your Own Examples
// Implicit Type Conversion Example
let implicitConversion = "5" + 2;
console.log(implicitConversion);

// Explicit Type Conversion Example
let explicitConversion = Number("5") + 2;
console.log(explicitConversion);

//edge case example
let emptyNumber;  //This variable is undefined.
console.log(emptyNumber);
emptyNumber = Boolean(emptyNumber);  //This variable is now a boolean value of false.
console.log(emptyNumber);
let edgeCase = Number("5") + Number(emptyNumber);  //The string "5" is converted to a number 5, and the boolean value of false is converted to a number 0.
console.log(Number(emptyNumber));
console.log(edgeCase);