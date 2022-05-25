/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F*/

//My Solution
function abbrevName(name){

    // code away
  //split the name
  const words = name.split(" ")
  //separate the first name from the last name
  let firstName = words[0]
  let lastName = words[1]
  //check to see if it worked
console.log(firstName);
  
  console.log(lastName);
  
  //grab the first letter of each
  
  let arr1 = firstName.split("")
  let arr2 = lastName.split("")
  console.log(arr1[0])
  console.log(arr2[0])
  
  //combine for the final answer
  return arr1[0].toUpperCase() + "." + arr2[0].toUpperCase()
}