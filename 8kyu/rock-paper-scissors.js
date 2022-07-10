/*Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/



const rps = (p1, p2) => {
    //console.log to see values
    console.log(p1)
    console.log(p2)
    //write if statement comparing inputs
    if (p1=== p2){
      return "Draw!"
    } else if (p1=== "scissors" && p2==="paper" ||
              p1=== "paper" && p2==="rock" ||
              p1=== "rock" && p2==="scissors"){
       return "Player 1 won!"
    } else {
      return "Player 2 won!"
    }
  };