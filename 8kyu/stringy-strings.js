/*write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/




function stringy(size) {
    // show value
    console.log(size);
    //set array
    let arr = [];
    //maybe write a for loop
    for (let i=0; i<size; i++){
      if((i+1)%2===0){
        arr.push(0)
      }else{
        arr.push(1)
      }
    }
    console.log(arr)
    //convert to string
    let string = arr.join("")
    console.log(string)
    //return string
    return string
  }