/*Complete the solution so that it reverses all of the words within the string passed in.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/



function reverseWords(str){
    //show value
    console.log(str);
    //reverse string - split, reverse, join
    str = str.split(" ").reverse().join(" ");
    console.log(str);
    //return value
    return str
  }