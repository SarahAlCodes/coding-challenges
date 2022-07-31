/* 7 kyu Last Survivor link: https://www.codewars.com/kata/609eee71109f860006c377d1/train/javascript */

/* You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left. */

// string of letters, array of numbers
// return the remaining string of letters after the positions of each element is removed
// examples
    /* 
    string of one character and empty array
    'a', [] => 'a'
    'b', [] => 'b'

    string of more than one char removing from front
    'abc', [0] => 'bc'
    'def', [0,0] => 'f'

    string of more than one char removing from end
    'ab', [1] => 'a'

    string of more than one char removing from middle
    'lmn', [1] => 'ln'
    'toy', [1] => 'ty'
    */


/* 
test cases:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sample", function () {
   it('string of one character and empty array', function () {
      assert.deepEqual(lastSurvivor('a', []), 'a');
      assert.deepEqual(lastSurvivor('b', []), 'b');
  });
   it('string of more than one char removing from front', function (){
      assert.deepEqual(lastSurvivor('abc', [0]), 'bc');
      assert.deepEqual(lastSurvivor('def', [0,0]), 'f');     
  });
   it('string of more than one char removing from end', function (){
      assert.deepEqual(lastSurvivor('ab', [1]), 'a');   
  });
   it('string of more than one char removing from middle', function (){
      assert.deepEqual(lastSurvivor('lam', [1]), 'lm');   
  });
});

*/


function lastSurvivor(letters, coords) {
    if (letters.length < 2) return letters;
    
    //iterate through coords in a for loop
      for(let i = 0; i < coords.length; i++){
        //remove chars from coords[i]
        if (coords[i] == 0){
          letters = letters.substring(1);
        }else if(coords[i] == letters.length - 1) {
          letters = letters.substring(0, letters.length-1)       
        }else{
          letters = letters.substring(0, coords[i]) + letters.substring(coords[i]+1)  
        }
      }
     return letters;
}


//Alternative Solution

function lastSurvivor(letters, coords) {
    letters = letters.split('');
    for (let i = 0; i < coords.length; i++) {
       letters.splice(coords[i], 1)
    }
    return letters.join('')
}