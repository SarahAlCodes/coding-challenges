// Write a function which calculates the average of the numbers in a given list.

find_average = array => array.length == 0 ? 0 : array.reduce((a,c) => a + c, 0 )/ array.length
  
  //p array
  //r return average of give array
  //e [5,5,5,10,5] => 6
  //p use reduce method to calculate sum, use .length property to obtain avg
  
  
  //Alternative Solutions

function find_average(array) {
    if (array.length === 0) {
    return 0;
    }
    var result = 0;
    for (i=0; i<array.length; i++) {
      result +=array[i];
    }
    return result/array.length;
}



