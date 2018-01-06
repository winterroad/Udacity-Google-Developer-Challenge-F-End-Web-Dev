/*
 * Programming Quiz: Murder Mystery (3-4)
 *To help solve this mystery, write a combination of conditional statements that:
 *sets the value of weapon based on the room and
 *sets the value of solved to true if the value of room matches the suspect's room
 *Afterwards, print the following to the console if the mystery was solved:
 *__________ did it in the __________ with the __________!
 */

var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room === "ballroom") {
    weapon = "poison";
    if (suspect === "Mr. Kalehoff"){
        solved = true;
    }

}   else if (room === "gallery" ) {
        weapon = "trophy";
        if (suspect === "Ms. Van Cleve"){
            solved = true;
        }

}       else if (room === "billiards room") {
            weapon = "pool stick";
            if (suspect === "Mrs. Sparr"){
                solved = true;
        }

}           else {
                weapon = "knife";
                if(suspect==="Mr. Parkes"){
                    solved = true;
                }
}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
