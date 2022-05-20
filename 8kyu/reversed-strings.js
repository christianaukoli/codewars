/*Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/


function solution(str){
    let splitString = str.split(""); //split the string into individual letters
    let reverseArray = splitString.reverse(); //reverse the letters
    let joinArray = reverseArray.join(""); //join the letters back together
    return joinArray;
  }