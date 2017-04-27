
// This one line is a comment!

/*
This is a comment that can span
over multiple lines!
*/

// Use the var keyword to declare a variable.

var myScore = 0;

// Use the const keyword to declare a constant. A constant holds a value
// just like a variable but it can never be changed once it has been
// assigned a value.

const maxGoldCoins = 500;

// You can declare multiple constants or multiple variables on a single line
// if you separate them by commas:

var health = 100, armor = 25, goldCoins = 10, rubies = 5;

//------------------------------------------------------------------------------

// Javascript gives us several built-in functions which we are designed to help
//  us out. For example, we can use the console.log() function to print our data 
// to the console.

var shopKeeperText = "Would you like to buy something for your adventure?";

console.log(shopKeeperText);

shopKeeperText = "How about a sword or a new suit of armor?";

console.log(shopKeeperText);

//------------------------------------------------------------------------------

// If we want to build-up a String using some of our variables, we can use the
// + sign to append or concatenated the name of a constant or variable onto the 
// end of another string.

var weapon = "Dagger";
var price = 2;

console.log("Are you sure you want to purchase the " + weapon + " for " + price + " gold coins?");

weapon = "Short Sword";
price = 10;

console.log("Are you sure you want to purchase the " + weapon + " for " + price + " gold coins?");

weapon = "Mystical Blade of Awesomeness";
price = 1000;

console.log("Are you sure you want to purchase the " + weapon + " for " + price + " gold coins?");

