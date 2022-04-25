//Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

function fixTheMeerkat(arr) {
    let newArr = []
    let rev = arr.length - 1;
      for (let i of arr) {
        newArr.push(arr[rev - arr.indexOf(i)]); 
      }
     return newArr;
}

// Alternative Solutions

const fixTheMeerkat = arr => {
    return arr.reverse();
}

const fixTheMeerkat = ([tail, body, head]) => [head, body, tail]

function fixTheMeerkat(arr) {
    return arr.reverse();
}
