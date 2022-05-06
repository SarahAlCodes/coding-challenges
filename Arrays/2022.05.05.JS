// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

const check = (a,x) => a.includes(x);

//Alternative Solutions:
function check(a,b){
    return a.includes(b);
};

function check(a,x){
    let result = a.indexOf(x);
    return result < 0 ? false : true;
};