/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

var cel= 56;
var fahr = (cel * 9)/5 +32;

console.log(cel + " C is " + fahr + " F. ")

var far= 56;
var celcius = Math.round((far - 32)*5/9);

console.log(far + " F is " + celcius + " C. ")
