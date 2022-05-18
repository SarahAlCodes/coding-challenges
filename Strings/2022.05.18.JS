// Convert boolean values to strings 'Yes' or 'No'.
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


function boolToWord( bool ){
    return bool ? 'Yes':'No';
}

//Alternative Solution

function boolToWord( bool ){
    if (bool) {
      return 'Yes';
    } else {
      return 'No';
    }
}

function boolToWord( bool ){
    return bool === true ? "Yes" : "No";
}
