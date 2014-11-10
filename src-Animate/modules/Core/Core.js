/**
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
    C.stylesheet = null;

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

    //==================================================
    // Adaptive Layouts
    //==================================================  
  
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
    
    //==================================================
    // Buttons
    //==================================================    
    
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
    
    //==================================================
    // CSS
    // (Inspired by http://davidwalsh.name/add-rules-stylesheets)
    //==================================================
    function _initStylesheet() {
      // Return if stylesheet already exists
      if (EC.stylesheet) {
        return;
      }
        
      // Create the <style> tag
      var style = document.createElement("style");

      // Add a media (and/or media query) here if you'd like!
      // style.setAttribute("media", "screen")
      // style.setAttribute("media", "only screen and (max-width : 1024px)")
      style.setAttribute("title", "EC");
      
      // WebKit hack :(  (see http://davidwalsh.name/add-rules-stylesheets)
      style.appendChild(document.createTextNode(""));

      // Add the <style> element to the page
      document.head.appendChild(style);

      //return style.sheet;
      EC.stylesheet = style.sheet;
    };
  
    /**
     * @param: selector string
     * @param: properties object
     * @param: index (optional) (default: 1)
     * @param: sheet (optional) Not supported yet
     */    
    EC.addCSS = function (selector, properties, index, sheet) {
        index = (index) ? index : 0; 
        
        // Create stylesheet initially
        _initStylesheet();
      
        // thanks to David Walsh http://davidwalsh.name/add-rules-stylesheets
        function _addCSSRule(sheet, selector, rules, index) {        
           if ("insertRule" in sheet) {
                sheet.insertRule(selector + "{" + rules + "}", index);
           }
           else if ("addRule" in sheet) {
                sheet.addRule(selector, rules, index);
           }
           else {
                // Propery error logging
                console.error("cannot add CSS");
           }
        }

        var propertiesString = "";
        for (var prop in properties) {
            //console.log(p);
            propertiesString += prop+": "+properties[prop]+";";
        }
        //console.log("propertiesString: ", propertiesString);
        //_addCSSRule(document.styleSheets[0], selector, propertiesString, index);
        _addCSSRule(EC.stylesheet, selector, propertiesString, index);
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

    /**
     * Get all children of a symbols (recursive or immediate children only)
     *  e.g. 
     *		console.log( "stage: ", getChildSymbols(sym) );
     *		console.log( "stage: ", getChildSymbols(sym, false) );
     *		console.log( "MySymbol1: ", getChildSymbols(sym.getSymbol("MySymbol1")) );
     */
    EC.getChildSymbols = function (sym, recursive, result) {
        // Arguments and defaults
        recursive = (recursive!==false) ? true : false;
        // Prepare result
        result = (result) ? result : [];
        var immediateChildren = sym.getChildSymbols();
        if (immediateChildren.length>0) {
            var i = 0,
                len = immediateChildren.length;		
            for (i; i<len; i++) {
                result.push(immediateChildren[i]);
                recursive && EC.getChildSymbols(immediateChildren[i], recursive, result);
            }
        }
        return result;
    }    
    
    
    //==================================================
    // Pause/Unpause
    //==================================================
    
    /**
     * Pause/Unpause (internal function)
     * @param {Symbol} sym - symbol
     * @param {Boolean} flag - pause (false) or unpause (true)
     * @param {Boolean} recursive - pause all sub symbols
     */
    function _handlePause(sym, flag, recursive) {
        try {
            // Gather effected symbol instances
            var symbols = EC.getChildSymbols(sym, recursive);

            // Find all symbol instances
            var comp = sym.getComposition(),
                symbols = comp.getSymbols();
            for (var i in symbols) {
                var s = symbols[i]
                     isPlaying = s.isPlaying();
                if (!flag) { // pause	
                    // Save playback state
                    var playState = (isPlaying) ? ((s.isPlayDirectionReverse()) ? "playingReverse" : "playing") : "stopped";
                    s.setVariable("_ec_playState", playState);
                    // Stop symbol
                    s.stop();			
                }
                else { // unpause
                    // Get playback state
                    var playState = s.getVariable("_ec_playState");
                    // If symbol was playing before start playing again
                    if (playState === "playing") {
                        s.play();
                    }
                    else if (playState === "playingReverse") {
                        s.playReverse();
                    }
                }
            }
        }
        catch (err) {
            // TODO: Add real logging
            console.error(err.toString());
        }	
    }
  
    /**
     * Pause a symbol
     * @param {Symbol} sym - symbol
     * @param {Boolean} recursive - pause all sub symbols
     */
    EC.pause = function(sym, recursive) {
        _handlePause(sym, false, recursive);
    }
    
    /**
     * Unpause a symbol
     * @param {Symbol} sym - symbol
     * @param {Boolean} recursive - pause all sub symbols
     */
    EC.unpause = function(sym, recursive) {
        _handlePause(sym, true, recursive);
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


})(EdgeCommons);