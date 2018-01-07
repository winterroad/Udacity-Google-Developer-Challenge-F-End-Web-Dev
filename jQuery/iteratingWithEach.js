/*
Use jQuery's each() method to iterate through the <p>s,
calculate the length of each one, and add each length to the end of each <p>.

*/

$("p").each(function() {
  var teksti = $(this).text();
  $(this).append(teksti.length);
});
