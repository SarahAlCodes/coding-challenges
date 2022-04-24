//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
    //calculate the rounded average (down) of the marks array
    return Math.floor(marks.reduce((x,y) => x+y) / marks.length);
}

//Alterantive Solution

function getAverage(marks){

    // calculates total number of marks
    var total = 0;
    for(var i = 0; i < marks.length; i++){
      total += marks[i];
    }
    
    /* returns total number of marks divided by number of marks
       rounded down to nearest integer */
    return Math.floor(total / marks.length);
}