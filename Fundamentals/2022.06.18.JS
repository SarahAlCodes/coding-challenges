// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]


const reverseSeq = n => {
    const result = []
    for (let i= n; i > 0; i -= 1){
      result.push(i);
    }
      return result;
  };
  
  //p array of numbers, non negative integers
  //r a reversed sequence of the array 
  //e n = 5 => [5,4,3,2,1]
  //p assign results to an empty array, loop down from n to 1, use push method to add new items to end of array

