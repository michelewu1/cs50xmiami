/*

MixUp

Create a function called mixUp. It should take in two strings,
and return the concatenation of the two strings (separated by a space) slicing out
and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.

For example:
  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

function mixUp(a, b) {
  var mixA = a.charAt(0);
  var mixB = b.charAt(0);

  var mix = a.replace(mixA, mixB) + " "+ b.replace(mixB, mixA);
  console.log(mix);
}

mixUp("hello" , "world");
