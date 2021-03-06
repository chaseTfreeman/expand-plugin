// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.
// Author: Chase Freeman

(function ( $ ) {

  $.fn.collapser = function() {
    // extract quote sources:
    var sources = $(this).find('a')
    // Iterate through li's, push quotes to array
    var quotesArray = []
    var quotes = $(this).each(function(){
      quotesArray.push($(this).addClass('quoteClass').text());
    })
    // iterate through array of quotes, trim each quote (or return), add sources and ellipses.
    for (i = 0; i < quotesArray.length; i++){
      var collapsedQuotes = $(".quoteClass")
      collapsedQuotes.each(function(i, val){
        quote = $(this).text();
        var source = sources.eq(i).html() || "Anonymous";
        var sourceHref = sources.eq(i).attr('href');

        if (quote.split(" ").length < 15) return;

        var readLessHtml = "<span style = display:none; class='readLess'><a href=# target='_blank' rel='nofollow'>" + source + "</a>" + "<br>" + "<a href='#' id='readLess'>" + 'Read Less' + "</a>" + "</span>"

        var shortQuote =  $(this).html(
          $.trim(quote).substring().split(" ").slice(0, 15).join(" ") + ". -- " + "<span class='readMore'><a href=# target='_blank' rel='nofollow'>" + source + "</a>" + "<br>" + "<a href=" + sourceHref + "id='readMore'>" + 'Read More' + "</a>" + "</span>" + readLessHtml
        );
          // click functions for Read More/Read Less
        $(".readMore").click(function(e){
          e.preventDefault()
          $(this).parent().text(quotesArray[i]).append("<span class='readLess'><a href=# target='_blank' rel='nofollow'>" + source + "</a>" + "<br>" + "<a href=" + sourceHref + " id='readLess'>" + 'Read Less' + "</a>" + "</span>")
          $(".readLess").click(function(e){
            e.preventDefault()
            $(this).parent().html($.trim(quotesArray[i]).substring().split(" ").slice(0, 15).join(" ") + "... -- " + "<span class='readMore'><a href=# target='_blank' rel='nofollow'>" + source + "</a>" + "<br>" + "<a href='#' id='readMore'>" + 'Read More' + "</a>" + "</span>" + readLessHtml)
          });
        });


      })
    }

  };
}(jQuery));
