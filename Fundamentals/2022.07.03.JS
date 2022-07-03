// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example 
    // { 6, 2, 1, 8, 10 } => 16 
    // { 1, 1, 11, 2, 3 } => 6

function sumArray(array) {
    if( array && array.length > 1){
      let sortedArray = array.sort((a,b) => a - b).slice(1,-1)
      return sortedArray.reduce((a,c) => a + c, 0)
    }else{
    return 0
    }
}

//Alternative Solution

function sumArray(array) {
    if (array) {
      array.sort(function(a,b) { return a-b });
      var newAry = array.slice(1,-1)
      return newAry.reduce(function(acc,val) { return acc + val},0);
    } else {
      return 0;
    }
}

