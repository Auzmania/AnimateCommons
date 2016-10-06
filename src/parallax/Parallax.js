////////////////////////////////////////////////////
// Parallax
////////////////////////////////////////////////////


(function (AC, AnimateCommons) {

  /**
   * Parallax
   * @namespace Parallax
   */
  AC.Parallax = {
    /**
     * Setup Parallax
     * 
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
