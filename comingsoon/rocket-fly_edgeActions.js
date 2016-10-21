/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function ($, Edge, compId) {
    var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes
    var comp;
    //Edge symbol: 'stage'
    (function (symbolName) {
        AdobeEdge.bootstrapCallback(function (compId) {
            comp = AdobeEdge.getComposition(compId).getStage();
        });
        function vc_stop() {
            comp.stop();
        }
        function vc_play() {
            comp.play();
        }
        document.getElementById("viewDemo").addEventListener("click", function () {
            vc_play();
        });
        Symbol.bindElementAction(compId, symbolName, "${Rocket}", "click", function (sym, e) {
            // insert code for mouse click here

            sym.play();


        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {

            sym.stop();


        });
        //Edge binding end

    })("stage");
    //Edge symbol end:'stage'

    //=========================================================

    //Edge symbol: 'Symbol_1'
    (function (symbolName) {

    })("Symbol_1");
    //Edge symbol end:'Symbol_1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-53915579");