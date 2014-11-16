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
         
         EC.autoplayOnVisibility( sym.getSymbol("MySymbol") );
         EC.autoplayOnVisibility( sym.getSymbol("AnotherSymbol") );

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'MySymbol'
   (function(symbolName) {   
   
   })("MySymbol");
   //Edge symbol end:'MySymbol'

   //=========================================================
   
   //Edge symbol: 'MySymbol_1'
   (function(symbolName) {   
   
   })("AnotherSymbol");
   //Edge symbol end:'AnotherSymbol'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-257088820");