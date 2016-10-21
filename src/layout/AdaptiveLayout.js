////////////////////////////////////////////////////
// Adaptive Layout
////////////////////////////////////////////////////
(function (AC, AnimateCommons) {

  /**
   * AdaptiveLayout
   * @namespace AdaptiveLayout
   */
  AC.AdaptiveLayout = {
    /**
     * Setup a flexible Layout
     *
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
      var dpr = AC.getDevicePixelRatio();
      var initial = {
        compW: options.lib.properties.width,
        compH: options.lib.properties.height,
      };
      var currentBreakpoint;

      /**
       * Find available layouts in library and parse layout/breakpoint information
       * @private
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
        //#BUGFIX:AN2017-WRAPPER
        var parent = symAC.getCanvas().parentElement;
        if (symAC.getCanvas().parentElement.id == 'animation_container') {
          parent = parent.parentElement;
        }
        //#BUGFIX:AN2017-WRAPPEREND

        var newCompW = parseInt(window.getComputedStyle(parent).width);
        var newCompH = parseInt(window.getComputedStyle(parent).height);

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

          var layoutSym = symAC.context.addChild( new newBreakpoint.sym() );
          // Center layout sym
          //layoutSym.x = initial.compW/2 - layoutSym.nominalBounds.width/2;
          layoutSym.x = initial.compW/2 - newBreakpoint.minW/2;

          // Call activevateLayout (we have to wait for first frame being executed, since we don't have creationComplete yet)
          setTimeout(function() {
            (typeof (layoutSym.activevateLayout) === "function") && layoutSym.activevateLayout();
          }, 100);
        }

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
