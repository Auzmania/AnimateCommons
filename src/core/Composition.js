////////////////////////////////////////////////////
// Composition VO
////////////////////////////////////////////////////
(function (AC, AnimateCommons) {

  /**
   * Composition
   *
   * Main Composition object
   * @module Composition
   */
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
