////////////////////////////////////////////////////
// Flexible Layout
////////////////////////////////////////////////////
(function (AC, AnimateCommons) {

  /**
   * Flexible Layout
   * @namespace FlexibleLayout
   */
  AC.FlexibleLayout = {
    /**
     * Setup a flexible Layout
     * Call this function from Stage to setup a flexible layout with the following options:
     * + vertically and/or horizontally center
     * + max width and/or height
     * @param  {AC} sym Animate Sybmbol
     * @param  {Object} options
     * @param  {Number} options.maxWidth Max content width in px. Leave blank or use null for not limitation (default: null)
     * @param  {Number} options.maxHeight Max content height in px. Leave blank or use null for not limitation (default: null)
     * @param  {Number} options.originX Positioning x origin in percent (default: 50)
     * @param  {Number} options.originY Positioning y origin in percent (default: 50)
     */
    setup: function(sym, options) {

      //--------------------------------------------------
      // Options and Defaults
      //--------------------------------------------------
      options = AC.applyDefaults(options, {
        lib: window.lib,
        maxWidth: null,
        maxHeight: null,
        originX: 50, // percent
        originY: 50 // percent
      });

      //--------------------------------------------------
      // Prepare
      //--------------------------------------------------
      var symAC = AC( AC(sym).getStage().context.children[0] );
      var canvas = symAC.getCanvas();
      var dpr = AC.getDevicePixelRatio();
      var initial = {
        compW: options.lib.properties.width,
        compH: options.lib.properties.height,
      };

      //--------------------------------------------------
      // Recalculate layout
      //--------------------------------------------------
      var calcLayout = function() {
        //--------------------------------------------------
        // Calc new composition dimensions and scaleFactor
        //--------------------------------------------------
        symAC.getCanvas().parentElement.style.width = "100%";
        // symAC.getCanvas().parentElement.style.height = "200px";
        var newCompW = parseInt(window.getComputedStyle(symAC.getCanvas().parentElement.parentElement).width);
        var newCompH = parseInt(window.getComputedStyle(symAC.getCanvas().parentElement.parentElement).height);
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
        // Set content scale factor to smaller value (w vs h)
        var contentScaleFactor = Math.min(
          (options.maxWidth && initial.compW * scaleFactor > options.maxWidth) ? options.maxWidth / initial.compW : scaleFactor,
          (options.maxHeight && initial.compH * scaleFactor > options.maxHeight) ? options.maxHeight / initial.compH : scaleFactor
        );
        // Scale content
        symAC.context.scaleX = symAC.context.scaleY = contentScaleFactor;
        //console.log('contentScaleFactor', contentScaleFactor);

        // Apply origin
        symAC.context.x = Math.round( (0 - ( (initial.compW * contentScaleFactor) - newCompW ) ) * (options.originX/100) );
        symAC.context.y = Math.round( (0 - ( (initial.compH * contentScaleFactor) - newCompH ) ) * (options.originY/100) );
      }

      //--------------------------------------------------
      // Init
      //--------------------------------------------------
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
