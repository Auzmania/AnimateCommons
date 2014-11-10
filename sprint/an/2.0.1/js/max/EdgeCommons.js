// EdgeCommons for Edge Animate v2.0.1 +++ Visit edgecommons.org for documentation, updates and examples +++ Copyright (c) 2015 by Simon Widjaja +++ Distributed under the terms of the MIT license (http://www.opensource.org/licenses/mit-license.html) +++ This notice shall be included in all copies or substantial portions of the Software.

/**
 * Modulog
 * by Simon Widjaja
 **/
(function (window, $) {
    //------------------------------------
    // Constructor
    //------------------------------------
    var C = function () {
    };
    //------------------------------------
    // Public
    //------------------------------------
    C.VERSION = "0.0.2";
    C.$ = $;
    //------------------------------------
    // Private
    //------------------------------------

    //------------------------------------
    // Init
    //------------------------------------
    window.Modulog = C;
})(window, AdobeEdge.$);


/**
 * ModulogLog
 * by Simon Widjaja
 */
(function (Modulog) {
    //------------------------------------
    // Constructor
    //------------------------------------
    var C = function () {
    };
    //------------------------------------
    // Public
    //------------------------------------
    C.VERSION = "0.0.2";
    C.LEVEL_NONE = 0;
    C.LEVEL_ERROR = 1;
    C.LEVEL_WARN = 2;
    C.LEVEL_INFO = 3;
    C.LEVEL_DEBUG = 4;
    C.level = C.LEVEL_DEBUG; // Default Log level
    //------------------------------------
    // Private
    //------------------------------------
    // jQuery
    var $ = Modulog.$;

    var additionalLogTarget = null;
    //------------------------------------
    // Methods
    //------------------------------------
    C.addLogTarget = function (loggerCallback) {
        if (typeof loggerCallback === "function") {
            additionalLogTarget = loggerCallback;
        }
    };
    C.debug = function (msg, group, object) {
        if (ModulogLog.level >= ModulogLog.LEVEL_DEBUG) {
            var out = "[ DEBUG " + ((group) ? "| " + group + " " : "") + "] " + msg;
            if ((typeof console != "undefined") && (typeof console.debug != "undefined")) {
                (object) ? console.debug(out, object) : console.debug(out);
            } 
            else if ((typeof console != "undefined") && (typeof console.info != "undefined")) {
                (object) ? console.info(out, object) : console.info(out);                
            }
            ModulogLog.__delegate(out, object);
        }
    };
    C.info = function (msg, group, object) {
        if (ModulogLog.level >= ModulogLog.LEVEL_INFO) {
            var out = "[ INFO " + ((group) ? "| " + group + " " : "") + "] " + msg;
            if ((typeof console != "undefined") && (typeof console.info != "undefined")) {
                (object) ? console.info(out, object) : console.info(out);
            }
            ModulogLog.__delegate(out, object);
        }
    };
    C.warn = function (msg, group, object) {
        if (ModulogLog.level >= ModulogLog.LEVEL_WARN) {
            var out = "[ WARN " + ((group) ? "| " + group + " " : "") + "] " + msg;
            if ((typeof console != "undefined") && (typeof console.warn != "undefined")) {
                (object) ? console.warn(out, object) : console.warn(out);
            }
            ModulogLog.__delegate(out, object);
        }
    };
    C.error = function (msg, group, object) {
        if (ModulogLog.level >= ModulogLog.LEVEL_ERROR) {
            var out = "[ ERROR " + ((group) ? "| " + group + " " : "") + "] " + msg;
            if ((typeof console != "undefined") && (typeof console.error != "undefined")) {
                (object) ? console.error(out, object) : console.error(out);
            }
            ModulogLog.__delegate(out, object);
        }
    };
    C.__delegate = function (msg, object) {
        if (additionalLogTarget) {
            (object) ? additionalLogTarget(msg + " : " + object.toString()) : additionalLogTarget(msg);
        }
    };
    //------------------------------------
    // Init
    //------------------------------------
    window.Log = window.MLog = window.ModulogLog = C;
})(window.Modulog);


/**
 * ModulogConfig
 * by Simon Widjaja
 * Usage:
 * - Config.init(configObject);
 * - Config.init(url, callback);
 * - Config.set("topic.subtopic.value", value);
 * - Config.get("topic.subtopic.value");
 */
(function (Modulog) {
    //------------------------------------
    // Constructor
    //------------------------------------
    var C = function () {
    };
    //------------------------------------
    // Public
    //------------------------------------
    C.VERSION = "0.0.1";
    //------------------------------------
    // Private
    //------------------------------------
    // jQuery
    var $ = Modulog.$;
    // Config
    var config = null;
    // Logger
    var Log = ModulogLog;
    var LOG_GROUP = "Modulog | ModulogConfig";

    //------------------------------------
    // Methods
    //------------------------------------
    C.get = function (path) {
        var el = path.split(".");
        var value = config;
        for (var i = 0; i < el.length; i++) {
            var p = el[i];
            if (!value.hasOwnProperty(p)) {
                ModulogLog.warn("Config value not found: " + path, "CONFIG");
            }
            value = value[p];
        }
        return value;
    };
    C.set = function (path, value) {
        var el = path.split(".");
        var target = config;
        for (var i = 0; i < el.length - 1; i++) {
            target = target[el[i]];
        }
        target[el.pop()] = value;
    };
    C.init = function (param, readyCallback) {
        // URL
        if ((typeof(param) === "string") && (jQuery)) {          
            $.getJSON(param, function (data) {
                config = data;
                if (typeof(readyCallback) === "function") {
                    readyCallback();
                }
            });
        }
        // Config Object
        else if (typeof(param) === "object") {
            config = param;
        }
        // Error
        else {
            Log.error("Could not init config. init() function expects config object or url to config.js. " +
                "Latter needs jQuery to be initialized before.", LOG_GROUP);
        }
    };
    //------------------------------------
    // Init
    //------------------------------------
    window.Config = window.MConfig = window.ModulogConfig = C;
})(window.Modulog);


;/*
 * EdgeCommons
 * Dirty little Helpers for Adobe Edge Animate
 * by Simon Widjaja
 *
 * Additional Contributors:
 * Timm Jansen, Johannes Boyne
 *
 * Copyright (c) 2014 Simon Widjaja
 *
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 * Released under MIT license
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 * Additional 3rd party libraries are used. For related credits and license models take a closer look at the affected library.
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 * EdgeCommons uses:
 * - Adobe Edge API
 * - Modulog
 * - YepNope
 * - SoundJS (CreateJS)
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 * Features:
 * #Core
 * - Advanced Logging and Config with Modulog
 * - Loading external Scripts and Style Sheets with YepNope
 * - Injecting Data
 * #Sound
 * - Load and play sounds with SoundJS (CreateJS)
 * #Preload
 * - PreloadJS (uses by SoundJS) (CreateJS)
 */

/**
TODO: DESCRIPTION FOR MASTER


@module EdgeCommons
**/
(function (window, $) {
    //------------------------------------
    // Constructor
    //------------------------------------
    var EdgeCommons = function () {
    };

    //------------------------------------
    // Public
    //------------------------------------
    EdgeCommons.VERSION = "2.0.1";
    EdgeCommons.$ = $;

    //------------------------------------
    // Private
    //------------------------------------
    var LOG_GROUP = "EdgeCommons";

    //------------------------------------
    // Methods
    //------------------------------------

    //------------------------------------
    // Init
    //------------------------------------
    window.EC = window.EdgeCommons = EdgeCommons;
    //Log.debug("v" + VERSION, LOG_GROUP);

})(window, AdobeEdge.$);
;/**
 * EdgeCommons
 * Dirty little Helpers for Adobe Edge Animate
 * by Simon Widjaja and friends
 *
 * Copyright (c) 2014 Simon Widjaja
 *
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 * Released under MIT license
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 * Additional 3rd party libraries are used. For related credits and license models take a closer look at the affected library.
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 */



/*
 * Module: Core
 */


/**
The core module of EdgeCommons 
Version 1.1.0
@module Core
**/
(function (EC) {
    //------------------------------------
    // Constructor
    //------------------------------------
    var C = function () {
    };

    //------------------------------------
    // Public
    //------------------------------------
    C.VERSION = "1.1.0";

    //------------------------------------
    // Private
    //------------------------------------
    // jQuery
    var $ = EC.$;
    // Logger
    var Log = ModulogLog;
    var LOG_GROUP = "EdgeCommons | Core";
    // Adaptive Layouts
    var _adaptiveLayouts = null;
    var _currentAdaptiveLayout = null;
    var _currentAdaptiveSymbol = null;
    var _adaptiveLayoutCallback = null;


    //------------------------------------
    // Methods
    //------------------------------------

    /**
     * Real Center Stage (fullscreen compatible)
     * This function centers the stage even if left value becomes negative
     * @param sym Reference to a Edge Symbol 
     * @param showHorizontalScrollbar Flag to hide scrollbar on body (true|false, default: false)
     */
    EC.centerStage = function(sym, showHorizontalScrollbar) {
        // Argument sym is not optional
        if (!sym || !(sym instanceof AdobeEdge.Symbol)) {
            Log.error("centerStage(): First argument 'sym' is not optional and has to be a symbol", LOG_GROUP);
        }      
        // Hide scrollbar 
        if (!showHorizontalScrollbar) {
          $("body").css("overflow-x", "hidden");
        }
        // Center stage
        EC.centerElement( sym.getComposition().getStage().getSymbolElement() );
    }
    
    /**
     * Center an element
     * @param el Element reference (type: AdobeEdge.$ or jQuery element)
     */
    EC.centerElement = function(el) {
        // Argument el is not optional
        if (!el || !el.css) {
            Log.error("centerElement(): First argument 'el' is not optional and has to be of type AdobeEdge.$ or jQuery element", LOG_GROUP);
        }
        el.css({
            "left": "50%",
            "margin-left": -(Math.round(el.width()/2))+"px"
        });
    }

    /**
     * Get Symbol Name
     * (if name should be used in sym.getSymbol(NAME) the preceding "#" is necessary)
     * @param sym Reference to a Edge Symbol
     * @param unique (Optional) Return full/unique name (e.g. Stage_ResponsiveElement)
     * @return name of symbol (String) 
     */
    EC.getSymbolName = function(sym, unique) {
        //var name = sym.getVariable("symbolSelector"); // still with #
        var name = sym._variables.symbolSelector; // still with #
        if (!unique) {
          var paraentSymbol = sym.getParentSymbol();
          if (paraentSymbol) {
              name = name.replace(paraentSymbol.getVariable("symbolSelector")+"_", "");
          }
        }
        name = name.replace("#", "");
        return name;
    };
    
    /**
     * Data Injection
     * @param sym Reference to a Edge Symbol (does not matter which one)
     * @param scriptClassSelector Class of the container script-Tag (default: data)
     */
    EC.getInjectedData = function (sym, scriptClassSelector) {
        try {
            // Default scriptClass
            scriptClassSelector = scriptClassSelector || "data";
            // Argument sym is not optional
            if (!sym || !sym.getParentSymbol) {
                Log.error("getInjectedData(): First argument 'sym' is not optional", LOG_GROUP);
            }
            // Alternative
            // var stageElement = sym.getSymbolElement().closest("."+sym.getComposition().compId);
            // Workaround: Get Stage (using getComposition() always results in the first instance of identical instances)
            while (sym.getParentSymbol()) {
                sym = sym.getParentSymbol();
            }
            // Extract injected data
            var injectedDataRaw = sym.getSymbolElement().find("." + scriptClassSelector).html();
            var injectedData = $.parseJSON(injectedDataRaw);
            return injectedData;
        } catch (error) {
            Log.error("Reading injected data failed (scriptClassSelector=" + scriptClassSelector + ")", LOG_GROUP, error);
        }
    };

    /**
     * Adaptive
     * @param useWindowInsteadOfStage If true the window width is used for calculations (necessary if you have a fiex stage that is centered (e.g. with EC.centerStage())) (default: false)
     */
    EC.setAdaptiveLayouts = function(adaptiveLayouts, sym, adaptiveContainer, callback, useWindowInsteadOfStage) {
        if (!adaptiveLayouts || !adaptiveLayouts.length) {
            Log.error( "Error in setAdaptiveLayouts(). Argument 'layouts' is not optional and has to be an array.", LOG_GROUP );
            return;
        }
        _adaptiveLayouts = adaptiveLayouts;
      
        useWindowInsteadOfStage = !!useWindowInsteadOfStage;
        
        // backwards compatibilty
        // (adaptive layouts array will be stored, but resize handler will not be added 
        // automatically since in older versions (e.g. 0.4.0 @ Adobe TV) applyAdaptiveLayout() will be called manually
        if (!sym) {
            return;
        }
        
        // Register optional callback
        if (typeof(callback) == "function") {
            _adaptiveLayoutCallback = callback;
        }
        
        // Register event handler for resize, so the right adaptive layout gets displayed
        // whenever the windows is being resized
        $( window ).bind("resize", function(e) {
            EC.applyAdaptiveLayout( sym, adaptiveContainer, useWindowInsteadOfStage );
        });
        // Execute initially
        EC.applyAdaptiveLayout( sym, adaptiveContainer, useWindowInsteadOfStage );
    };    
    EC.applyAdaptiveLayout = function (sym, adaptiveContainer, useWindowInsteadOfStage) {
        try {
            sym.setVariable("doResizing", function(){
                var stage = sym.getComposition().getStage();
                var width = (!useWindowInsteadOfStage) ? stage.getSymbolElement().width() : $(window).width();

                // responsive container
                var container = sym.$( adaptiveContainer );

                var buffer = 0; // before 1.0.3 we had a tolerance of 20px for some special cases
                var calcLayout = null;
                $.each( _adaptiveLayouts, function(index, layout) {
                    if(width >= layout - buffer){
                        calcLayout = layout;
                    }
                });
              
                if (_currentAdaptiveLayout != calcLayout ) {
                    //Log.debug( "Switching to: layout"+calcLayout, LOG_GROUP );
                    // Clear old layout
                    _currentAdaptiveSymbol && _currentAdaptiveSymbol.deleteSymbol();
                    //console.log("_currentAdaptiveSymbol: ", _currentAdaptiveSymbol);
                    container.html("");
                    // Create new layout
                    var layoutSym = sym.createChildSymbol("layout"+calcLayout, adaptiveContainer);
                    // Remember layout
                    _currentAdaptiveLayout = calcLayout;
                    _currentAdaptiveSymbol = layoutSym;
                    // Optional callback
                    if ( typeof(_adaptiveLayoutCallback) == "function" ) {
                        _adaptiveLayoutCallback( calcLayout, layoutSym );
                    }
                }
                // Display mode (debug only)
                //sym.$("currentLayout").html(sym.getVariable("layout"));
                //sym.stop(mode);

            });

            // Execute on startup
            var doResizing = sym.getVariable("doResizing");
            doResizing();

        }
        catch(error) {
            console.error(error);
        }
    };
    
    /**
     * Find out if full jQuery is used
     */
    EC.isJQuery = function() {
        return !!(AdobeEdge.$.fn && AdobeEdge.$.fn.jquery);
    }
        
    /**
     * Composition Loader
     * EXAMPLE:
     * var targetContainer = sym.getSymbol("targetContainer");
     * EC.loadComposition("sub2.html", targetContainer)
	 *   .done( function(comp) {
     *      comp.getStage().$("mytext").html("hello number 2");
     *      comp.getStage().$('targetContainer').append("<hr/>HUHU  222<hr/>");
	 *   });
     */
    EC.loadComposition = function(src, symbolOrElement) {
        // Check arguments 
        if (!src || !symbolOrElement) {
            Log.error( "Error in loadComposition(). Arguments 'src' and 'sym' are not optional.", LOG_GROUP );
            return;
        }
        try {
            // Symbol or Element
            var el;
            if (symbolOrElement instanceof AdobeEdge.Symbol) {
                el = symbolOrElement.getSymbolElement();
            }
            else {
                el = symbolOrElement;
            }
            // Inject IFrame
            var uniqueId = "ec_"+Math.random().toString(36).substring(7);
            //el.html('<iframe id="'+uniqueId+'" src="'+src+'" style="overflow: hidden; width: 100%; height: 100%; margin: auto; border: 0 none; background-color: rgba(255,255,255,0)"></iframe>');
            // Prevent flickering (http://css-tricks.com/prevent-white-flash-iframe/)
            el.html('<iframe id="'+uniqueId+'" src="'+src+'" style="visibility:hidden; overflow: hidden; width: 100%; height: 100%; margin: auto; border: 0 none; background-color: rgba(255,255,255,0)" onload="this.style.visibility=\'visible\';"></iframe>');
            // Create promise
            var promise = new jQuery.Deferred();
            
            // Wait for IFrame to be loaded
            var iframe = jQuery("#"+uniqueId);
            //EC.debug("iframe", LOG_GROUP, iframe);
            var innerWindow = iframe[0].contentWindow;
            //EC.debug("innerWindow", LOG_GROUP, innerWindow);
            iframe.load( function() {
                //EC.debug("iframe load done");
                // Wait for inner composition to be bootstrapped
                innerWindow.AdobeEdge.bootstrapCallback(function (compId) {
                    //EC.debug("Inner composition was bootstrapped: ", LOG_GROUP, compId);
                    // alpha: ignore compId (just one inner comp supported so far)
                    var innerComp = innerWindow.AdobeEdge.getComposition(compId);
                    //EC.debug("innerComp", LOG_GROUP, innerComp);
                    //innerComp.getStage().$('targetContainer').html("<hr/>TEST<hr/>");
                    promise.resolve(innerComp, uniqueId, innerWindow.AdobeEdge);
                });
            });
        } 
        catch (err) {
            EC.error("Error in loadComposition: ", LOG_GROUP, err.toString());
        }
        return promise;
    }  
    
    /**
     * makeStaticButton
     * EXAMPLE:
     * TODO
     * Touch enabled
     */
    EC.makeStaticButton = function(sym, label, icon, clickHandler, data) {
        // Search for optional element "hotspot"
        var hotspot = sym.$("hotspot");
		var hs$ = (hotspot[0]) ? hotspot : sym.getSymbolElement();
		label && sym.$("label").html(label);
        icon && sym.$("icon").css("background-image", "url("+icon+")");
        data && sym.setVariable("data", data);
        // Call when ready
        if (typeof(sym.getVariable("ready")) === "function") {
          sym.getVariable("ready")(data);  
        }
		hs$.css("cursor", "pointer");
        if (!EC.isMobile()) {
            hs$.on("mouseenter", function(e) {
                sym.stop("over");
            });
            hs$.on("mouseleave", function(e) {
                sym.stop("normal");
            });
            hs$.on("mousedown", function(e) {
                sym.stop("down");
            });
            hs$.on("mouseup", function(e) {
                sym.stop("over");
            });
        }
		hs$.on(EC.CLICK_OR_TOUCH, function(e) {
			(typeof(clickHandler) === "function") && clickHandler(sym, data);
		});
	}    

    /**
     * makeAnimatedButton
     * EXAMPLE:
     * TODO
     * Touch enabled
     */
    EC.makeAnimatedButton = function(sym, label, icon, clickHandler, data) {
        // Search for optional element "hotspot"
        var hotspot = sym.$("hotspot");        
		var hs$ = (hotspot[0]) ? hotspot : sym.getSymbolElement();
		label && sym.$("label").html(label);
        icon && sym.$("icon").css("background-image", "url("+icon+")");
        data && sym.setVariable("data", data);
        // Call when ready
        if (typeof(sym.getVariable("ready")) === "function") {
          sym.getVariable("ready")(data);  
        }      
		hs$.css("cursor", "pointer");
        if (!EC.isMobile()) {
            hs$.on("mouseenter", function(e) {
                sym.play();
            });
            hs$.on("mouseleave", function(e) {
                sym.playReverse();
            });
            hs$.on("click", function(e) {
                (typeof(clickHandler) === "function") && clickHandler(sym, data);
            });            
        }
        else {
            // Initially set state to inactive
            sym.setVariable("animatedButtonState", "inactive");
            hs$.on("touchstart", function(e) {
                var isActive = (sym.getVariable("animatedButtonState") !== "inactive" );
                if (isActive) {
                    (typeof(clickHandler) === "function") && clickHandler(sym, data);
                    sym.setVariable("animatedButtonState", "inactive");
                    sym.playReverse();
                }
                else {
                    sym.play();
                    sym.setVariable("animatedButtonState", "active");
                    setTimeout(function() {
                        if (sym.getPosition() > 0) {
                            sym.playReverse();                                                    
                        }
                        sym.setVariable("animatedButtonState", "inactive");
                    }, 2000);
                }
            });            
        }
	}
    
    /**
     * isMobile
     * @return true|false 
     */    
    EC.isMobile = function() {
        return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Opera Mini/i) || navigator.userAgent.match(/IEMobile/i);
    }
    
    /**
     * CLICK_OR_TOUCH (Pseudo Constant)
     * Can be used in click handler to be optimized on touch devices
     * Example:
     * sym.$("myButton").on(EC.CLICK_OR_TOUCH, function() {} );
     * @return click or touchstart
     */        
    EC.CLICK_OR_TOUCH = (EC.isMobile()) ? "touchstart" : "click";
    
    
    /**
     * Read get parameter
     * @param key Name of GET key     
     * @return value of GET key 
     */ 
    EC.readGetParam = function(key) {
        var results = new RegExp('[\\?&]' + key + '=([^&#]*)').exec(window.location.href);
        return (results) ? (decodeURIComponent(results[1] || 0)) : null;
    }
    
    
    /**
     * @param: selector string
     * @param: properties object
     * @param: index (optional) (default: 1)
     * @param: sheet (optional) Not supported yet
     */    
    EC.addCSS = function (selector, properties, index, sheet) {
        index = (index) ? index : 1; 
        
        // thanks to David Walsh http://davidwalsh.name/add-rules-stylesheets
        function _addCSSRule(sheet, selector, rules, index) {
             if ("insertRule" in sheet) {
                  sheet.insertRule(selector + "{" + rules + "}", index);
             }
             else if ("addRule" in sheet) {
                  sheet.addRule(selector, rules, index);
             }
             else {
                  //console.log("cannot add CSS");
             }
        }

        var propertiesString = "";
        for (var prop in properties) {
            //console.log(p);
            propertiesString += prop+": "+properties[prop]+";";
        }
        //console.log("propertiesString: ", propertiesString);
        _addCSSRule(document.styleSheets[0], selector, propertiesString, index);
    }
 
    
    /**
     * Read hash parameter (e.g. for Deep Linking)   
     * Consider implementing "jQuery address" for more advanced power (http://www.asual.com/jquery/address/)
     * Consider concept like http://www.asual.com/jquery/address/samples/crawling/#!/?page=/getting-started
     * // Change hash proprammatically
     * window.location.hash = "simonsays";
     * // Listen for hash change event
     * $(window).on("hashchange", function() {
	 *   console.debug("HASH", window.location.hash);
     * });
     * @return hash or null
     */ 
    EC.readHashFromURL = function() {
        var results = new RegExp('#([^ |^?|^&|^=]*)').exec(window.location.href);
        return (results) ? (decodeURIComponent(results[0])) : null;
    }
    
    /**
     * Add metatag for viewport to page header
     * @param type init(default)|nozoom|custom
     * @param content custom content attribute for viewport (only avail. if type==custom)
     */
    EC.setMetaViewport = function(type, content) {
      var content;
      switch (type) {
        case "custom":
          content = content;
          break;
        case "nozoom":
          content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
          break;
        case "init":
        default:
          content = 'width=device-width, initial-scale=1.0';
      }
      $("head").append('<meta name="viewport" content="'+content+'">');
    }
    
    //------------------------------------
    // Init
    //------------------------------------
    EC.Core = C;

    // Expose Logging
    EC.Log = Log;
    EC.debug = Log.debug;
    EC.info = Log.info;
    EC.warn = Log.warn;
    EC.error = Log.error;

    // Expose Configuration
    EC.Config = MConfig;

    //Log.debug("v" + C.VERSION, LOG_GROUP);


})(EdgeCommons);;/**
 * EdgeCommons
 * Dirty little Helpers for Adobe Edge
 * by Simon Widjaja
 *
 * Copyright (c) 2014 Simon Widjaja
 *
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 * Released under MIT license
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 * Additional 3rd party libraries are used. For related credits and license models take a closer look at the affected library.
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 */

/**
 * Module: Parallax
 *
 * Horizontal Parallax by Jacques Letesson
 */

/**
Parallax Scrolling for Edge Animate
@module EdgeCommons
@submodule Parallax
@main EdgeCommons
@class Parallax
**/
(function (EC) {
    //------------------------------------
    // Constructor
    //------------------------------------
    var C = function () {
    };

    //------------------------------------
    // Public
    //------------------------------------
    C.VERSION = "2.0.0";
    C.compositions = {};
    
    //------------------------------------
    // Private
    //------------------------------------
    // jQuery
    var $ = EC.$;
    // Logger
    var Log = ModulogLog;
    var LOG_GROUP = "EdgeCommons | Parallax";

    //------------------------------------
    // Methods
    //------------------------------------
    /**
     * Add composition to parallax watcher
     */
    C.addComposition = function(compId) {
      // Cancel if stage is not rendered yet and no height is available (creationComplete instead compositionReady)
      
      if (!AdobeEdge.getComposition(compId).getStage().getSymbolElement().height()) {
        Log.error("Height of stage is not available yet. Make sure you are using compositionReady instead of creationComplete", LOG_GROUP);
      }
      
      // calculate static composition values
      this.compositions[compId] = {};
      var stage = AdobeEdge.getComposition(compId).getStage();
      this.compositions[compId].stage = stage;
      // TODO: reuse stage
      var stageElement = AdobeEdge.getComposition(compId).getStage().getSymbolElement();
      this.compositions[compId].stageElement = stageElement;
      var stageHeight = stageElement.height();
      var stageWidth = stageElement.width();
      this.compositions[compId].stageHeight = stageHeight;
      this.compositions[compId].stageWidth = stageWidth;
      //nojq
      //var stageTop = stageElement.position().top;
      var stageTop = stageElement.css("top");
      this.compositions[compId].stageTop = stageTop;
      this.compositions[compId].stageMiddle = Math.floor( (stageTop + stageHeight/2) );        
      this.compositions[compId].duration = stage.getDuration();

      // Stop timeline (override autoplay)
      stage.stop(0);
    }
        
    /**
    Setup Parallax Scrolling for a specific composition

        // MUST be in compositionReady (NOT IN creationComplete)
        EC.Parallax.setup( sym );

    @method setup
    @param sym {Symbol} A Symbol within the affected composition  
    @param scrollType {String} A string to define the type of scroll : vertical (default) or horizontal
    **/           
    C.setup = function(sym, scrollType) {
        // Check arguments 
        if (!sym) {
            Log.error( "Error in setup(). Argument 'sym' is not optional.", LOG_GROUP );
            return;
        }
        if(scrollType===undefined){
			scrollType = "vertical";
		}
      
        // Add composition to list (currently only one composition is supported)
        this.addComposition( sym.getComposition().getCompId() );
        
        // Add listener for scroll event on document
        //var throttleIndex = throttleIndexInitial = 2;
        $( document ).bind("scroll", function() {
            // Throttle (disabled)
            //if (throttleIndex != 0) {
            //    throttleIndex--;
            //    return;
            //}
            //throttleIndex = throttleIndexInitial;
			if (scrollType == "vertical") {
				//nojq
				//var scrollPos = $(document).scrollTop();
				var scrollPos = $("body")[0].scrollTop;
				scrollVertical();
			} else if (scrollType == "horizontal") {
                //nojq
				//var scrollPos = $(document).scrollLeft();
                var scrollPos = $("body")[0].scrollLeft;
				scrollHorizontal()
			}
            
    
            // Update all compositions
            function scrollVertical() {
                // nojq
	        	//$.each( EC.Parallax.compositions, function(compId, c) {
                for (var compId in EC.Parallax.compositions) {
                    var c = EC.Parallax.compositions[compId];              
	                // Calculate new playhead position
	                var percentage = scrollPos / ( c.stageHeight - $(window).height() );
	                var playheadPos = Math.floor( percentage * c.duration );
	                c.stage.stop( playheadPos );
				}  
            }
            
            function scrollHorizontal() {
                // nojq
	        	//$.each( EC.Parallax.compositions, function(compId, c) {
                for (var compId in EC.Parallax.compositions) {
                    var c = EC.Parallax.compositions[compId];            
	                // Calculate new playhead position
	                var percentage = scrollPos / ( c.stageWidth - $(window).width() );
	                var playheadPos = Math.floor( percentage * c.duration );
	                c.stage.stop( playheadPos );
				}  
            }
        });
    }

    //------------------------------------
    // Init
    //------------------------------------
    EC.Parallax = C;
    //Log.debug("v" + C.VERSION, LOG_GROUP);

})(EdgeCommons);;/*
 * EdgeCommons
 * Dirty little Helpers for Adobe Edge
 * by Simon Widjaja
 *
 * Copyright (c) 2013 Simon Widjaja
 *
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 * Released under MIT license
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 * Additional 3rd party libraries are used. For related credits and license models take a closer look at the affected library.
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
 * Module: Spotlight
 * TODO: config for background color
 */

/**
Spotlight: Overlay for media (e.g. Images, YouTube) or external Edge Animate compositions

@module EdgeCommons
@submodule Spotlight
@main EdgeCommons
@class Spotlight
**/
(function (EC) {
    //------------------------------------
    // Constructor
    //------------------------------------
    var C = function () {
    };

    //------------------------------------
    // Public
    //------------------------------------
    C.VERSION = "1.0.0";
    
    //------------------------------------
    // Private
    //------------------------------------
    // jQuery
    var $ = EC.$;
    // Logger
    var Log = ModulogLog;
    var LOG_GROUP = "EdgeCommons | Spotlight";
  
    //------------------------------------
    // Methods
    //------------------------------------
    /**
     * Init Spotlight once (IDEA: execute automatically when EC.Spotlight is added?!?!?!)
     */
    C.setup = function() {
      //EC.addCSS();
    }
  
  
    /**
    Open a spotlight overlay by passing in a configuration object
    @method open
    @param config {Object} The configuration object  
        <pre>
            var config = {
                width: 700,                                   // Width of the overlay
                height: 400,                                  // Height of the overlay
                borderWidth: 5,                               // Border width (px)
                borderColor: "#FFF",                          // Border color
                type: "image",                                // Media type (image|animate|youtube)
                source: "images/MyImage.png",                 // Source to media
                onClose: function(config, documentContext) {} // Callback for close button
                param: {}                                     // Additional parameter dependent on type (e.g. autoPlay: true for youtube)
            }
        </pre>
    @param [documentContext=window.top.document] {Object} The parent context for the spotlight overlay (e.g. window.document or window.parent.document)
    @return {Boolean} returns <code>true</code> whenever the opening of the spotlight overlay was successfull otherwise <code>false</code>
    **/    
    C.open = function(config, documentContext) {
        try {
            // Check arguments 
            if (config.type != "image" && config.type != "animate" && config.type != "youtube") {
                Log.error( "Error in open(). Unsupported type: "+config.type, LOG_GROUP );
                return;
            }
            if (documentContext == undefined) {                
                documentContext = window.top.document;
            }
            
            // Set defaults
            config.width = config.width || 400;
            config.height = config.height || 600;
            config.borderWidth = config.borderWidth || 5;
            config.borderColor = config.borderColor || "#FFF";
            
          
            // Add DOM elements
            var tpl = '<div id="spotlight"> <div class="background"> </div> </div>';
            $("body", documentContext).append(tpl);
            var tpl = '<div class="base"></div>';
            $("#spotlight .background", documentContext).append(tpl);
            var tpl = '<div class="close-button"></div>';
            $("#spotlight .background", documentContext).append(tpl);
            
          
            // Place close button
            var closeButton = $("#spotlight .close-button", documentContext);
            closeButton.css("margin-left", (0.5*config.width) - 15 + (config.borderWidth) )
                .css("margin-top", (-0.5*config.height) - 15 );

                
            // Set width and height and center
            var base = $("#spotlight .base", documentContext);
            base.css("width", 0)
                .css("height", 0)
                .css("margin-left", 0)
                .css("margin-top", 0)
                .css("border-width", config.borderWidth)
                .css("border-color", config.borderColor)
                .css("border-radius", 5);
            
            base.animate({
                    width: config.width,
                    "margin-left": -0.5 * config.width,
                    height: config.height,
                    "margin-top": -0.5 * config.height
                },
                300,
                null,
                function() {
                    $("#spotlight .content", documentContext).css("display", "inline");
                    $("#spotlight .fader", documentContext).fadeOut(2000);
                    $("#spotlight .close-button", documentContext).fadeIn();
                }
            );
            
          
            // Inject content
            base.append('<div class="content"></div>');
            var content = $("#spotlight .content", documentContext);
            
            // Base Url (if composition is running in iframe but spotlight's context is top document)
            var hrefArray = document.location.href.split("/");
            var lastHrefElement = hrefArray[ hrefArray.length-1 ];
            if (lastHrefElement.indexOf(".") != -1) { hrefArray.pop(); }
            var baseUrl = hrefArray.join("/");
            
            // Media Types
            switch (config.type) {
                case "image":
                    var src = (config.source.indexOf("http:") == -1 && config.source.indexOf("https:") == -1) ? baseUrl + "/" + config.source : config.source;
                    content.append('<img src="'+src+'" />');                    
                    break;
                case "animate":
                    var src = (config.source.indexOf("http:") == -1 && config.source.indexOf("https:") == -1) ? baseUrl + "/" + config.source : config.source;
                    content.append('<iframe src="'+src+'" style="overflow: hidden; width: 100%; height: 100%; margin: auto; border: 0 none;"></iframe>');                    
                    break;
                case "youtube":
                    content.append('<iframe width="'+config.width+'" height="'+config.height+'" '
                        +'src="http://www.youtube.com/embed/'+config.source+'?autoplay='+((config.param && config.param.autoPlay)?"1":"0")+'" '
                        +'frameborder="0" allowfullscreen></iframe>');
                    break;
            }

            content.append('<div class="fader"></div>');
            var fader = $("#spotlight .fader", documentContext);
            
            // On click
            $("#spotlight .background", documentContext).click( function() {
                EC.Spotlight.close( config, documentContext );
            });
            return true;
        }
        catch( err ) {
            Log.error(err.toString());
            return false;
        }
    };

    /**
    Close an existing spotlight overlay  
    (This function usually gets called by the internal close button)
    @method close
    @param [documentContext=window.top.document] {Object} The parent context for the spotlight overlay (e.g. window.document or window.parent.document)
    **/     
    C.close = function(config, documentContext) {
        if (documentContext == undefined) {                
            documentContext = window.top.document;
        }
        
        $("#spotlight .content", documentContext).remove();
        $("#spotlight .close-button", documentContext).remove();
        $("#spotlight .background", documentContext).fadeOut(400);
        
        var base = $("#spotlight .base", documentContext);
        base.animate({
                width: 0,
                "margin-left": 0,
                height: 0,
                "margin-top": 0,
                opacity: 0
            },
            200,
            null,
            function() {
                $("#spotlight", documentContext).remove();
                if (typeof(config.onClose) === "function") {
                  config.onClose(config, documentContext);
                }
            }
        );        
    }
        
    //------------------------------------
    // Init
    //------------------------------------
    EC.Spotlight = C;
    //Log.debug("v" + C.VERSION, LOG_GROUP);

})(EdgeCommons);;/*
 * EdgeCommons
 * Dirty little Helpers for Adobe Edge
 * by Simon Widjaja
 *
 * Copyright (c) 2013 Simon Widjaja
 *
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 * Released under MIT license
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 * Additional 3rd party libraries are used. For related credits and license models take a closer look at the affected library.
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
 * Module: SVG
 */

/**
SVG: Interactive SVG within you Edge Animate compositions

@module EdgeCommons
@submodule SVG
@main EdgeCommons
@class SVG
**/
(function (EC) {
    //------------------------------------
    // Constructor
    //------------------------------------
    var C = function () {
    };

    //------------------------------------
    // Public
    //------------------------------------
    C.VERSION = "1.0.0";
    
    //------------------------------------
    // Private
    //------------------------------------
    // jQuery
    var $ = EC.$;
    // Logger
    var Log = ModulogLog;
    var LOG_GROUP = "EdgeCommons | SVG";

    //------------------------------------
    // Methods
    //------------------------------------  
    /**
    Convert SVG to be accessible
        <pre>
		EC.SVG.accessSVG( sym.$("pie") )
			.done(function(svgDocument, svgElement, uniqueId){
				EC.debug("DONE");
				var el = svgDocument.getElementById("Cyan");
				$(el).attr({fill: "#000"});
				$(el).click(function(){
					alert("DYNAMIC CLICK ON INNER PATH");
				});				
			});  
        </pre>
    **/
    C.accessSVG = function(element) {
        if (element.is("div")) {
			var imgSrc = element.css("background-image").replace("url(","").replace(")","");
			// Remove "" in IE
			imgSrc = imgSrc.replace("\"", "");
		}
        else if (element.is("img")) {
			var imgSrc = element.attr("src");
		}
		//TODO: Check if is SVG

		// Replace with real SVG
		// TODO: improve flicker (maybe set invisible during loading and wait for complete)
		element.css("background-image", "");
        var uniqueId = "ec_"+Math.random().toString(36).substring(7);
		element.append('<embed id="'+uniqueId+'" src="'+imgSrc+'" type="image/svg+xml" width="100%" height="100%" />');
        
		// Create promise
		var promise = new jQuery.Deferred();

		// Wait for Embed to be loaded
		//var embed = jQuery("#svgEmbed");
        
        var svgElement = document.getElementById(uniqueId);

		svgElement.onload = function() {
            var svgDocument = svgElement.getSVGDocument();
            // Update (Inject notify function. Makes svg.js obsolete)
            svgDocument.notify = function (ref, type) {
                 var event = document.createEvent("CustomEvent");
                 event.initEvent(type,true,true);
                 ref.dispatchEvent(event);
            }
			// TODO return id
			promise.resolve( svgDocument, svgElement, uniqueId );
		};
        
        return promise;
    }
        
    //------------------------------------
    // Init
    //------------------------------------
    EC.SVG = C;
    //Log.debug("v" + C.VERSION, LOG_GROUP);

})(EdgeCommons);