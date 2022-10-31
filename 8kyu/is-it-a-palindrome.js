//Write a function that checks if a given string (case insensitive) is a palindrome.




function isPalindrome(x) {
    // determine if x reads the same backwards and forwards
    //show value
    console.log(x)
  //   //turn string into array and use reverse, then back to string
  //   x.split("").reverse().join("").toLowerCase()
  //   //if string forward === string backwards, return true
  //   if(x.toLowerCase() === x.split("").reverse().join("").toLowerCase()){
  //     return true
  //   } else {
  //     return false
  //   }
    return x.toLowerCase() === x.split("").reverse().join("").toLowerCase()
  }