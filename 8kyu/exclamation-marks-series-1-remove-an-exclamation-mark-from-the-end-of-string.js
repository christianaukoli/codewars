/*Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"
*/




function remove (string) {
    //console.log to check value
    console.log(string)
    console.log(string[string.length-1])
    //split into array
    //remove last !
    if(string[string.length-1] === "!"){
      let arr = string.split("")
      console.log(arr)
      console.log(arr.pop())
      console.log(arr.join(""))
      return arr.join("")
    } else{
      return string
    }
    
  }