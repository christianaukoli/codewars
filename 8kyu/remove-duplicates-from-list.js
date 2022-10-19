/*Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
*/




function distinct(a) {
    //show value
    console.log(a)
    //filter duplicates
    let filtered = a.filter(function(item, pos) {
      return a.indexOf(item) == pos;
      
  })
    console.log(filtered)
    return filtered 
  }