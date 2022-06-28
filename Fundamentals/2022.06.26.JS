// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.


function otherAngle(a, b) {
    let thirdAngle = 180 - (a + b)
    return thirdAngle;
  }
  
  // whole integers, wont ever be 0 or negative
  // third angle of a triangle (sum of 3 = 180)
  // ex - a-20,b=80 => c=80
  // create new variable, subtract the sum of a and b from 180