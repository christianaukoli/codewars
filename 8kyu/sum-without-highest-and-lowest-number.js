/*Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/




function sumArray(array) {
    //console.log array to see and verify
    console.log(array);
    //set condition they gave us
    if(array===null || array=== [] || array === undefined || array.length <3){
      return 0
    } else {
      //determine the highest and lowest values
  //sort from lowest to highest and remove those 2 values
      array.sort(function(a, b){return a-b});
      array.shift();
      array.pop();
    console.log(array)
    //sum the remaining values
      let sum = array.reduce((a,b)=>a+b,0)
      console.log (sum)
      return sum
    }
    
  }