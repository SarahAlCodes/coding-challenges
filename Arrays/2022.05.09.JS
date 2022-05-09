// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

function squareOrSquareRoot(array) {
    var newArr = [];
    for (let i = 0; i < array.length; i++) {
      var number = array [i]
      if (Math.sqrt(number) == Math.floor(Math.sqrt(number))) {
        newArr.push(Math.sqrt(number));
      } else{
        newArr.push(number * number)
      }
    }
  return newArr;
}

// Alternative Solutions

function squareOrSquareRoot(array) {
    return array.map(x => {
      const r = Math.sqrt(x);
      return (r % 1 == 0) ? r : (x*x);
    });  
}

const squareOrSquareRoot = array => array.map(a => Math.sqrt(a) % 1 == 0 ? Math.sqrt(a) : (a * a));

