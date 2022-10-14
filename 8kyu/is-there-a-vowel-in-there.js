/*Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/




function isVow(a){
    //check value
    console.log(a)
    console.log(a.length)
    //find character code
    for (let i=0; i<a.length; i++){
     let character = a[i].toString()   
     let code = String.fromCharCode(character)
      //if vowel, swap value to vowel
      if(code==="a") a[i] = "a";
      if(code==="e") a[i] = "e";
      if(code==="i") a[i] = "i";
      if(code==="o") a[i] = "o";
      if(code==="u") a[i] = "u";
    }
    console.log(a)
    return a
    
   
  }