/*Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

Hint for R users:

The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output

("1", "22") --> "1221"
("22", "1") --> "1221"
*/




function solution(a, b){
    // console.log to check values
    console.log(a,b)
    console.log(a.length,b.length)
    //compare lengths and use if statement
    if(a.length<b.length){
      console.log( a+b+a )
      return a+b+a 
    } else{
      console.log( b+a+b)
      return b+a+b
    }
  }
  