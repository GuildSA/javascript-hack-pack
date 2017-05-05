
//------------------------------------------------------------------------------

// JavaScript variables can hold many data types: numbers, strings, objects 
// and more:

var weapon = "Mystical Blade of Awesomeness"; // A String.
var price = 1000; // A Number.

//------------------------------------------------------------------------------

// JavaScript has 5 primitive data types. A primitive value is a simple data 
// value with no additional properties and methods.
//
// string - A variable that is a series of characters like "Game Over".
// number - A number value like 42 or 3.14.
// boolean - A variable that can be true or false.
// undefined - A variable without a value, has the value undefined.
// null - In JavaScript, null means "nothing". It is supposed to be something that 
//        doesn't exist. Unfortunately, in JavaScript, the data type of null is 
//        an object.

// You can use the JavaScript typeof operator to find the type of a 
// JavaScript variable.

console.log(typeof "Game Over!"); // Prints "string"
console.log(typeof 42);           // Prints "number"
console.log(typeof 3.14);         // Prints "number"
console.log(typeof undefined);    // Prints "undefined"
console.log(typeof null);         // Prints "object"  (I know... this doens't make any sense!)

//------------------------------------------------------------------------------

// JavaScript is dynamicly typed. This means that the same variable can be used 
// to hold different data types:

var x;               // x is not set to any value so it is undefined.
var x = 42;          // Now x is a Number
var x = "John";      // Now x is a String

//------------------------------------------------------------------------------

// A string (or a text string) is a series of characters like "Game Over".
// Strings are written with quotes. You can use single or double quotes:

var gameOverMessage = "Game Over";   // Using double quotes
var gameOverMessage = 'Game Over';   // Using single quotes

// You can use quotes inside of a string, as long as they don't match the quotes 
// surrounding the string:

var playerDiedMessage = "It's lights out Bro!";             // A single quote used inside a double quoted string
var playerDiedMessage = "Player 'Kewl Dude' was killed!";   // Single quotes used inside a double quoted string
var playerDiedMessage = 'Player "Kewl Dude" was killed!';   // Double quotes used inside a single quoted string

//------------------------------------------------------------------------------

// JavaScript has only two types of numbers: Integers and Decimals:

var score = 4200;             // Integers do not have any fractional part or decimal values.
var headShotAccuracy = 88.72; // Decimals can have fractional parts.

// Very large or small numbers can be written with scientific or 
// exponential notation:

var ammoRemaining = 123e5;             // 12300000
var sizeOfTargetOnEnemyBoss = 123e-5;  // 0.00123

//------------------------------------------------------------------------------

// Booleans can only have two values: true or false.

var thisGameRocks = true;
var playerFoundMagicKey = false;

//------------------------------------------------------------------------------

// JavaScript arrays are written with square brackets with the array items 
// separated by commas.

// The following code creates an array called levelNames, which contains the names 
// of 5 levels for a game:

var levelNames = ["Village of Hostile Peasants", "Forest of Bats", "Swamp of Despair", "Cave of Woes", "Castle of the Enemy Boss"];

// We can access the array values stored at each index like so:

console.log(levelNames[0])
console.log(levelNames[1])
console.log(levelNames[2])
console.log(levelNames[3])
console.log(levelNames[4])

//------------------------------------------------------------------------------

// JavaScript objects are written with curly braces.
// Object properties are written as name:value pairs, separated by commas.

var player1 = {
    name:"Kewl Dude",
    numKills:250,
    favWeapon:"Plasma Rifle in the 40 Watt Range"
};

// We can access the object's properties like so:

console.log("Player's Name: " + player1.name)
console.log("Number of Kills: " + player1.numKills)
console.log("Favorite Weapon: " + player1.favWeapon)

// https://www.w3schools.com/js/js_datatypes.asp
