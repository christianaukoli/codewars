/*You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/


function check(a, x) {
    // cycle through array
   /*for (let i=0; i<a.length; i++){
      //check array for value
      if (a[i] === x){   //did this part just for fun
        return true
      }
      }
    return false*/
    
    
  return a.includes(x)
  }