/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;
var verse;

while (num>0){

    verse = "";

    if(num>2){
        verse = (num + " bottles of juice on the wall! " + num + " bottles of juice!");
        num--;
        verse+= " Take one down, pass it around... " + num + " bottles of juice on the wall!";
    }
    else if(num === 2){
        verse = (num + " bottles of juice on the wall! " + num + " bottles of juice!");
        num--;
        verse+= " Take one down, pass it around... " + num + " bottle of juice on the wall!";
    }
    else if(num===1){
        verse = (num + " bottle of juice on the wall! " + num + " bottle of juice!");
        num--;
        verse+= " Take one down, pass it around... " + num + " bottles of juice on the wall!";
    }

    console.log(verse);
}
