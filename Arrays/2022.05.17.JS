
// Create a method all which takes two params:
// a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.


function all( arr, fun ){
    return arr.every(fun)
}


// Alternative Solutions


function all(arr, fun)
{
  var length = arr.length;
  
  for (var i=0; i<length; ++i)
    if (!fun(arr[i]))
      return false;
  
  return true;
}


