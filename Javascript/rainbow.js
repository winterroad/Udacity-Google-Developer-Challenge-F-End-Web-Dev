/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 *
 * The standard rainbow colors are usually listed in this order:
 * var rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
 * Using only the splice() method, insert the missing colors into the array,
 * and remove the color "Blackberry"
 */

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

rainbow.splice(-2,1,"Yellow","Green","Purple");

console.log(rainbow);
