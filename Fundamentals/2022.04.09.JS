// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    const x = weight / Math.pow(height,2)
    if (x <= 18.5) {
      return 'Underweight'
    } else if (x <= 25.0 ){
      return 'Normal'
    } else if (x <= 30.0 ){
      return 'Overweight'
    } else{
      return 'obese'
    }
    
}


// Alternative Solution

function bmi(weight, height) {
  
    var bmi  = weight/(height*height);
    
     return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
    
}