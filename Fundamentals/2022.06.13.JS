// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.


//P number only positive, can never be negative
//R given a year, return the century it is in
//E
    // 1705 --> 18
    // 1900 --> 19
    // 1601 --> 17
    // 2000 --> 20
//P 
    // use Math.ceil function to round up to the next largest integer
    // divide year by 100 to obtain what century it is in 


function century(year) {
    return Math.ceil(year/100); // rounds up to next integer
}

//Alternative Solutions

function century(year) {
    var century = 0;
    
    for(var i = 0; i < year; i++) {
      if(i % 100 == 0) {
        century++;
      }
    }
    return century;
  }

