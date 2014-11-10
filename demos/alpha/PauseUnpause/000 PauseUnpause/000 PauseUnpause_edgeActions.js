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
         sym.$("btnPause").bind("click", function(evt) {
         	//sym.stopAll();
         	EC.pause(sym);
         	
         });
         sym.$("btnUnpause").bind("click", function(evt) {
         	//sym.playAll(); // Animate API not really useful (ALL symbols are started, no matter if they were playing or pausing before)
         	EC.unpause(sym);
         });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'MySymbol1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${pauseBtn}", "click", function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${playBtn}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${playReverseBtn}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

   })("MySymbol1");
   //Edge symbol end:'MySymbol1'

   //=========================================================
   
   //Edge symbol: 'AnotherSymbol'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${pauseBtnCopy2}", "click", function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${playBtnCopy3}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${playReverseBtnCopy2}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

   })("AnotherSymbol");
   //Edge symbol end:'AnotherSymbol'

   //=========================================================
   
   //Edge symbol: 'SubSymbol'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${pauseBtnCopy}", "click", function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${playBtnCopy2}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${playReverseBtnCopy}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.playReverse("start");

      });
      //Edge binding end

   })("SubSymbol");
   //Edge symbol end:'SubSymbol'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-38246524");