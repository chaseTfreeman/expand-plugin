/*
Author: Chase Freeman

For each LI, parse through to the 15th space using a REGEX function and .search. Then use .classList.toggle('hide') to
*/

  $(document).ready(function(){
    $(".content").on("click", function(){
      $(".quotes li").collapser()
    });

  })
