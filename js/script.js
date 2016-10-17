/*
Author: Chase Freeman

For each LI, parse through to the 15th space using a REGEX function and .search. Then use .classList.toggle('hide') to
*/
$(document).ready(function() {
  // Iterate through Li's, push quotes to array
  var quotesArray = []
  var quotes = $('.quotes li').each(function(){
    quotesArray.push($(this).text());
  })
  for (i = 0; i < quotesArray.length; i++){
    var quote = quotesArray[i];
    var shortQuote = jQuery.trim(quote).substring()
    .split(" ").slice(0, 14).join(" ") + "...";
    console.log(shortQuote);
  };





});
