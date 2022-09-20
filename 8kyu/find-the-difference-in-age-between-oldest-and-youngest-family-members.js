/*At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
*/




function differenceInAges(ages){
    //check values
       console.log(ages)
      //sort ages
      ages.sort((a,b)=>a-b)
      console.log(ages)
      //pull oldest and youngest and find difference 
      let arr =[]
      arr.push(ages[0], ages[ages.length-1], Math.abs(ages[0]-(ages[ages.length-1])))
     
      console.log(arr)
      return arr
    }