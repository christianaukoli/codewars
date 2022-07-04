/*There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/
//MY NOTE: apparantly, adding your own score to the average has no impact; pushing into array wouldn't work


function betterThanAverage(classPoints, yourPoints) {
    // push yourPoints into classPoints
    //find avg
    //write if statement; or 1 liner with ? :
    /*console.log(classPoints)
    console.log(yourPoints)
    console.log(classPoints.push(yourPoints))*/
    
    let sumOfScores = classPoints.reduce((a,b)=>a+b,yourPoints)
    let countOfScores = classPoints.length + 1
   /* if(yourPoints> (sumOfScores/countOfScores)){
      return true
    } else {
      return false
    }*/
    return yourPoints> (sumOfScores/countOfScores) ? true : false
  }