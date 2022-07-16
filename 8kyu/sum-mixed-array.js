/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/




function sumMix(x){
    //console.log to see values
  console.log(x);
    //use reduce and Number to convert types to number
  let sum = x.reduce((a,b)=> Number(a)+Number(b),0);
  //return sum
  return sum
  }