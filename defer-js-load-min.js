(function(a){var b=[];var c=false;var d=0;var e={init:function(){if(!c){c=true;e.loadJsQueue()}},loaded:function(){a(window).trigger("deferJSLoaded")},loadJsQueue:function(){for(var c=0;c<b.length;c++){a.getScript(b[c],e.loadedJs)}if(b.length==0){e.loadedJs()}},loadedJs:function(){d+=1;if(d>=b.length){e.loaded()}}};a.fn.deferJSLoad=function(a){b.push(a)};a(document).bind("ready",e.init);a(window).load(e.init)})(jQuery)