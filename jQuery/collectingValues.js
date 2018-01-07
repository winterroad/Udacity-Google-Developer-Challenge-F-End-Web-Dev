/*
Use jQuery's val method to make live changes to the 'Cool Articles' <h1>!
*/


$('#input').on('change', function() {
    var val;
    val = $('#input').val();

    var header;
    header = $('div.articles').find('h1');
    header.text(val);
});
