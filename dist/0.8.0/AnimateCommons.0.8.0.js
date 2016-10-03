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

////////////////////////////////////////////////////
// Composition VO
////////////////////////////////////////////////////
(function (AC, AnimateCommons) {
  AC.Composition = function (options) {
    this.id = options.id;
    this.canvas = options.canvas;
    this.stage = options.stage;
    this.isAutoScale = options.isAutoScale || false;
    this.scaleFactor = options.scaleFactor || 1;
    this.devicePixelRatio = options.devicePixelRatio || 1;
    this.store = {};
  };
  AC.Composition.prototype = {
    /**
     * Set a variable on composition level
     * @param  {String} key   Key to set (e.g. 'score' or 'game.score')
     * @param  {Mixed} value Value to store
     */
    set: function(key, value) {
      var segments = key.split(".");
      var current = this.store;
      for (var i=0; i<segments.length; i++) {
        var segment = segments[i];
        // Last segment: Set value
        if (i===segments.length-1) {
          current[segment] = value;
        }
        // Else: Navigate to nested element
        else {
          current = current[segment] = (current[segment]) ? current[segment] : {};
        }
      }
    },
    /**
     * Get a variable on composition level
     * @param  {String} key   Key to set (e.g. 'score' or 'game.score')
     * @return {Mixed} Associated value
     */
    get: function(key) {
      var segments = key.split(".");
      var current = this.store;
      for (var i=0; i<segments.length; i++) {
        var segment = segments[i];
        current = (typeof current === "object") ? current[segment] : current;
      }
      return current;
    }
  }
})(window.AC, window.AnimateCommons);

////////////////////////////////////////////////////
// Adaptive Layout
////////////////////////////////////////////////////
(function (AC, AnimateCommons) {
  AC.AdaptiveLayout = {
    /**
     * Setup a flexible Layout
     * Call this function from Stage to setup a flexible layout with the following options:
     * + vertically and/or horizontally center
     * + max width and/or height
     * @example AC.AdaptiveLayout.setup(this)
     * @param  {AC} sym Animate Sybmbol
     * @param  {Object} options
     * @param  {Library} options.lib Reference to the library
     * @param  {Number} options.maxWidth Max content width in px. Leave blank or use null for not limitation (default: null)
     * @param  {Number} options.maxHeight Max content height in px. Leave blank or use null for not limitation (default: null)
     * @param  {Number} options.originX Positioning x origin in percent (default: 50)
     * @param  {Number} options.originY Positioning y origin in percent (default: 50)
     */
    setup: function(sym, options) {
      //console.log("[ AdaptiveLayout ] setup()", sym, options);

      //--------------------------------------------------
      // Options and Defaults
      //--------------------------------------------------
      options = AC.applyDefaults(options, {
        lib: window.lib,
        maxWidth: null,
        maxHeight: null,
        originX: 50, // percent
        originY: 50, // percent
        breakpoints: []
      });

      //--------------------------------------------------
      // Prepare
      //--------------------------------------------------
      var symAC = AC( AC(sym).getStage().context.children[0] );
      var canvas = symAC.getCanvas();
      var dpr = AC.getDevicePixelRatio();
      var initial = {
        compW: parseInt(canvas.style.width),
        compH: parseInt(canvas.style.height)
      };
      var currentBreakpoint;

      /**
       * Find available layouts in library and parse layout/breakpoint information
       * @return {[type]} [description]
       */
      function findLayouts() {
        var symDefs = AC.getSymbolDefinitions(options.lib);
        // Filter with pattern Layouts???x???
        for (var symDefName in symDefs) {
          var match = symDefName.match(/^Layout(\d{0,4})x(\d{0,4})/);
          if (symDefs.hasOwnProperty(symDefName) && match) {
            var symDef = symDefs[symDefName];
            //{minW: 600, sym: 'Layout600'}
            var bp = {minW: parseInt(match[1]), sym: symDef};
            options.breakpoints.push(bp);
          }
        }
      }

      //--------------------------------------------------
      // Recalculate layout
      //--------------------------------------------------
      var calcLayout = function() {
        //--------------------------------------------------
        // Calc new composition dimensions and scaleFactor
        //--------------------------------------------------
        var newCompW = parseInt(window.getComputedStyle(symAC.getCanvas().parentElement).width);
        var newCompH = parseInt(window.getComputedStyle(symAC.getCanvas().parentElement).height);
        var scaleFactor = (newCompW / initial.compW > newCompH / initial.compH) ? newCompH / initial.compH : newCompW / initial.compW;

        //--------------------------------------------------
        // Update Canvas dimensions
        //--------------------------------------------------
        canvas.style.width = newCompW + "px";
        canvas.style.height = newCompH + "px";
        canvas.setAttribute('width', newCompW * dpr + "px");
        canvas.setAttribute('height', newCompH * dpr + "px");

        //--------------------------------------------------
        // Update content dimensions/position
        //--------------------------------------------------
        // @CHANGE: added
        var contentScaleFactor = 1;
        // @CHANGE: temp removed
        // // Set content scale factor to smaller value (w vs h)
        // var contentScaleFactor = Math.min(
        //   (options.maxWidth && initial.compW * scaleFactor > options.maxWidth) ? options.maxWidth / initial.compW : scaleFactor,
        //   (options.maxHeight && initial.compH * scaleFactor > options.maxHeight) ? options.maxHeight / initial.compH : scaleFactor
        // );
        // // Scale content
        // symAC.context.scaleX = symAC.context.scaleY = contentScaleFactor;

        // Apply origin
        symAC.context.x = Math.round( (0 - ( (initial.compW * contentScaleFactor) - newCompW ) ) * (options.originX/100) );
        symAC.context.y = Math.round( (0 - ( (initial.compH * contentScaleFactor) - newCompH ) ) * (options.originY/100) );

        //--------------------------------------------------
        // Propagate layout change
        //--------------------------------------------------
        var stageAC = symAC.getStage();
        //var evt = new Event("simonsays");
        var evt = new createjs.Event("sizeChange");
        evt.width = newCompW;
        evt.height = newCompH;
        stageAC.context.dispatchEvent(evt);
        //console.log('sizeChange event dispatched');

        //--------------------------------------------------
        // Render appropriate layout
        //--------------------------------------------------
        // Get best fitting breakpoint
        // // @TODO FIND HIGHEST VALUE !!!!
        var newBreakpoint = {minW: 0};
        var bps = options.breakpoints;
        for (var i = 0; i < bps.length; i++) {
          var bp = bps[i];
          if ((newCompW >= bp.minW && bp.minW >= newBreakpoint.minW)) {
            newBreakpoint = bp;
          }
        }


        if (newBreakpoint != currentBreakpoint) {
          // console.log("");
          // console.log("==============");
          // console.log("BP CHANGE - minW: ", newBreakpoint.minW);
          // @TODO: Dispatch some kind of event
          // Remember new breakpoint
          currentBreakpoint = newBreakpoint;

          // Find all layouts to be removed
          var oldLayouts = [];
          for (var i = 0; i < symAC.context.children.length; i++) {
            var child = symAC.context.children[i];
            if (child instanceof createjs.MovieClip && AC(child).getSymbolDefinitionName(options.lib).indexOf('Layout') == 0) {
              oldLayouts.push(child);
            }
          }
          // Remove all layouts
          for (var i = 0; i < oldLayouts.length; i++) {
            // Optionally call destroy() on instance (can be implemented manually to clean things up (e.g. event listeners))
            (typeof (child.destroyLayout) === "function") && child.destroyLayout();
            // @TODO: Performance: Make sure instances are FULLY destroyed and garbage collected
            //console.log("removing child: ", oldLayouts[i], AC(oldLayouts[i]).getSymbolDefinitionName(options.lib));
            symAC.context.removeChild(oldLayouts[i]);
          }

          // Remove children
          //symAC.context.removeAllChildren();

          //var layoutSym = symAC.context.addChild( new lib[newBreakpoint.sym] );
          var layoutSym = symAC.context.addChild( new newBreakpoint.sym() );
          //console.log("ADDED. sym:", AC(layoutSym).getSymbolDefinitionName(options.lib));
          // Center layout sym
          //layoutSym.x = initial.compW/2 - layoutSym.nominalBounds.width/2;
          layoutSym.x = initial.compW/2 - newBreakpoint.minW/2;

          // Call activevateLayout (we have to wait for first frame being executed, since we don't have creationComplete yet)
          setTimeout(function() {
            (typeof (layoutSym.activevateLayout) === "function") && layoutSym.activevateLayout();
          }, 100);
        }
        //console.log('newBreakpoint:', newBreakpoint);




      }

      //--------------------------------------------------
      // Init
      //--------------------------------------------------
      findLayouts();
      // Setup resize listener
      // @TODO: consider throttling here
      window.addEventListener('resize', function(evt) {
        calcLayout();
      });
      // Initial call
      calcLayout();
    }
  }
})(window.AC, window.AnimateCommons);

////////////////////////////////////////////////////
// Parallax
////////////////////////////////////////////////////
(function (AC, AnimateCommons) {
  AC.Parallax = {
    /**
     * Setup Parallax
     * Call this function from Stage to setup a Parallax effect with the following options:
     * @param  {AC} sym Animate Sybmbol
     * @param  {Object} options
     * @param  {Number} options.compWidth Composition width (default: lib.properties.width)
     * @param  {Number} options.throttle Update throttle factor (ms, default: 100)
     * @param  {Number} options.speed Duration of animation (ms, default: 600)
     *                                Set throttle and speed to 1 to remove animation and jump to position immediately
     */
    setup: function(sym, options) {
      //console.log("[ Parallax ] setup()", sym, options);
      var layers = [];

      //--------------------------------------------------
      // Options and Defaults
      //--------------------------------------------------
      options = AC.applyDefaults(options, {
        compWidth: lib.properties.width,
        throttle: 100,
        speed: 600
      });


      //--------------------------------------------------
      // Find all parallax layers
      //--------------------------------------------------
      // Async workaround: children might not be ready during call
      setTimeout(function() {
        for (var i = 0; i < sym.children.length; i++) {
          var child = sym.children[i],
              id = AC(child).getId();
          var match = id.match(/^parallax(\d{0,4})/);
          if (match != null) {
            //console.log('parallax layer found: ', id, match[1]);
            layers.push({sym: child, initX: child.x, factor: match[1]});
          }
        }
      }, 100);

      //--------------------------------------------------
      // Update all parallax layers on stage mousemove
      //--------------------------------------------------
      var compAC = AC(sym).getComposition();
      compAC.stage.context.on('stagemousemove', AC.throttle( function(evt) {
        var offset = (evt.stageX - options.compWidth) / 2;
        for (var i = 0; i < layers.length; i++) {
          var layer = layers[i];
          createjs.Tween.get(layer.sym, {override: true}).to({x: layer.initX - (offset / layer.factor)}, options.speed, createjs.Ease.cubicOut);
        }
      }, options.throttle));

      // //--------------------------------------------------
      // // EXPERIMENTAL: Update all parallax layers on device tilt
      // //--------------------------------------------------
      // // @TODO: Implement feature check
      // //window.addEventListener('devicemotion', AC.throttle(function(event) {
      //   console.log('deviceorientation', arguments);
      //   var precision = 1;
      // 	//var accelerationX = event.accelerationIncludingGravity.x.toFixed(precision);
      // 	var accelerationY = event.accelerationIncludingGravity.y.toFixed(precision);
      // 	//var accelerationZ = event.accelerationIncludingGravity.z.toFixed(precision);
      //   // Force slower update rate
      //   options.speed = 2000;
      //
      //   var offset = accelerationY * 200;
      //   for (var i = 0; i < layers.length; i++) {
      //     var layer = layers[i];
      //     createjs.Tween.get(layer.sym, {override: true}).to({x: layer.initX - (offset / layer.factor)}, options.speed, createjs.Ease.cubicOut);
      //     //layer.sym.x = layer.initX + offset;
      //   }
      // }, 200));
      //--------------------------------------------------
      // EXPERIMENTAL: Update all parallax layers on device tilt
      //--------------------------------------------------
      // @TODO: Implement feature check
      if (AC.isMobile()) {
        window.addEventListener('deviceorientation', AC.throttle(function(evt) {
          var precision = 1;
          //var alpha = evt.alpha.toFixed(precision);
          var beta = evt.beta.toFixed(precision);
          //var gamma = evt.gamma.toFixed(precision);
          //console.log('deviceorientation', alpha + '  // ' + beta + '  // ' + gamma );

          // Force slower update rate
          options.speed = 2000;

          var offset = beta * 20;
          for (var i = 0; i < layers.length; i++) {
            var layer = layers[i];
            //createjs.Tween.get(layer.sym, {override: true}).to({x: layer.initX - (offset / layer.factor)}, options.speed, createjs.Ease.cubicOut);
            layer.sym.x = layer.initX + (offset / layer.factor);
          }
        }, 10));
      }
    }
  }
})(window.AC, window.AnimateCommons);
