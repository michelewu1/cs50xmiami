/*
The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

- Store your current age into a variable.
- Store a maximum age into a variable.
- Store an estimated amount per day (as a number).
- Calculate how many you would eat total for the rest of your life.
- Output the result to the screen like so:
"You will need NN to last you until the ripe old age of X".
*/

// write your solution here...
var CurrentAge = 17;
var maxAge= 100;
var amount= 2;

var supply = (maxAge - CurrentAge)*(365*2);

console.log("You will need " + supply + " to last you until the ripe old age of " + maxAge + ".");
