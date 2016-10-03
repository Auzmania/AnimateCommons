////////////////////////////////////////////////////
// Animate Commons
// First draft
////////////////////////////////////////////////////

(function (window) {

  // Load only once
  if (window.AnimateCommons) return;

  ////////////////////////////////////////////////////
  ////////////////////////////////////////////////////
  // Main Class
  ////////////////////////////////////////////////////
  ////////////////////////////////////////////////////
  var AnimateCommons = window.AnimateCommons = function (context) {
    this.context = context;
  }
  AnimateCommons.prototype = {

    ////////////////////////////////////////////////////
    // Composition
    ////////////////////////////////////////////////////
    /**
     * Get DOM id of canvas
     */
    getCanvasId: function () {
      return this.getCanvas().id;
    },
    ////////////////////////////////////////////////////
    // END: Composition
    ////////////////////////////////////////////////////






    ////////////////////////////////////////////////////
    // Navigation
    ////////////////////////////////////////////////////
    /**
     * Get parent symbol
     * @returns {AC|null AC} of parent symbol or null if no parent exists
     */
    getParent: function () {
      return (this.context.parent ? AC(this.context.parent) : null);
    },

    /**
     * Get all parent symbols
     * @returns {Array} All parents (last one added is the top level)
     */
    getAllParents: function () {
      var current = this.context.parent,
          result = [];
      while (current) {
        result.push(current);
        current = current.parent;
      }
      return result;
    },

    /**
     * Get stage
     * Walks up the parent path to top level
     * @returns {AC} AC of stage
     */
    getStage: function () {
      var stage = this,
          parent = this.getParent();
      while (parent) {
        stage = parent;
        parent = parent.getParent();
      }
      return stage;
    },
    /**
     * Get canvas
     * @returns {DOMCanvas} The canvas
     */
    getCanvas: function () {
      return this.getStage().context.canvas;
    },
    /**
     * Get composition
     * @returns {AC.Composition} The composition object
     */
    getComposition: function () {
      return AC.getComposition(this.context);
    },
    ////////////////////////////////////////////////////
    // END: Navigation
    ////////////////////////////////////////////////////



    ////////////////////////////////////////////////////
    // Misc
    ////////////////////////////////////////////////////

    /**
     * Get id of given Symbol instance (Might not be super fast ;)
     * @returns {String} Id of current symbol
     */
    getId: function() {
      var parent = this.context.parent;
      for (var p in parent) {
        if (parent.hasOwnProperty(p)) {
          if (parent[p] === this.context) {
            return p;
          }
        }
      }
    },

    /**
     * Get symbol definition (name of symbol definition in library)
     * currently we will only support the default lib (window.lib)
     * @returns {String} Symbol definition
     */
    getSymbolDefinitionName: function(lib) {
      // Access the default lib
      var lib = lib || window.lib;
      var result = undefined;
      // Get symbol definition
      if (lib) {
        for (var symDefName in lib) {
          if( lib.hasOwnProperty( symDefName ) ) {
            var symDef = lib[symDefName];
            //console.log(symDefName, symDef)
            if (typeof(symDef) === 'function' && this.context instanceof symDef) {
              result = symDefName;
            }
          }
        }
      }
      return result;
    },

    /**
     * Get global scale factor for a symbol
     * With sym.scaleX|scaleY you can only get the scale factor on instance level.
     * This function instead returns the global scale factor taking all parent scale factors into account.
     * @returns {Object} Scale factors as properties: scaleX and scaleY
     */
    getGlobalScaleFactor: function() {
      var parents = this.getAllParents(),
          scaleX = this.context.scaleX,
          scaleY = this.context.scaleY;

      // @TODO: document -1 (exclude stage scale // top most)
      for(var i = 0; i < parents.length-1; i++) {
        scaleX *= parents[i].scaleX;
        scaleY *= parents[i].scaleY;
      }
      return {scaleX: scaleX, scaleY: scaleY};
    },

  };


  ////////////////////////////////////////////////////
  ////////////////////////////////////////////////////
  // Helper
  ////////////////////////////////////////////////////
  ////////////////////////////////////////////////////

  var AC = window.AC = function (context) {
    return new AnimateCommons(context);
  }




  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Static functions
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * @property {Object} Internal map with all available compositions
   */
  AC._compositions = {};
  /**
   * Get composition
   * @param  {Symbol} sym Any symbol of the composition
   * @return {AC.Composition} The composition containing the symbol
   */
  AC.getComposition = function (sym) {
    var symAC = AC(sym),
      stage = symAC.getStage(),
      composition = AC._compositions[stage.getCanvasId()];
    // Init composition if not existing
    if (!composition) {
      composition = AC._compositions[stage.getCanvasId()] = new AC.Composition({
        id: symAC.getCanvasId(),
        canvas: stage.getCanvas(),
        stage: stage
      });
    }
    // Return
    return composition;
  };

  ////////////////////////////////////////////////////
  // Mobile helper
  ////////////////////////////////////////////////////

  AC.isMobile = function () {
    return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Opera Mini/i) || navigator.userAgent.match(/IEMobile/i) || false;
  };

  ////////////////////////////////////////////////////
  // Environment
  ////////////////////////////////////////////////////

  /**
   * Get device pixel ratio (e.g. highDPI/retina)
   * Inspired by Tyson Matanich (License: MIT)
   * @returns {Integer} The current device pixel ratio
   */
  AC.getDevicePixelRatio = function () {
    //console.log("[ AnimateCommons ] getDevicePixelRatio()");
    var ratio = 1;
    // To account for zoom, change to use deviceXDPI instead of systemXDPI
    if (window.screen.systemXDPI !== undefined && window.screen.logicalXDPI !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI) {
      // Only allow for values > 1
      ratio = window.screen.systemXDPI / window.screen.logicalXDPI;
    }
    else if (window.devicePixelRatio !== undefined) {
      ratio = window.devicePixelRatio;
    }
    // Catch unexpected values
    ratio = (ratio >= 1 && ratio <=10) ? ratio : 1;
    return ratio;
  };


  ////////////////////////////////////////////////////
  // Misc
  ////////////////////////////////////////////////////

  /**
   * Apply defaults to options
   * If option already sets a value the default value will be discarded
   * @example Usage
   * someFunc(options) {
   *   options = AC.applyDefaults(options, {
   *     radius: 10,
   *     color: 'red',
   *   });
   * }
   * @param {object} options The options object
   * @param {defaults} defaults The defaults object
   * @returns {object} Options object with defaults applied
   */
  AC.applyDefaults = function(options, defaults) {
    !options && (options = {});
    for (var key in options) {
      defaults[key] = options[key];
    }
    return defaults;
  };

  /**
   * Destroy child
   * Remove from display list and remove all event listener
   * @example Usage
   * if (this.currentScene) {
   *   AC.destroyChild(this.currentScene);
   *  }
   * @param {object} options The options object
   */
  AC.destroyChild = function(sym) {
    sym.removeAllChildren();
    sym.removeAllEventListeners();
    sym.parent && sym.parent.removeChild(sym);
    sym = null;
    delete sym;
    //@TODO: Recursion to remove all sub children and decouple all Event Listeners
  };

  /**
   * Get all symbol definitions of library
   */
  AC.getSymbolDefinitions = function(lib) {
    lib = lib ? lib : window.lib;
    var result = {};
    for (var symDefName in lib) {
      if ( lib.hasOwnProperty( symDefName ) ) {
        var symDef = lib[symDefName];
        //console.log('symDefName: ', symDefName);
        // Filter all properties, that are valid Symbol Definitions
        if ( typeof(symDef) === 'function' && symDef.prototype.timeline && Object.getPrototypeOf(symDef) == Object.getPrototypeOf(createjs.MovieClip) ) {
          result[symDefName] = symDef;
        }
      }
    }
    return result;
  };


  ////////////////////////////////////////////////////
  // General Helper
  ////////////////////////////////////////////////////

  /**
   * Throttle helper (throttle function calls)
   * @param  {Function} fn         [description]
   * @param  {[type]}   threshhold [description]
   * @param  {[type]}   scope      [description]
   * @return {[type]}              [description]
   */
  AC.throttle = function(fn, threshhold, scope) {
    threshhold || (threshhold = 250);
    var last,
        deferTimer;
    return function () {
      var context = scope || this;

      var now = +new Date,
          args = arguments;
      if (last && now < last + threshhold) {
        // hold on to it
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function () {
          last = now;
          fn.apply(context, args);
        }, threshhold);
      } else {
        last = now;
        fn.apply(context, args);
      }
    };
  };

})(window);
