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
      //This event gets triggered when all deffered js has loaded, you can then bind to this event and be sure all your code is there.
      $(window).trigger('deferredJsLoaded');
    },
    loadJsQueue : function() {
      for(var i = 0; i < jsQueue.length; i++) {
        this.getScript(jsQueue[i], methods.loadedJs);
      }
    },
    loadedJs : function() {
      loadJsCount += 1;
      if(loadJsCount == jsQueue.length) {
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