//6) The area of a rectangle is equal to its length x width.

//Define a function and the required parameters to calculate the area of a rectangle.
//The function should return the area, NOT print it.
function areaofRectangle(length, width)
{
  let area;
 // if(width==undefined){
    if(!width){
    area=length*length;
  }else{
area=length*width;
  }
  
  console.log(`The area is ${area} cm^2`);
}


//If only one argument is passed to the function, then the shape is a square. Modify your code to deal with this case.
console.log(areaofRectangle(6));

//Call your area function, then use a template literal to print, “The area is ____ cm^2.”
