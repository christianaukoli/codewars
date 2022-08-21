/*Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/




function nameShuffler(str){
    //check value
    console.log(str);
    //split into array
    str = str.split(" ")
    console.log(str);
    //swap
    str = str[1] + " " + str[0];
   
    return str
  }