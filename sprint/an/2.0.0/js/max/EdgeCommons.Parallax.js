// EdgeCommons for Edge Animate v2.0.0 +++ Visit edgecommons.org for documentation, updates and examples +++ Copyright (c) 2015 by Simon Widjaja +++ Distributed under the terms of the MIT license (http://www.opensource.org/licenses/mit-license.html) +++ This notice shall be included in all copies or substantial portions of the Software.

/**
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
   * Setup Parallax Scrolling 
   * Setup simple Parallax Scrolling for a specific composition.<br/>
   * Known issues:<br/>
   * + this simple Parallax Scrolling does not work on mobile devices 
   * (Check out UBR.Parallax for a more advanced Parallax Scrolling that even performs great on mobile devices (TODO: Add link))<br/>
   * @alias EC.setup
   * @memberof Parallax
   * @example Setup Parallax Scrolling
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

})(EdgeCommons);