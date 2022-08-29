/*Complete the function that receives as input a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".
*/




function getDrinkByProfession(param){
    param = param.toLowerCase();
    console.log(param);
    switch(param){
    //use switch case
    case "jabroni":
      console.log("Patron Tequila");
      return "Patron Tequila";
      break;
    case "school counselor":
      console.log("Anything with Alcohol");
      return "Anything with Alcohol";
      break;
    case "programmer":
      console.log("Hipster Craft Beer");
      return "Hipster Craft Beer"
      break;
    case "bike gang member":
      console.log("Moonshine");
      return "Moonshine";
      break;
    case "politician":
      console.log("Your tax dollars");
      return "Your tax dollars";
      break;
    case "rapper":
      console.log("Cristal");
      return "Cristal";
      break;
    default:
      console.log("Beer");
      return "Beer";
  }
  }