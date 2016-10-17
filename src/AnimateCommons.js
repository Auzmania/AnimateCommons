////////////////////////////////////////////////////
// Animate Commons
////////////////////////////////////////////////////
(function (window) {

  // Load only once
  if (window.AnimateCommons) return;

  ////////////////////////////////////////////////////
  ////////////////////////////////////////////////////
  // Main Class
  ////////////////////////////////////////////////////
  ////////////////////////////////////////////////////

   /**
   * AnimateCommons
   * @module AnimateCommons
   */
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
     * @param {Object} lib - The library object (defaults to window.lib)
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
  /**
   * AC_Static
   * @module AC_Static
   */
  var AC = window.AC = function (context) {
    return new AnimateCommons(context);
  }




  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Static functions
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////


  /**
   * @private
   * @property {Object} Internal map with all available compositions
   */
  AC._compositions = {};
  /**
   * Get composition
   * @memberof AC_Static
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

  /**
   * Detect if running on mobile device
   * @memberof AC_Static
   * @return {Boolean} true if composition is running on mobile device, false if not
   */
  AC.isMobile = function () {
    return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Opera Mini/i) || navigator.userAgent.match(/IEMobile/i) || false;
  };

  ////////////////////////////////////////////////////
  // Environment
  ////////////////////////////////////////////////////

  /**
   * Get device pixel ratio (e.g. highDPI/retina)
   * Inspired by Tyson Matanich (License: MIT)
   * @memberof AC_Static
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
   * @memberof AC_Static
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
   * Destroy symbol
   * @memberof AC_Static
   *
   *
   * (W IP: Work in progress)
   * Remove from display list and remove all event listeners to enable garbage collection
   *
   * The problem:
   * Removing symbol instances and garbage collecting them is currently not possible in Animate CC.
   * There are several aspects (references) that prevent garbage collection:
   * 1) reference in parent.ID
   * 2) reference in parent.children[N]
   * 3) reference in tween saved in parent.timeline...
   * 4) optionally event Listeners
   * 5) (custom references that were added manually. these have to be removed manually)
   * N OTES:
   * 2) might not be true if timeline has empty frame for the time of querying
   * 3) IS STILL true if tween is completed but timeline has empty frame for the time of querying
   * Use Chrome Dev Tools -> Profiler to see result of garbage collection and in case of failing where references still exits
   *
   * @QUESTION: What if parent w/ timeline gets deleted? Does problem still exist?
   *
   * @example Usage
   * AC.destroyC(this.currentScene, this);
   * @param {Symbol} sym - The child to be destroyed
   * @param {Symbol} parent - The parent symbol (optional, needed only if instance is already removed from display list and sym.parent is no longer available)
   */
  AC.destroy = function(sym, parent) {

  	//console.log( "children: ", sym.children );
  	//console.log("sym id", AC(sym).getId());

  	parent =  sym.parent || parent;

  	// Remove tweens from parent (tweens hold references to symbols and prevent garbage collection)
  	if (parent) {

  		var timeline = parent.timeline;
  		//console.log("timeline", timeline);
  		for (var t_i=0; t_i<timeline._tweens.length; t_i++) {
  			var tween = timeline._tweens[t_i];
  			//console.log("Tween: ", tween);
  			if (tween.target == sym) {
  				//console.log(" 2 matching tween found...", tween.target);
  				timeline.removeTween(tween);
  				tween.removeAllEventListeners();
  				tween.removeAllTweens && tween.removeAllTweens();
  				tween.target = null;
  				tween = null;
  			}
  			timeline[t_i] = null;
  			//console.log(" 2 removed from timeline: ", t_i);
  		}

  	}

  	// Remove childs recursively
  	for (var i=0; i<sym.children.length; i++) {
  		var child = sym.children[i];
  		//console.log("child: ", child);

  		// Recursive
  		child.children && child.children.length && AC.destroy(child, null);

  		// Destroy if end of line
  		child.removeAllEventListeners();
  		child.removeAllChildren && child.removeAllChildren(); // Does this make sense? there shouldn't be any children here
  		child.parent && child.parent.removeChild(child);
  		child = null;
  		//delete child; // PREVENTS DOCUMENTATION
  	}

  	// Remove id on parent
  	if (parent) {
  		// id cannot be calculated if sym is not in display list anymore (e.g. track ended on timeline)
  		var id = AC(sym).getId();
  		if (!id) {
  		  for (var p in parent) {
    			if (parent.hasOwnProperty(p)) {
    			  if (parent[p] === sym) {
    				  id = p;
    			  }
    			}
  		  }
  		}
  		//console.log("removing: ", id, ", from: ", parent);
  		parent.removeChild(sym);
  		parent[ id ] = null;
  	}
  };


  /**
   * Get all symbol definitions of library
   *
   * Returns an object with symbol definition names as keys and symbol definitions (class) as value
   * @memberof AC_Static
   * @param {Object} lib - The library (defaults to window.lib)
   */
  AC.getSymbolDefinitions = function(lib) {
    lib = lib ? lib : window.lib;
    var result = {};
    for (var symDefName in lib) {
      if ( lib.hasOwnProperty( symDefName ) ) {
        var symDef = lib[symDefName];
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
   * @memberof AC_Static
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
