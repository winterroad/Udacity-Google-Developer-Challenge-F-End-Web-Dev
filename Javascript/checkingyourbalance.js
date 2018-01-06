/*
 * Programming Quiz - Checking Your Balance (3-5)
 *
 * Using the flowchart, write the code to represent checking your balance at the ATM.
 * Use the following variables in your solution:
 * balance - the account balance
 * isActive - if account is active
 * checkBalance - if you want to check balance
*/
var balance = 0;
var checkBalance = false;
var isActive = true;

if(checkBalance){

    if(isActive && balance>0){
        console.log("Your balance is $" + balance + ".");
    } else if(!isActive){
        console.log("Your account is no longer active.");
    } else if(balance === 0){
        console.log("Your account is empty.");
    } else{
        console.log("Your balance is negative. Please contact bank.");
    }
} else{
    console.log("Thank you. Have a nice day!");
}
