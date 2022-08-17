/*1786890% of 3,37318,257 of 30,350ledocod
JavaScript
TRAIN AGAINNEXT KATA
Details
Solutions
Forks (5)
Discourse (87)
Translations
Fork|Collect|
How satisfied are you with this kata?VERYSOMEWHATNONE
Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases
Examples(Inputs-->Output):

100, 12 --> 100
99, 0 --> 100
10, 15 --> 100

85, 5 --> 90

55, 3 --> 75

55, 0 --> 0
20, 2 --> 0
*Use Comparison and Logical Operators.
*/




function finalGrade (exam, projects) {
    console.log(exam)
    console.log(projects)
    //write if statements based on exam and projects
    if (exam>90 || projects>10){
      console.log(100);
      return 100;
    } else if (exam>75 && projects>=5){
      console.log(90);
      return 90;
    } else if (exam>50 && projects>=2){
      console.log(75);
      return 75;
    } else{
       return 0;
    }
    // final grade
  }