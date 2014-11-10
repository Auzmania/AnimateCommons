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
         sym.$("runButton").bind("click", function() {
         	try {
         
         	new AdobeEdge.PropertyTween("transform", "translateY", sym.$("RoundRect2"), "0px", "200px");
         	return;
         
         
         		EC.addCSS(".test", {
         			"border": 				"10px dotted red !important",
         			"background-color": 	"lightblue !important",
         		});
         
         		//EC.Spotlight.setup();
         
         		var config = {
         			type: "image",
         			source: "http://www.gravatar.com/avatar/08cfcb3781a28f359562545978e8c73e.jpg?d=mm",
         			width: 900,
         			height: 500
         		};
         		EC.Spotlight.open(config);		
         
         
         	}
         	catch(err) {
         		console.error(err.toString());
         	}
         });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-17982006");