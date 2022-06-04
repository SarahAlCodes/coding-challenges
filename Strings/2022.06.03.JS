//Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.


function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}


//Alternative Solutions

function sayHello( name, city, state ) {
    return 'Hello, ' + name.join(' ') + '! Welcome to ' + city + ', ' + state + '!';
}


const sayHello = (name, ...city) => `Hello, ${name.join(' ')}! Welcome to ${city.join(', ')}!`

//P strings, no numbers
//R return name,city and state that welcome a person
//E sayHello(['Sarah', 'Al'], 'Miami', 'Florida')
//P use template literals, join first and last name in name parameter.

   