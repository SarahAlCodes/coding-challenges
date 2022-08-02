/* 
Complete the solution so that it reverses all of the words within the string passed in.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/

//read the problem aloud
//summarize the problem in your own words
//ask clarifying q's
//create 6 examples
//write your function sign ature with params
//write pseudocode
//write a test
//write the code to pass the test
//repeat the last two steps until satisfied the the probelm has been solved


function reverseWords(str){
    console.log(str)
    //new str for reversed words
    let reverseWords = '';
    //split string on space for array of str
    str = str.split(' ');
    //iterate backwards through array of str
    for(let i = str.length-1; i >= 0; i--){
      //add each word to reversed words str
        reverseWords += str[i]
      //add a space
        reverseWords += ' ';
    }
    //trim reversed words
    reverseWords = reverseWords.trim()
    //return reversed words
    return reverseWords;
    }
  
  
  
//examples:
// ''  => ''
// 'a'  => 'a'
// 'cat'  => 'cat'
// 'cat dog'  => 'dog cat'
// 'Cat Dog'  => 'Dog Cat'
// 'My cat is cool!'  => 'cool! is cat My'