// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.



function combat(health, damage,) {
    return health > damage ? health - damage : 0;
} 

// two params, always numbers
// return new health subtracting current health - damage, always positive integer
// current 50, damage 10, new health 40




// Alternative Solution

function combat(health, damage) {
    return Math.max(health - damage, 0);
}
function combat(health, damage) {
    if (health - damage < 0){
      return 0;
    }else{
      return health - damage;
    }
}


