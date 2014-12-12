// EdgeCommons for Edge Animate v2.0.5 +++ Visit edgecommons.org for documentation, updates and examples +++ Copyright (c) 2015 by Simon Widjaja +++ Distributed under the terms of the MIT license (http://www.opensource.org/licenses/mit-license.html) +++ This notice shall be included in all copies or substantial portions of the Software.

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
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 */

 
/**
 * Workaround to find the right $
 * @ignore
 */
var ___ec$;
try {
  ___ec$ = $;
} catch (err) {
  ___ec$ = AdobeEdge.$;
}





(function (window, $) {
  //------------------------------------
  // Constructor
  //------------------------------------
  var EdgeCommons = function () {};

  //------------------------------------
  // Public
  //------------------------------------
  EdgeCommons.VERSION = "2.0.5";
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

  //})(window, AdobeEdge.$);
  //})(window, $);
})(window, ___ec$);






//==================================================
//==================================================
// Shortcuts
//==================================================
//==================================================


//==================================================
// Extending Symbol
//==================================================
/*
// IDEA IS DEPRICATED
___ec$.extend(AdobeEdge.Symbol.prototype, {
  // NOT WORKING WITH SYMBOLS CURRENTLY (transform)
  ubr_center: function () {
    EC.centerElement(this.getSymbolElement());
  },
  ubr_makeStaticButton: function (label, icon, clickHandler, data) {
    EC.makeStaticButton(this, label, icon, clickHandler, data);
  },
  ubr_makeAnimatedButton: function (label, icon, clickHandler, data) {
    EC.makeAnimatedButton(this, label, icon, clickHandler, data);
  }
});
*/;/**
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
 * The core module of EdgeCommons
 * @namespace Core
 */
(function (EC) {
  //------------------------------------
  // Constructor
  //------------------------------------
  var C = function () {};

  //------------------------------------
  // Public
  //------------------------------------
  C.VERSION = "1.1.0";
  C.stylesheet = null;

  //------------------------------------
  // Private
  //------------------------------------
  // $/jQuery
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
   * Real Center Stage (fullscreen compatible)<br/>
   * This function even centers the stage even if left value becomes negative
   * @memberof Core
   * @example
   * // TODO
   * @param sym {AnimateSymbol} Reference to any symbol of the affected composition
   * @param [showHorizontalScrollbar] {Boolean} (Optional) Flag to hide scrollbar on body (true|false, default: false)
   * @return {Boolean} Always true
   */
  EC.centerStage = function (sym, showHorizontalScrollbar) {
    // Argument sym is not optional
    if (!sym || !(sym instanceof AdobeEdge.Symbol)) {
      Log.error("centerStage(): First argument 'sym' is not optional and has to be a symbol", LOG_GROUP);
    }
    // Hide scrollbar 
    if (!showHorizontalScrollbar) {
      $("body").css("overflow-x", "hidden");
    }
    // Center stage
    EC.centerElement(sym.getComposition().getStage().getSymbolElement());
    // Return
    return true;
  }

  /**
   * Center an element<br/>
   * Does not consider rotation/scaling<br/>
   * Does currently NOT work with symbol element (transform/translate)
   * @memberof Core
   * @example
   * // TODO
   * @param el {Element} Element reference (type: AdobeEdge.$ or jQuery element)
   * @return {Boolean} Always true
   */
  EC.centerElement = function (el) {
    // Argument el is not optional
    if (!el || !el.css) {
      Log.error("centerElement(): First argument 'el' is not optional and has to be of type AdobeEdge.$ or jQuery element", LOG_GROUP);
    }
    el.css({
      "left": "50%",
      "margin-left": -(Math.round(el.width() / 2)) + "px"
    });
    // Return
    return true;
  }

  /**
   * Get the name of a symbol
   * (if name should be used in sym.getSymbol(NAME) the preceding "#" is necessary)
   * @memberof Core
   * @example
   * // TODO
   * @param sym {AnimateSymbol} Reference to a Animate symbol
   * @param [unique] {Boolean} (Optional) Return full/unique name (e.g. Stage_ResponsiveElement)
   * @return {String} name of symbol (e.g. Stage_ResponsiveElement)
   */
  EC.getSymbolName = function (sym, unique) {
    //var name = sym.getVariable("symbolSelector"); // still with #
    var name = sym._variables.symbolSelector; // still with #
    if (!unique) {
      var paraentSymbol = sym.getParentSymbol();
      if (paraentSymbol) {
        name = name.replace(paraentSymbol.getVariable("symbolSelector") + "_", "");
      }
    }
    name = name.replace("#", "");
    return name;
  };

  /**
   * Get injected data (JSON formatted) from HTML wrapper of the stage
   * @memberof Core
   * @example
   * // TODO
   * @param sym {AnimateSymbol} Reference to a Animate symbol (does not matter which one)
   * @param [scriptClassSelector] {String} (Optional) Class of the container script-Tag (default: "data")
   * @return {Object} The injected (JSON) data as object
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
   * Set adaptive layouts (distinct symbols for for specific layout dimensions)<br/>
   * {{Documentation needs revision}}
   * @memberof Core
   * @example
   * // TODO
   * @param adaptiveLayouts {Array} Array with dimensions of alternative layouts
   * @param sym {AnimateSymbol} Reference to a Animate symbol (e.g. stage)
   * @param adaptiveContainer {Element} The container where the layout symbols should be placed
   * @param [callback] {Function} (Optional) Callback to be executed on layout switch
   * @param [useWindowInsteadOfStage] {Boolean} (Optional) If true the window width is used for calculations (necessary if you have a fix stage that is centered (e.g. with EC.centerStage())) (default: false)
   * @return {Boolean} always true
   */
  EC.setAdaptiveLayouts = function (adaptiveLayouts, sym, adaptiveContainer, callback, useWindowInsteadOfStage) {
    if (!adaptiveLayouts || !adaptiveLayouts.length) {
      Log.error("Error in setAdaptiveLayouts(). Argument 'layouts' is not optional and has to be an array.", LOG_GROUP);
      return;
    }
    _adaptiveLayouts = adaptiveLayouts;

    useWindowInsteadOfStage = !!useWindowInsteadOfStage;

    // Register optional callback
    if (typeof (callback) == "function") {
      _adaptiveLayoutCallback = callback;
    }

    // Register event handler for resize, so the right adaptive layout gets displayed
    // whenever the windows is being resized
    $(window).bind("resize", function (e) {
      EC.applyAdaptiveLayout(sym, adaptiveContainer, useWindowInsteadOfStage);
    });
    // Execute initially
    EC.applyAdaptiveLayout(sym, adaptiveContainer, useWindowInsteadOfStage);
    // Return
    return true;
  };
  EC.applyAdaptiveLayout = function (sym, adaptiveContainer, useWindowInsteadOfStage) {
    try {
      sym.setVariable("doResizing", function () {
        var stage = sym.getComposition().getStage();
        var width = (!useWindowInsteadOfStage) ? stage.getSymbolElement().width() : $(window).width();

        // responsive container
        var container = sym.$(adaptiveContainer);

        var buffer = 0; // before 1.0.3 we had a tolerance of 20px for some special cases
        var calcLayout = null;
        $.each(_adaptiveLayouts, function (index, layout) {
          if (width >= layout - buffer) {
            calcLayout = layout;
          }
        });

        if (_currentAdaptiveLayout != calcLayout) {
          //Log.debug( "Switching to: layout"+calcLayout, LOG_GROUP );
          // Clear old layout
          _currentAdaptiveSymbol && _currentAdaptiveSymbol.deleteSymbol();
          //console.log("_currentAdaptiveSymbol: ", _currentAdaptiveSymbol);
          container.html("");
          // Create new layout
          var layoutSym = sym.createChildSymbol("layout" + calcLayout, adaptiveContainer);
          // Remember layout
          _currentAdaptiveLayout = calcLayout;
          _currentAdaptiveSymbol = layoutSym;
          // Optional callback
          if (typeof (_adaptiveLayoutCallback) == "function") {
            _adaptiveLayoutCallback(calcLayout, layoutSym);
          }
        }
        // Display mode (debug only)
        //sym.$("currentLayout").html(sym.getVariable("layout"));
        //sym.stop(mode);

      });

      // Execute on startup
      var doResizing = sym.getVariable("doResizing");
      doResizing();

    } catch (error) {
      console.error(error);
    }
  };

  //==================================================
  // End: Adaptive Layouts
  //================================================== 



  //==================================================
  // Buttons
  //==================================================    

  /**
   * Convert a given symbol to a static button component with three states (normal, over and down)<br/>
   * Implement the three button states (normal, over, down) as labels on the symbol's timeline<br/>
   * A optional "hotspot" element is supported within the symbol to handle all events (click/touch/mouseenter etc.)<br/>
   * Touch enabled: in mobile environments just a tap/click listener will be attached (no states are supported)<br/>
   * @memberof Core
   * @example
   * //TODO
   * @param sym {AnimateSymbol} The symbol to convert
   * @param [label] {String} (Optional) the label of the button (the affected symbol needs to implement a textfield or DIV named "label")
   * @param [icon] {String} (Optional) path to an icon file (e.g. SVG or PNG) relative to the main HTML file
   * @param [clickHandle] {Function} callback for click/touch event
   * @param [data] {Object} (Optional) data object that will be passed to the button instance and will be available in clickHandler callback as second argument
   * @return {Boolean} always true
   */
  EC.makeStaticButton = function (sym, label, icon, clickHandler, data) {
    // Search for optional element "hotspot"
    var hotspot = sym.$("hotspot");
    var hs$ = (hotspot[0]) ? hotspot : sym.getSymbolElement();
    label && sym.$("label").html(label);
    icon && sym.$("icon").css({
      "background-image": "url(" + icon + ")",
      "background-color": "none"
    });
    data && sym.setVariable("data", data);
    // Call when ready
    if (typeof (sym.getVariable("ready")) === "function") {
      sym.getVariable("ready")(data);
    }
    hs$.css("cursor", "pointer");
    if (!EC.isMobile()) {
      hs$.bind("mouseenter", function (e) {
        sym.stop("over");
      });
      hs$.bind("mouseleave", function (e) {
        sym.stop("normal");
      });
      hs$.bind("mousedown", function (e) {
        sym.stop("down");
      });
      hs$.bind("mouseup", function (e) {
        sym.stop("over");
      });
    }
    hs$.bind(EC.CLICK_OR_TOUCH, function (e) {
      (typeof (clickHandler) === "function") && clickHandler(sym, data);
    });
    return true;
  }

  /**
   * Convert a given symbol to an animated button component that will be played forward and backward on mouse events<br/>
   * A optional "hotspot" element is supported within the symbol to handle all events (mouseenter etc.)<br/>
   * Touch enabled: in mobile environments just a tap/click listener will be attached (no states are supported)<br/>
   * @memberof Core
   * @example
   * //TODO
   * @param sym {AnimateSymbol} The symbol to convert
   * @param [label] {String} (Optional) the label of the button (the affected symbol needs to implement a textfield or DIV named "label")
   * @param [icon] {String} (Optional) path to an icon file (e.g. SVG or PNG) relative to the main HTML file
   * @param [clickHandler] {Function} (Optional) callback for click/touch event
   * @param [data] {Object} (Optional) data object that will be passed to the button instance and will be available in clickHandler callback as second argument
   * @return {Boolean} always true
   */
  EC.makeAnimatedButton = function (sym, label, icon, clickHandler, data) {
    // Search for optional element "hotspot"
    var hotspot = sym.$("hotspot");
    var hs$ = (hotspot[0]) ? hotspot : sym.getSymbolElement();
    label && sym.$("label").html(label);
    icon && sym.$("icon").css("background-image", "url(" + icon + ")");
    data && sym.setVariable("data", data);
    // Call when ready
    if (typeof (sym.getVariable("ready")) === "function") {
      sym.getVariable("ready")(data);
    }
    hs$.css("cursor", "pointer");
    if (!EC.isMobile()) {
      hs$.bind("mouseenter", function (e) {
        sym.play();
      });
      hs$.bind("mouseleave", function (e) {
        sym.playReverse();
      });
      hs$.bind("click", function (e) {
        (typeof (clickHandler) === "function") && clickHandler(sym, data);
      });
    } else {
      // Initially set state to inactive
      sym.setVariable("animatedButtonState", "inactive");
      hs$.bind("touchstart", function (e) {
        var isActive = (sym.getVariable("animatedButtonState") !== "inactive");
        if (isActive) {
          (typeof (clickHandler) === "function") && clickHandler(sym, data);
          sym.setVariable("animatedButtonState", "inactive");
          sym.playReverse();
        } else {
          sym.play();
          sym.setVariable("animatedButtonState", "active");
          setTimeout(function () {
            if (sym.getPosition() > 0) {
              sym.playReverse();
            }
            sym.setVariable("animatedButtonState", "inactive");
          }, 2000);
        }
      });
    }
    return true;
  }

  //==================================================
  // End: Buttons
  //==================================================    



  //==================================================
  // CSS
  //==================================================

  /**
   * Internal function to initially setup stylesheet
   */
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
   * Add custom CSS rules at runtime<br/>
   * @memberof Core
   * @example
   * //TODO
   * @param selector {String} the CSS selector (e.g. ".item-active")
   * @param properties {Object} object with all CSS properties
   * @param [index] {Integer} (Optional) the index of the selector (useful for hierarchy control, default: 1)
   * @return {Boolean} always true
   */
  EC.addCSS = function (selector, properties, index) {
    index = (index) ? index : 0;

    // Create stylesheet initially
    _initStylesheet();

    // thanks to David Walsh http://davidwalsh.name/add-rules-stylesheets
    function _addCSSRule(sheet, selector, rules, index) {
      if ("insertRule" in sheet) {
        sheet.insertRule(selector + "{" + rules + "}", index);
      } else if ("addRule" in sheet) {
        sheet.addRule(selector, rules, index);
      } else {
        // Property error logging
        console.error("cannot add CSS");
      }
    }

    var propertiesString = "";
    for (var prop in properties) {
      //console.log(p);
      propertiesString += prop + ": " + properties[prop] + ";";
    }
    //console.log("propertiesString: ", propertiesString);
    //_addCSSRule(document.styleSheets[0], selector, propertiesString, index);
    _addCSSRule(EC.stylesheet, selector, propertiesString, index);
    return true;
  }

  //==================================================
  // End: CSS
  //================================================== 



  //==================================================
  // Symbols and Triggers
  //==================================================  

  /**
   * Get all children of a symbols (recursive or immediate children only)<br/>
   * @memberof Core
   * @example
   * //TODO
   * console.log( "stage: ", getChildSymbols(sym) );
   * console.log( "stage: ", getChildSymbols(sym, false) );
   * console.log( "MySymbol1: ", getChildSymbols(sym.getSymbol("MySymbol1")) );
   * @param sym {AnimateSymbol} the affected symbol
   * @param [recursive] {Boolean} if 'false' only immediate children will be returned otherwise all children and grand-children well be returned
   * @param [result] {null|Array} (Optional) only used for recursion
   * @return {Array} list with all available symbols
   */
  EC.getChildSymbols = function (sym, recursive, result) {
    // Arguments and defaults
    recursive = (recursive !== false) ? true : false;
    // Prepare result
    result = (result) ? result : [];
    var immediateChildren = sym.getChildSymbols();
    if (immediateChildren.length > 0) {
      var i = 0,
        len = immediateChildren.length;
      for (i; i < len; i++) {
        result.push(immediateChildren[i]);
        recursive && EC.getChildSymbols(immediateChildren[i], recursive, result);
      }
    }
    return result;
  };

  //==================================================
  // End: Symbols and Triggers
  //==================================================  



  //==================================================
  // Pause/Unpause
  //==================================================

  /**
   * Pause/Unpause (internal function)
   * @ignore
   * @param sym {AnimateSymbol} symbol
   * @param flag {Boolean} pause (false) or unpause (true)
   * @param [recursive] {Boolean}  pause all sub symbols
   * @return {Array} list with all available symbols
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
        } else { // unpause
          // Get playback state
          var playState = s.getVariable("_ec_playState");
          // If symbol was playing before start playing again
          if (playState === "playing") {
            s.play();
          } else if (playState === "playingReverse") {
            s.playReverse();
          }
        }
      }
    } catch (err) {
      // TODO: Add real logging
      console.error(err.toString());
    }
  }

  /**
   * Pause a symbol
   * @memberof Core
   * @example
   * //TODO
   * @param sym {AnimateSymbol} symbol
   * @param [recursive] {Boolean} pause all sub symbols
   * @return {Boolean} always true
   */
  EC.pause = function (sym, recursive) {
    _handlePause(sym, false, recursive);
    return true;
  }

  /**
   * Unpause a symbol
   * @memberof Core
   * @example
   * //TODO
   * @param sym {AnimateSymbol} symbol
   * @param [recursive] {Boolean} pause all sub symbols
   * @return {Boolean} always true
   */
  EC.unpause = function (sym, recursive) {
    _handlePause(sym, true, recursive);
    return true;
  }

  //==================================================
  // End: Pause/Unpause
  //==================================================  



  //==================================================
  // Misc
  //==================================================  

  /**
   * Figure out if full jQuery is used
   * @memberof Core
   * @example
   * //TODO
   * @return {Boolean} true if jQuery is used, otherwise false
   */
  EC.isJQuery = function () {
    return !!(AdobeEdge.$.fn && AdobeEdge.$.fn.jquery);
  }

  /**
   * Load external composition<br/>
   * TODO: UPDATE DOC: promise substituted with callback (no more jquery dep)
   * @memberof Core
   * @example
   * //TODO
   * // TODO: CHECK symbolOrElement
   * // TODO: CHECK An5.0 composition loader
   *
   * var targetContainer = sym.getSymbol("targetContainer");
   * EC.loadComposition("sub2.html", targetContainer)
   *   .done( function(comp) {
   *      comp.getStage().$("mytext").html("hello number 2");
   *      comp.getStage().$('targetContainer').append("<hr/>HUHU  222<hr/>");
   *   });
   * @param src {String} Path to HTML file to load
   * @param symbolOrElement {Element|AnimateSymbol} The target container where the external composition should be placed (element or symbol)
   * @param [callback] {Function} (Optional) Callback to be called when loading composition is completed and external composition is fully built
   * @return {Boolean} true Always returns true
   */
  EC.loadComposition = function (src, symbolOrElement, callback) {
    // Check arguments 
    if (!src || !symbolOrElement) {
      Log.error("Error in loadComposition(). Arguments 'src' and 'sym' are not optional.", LOG_GROUP);
      return;
    }
    try {
      // Symbol or Element
      var el;
      if (symbolOrElement instanceof AdobeEdge.Symbol) {
        el = symbolOrElement.getSymbolElement();
      } else {
        el = symbolOrElement;
      }
      // Inject IFrame
      var uniqueId = "ec_" + Math.random().toString(36).substring(7);
      //el.html('<iframe id="'+uniqueId+'" src="'+src+'" style="overflow: hidden; width: 100%; height: 100%; margin: auto; border: 0 none; background-color: rgba(255,255,255,0)"></iframe>');
      // Prevent flickering (http://css-tricks.com/prevent-white-flash-iframe/)
      //el.html('<iframe id="' + uniqueId + '" src="' + src + '" style="visibility:hidden; overflow: hidden; width: 100%; height: 100%; margin: auto; border: 0 none; background-color: rgba(255,255,255,0)" onload="this.style.visibility=\'visible\';"></iframe>');
      el.html('<iframe id="' + uniqueId + '" style="visibility:hidden; overflow: hidden; width: 100%; height: 100%; margin: auto; border: 0 none; background-color: rgba(255,255,255,0)"></iframe>');

      // Create promise
      //var promise = new jQuery.Deferred();

      //--------------------------------------------------
      // Wait for IFrame and inner composition to be loaded
      //--------------------------------------------------
      var iframe = $("#" + uniqueId);
      var innerWindow = iframe[0].contentWindow;

      // Handle IFrame load
      iframe[0].onload = function (evt) {

        // Make visible (anti flickering on init)
        this.style.visibility = 'visible';

        // Wait for inner composition to be bootstrapped
        innerWindow.AdobeEdge.bootstrapCallback(function (compId) {
          //EC.debug("Inner composition was bootstrapped: ", LOG_GROUP, compId);
          // alpha: ignore compId (just one inner comp supported so far)
          var innerComp = innerWindow.AdobeEdge.getComposition(compId);
          //EC.debug("innerComp", LOG_GROUP, innerComp);
          //innerComp.getStage().$('targetContainer').html("<hr/>TEST<hr/>");

          // Resolve promise
          //promise.resolve(innerComp, uniqueId, innerWindow.AdobeEdge);

          // Optionally call callback
          if (typeof callback === "function") {
            callback(innerComp, uniqueId, innerWindow.AdobeEdge);
          }
        });
      };

      // Set src to load inner composition
      src = src + "?nocachingid=" + uniqueId; // NoCache hack
      iframe.attr("src", src);

    } catch (err) {
      EC.error("Error in loadComposition: ", LOG_GROUP, err.toString());
    }

    // Return promise
    //return promise;
    return true;
  };

  /**
   * Detect a mobile environment (e.g. to switch to gestures instead of mouse input)<br/>
   * Mobile user agents supported: Android, iPhone/iPad/iPod, Opera Mini and IEMobile
   * @memberof Core
   * @example
   * //TODO
   * @return {Boolean} true if mobile environment was detected otherwise false
   */
  EC.isMobile = function () {
    return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Opera Mini/i) || navigator.userAgent.match(/IEMobile/i);
  }

  /**
   * Constant to equally use click or touch events in event handlers<br/>
   * Can be used in click handler to be optimized on touch devices<br/>
   * The value is eithe 'click' or 'touchstart'
   * @memberof Core
   * @example
   * // Use CLICK_OR_TOUCH constant for event binding of a button
   * sym.$("myButton").bind(EC.CLICK_OR_TOUCH, function() { ... } );
   */
  EC.CLICK_OR_TOUCH = (EC.isMobile()) ? "touchstart" : "click";

  //==================================================
  // End: Misc
  //==================================================    

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
 * Parallax
 *
 * Horizontal Parallax by Jacques Letesson
 */

/**
 * Simple Parallax scrolling for Edge Animate (no support for mobile devices)
 * @namespace Parallax
 */
(function (EC) {
  //------------------------------------
  // Constructor
  //------------------------------------
  var C = function () {};

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
   * (Internal) Add composition to parallax watcher
   * @ignore
   */
  C.addComposition = function (compId) {
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
    this.compositions[compId].stageMiddle = Math.floor((stageTop + stageHeight / 2));
    this.compositions[compId].duration = stage.getDuration();

    // Stop timeline (override autoplay)
    stage.stop(0);
  }

  /**
   * Setup Parallax Scrolling for a specific composition
   * @alias EC.setup
   * @memberof Parallax
   * @example
   * // Setup Parallax Scrolling
   * // MUST be in compositionReady (NOT IN creationComplete)
   * EC.Parallax.setup( sym );
   * @param sym {Symbol} A Symbol within the affected composition  
   * @param scrollType {String} A string to define the type of scroll : vertical (default) or horizontal
   */
  C.setup = function (sym, scrollType) {
    // Check arguments 
    if (!sym) {
      Log.error("Error in setup(). Argument 'sym' is not optional.", LOG_GROUP);
      return;
    }
    if (scrollType === undefined) {
      scrollType = "vertical";
    }

    // Add composition to list (currently only one composition is supported)
    this.addComposition(sym.getComposition().getCompId());

    // Add listener for scroll event on document
    //var throttleIndex = throttleIndexInitial = 2;
    $(document).bind("scroll", function () {
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
          var percentage = scrollPos / (c.stageHeight - $(window).height());
          var playheadPos = Math.floor(percentage * c.duration);
          c.stage.stop(playheadPos);
        }
      }
      function scrollHorizontal() {
        // nojq
        //$.each( EC.Parallax.compositions, function(compId, c) {
        for (var compId in EC.Parallax.compositions) {
          var c = EC.Parallax.compositions[compId];
          // Calculate new playhead position
          var percentage = scrollPos / (c.stageWidth - $(window).width());
          var playheadPos = Math.floor(percentage * c.duration);
          c.stage.stop(playheadPos);
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


/**
 * Spotlight: Overlay for media (e.g. Images, YouTube) or external Edge Animate compositions
 * @namespace Spotlight
 */
(function (EC) {
  //------------------------------------
  // Constructor
  //------------------------------------
  var C = function () {};

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
  C.setup = function () {
    //EC.addCSS();
  }


  /**
   * Open a spotlight overlay by passing in a configuration object
   * @alias EC.open
   * @memberof Spotlight
   * @param config {Object} The configuration object  
   * <pre>
   *   var config = {
   *     width: 700,                                   // Width of the overlay
   *     height: 400,                                  // Height of the overlay
   *     borderWidth: 5,                               // Border width (px)
   *     borderColor: "#FFF",                          // Border color
   *     type: "image",                                // Media type (image|animate|youtube)
   *     source: "images/MyImage.png",                 // Source to media
   *     onClose: function(config, documentContext) {} // Callback for close button
   *     param: {}                                     // Additional parameter dependent on type (e.g. autoPlay: true for youtube)
   *   }
   * </pre>
   * @param [documentContext=window.top.document] {Object} The parent context for the spotlight overlay (e.g. window.document or window.parent.document)
   * @return {Boolean} returns <code>true</code> whenever the opening of the spotlight overlay was successfull otherwise <code>false</code>
   */
  C.open = function (config, documentContext) {
    try {
      // Check arguments 
      if (config.type != "image" && config.type != "animate" && config.type != "youtube") {
        Log.error("Error in open(). Unsupported type: " + config.type, LOG_GROUP);
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
      var tpl = '<div id="spotlight"> <div class="background animated transparent"> </div> </div>';
      $("body", documentContext).append(tpl);
      var tpl = '<div class="base"></div>';
      $("#spotlight .background", documentContext).append(tpl);
      var tpl = '<div class="close-button animated transparent"></div>';
      $("#spotlight .background", documentContext).append(tpl);


      // Place close button
      var closeButton = $("#spotlight .close-button", documentContext);
      closeButton.css("margin-left", (0.5 * config.width) - 15 + (config.borderWidth))
        .css("margin-top", (-0.5 * config.height) - 15);


      // Set width and height and center
      var base = $("#spotlight .base", documentContext);
      base.css("width", 0)
        .css("height", 0)
        .css("margin-left", 0)
        .css("margin-top", 0)
        .css("border-width", config.borderWidth)
        .css("border-color", config.borderColor)
        .css("border-radius", 5);

      /*
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
          */


      // TEMP
      base.css({
        width: config.width,
        "margin-left": -0.5 * config.width,
        height: config.height,
        "margin-top": -0.5 * config.height
      });



      setTimeout(function () {
        // Fade/Scale in
        $("#spotlight .background").removeClass("transparent");
      }, 10);

      setTimeout(function () {
        // Fade/Scale in
        base.addClass("finalscale");
        $("#spotlight .content", documentContext).css("display", "inline");
        $("#spotlight .close-button", documentContext).css("display", "block");
      }, 100);

      setTimeout(function () {
        $("#spotlight .fader", documentContext).css("opacity", 0);
        $("#spotlight .close-button", documentContext).removeClass("transparent");
      }, 500);







      // Inject content
      base.append('<div class="content"></div>');
      var content = $("#spotlight .content", documentContext);

      // Base Url (if composition is running in iframe but spotlight's context is top document)
      var hrefArray = document.location.href.split("/");
      var lastHrefElement = hrefArray[hrefArray.length - 1];
      if (lastHrefElement.indexOf(".") != -1) {
        hrefArray.pop();
      }
      var baseUrl = hrefArray.join("/");

      // Media Types
      switch (config.type) {
      case "image":
        var src = (config.source.indexOf("http:") == -1 && config.source.indexOf("https:") == -1) ? baseUrl + "/" + config.source : config.source;
        content.append('<img src="' + src + '" />');
        break;
      case "animate":
        var src = (config.source.indexOf("http:") == -1 && config.source.indexOf("https:") == -1) ? baseUrl + "/" + config.source : config.source;
        content.append('<iframe src="' + src + '" style="overflow: hidden; width: 100%; height: 100%; margin: auto; border: 0 none;"></iframe>');
        break;
      case "youtube":
        content.append('<iframe width="' + config.width + '" height="' + config.height + '" ' + 'src="http://www.youtube.com/embed/' + config.source + '?autoplay=' + ((config.param && config.param.autoPlay) ? "1" : "0") + '" ' + 'frameborder="0" allowfullscreen></iframe>');
        break;
      }

      content.append('<div class="fader animated"></div>');
      var fader = $("#spotlight .fader", documentContext);




      // On click
      $("#spotlight .background", documentContext).bind("click", function () {
        EC.Spotlight.close(config, documentContext);
      });
      return true;
    } catch (err) {
      Log.error(err.toString());
      return false;
    }
  };

  /**
   * Close an existing spotlight overlay<br/>
   * (This function usually gets called by the internal close button automatically)
   * @alias EC.close
   * @memberof Spotlight
   * @param config {Object} The configuration object  
   * @param [documentContext=window.top.document] {Object} The parent context for the spotlight overlay (e.g. window.document or window.parent.document)
   * @return {Boolean} returns <code>true</code> whenever the opening of the spotlight overlay was successfull otherwise <code>false</code>
   */  
  C.close = function (config, documentContext) {
    if (documentContext == undefined) {
      documentContext = window.top.document;
    }

    $("#spotlight .content", documentContext).remove();
    $("#spotlight .close-button", documentContext).remove();

    //$("#spotlight .background", documentContext).fadeOut(400);
    $("#spotlight .background", documentContext).css("opacity", 0);

    var base = $("#spotlight .base", documentContext);

    /*
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
        */
    base.removeClass("finalscale");

    setTimeout(function () {
      $("#spotlight", documentContext).remove();
      if (typeof (config.onClose) === "function") {
        config.onClose(config, documentContext);
      }
    }, 300);
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
 * SVG: Interactive SVG within you Edge Animate compositions
 * @namespace SVG
 */
(function (EC) {
  //------------------------------------
  // Constructor
  //------------------------------------
  var C = function () {};

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
   * Convert SVG to be accessible for scripting
   * @alias EC.accessSVG
   * @memberof SVG
   * @example
   * // Make SVG accessible for scripting
   * EC.accessSVG( sym.$("pie") ).done(function(svgDocument, svgElement, uniqueId){
   *   EC.debug("DONE");
   *   var el = svgDocument.getElementById("Cyan");
   *   $(el).attr({fill: "#000"});
   *   $(el).click(function(){
   *     alert("DYNAMIC CLICK ON INNER PATH");
   *   });				
   * });
   * @param element {Element} The div container holding the SVG
   * @return {Object} jQuery promise
   */  
  C.accessSVG = function (element) {
    if (element.is("div")) {
      var imgSrc = element.css("background-image").replace("url(", "").replace(")", "");
      // Remove "" in IE
      imgSrc = imgSrc.replace("\"", "");
    } else if (element.is("img")) {
      var imgSrc = element.attr("src");
    }
    //TODO: Check if is SVG

    // Replace with real SVG
    // TODO: improve flicker (maybe set invisible during loading and wait for complete)
    element.css("background-image", "");
    var uniqueId = "ec_" + Math.random().toString(36).substring(7);
    element.append('<embed id="' + uniqueId + '" src="' + imgSrc + '" type="image/svg+xml" width="100%" height="100%" />');

    // Create promise
    var promise = new jQuery.Deferred();

    // Wait for Embed to be loaded
    //var embed = jQuery("#svgEmbed");

    var svgElement = document.getElementById(uniqueId);

    svgElement.onload = function () {
      var svgDocument = svgElement.getSVGDocument();
      // Update (Inject notify function. Makes svg.js obsolete)
      svgDocument.notify = function (ref, type) {
        var event = document.createEvent("CustomEvent");
        event.initEvent(type, true, true);
        ref.dispatchEvent(event);
      }
      // TODO return id
      promise.resolve(svgDocument, svgElement, uniqueId);
    };

    return promise;
  }

  //------------------------------------
  // Init
  //------------------------------------
  EC.SVG = C;
  //Log.debug("v" + C.VERSION, LOG_GROUP);

})(EdgeCommons);