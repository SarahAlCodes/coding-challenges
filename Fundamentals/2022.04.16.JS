// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
    return Math.floor(time / 2);
}

//Alternative Solution

function litres(time) {
    return Math.floor(time * 0.5);
}


//P nums
//R number rounded to the smallest value
//E time = 3 ----> litres = 1
//P evaluate examples, use math.floor function to obtain smallest value, divide by 2