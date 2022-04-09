// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.


function past(h, m, s){
    const hours = h * 60 * 60 * 1000;
    const minutes = m * 60 * 1000;
    const seconds = s * 1000;
    
    return hours + minutes + seconds;
}

//p hours, minutes, seconds, numbers can never be negative or floats
//r time in milliseconds since midnight
//e 
    // h = 0, m = 1, s = 1
    // result = 61000   
//p assign individual variables that convert hours mins and secs to milliseconds
    // use arithmetic operator + to return adding hours,mins, and secs


//Alternative Solution

function past(h, m, s){
    return h * 3600000 + m * 60000  + s * 1000;
}




