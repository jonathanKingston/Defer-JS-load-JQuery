(function( $ ){

  var jsQueue = [];
  var mainLoaded = false;
  var loadJsCount = 0;
  var methods = {
    init : function() {
      if(!mainLoaded) {
        mainLoaded = true;
        methods.loadJsQueue();
      }
    },
    loaded : function() {
      //This event gets triggered when all deferred js has loaded, you can then bind to this event and be sure all your code is there.
      $(window).trigger('deferJSLoaded');
    },
    loadJsQueue : function() {
      for(var i = 0; i < jsQueue.length; i++) {
        $.getScript(jsQueue[i], methods.loadedJs);
      }
	  if(jsQueue.length == 0) {
        //No js to load so call event anyway
        methods.loadedJs();
      }
    },
    loadedJs : function() {
      loadJsCount += 1;
      if(loadJsCount >= jsQueue.length) {
        methods.loaded();
      }
    }
  };

  $.fn.deferJSLoad = function(url) {
    jsQueue.push(url);
  }

  $(document).bind('ready', methods.init);
  $(window).load(methods.init);

})( jQuery );