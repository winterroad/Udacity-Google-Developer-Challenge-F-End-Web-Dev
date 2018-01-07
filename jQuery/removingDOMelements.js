/*
Remove the <ul> from the first article item!
*/

var articleItems;

articleItems = $('.article-item').first();

$(articleItems).children('ul').remove();
