// Sum Mixed Array 
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

const sumMix = x => x.reduce((a,b) => a+ +b, 0)

// Alternative Solutions

function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
}

function sumMix(x) {
    if (Array.isArray(x)) {
        var sum = 0;
        x.forEach(function (element) {
                sum += Number (element);
        
        });
    };
    return sum;

}