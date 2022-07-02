//Build a function that returns an array of integers from n to 1 where n>0.
//Example : n=5 --> [5,4,3,2,1]


function reverseSeq(n){
    //set an array
    let arr = [];
    //push decreasing numbers into array
    for (let i=0; i<n; i++){ //first mistake was n.length, n isn't an array so there is no length
      arr.push(n-i)
    };
    console.log(arr)
    //return array
    return arr
  };