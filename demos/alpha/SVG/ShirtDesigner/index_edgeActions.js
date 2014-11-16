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
         // Enable SVG access
         EC.SVG.accessSVG(sym.$("character")).done(
         	function(svgDocument){
         
         		// add event listener
         		svgDocument.addEventListener("select", function(event) {
         
         			// Remember selected part
         			sym.setVariable("selectedPart", event.target);
         
         			// show the id of the selected part in the textfield
         			sym.$("selectedPartTxt").html( event.target.id );
         		});
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy3}", "click", function(sym, e) {
         // get selected part of the svg 
         var selectedPart = sym.getVariable("selectedPart");
         
         // set the color of the selected part
         $(selectedPart).css("fill", $(e.currentTarget).css("background-color"));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy2}", "click", function(sym, e) {
         // get selected part of the svg 
         var selectedPart = sym.getVariable("selectedPart");
         
         // set the color of the selected part
         $(selectedPart).css("fill", $(e.currentTarget).css("background-color"));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy}", "click", function(sym, e) {
         // get selected part of the svg 
         var selectedPart = sym.getVariable("selectedPart");
         
         // set the color of the selected part
         $(selectedPart).css("fill", $(e.currentTarget).css("background-color"));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse}", "click", function(sym, e) {
         // get selected part of the svg 
         var selectedPart = sym.getVariable("selectedPart");
         
         // set the color of the selected part
         $(selectedPart).css("fill", $(e.currentTarget).css("background-color"));

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'ABOUT'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         /**
          * Official Edge Commons Example
          * ---------------------------
          * Don't care about the following code snippet.
          * This symbol ("ABOUT") is just displaying the about overlay and it's not part of the example.
          * ---------------------------
          * This example was created by the EdgeDocks Team (MIT licensed)
          */
          
         sym.$('overlay').appendTo( sym.getComposition().getStage().getSymbolElement() );
         sym.$('overlay').css( { 'z-index':'99' } );
         
         sym.setVariable('isPlayingForward', true);
         
         sym.$('expand_btn').click( function(){
         	sym.getVariable('isPlayingForward') ? sym.play() : sym.playReverse();
         	sym.setVariable('isPlayingForward', !sym.getVariable('isPlayingForward'));
         });

      });
      //Edge binding end

   })("ABOUT");
   //Edge symbol end:'ABOUT'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-13181186");