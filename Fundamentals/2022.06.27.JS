// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
    if(month <= 3){
      return 1
    }else if(month <= 6){
      return 2
    }else if(month <= 9){
      return 3
    }else{
      return 4
    }
  }
  
  // integer from 1-12
  // return the quarter the month would belong to 
  // 2 => 1, 11 =>4
  // use conditional statements, 
     //set month less tham or equal to each quarter
     //return the specifed quarter the range belongs to


//Alternative Solution

const quarterOf = m => Math.ceil(m/3);