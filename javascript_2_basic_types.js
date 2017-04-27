
//------------------------------------------------------------------------------

// JavaScript variables can hold many data types: numbers, strings, objects 
// and more:

var length = 16; // Number
var name = "John"; // String
var fullName = {firstName:"John", lastName:"Doe"}; // Object

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

var score = 4200;        // Integers do not have any fractional part or decimal values.
var accuracy = 88.7;     // Decimals can have fractional parts.

// Very large or small numbers can be written with scientific or 
// exponential notation:

var y = 123e5;      // 12300000
var z = 123e-5;     // 0.00123

//------------------------------------------------------------------------------

// Booleans can only have two values: true or false.

var thisGameRocks = true;
var playerFoundMagicKey = false;

//------------------------------------------------------------------------------

// JavaScript arrays are written with square brackets with the array items 
// separated by commas.

// The following code declares (creates) an array called levelNames, which 
// containing the name of three items (level names):

var levelNames = ["Swamp of Despair", "Cave of Woes", "Castle of the Enemey Boss"];

console.log(levelNames[0])
console.log(levelNames[1])
console.log(levelNames[2])

