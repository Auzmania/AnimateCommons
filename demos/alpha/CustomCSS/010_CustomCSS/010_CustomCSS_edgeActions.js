/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         //yepnope("http://cdn.edgecommons.org/an/1.4.0/css/style.css");
         yepnope("http://localhost/Dropbox/Aktiv/Intern/EdgeDocks/Products/EdgeCommons/Codebase/sprint/an/2.0.2/css/style.css");
         
         sym.$("runButton").bind("click", function() {
         
         
         
         
         	//new AdobeEdge.PropertyTween("transform", "translateY", sym.$("RoundRect2"), "0px", "200px");
         	//return;
         
         /*
         		EC.addCSS(".test", {
         			"border": 				"10px dotted red !important",
         			"background-color": 	"lightblue !important",
         		});
         */
         
         		//EC.Spotlight.setup();
         
         
         		var config = {
         			type: "image",
         			source: "http://www.blodpudding.com/Bilder/Dave_Ad/Dave_005.jpg",
         			//source: "http://www.edgedocks.com/sites/default/files/_egd_spotlight_img.jpg",
         			width: 500,
         			height: 350
         		};
         		EC.Spotlight.open(config);
         
         	try {
         	}
         	catch(err) {
         		console.error(err.toString());
         	}
         });
         
         
         //https://code.jquery.com/jquery-2.1.1.min.js
         //http://localhost/Go/EdgeCommons/Codebase/sprint/an/2.0.2/js/max/EdgeCommons.js

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-17982006");