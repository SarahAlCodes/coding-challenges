//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.replace(/!/g, "");
}
  

// string, only data type used in challenge
// return new string with all exclamation marka removed
// today was great! => today was great
// use replace method to return a new string
    // use regex with global flag
    // replace all ! with empty string