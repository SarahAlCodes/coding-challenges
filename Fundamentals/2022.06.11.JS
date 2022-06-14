//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.



function invert(array) {
   return array.map(n => n * -1)
}

//p array, positive and negative numbers
//r absolute value of each number
//e ([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
//p 
//use map method to return a new array
//multiply each number by -1


//Alternative Solution

function invert(array) {
    var newArr = [];
    for(var i = 0; i < array.length; i++){
      newArr.push(-array[i]);
    }
     return newArr;
}

function invert(array) {
    return array.map(n => n && -n)
}

const invert = a => a.map(x=>x!==0?-x:x)
