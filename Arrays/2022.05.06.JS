//Return a new array consisting of elements which are multiple of their own index in input array (length > 1)

//For a new array create a function using the filter method
//To find if an element is an multiple of its index use element/index


function multipleOfIndex(array) {
    return array.filter((el,index)=> el % index === 0)
}