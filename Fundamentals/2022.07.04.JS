// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
    return str.split('').map((i) => `${i}${i}`).join('')
}
  
  
  // strings, no other data type
  // returning a new string with each character (case sensitive) repeated once
  // ex - Hello => HHeelloo
  // split string to an array, use map to create a new array, reiterate each char
    //use template literales for repition
    //use join to convert array back to a string

//Alternative Solutions

const doubleChar = (str) => str.split("").map(c => c + c).join("");

function doubleChar(str) {
    return str.replace(/(.)/g, "$1$1")
}

function doubleChar(str) {
    let word = '';
    for (let i = 0; i < str.length; i++){
      word = word + str[i] + str[i];
    };
    return word;
};



