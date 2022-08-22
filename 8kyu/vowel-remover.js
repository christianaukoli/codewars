/*Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/




function shortcut (string) {
    //check value
    console.log(string)
    //remove vowel
    string = string.split("")
    console.log(string)
    string = string.filter(item=>item !== "a" )
    string = string.filter(item=>item !== "e" )
    string = string.filter(item=>item !== "i" )
    string = string.filter(item=>item !== "o" )
    string = string.filter(item=>item !== "u" )
    
    console.log(string)
   return string.join("");
  }
  