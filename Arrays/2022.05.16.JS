// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// addLength('apple ban') => ["apple 5", "ban 3"]
// addLength('you will win') => ["you 3", "will 4", "win 3"]

// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

function addLength(str) {
    return str.split(' ').map(word => `${word} ${word.length}`)
}
  
// Parameters- string
// Return- a new array of each word separated with space + length of elements in each word
// Examples- apple ban => apple 5, ban 3
// Pseudocode- separate each word with space, create new array,a add length of each word

function addLength(str) {
    let strArr = str.split(' ');
    let result = [];
    
    for (let i = 0; i < strArr.length; i++) {
      result.push(strArr[i] + ' ' + strArr[i].length);
    }
    return result;
}



