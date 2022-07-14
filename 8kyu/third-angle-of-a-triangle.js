/*You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.
*/




function otherAngle(a, b) {
    //triangles are equal to 180
    //return subtracting those 2 angles from 180
    return 180 - a - b
  }