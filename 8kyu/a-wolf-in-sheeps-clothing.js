/*Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"
*/




function warnTheSheep(queue) {
    //show values
      console.log(queue);
      //reverse array
      queue.reverse();
      console.log(queue);
      //find wolf position (wolf - 1 you're about to be eaten)
      let wolfPosition = queue.findIndex((element) => element === "wolf")
      //add 1 to the position
      wolfPosition = wolfPosition + 1
      console.log(wolfPosition)
      //if position = 1, pls go away
      if(wolfPosition === 1){
        return "Pls go away and stop eating my sheep"
      } else {
        return `Oi! Sheep number ${wolfPosition - 1}! You are about to be eaten by a wolf!`
      }
      
      
    }