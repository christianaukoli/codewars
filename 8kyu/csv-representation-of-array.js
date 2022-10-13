/*Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
Array's length > 2.
*/




function toCsvText(array) {
    //check value
    console.log(array)
    console.log(array.length)
    console.log(`${array[1].toString()}+ \n`)
    //try to concatenate, add "\n"
    let string = ""
    for(let i=0; i<array.length; i++){
      string += array[i].toString()+"\n"
     console.log( string.trim() )
    }
    return string.trim()
  }