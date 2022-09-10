/*I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here?
*/




function swapValues() {
    var args = Array.prototype.slice.call(arguments);
  //check value
  console.log(arguments)
  console.log(args)
  
    var temp = args[0];
  console.log(temp)
  //reverse array
  let args2 = temp.reverse()
  console.log(args2)
  //return array
  return args2
   
}