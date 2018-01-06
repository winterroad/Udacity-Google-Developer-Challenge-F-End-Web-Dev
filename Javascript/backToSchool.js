/*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 * Afterwards, print the following to the console.
 *
 * In 2015, a person with __________ earned an average of __________/year.
 * Fill in the blanks with the type of education and the expected average salary.
 */


var education = "a high school diploma";

var salary;

switch (education){
    case "no high school diploma":
        salary = 25636;
        break;
    case "a high school diploma":
        salary = 35256;
        break;
    case "an Associate's degree":
        salary = 41496;
        break;
    case "a Bachelor's degree":
        salary = 59124;
        break;
    case "a Master's degree":
        salary = 69732;
        break;
    case "a Professional degree":
        salary = 89960;
        break;
    case "a Doctoral degree":
        salary= 84396;
        break;
    default:
        salary = 0;
}

console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");
