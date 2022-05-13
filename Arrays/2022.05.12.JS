//You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

function differenceInAges(ages){
    const min = Math.min(...ages);
    const max = Math.max(...ages);
    
    return [min, max, max-min];
}


//Alternative solution

function differenceInAges(ages){
    let x = ages.sort((a,b) => a - b)[0]
    let y = ages.sort((a,b) => a - b)[ages.length - 1]
    return [x, y, y - x]
}