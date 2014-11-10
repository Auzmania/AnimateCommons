// EdgeCommons for Edge Animate v2.0.2 +++ Visit edgecommons.org for documentation, updates and examples +++ Copyright (c) 2013 by Simon Widjaja +++ Distributed under the terms of the MIT license (http://www.opensource.org/licenses/mit-license.html) +++ This notice shall be included in all copies or substantial portions of the Software.

!function(a,b){var c=function(){};c.VERSION="0.0.2",c.$=b,a.Modulog=c}(window,AdobeEdge.$),function(a){var b=function(){};b.VERSION="0.0.2",b.LEVEL_NONE=0,b.LEVEL_ERROR=1,b.LEVEL_WARN=2,b.LEVEL_INFO=3,b.LEVEL_DEBUG=4,b.level=b.LEVEL_DEBUG;var c=(a.$,null);b.addLogTarget=function(a){"function"==typeof a&&(c=a)},b.debug=function(a,b,c){if(ModulogLog.level>=ModulogLog.LEVEL_DEBUG){var d="[ DEBUG "+(b?"| "+b+" ":"")+"] "+a;"undefined"!=typeof console&&"undefined"!=typeof console.debug?c?console.debug(d,c):console.debug(d):"undefined"!=typeof console&&"undefined"!=typeof console.info&&(c?console.info(d,c):console.info(d)),ModulogLog.__delegate(d,c)}},b.info=function(a,b,c){if(ModulogLog.level>=ModulogLog.LEVEL_INFO){var d="[ INFO "+(b?"| "+b+" ":"")+"] "+a;"undefined"!=typeof console&&"undefined"!=typeof console.info&&(c?console.info(d,c):console.info(d)),ModulogLog.__delegate(d,c)}},b.warn=function(a,b,c){if(ModulogLog.level>=ModulogLog.LEVEL_WARN){var d="[ WARN "+(b?"| "+b+" ":"")+"] "+a;"undefined"!=typeof console&&"undefined"!=typeof console.warn&&(c?console.warn(d,c):console.warn(d)),ModulogLog.__delegate(d,c)}},b.error=function(a,b,c){if(ModulogLog.level>=ModulogLog.LEVEL_ERROR){var d="[ ERROR "+(b?"| "+b+" ":"")+"] "+a;"undefined"!=typeof console&&"undefined"!=typeof console.error&&(c?console.error(d,c):console.error(d)),ModulogLog.__delegate(d,c)}},b.__delegate=function(a,b){c&&(b?c(a+" : "+b.toString()):c(a))},window.Log=window.MLog=window.ModulogLog=b}(window.Modulog),function(a){var b=function(){};b.VERSION="0.0.1";var c=a.$,d=null,e=ModulogLog,f="Modulog | ModulogConfig";b.get=function(a){for(var b=a.split("."),c=d,e=0;e<b.length;e++){var f=b[e];c.hasOwnProperty(f)||ModulogLog.warn("Config value not found: "+a,"CONFIG"),c=c[f]}return c},b.set=function(a,b){for(var c=a.split("."),e=d,f=0;f<c.length-1;f++)e=e[c[f]];e[c.pop()]=b},b.init=function(a,b){"string"==typeof a&&jQuery?c.getJSON(a,function(a){d=a,"function"==typeof b&&b()}):"object"==typeof a?d=a:e.error("Could not init config. init() function expects config object or url to config.js. Latter needs jQuery to be initialized before.",f)},window.Config=window.MConfig=window.ModulogConfig=b}(window.Modulog),function(a,b){var c=function(){};c.VERSION="2.0.2",c.$=b;a.EC=a.EdgeCommons=c}(window,AdobeEdge.$),function(a){function b(b,c,d){try{var e=a.getChildSymbols(b,d),f=b.getComposition(),e=f.getSymbols();for(var g in e){var h=e[g];if(isPlaying=h.isPlaying(),c){var i=h.getVariable("_ec_playState");"playing"===i?h.play():"playingReverse"===i&&h.playReverse()}else{var i=isPlaying?h.isPlayDirectionReverse()?"playingReverse":"playing":"stopped";h.setVariable("_ec_playState",i),h.stop()}}}catch(j){console.error(j.toString())}}var c=function(){};c.VERSION="1.1.0";var d=a.$,e=ModulogLog,f="EdgeCommons | Core",g=null,h=null,i=null,j=null;a.centerStage=function(b,c){b&&b instanceof AdobeEdge.Symbol||e.error("centerStage(): First argument 'sym' is not optional and has to be a symbol",f),c||d("body").css("overflow-x","hidden"),a.centerElement(b.getComposition().getStage().getSymbolElement())},a.centerElement=function(a){a&&a.css||e.error("centerElement(): First argument 'el' is not optional and has to be of type AdobeEdge.$ or jQuery element",f),a.css({left:"50%","margin-left":-Math.round(a.width()/2)+"px"})},a.getSymbolName=function(a,b){var c=a._variables.symbolSelector;if(!b){var d=a.getParentSymbol();d&&(c=c.replace(d.getVariable("symbolSelector")+"_",""))}return c=c.replace("#","")},a.getInjectedData=function(a,b){try{for(b=b||"data",a&&a.getParentSymbol||e.error("getInjectedData(): First argument 'sym' is not optional",f);a.getParentSymbol();)a=a.getParentSymbol();var c=a.getSymbolElement().find("."+b).html(),g=d.parseJSON(c);return g}catch(h){e.error("Reading injected data failed (scriptClassSelector="+b+")",f,h)}},a.setAdaptiveLayouts=function(b,c,h,i,k){return b&&b.length?(g=b,k=!!k,c&&("function"==typeof i&&(j=i),d(window).bind("resize",function(){a.applyAdaptiveLayout(c,h,k)}),a.applyAdaptiveLayout(c,h,k)),void 0):(e.error("Error in setAdaptiveLayouts(). Argument 'layouts' is not optional and has to be an array.",f),void 0)},a.applyAdaptiveLayout=function(a,b,c){try{a.setVariable("doResizing",function(){var e=a.getComposition().getStage(),f=c?d(window).width():e.getSymbolElement().width(),k=a.$(b),l=0,m=null;if(d.each(g,function(a,b){f>=b-l&&(m=b)}),h!=m){i&&i.deleteSymbol(),k.html("");var n=a.createChildSymbol("layout"+m,b);h=m,i=n,"function"==typeof j&&j(m,n)}});var e=a.getVariable("doResizing");e()}catch(f){console.error(f)}},a.isJQuery=function(){return!(!AdobeEdge.$.fn||!AdobeEdge.$.fn.jquery)},a.loadComposition=function(b,c){if(!b||!c)return e.error("Error in loadComposition(). Arguments 'src' and 'sym' are not optional.",f),void 0;try{var d;d=c instanceof AdobeEdge.Symbol?c.getSymbolElement():c;var g="ec_"+Math.random().toString(36).substring(7);d.html('<iframe id="'+g+'" src="'+b+'" style="visibility:hidden; overflow: hidden; width: 100%; height: 100%; margin: auto; border: 0 none; background-color: rgba(255,255,255,0)" onload="this.style.visibility=\'visible\';"></iframe>');var h=new jQuery.Deferred,i=jQuery("#"+g),j=i[0].contentWindow;i.load(function(){j.AdobeEdge.bootstrapCallback(function(a){var b=j.AdobeEdge.getComposition(a);h.resolve(b,g,j.AdobeEdge)})})}catch(k){a.error("Error in loadComposition: ",f,k.toString())}return h},a.makeStaticButton=function(b,c,d,e,f){var g=b.$("hotspot"),h=g[0]?g:b.getSymbolElement();c&&b.$("label").html(c),d&&b.$("icon").css("background-image","url("+d+")"),f&&b.setVariable("data",f),"function"==typeof b.getVariable("ready")&&b.getVariable("ready")(f),h.css("cursor","pointer"),a.isMobile()||(h.on("mouseenter",function(){b.stop("over")}),h.on("mouseleave",function(){b.stop("normal")}),h.on("mousedown",function(){b.stop("down")}),h.on("mouseup",function(){b.stop("over")})),h.on(a.CLICK_OR_TOUCH,function(){"function"==typeof e&&e(b,f)})},a.makeAnimatedButton=function(b,c,d,e,f){var g=b.$("hotspot"),h=g[0]?g:b.getSymbolElement();c&&b.$("label").html(c),d&&b.$("icon").css("background-image","url("+d+")"),f&&b.setVariable("data",f),"function"==typeof b.getVariable("ready")&&b.getVariable("ready")(f),h.css("cursor","pointer"),a.isMobile()?(b.setVariable("animatedButtonState","inactive"),h.on("touchstart",function(){var a="inactive"!==b.getVariable("animatedButtonState");a?("function"==typeof e&&e(b,f),b.setVariable("animatedButtonState","inactive"),b.playReverse()):(b.play(),b.setVariable("animatedButtonState","active"),setTimeout(function(){b.getPosition()>0&&b.playReverse(),b.setVariable("animatedButtonState","inactive")},2e3))})):(h.on("mouseenter",function(){b.play()}),h.on("mouseleave",function(){b.playReverse()}),h.on("click",function(){"function"==typeof e&&e(b,f)}))},a.isMobile=function(){return navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/iPhone|iPad|iPod/i)||navigator.userAgent.match(/Opera Mini/i)||navigator.userAgent.match(/IEMobile/i)},a.CLICK_OR_TOUCH=a.isMobile()?"touchstart":"click",a.readGetParam=function(a){var b=new RegExp("[\\?&]"+a+"=([^&#]*)").exec(window.location.href);return b?decodeURIComponent(b[1]||0):null},a.addCSS=function(a,b,c){function d(a,b,c,d){"insertRule"in a?a.insertRule(b+"{"+c+"}",d):"addRule"in a&&a.addRule(b,c,d)}c=c?c:1;var e="";for(var f in b)e+=f+": "+b[f]+";";d(document.styleSheets[0],a,e,c)},a.readHashFromURL=function(){var a=new RegExp("#([^ |^?|^&|^=]*)").exec(window.location.href);return a?decodeURIComponent(a[0]):null},a.setMetaViewport=function(a,b){var b;switch(a){case"custom":b=b;break;case"nozoom":b="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";break;case"init":default:b="width=device-width, initial-scale=1.0"}d("head").append('<meta name="viewport" content="'+b+'">')},a.getChildSymbols=function(b,c,d){c=c!==!1?!0:!1,d=d?d:[];var e=b.getChildSymbols();if(e.length>0){var f=0,g=e.length;for(f;g>f;f++)d.push(e[f]),c&&a.getChildSymbols(e[f],c,d)}return d},a.pause=function(a,c){b(a,!1,c)},a.unpause=function(a,c){b(a,!0,c)},a.Core=c,a.Log=e,a.debug=e.debug,a.info=e.info,a.warn=e.warn,a.error=e.error,a.Config=MConfig}(EdgeCommons);