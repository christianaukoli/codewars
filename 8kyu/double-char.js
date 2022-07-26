/*Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
*/




function doubleChar(str) {
    //console.log value to see
    console.log(str.repeat(2));
    // figure out if str has a length, if so, run for loop that duplicates each letter
    let newStr = "";
    for(let i = 0; i<str.length; i++){
      console.log(str[i]+str[i])
      newStr+=str[i]+str[i]
      console.log(newStr)
     
    }
    return newStr
  }