/*Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/




function sumOfDifferences(arr) {
    //check values
    console.log(arr);
    //sort in descending order
    arr.sort((a,b)=> b-a)
    console.log(arr)
    //sum differences
    let sumDiff = 0;
    for(let i=0; i<arr.length-1; i++){
      sumDiff += (arr[i] - arr[i+1])
    }
  
  console.log(sumDiff)
    return sumDiff
  }