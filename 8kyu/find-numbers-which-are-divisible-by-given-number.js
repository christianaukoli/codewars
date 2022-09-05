/*Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
*/




function divisibleBy(numbers, divisor){
    //confirm values
      console.log(numbers);
      console.log(divisor);
      //set new Array
      let newArr = [];
      
      //determine divisible
      for(let i=0; i<numbers.length; i++){
        console.log(numbers[i])
        if(numbers[i]%divisor===0){
          newArr.push(numbers[i])
          console.log(newArr)
        } 
       
      //push to new array
         
      }
      return newArr;
    }