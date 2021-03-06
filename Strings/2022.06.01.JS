
//Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'

// Your hurried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.


function stringClean(s){
    return s.replace(/\d/g, "");
}

//Alternatove Solutions

function stringClean(s){
    return s.replace(/[0-9]/g, '');
}


function stringClean(s){
    // Function will return the cleaned string
  var result = '';
  for(var i=0;i<s.length;i++) {
    if(isNaN(s[i])||s[i]==' ') result+=s[i]; 
    }
  return result;
}
 
//  P string
//  R strings without any numbers, can have special characters
//  E f6jo! => fja
//  P use replace method to creae a new string, removes any numbers [0-9] and changes


