// EdgeCommons v1.0.1 +++ Visit edgecommons.org for documentation, updates and examples +++ Copyright (c) 2013 by Simon Widjaja +++ Distributed under the terms of the MIT license (http://www.opensource.org/licenses/mit-license.html) +++ This notice shall be included in all copies or substantial portions of the Software.
// Input 0
(function(a,d){var b=function(){};b.VERSION="0.0.2";b.$=d;a.Modulog=b})(window,jQuery);
(function(){var a=function(){};a.VERSION="0.0.2";a.LEVEL_NONE=0;a.LEVEL_ERROR=1;a.LEVEL_WARN=2;a.LEVEL_INFO=3;a.LEVEL_DEBUG=4;a.level=a.LEVEL_DEBUG;var d=null;a.addLogTarget=function(b){"function"===typeof b&&(d=b)};a.debug=function(b,a,c){ModulogLog.level>=ModulogLog.LEVEL_DEBUG&&(b="[ DEBUG "+(a?"| "+a+" ":"")+"] "+b,"undefined"!=typeof console&&"undefined"!=typeof console.debug?c?console.debug(b,c):console.debug(b):"undefined"!=typeof console&&"undefined"!=typeof console.info&&(c?console.info(b,
c):console.info(b)),ModulogLog.__delegate(b,c))};a.info=function(b,a,c){ModulogLog.level>=ModulogLog.LEVEL_INFO&&(b="[ INFO "+(a?"| "+a+" ":"")+"] "+b,"undefined"!=typeof console&&"undefined"!=typeof console.info&&(c?console.info(b,c):console.info(b)),ModulogLog.__delegate(b,c))};a.warn=function(a,e,c){ModulogLog.level>=ModulogLog.LEVEL_WARN&&(a="[ WARN "+(e?"| "+e+" ":"")+"] "+a,"undefined"!=typeof console&&"undefined"!=typeof console.warn&&(c?console.warn(a,c):console.warn(a)),ModulogLog.__delegate(a,
c))};a.error=function(a,e,c){ModulogLog.level>=ModulogLog.LEVEL_ERROR&&(a="[ ERROR "+(e?"| "+e+" ":"")+"] "+a,"undefined"!=typeof console&&"undefined"!=typeof console.error&&(c?console.error(a,c):console.error(a)),ModulogLog.__delegate(a,c))};a.__delegate=function(a,e){d&&(e?d(a+" : "+e.toString()):d(a))};window.Log=window.MLog=window.ModulogLog=a})(window.Modulog);
(function(a){var d=function(){};d.VERSION="0.0.1";var b=a.$,e=null,c=ModulogLog;d.get=function(a){for(var b=a.split("."),f=e,i=0;i<b.length;i++){var c=b[i];f.hasOwnProperty(c)||ModulogLog.warn("Config value not found: "+a,"CONFIG");f=f[c]}return f};d.set=function(a,b){for(var f=a.split("."),i=e,c=0;c<f.length-1;c++)i=i[f[c]];i[f.pop()]=b};d.init=function(a,d){"string"===typeof a&&jQuery?b.getJSON(a,function(a){e=a;"function"===typeof d&&d()}):"object"===typeof a?e=a:c.error("Could not init config. init() function expects config object or url to config.js. Latter needs jQuery to be initialized before.",
"Modulog | ModulogConfig")};window.Config=window.MConfig=window.ModulogConfig=d})(window.Modulog);
// Input 1
(function(a,d){var b=function(){};b.VERSION="1.0.1";b.$=d;a.EC=a.EdgeCommons=b})(window,jQuery);
// Input 2
(function(a){var d=function(){};d.VERSION="1.0.0";var b=a.$,e=ModulogLog,c=null,l=null,h=null;a.getSymbolName=function(a){var b=a.getVariable("symbolSelector");(a=a.getParentSymbol())&&(b=b.replace(a.getVariable("symbolSelector")+"_",""));return b=b.replace("#","")};a.getInjectedData=function(a,c){try{c=c||"data";for((!a||!a.getParentSymbol)&&e.error("getInjectedData(): First argument 'sys' is not optional","EdgeCommons | Core");a.getParentSymbol();)a=a.getParentSymbol();var d=a.getSymbolElement().find("."+
c).html();return b.parseJSON(d)}catch(j){e.error("Reading injected data failed (scriptClassSelector="+c+")","EdgeCommons | Core",j)}};a.setAdaptiveLayouts=function(f,d,m,j){!f||!f.length?e.error("Error in setAdaptiveLayouts(). Argument 'layouts' is not optional and has to be an array.","EdgeCommons | Core"):(c=f,d&&("function"==typeof j&&(h=j),b(window).resize(function(){a.applyAdaptiveLayout(d,m)}),a.applyAdaptiveLayout(d,m)))};a.applyAdaptiveLayout=function(a,d){try{a.setVariable("doResizing",function(){var e=
a.getComposition().getStage().getSymbolElement().width(),k=a.$(d),g=null;b.each(c,function(a,b){e>=b-20&&(g=b)});l!=g&&(l=g,k.html(""),k=a.createChildSymbol("layout"+g,d),"function"==typeof h&&h(g,k));a.$("currentLayout").html(a.getVariable("layout"))}),a.getVariable("doResizing")()}catch(e){console.error(e)}};a.centerStage=function(a){a?a.getComposition().getStage().getSymbolElement().css("margin","0px auto"):e.error("Error in centerStage(). Argument 'sym' is not optional.","EdgeCommons | Core")};
a.loadComposition=function(b,c){if(!b||!c)e.error("Error in loadComposition(). Arguments 'src' and 'sym' are not optional.","EdgeCommons | Core");else{try{var d=c.getSymbolElement(),j="ec_"+Math.random().toString(36).substring(7);d.html('<iframe id="'+j+'" src="'+b+'" style="overflow: hidden; width: 100%; height: 100%; margin: auto; border: 0 none; background-color: rgba(255,255,255,0)"></iframe>');var k=new jQuery.Deferred,g=jQuery("#"+j),h=g[0].contentWindow;g.load(function(){h.AdobeEdge.bootstrapCallback(function(a){a=
h.AdobeEdge.getComposition(a);k.resolve(a,h.AdobeEdge)})})}catch(l){a.error("Error in loadComposition: ","EdgeCommons | Core",l.toString())}return k}};a.Core=d;a.Log=e;a.debug=e.debug;a.info=e.info;a.warn=e.warn;a.error=e.error;a.Config=MConfig})(EdgeCommons);
