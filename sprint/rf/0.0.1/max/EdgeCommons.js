/**

 * EdgeCommons
 * Dirty little Helpers for Adobe Edge Reflow
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
TODO: DESCRIPTION FOR MASTER

@module EdgeCommons
**/
(function (window, $) {
    //------------------------------------
    // Constructor
    //------------------------------------
    var EdgeCommons = function () {
    };

    //------------------------------------
    // Public
    //------------------------------------
    EdgeCommons.VERSION = "0.0.1";
    EdgeCommons.$ = $;
    EdgeCommons.Rf = {};

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

})(window, jQuery);
;/**
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
 * Module: Experimental
 */

/**
TODO: DESCRIPTION FOR EXPERIMENTAL

@module EdgeCommons
@submodule Experimental
@main EdgeCommons
**/
(function (EC) {
    //------------------------------------
    // Constructor
    //------------------------------------
    var C = EC.Rf;

    //------------------------------------
    // Public
    //------------------------------------
    C.Experimental = {}; 
    C.Experimental.VERSION = "0.0.2";
    
    //------------------------------------
    // Private
    //------------------------------------
    // jQuery
    var $ = EC.$;
    // Logger
    var LOG_GROUP = "EdgeCommons | Experimental";

    //------------------------------------
    // Methods
    //------------------------------------
   



    //-------------------------------------------    
    // Link    
    //-------------------------------------------  
    /**
     * args
     *  element: id of the element (e.g. "ButtonSession")
     *  url: target url (e.g. "http://www.google.de" or "#AnchorElement")
     */
    C.addLink = function(args) {
      var element$ = $("#"+args.element),
          url = args.url,
          isAnchor = (url.indexOf("#") == 0);
      element$.click(function() {
        if (isAnchor) {
          $('html, body').animate({ scrollTop: $(url).offset().top }, 1000);
        }
        else {
          window.open(url, "_self");
        }
      }).css({"cursor": "pointer"})
    };    
        


    //-------------------------------------------    
    // Web Components    
    //-------------------------------------------  
    /**
     * args
     *  element: id of the element (e.g. "ButtonSession")
     *  html: HTML code (e.g. iframe for google map, youtube etc.)
     *  fit: flag to fit content (true or false)
     */
    C.addComponent = function(args) {
      var element$ = $("#"+args.element),
          html = args.html,
          fit = args.fit;
      if (fit) {
        html = html.replace(/width="\d+"/g, ' width="100%" ');
        html = html.replace(/height="\d+"/g, ' height="100%" ');
      }
      element$.html(html);
    };

  
    //-------------------------------------------    
    // Video
    //-------------------------------------------  
    /**
     * args
     *  element: id of the element (e.g. "ButtonSession")
     *  type: youtube (more to come)
     *  source: youtube id (e.g. "Jaq5OEp4-cE")
     *  fit: flag to fit content (true or false)
     */
    C.addVideo = function(args) {
      var element$ = $("#"+args.element),
          type = args.html,
          source = args.source,
          fit = args.fit,
          autoPlay = args.autoPlay;
      element$.html('<iframe width="100%" height="100%" '
        +'src="http://www.youtube.com/embed/'+source+'?autoplay='+((autoPlay)?"1":"0")+'" '
        +'frameborder="0" allowfullscreen></iframe>');
    };    
        
    //------------------------------------
    // Init
    //------------------------------------
    //Log.debug("", LOG_GROUP);

})(EdgeCommons);