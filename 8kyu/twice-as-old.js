/*Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
*/



function twiceAsOld(dadYearsOld, sonYearsOld) {
    // console.log to see values
    console.log(dadYearsOld);
    console.log(sonYearsOld);
    //calculate son's age x2
    let double = sonYearsOld * 2
    //find difference between dad's age and son's age x2 (absolute value)
    let difference = dadYearsOld - double;
    return Math.abs(difference)
  }