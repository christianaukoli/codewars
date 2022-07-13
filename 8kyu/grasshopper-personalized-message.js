/*Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
*/




function greet (name, owner) {
    //write a conditional, if there's no name given, use guest
    if (name === owner){
      return "Hello boss"
    } else {
      return "Hello guest"
    }
  }