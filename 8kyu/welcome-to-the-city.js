/*Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

Example:

sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
*/




function sayHello( name, city, state ) {
    //show values
    console.log(name, city, state);
    //convert name
    name = name.join(" ")
    console.log(name)
    //welcome person
    let string = `Hello, ${name}! Welcome to ${city}, ${state}!`;
    //return string
    console.log(string);
    return string;
  }