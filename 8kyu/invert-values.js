/*Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/



function invert(array) {
    //figure out how to make each number an opposite, then iterate through each number
    //push it to a new array
   let arr = [];
    for(let i=0; i<array.length; i++){
      arr.push(array[i]*-1)
      console.log(arr)
    }
     return arr;
  }