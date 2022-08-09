/*ake an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/




function removeEveryOther(arr){
    //console.log to see values
    console.log(arr);
    //identify every other element
    for (let i=1; i<=arr.length-1; i++){
      //remove every other element
      console.log(i)
       arr.splice(i,1)
      
    }
    console.log(arr);
    return arr;
   
  }