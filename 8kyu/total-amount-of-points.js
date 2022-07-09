/*Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/



function points(games) {
    //test to see how the data shows
   console.log(games)
   console.log(games[9])
   console.log(games[9][2])
   //set the total
   let total = 0;
   // compare x & y and assign points
   for (let i=0; i<games.length; i++){
     if (games[i][0]>games[i][2]){
       total += 3
     } else if (games[i][0]===games[i][2]){
       total += 1
     } else {
       total += 0
     }
      //return the points
     console.log (total)
    
   }
   return total
  
 }