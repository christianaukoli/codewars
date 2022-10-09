/*Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!
*/




function buildString(...template){
    //must fix template and correct symbols
    //console.log to see value
    console.log(`I like ${template.join(',')}!`);
    return `I like ${template.join(', ')}!`;
  }