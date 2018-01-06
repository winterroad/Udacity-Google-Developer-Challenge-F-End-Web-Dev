/*
 * Programming Quiz: Laugh (5-4)
 * Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.
 * laugh(3);
 * Returns: hahaha!
 */

var laugh = function(times){

    var laughing = "";

    for(var x=0; x<times; x++){

        laughing+="ha";
    }

    return laughing+"!";

}

console.log(laugh(10));
