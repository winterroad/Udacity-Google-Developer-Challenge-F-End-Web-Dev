/*
 * Programming Quiz: Facebook Friends (7-5)
 * Create an object called facebookProfile. The object should have 3 properties:
 *
 * - your name
 * - the number of friends you have, and
 * - an array of messages you've posted (as strings)
 *
 * The object should also have 4 methods:
 * - postMessage(message) - adds a new message string to the array
 * - deleteMessage(index) - removes the message corresponding to the index provided
 * - addFriend() - increases the friend count by 1
 * - removeFriend() - decreases the friend count by 1
 */


var facebookProfile = {
  name: "UK W",
  friends: 100,
  messages: ["Hello","Good morning!", "Happy b-day!"],
  postMessage: function(message){
      facebookProfile.messages.push(message);
  },
  deleteMessage: function(index){
      facebookProfile.messages.splice(index,1);
  },
  addFriend: function() {
      facebookProfile.friends++;
  },
  removeFriend: function() {
      facebookProfile.friends--;
  }
};
