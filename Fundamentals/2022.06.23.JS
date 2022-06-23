// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function(l , w) {
    if(l === w)
      return l*w
    else
      return 2 * (l + w)
};
   

//p, whole numbers, no other data type 
//r return area for square and perimeter for rectangle
//e 
    // 6, 10 --> 32
    // 3, 3 --> 9
//p  if length and width are the same, return area l*w, else return perimeter 2 * (l+w)