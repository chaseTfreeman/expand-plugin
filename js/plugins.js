// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.

(function ( $ ) {
  $.fn.collapser = function() {
    // extract sources:
    var sources = $(this).find('a')
    // console.log(sources);
    // Iterate through Li's, push quotes to array
    var quotesArray = []
    var quotes = $(this).each(function(){
      quotesArray.push($(this).text());
    })
    for (i = 0; i < quotesArray.length; i++){
      var source = sources.eq(i).html();
      sourceHref = sources.eq(i).attr('href')
      var quote = quotesArray[i];

      $(this[i]).each(function(){
      $(this).html($.trim(quote).substring()
      .split(" ").slice(0, 15).join(" ") + "... -- " + "<a href=" + sourceHref + "target='_blank' rel='nofollow'>" + source + "</a>" + "<br>" + "<a href='#'>" + 'Read More' + "</a>" + "<br>")
        })
    };

  };
}( jQuery ));
