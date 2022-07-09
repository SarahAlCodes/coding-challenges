// Create a method to see whether the string is ALL CAPS.
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True


String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this.toString();
}

//Alternative Solutions
String.prototype.isUpperCase = function () {
    return !/[a-z]/.test(this);
}
// It's much faster to search for one lowercase character
// than to match the entire string of uppercase characters
const isUpperCase = x => !x.match(/[a-z]/);


