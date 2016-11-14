(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9E4F1").s().p("AgRBUQADAAADgDQADgDAAgEIAAiTQAAgEgDgDQgDgDgDAAIAjAAIAACng");
	this.shape.setTransform(-15.6,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414042").s().p("AgWAYQgLgKABgOQgBgNALgKQAJgKANAAQAOAAAJAKQALAKgBANQABAOgLAKQgJAKgOAAQgNAAgJgKg");
	this.shape_1.setTransform(38.1,21.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6D6E71").s().p("AgnAoQgQgRAAgXQAAgXAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAXQAAAXgQARQgRAQgXAAQgWAAgRgQg");
	this.shape_2.setTransform(38.1,21.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3B3A3B").s().p("AgkBGQAbgBASgVQATgUAAgcQAAgbgTgUQgSgVgbgCIAEAAQAdAAAUAVQAUAVAAAcQAAAegUAUQgUAVgdAAg");
	this.shape_3.setTransform(-33.9,21.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3B3A3B").s().p("AgkBGQAbgBASgVQAUgUAAgcQAAgbgUgUQgSgVgbgCIAEAAQAdAAAUAVQAUAVAAAcQAAAdgUAVQgUAVgdAAg");
	this.shape_4.setTransform(41.4,21.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#414042").s().p("AgxAyQgUgVAAgdQAAgcAUgVQAVgVAcAAQAdAAAVAVQAUAVAAAcQAAAdgUAVQgVAVgdAAQgcAAgVgVg");
	this.shape_5.setTransform(38.1,21.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#414042").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_6.setTransform(-37.2,21.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6D6E71").s().p("AgnAoQgQgRAAgXQAAgXAQgQQAQgQAXAAQAXAAARAQQAQAQAAAXQAAAXgQARQgRAQgXAAQgWAAgRgQg");
	this.shape_7.setTransform(-37.2,21.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#414042").s().p("AgxAyQgUgVAAgdQAAgcAUgVQAVgVAcAAQAdAAAVAVQAUAVAAAcQAAAegUAUQgVAVgdAAQgcAAgVgVg");
	this.shape_8.setTransform(-37.2,21.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F3BA47").s().p("AgoAWIAAgrIA7AAQAJAAAGAHQAHAGgBAIQABAJgHAGQgGAHgJAAg");
	this.shape_9.setTransform(-47.1,5.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#394F59").s().p("AgfAIQgIABAAgJQAAgDACgCQADgDADAAIA/AAQADAAADADQACACAAADQAAAJgIgBg");
	this.shape_10.setTransform(-17.8,-4.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DAF1FC").s().p("AiABUIBhinICgAAIAACng");
	this.shape_11.setTransform(-26.7,-16);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#30444D").s().p("AgPAYIAAgvIAfAAIAAAvg");
	this.shape_12.setTransform(49.6,-2.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#30444D").s().p("AgPAYIAAgvIAfAAIAAAvg");
	this.shape_13.setTransform(49.6,4.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#30444D").s().p("AgPAZIAAgxIAfAAIAAAxg");
	this.shape_14.setTransform(49.6,10.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CDD5D9").s().p("AgPAJIAAgRIAfAAIAAARg");
	this.shape_15.setTransform(49.6,16.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#394F59").s().p("AjsAYIAAgvIHZAAIAAAvg");
	this.shape_16.setTransform(27.5,-2.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#394F59").s().p("AjBAYIAAgvIGDAAIAAAvg");
	this.shape_17.setTransform(31.8,4.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#394F59").s().p("AiBAZIAAgxIEDAAIAAAxg");
	this.shape_18.setTransform(38.1,10.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E1E9ED").s().p("An/AJIAAgRIP+AAIAAARg");
	this.shape_19.setTransform(0,16.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4D6673").s().p("AgcD7QAQgBAHgQIADgQIAAm5QABgGgCgHQgFgNgNgBIAeAAQAPAAAEAOQACAHgBAGIAAG5IgDAQQgHAQgRABg");
	this.shape_20.setTransform(48.2,-3.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#587482").s().p("AnqD7QgHgBgGgGQgIgJAAgRIAAi6QAAgKAIgLIAIgJIArgiICCjKQACgEAFgEQAKgHALgBIMRAAQAPAAAEAOQACAHgBAGIAAG5IgDAQQgHAQgRABg");
	this.shape_21.setTransform(0,-3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.1,-28.6,102.4,57.3);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA7D3E").s().p("AgEAUQgJgCgEgHQgEgIACgHQACgJAHgEQAIgFAHADQAIACAFAHQAEAIgCAHQgCAIgHAFQgFADgGAAIgEgBg");
	this.shape.setTransform(0.2,8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED8E40").s().p("AgGAaQgKgCgGgKQgFgKACgKQADgLAJgFQAKgGAJADQALADAGAJQAFAKgCAKQgDAKgJAGQgHAEgHAAIgGgBg");
	this.shape_1.setTransform(0.2,8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EE9A41").s().p("AgHAgQgOgDgHgLQgHgNAEgMQADgOAMgHQAMgHAMADQAOAEAHAMQAHAMgEANQgDANgMAHQgIAFgIAAIgIgCg");
	this.shape_2.setTransform(0.2,8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DDA73E").s().p("AgLARIALglIAMANIgIAcg");
	this.shape_3.setTransform(0.4,5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D98D3B").s().p("AAFAdIgUgdIAKgdIAVAWIgLAlg");
	this.shape_4.setTransform(-1.3,4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3B744").s().p("AgzCwIBlliQADADgBAEIhYFeg");
	this.shape_5.setTransform(4.5,-10.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EE9A41").s().p("AgpCwIgVgdIBslCQACgHAHACIABABQAEABABACQACADgBADIhXFfg");
	this.shape_6.setTransform(3.4,-10.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DDA73E").s().p("AgLARIALglIAMANIgIAcg");
	this.shape_7.setTransform(-3.2,8.7,1,1,-120);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D98D3B").s().p("AAFAdIgUgdIAKgdIAVAWIgLAlg");
	this.shape_8.setTransform(-3.5,10.8,1,1,-120);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F3B744").s().p("AgzCwIBlliQADADgBAEIhYFeg");
	this.shape_9.setTransform(-19,13.2,1,1,-120);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EE9A41").s().p("AgpCwIgVgdIBslCQACgHAHACIABABQAEABABACQACADgBADIhXFfg");
	this.shape_10.setTransform(-18.6,14.1,1,1,-120);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DDA73E").s().p("AgLARIALglIAMANIgIAcg");
	this.shape_11.setTransform(2.2,9.7,1,1,120);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D98D3B").s().p("AAFAdIgUgdIAKgdIAVAWIgLAlg");
	this.shape_12.setTransform(4.1,8.8,1,1,120);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F3B744").s().p("AgzCwIBlliQADADgBAEIhYFeg");
	this.shape_13.setTransform(13.9,21.1,1,1,120);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EE9A41").s().p("AgpCwIgVgdIBslCQACgHAHACIABABQAEABABACQACADgBADIhXFfg");
	this.shape_14.setTransform(14.6,20.3,1,1,120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-28.6,64.7,63.1);


(lib.Scenery = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah+APQgOAAAAgPQAAgOAOAAID8AAQAPAAAAAOQAAAPgPAAg");
	this.shape.setTransform(1849.9,377.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah+APQgOAAAAgPQAAgOAOAAID9AAQAOAAAAAOQAAAPgOAAg");
	this.shape_1.setTransform(1771.7,377.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah+APQgOAAAAgPQAAgOAOAAID8AAQAPAAAAAOQAAAPgPAAg");
	this.shape_2.setTransform(1693.5,377.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah9APQgPAAAAgPQAAgOAPAAID8AAQAOAAAAAOQAAAPgOAAg");
	this.shape_3.setTransform(1615.4,377.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah9APQgPAAAAgPQAAgOAPAAID7AAQAPAAAAAOQAAAPgPAAg");
	this.shape_4.setTransform(1537.2,377.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah+APQgOAAAAgPQAAgOAOAAID9AAQAOAAAAAOQAAAPgOAAg");
	this.shape_5.setTransform(1459,377.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah9APQgPAAAAgPQAAgOAPAAID8AAQAOAAAAAOQAAAPgOAAg");
	this.shape_6.setTransform(1381.2,377.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah+APQgOAAAAgPQAAgOAOAAID8AAQAPAAAAAOQAAAPgPAAg");
	this.shape_7.setTransform(1303,377.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah+APQgOAAAAgPQAAgOAOAAID9AAQAOAAAAAOQAAAPgOAAg");
	this.shape_8.setTransform(1224.9,377.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah+APQgOAAAAgPQAAgOAOAAID8AAQAPAAAAAOQAAAPgPAAg");
	this.shape_9.setTransform(1146.7,377.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah9APQgPAAAAgPQAAgOAPAAID8AAQAOAAAAAOQAAAPgOAAg");
	this.shape_10.setTransform(1068.5,377.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah+APQgOAAAAgPQAAgOAOAAID8AAQAPAAAAAOQAAAPgPAAg");
	this.shape_11.setTransform(990.4,377.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah+APQgOAAAAgPQAAgOAOAAID9AAQAOAAAAAOQAAAPgOAAg");
	this.shape_12.setTransform(912.2,377.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ah+APQgOAAAAgPQAAgOAOAAID8AAQAPAAAAAOQAAAPgPAAg");
	this.shape_13.setTransform(834,377.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ah9APQgPAAAAgPQAAgOAPAAID8AAQAOAAAAAOQAAAPgOAAg");
	this.shape_14.setTransform(752.5,377.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ah+APQgOAAAAgPQAAgOAOAAID8AAQAPAAAAAOQAAAPgPAAg");
	this.shape_15.setTransform(674.4,377.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ah+APQgOAAAAgPQAAgOAOAAID8AAQAPAAAAAOQAAAPgPAAg");
	this.shape_16.setTransform(596.2,377.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ah9APQgPAAAAgPQAAgOAPAAID7AAQAPAAAAAOQAAAPgPAAg");
	this.shape_17.setTransform(518,377.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ah+APQgOAAAAgPQAAgOAOAAID9AAQAOAAAAAOQAAAPgOAAg");
	this.shape_18.setTransform(439.9,377.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ah9APQgPAAAAgPQAAgOAPAAID8AAQAOAAAAAOQAAAPgOAAg");
	this.shape_19.setTransform(361.7,377.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ah+APQgOAAAAgPQAAgOAOAAID9AAQAOAAAAAOQAAAPgOAAg");
	this.shape_20.setTransform(283.5,377.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ah+APQgOAAAAgPQAAgOAOAAID8AAQAPAAAAAOQAAAPgPAAg");
	this.shape_21.setTransform(205.4,377.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ah+APQgOAAAAgPQAAgOAOAAID8AAQAPAAAAAOQAAAPgPAAg");
	this.shape_22.setTransform(127.2,377.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ah9APQgPAAAAgPQAAgOAPAAID7AAQAPAAAAAOQAAAPgPAAg");
	this.shape_23.setTransform(49,377.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C4D740").s().p("EiV8ABfIAAi8MEr5AAAIAAC8g");
	this.shape_24.setTransform(960.3,328.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D7D8DB").s().p("EiV8AIaIAAwyMEr5AAAIAAQyg");
	this.shape_25.setTransform(960.3,382.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#416328").s().p("AgRAlIgMAIIgLgJIgSAJIA6hmIA7BmIgWgOIgHAQIgUgMIgJAXg");
	this.shape_26.setTransform(1361.8,253.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#31501C").s().p("Ag1AfIAwhSIA7Bng");
	this.shape_27.setTransform(1362.4,255.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#416328").s().p("AgXAxIgRAKIgOgLIgYAMIBOiIIBPCIIgegSIgKAUIgagQIgLAfg");
	this.shape_28.setTransform(1361.8,257.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#31501C").s().p("AhHAiIA9hqIBSCRg");
	this.shape_29.setTransform(1362.9,261);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#416328").s().p("AghBEIgWAPIgUgQIgjASIBujBIBvDBIgqgaIgOAcIgkgWIgRAsg");
	this.shape_30.setTransform(1361.8,264.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#31501C").s().p("AhpAjIBUiRIB/Ddg");
	this.shape_31.setTransform(1364,269.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#416328").s().p("AgyBnIghAVIgegYIg0AbIClkgICmEgIg/gmIgUApIg2ghIgaBBg");
	this.shape_32.setTransform(1361.8,274.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#31501C").s().p("AiPA7IB3jOICoEmg");
	this.shape_33.setTransform(1364.3,281.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#416328").s().p("AhDCIIgtAdIgnggIhEAjIDbl+IDcF+IhTgyIgbA3IhIgsIgiBWg");
	this.shape_34.setTransform(1361.8,288.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#664224").s().p("AgTBkQAZgCABgGIAAi/IANAAIAAC/QAAAIggAAg");
	this.shape_35.setTransform(1363.1,308.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#744C2B").s().p("AgWBiQgKgDAAgDIAAi/IBBAAIAAC/QAAAIghAAQgNAAgJgCg");
	this.shape_36.setTransform(1361.8,308.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#416328").s().p("AgPAhIgLAHIgKgIIgQAJIA0hcIA1BcIgUgMIgGANIgSgLIgIAVg");
	this.shape_37.setTransform(1301.2,259.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#31501C").s().p("AgvAcIArhKIA0Bdg");
	this.shape_38.setTransform(1301.8,261.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#416328").s().p("AgVAsIgOAJIgNgLIgWAMIBGh6IBHB6IgbgQIgJASIgXgPIgLAcg");
	this.shape_39.setTransform(1301.2,264.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#31501C").s().p("AhAAeIA3heIBKCBg");
	this.shape_40.setTransform(1302.2,266.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#416328").s().p("AgeA9IgUAOIgSgPIgeAQIBiisIBjCsIglgWIgMAYIghgUIgPAng");
	this.shape_41.setTransform(1301.2,270.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#31501C").s().p("AheAgIBMiDIBxDHg");
	this.shape_42.setTransform(1303.2,274.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#416328").s().p("AgtBcIgeAUIgbgWIguAYICUkDICVEDIg5giIgSAlIgwgeIgXA7g");
	this.shape_43.setTransform(1301.2,279.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#31501C").s().p("AiBA1IBri4ICXEHg");
	this.shape_44.setTransform(1303.5,285.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#416328").s().p("Ag8B6IgoAaIgjgdIg9AgIDElXIDFFXIhKgtIgZAxIhAgoIgeBOg");
	this.shape_45.setTransform(1301.2,291.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#664224").s().p("AgRBaQAXgBgBgGIAAisIANAAIAACsQAAACgIADQgJACgMAAg");
	this.shape_46.setTransform(1302.4,309.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#744C2B").s().p("AgUBYQgJgDAAgCIAAisIA7AAIAACsQAAACgJADQgIACgNAAQgLAAgJgCg");
	this.shape_47.setTransform(1301.2,309.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#416328").s().p("AgPAhIgLAHIgKgIIgQAJIA0hcIA1BcIgUgMIgGANIgSgLIgIAVg");
	this.shape_48.setTransform(1213.7,259.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#31501C").s().p("AgvAcIArhKIA0Bdg");
	this.shape_49.setTransform(1214.3,261.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#416328").s().p("AgVAsIgOAJIgNgLIgWAMIBGh6IBHB6IgbgQIgJASIgXgPIgLAcg");
	this.shape_50.setTransform(1213.7,264.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#31501C").s().p("AhAAeIA3heIBKCBg");
	this.shape_51.setTransform(1214.7,266.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#416328").s().p("AgeA9IgUAOIgSgPIgeAQIBiisIBjCsIglgWIgMAYIghgUIgPAng");
	this.shape_52.setTransform(1213.7,270.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#31501C").s().p("AheAgIBMiDIBxDHg");
	this.shape_53.setTransform(1215.7,274.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#416328").s().p("AgtBcIgeAUIgbgWIguAYICUkDICVEDIg5giIgSAlIgwgeIgXA7g");
	this.shape_54.setTransform(1213.7,279.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#31501C").s().p("AiBA1IBri4ICXEHg");
	this.shape_55.setTransform(1216,285.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#416328").s().p("Ag8B6IgoAaIgjgdIg9AgIDElXIDFFXIhKgtIgZAxIhAgoIgeBOg");
	this.shape_56.setTransform(1213.7,291.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#664224").s().p("AgRBaQAXgBgBgGIAAisIANAAIAACsQAAACgJADQgIACgMAAg");
	this.shape_57.setTransform(1214.9,309.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#744C2B").s().p("AgUBYQgJgDAAgCIAAisIA7AAIAACsQAAACgJADQgIACgNAAQgLAAgJgCg");
	this.shape_58.setTransform(1213.7,309.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#416328").s().p("AgNAcIgJAGIgIgHIgOAHIAshNIAtBNIgRgKIgGALIgOgJIgHASg");
	this.shape_59.setTransform(1242.8,270.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#31501C").s().p("AgoAYIAkg+IAtBNg");
	this.shape_60.setTransform(1243.2,272.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#416328").s().p("AgRAlIgNAIIgLgJIgSAKIA7hoIA8BoIgXgOIgHAPIgUgMIgJAYg");
	this.shape_61.setTransform(1242.8,274.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#31501C").s().p("Ag2AZIAvhPIA+Btg");
	this.shape_62.setTransform(1243.6,276.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#416328").s().p("AgZA0IgRALIgPgMIgaANIBTiRIBUCRIgggTIgKAVIgbgRIgNAhg");
	this.shape_63.setTransform(1242.7,279.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#31501C").s().p("AhQAbIBAhuIBgCog");
	this.shape_64.setTransform(1244.4,283.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#416328").s().p("AgmBOIgZAQIgXgSIgnAUIB9jaIB+DaIgwgcIgPAfIgqgZIgTAxg");
	this.shape_65.setTransform(1242.8,287.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#31501C").s().p("AhsAtIBaicIB/Dfg");
	this.shape_66.setTransform(1244.7,292.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#416328").s().p("AgzBnIgiAWIgegYIgzAaICmkiICnEiIhAgmIgUAqIg3ghIgZBCg");
	this.shape_67.setTransform(1242.8,297.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#664224").s().p("AgOBMQATgBAAgFIAAiRIAKAAIAACRQAAAGgYAAg");
	this.shape_68.setTransform(1243.7,312.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#744C2B").s().p("AgYBGIAAiRIAxAAIAACRQAAAGgZAAQgYAAAAgGg");
	this.shape_69.setTransform(1242.7,312.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#416328").s().p("AgRAlIgMAIIgLgJIgSAJIA6hmIA7BmIgWgOIgIAQIgTgMIgJAXg");
	this.shape_70.setTransform(1067.6,253.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#31501C").s().p("Ag1AfIAwhSIA7Bng");
	this.shape_71.setTransform(1068.2,255.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#416328").s().p("AgXAxIgQAKIgOgLIgZAMIBOiIIBPCIIgegSIgKAUIgZgQIgMAfg");
	this.shape_72.setTransform(1067.6,257.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#31501C").s().p("AhHAiIA9hqIBSCRg");
	this.shape_73.setTransform(1068.7,261);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#416328").s().p("AghBEIgXAPIgUgQIgiASIBujBIBvDBIgqgaIgOAcIgkgWIgRAsg");
	this.shape_74.setTransform(1067.6,264.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#31501C").s().p("AhpAjIBUiRIB/Ddg");
	this.shape_75.setTransform(1069.8,269.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#416328").s().p("AgyBnIgiAVIgegYIgzAbIClkgICmEgIg/gmIgUApIg3ghIgZBBg");
	this.shape_76.setTransform(1067.6,274.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#31501C").s().p("AiPA7IB2jOICpEmg");
	this.shape_77.setTransform(1070.2,281.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#416328").s().p("AhDCIIgsAdIgoggIhEAjIDbl+IDcF+IhUgyIgaA3IhIgsIgiBWg");
	this.shape_78.setTransform(1067.6,288.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#664224").s().p("AgTBkQAZgCAAgGIAAi/IAOAAIAAC/QAAAIggAAg");
	this.shape_79.setTransform(1068.9,308.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#744C2B").s().p("AgWBiQgKgDAAgDIAAi/IBBAAIAAC/QAAAIghAAQgNAAgJgCg");
	this.shape_80.setTransform(1067.6,308.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#416328").s().p("AgQAhIgKAHIgJgIIgRAJIA0hcIA1BcIgUgMIgGANIgSgLIgIAVg");
	this.shape_81.setTransform(1007.1,259.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#31501C").s().p("AgvAcIAqhKIA1Bdg");
	this.shape_82.setTransform(1007.6,261.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#416328").s().p("AgVAsIgOAJIgNgLIgWAMIBGh6IBHB6IgbgQIgIASIgYgPIgLAcg");
	this.shape_83.setTransform(1007.1,264.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#31501C").s().p("AhAAeIA3heIBKCBg");
	this.shape_84.setTransform(1008,266.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#416328").s().p("AgdA9IgVAOIgSgPIgeAQIBiisIBkCsIgmgWIgNAYIgggUIgPAng");
	this.shape_85.setTransform(1007.1,270.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#31501C").s().p("AheAgIBLiDIByDHg");
	this.shape_86.setTransform(1009,274.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#416328").s().p("AgtBcIgeAUIgagWIgvAYICUkDICVEDIg5giIgSAlIgwgeIgXA7g");
	this.shape_87.setTransform(1007.1,279.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#31501C").s().p("AiAA1IBqi4ICXEHg");
	this.shape_88.setTransform(1009.3,285.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#416328").s().p("Ag8B6IgnAaIgkgdIg+AgIDFlXIDGFXIhLgtIgYAxIhBgoIgfBOg");
	this.shape_89.setTransform(1007.1,291.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#664224").s().p("AgRBaQAWgBABgGIAAisIAMAAIAACsQAAACgJADQgJACgLAAg");
	this.shape_90.setTransform(1008.3,309.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#744C2B").s().p("AgUBYQgJgDAAgCIAAisIA7AAIAACsQAAACgJADQgJACgMAAQgLAAgJgCg");
	this.shape_91.setTransform(1007.1,309.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#416328").s().p("AgPAhIgLAHIgJgIIgRAJIA0hcIA1BcIgUgMIgGANIgSgLIgIAVg");
	this.shape_92.setTransform(919.6,259.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#31501C").s().p("AgvAcIAqhKIA1Bdg");
	this.shape_93.setTransform(920.1,261.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#416328").s().p("AgVAsIgOAJIgNgLIgWAMIBGh6IBHB6IgbgQIgIASIgYgPIgKAcg");
	this.shape_94.setTransform(919.6,264.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#31501C").s().p("AhAAeIA3heIBKCBg");
	this.shape_95.setTransform(920.5,266.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#416328").s().p("AgeA9IgUAOIgSgPIgeAQIBiisIBkCsIgmgWIgNAYIgggUIgPAng");
	this.shape_96.setTransform(919.6,270.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#31501C").s().p("AheAgIBLiDIByDHg");
	this.shape_97.setTransform(921.5,274.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#416328").s().p("AgtBcIgeAUIgbgWIguAYICUkDICVEDIg5giIgRAlIgxgeIgXA7g");
	this.shape_98.setTransform(919.6,279.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#31501C").s().p("AiAA1IBqi4ICXEHg");
	this.shape_99.setTransform(921.8,285.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#416328").s().p("Ag8B6IgnAaIgkgdIg9AgIDElXIDGFXIhMgtIgXAxIhBgoIgfBOg");
	this.shape_100.setTransform(919.6,291.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#664224").s().p("AgRBaQAWgBABgGIAAisIAMAAIAACsQAAACgJADQgJACgLAAg");
	this.shape_101.setTransform(920.8,309.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#744C2B").s().p("AgUBYQgJgDAAgCIAAisIA7AAIAACsQAAACgJADQgJACgMAAQgMAAgIgCg");
	this.shape_102.setTransform(919.6,309.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#416328").s().p("AgNAcIgJAGIgIgHIgOAHIAshNIAtBNIgRgKIgGALIgOgJIgHASg");
	this.shape_103.setTransform(948.6,270.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#31501C").s().p("AgoAYIAkg+IAtBNg");
	this.shape_104.setTransform(949,272.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#416328").s().p("AgRAlIgMAIIgMgJIgSAKIA7hoIA8BoIgXgOIgHAPIgUgMIgJAYg");
	this.shape_105.setTransform(948.6,274.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#31501C").s().p("Ag2AZIAuhPIA/Btg");
	this.shape_106.setTransform(949.4,276.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#416328").s().p("AgZA0IgRALIgPgMIgaANIBTiRIBUCRIgfgTIgLAVIgbgRIgOAhg");
	this.shape_107.setTransform(948.6,279.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#31501C").s().p("AhQAbIBAhuIBhCog");
	this.shape_108.setTransform(950.2,283.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#416328").s().p("AglBOIgaAQIgXgSIgnAUIB9jaIB+DaIgvgcIgQAfIgqgZIgTAxg");
	this.shape_109.setTransform(948.6,287.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#31501C").s().p("AhtAtIBaicICBDfg");
	this.shape_110.setTransform(950.5,292.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#416328").s().p("AgzBnIghAWIgegYIg0AaICmkiICnEiIg/gmIgVAqIg2ghIgaBCg");
	this.shape_111.setTransform(948.6,297.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#664224").s().p("AgPBMQAUgBAAgFIAAiRIALAAIAACRQgBAGgYAAg");
	this.shape_112.setTransform(949.6,312.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#744C2B").s().p("AgYBGIAAiRIAxAAIAACRQAAAGgZAAQgYAAAAgGg");
	this.shape_113.setTransform(948.6,312.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#416328").s().p("AgRAlIgMAIIgLgJIgSAJIA6hmIA7BmIgWgOIgIAQIgTgMIgJAXg");
	this.shape_114.setTransform(509.4,253.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#31501C").s().p("Ag1AfIAwhSIA7Bng");
	this.shape_115.setTransform(510,255.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#416328").s().p("AgXAxIgQAKIgOgLIgZAMIBOiIIBPCIIgegSIgKAUIgZgQIgNAfg");
	this.shape_116.setTransform(509.4,257.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#31501C").s().p("AhHAiIA9hqIBSCRg");
	this.shape_117.setTransform(510.5,261);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#416328").s().p("AghBEIgXAPIgUgQIgiASIBujBIBvDBIgqgaIgOAcIgkgWIgRAsg");
	this.shape_118.setTransform(509.4,264.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#31501C").s().p("AhpAjIBUiRIB/Ddg");
	this.shape_119.setTransform(511.6,269.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#416328").s().p("AgyBnIgiAVIgegYIgzAbIClkgICmEgIg/gmIgUApIg3ghIgZBBg");
	this.shape_120.setTransform(509.4,274.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#31501C").s().p("AiPA7IB2jOICpEmg");
	this.shape_121.setTransform(511.9,281.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#416328").s().p("AhDCIIgsAdIgoggIhEAjIDbl+IDcF+IhUgyIgaA3IhIgsIgiBWg");
	this.shape_122.setTransform(509.4,288.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#664224").s().p("AgTBkQAZgCAAgGIAAi/IAOAAIAAC/QAAAIggAAg");
	this.shape_123.setTransform(510.7,308.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#744C2B").s().p("AgWBiQgKgDAAgDIAAi/IBBAAIAAC/QAAAIghAAQgNAAgJgCg");
	this.shape_124.setTransform(509.4,308.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#416328").s().p("AgQAhIgKAHIgKgIIgQAJIA0hcIA1BcIgUgMIgHANIgRgLIgIAVg");
	this.shape_125.setTransform(448.8,259.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#31501C").s().p("AgvAcIArhKIA0Bdg");
	this.shape_126.setTransform(449.4,261.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#416328").s().p("AgVAsIgOAJIgNgLIgWAMIBGh6IBHB6IgbgQIgJASIgXgPIgLAcg");
	this.shape_127.setTransform(448.8,264.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#31501C").s().p("AhAAeIA3heIBJCBg");
	this.shape_128.setTransform(449.8,266.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#416328").s().p("AgdA9IgUAOIgSgPIggAQIBjisIBjCsIglgWIgMAYIghgUIgPAng");
	this.shape_129.setTransform(448.8,270.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#31501C").s().p("AheAgIBLiDIByDHg");
	this.shape_130.setTransform(450.8,274.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#416328").s().p("AgtBcIgeAUIgagWIgvAYICUkDICVEDIg5giIgSAlIgwgeIgXA7g");
	this.shape_131.setTransform(448.8,279.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#31501C").s().p("AiAA1IBqi4ICXEHg");
	this.shape_132.setTransform(451.1,285.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#416328").s().p("Ag8B6IgoAaIgjgdIg+AgIDFlXIDFFXIhKgtIgZAxIhAgoIgeBOg");
	this.shape_133.setTransform(448.8,291.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#664224").s().p("AgRBaQAXgBgBgGIAAisIANAAIAACsQAAACgJADQgJACgLAAg");
	this.shape_134.setTransform(450,309.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#744C2B").s().p("AgUBYQgJgDAAgCIAAisIA7AAIAACsQAAACgJADQgJACgMAAQgLAAgJgCg");
	this.shape_135.setTransform(448.8,309.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#365620").s().p("AgKAWIgHAFIgGgGIgLAGIAig9IAjA9IgNgIIgEAJIgMgIIgFAPg");
	this.shape_136.setTransform(703.7,280);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#2B4918").s().p("AgfASIAcgwIAjA9g");
	this.shape_137.setTransform(704,281.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#365620").s().p("AgOAdIgJAGIgJgGIgOAHIAuhRIAvBRIgSgLIgGAMIgPgJIgHASg");
	this.shape_138.setTransform(703.7,282.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#2B4918").s().p("AgqAUIAkg+IAxBVg");
	this.shape_139.setTransform(704.3,284.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#365620").s().p("AgTApIgOAIIgLgJIgUAKIBAhxIBBBxIgYgPIgIARIgWgOIgKAag");
	this.shape_140.setTransform(703.7,286.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#2B4918").s().p("Ag+AVIAyhWIBLCDg");
	this.shape_141.setTransform(705,289.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#365620").s().p("AgeA9IgTANIgSgPIgeAQIBhiqIBjCqIgmgWIgMAYIgggTIgPAmg");
	this.shape_142.setTransform(703.7,292.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#2B4918").s().p("AhVAjIBHh5IBkCtg");
	this.shape_143.setTransform(705.2,297);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#365620").s().p("AgnBRIgbARIgXgTIgpAUICCjiICCDiIgxgdIgQAgIgrgaIgUA0g");
	this.shape_144.setTransform(703.7,301);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#664224").s().p("AgMA7QAOAAAAgEIAAhxIALAAIAABxQAAAEgTAAg");
	this.shape_145.setTransform(704.4,312.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#744C2B").s().p("AgTA3IAAhxIAnAAIAABxQAAAEgUAAQgTAAAAgEg");
	this.shape_146.setTransform(703.7,312.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#416328").s().p("AgQAhIgKAHIgJgIIgRAJIA0hcIA1BcIgUgMIgGANIgSgLIgIAVg");
	this.shape_147.setTransform(361.3,259.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#31501C").s().p("AgvAcIAqhKIA1Bdg");
	this.shape_148.setTransform(361.9,261.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#416328").s().p("AgVAsIgOAJIgNgLIgWAMIBGh6IBHB6IgbgQIgIASIgYgPIgLAcg");
	this.shape_149.setTransform(361.3,264.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#31501C").s().p("Ag/AeIA2heIBJCBg");
	this.shape_150.setTransform(362.3,266.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#416328").s().p("AgdA9IgVAOIgSgPIgeAQIBiisIBjCsIglgWIgNAYIgggUIgPAng");
	this.shape_151.setTransform(361.3,270.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#31501C").s().p("AheAgIBLiDIByDHg");
	this.shape_152.setTransform(363.3,274.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#416328").s().p("AgtBcIgeAUIgagWIgvAYICUkDICVEDIg5giIgSAlIgwgeIgXA7g");
	this.shape_153.setTransform(361.3,279.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#31501C").s().p("AiAA1IBqi4ICXEHg");
	this.shape_154.setTransform(363.6,285.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#416328").s().p("Ag8B6IgnAaIgkgdIg+AgIDFlXIDGFXIhLgtIgYAxIhBgoIgfBOg");
	this.shape_155.setTransform(361.3,291.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#664224").s().p("AgRBaQAXgBAAgGIAAisIAMAAIAACsQAAACgJADQgJACgLAAg");
	this.shape_156.setTransform(362.5,309.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#744C2B").s().p("AgUBYQgJgDAAgCIAAisIA7AAIAACsQAAACgJADQgJACgMAAQgLAAgJgCg");
	this.shape_157.setTransform(361.3,309.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#416328").s().p("AgNAcIgJAFIgIgGIgOAHIAshNIAtBNIgRgKIgGALIgOgJIgHASg");
	this.shape_158.setTransform(773,269.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#31501C").s().p("AgoAYIAkg+IAtBOg");
	this.shape_159.setTransform(773.4,271.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#416328").s().p("AgRAlIgNAIIgLgJIgSAKIA7hoIA8BoIgXgOIgHAPIgUgMIgJAYg");
	this.shape_160.setTransform(773,273.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#31501C").s().p("Ag2AaIAvhQIA+Btg");
	this.shape_161.setTransform(773.8,275.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#416328").s().p("AgZA0IgRALIgPgMIgaAOIBTiTIBUCTIgggUIgKAVIgbgRIgNAig");
	this.shape_162.setTransform(772.9,278.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#31501C").s().p("AhQAbIBAhvIBgCpg");
	this.shape_163.setTransform(774.6,282.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#416328").s().p("AgmBOIgZARIgXgTIgnAVIB9jcIB+DcIgwgdIgPAfIgqgZIgTAyg");
	this.shape_164.setTransform(773,286.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#31501C").s().p("AhsAtIBaicIB/Dfg");
	this.shape_165.setTransform(774.9,291.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#416328").s().p("AgzBnIgiAWIgegZIgzAcICmkiICnEiIhAgmIgUApIg3ghIgZBBg");
	this.shape_166.setTransform(773,296.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#664224").s().p("AgOBMQAUgBAAgFIAAiRIAJAAIAACRQAAAGgYAAg");
	this.shape_167.setTransform(774,311.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#744C2B").s().p("AgYBGIAAiRIAxAAIAACRQAAAGgZAAQgYAAAAgGg");
	this.shape_168.setTransform(772.9,311.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#365620").s().p("AgQAhIgKAHIgKgIIgQAIIA0hbIA1BbIgUgLIgHANIgRgLIgIAVg");
	this.shape_169.setTransform(744.6,263.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#2B4918").s().p("AgvAcIArhKIA0Bdg");
	this.shape_170.setTransform(745.1,265.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#365620").s().p("AgVAsIgOAKIgNgLIgWAMIBGh8IBHB8IgbgRIgJASIgXgPIgLAdg");
	this.shape_171.setTransform(744.6,268.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#2B4918").s().p("AhAAfIA3hfIBKCBg");
	this.shape_172.setTransform(745.6,270.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#365620").s().p("AgdA+IgUANIgSgPIggAQIBjisIBjCsIglgXIgMAZIghgUIgPAng");
	this.shape_173.setTransform(744.6,274.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#2B4918").s().p("AheAgIBLiDIByDHg");
	this.shape_174.setTransform(746.5,278.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#365620").s().p("AgtBcIgeATIgagVIgvAXICUkCICVECIg4ghIgSAlIgygeIgWA7g");
	this.shape_175.setTransform(744.6,283.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#2B4918").s().p("AiAA2IBqi6ICXEJg");
	this.shape_176.setTransform(746.8,289.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#365620").s().p("Ag8B6IgoAaIgjgdIg+AfIDFlXIDFFXIhKgsIgZAxIhAgoIgeBOg");
	this.shape_177.setTransform(744.6,295.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#664224").s().p("AgRBaQAWgBAAgGIAAisIANAAIAACsQAAAHgdAAg");
	this.shape_178.setTransform(745.7,313.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#744C2B").s().p("AgdBTIAAisIA7AAIAACsQAAAHgeAAQgdAAAAgHg");
	this.shape_179.setTransform(744.6,313.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#416328").s().p("AgNAcIgJAFIgIgGIgOAHIAshNIAtBNIgRgKIgGALIgPgJIgGASg");
	this.shape_180.setTransform(77,269.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#31501C").s().p("AgoAYIAkg+IAtBOg");
	this.shape_181.setTransform(77.4,271.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#416328").s().p("AgSAlIgMAIIgKgJIgTAKIA7hoIA8BoIgXgOIgHAPIgUgMIgJAYg");
	this.shape_182.setTransform(77,273.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#31501C").s().p("Ag2AaIAvhQIA+Btg");
	this.shape_183.setTransform(77.8,275.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#416328").s().p("AgZA0IgRALIgPgMIgaAOIBTiTIBUCTIgggUIgKAVIgbgRIgNAig");
	this.shape_184.setTransform(76.9,278.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#31501C").s().p("AhPAbIA/hvIBhCpg");
	this.shape_185.setTransform(78.6,282.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#416328").s().p("AgmBOIgaARIgWgTIgnAVIB9jcIB+DcIgwgdIgQAfIgogZIgUAyg");
	this.shape_186.setTransform(77,286.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#31501C").s().p("AhtAtIBbicICADfg");
	this.shape_187.setTransform(78.9,291.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#416328").s().p("AgyBnIgiAWIgegZIg0AcICmkiICnEiIhAgmIgUApIg2ghIgaBBg");
	this.shape_188.setTransform(77,296.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#664224").s().p("AgOBMQAUgBAAgFIAAiRIAJAAIAACRQAAAGgYAAg");
	this.shape_189.setTransform(78,311.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#744C2B").s().p("AgYBGIAAiRIAxAAIAACRQAAAGgZAAQgYAAAAgGg");
	this.shape_190.setTransform(76.9,311.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#416328").s().p("AgPAhIgLAHIgKgIIgQAIIA0hbIA1BbIgUgLIgHAMIgRgKIgIAVg");
	this.shape_191.setTransform(25.2,261.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#31501C").s().p("AgvAcIAqhKIA1Bdg");
	this.shape_192.setTransform(25.8,263.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#416328").s().p("AgVAsIgOAJIgNgKIgWALIBGh6IBHB6IgbgQIgJASIgXgPIgLAcg");
	this.shape_193.setTransform(25.2,266.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#31501C").s().p("AhAAfIA3hfIBKCBg");
	this.shape_194.setTransform(26.2,268.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#416328").s().p("AgeA+IgUAMIgSgOIgeAQIBiisIBjCsIglgXIgMAZIghgUIgPAng");
	this.shape_195.setTransform(25.2,272.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#31501C").s().p("AheAgIBLiDIByDHg");
	this.shape_196.setTransform(27.2,276.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#416328").s().p("AgtBcIgeATIgbgVIguAXICUkCICVECIg5giIgSAmIgwgeIgXA7g");
	this.shape_197.setTransform(25.2,281.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#31501C").s().p("AiAA2IBqi5ICXEHg");
	this.shape_198.setTransform(27.5,287.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#416328").s().p("Ag8B6IgoAaIgjgdIg9AfIDElWIDFFWIhLgtIgYAyIhAgoIgeBPg");
	this.shape_199.setTransform(25.2,293.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#664224").s().p("AgRBaQAXgBAAgGIAAisIAMAAIAACsQAAAHgdAAg");
	this.shape_200.setTransform(26.4,311.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#744C2B").s().p("AgdBTIAAisIA7AAIAACsQAAAHgeAAQgdAAAAgHg");
	this.shape_201.setTransform(25.2,311.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#365620").s().p("AgQAhIgKAHIgJgIIgRAIIA0hbIA1BbIgUgLIgGANIgSgLIgIAVg");
	this.shape_202.setTransform(48.6,263.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#2B4918").s().p("AgvAcIAqhKIA1Bdg");
	this.shape_203.setTransform(49.1,265.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#365620").s().p("AgVAsIgOAKIgNgLIgWAMIBGh8IBHB8IgbgRIgIASIgYgPIgLAdg");
	this.shape_204.setTransform(48.6,268.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#2B4918").s().p("Ag/AfIA2hfIBJCBg");
	this.shape_205.setTransform(49.6,270.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#365620").s().p("AgdA+IgVANIgSgPIgeAQIBiisIBkCsIgmgXIgNAZIgggUIgPAng");
	this.shape_206.setTransform(48.6,274.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#2B4918").s().p("AheAgIBLiDIByDHg");
	this.shape_207.setTransform(50.5,278.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#365620").s().p("AgtBcIgeATIgagVIgvAXICUkCICVECIg5ghIgSAlIgwgeIgXA7g");
	this.shape_208.setTransform(48.6,283.4);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#2B4918").s().p("AiAA2IBqi6ICXEJg");
	this.shape_209.setTransform(50.8,289.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#365620").s().p("Ag8B6IgnAaIgkgdIg+AfIDFlXIDGFXIhLgsIgYAxIhBgoIgfBOg");
	this.shape_210.setTransform(48.6,295.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#664224").s().p("AgRBaQAWgBAAgGIAAisIANAAIAACsQAAAHgdAAg");
	this.shape_211.setTransform(49.7,313.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#744C2B").s().p("AgdBTIAAisIA7AAIAACsQAAAHgeAAQgdAAAAgHg");
	this.shape_212.setTransform(48.6,313.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#416328").s().p("AgNAcIgJAGIgIgHIgOAHIAshNIAtBNIgRgKIgGALIgOgJIgHASg");
	this.shape_213.setTransform(562.7,270.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#31501C").s().p("AgoAYIAlg+IAsBNg");
	this.shape_214.setTransform(563.1,272.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#416328").s().p("AgSAlIgMAIIgKgJIgTAKIA7hoIA8BoIgXgOIgHAPIgUgMIgJAYg");
	this.shape_215.setTransform(562.7,274.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#31501C").s().p("Ag2AZIAvhPIA+Btg");
	this.shape_216.setTransform(563.5,276.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#416328").s().p("AgZA0IgRALIgPgMIgaANIBTiRIBUCRIgggTIgKAVIgcgRIgMAhg");
	this.shape_217.setTransform(562.7,279.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#31501C").s().p("AhQAbIBAhuIBgCog");
	this.shape_218.setTransform(564.4,283.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#416328").s().p("AgmBOIgZAQIgXgSIgnAUIB9jaIB+DaIgwgcIgPAfIgpgZIgUAxg");
	this.shape_219.setTransform(562.7,287.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#31501C").s().p("AhsAtIBaicIB/Dfg");
	this.shape_220.setTransform(564.6,292.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#416328").s().p("AgzBnIghAWIgegYIg0AaICmkiICnEiIg/gmIgVAqIg2ghIgaBCg");
	this.shape_221.setTransform(562.7,297.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#664224").s().p("AgOBMQASgBAAgFIAAiRIALAAIAACRQAAAGgYAAg");
	this.shape_222.setTransform(563.7,312.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#744C2B").s().p("AgYBGIAAiRIAxAAIAACRQAAAGgZAAQgYAAAAgGg");
	this.shape_223.setTransform(562.7,312.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#416328").s().p("AgNAcIgJAGIgIgHIgOAHIAshNIAtBNIgRgKIgFALIgPgJIgHASg");
	this.shape_224.setTransform(390.3,270.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#31501C").s().p("AgoAYIAkg+IAtBNg");
	this.shape_225.setTransform(390.8,272.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#416328").s().p("AgSAlIgLAIIgLgJIgTAKIA7hoIA8BoIgXgOIgHAPIgUgMIgJAYg");
	this.shape_226.setTransform(390.3,274.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#31501C").s().p("Ag2AZIAuhPIA/Btg");
	this.shape_227.setTransform(391.2,276.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#416328").s().p("AgZA0IgRALIgPgMIgaANIBTiRIBUCRIgggTIgKAVIgbgRIgOAhg");
	this.shape_228.setTransform(390.3,279.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#31501C").s().p("AhQAbIBAhuIBhCog");
	this.shape_229.setTransform(392,283.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#416328").s().p("AglBOIgaAQIgXgSIgnAUIB9jaIB+DaIgvgcIgQAfIgpgZIgUAxg");
	this.shape_230.setTransform(390.3,287.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#31501C").s().p("AhsAtIBaicIB/Dfg");
	this.shape_231.setTransform(392.3,292.4);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#416328").s().p("AgzBnIghAWIgegYIg0AaICmkiICnEiIg/gmIgVAqIg2ghIgaBCg");
	this.shape_232.setTransform(390.3,297.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#664224").s().p("AgOBMQASgBABgFIAAiRIALAAIAACRQAAAGgZAAg");
	this.shape_233.setTransform(391.3,312.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#744C2B").s().p("AgYBGIAAiRIAxAAIAACRQAAAGgZAAQgYAAAAgGg");
	this.shape_234.setTransform(390.3,312.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#416328").s().p("AgPAhIgLAHIgJgIIgRAJIA0hcIA1BcIgUgMIgGANIgSgLIgIAVg");
	this.shape_235.setTransform(680.1,259.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#31501C").s().p("AgvAcIAqhKIA1Bdg");
	this.shape_236.setTransform(680.6,261.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#416328").s().p("AgVAsIgOAJIgNgLIgWAMIBGh6IBHB6IgbgQIgIASIgYgPIgKAcg");
	this.shape_237.setTransform(680.1,264.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#31501C").s().p("Ag/AeIA2heIBKCBg");
	this.shape_238.setTransform(681.1,266.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#416328").s().p("AgeA9IgTAOIgSgPIgfAQIBiisIBkCsIgmgWIgNAYIgggUIgPAng");
	this.shape_239.setTransform(680.1,270.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#31501C").s().p("AheAgIBLiDIByDHg");
	this.shape_240.setTransform(682,274.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#416328").s().p("AgtBcIgeAUIgbgWIguAYICUkDICVEDIg4giIgSAlIgygeIgWA7g");
	this.shape_241.setTransform(680.1,279.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#31501C").s().p("AiAA1IBqi4ICXEHg");
	this.shape_242.setTransform(682.3,285.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#416328").s().p("Ag8B6IgoAaIgjgdIg9AgIDElXIDGFXIhMgtIgXAxIhBgoIgfBOg");
	this.shape_243.setTransform(680.1,291.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#664224").s().p("AgRBaQAWgCAAgFIAAisIANAAIAACsQAAACgJADQgIACgMAAg");
	this.shape_244.setTransform(681.2,309.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#744C2B").s().p("AgUBYQgJgDAAgCIAAisIA7AAIAACsQAAACgJADQgIACgNAAQgMAAgIgCg");
	this.shape_245.setTransform(680.1,309.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#416328").s().p("AgNAcIgJAGIgIgHIgOAHIAshNIAtBNIgRgKIgGALIgOgJIgHASg");
	this.shape_246.setTransform(634.1,270.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#31501C").s().p("AgoAYIAkg+IAtBNg");
	this.shape_247.setTransform(634.5,272.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#416328").s().p("AgSAlIgMAIIgKgJIgTAKIA7hoIA8BoIgWgOIgIAPIgTgMIgKAYg");
	this.shape_248.setTransform(634.1,274.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#31501C").s().p("Ag2AZIAuhPIA/Btg");
	this.shape_249.setTransform(634.9,276.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#416328").s().p("AgZA0IgRALIgPgMIgaANIBTiRIBUCRIgggTIgKAVIgcgRIgMAhg");
	this.shape_250.setTransform(634.1,279.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#31501C").s().p("AhQAbIBAhuIBhCog");
	this.shape_251.setTransform(635.7,283.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#416328").s().p("AgmBOIgZAQIgXgSIgnAUIB9jaIB+DaIgwgcIgPAfIgpgZIgTAxg");
	this.shape_252.setTransform(634.1,287.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#31501C").s().p("AhtAtIBaicICADfg");
	this.shape_253.setTransform(636,292.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#416328").s().p("AgyBnIgiAWIgegYIg0AaICmkiICnEiIg/gmIgUAqIg3ghIgaBCg");
	this.shape_254.setTransform(634.1,297.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#664224").s().p("AgOBMQASgBAAgFIAAiRIALAAIAACRQAAAGgYAAg");
	this.shape_255.setTransform(635.1,312.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#744C2B").s().p("AgYBGIAAiRIAxAAIAACRQAAAGgZAAQgYAAAAgGg");
	this.shape_256.setTransform(634.1,312.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#416328").s().p("AgQAhIgKAHIgKgIIgQAJIA0hcIA1BcIgUgMIgHANIgRgLIgIAVg");
	this.shape_257.setTransform(261.1,259.9);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#31501C").s().p("AgvAcIArhKIA0Bdg");
	this.shape_258.setTransform(261.6,261.8);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#416328").s().p("AgVAsIgOAJIgNgLIgWAMIBGh6IBHB6IgbgQIgIASIgYgPIgLAcg");
	this.shape_259.setTransform(261.1,264.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#31501C").s().p("Ag/AeIA2heIBJCBg");
	this.shape_260.setTransform(262.1,266.9);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#416328").s().p("AgdA9IgVAOIgSgPIgeAQIBiisIBjCsIglgWIgMAYIghgUIgPAng");
	this.shape_261.setTransform(261.1,270.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#31501C").s().p("AheAgIBLiDIByDHg");
	this.shape_262.setTransform(263,274.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#416328").s().p("AgtBcIgeAUIgagWIgvAYICUkDICVEDIg5giIgSAlIgwgeIgXA7g");
	this.shape_263.setTransform(261.1,279.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#31501C").s().p("AiAA1IBqi4ICXEHg");
	this.shape_264.setTransform(263.3,285.7);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#416328").s().p("Ag8B6IgnAaIgkgdIg+AgIDFlXIDFFXIhKgtIgZAxIhAgoIgfBOg");
	this.shape_265.setTransform(261.1,291.7);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#664224").s().p("AgRBaQAWgCAAgFIAAisIANAAIAACsQAAACgJADQgIACgMAAg");
	this.shape_266.setTransform(262.2,309.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#744C2B").s().p("AgUBYQgJgDAAgCIAAisIA7AAIAACsQAAACgJADQgJACgMAAQgLAAgJgCg");
	this.shape_267.setTransform(261.1,309.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#365620").s().p("AgKAWIgHAFIgGgGIgLAGIAig9IAjA9IgNgIIgFAJIgLgIIgGAPg");
	this.shape_268.setTransform(284.7,280);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#2B4918").s().p("AgfASIAcgwIAjA9g");
	this.shape_269.setTransform(285,281.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#365620").s().p("AgNAdIgKAGIgIgGIgPAHIAuhRIAvBRIgSgLIgFAMIgQgJIgHASg");
	this.shape_270.setTransform(284.7,282.7);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#2B4918").s().p("AgqAUIAkg+IAxBVg");
	this.shape_271.setTransform(285.3,284.6);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#365620").s().p("AgTApIgNAIIgNgJIgTAKIBAhxIBCBxIgZgPIgIARIgVgOIgLAag");
	this.shape_272.setTransform(284.7,286.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#2B4918").s().p("Ag+AVIAyhWIBLCDg");
	this.shape_273.setTransform(286,289.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#365620").s().p("AgdA9IgUANIgSgPIgfAQIBiiqIBiCqIglgWIgMAYIgggTIgPAmg");
	this.shape_274.setTransform(284.7,292.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#2B4918").s().p("AhVAjIBHh5IBjCtg");
	this.shape_275.setTransform(286.2,297);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#365620").s().p("AgnBRIgaARIgYgTIgoAUICBjiICDDiIgygdIgQAgIgqgaIgUA0g");
	this.shape_276.setTransform(284.7,301);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#664224").s().p("AgMA7QAOAAAAgEIAAhxIALAAIAABxQAAAEgTAAg");
	this.shape_277.setTransform(285.4,312.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#744C2B").s().p("AgTA3IAAhxIAnAAIAABxQAAAEgUAAQgTAAAAgEg");
	this.shape_278.setTransform(284.7,312.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#416328").s().p("AgNAcIgJAGIgIgHIgOAHIAshNIAtBNIgRgKIgFALIgPgJIgHASg");
	this.shape_279.setTransform(325.1,270.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#31501C").s().p("AgoAYIAkg+IAtBNg");
	this.shape_280.setTransform(325.5,272.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#416328").s().p("AgSAlIgLAIIgLgJIgTAKIA7hoIA8BoIgXgOIgHAPIgUgMIgJAYg");
	this.shape_281.setTransform(325.1,274.1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#31501C").s().p("Ag2AZIAuhPIA/Btg");
	this.shape_282.setTransform(325.9,276.6);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#416328").s().p("AgZA0IgRALIgPgMIgaANIBTiRIBUCRIgggTIgKAVIgbgRIgOAhg");
	this.shape_283.setTransform(325.1,279.3);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#31501C").s().p("AhQAbIBAhuIBhCog");
	this.shape_284.setTransform(326.7,283.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#416328").s().p("AglBOIgaAQIgXgSIgnAUIB9jaIB+DaIgvgcIgQAfIgpgZIgUAxg");
	this.shape_285.setTransform(325.1,287.1);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#31501C").s().p("AhsAtIBaicIB/Dfg");
	this.shape_286.setTransform(327,292.4);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#416328").s().p("AgzBnIghAWIgegYIg0AaICmkiICnEiIg/gmIgVAqIg2ghIgaBCg");
	this.shape_287.setTransform(325.1,297.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#664224").s().p("AgOBMQASgBAAgFIAAiRIAMAAIAACRQAAAGgZAAg");
	this.shape_288.setTransform(326.1,312.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#744C2B").s().p("AgYBGIAAiRIAxAAIAACRQAAAGgZAAQgYAAAAgGg");
	this.shape_289.setTransform(325.1,312.6);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#416328").s().p("AgPAhIgLAHIgJgIIgRAJIA0hcIA1BcIgUgMIgGANIgSgLIgIAVg");
	this.shape_290.setTransform(155.8,259.9);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#31501C").s().p("AgvAcIAqhKIA1Bdg");
	this.shape_291.setTransform(156.4,261.8);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#416328").s().p("AgVAsIgOAJIgNgLIgWAMIBGh6IBHB6IgbgQIgIASIgYgPIgKAcg");
	this.shape_292.setTransform(155.8,264.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#31501C").s().p("Ag/AeIA2heIBKCBg");
	this.shape_293.setTransform(156.8,266.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#416328").s().p("AgeA9IgUAOIgSgPIgeAQIBiisIBkCsIgmgWIgNAYIgggUIgPAng");
	this.shape_294.setTransform(155.8,270.1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#31501C").s().p("AheAgIBLiDIByDHg");
	this.shape_295.setTransform(157.8,274.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#416328").s().p("AgtBcIgeAUIgbgWIguAYICUkDICVEDIg4giIgSAlIgygeIgWA7g");
	this.shape_296.setTransform(155.8,279.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#31501C").s().p("AiAA1IBqi4ICXEHg");
	this.shape_297.setTransform(158.1,285.7);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#416328").s().p("Ag8B6IgoAaIgjgdIg9AgIDElXIDGFXIhMgtIgXAxIhBgoIgfBOg");
	this.shape_298.setTransform(155.8,291.7);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#664224").s().p("AgRBaQAXgBAAgGIAAisIAMAAIAACsQAAACgJADQgIACgMAAg");
	this.shape_299.setTransform(157,309.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#744C2B").s().p("AgUBYQgJgDAAgCIAAisIA7AAIAACsQAAACgJADQgIACgNAAQgMAAgIgCg");
	this.shape_300.setTransform(155.8,309.5);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#416328").s().p("AgNAcIgJAGIgIgHIgOAHIAshNIAtBNIgRgKIgGALIgOgJIgHASg");
	this.shape_301.setTransform(215.1,270.6);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#31501C").s().p("AgoAYIAkg+IAtBNg");
	this.shape_302.setTransform(215.5,272.2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#416328").s().p("AgRAlIgMAIIgMgJIgSAKIA7hoIA8BoIgXgOIgHAPIgUgMIgJAYg");
	this.shape_303.setTransform(215.1,274.1);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#31501C").s().p("Ag2AZIAuhPIA/Btg");
	this.shape_304.setTransform(215.9,276.6);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#416328").s().p("AgZA0IgRALIgPgMIgaANIBTiRIBUCRIgfgTIgLAVIgbgRIgOAhg");
	this.shape_305.setTransform(215.1,279.3);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#31501C").s().p("AhQAbIBAhuIBhCog");
	this.shape_306.setTransform(216.7,283.2);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#416328").s().p("AglBOIgaAQIgXgSIgnAUIB9jaIB+DaIgvgcIgQAfIgqgZIgTAxg");
	this.shape_307.setTransform(215.1,287.1);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#31501C").s().p("AhtAtIBaicICBDfg");
	this.shape_308.setTransform(217,292.4);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#416328").s().p("AgzBnIghAWIgegYIg0AaICmkiICnEiIg/gmIgVAqIg2ghIgaBCg");
	this.shape_309.setTransform(215.1,297.6);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#664224").s().p("AgPBMQAUgBAAgFIAAiRIALAAIAACRQgBAGgYAAg");
	this.shape_310.setTransform(216.1,312.6);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#744C2B").s().p("AgYBGIAAiRIAxAAIAACRQAAAGgZAAQgYAAAAgGg");
	this.shape_311.setTransform(215.1,312.6);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#416328").s().p("AgKAWIgHAFIgHgGIgLAGIAjg9IAkA9IgOgIIgEAJIgMgHIgFAOg");
	this.shape_312.setTransform(842.2,199.1);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#31501C").s().p("AgfATIAdgxIAiA9g");
	this.shape_313.setTransform(842.5,200.4);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#416328").s().p("AgOAdIgJAHIgJgIIgOAJIAuhSIAwBSIgTgLIgFALIgQgJIgIATg");
	this.shape_314.setTransform(842.2,201.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#31501C").s().p("AgqAUIAlg/IAwBXg");
	this.shape_315.setTransform(842.8,203.8);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#416328").s().p("AgUApIgNAJIgMgKIgUALIBBhzIBDBzIgagPIgIAQIgWgNIgKAag");
	this.shape_316.setTransform(842.2,206);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#31501C").s().p("Ag/AVIAzhXIBMCFg");
	this.shape_317.setTransform(843.5,209.1);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#416328").s().p("AgeA+IgUAMIgSgOIgfAQIBjisIBkCsIgmgWIgMAYIghgUIgPAog");
	this.shape_318.setTransform(842.2,212.2);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#31501C").s().p("AhWAkIBIh8IBlCxg");
	this.shape_319.setTransform(843.7,216.4);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#416328").s().p("AgoBRIgaASIgYgTIgpAUICDjkICEDkIgygdIgQAgIgrgaIgVA0g");
	this.shape_320.setTransform(842.2,220.5);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#664224").s().p("AgLA8QAOgBAAgEIAAhyIAJAAIAAByQAAAFgTAAg");
	this.shape_321.setTransform(843,232.3);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#744C2B").s().p("AgTA3IAAhyIAnAAIAAByQAAAFgUAAQgTAAAAgFg");
	this.shape_322.setTransform(842.2,232.3);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#416328").s().p("AgKAWIgHAEIgHgEIgLAFIAjg9IAkA9IgOgIIgEAJIgMgHIgFAOg");
	this.shape_323.setTransform(817.2,193.8);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#31501C").s().p("AgfATIAdgxIAiA9g");
	this.shape_324.setTransform(817.5,195);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#416328").s().p("AgOAeIgJAFIgJgGIgPAHIAvhSIAwBSIgTgLIgGAMIgPgKIgHAUg");
	this.shape_325.setTransform(817.2,196.6);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#31501C").s().p("AgqAVIAlg/IAwBVg");
	this.shape_326.setTransform(817.8,198.5);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#416328").s().p("AgUApIgNAJIgMgKIgVALIBChzIBDBzIgagQIgIARIgWgNIgKAag");
	this.shape_327.setTransform(817.2,200.6);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#31501C").s().p("Ag/AVIAzhXIBMCFg");
	this.shape_328.setTransform(818.5,203.7);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#416328").s().p("AgeA+IgUANIgSgPIgfAQIBjitIBkCtIgmgXIgMAZIghgUIgPAog");
	this.shape_329.setTransform(817.2,206.8);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#31501C").s().p("AhVAkIBHh8IBlCxg");
	this.shape_330.setTransform(818.7,211);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#416328").s().p("AgoBSIgaARIgYgTIgpAVICDjlICEDlIgygeIgQAhIgrgbIgVA0g");
	this.shape_331.setTransform(817.2,215.1);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#664224").s().p("AgLA8QAOgBAAgEIAAhyIAJAAIAAByQAAAFgTAAg");
	this.shape_332.setTransform(818,227);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#744C2B").s().p("AgTA3IAAhyIAnAAIAAByQAAAFgUAAQgTAAAAgFg");
	this.shape_333.setTransform(817.2,227);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#416328").s().p("AgKAWIgHAEIgHgFIgLAGIAjg9IAkA9IgOgIIgEAJIgMgHIgFAOg");
	this.shape_334.setTransform(791.2,191.8);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#31501C").s().p("AgfASIAdgwIAiA9g");
	this.shape_335.setTransform(791.5,193);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#416328").s().p("AgOAdIgJAGIgJgHIgPAIIAvhSIAwBSIgTgLIgGAMIgPgKIgHATg");
	this.shape_336.setTransform(791.2,194.6);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#31501C").s().p("AgqAUIAlg/IAwBXg");
	this.shape_337.setTransform(791.8,196.4);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#416328").s().p("AgUApIgNAJIgMgKIgVALIBChzIBCBzIgZgPIgIAQIgWgNIgKAag");
	this.shape_338.setTransform(791.2,198.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#31501C").s().p("Ag/AVIAzhXIBMCFg");
	this.shape_339.setTransform(792.5,201.7);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#416328").s().p("AgeA+IgUANIgSgPIgfAQIBjisIBkCsIgmgXIgMAZIghgUIgPAng");
	this.shape_340.setTransform(791.2,204.8);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#31501C").s().p("AhVAkIBHh8IBlCxg");
	this.shape_341.setTransform(792.7,209);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#416328").s().p("AgoBSIgaARIgYgTIgpAVICDjmICEDmIgygeIgQAhIgrgbIgVA0g");
	this.shape_342.setTransform(791.2,213.1);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#664224").s().p("AgLA8QAOgBAAgEIAAhyIAJAAIAAByQAAAFgTAAg");
	this.shape_343.setTransform(792,225);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#744C2B").s().p("AgTA3IAAhyIAnAAIAAByQAAAFgUAAQgTAAAAgFg");
	this.shape_344.setTransform(791.2,225);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#365620").s().p("AgIATIgGADIgGgEIgJAEIAdgyIAeAyIgLgGIgEAHIgKgFIgEALg");
	this.shape_345.setTransform(860.5,198.7);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#2B4918").s().p("AgaAPIAYgoIAdAzg");
	this.shape_346.setTransform(860.8,199.7);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#365620").s().p("AgLAYIgIAGIgHgGIgNAGIAnhEIAoBEIgQgJIgEAKIgNgIIgGAQg");
	this.shape_347.setTransform(860.5,201);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#2B4918").s().p("AgjARIAeg0IApBHg");
	this.shape_348.setTransform(861.1,202.5);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#365620").s().p("AgQAjIgLAHIgKgIIgSAJIA3hhIA4BhIgWgOIgGAPIgSgLIgJAVg");
	this.shape_349.setTransform(860.5,204.4);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#2B4918").s().p("Ag0ASIAqhJIA/Bvg");
	this.shape_350.setTransform(861.6,206.9);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#365620").s().p("AgYAzIgRALIgPgMIgaANIBSiPIBTCPIgggSIgKAUIgbgQIgMAgg");
	this.shape_351.setTransform(860.5,209.5);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#2B4918").s().p("AhHAdIA7hmIBUCTg");
	this.shape_352.setTransform(861.8,213);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#365620").s().p("AghBEIgWAPIgUgQIgiARIBti/IBuC/IgqgZIgNAcIgkgXIgRAsg");
	this.shape_353.setTransform(860.5,216.4);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#664224").s().p("AgJAyQAMgBAAgDIAAhfIAHAAIAABfQAAAEgQAAg");
	this.shape_354.setTransform(861.2,226.3);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#744C2B").s().p("AgPAuIAAhfIAfAAIAABfQAAAEgQAAQgPAAAAgEg");
	this.shape_355.setTransform(860.5,226.3);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#365620").s().p("AgIASIgGAEIgFgEIgKAFIAdgzIAeAzIgMgHIgDAIIgKgHIgEAMg");
	this.shape_356.setTransform(832.2,189.3);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#2B4918").s().p("AgaAQIAYgpIAdAzg");
	this.shape_357.setTransform(832.5,190.3);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#365620").s().p("AgLAYIgIAGIgHgGIgNAGIAnhEIAoBEIgPgJIgFAKIgNgIIgGAQg");
	this.shape_358.setTransform(832.2,191.6);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#2B4918").s().p("AgjARIAfg0IAoBHg");
	this.shape_359.setTransform(832.7,193.2);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#365620").s().p("AgQAiIgLAHIgKgIIgRAJIA2hfIA3BfIgVgNIgGAOIgSgLIgJAWg");
	this.shape_360.setTransform(832.2,195);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#2B4918").s().p("Ag0ASIArhJIA+Bvg");
	this.shape_361.setTransform(833.3,197.5);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#365620").s().p("AgZA0IgQAKIgPgMIgaAOIBSiQIBTCQIgggTIgKAUIgbgQIgMAgg");
	this.shape_362.setTransform(832.2,200.1);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#2B4918").s().p("AhHAeIA8hnIBTCTg");
	this.shape_363.setTransform(833.5,203.6);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#365620").s().p("AghBEIgWAPIgUgQIgiARIBti/IBuC/IgqgZIgNAcIgkgWIgRArg");
	this.shape_364.setTransform(832.2,207);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#664224").s().p("AgJAyQAMgBAAgDIAAhfIAHAAIAABfQAAAEgPAAg");
	this.shape_365.setTransform(832.8,216.9);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#744C2B").s().p("AgQAuIAAhfIAhAAIAABfQAAAEgRAAQgQAAAAgEg");
	this.shape_366.setTransform(832.2,216.9);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#365620").s().p("AgIATIgGADIgFgEIgKAEIAdgyIAeAyIgMgGIgDAHIgKgGIgFAMg");
	this.shape_367.setTransform(776.5,192.6);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#2B4918").s().p("AgaAQIAYgpIAdAzg");
	this.shape_368.setTransform(776.8,193.7);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#365620").s().p("AgLAYIgIAGIgHgGIgMAGIAmhEIAoBEIgPgJIgFAKIgNgIIgGAQg");
	this.shape_369.setTransform(776.5,194.9);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#2B4918").s().p("AgjARIAfg0IAoBHg");
	this.shape_370.setTransform(777.1,196.5);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#365620").s().p("AgQAiIgLAHIgKgIIgSAJIA3hfIA3BfIgVgMIgHANIgSgLIgIAWg");
	this.shape_371.setTransform(776.5,198.3);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#2B4918").s().p("Ag0ARIAqhIIA/Bvg");
	this.shape_372.setTransform(777.6,200.9);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#365620").s().p("AgZA0IgQAKIgPgMIgaANIBSiPIBTCPIgggTIgJAVIgbgRIgOAhg");
	this.shape_373.setTransform(776.5,203.5);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#2B4918").s().p("AhHAeIA7hnIBUCTg");
	this.shape_374.setTransform(777.8,207);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#365620").s().p("AghBEIgWAOIgUgQIgiASIBti/IBuC/IgpgZIgOAbIgkgWIgRAsg");
	this.shape_375.setTransform(776.5,210.4);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#664224").s().p("AgJAyQAMgBAAgDIAAhfIAHAAIAABfQAAAEgPAAg");
	this.shape_376.setTransform(777.2,220.3);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#744C2B").s().p("AgQAuIAAhfIAgAAIAABfQAAAEgQAAQgPAAgBgEg");
	this.shape_377.setTransform(776.5,220.3);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#2B4918").s().p("AgGAPIgFADIgFgDIgHADIAXgpIAYApIgJgFIgDAGIgIgFIgEAKg");
	this.shape_378.setTransform(762,199.7);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#1E3B0C").s().p("AgVANIATghIAYApg");
	this.shape_379.setTransform(762.3,200.5);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#2B4918").s().p("AgJAUIgGAEIgGgFIgKAGIAfg4IAgA4IgMgIIgEAIIgKgGIgFANg");
	this.shape_380.setTransform(762,201.6);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#1E3B0C").s().p("AgdAOIAZgrIAiA7g");
	this.shape_381.setTransform(762.5,202.9);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#2B4918").s().p("AgNAcIgJAGIgIgHIgOAIIAshOIAtBOIgRgLIgFAMIgPgJIgHARg");
	this.shape_382.setTransform(762,204.3);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#1E3B0C").s().p("AgqAOIAig7IAzBag");
	this.shape_383.setTransform(762.9,206.5);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#2B4918").s().p("AgUAqIgOAIIgMgJIgVAKIBDh1IBEB1IgagPIgIARIgWgOIgLAbg");
	this.shape_384.setTransform(762,208.6);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#1E3B0C").s().p("Ag6AYIAxhTIBEB3g");
	this.shape_385.setTransform(763.1,211.4);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#2B4918").s().p("AgbA4IgSALIgQgNIgcAPIBZicIBaCcIgigVIgLAXIgegSIgNAjg");
	this.shape_386.setTransform(762.1,214.2);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#664224").s().p("AgHApQAJgBAAgCIAAhOIAGAAIAABOQAAADgMAAg");
	this.shape_387.setTransform(762.6,222.3);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#744C2B").s().p("AgNAmIAAhOIAbAAIAABOQAAADgOAAQgNAAAAgDg");
	this.shape_388.setTransform(762,222.3);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#365620").s().p("AgIASIgGAFIgFgFIgKAFIAdgzIAeAzIgMgHIgDAIIgKgHIgEAMg");
	this.shape_389.setTransform(803.2,187.9);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#2B4918").s().p("AgaAQIAYgpIAdAzg");
	this.shape_390.setTransform(803.5,189);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#365620").s().p("AgLAZIgIAFIgHgGIgNAGIAnhEIAoBEIgPgJIgFAKIgNgIIgGAQg");
	this.shape_391.setTransform(803.2,190.2);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#2B4918").s().p("AgjARIAfg0IAoBHg");
	this.shape_392.setTransform(803.7,191.8);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#365620").s().p("AgQAiIgLAHIgKgIIgRAJIA2hfIA3BfIgVgMIgGANIgSgLIgJAWg");
	this.shape_393.setTransform(803.2,193.6);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#2B4918").s().p("Ag0ARIAqhIIA/Bvg");
	this.shape_394.setTransform(804.3,196.2);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#365620").s().p("AgZAzIgQALIgPgMIgaANIBSiPIBTCPIgggTIgKAVIgbgRIgMAhg");
	this.shape_395.setTransform(803.2,198.8);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#2B4918").s().p("AhHAeIA7hnIBUCTg");
	this.shape_396.setTransform(804.5,202.3);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#365620").s().p("AghBEIgWAOIgUgQIgiASIBti/IBuC/IgqgZIgNAbIgkgWIgRAsg");
	this.shape_397.setTransform(803.2,205.7);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#664224").s().p("AgJAyQAMgBAAgDIAAhfIAHAAIAABfQAAAEgPAAg");
	this.shape_398.setTransform(803.8,215.6);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#744C2B").s().p("AgQAuIAAhfIAhAAIAABfQAAAEgRAAQgQAAAAgEg");
	this.shape_399.setTransform(803.2,215.6);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#AAB834").s().p("ADuCPQgTgFglgNQlXjZlfgrICsgLQGuAAGnEGQg8gIgJAAQgfgBhIAZQgrAPggAAQgPAAgNgEg");
	this.shape_400.setTransform(843.8,231.1);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#ABC13B").s().p("AD/CcQg6gYgbgIQhXgXhpAZQhGAWggADQgzAGguggQgmgcgUgNQgigWgdgIQgYgGguAKIhSAUQhlAWgbg8QgDgHgBgJQEQiaEfgkQFeArFYDZQgwgRgYgFQgogIghAHQgfAHgoAkQgrAngYAIQgPAGgSAAQgZAAgfgLg");
	this.shape_401.setTransform(799.3,234.2);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#6D8C38").s().p("ALGLYQgshShSh9Qijj7jAjXQpmqxqdhSQBYgLBUAAQGRAAGKDkQE6C1EpE+QDTDkC1EQQBbCJAwBbg");
	this.shape_402.setTransform(898,289.3);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#7C9D40").s().p("A9NLYIAdg/QAohPAwhWQCckQC+jkQELk+Eqi1QF1jkGRAAQGQAAGLDkQE6C1EpE+QDUDkC0EQQBbCJAwBbg");
	this.shape_403.setTransform(816.5,289.3);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#416328").s().p("AgKAWIgHAEIgHgEIgLAFIAjg9IAkA9IgOgIIgEAJIgMgHIgFAOg");
	this.shape_404.setTransform(1206.9,222.5);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#31501C").s().p("AgfASIAcgwIAjA+g");
	this.shape_405.setTransform(1207.2,223.7);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#416328").s().p("AgOAdIgKAHIgIgHIgOAHIAuhSIAvBSIgSgLIgGAMIgPgJIgHATg");
	this.shape_406.setTransform(1206.9,225.2);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#31501C").s().p("AgqAUIAkg/IAxBXg");
	this.shape_407.setTransform(1207.5,227.1);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#416328").s().p("AgTApIgOAJIgMgKIgVALIBChzIBCBzIgZgPIgIAQIgWgNIgKAag");
	this.shape_408.setTransform(1206.9,229.3);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#31501C").s().p("Ag/AVIAzhXIBMCFg");
	this.shape_409.setTransform(1208.2,232.4);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#416328").s().p("AgeA+IgUANIgSgPIgeAQIBiisIBjCsIglgWIgNAYIgggUIgPAng");
	this.shape_410.setTransform(1206.9,235.5);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#31501C").s().p("AhWAkIBIh8IBkCxg");
	this.shape_411.setTransform(1208.4,239.7);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#416328").s().p("AgoBSIgbARIgXgTIgpAVICDjmICEDmIgygeIgQAhIgsgbIgUA0g");
	this.shape_412.setTransform(1206.9,243.8);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#664224").s().p("AgLA8QAPgBAAgEIAAhyIAIAAIAAByQAAAFgTAAg");
	this.shape_413.setTransform(1207.6,255.7);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#744C2B").s().p("AgTA3IAAhyIAnAAIAAByQAAAFgUAAQgTAAAAgFg");
	this.shape_414.setTransform(1206.9,255.7);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#416328").s().p("AgKAWIgHAFIgHgGIgLAGIAjg9IAjA9IgNgIIgEAJIgMgIIgFAPg");
	this.shape_415.setTransform(1176.8,227.9);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#31501C").s().p("AgfATIAcgyIAjA+g");
	this.shape_416.setTransform(1177.2,229.2);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#416328").s().p("AgOAdIgJAHIgJgHIgOAHIAuhSIAvBSIgSgLIgFAMIgPgJIgIATg");
	this.shape_417.setTransform(1176.8,230.7);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#31501C").s().p("AgqAUIAkg/IAxBXg");
	this.shape_418.setTransform(1177.5,232.6);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#416328").s().p("AgTApIgOAJIgMgKIgUALIBBhzIBCBzIgYgPIgIAQIgXgNIgKAag");
	this.shape_419.setTransform(1176.8,234.7);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#31501C").s().p("Ag/AVIAzhXIBMCFg");
	this.shape_420.setTransform(1178.1,237.9);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#416328").s().p("AgdA+IgVAMIgSgOIgfAQIBjitIBjCtIglgXIgMAaIghgUIgPAmg");
	this.shape_421.setTransform(1176.8,240.9);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#31501C").s().p("AhVAkIBHh8IBlCxg");
	this.shape_422.setTransform(1178.4,245.1);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#416328").s().p("AgnBSIgbARIgYgUIgpAWICDjlICEDlIgygeIgQAhIgrgbIgVA1g");
	this.shape_423.setTransform(1176.8,249.2);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#664224").s().p("AgLA8QAOgBAAgEIAAhyIAJAAIAAByQAAAFgTAAg");
	this.shape_424.setTransform(1177.6,261.1);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#744C2B").s().p("AgTA3IAAhyIAnAAIAAByQAAAFgUAAQgTAAAAgFg");
	this.shape_425.setTransform(1176.8,261.1);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#365620").s().p("AgIASIgGAEIgFgEIgKAFIAdgzIAeAzIgMgHIgDAIIgKgHIgEAMg");
	this.shape_426.setTransform(1161,226.4);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#2B4918").s().p("AgaAPIAYgoIAdAzg");
	this.shape_427.setTransform(1161.3,227.5);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#365620").s().p("AgMAYIgIAGIgHgGIgMAGIAnhEIAoBEIgQgJIgEAKIgOgIIgFAQg");
	this.shape_428.setTransform(1161,228.7);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#2B4918").s().p("AgjARIAeg0IApBHg");
	this.shape_429.setTransform(1161.6,230.3);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#365620").s().p("AgQAiIgLAHIgKgIIgRAJIA2hfIA3BfIgVgNIgGAOIgSgLIgJAWg");
	this.shape_430.setTransform(1161,232.1);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#2B4918").s().p("Ag0ASIAqhJIA/Bvg");
	this.shape_431.setTransform(1162.1,234.7);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#365620").s().p("AgZA0IgQAKIgPgMIgaAOIBSiQIBTCQIgfgTIgLAUIgbgQIgMAgg");
	this.shape_432.setTransform(1161,237.2);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#2B4918").s().p("AhHAeIA7hnIBUCTg");
	this.shape_433.setTransform(1162.3,240.8);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#365620").s().p("AghBEIgXAOIgTgPIgiARIBti/IBuC/IgqgZIgOAcIgkgXIgQAsg");
	this.shape_434.setTransform(1161,244.2);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#664224").s().p("AgJAyQAMgBAAgDIAAhfIAHAAIAABfQAAAEgPAAg");
	this.shape_435.setTransform(1161.6,254.1);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#744C2B").s().p("AgQAuIAAhfIAhAAIAABfQAAAEgRAAQgQAAAAgEg");
	this.shape_436.setTransform(1161,254.1);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#2B4918").s().p("AgHAPIgFADIgEgDIgHAEIAXgqIAYAqIgJgGIgDAGIgIgFIgEAKg");
	this.shape_437.setTransform(1226.7,233.6);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#1E3B0C").s().p("AgVAMIATggIAYApg");
	this.shape_438.setTransform(1227,234.5);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#2B4918").s().p("AgJAUIgGAEIgHgEIgJAFIAfg4IAgA4IgMgIIgEAJIgLgHIgEANg");
	this.shape_439.setTransform(1226.7,235.5);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#1E3B0C").s().p("AgdAOIAZgrIAiA7g");
	this.shape_440.setTransform(1227.2,236.8);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#2B4918").s().p("AgNAcIgJAGIgIgHIgOAHIAshOIAtBOIgRgKIgGALIgOgJIgHASg");
	this.shape_441.setTransform(1226.7,238.3);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#1E3B0C").s().p("AgqAOIAig7IAzBbg");
	this.shape_442.setTransform(1227.6,240.4);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#2B4918").s().p("AgUAqIgOAJIgMgKIgVALIBDh1IBEB1IgagQIgIASIgXgOIgKAag");
	this.shape_443.setTransform(1226.7,242.5);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#1E3B0C").s().p("Ag6AYIAwhUIBFB5g");
	this.shape_444.setTransform(1227.8,245.4);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#2B4918").s().p("AgbA4IgSALIgQgNIgcAPIBZicIBaCcIgigVIgLAXIgegTIgNAkg");
	this.shape_445.setTransform(1226.7,248.2);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#664224").s().p("AABAmIAAhOIAGAAIAABOQAAADgNAAQAHAAAAgDg");
	this.shape_446.setTransform(1227.4,256.3);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#744C2B").s().p("AgNAmIAAhOIAaAAIAABOQAAADgNAAQgNAAAAgDg");
	this.shape_447.setTransform(1226.7,256.3);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#2B4918").s().p("AgGAPIgGADIgEgEIgHAEIAXgpIAYApIgJgFIgDAGIgIgFIgEAKg");
	this.shape_448.setTransform(1146.5,233.5);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#1E3B0C").s().p("AgVANIAUghIAXApg");
	this.shape_449.setTransform(1146.8,234.3);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#2B4918").s().p("AgJAUIgHAEIgFgFIgKAGIAfg4IAhA4IgNgIIgEAIIgLgGIgFANg");
	this.shape_450.setTransform(1146.5,235.4);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#1E3B0C").s().p("AgdAOIAagqIAhA5g");
	this.shape_451.setTransform(1147,236.7);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#2B4918").s().p("AgNAcIgJAGIgIgHIgPAIIAthOIAtBOIgRgLIgFAMIgPgJIgHARg");
	this.shape_452.setTransform(1146.5,238.1);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#1E3B0C").s().p("AgqAPIAig7IAzBZg");
	this.shape_453.setTransform(1147.4,240.3);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#2B4918").s().p("AgUAqIgNAJIgNgKIgVALIBDh1IBEB1IgagQIgIARIgWgNIgLAbg");
	this.shape_454.setTransform(1146.5,242.4);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#1E3B0C").s().p("Ag6AZIAxhVIBEB5g");
	this.shape_455.setTransform(1147.6,245.2);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#2B4918").s().p("AgbA4IgSALIgQgNIgcAPIBZicIBaCcIgigVIgLAXIgegSIgNAjg");
	this.shape_456.setTransform(1146.5,248);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#664224").s().p("AgHApQAKgBAAgDIAAhNIAFAAIAABNQAAAEgMAAg");
	this.shape_457.setTransform(1147,256.1);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#744C2B").s().p("AgMAlIAAhNIAaAAIAABNQAAAEgOAAQgMAAAAgEg");
	this.shape_458.setTransform(1146.5,256.1);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#AAB834").s().p("AnkhfIA/gEIAWgBIBKgCQGWABGVCJQg2AEghARQgMAFgTARQgUASgKAGQmXirmfgbg");
	this.shape_459.setTransform(1216.3,260.9);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#ABC13B").s().p("AA8B6QgcgBgmgPQgsgTgWgHQhYgag9gDQhBgDhAAPQgbAGhhAfQgvAPg0gNQg2gNgggkQgJgKgGgUQgGgTgBgWQEPhVEXgSIgKABQGfAcGYCqQgEADgFACQgjAOg2gNIhZgdQhKgZgtgGQhEgKg2ASQgXAIhHAuQg2AkgsAAIgCAAg");
	this.shape_460.setTransform(1181.9,263.3);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#90AA35").s().p("ANKItQgwhAhbhiQi1jCjYinQqyoUsJg0QBPgGBRAAQNCAALrIsQDpCuDGDRQBiBpA0BFg");
	this.shape_461.setTransform(1283.9,306.4);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#9FBB3B").s().p("Egg+AItIAigwQAtg8A3hCQCyjRDZiuQK4osNBAAQNBAALtIsQDpCuDGDRQBiBpA0BFg");
	this.shape_462.setTransform(1189,306.4);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#87A341").s().p("AFIBzQhMgKgYAAQgsAAghAHQkii+kpgkICHgIQFyAAFwD1IgLAAQgkAAg+gIg");
	this.shape_463.setTransform(1029.3,193.9);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#90AD45").s().p("AFkB2Qg4gRgYgCQgkgFgwAEIhVAIQgSACgpALQgnAKgVABQg1AChzguQgpgQglgHQgmgGgvADQgUABgsAFQgqAFgXABQgzABgdgPQD/ieEIghQEnAlEjC+QgSADgUAHIgmATQgVAKgUAAIgCABQgeAAgwgQg");
	this.shape_464.setTransform(989.1,195.7);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#6D8C38").s().p("AL+OQQgshphUigQinlAjFkRQpztrqqhTQBGgHBBgBQGRABGKEdQE6DkEoGOQDUEdC1FWQBaCsAwBxg");
	this.shape_465.setTransform(1089.2,272.8);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#7C9D40").s().p("A9NOQQAnhxBPisQCblWC+kdQELmOEqjkQF1kdGRgBQGQABGKEdQE8DkEoGOQDTEdC2FWQBaCsAwBxg");
	this.shape_466.setTransform(1005.9,272.8);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#416328").s().p("AgKAWIgHAFIgHgGIgKAGIAig9IAkA9IgOgIIgEAJIgMgHIgFAOg");
	this.shape_467.setTransform(1401.6,199.1);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#31501C").s().p("AgfATIAcgxIAjA9g");
	this.shape_468.setTransform(1402,200.4);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#416328").s().p("AgOAdIgJAHIgJgIIgPAJIAvhSIAvBSIgSgLIgFALIgPgJIgIATg");
	this.shape_469.setTransform(1401.6,201.9);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#31501C").s().p("AgqAUIAkg/IAxBXg");
	this.shape_470.setTransform(1402.3,203.8);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#416328").s().p("AgTApIgOAJIgMgKIgVALIBChzIBCBzIgZgPIgIAQIgWgNIgJAag");
	this.shape_471.setTransform(1401.6,206);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#31501C").s().p("Ag/AVIAzhXIBMCFg");
	this.shape_472.setTransform(1402.9,209.1);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#416328").s().p("AgeA+IgUAMIgSgOIgeAQIBiisIBkCsIgmgWIgMAYIghgUIgPAog");
	this.shape_473.setTransform(1401.6,212.2);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#31501C").s().p("AhWAkIBHh8IBmCxg");
	this.shape_474.setTransform(1403.2,216.4);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#416328").s().p("AgoBRIgbASIgXgTIgpAUICDjkICEDkIgygdIgQAgIgrgaIgVA0g");
	this.shape_475.setTransform(1401.6,220.5);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#664224").s().p("AgLA8QAOgBAAgEIAAhyIAJAAIAAByQAAAFgTAAg");
	this.shape_476.setTransform(1402.4,232.3);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#744C2B").s().p("AgTA3IAAhyIAnAAIAAByQAAAFgUAAQgTAAAAgFg");
	this.shape_477.setTransform(1401.6,232.3);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#416328").s().p("AgKAWIgHAEIgHgEIgLAFIAjg9IAkA9IgOgIIgEAJIgMgHIgFAOg");
	this.shape_478.setTransform(1376.6,193.8);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#31501C").s().p("AgfATIAcgxIAjA9g");
	this.shape_479.setTransform(1377,195);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#416328").s().p("AgOAeIgJAFIgJgGIgOAHIAuhSIAvBSIgSgLIgFAMIgQgKIgHAUg");
	this.shape_480.setTransform(1376.6,196.6);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#31501C").s().p("AgqAVIAkg/IAxBVg");
	this.shape_481.setTransform(1377.3,198.5);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#416328").s().p("AgTApIgOAJIgMgKIgUALIBBhzIBCBzIgYgQIgIARIgXgNIgKAag");
	this.shape_482.setTransform(1376.6,200.6);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#31501C").s().p("Ag/AVIAzhXIBMCFg");
	this.shape_483.setTransform(1377.9,203.7);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#416328").s().p("AgdA+IgVANIgSgPIgeAQIBiitIBjCtIglgXIgMAZIghgUIgPAog");
	this.shape_484.setTransform(1376.6,206.8);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#31501C").s().p("AhVAkIBGh8IBmCxg");
	this.shape_485.setTransform(1378.2,211);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#416328").s().p("AgnBSIgcARIgXgTIgpAVICDjlICEDlIgygeIgQAhIgrgbIgVA0g");
	this.shape_486.setTransform(1376.6,215.1);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#664224").s().p("AgLA8QAOgBAAgEIAAhyIAJAAIAAByQAAAFgTAAg");
	this.shape_487.setTransform(1377.4,227);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#744C2B").s().p("AgTA3IAAhyIAnAAIAAByQAAAFgUAAQgTAAAAgFg");
	this.shape_488.setTransform(1376.6,227);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#416328").s().p("AgKAWIgHAEIgHgFIgLAGIAjg9IAjA9IgNgIIgEAJIgMgHIgFAOg");
	this.shape_489.setTransform(1350.6,191.8);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#31501C").s().p("AgfASIAcgwIAjA9g");
	this.shape_490.setTransform(1351,193);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#416328").s().p("AgNAdIgKAGIgJgHIgOAIIAuhSIAvBSIgSgLIgFAMIgQgKIgHATg");
	this.shape_491.setTransform(1350.6,194.6);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#31501C").s().p("AgqAUIAkg/IAxBXg");
	this.shape_492.setTransform(1351.3,196.4);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#416328").s().p("AgTApIgOAJIgMgKIgUALIBBhzIBDBzIgZgPIgIAQIgXgNIgKAag");
	this.shape_493.setTransform(1350.6,198.6);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#31501C").s().p("Ag/AVIAzhXIBMCFg");
	this.shape_494.setTransform(1351.9,201.7);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#416328").s().p("AgdA+IgUANIgSgPIggAQIBjisIBjCsIglgXIgMAZIghgUIgPAng");
	this.shape_495.setTransform(1350.6,204.8);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#31501C").s().p("AhVAkIBHh8IBkCxg");
	this.shape_496.setTransform(1352.2,209);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#416328").s().p("AgnBSIgbARIgYgTIgpAVICDjmICEDmIgygeIgQAhIgrgbIgVA0g");
	this.shape_497.setTransform(1350.6,213.1);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#664224").s().p("AgLA8QAOgBAAgEIAAhyIAJAAIAAByQAAAFgTAAg");
	this.shape_498.setTransform(1351.4,225);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#744C2B").s().p("AgTA3IAAhyIAnAAIAAByQAAAFgUAAQgTAAAAgFg");
	this.shape_499.setTransform(1350.6,225);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#365620").s().p("AgIATIgGADIgGgEIgJAEIAdgyIAeAyIgLgGIgFAHIgJgFIgEALg");
	this.shape_500.setTransform(1420,198.7);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#2B4918").s().p("AgaAPIAYgoIAdAzg");
	this.shape_501.setTransform(1420.3,199.7);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#365620").s().p("AgLAYIgIAGIgHgGIgNAGIAnhEIAnBEIgPgJIgEAKIgOgIIgFAQg");
	this.shape_502.setTransform(1420,201);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#2B4918").s().p("AgjARIAeg0IApBHg");
	this.shape_503.setTransform(1420.5,202.5);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#365620").s().p("AgQAjIgMAHIgKgIIgQAJIA2hhIA4BhIgVgOIgHAPIgSgLIgJAVg");
	this.shape_504.setTransform(1420,204.4);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#2B4918").s().p("Ag0ASIAqhJIA/Bvg");
	this.shape_505.setTransform(1421.1,206.9);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#365620").s().p("AgYAzIgSALIgPgMIgZANIBSiPIBTCPIgggSIgKAUIgbgQIgMAgg");
	this.shape_506.setTransform(1420,209.5);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#2B4918").s().p("AhHAdIA7hmIBUCTg");
	this.shape_507.setTransform(1421.2,213);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#365620").s().p("AghBEIgWAPIgUgQIgiARIBti/IBuC/IgqgZIgNAcIgkgXIgRAsg");
	this.shape_508.setTransform(1420,216.4);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#664224").s().p("AgJAyQAMgBAAgDIAAhfIAHAAIAABfQAAAEgQAAg");
	this.shape_509.setTransform(1420.6,226.3);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#744C2B").s().p("AgPAuIAAhfIAfAAIAABfQAAAEgQAAQgPAAAAgEg");
	this.shape_510.setTransform(1420,226.3);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#365620").s().p("AgIASIgGAEIgGgEIgJAFIAdgzIAdAzIgKgHIgEAIIgKgHIgEAMg");
	this.shape_511.setTransform(1391.6,189.3);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#2B4918").s().p("AgaAQIAYgpIAdAzg");
	this.shape_512.setTransform(1391.9,190.3);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#365620").s().p("AgLAYIgIAGIgHgGIgNAGIAnhEIAnBEIgPgJIgEAKIgNgIIgGAQg");
	this.shape_513.setTransform(1391.6,191.6);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#2B4918").s().p("AgjARIAeg0IApBHg");
	this.shape_514.setTransform(1392.2,193.2);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#365620").s().p("AgQAiIgLAHIgKgIIgRAJIA2hfIA4BfIgVgNIgHAOIgSgLIgJAWg");
	this.shape_515.setTransform(1391.6,195);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#2B4918").s().p("Ag0ASIAqhJIA/Bvg");
	this.shape_516.setTransform(1392.7,197.5);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#365620").s().p("AgYA0IgRAKIgPgMIgaAOIBSiQIBTCQIgggTIgKAUIgbgQIgMAgg");
	this.shape_517.setTransform(1391.6,200.1);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#2B4918").s().p("AhHAeIA7hnIBUCTg");
	this.shape_518.setTransform(1392.9,203.6);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#365620").s().p("AghBEIgWAPIgUgQIgiARIBti/IBuC/IgqgZIgNAcIgkgWIgRArg");
	this.shape_519.setTransform(1391.6,207);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#664224").s().p("AgJAyQAMgBAAgDIAAhfIAHAAIAABfQAAAEgQAAg");
	this.shape_520.setTransform(1392.3,216.9);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#744C2B").s().p("AgPAuIAAhfIAgAAIAABfQgBAEgQAAQgPAAAAgEg");
	this.shape_521.setTransform(1391.6,216.9);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#365620").s().p("AgIATIgGADIgGgEIgJAEIAdgyIAeAyIgMgGIgDAHIgKgGIgFAMg");
	this.shape_522.setTransform(1336,192.6);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#2B4918").s().p("AgaAQIAYgpIAdAzg");
	this.shape_523.setTransform(1336.3,193.7);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#365620").s().p("AgLAYIgIAGIgIgGIgMAGIAnhEIAoBEIgQgJIgEAKIgOgIIgGAQg");
	this.shape_524.setTransform(1336,194.9);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#2B4918").s().p("AgjARIAfg0IAoBHg");
	this.shape_525.setTransform(1336.5,196.5);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#365620").s().p("AgQAiIgMAHIgKgIIgRAJIA3hfIA4BfIgWgMIgHANIgSgLIgIAWg");
	this.shape_526.setTransform(1336,198.3);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#2B4918").s().p("Ag0ARIAqhIIA/Bvg");
	this.shape_527.setTransform(1337.1,200.9);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#365620").s().p("AgYA0IgRAKIgQgMIgZANIBSiPIBTCPIgggTIgKAVIgbgRIgNAhg");
	this.shape_528.setTransform(1336,203.5);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#2B4918").s().p("AhHAeIA8hnIBTCTg");
	this.shape_529.setTransform(1337.2,207);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#365620").s().p("AghBEIgWAOIgUgQIgiASIBti/IBuC/IgqgZIgNAbIgkgWIgRAsg");
	this.shape_530.setTransform(1336,210.4);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#664224").s().p("AgJAyQAMgBAAgDIAAhfIAHAAIAABfQAAAEgPAAg");
	this.shape_531.setTransform(1336.6,220.3);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#744C2B").s().p("AgPAuIAAhfIAfAAIAABfQAAAEgQAAQgPAAAAgEg");
	this.shape_532.setTransform(1336,220.3);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#2B4918").s().p("AgHAPIgEADIgFgDIgHADIAXgpIAYApIgJgFIgDAGIgIgFIgEAKg");
	this.shape_533.setTransform(1321.5,199.7);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#1E3B0C").s().p("AgVANIAUghIAXApg");
	this.shape_534.setTransform(1321.7,200.5);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#2B4918").s().p("AgJAUIgHAEIgFgFIgKAGIAfg4IAgA4IgMgIIgEAIIgLgGIgFANg");
	this.shape_535.setTransform(1321.5,201.6);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#1E3B0C").s().p("AgdAOIAagrIAgA7g");
	this.shape_536.setTransform(1321.9,202.9);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#2B4918").s().p("AgNAcIgJAGIgIgHIgOAIIAshOIAtBOIgRgLIgGAMIgOgJIgHARg");
	this.shape_537.setTransform(1321.5,204.3);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#1E3B0C").s().p("AgrAOIAjg7IAzBag");
	this.shape_538.setTransform(1322.4,206.5);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#2B4918").s().p("AgUAqIgOAIIgMgJIgVAKIBDh1IBEB1IgagPIgIARIgWgOIgLAbg");
	this.shape_539.setTransform(1321.5,208.6);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#1E3B0C").s().p("Ag6AYIAxhTIBEB3g");
	this.shape_540.setTransform(1322.5,211.4);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#2B4918").s().p("AgbA4IgSALIgQgNIgcAPIBZicIBaCcIgigVIgLAXIgegSIgNAjg");
	this.shape_541.setTransform(1321.5,214.2);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#664224").s().p("AgHApQAKgBAAgCIAAhOIAFAAIAABOQAAADgMAAg");
	this.shape_542.setTransform(1322,222.3);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#744C2B").s().p("AgMAmIAAhOIAaAAIAABOQAAADgOAAQgMAAAAgDg");
	this.shape_543.setTransform(1321.5,222.3);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#365620").s().p("AgIASIgGAFIgGgFIgJAFIAdgzIAeAzIgMgHIgDAIIgKgHIgEAMg");
	this.shape_544.setTransform(1362.6,187.9);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#2B4918").s().p("AgaAQIAYgpIAdAzg");
	this.shape_545.setTransform(1362.9,189);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#365620").s().p("AgLAZIgIAFIgHgGIgNAGIAnhEIAoBEIgQgJIgEAKIgNgIIgGAQg");
	this.shape_546.setTransform(1362.6,190.2);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#2B4918").s().p("AgjARIAeg0IApBHg");
	this.shape_547.setTransform(1363.2,191.8);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#365620").s().p("AgQAiIgLAHIgKgIIgSAJIA3hfIA4BfIgWgMIgHANIgRgLIgJAWg");
	this.shape_548.setTransform(1362.6,193.6);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#2B4918").s().p("Ag0ARIAqhIIA/Bvg");
	this.shape_549.setTransform(1363.7,196.2);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#365620").s().p("AgYAzIgRALIgPgMIgaANIBSiPIBTCPIgggTIgKAVIgbgRIgMAhg");
	this.shape_550.setTransform(1362.6,198.8);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#2B4918").s().p("AhHAeIA7hnIBUCTg");
	this.shape_551.setTransform(1363.9,202.3);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#365620").s().p("AghBEIgWAOIgUgQIgiASIBti/IBuC/IgqgZIgNAbIgkgWIgRAsg");
	this.shape_552.setTransform(1362.6,205.7);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#664224").s().p("AgJAyQAMgBAAgDIAAhfIAHAAIAABfQAAAEgQAAg");
	this.shape_553.setTransform(1363.3,215.6);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#744C2B").s().p("AgPAuIAAhfIAfAAIAABfQAAAEgQAAQgPAAAAgEg");
	this.shape_554.setTransform(1362.6,215.6);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#AAB834").s().p("ADuCPQgTgFglgNQlXjZlfgrICsgLQGvAAGlEGIhEgIQgfgBhIAZQgrAPggAAQgQAAgMgEg");
	this.shape_555.setTransform(1403.3,231.1);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#ABC13B").s().p("AD/CcQg6gYgbgIQhXgXhpAZQhGAWggADQgzAGguggIg6gpQgigWgdgIQgYgGguAKIhSAUQhmAWgag8QgCgFgCgLQEQiaEfgkQFeArFYDZQgwgRgYgFQgogIgiAHQgeAHgoAkQgrAngYAIQgPAGgSAAQgZAAgfgLg");
	this.shape_556.setTransform(1358.8,234.2);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#90AA35").s().p("ALGLYQgshShSh9Qijj7jAjXQpmqxqdhSQBYgLBUAAQGRAAGKDkQE6C1EpE+QDTDkC1EQQBbCJAwBbg");
	this.shape_557.setTransform(1457.5,289.3);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#9FBB3B").s().p("A9NLYIAdg/QAohPAwhWQCckQC/jkQEKk+Eqi1QF1jkGRAAQGQAAGLDkQE6C1EpE+QDUDkC0EQQBbCJAwBbg");
	this.shape_558.setTransform(1376,289.3);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#416328").s().p("AgKAWIgHAEIgGgEIgLAFIAig9IAjA9IgNgIIgEAJIgMgHIgFAOg");
	this.shape_559.setTransform(1721.8,222.5);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#31501C").s().p("AgfASIAcgwIAjA+g");
	this.shape_560.setTransform(1722.2,223.7);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#416328").s().p("AgOAdIgJAHIgJgHIgPAHIAvhSIAwBSIgSgLIgHAMIgPgJIgHATg");
	this.shape_561.setTransform(1721.8,225.2);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#31501C").s().p("AgqAUIAkg/IAxBXg");
	this.shape_562.setTransform(1722.5,227.1);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#416328").s().p("AgUApIgNAJIgMgKIgVALIBChzIBCBzIgZgPIgIAQIgVgNIgLAag");
	this.shape_563.setTransform(1721.8,229.3);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#31501C").s().p("Ag/AVIAzhXIBMCFg");
	this.shape_564.setTransform(1723.1,232.4);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#416328").s().p("AgeA+IgUANIgSgPIgfAQIBjisIBkCsIgmgWIgNAYIgggUIgPAng");
	this.shape_565.setTransform(1721.8,235.5);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#31501C").s().p("AhVAkIBHh8IBlCxg");
	this.shape_566.setTransform(1723.3,239.7);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#416328").s().p("AgoBSIgbARIgXgTIgpAVICDjmICEDmIgygeIgQAhIgsgbIgTA0g");
	this.shape_567.setTransform(1721.8,243.8);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#664224").s().p("AgLA8QAPgBAAgEIAAhyIAIAAIAAByQAAAFgTAAg");
	this.shape_568.setTransform(1722.6,255.7);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#744C2B").s().p("AgTA3IAAhyIAnAAIAAByQAAAFgUAAQgTAAAAgFg");
	this.shape_569.setTransform(1721.8,255.7);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#416328").s().p("AgKAWIgHAFIgHgGIgLAGIAjg9IAkA9IgOgIIgEAJIgMgIIgFAPg");
	this.shape_570.setTransform(1691.8,227.9);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#31501C").s().p("AgfATIAcgyIAjA+g");
	this.shape_571.setTransform(1692.1,229.2);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#416328").s().p("AgOAdIgJAHIgJgHIgPAHIAvhSIAwBSIgTgLIgFAMIgPgJIgIATg");
	this.shape_572.setTransform(1691.8,230.7);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#31501C").s().p("AgqAUIAkg/IAxBXg");
	this.shape_573.setTransform(1692.4,232.6);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#416328").s().p("AgUApIgNAJIgMgKIgVALIBChzIBCBzIgZgPIgIAQIgVgNIgKAag");
	this.shape_574.setTransform(1691.8,234.7);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#31501C").s().p("Ag/AVIAzhXIBMCFg");
	this.shape_575.setTransform(1693.1,237.9);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#416328").s().p("AgeA+IgUAMIgSgOIgfAQIBjitIBkCtIgmgXIgMAaIghgUIgPAmg");
	this.shape_576.setTransform(1691.8,240.9);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#31501C").s().p("AhWAkIBHh8IBlCxg");
	this.shape_577.setTransform(1693.3,245.1);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#416328").s().p("AgoBSIgaARIgYgUIgpAWICDjlICEDlIgygeIgQAhIgrgbIgVA1g");
	this.shape_578.setTransform(1691.8,249.2);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#664224").s().p("AgLA8QAPgBAAgEIAAhyIAIAAIAAByQAAAFgTAAg");
	this.shape_579.setTransform(1692.6,261.1);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#744C2B").s().p("AgTA3IAAhyIAnAAIAAByQAAAFgUAAQgTAAAAgFg");
	this.shape_580.setTransform(1691.8,261.1);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#365620").s().p("AgIASIgGAEIgFgEIgKAFIAdgzIAeAzIgMgHIgDAIIgKgHIgEAMg");
	this.shape_581.setTransform(1675.9,226.4);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#2B4918").s().p("AgaAPIAYgoIAdAzg");
	this.shape_582.setTransform(1676.2,227.5);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#365620").s().p("AgLAYIgIAGIgIgGIgLAGIAmhEIAoBEIgPgJIgGAKIgMgIIgHAQg");
	this.shape_583.setTransform(1676,228.7);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#2B4918").s().p("AgjARIAfg0IAoBHg");
	this.shape_584.setTransform(1676.5,230.3);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#365620").s().p("AgQAiIgLAHIgKgIIgRAJIA2hfIA3BfIgVgNIgGAOIgSgLIgJAWg");
	this.shape_585.setTransform(1675.9,232.1);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#2B4918").s().p("Ag0ASIAqhJIA/Bvg");
	this.shape_586.setTransform(1677,234.7);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#365620").s().p("AgZA0IgRAKIgOgMIgaAOIBSiQIBTCQIgfgTIgLAUIgbgQIgNAgg");
	this.shape_587.setTransform(1676,237.2);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#2B4918").s().p("AhHAeIA8hnIBTCTg");
	this.shape_588.setTransform(1677.2,240.8);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#365620").s().p("AghBEIgWAOIgUgPIgiARIBti/IBuC/IgqgZIgOAcIgkgXIgQAsg");
	this.shape_589.setTransform(1676,244.2);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#664224").s().p("AgJAyQAMgBAAgDIAAhfIAHAAIAABfQAAAEgPAAg");
	this.shape_590.setTransform(1676.6,254.1);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#744C2B").s().p("AgQAuIAAhfIAhAAIAABfQAAAEgRAAQgQAAAAgEg");
	this.shape_591.setTransform(1675.9,254.1);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#2B4918").s().p("AgHAPIgFADIgEgDIgHAEIAXgqIAYAqIgJgGIgDAGIgIgFIgEAKg");
	this.shape_592.setTransform(1741.7,233.6);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#1E3B0C").s().p("AgVAMIAUggIAXApg");
	this.shape_593.setTransform(1741.9,234.5);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#2B4918").s().p("AgJAUIgHAEIgFgEIgKAFIAfg4IAgA4IgMgIIgEAJIgLgHIgFANg");
	this.shape_594.setTransform(1741.7,235.5);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#1E3B0C").s().p("AgcAOIAZgrIAgA7g");
	this.shape_595.setTransform(1742.1,236.8);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#2B4918").s().p("AgNAcIgJAGIgIgHIgOAHIAshOIAtBOIgRgKIgGALIgOgJIgHASg");
	this.shape_596.setTransform(1741.7,238.3);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#1E3B0C").s().p("AgrAOIAjg7IA0Bbg");
	this.shape_597.setTransform(1742.6,240.4);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#2B4918").s().p("AgUAqIgOAJIgMgKIgVALIBDh1IBEB1IgagQIgIASIgWgOIgLAag");
	this.shape_598.setTransform(1741.7,242.5);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#1E3B0C").s().p("Ag6AYIAxhUIBEB5g");
	this.shape_599.setTransform(1742.7,245.4);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#2B4918").s().p("AgbA4IgSALIgQgNIgcAPIBZicIBaCcIgigVIgLAXIgdgTIgOAkg");
	this.shape_600.setTransform(1741.7,248.2);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#664224").s().p("AABAmIAAhOIAGAAIAABOQAAADgNAAQAHAAAAgDg");
	this.shape_601.setTransform(1742.3,256.3);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#744C2B").s().p("AgMAmIAAhOIAaAAIAABOQAAADgOAAQgMAAAAgDg");
	this.shape_602.setTransform(1741.7,256.3);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#2B4918").s().p("AgHAPIgFADIgEgEIgHAEIAXgpIAYApIgJgFIgDAGIgIgFIgEAKg");
	this.shape_603.setTransform(1661.5,233.5);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#1E3B0C").s().p("AgVANIATghIAYApg");
	this.shape_604.setTransform(1661.7,234.3);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#2B4918").s().p("AgJAUIgHAEIgGgFIgKAGIAgg4IAhA4IgNgIIgEAIIgKgGIgGANg");
	this.shape_605.setTransform(1661.5,235.4);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#1E3B0C").s().p("AgcAOIAYgqIAhA5g");
	this.shape_606.setTransform(1661.9,236.7);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#2B4918").s().p("AgNAcIgJAGIgIgHIgOAIIAshOIAtBOIgRgLIgGAMIgOgJIgHARg");
	this.shape_607.setTransform(1661.5,238.1);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#1E3B0C").s().p("AgrAPIAjg7IA0BZg");
	this.shape_608.setTransform(1662.4,240.3);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#2B4918").s().p("AgUAqIgOAJIgMgKIgVALIBDh1IBEB1IgagQIgIARIgXgNIgKAbg");
	this.shape_609.setTransform(1661.5,242.4);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#1E3B0C").s().p("Ag6AZIAwhVIBFB5g");
	this.shape_610.setTransform(1662.5,245.2);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#2B4918").s().p("AgbA4IgSALIgQgNIgcAPIBZicIBaCcIgigVIgLAXIgdgSIgPAjg");
	this.shape_611.setTransform(1661.5,248);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#664224").s().p("AgHApQAKgBAAgDIAAhNIAFAAIAABNQAAAEgMAAg");
	this.shape_612.setTransform(1662,256.1);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#744C2B").s().p("AgNAlIAAhNIAbAAIAABNQgBAEgNAAQgMAAgBgEg");
	this.shape_613.setTransform(1661.5,256.1);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#AAB834").s().p("AnkhfIBAgEIAVgBIBKgCQGXABGUCJQg1AEgiARQgMAFgTARQgVASgJAGQmXirmfgbg");
	this.shape_614.setTransform(1731.3,260.9);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#ABC13B").s().p("AA8B5QgbAAgngQIhCgZQhYgag8gDQhCgEhBAQQgaAGhhAfQgvAPg0gNQg1gOghgjQgJgKgGgUQgGgUgBgVQEKhUETgSQGeAbGYCrQgEADgFABQgjAOg3gMIhZgdQhIgZgugHQhDgKg2ATQgYAIhHAuQg2AjgsAAIgCAAg");
	this.shape_615.setTransform(1696.9,263.4);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#90AA35").s().p("ANjItQgzhAhfhiQi/jCjginQrLoUsIg0QBOgGBRAAQNBAAMFIsQDyCuDODRQBoBpA2BFg");
	this.shape_616.setTransform(1801.4,306.4);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#9FBB3B").s().p("EghXAItIAigwQAtg8A3hCQCyjRDZiuQK5osNBAAQNAAAMFIsQDyCuDODRQBoBpA3BFg");
	this.shape_617.setTransform(1706.4,306.4);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#87A341").s().p("AFIBzQhMgKgYAAQgsAAghAHQkii+kpgkIBIgGIAXgBIAogBQFzAAFuD1IgKAAQgkAAg+gIg");
	this.shape_618.setTransform(1588.7,193.9);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#90AD45").s().p("AFkB2Qg5gRgXgCQgkgFgwAEIhVAIQgSACgqALQgnAKgUABQg1AChyguQgqgQglgHQgmgGgvADQgUABgsAFQgrAFgWABQgzABgdgPQD/ifEJgfQEmAkEiC+QgRADgUAHIgmATQgWAKgTAAIgCAAQgeAAgwgPg");
	this.shape_619.setTransform(1548.6,195.7);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#6D8C38").s().p("AL+OQQgthphTigQiolAjEkRQpztrqqhTQBGgHBBgBQGRABGKEdQE6DkEoGOQDTEdC2FWQBaCsAwBxg");
	this.shape_620.setTransform(1648.7,272.8);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#7C9D40").s().p("A9NOQQAohxBNisQCclWC/kdQEKmOErjkQF0kdGSgBQGQABGKEdQE7DkEoGOQDTEdC2FWQBaCsAwBxg");
	this.shape_621.setTransform(1565.3,272.8);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#416328").s().p("AgKAWIgHAFIgHgGIgKAGIAig9IAkA9IgOgIIgEAJIgMgHIgFAOg");
	this.shape_622.setTransform(212.7,199.1);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#31501C").s().p("AgfATIAcgxIAjA9g");
	this.shape_623.setTransform(213.1,200.4);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#416328").s().p("AgOAdIgKAHIgIgIIgOAJIAuhSIAvBSIgSgLIgGALIgPgJIgHATg");
	this.shape_624.setTransform(212.7,201.9);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#31501C").s().p("AgqAUIAkg/IAxBXg");
	this.shape_625.setTransform(213.4,203.8);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#416328").s().p("AgTApIgOAJIgMgKIgVALIBChzIBCBzIgZgPIgIAQIgWgNIgKAag");
	this.shape_626.setTransform(212.7,206);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#31501C").s().p("Ag/AVIAzhXIBMCFg");
	this.shape_627.setTransform(214,209.1);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#416328").s().p("AgeA+IgUAMIgSgOIgeAQIBiisIBkCsIgmgWIgNAYIgggUIgPAog");
	this.shape_628.setTransform(212.7,212.2);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#31501C").s().p("AhVAkIBHh8IBkCxg");
	this.shape_629.setTransform(214.2,216.4);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#416328").s().p("AgoBRIgbASIgXgTIgpAUICDjkICEDkIgygdIgQAgIgsgaIgUA0g");
	this.shape_630.setTransform(212.7,220.5);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#664224").s().p("AgLA8QAPgBAAgEIAAhyIAIAAIAAByQAAAFgTAAg");
	this.shape_631.setTransform(213.5,232.3);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#744C2B").s().p("AgTA3IAAhyIAnAAIAAByQAAAFgUAAQgTAAAAgFg");
	this.shape_632.setTransform(212.7,232.3);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#416328").s().p("AgKAWIgHAEIgHgEIgLAFIAjg9IAkA9IgOgIIgFAJIgLgHIgGAOg");
	this.shape_633.setTransform(187.7,193.8);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#31501C").s().p("AgfATIAcgxIAjA9g");
	this.shape_634.setTransform(188.1,195);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#416328").s().p("AgOAeIgKAFIgIgGIgOAHIAuhSIAvBSIgSgLIgFAMIgQgKIgHAUg");
	this.shape_635.setTransform(187.7,196.6);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#31501C").s().p("AgqAVIAkg/IAxBVg");
	this.shape_636.setTransform(188.4,198.5);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#416328").s().p("AgTApIgOAJIgMgKIgUALIBBhzIBCBzIgYgQIgJARIgWgNIgKAag");
	this.shape_637.setTransform(187.7,200.6);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#31501C").s().p("Ag/AVIAzhXIBMCFg");
	this.shape_638.setTransform(189,203.7);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#416328").s().p("AgeA+IgUANIgSgPIgeAQIBiitIBjCtIglgXIgMAZIghgUIgPAog");
	this.shape_639.setTransform(187.7,206.8);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#31501C").s().p("AhWAkIBIh8IBkCxg");
	this.shape_640.setTransform(189.2,211);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#416328").s().p("AgoBSIgaARIgYgTIgpAVICDjlICEDlIgygeIgQAhIgrgbIgVA0g");
	this.shape_641.setTransform(187.7,215.1);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#664224").s().p("AgLA8QAPgBAAgEIAAhyIAIAAIAAByQAAAFgTAAg");
	this.shape_642.setTransform(188.5,227);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#744C2B").s().p("AgTA3IAAhyIAnAAIAAByQAAAFgUAAQgTAAAAgFg");
	this.shape_643.setTransform(187.7,227);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#416328").s().p("AgKAWIgHAEIgHgFIgLAGIAjg9IAjA9IgNgIIgFAJIgLgHIgGAOg");
	this.shape_644.setTransform(161.7,191.8);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#31501C").s().p("AgfASIAcgwIAjA9g");
	this.shape_645.setTransform(162.1,193);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#416328").s().p("AgNAdIgLAGIgIgHIgOAIIAuhSIAvBSIgSgLIgFAMIgQgKIgHATg");
	this.shape_646.setTransform(161.7,194.6);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#31501C").s().p("AgqAUIAkg/IAxBXg");
	this.shape_647.setTransform(162.4,196.4);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#416328").s().p("AgTApIgOAJIgMgKIgUALIBBhzIBDBzIgZgPIgJAQIgWgNIgKAag");
	this.shape_648.setTransform(161.7,198.6);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#31501C").s().p("Ag/AVIAzhXIBMCFg");
	this.shape_649.setTransform(163,201.7);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#416328").s().p("AgeA+IgUANIgSgPIgfAQIBjisIBjCsIglgXIgMAZIghgUIgPAng");
	this.shape_650.setTransform(161.7,204.8);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#31501C").s().p("AhWAkIBIh8IBkCxg");
	this.shape_651.setTransform(163.2,209);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#416328").s().p("AgoBSIgaARIgYgTIgpAVICDjmICEDmIgygeIgQAhIgrgbIgVA0g");
	this.shape_652.setTransform(161.7,213.1);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#664224").s().p("AgLA8QAPgBAAgEIAAhyIAIAAIAAByQAAAFgTAAg");
	this.shape_653.setTransform(162.5,225);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#744C2B").s().p("AgTA3IAAhyIAnAAIAAByQAAAFgUAAQgTAAAAgFg");
	this.shape_654.setTransform(161.7,225);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#365620").s().p("AgIATIgGADIgFgEIgKAEIAdgyIAeAyIgMgGIgDAHIgKgFIgEALg");
	this.shape_655.setTransform(231,198.7);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#2B4918").s().p("AgaAPIAYgoIAdAzg");
	this.shape_656.setTransform(231.3,199.7);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#365620").s().p("AgMAYIgIAGIgGgGIgNAGIAnhEIAnBEIgPgJIgEAKIgOgIIgFAQg");
	this.shape_657.setTransform(231.1,201);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#2B4918").s().p("AgjARIAeg0IApBHg");
	this.shape_658.setTransform(231.6,202.5);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#365620").s().p("AgQAjIgLAHIgKgIIgRAJIA2hhIA3BhIgVgOIgGAPIgSgLIgJAVg");
	this.shape_659.setTransform(231,204.4);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#2B4918").s().p("Ag0ASIAqhJIA/Bvg");
	this.shape_660.setTransform(232.1,206.9);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#365620").s().p("AgZAzIgQALIgPgMIgaANIBSiPIBTCPIgfgSIgLAUIgbgQIgMAgg");
	this.shape_661.setTransform(231,209.5);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#2B4918").s().p("AhHAdIA7hmIBUCTg");
	this.shape_662.setTransform(232.3,213);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#365620").s().p("AghBEIgXAPIgTgQIgiARIBti/IBuC/IgqgZIgNAcIgkgXIgRAsg");
	this.shape_663.setTransform(231.1,216.4);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#664224").s().p("AgJAyQAMgBAAgDIAAhfIAHAAIAABfQAAAEgPAAg");
	this.shape_664.setTransform(231.7,226.3);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#744C2B").s().p("AgQAuIAAhfIAhAAIAABfQAAAEgRAAQgQAAAAgEg");
	this.shape_665.setTransform(231,226.3);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#365620").s().p("AgIASIgGAEIgGgEIgJAFIAdgzIAdAzIgKgHIgFAIIgJgHIgEAMg");
	this.shape_666.setTransform(202.7,189.3);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#2B4918").s().p("AgaAQIAYgpIAdAzg");
	this.shape_667.setTransform(203,190.3);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#365620").s().p("AgLAYIgIAGIgHgGIgNAGIAnhEIAnBEIgPgJIgEAKIgOgIIgFAQg");
	this.shape_668.setTransform(202.7,191.6);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#2B4918").s().p("AgjARIAeg0IApBHg");
	this.shape_669.setTransform(203.3,193.2);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#365620").s().p("AgQAiIgLAHIgLgIIgQAJIA2hfIA4BfIgVgNIgHAOIgSgLIgJAWg");
	this.shape_670.setTransform(202.7,195);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#2B4918").s().p("Ag0ASIAqhJIA/Bvg");
	this.shape_671.setTransform(203.8,197.5);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#365620").s().p("AgYA0IgSAKIgPgMIgZAOIBSiQIBTCQIgggTIgKAUIgbgQIgMAgg");
	this.shape_672.setTransform(202.7,200.1);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#2B4918").s().p("AhHAeIA7hnIBUCTg");
	this.shape_673.setTransform(204,203.6);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#365620").s().p("AghBEIgWAPIgUgQIgiARIBti/IBuC/IgqgZIgNAcIgkgWIgRArg");
	this.shape_674.setTransform(202.7,207);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#664224").s().p("AgJAyQAMgBAAgDIAAhfIAHAAIAABfQAAAEgQAAg");
	this.shape_675.setTransform(203.4,216.9);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#744C2B").s().p("AgPAuIAAhfIAgAAIAABfQgBAEgQAAQgPAAAAgEg");
	this.shape_676.setTransform(202.7,216.9);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#365620").s().p("AgIATIgGADIgFgEIgKAEIAdgyIAeAyIgMgGIgDAHIgKgGIgEAMg");
	this.shape_677.setTransform(147,192.6);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#2B4918").s().p("AgaAQIAYgpIAdAzg");
	this.shape_678.setTransform(147.3,193.7);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#365620").s().p("AgLAYIgJAGIgHgGIgMAGIAnhEIAoBEIgQgJIgEAKIgOgIIgGAQg");
	this.shape_679.setTransform(147.1,194.9);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#2B4918").s().p("AgjARIAfg0IAoBHg");
	this.shape_680.setTransform(147.6,196.5);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#365620").s().p("AgQAiIgLAHIgKgIIgRAJIA2hfIA3BfIgVgMIgGANIgSgLIgJAWg");
	this.shape_681.setTransform(147,198.3);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#2B4918").s().p("Ag0ARIAqhIIA/Bvg");
	this.shape_682.setTransform(148.1,200.9);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#365620").s().p("AgZA0IgQAKIgPgMIgaANIBSiPIBTCPIgfgTIgLAVIgbgRIgMAhg");
	this.shape_683.setTransform(147,203.5);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#2B4918").s().p("AhHAeIA8hnIBTCTg");
	this.shape_684.setTransform(148.3,207);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#365620").s().p("AghBEIgXAOIgTgQIgiASIBti/IBuC/IgqgZIgOAbIgkgWIgQAsg");
	this.shape_685.setTransform(147.1,210.4);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#664224").s().p("AgJAyQAMgBAAgDIAAhfIAHAAIAABfQAAAEgPAAg");
	this.shape_686.setTransform(147.7,220.3);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#744C2B").s().p("AgQAuIAAhfIAhAAIAABfQAAAEgRAAQgQAAAAgEg");
	this.shape_687.setTransform(147,220.3);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#2B4918").s().p("AgGAPIgFADIgFgDIgHADIAXgpIAYApIgJgFIgDAGIgIgFIgDAKg");
	this.shape_688.setTransform(132.5,199.7);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#1E3B0C").s().p("AgVANIAUghIAXApg");
	this.shape_689.setTransform(132.8,200.5);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#2B4918").s().p("AgJAUIgHAEIgFgFIgKAGIAfg4IAhA4IgNgIIgEAIIgKgGIgGANg");
	this.shape_690.setTransform(132.6,201.6);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#1E3B0C").s().p("AgcAOIAZgrIAhA7g");
	this.shape_691.setTransform(133,202.9);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#2B4918").s().p("AgNAcIgJAGIgIgHIgPAIIAthOIAtBOIgRgLIgFAMIgPgJIgHARg");
	this.shape_692.setTransform(132.6,204.3);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#1E3B0C").s().p("AgrAOIAjg7IAzBag");
	this.shape_693.setTransform(133.5,206.5);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#2B4918").s().p("AgUAqIgOAIIgMgJIgVAKIBDh1IBEB1IgagPIgIARIgWgOIgLAbg");
	this.shape_694.setTransform(132.6,208.6);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#1E3B0C").s().p("Ag6AYIAxhTIBEB3g");
	this.shape_695.setTransform(133.6,211.4);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#2B4918").s().p("AgbA4IgSALIgQgNIgcAPIBZicIBaCcIgigVIgLAXIgegSIgOAjg");
	this.shape_696.setTransform(132.6,214.2);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#664224").s().p("AgHApQAJgBAAgCIAAhOIAGAAIAABOQAAADgMAAg");
	this.shape_697.setTransform(133.1,222.3);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#744C2B").s().p("AgMAmIAAhOIAaAAIAABOQAAADgOAAQgMAAAAgDg");
	this.shape_698.setTransform(132.6,222.3);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#365620").s().p("AgIASIgGAFIgGgFIgJAFIAdgzIAeAzIgLgHIgFAIIgJgHIgEAMg");
	this.shape_699.setTransform(173.7,187.9);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#2B4918").s().p("AgaAQIAYgpIAdAzg");
	this.shape_700.setTransform(174,189);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#365620").s().p("AgLAZIgIAFIgIgGIgMAGIAnhEIAoBEIgQgJIgEAKIgOgIIgFAQg");
	this.shape_701.setTransform(173.7,190.2);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#2B4918").s().p("AgjARIAeg0IApBHg");
	this.shape_702.setTransform(174.3,191.8);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#365620").s().p("AgQAiIgMAHIgKgIIgRAJIA3hfIA4BfIgWgMIgGANIgSgLIgJAWg");
	this.shape_703.setTransform(173.7,193.6);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#2B4918").s().p("Ag0ARIAqhIIA/Bvg");
	this.shape_704.setTransform(174.8,196.2);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#365620").s().p("AgYAzIgRALIgQgMIgZANIBSiPIBTCPIgggTIgKAVIgbgRIgMAhg");
	this.shape_705.setTransform(173.7,198.8);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#2B4918").s().p("AhHAeIA7hnIBUCTg");
	this.shape_706.setTransform(175,202.3);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#365620").s().p("AghBEIgWAOIgUgQIgiASIBti/IBuC/IgqgZIgNAbIgkgWIgRAsg");
	this.shape_707.setTransform(173.7,205.7);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#664224").s().p("AgJAyQAMgBAAgDIAAhfIAHAAIAABfQAAAEgQAAg");
	this.shape_708.setTransform(174.4,215.6);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#744C2B").s().p("AgPAuIAAhfIAfAAIAABfQAAAEgQAAQgPAAAAgEg");
	this.shape_709.setTransform(173.7,215.6);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#AAB834").s().p("ADuCPQgRgEgmgOQlZjZlegrICsgLQGuAAGnEGIhFgIQgfgBhIAZQgrAPggAAQgPAAgNgEg");
	this.shape_710.setTransform(214.3,231.1);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#ABC13B").s().p("AD/CcQg6gYgcgIQhWgXhpAZQhHAWgfADQgzAGguggIg6gpQgigWgegIQgYgGguAKIhRAUQhmAWgag8QgDgIgBgIQEQiaEfgkQFdArFZDZQgwgRgYgFQgogIgiAHQgeAHgoAkQgrAngYAIQgPAGgSAAQgZAAgfgLg");
	this.shape_711.setTransform(169.9,234.2);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#90AA35").s().p("ALGLYQgshShRh9Qikj7jAjXQpmqxqdhSQBYgLBUAAQGSAAGKDkQE6C1EoE+QDTDkC1EQQBbCJAwBbg");
	this.shape_712.setTransform(268.5,289.3);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#9FBB3B").s().p("A9NLYQAohbBOiJQCbkQC+jkQEMk+Eqi1QF0jkGSAAQGQAAGKDkQE7C1EoE+QDTDkC2EQQBaCJAwBbg");
	this.shape_713.setTransform(187,289.3);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#416328").s().p("AgKAWIgHAEIgGgEIgLAFIAig9IAjA9IgNgIIgEAJIgMgHIgFAOg");
	this.shape_714.setTransform(577.4,222.5);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#31501C").s().p("AgfASIAcgwIAjA+g");
	this.shape_715.setTransform(577.7,223.7);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#416328").s().p("AgNAdIgKAHIgIgHIgQAHIAvhSIAwBSIgSgLIgGAMIgQgJIgHATg");
	this.shape_716.setTransform(577.4,225.2);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#31501C").s().p("AgqAUIAkg/IAxBXg");
	this.shape_717.setTransform(578,227.1);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#416328").s().p("AgUApIgNAJIgMgKIgVALIBChzIBDBzIgagPIgIAQIgVgNIgKAag");
	this.shape_718.setTransform(577.4,229.3);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#31501C").s().p("Ag/AVIAzhXIBMCFg");
	this.shape_719.setTransform(578.7,232.4);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#416328").s().p("AgeA+IgTANIgSgPIggAQIBjisIBkCsIgmgWIgMAYIghgUIgPAng");
	this.shape_720.setTransform(577.4,235.5);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#31501C").s().p("AhWAkIBHh8IBlCxg");
	this.shape_721.setTransform(578.9,239.7);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#416328").s().p("AgoBSIgbARIgXgTIgpAVICDjmICEDmIgygeIgQAhIgrgbIgUA0g");
	this.shape_722.setTransform(577.4,243.8);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#664224").s().p("AgLA8QAPgBAAgEIAAhyIAIAAIAAByQAAAFgTAAg");
	this.shape_723.setTransform(578.2,255.7);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#744C2B").s().p("AgTA3IAAhyIAnAAIAAByQAAAFgUAAQgTAAAAgFg");
	this.shape_724.setTransform(577.4,255.7);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#416328").s().p("AgKAWIgIAFIgGgGIgLAGIAjg9IAjA9IgNgIIgFAJIgLgIIgGAPg");
	this.shape_725.setTransform(547.4,227.9);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#31501C").s().p("AgfATIAdgyIAiA+g");
	this.shape_726.setTransform(547.7,229.2);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#416328").s().p("AgOAdIgKAHIgIgHIgOAHIAuhSIAvBSIgSgLIgFAMIgQgJIgIATg");
	this.shape_727.setTransform(547.4,230.7);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#31501C").s().p("AgqAUIAlg/IAwBXg");
	this.shape_728.setTransform(548,232.6);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#416328").s().p("AgTApIgOAJIgMgKIgUALIBBhzIBDBzIgagPIgIAQIgWgNIgKAag");
	this.shape_729.setTransform(547.4,234.7);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#31501C").s().p("Ag/AVIAzhXIBMCFg");
	this.shape_730.setTransform(548.6,237.9);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#416328").s().p("AgeA+IgUAMIgSgOIgfAQIBjitIBkCtIgmgXIgMAaIghgUIgPAmg");
	this.shape_731.setTransform(547.3,240.9);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#31501C").s().p("AhWAkIBIh8IBkCxg");
	this.shape_732.setTransform(548.9,245.1);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#416328").s().p("AgoBSIgaARIgYgUIgpAWICDjlICEDlIgygeIgQAhIgrgbIgVA1g");
	this.shape_733.setTransform(547.3,249.2);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#664224").s().p("AgLA8QAOgBAAgEIAAhyIAJAAIAAByQAAAFgTAAg");
	this.shape_734.setTransform(548.1,261.1);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#744C2B").s().p("AgTA3IAAhyIAnAAIAAByQAAAFgUAAQgTAAAAgFg");
	this.shape_735.setTransform(547.4,261.1);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#365620").s().p("AgIASIgGAEIgFgEIgJAFIAcgzIAdAzIgLgHIgDAIIgKgHIgFAMg");
	this.shape_736.setTransform(531.5,226.4);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#2B4918").s().p("AgaAPIAYgoIAdAzg");
	this.shape_737.setTransform(531.8,227.5);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#365620").s().p("AgLAYIgIAGIgIgGIgLAGIAmhEIAnBEIgOgJIgGAKIgMgIIgHAQg");
	this.shape_738.setTransform(531.5,228.7);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#2B4918").s().p("AgjARIAfg0IAoBHg");
	this.shape_739.setTransform(532.1,230.3);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#365620").s().p("AgQAiIgLAHIgKgIIgRAJIA2hfIA3BfIgUgNIgIAOIgSgLIgIAWg");
	this.shape_740.setTransform(531.5,232.1);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#2B4918").s().p("Ag0ASIAqhJIA/Bvg");
	this.shape_741.setTransform(532.6,234.7);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#365620").s().p("AgZA0IgRAKIgOgMIgaAOIBSiQIBTCQIgfgTIgKAUIgcgQIgNAgg");
	this.shape_742.setTransform(531.5,237.2);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#2B4918").s().p("AhHAeIA8hnIBTCTg");
	this.shape_743.setTransform(532.8,240.8);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#365620").s().p("AghBEIgWAOIgUgPIgiARIBti/IBuC/IgpgZIgOAcIgkgXIgRAsg");
	this.shape_744.setTransform(531.5,244.2);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#664224").s().p("AgJAyQAMgBAAgDIAAhfIAHAAIAABfQAAAEgPAAg");
	this.shape_745.setTransform(532.2,254.1);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#744C2B").s().p("AgQAuIAAhfIAhAAIAABfQAAAEgRAAQgQAAAAgEg");
	this.shape_746.setTransform(531.5,254.1);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#2B4918").s().p("AgGAPIgFADIgFgDIgHAEIAXgqIAYAqIgJgGIgDAGIgIgFIgEAKg");
	this.shape_747.setTransform(597.2,233.6);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#1E3B0C").s().p("AgVAMIAUggIAXApg");
	this.shape_748.setTransform(597.5,234.5);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#2B4918").s().p("AgJAUIgGAEIgGgEIgKAFIAfg4IAgA4IgMgIIgEAJIgKgHIgFANg");
	this.shape_749.setTransform(597.2,235.5);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#1E3B0C").s().p("AgdAOIAZgrIAiA7g");
	this.shape_750.setTransform(597.7,236.8);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#2B4918").s().p("AgNAcIgJAGIgIgHIgOAHIAshOIAtBOIgRgKIgFALIgPgJIgHASg");
	this.shape_751.setTransform(597.2,238.3);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#1E3B0C").s().p("AgqAOIAig7IAzBbg");
	this.shape_752.setTransform(598.1,240.4);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#2B4918").s().p("AgUAqIgOAJIgMgKIgVALIBDh1IBEB1IgagQIgIASIgWgOIgLAag");
	this.shape_753.setTransform(597.2,242.5);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#1E3B0C").s().p("Ag6AYIAxhUIBEB5g");
	this.shape_754.setTransform(598.3,245.4);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#2B4918").s().p("AgbA4IgSALIgQgNIgcAPIBZicIBaCcIgigVIgLAXIgegTIgNAkg");
	this.shape_755.setTransform(597.2,248.2);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#664224").s().p("AgHApQAIAAAAgDIAAhOIAGAAIAABOQAAADgMAAg");
	this.shape_756.setTransform(597.9,256.3);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#744C2B").s().p("AgNAmIAAhOIAbAAIAABOQAAADgOAAQgNAAAAgDg");
	this.shape_757.setTransform(597.2,256.3);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#2B4918").s().p("AgHAPIgEADIgFgEIgHAEIAXgpIAYApIgJgFIgDAGIgIgFIgEAKg");
	this.shape_758.setTransform(517,233.5);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#1E3B0C").s().p("AgVANIATghIAYApg");
	this.shape_759.setTransform(517.3,234.3);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#2B4918").s().p("AgJAUIgHAEIgFgFIgKAGIAfg4IAgA4IgMgIIgEAIIgLgGIgEANg");
	this.shape_760.setTransform(517,235.4);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#1E3B0C").s().p("AgcAOIAYgqIAhA5g");
	this.shape_761.setTransform(517.5,236.7);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#2B4918").s().p("AgNAcIgJAGIgIgHIgOAIIAshOIAtBOIgRgLIgFAMIgPgJIgHARg");
	this.shape_762.setTransform(517,238.1);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#1E3B0C").s().p("AgrAPIAjg7IA0BZg");
	this.shape_763.setTransform(517.9,240.3);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#2B4918").s().p("AgUAqIgOAJIgMgKIgVALIBDh1IBEB1IgagQIgIARIgWgNIgLAbg");
	this.shape_764.setTransform(517,242.4);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#1E3B0C").s().p("Ag6AZIAwhVIBFB5g");
	this.shape_765.setTransform(518.1,245.2);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#2B4918").s().p("AgaA4IgSALIgRgNIgcAPIBZicIBaCcIgigVIgLAXIgdgSIgOAjg");
	this.shape_766.setTransform(517,248);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#664224").s().p("AgHApQAJgBAAgDIAAhNIAGAAIAABNQAAAEgNAAg");
	this.shape_767.setTransform(517.6,256.1);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#744C2B").s().p("AgNAlIAAhNIAbAAIAABNQAAAEgOAAQgNAAAAgEg");
	this.shape_768.setTransform(517,256.1);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#AAB834").s().p("AnkhfIA/gEIBggDQGWABGUCJQg0AEgiARQgMAFgTARQgUASgKAGQmXirmfgbg");
	this.shape_769.setTransform(586.8,260.9);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#ABC13B").s().p("AA8B6QgbgBgngPIhCgaQhXgag+gDQhBgDhBAPQgaAGhiAfQguAPg1gNQg1gNgggkQgJgKgGgUQgGgUgBgVQEQhWEagRIgNABQGeAcGYCqIgJAFQgjAOg3gNQgMgDhNgaQhIgZgugGQhDgKg3ASQgXAIhGAuQg2AkguAAIgBAAg");
	this.shape_770.setTransform(552.4,263.3);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#90AA35").s().p("ANiItQgyhAhghiQi+jCjginQrKoUsJg0QBOgGBRAAQNBAAMFIsQDxCuDPDRQBnBpA3BFg");
	this.shape_771.setTransform(656.9,306.4);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#9FBB3B").s().p("EghXAItQAuhFBYhpQCyjRDaiuQK4osNBAAQNAAAMFIsQDyCuDODRQBoBpA3BFg");
	this.shape_772.setTransform(562,306.4);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#87A341").s().p("AFIBzQhNgKgXAAQgsAAgiAHQkhi+kpgkICHgIQFzAAFuD1IgKAAQgkAAg+gIg");
	this.shape_773.setTransform(399.8,193.9);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#90AD45").s().p("AFkB2Qg4gRgXgCQglgFgwAEIhVAIQgSACgqALQgmAKgVABQg2AChyguQgpgQglgHQgmgGguADQgVABgsAFQgqAFgXABQgzABgcgPQD9ifEJgfQEnAkEiC+QgSAEgTAGIgmATQgVAKgUAAIgCAAQgdAAgxgPg");
	this.shape_774.setTransform(359.6,195.7);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#6D8C38").s().p("AL+OQQgthphTigQiolAjEkRQpztrqqhTQBGgHBBgBQGRABGKEdQE6DkEoGOQDTEdC2FWQBaCsAwBxg");
	this.shape_775.setTransform(459.8,272.8);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#7C9D40").s().p("A9NOQQAohxBNisQCclWC/kdQEKmOErjkQF0kdGSgBQGQABGKEdQE7DkEoGOQDTEdC2FWQBaCsAwBxg");
	this.shape_776.setTransform(376.4,272.8);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#84A644").s().p("AhxjtIAAgBIDiHSIgwgHQgagDgXADQgOACgRAGIgdAJg");
	this.shape_777.setTransform(1201.4,154.5);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#92B64B").s().p("AAhDqQgUgGg2gWQgogRg6AEIDSmyIAAABIBFHbQgOAEgJABQgMACgOAAQgcAAgegIg");
	this.shape_778.setTransform(1182.9,154.8);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#73933B").s().p("AjOQQMgEsggfIAAgBMAP1Aggg");
	this.shape_779.setTransform(1240.7,234.7);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#82A443").s().p("Av0QQMAP0gggMAP1Aggg");
	this.shape_780.setTransform(1190,234.7);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#82A443").s().p("Av0QQMAP0gggMAP1Aggg");
	this.shape_781.setTransform(1190,234.7);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#C2C4C6").s().p("AALDEQgHgDgagPIhIl6IC9GEQgRAKgXACIgPABQgPAAgOgFg");
	this.shape_782.setTransform(904.6,117.6);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#D3D5D6").s().p("ABRDBQgagQgQgIQgdgNhDALQg+AJgbgXQgFgEgHgOQgHgNgGgGICbk8IC8GEQgRAKgXACIgOABQgUAAgRgIg");
	this.shape_783.setTransform(896.9,117.6);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#ABADB0").s().p("AhtQRMgGMgghMAPzAghg");
	this.shape_784.setTransform(945.8,201.6);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#C7C8CA").s().p("Av0QRMAP0gghMAP1Aghg");
	this.shape_785.setTransform(895.1,201.6);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#C2C4C6").s().p("AAtDZIgigFIghgHIhHmmIAAgBIC7G1IgQAAQgSAAgPgCg");
	this.shape_786.setTransform(1827.5,109.3);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#D3D5D6").s().p("AhMDXIgxgRIC0mkIBHGnQgzgJgiAIQgHACgeAMQgTAIgTABIgCAAQgPAAgZgIg");
	this.shape_787.setTransform(1812.6,109.8);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#ABADB0").s().p("AhtSbMgGMgk1MAPzAk1g");
	this.shape_788.setTransform(1868.7,205.4);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#C7C8CA").s().p("Av0SbMAP0gk1MAP1Ak1g");
	this.shape_789.setTransform(1818.1,205.4);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#C2C4C6").s().p("AAtDZIgjgFIgggHIhHmmIAAgBIC7G1IgPAAQgTAAgPgCg");
	this.shape_790.setTransform(1284.7,109.3);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#D3D5D6").s().p("AhMDXIgxgRIC0mkIBHGnQgzgJgiAIIgkAOQgUAIgTABIgCAAQgPAAgZgIg");
	this.shape_791.setTransform(1269.8,109.8);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#ABADB0").s().p("AhuSbMgGMgk1MAP0Ak1g");
	this.shape_792.setTransform(1325.9,205.4);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#C7C8CA").s().p("Av0SbMAP0gk1MAP1Ak1g");
	this.shape_793.setTransform(1275.3,205.4);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#84A644").s().p("AhwkJIAAgBIDiIIQgngGgKgBQgZgDgYADQgPACgQAHIgdALg");
	this.shape_794.setTransform(123,117.3);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#92B64B").s().p("AAgEFQgUgGg1gZQgogSg6AEIDTnmIAAABIBEIUQgKAEgMACQgNACgNAAQgcAAgggKg");
	this.shape_795.setTransform(104.5,117.7);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#73933B").s().p("AjOSMMgEsgkWIAAgBMAP1AkXg");
	this.shape_796.setTransform(162.3,207.1);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#82A443").s().p("Av0SMMAP0gkXMAP1AkXg");
	this.shape_797.setTransform(111.7,207.1);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#82A443").s().p("Av0SMMAP0gkXMAP1AkXg");
	this.shape_798.setTransform(111.7,207.1);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#C2C4C6").s().p("AALDbQgHgDgZgSIhJmmIC9GyQgPAKgYAEIgOABQgRAAgOgGg");
	this.shape_799.setTransform(201.1,90.8);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#D3D5D6").s().p("ABRDXQgZgRgQgJQgdgPhEAMQg9ALgcgaQgFgFgHgPQgHgPgGgGICaliIC9GyQgPAKgYAEIgNABQgVAAgSgKg");
	this.shape_800.setTransform(193.4,90.8);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#ABADB0").s().p("AhtSMMgGNgkXMAP1AkXg");
	this.shape_801.setTransform(242.3,184.7);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#C7C8CA").s().p("Av0SMMAP0gkXMAP1AkXg");
	this.shape_802.setTransform(191.7,184.7);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#C2C4C6").s().p("AAtDzIhDgNIhHnaIC7HpIgMAAQgTAAgSgCg");
	this.shape_803.setTransform(275.8,24.5);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#D3D5D6").s().p("AhMDwIgxgTICznWIBIHaQgxgKgjAJQgJADgdAMQgTAKgUAAIgBABQgPAAgZgKg");
	this.shape_804.setTransform(261,25);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#ABADB0").s().p("AhtUnMgGNgpNMAP1ApNg");
	this.shape_805.setTransform(317.1,131.9);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#C7C8CA").s().p("Av0UnMAP0gpNMAP1ApNg");
	this.shape_806.setTransform(266.4,131.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scenery, new cjs.Rectangle(0,0,1920,436.5), null);


(lib.CloudsCached = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7DFE3").s().p("AA6B2QAbgVAAgiQAAgegVgVQgUgTgdgBQgJABgIACQgIgqgggbQghgdgrAAIgLACQAagQAfAAQArAAAgAcQAgAbAHArQAJgDAKAAQAcAAAVAVQAVATAAAdQAAAdgVAWQgVAUgcAAg");
	this.shape.setTransform(4904.6,38);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDEDEE").s().p("AkcCJQgegBgUgUQgVgVABgdQgBgdAVgVQAUgUAeABIAEAAQACg3AognQAngnA3AAQAjABAeAQQAeARATAcQAXgKAXAAQAfgBAaARQAigfAtAAQArAAAhAcQAgAcAHAqQAJgDAKABQAcgBAVAUQAVAVAAAdQAAAdgVAVQgVAUgcABg");
	this.shape_1.setTransform(4882.1,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D7DFE3").s().p("AA4BzQAbgUAAgiQAAgdgUgUQgUgTgdAAQgKAAgGACQgHgpgggaQgggcgqAAIgLABQAagPAeAAQAqAAAfAbQAfAbAHApQAIgDAKAAQAcAAAUAVQAUASAAAdQAAAdgUAUQgUAUgcAAg");
	this.shape_2.setTransform(5345.9,84.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDEDEE").s().p("AkVCFQgcAAgVgUQgUgUAAgcQAAgdAUgUQAVgTAcAAIAFAAQABg2AngmQAmglA2AAQAiAAAeAQQAcAQASAcQAWgKAYAAQAfAAAZAQQAggeAsAAQAqAAAgAbQAgAbAHApQAHgCAKAAQAdAAAUATQAUAUAAAdQAAAcgUAUQgUAUgdAAg");
	this.shape_3.setTransform(5323.9,82.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D7DFE3").s().p("ABuDiQAZgSAOgcQAOgdgBggQABg4gngnQgogng4AAQgSAAgPAFQgOhQg+g1Qg/g2hSAAIgXABQA0gdA7AAQBSAAA+A1QA9A1AOBQQARgEASAAQA4AAAnAnQAnAnAAA4QAAA4gnAoQgnAng4AAg");
	this.shape_4.setTransform(5266.2,29.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EDEDEE").s().p("AohEGQg4AAgngoQgogoAAg3QAAg4AogpQAngmA4AAIAJABQAEhqBLhKQBMhJBpAAQBDgBA6AhQA4AfAkA3QArgVAvAAQA7AAAzAfQBBg6BVAAQBSAAA/A2QA9A0APBQQAQgEASAAQA4AAAnAmQAnApAAA4QAAA3gnAoQgnAog4AAg");
	this.shape_5.setTransform(5223.2,26.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D7DFE3").s().p("ABTCrQAogfAAgyQAAgqgegeQgegdgqAAQgMAAgNADQgLg8gugoQgwgpg+AAIgRABQAngWAsAAQA+AAAvAoQAvAoAKA9QAMgDAOAAQArAAAdAeQAeAcAAArQAAAqgeAeQgdAegrAAg");
	this.shape_6.setTransform(4785.2,102.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EDEDEE").s().p("AmdDGQgpAAgegeQgegeAAgrQAAgqAegeQAegdApAAIAIAAQAChPA5g4QA5g4BQAAQAzAAArAZQArAXAcAqQAfgQAkAAQAtAAAnAYQAwgtBBABQA+AAAwAoQAvAoAKA9QAMgDAOgBQAqAAAeAdQAeAeAAAqQAAArgeAeQgeAegqAAg");
	this.shape_7.setTransform(4752.7,100);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D7DFE3").s().p("ABTCrQAogfAAgyQAAgqgegeQgegdgqAAQgMAAgNADQgLg8gugoQgwgpg+AAIgRABQAngWAsAAQA+AAAvAoQAvAoAKA9QAMgDAOAAQArAAAdAeQAeAcAAArQAAAqgeAeQgdAegrAAg");
	this.shape_8.setTransform(5048.3,102.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EDEDEE").s().p("AmdDGQgqAAgdgeQgegeAAgrQAAgqAegeQAdgdAqAAIAHAAQADhPA5g4QA6g4BPAAQAyAAAsAZQAsAXAaAqQAhgQAjAAQAtAAAmAYQAxgtBBABQA+AAAwAoQAuAoALA9QAMgDAOgBQAqAAAeAdQAeAeAAAqQAAArgeAeQgeAegqAAg");
	this.shape_9.setTransform(5015.8,100);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D7DFE3").s().p("ABuDiQAZgTAOgbQAOgdAAggQAAg4gogoQgogmg3AAQgQAAgRAFQgOhQg/g1Qg+g2hTAAIgWABQA0gdA6AAQBTAAA9A1QA+A1AOBQQAQgEASAAQA4AAAoAnQAnAnAAA4QAAA4gnAoQgoAng4AAg");
	this.shape_10.setTransform(3717,44.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EDEDEE").s().p("AohEGQg4AAgngoQgogoAAg4QAAg4AognQAngnA4AAIAJABQAEhqBLhKQBLhKBqAAQBDAAA6AhQA5AfAjA3QAtgVAtAAQA6AAA0AfQAegbAmgPQAngQArAAQBSAAA/A2QA+A1AOBQQAQgFASAAQA4AAAnAnQAoAnAAA4QAAA5goAnQgnAog4AAg");
	this.shape_11.setTransform(3673.9,41.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D7DFE3").s().p("AA5B2QAcgVAAgiQAAgegUgVQgWgTgdgBQgHABgKACQgGgqghgbQghgdgrAAIgMACQAbgQAfAAQArAAAgAcQAgAbAHArQAKgDAIAAQAeAAAUAVQAUATAAAdQAAAdgUAWQgUAUgeAAg");
	this.shape_12.setTransform(4178.5,38);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EDEDEE").s().p("AkcCJQgegBgUgUQgVgVAAgdQAAgdAVgVQAUgUAeABIAFAAQABg3AngnQAognA3AAQAjABAfAQQAdARASAcQAYgKAXAAQAfgBAbARQAhgfAtAAQArAAAhAcQAgAcAHAqQAKgDAIABQAegBAUAUQAUAVAAAdQAAAdgUAVQgUAUgeABg");
	this.shape_13.setTransform(4156,36.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D7DFE3").s().p("AA4BzQAbgUAAgiQAAgdgUgUQgUgTgdAAQgKAAgGACQgHgpgggaQgggcgqAAIgLABQAagPAeAAQAqAAAfAbQAfAbAHApQAIgDAKAAQAcAAAUAVQAUASAAAdQAAAdgUAUQgUAUgcAAg");
	this.shape_14.setTransform(4619.7,84.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EDEDEE").s().p("AkWCFQgcAAgTgUQgVgUABgcQgBgdAVgUQATgTAcAAIAGAAQABg2AmgmQAnglA1AAQAjAAAeAQQAcAQATAcQAUgKAZAAQAfAAAZAQQAggeAsAAQAqAAAgAbQAfAbAHApQAJgCAJAAQAdAAATATQAVAUAAAdQAAAcgVAUQgTAUgdAAg");
	this.shape_15.setTransform(4597.8,82.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D7DFE3").s().p("ABuDiQAYgTAOgbQAOgdAAggQAAg4gngnQgogng3AAQgSAAgQAFQgOhQg9g1QhAg2hRAAIgXABQA0gdA6AAQBSAAA+A1QA+A1AOBQQARgEASAAQA3AAAnAnQAoAnAAA4QAAA4goAoQgnAng3AAg");
	this.shape_16.setTransform(4540.1,29.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EDEDEE").s().p("AohEGQg4AAgngoQgogoAAg3QAAg4AogpQAngmA4AAIAJABQADhqBMhKQBLhJBpAAQBDgBA7AhQA4AfAkA3QArgVAvAAQA7AAAzAfQBBg6BVAAQBSAAA/A2QA+A0AOBQQAQgEASAAQA4AAAnAmQAoApAAA4QAAA3goAoQgnAog4AAg");
	this.shape_17.setTransform(4497,26.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D7DFE3").s().p("ABTCrQAogfAAgyQAAgqgegeQgegdgqAAQgLAAgOADQgKg8gvgoQgwgpg+AAIgRABQAogWArAAQA+AAAvAoQAvAoAKA9QAMgDAPAAQAqAAAeAeQAdAcAAArQAAAqgdAeQgeAegqAAg");
	this.shape_18.setTransform(4322.2,102.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EDEDEE").s().p("AmcDGQgrAAgdgeQgegeAAgrQAAgqAegeQAdgdArAAIAHAAQAChPA5g4QA5g4BQAAQAzAAAsAZQArAXAbAqQAggQAjAAQAuAAAlAYQAxgtBBABQA+AAAvAoQAvAoALA9QAMgDAPgBQApAAAfAdQAdAeAAAqQAAArgdAeQgfAegpAAg");
	this.shape_19.setTransform(4289.6,100);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D7DFE3").s().p("AA6B2QAbgVAAgiQAAgegVgVQgUgTgdgBQgJABgIACQgIgqgggbQghgdgrAAIgLACQAagQAfAAQArAAAgAcQAgAbAHArQAJgDAKAAQAcAAAVAVQAVATAAAdQAAAdgVAWQgVAUgcAAg");
	this.shape_20.setTransform(2940.1,38);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EDEDEE").s().p("AkcCJQgegBgUgUQgVgVABgdQgBgdAVgVQAUgUAeABIAEAAQACg3AognQAngnA3AAQAjABAeAQQAeARATAcQAXgKAXAAQAfgBAaARQAigfAtAAQArAAAhAcQAgAcAHAqQAJgDAKABQAcgBAVAUQAVAVAAAdQAAAdgVAVQgVAUgcABg");
	this.shape_21.setTransform(2917.6,36.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D7DFE3").s().p("AA5B2QAcgVAAgjQAAgdgUgVQgVgTgeAAQgKAAgHACQgGgqghgbQghgcgrAAIgMAAQAcgPAeAAQArAAAgAcQAgAbAHAqQAKgCAIAAQAdAAAVAUQAVAUgBAdQABAegVAUQgUAVgeAAg");
	this.shape_22.setTransform(3843.7,92.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EDEDEE").s().p("AkdCJQgcAAgVgVQgVgVAAgdQAAgdAVgVQAVgUAcAAIAFABQACg3AngnQAognA3AAQAjAAAfARQAdARASAcQAXgLAYAAQAfAAAbARQAhgfAtAAQArAAAhAcQAgAcAHAqQAKgDAIAAQAdAAAVAUQAVAVgBAdQABAdgVAVQgUAVgeAAg");
	this.shape_23.setTransform(3821.2,90.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D7DFE3").s().p("ABuDiQAZgSAOgcQAOgdgBggQAAg4gngnQgngng4AAQgSAAgQAFQgNhQg/g1Qg+g2hSAAIgXABQA0gdA6AAQBTAAA9A1QA+A1AOBQQAUgEAOAAQA5AAAnAnQAnAnAAA4QAAA4gnAoQgnAng5AAg");
	this.shape_24.setTransform(4002.9,29.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EDEDEE").s().p("AoiEGQg3AAgngoQgogoAAg3QAAg4AogpQAngmA3AAIAKABQADhqBMhKQBLhJBpAAQBDgBA7AhQA5AfAjA3QArgVAvAAQA6AAA0AfQAfgcAlgPQAngPAqAAQBTAAA+A2QA/A0AOBQQATgEAPAAQA4AAAnAmQAnApAAA4QAAA3gnAoQgnAog4AAg");
	this.shape_25.setTransform(3959.9,26.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D7DFE3").s().p("AA4BzQAbgUAAgiQAAgdgUgUQgUgTgdAAQgKAAgGACQgHgpgggaQgggcgqAAIgLABQAagPAeAAQAqAAAfAbQAfAbAHApQAIgDAKAAQAcAAAUAVQAUASAAAdQAAAdgUAUQgUAUgcAAg");
	this.shape_26.setTransform(3381.4,84.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EDEDEE").s().p("AkVCFQgcAAgVgUQgUgUAAgcQAAgdAUgUQAVgTAcAAIAFAAQABg2AngmQAmglA2AAQAiAAAeAQQAcAQASAcQAWgKAYAAQAfAAAZAQQAggeAsAAQAqAAAgAbQAgAbAHApQAHgCAKAAQAdAAAUATQAUAUAAAdQAAAcgUAUQgUAUgdAAg");
	this.shape_27.setTransform(3359.4,82.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D7DFE3").s().p("ABuDiQAZgSAOgcQAOgdgBggQABg4gngnQgogng4AAQgSAAgPAFQgOhQg+g1Qg/g2hSAAIgXABQA0gdA7AAQBSAAA+A1QA9A1AOBQQARgEASAAQA4AAAnAnQAnAnAAA4QAAA4gnAoQgnAng4AAg");
	this.shape_28.setTransform(3301.7,29.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EDEDEE").s().p("AohEGQg4AAgngoQgogoAAg3QAAg4AogpQAngmA4AAIAJABQAEhqBLhKQBMhJBpAAQBDgBA6AhQA4AfAkA3QArgVAvAAQA7AAAzAfQBBg6BVAAQBSAAA/A2QA9A0APBQQAQgEASAAQA4AAAnAmQAnApAAA4QAAA3gnAoQgnAog4AAg");
	this.shape_29.setTransform(3258.7,26.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D7DFE3").s().p("ABTCrQAogfAAgyQAAgqgegeQgegdgqAAQgMAAgNADQgLg8gugoQgwgpg+AAIgRABQAngWAsAAQA+AAAvAoQAvAoAKA9QAMgDAOAAQArAAAdAeQAeAcAAArQAAAqgeAeQgdAegrAAg");
	this.shape_30.setTransform(2820.7,102.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EDEDEE").s().p("AmdDGQgpAAgegeQgegeAAgrQAAgqAegeQAegdApAAIAIAAQAChPA5g4QA5g4BQAAQAzAAArAZQArAXAcAqQAfgQAkAAQAtAAAnAYQAwgtBBABQA+AAAwAoQAvAoAKA9QAMgDAOgBQAqAAAeAdQAeAeAAAqQAAArgeAeQgeAegqAAg");
	this.shape_31.setTransform(2788.2,100);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D7DFE3").s().p("ABTCrQAogfAAgyQAAgqgegeQgegdgqAAQgMAAgNADQgLg8gugoQgwgpg+AAIgRABQAngWAsAAQA+AAAvAoQAvAoAKA9QAMgDAOAAQArAAAdAeQAeAcAAArQAAAqgeAeQgdAegrAAg");
	this.shape_32.setTransform(3083.8,102.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EDEDEE").s().p("AmdDGQgqAAgdgeQgegeAAgrQAAgqAegeQAdgdAqAAIAHAAQADhPA5g4QA6g4BPAAQAyAAAsAZQAsAXAaAqQAhgQAjAAQAtAAAmAYQAxgtBBABQA+AAAwAoQAuAoALA9QAMgDAOgBQAqAAAeAdQAeAeAAAqQAAArgeAeQgeAegqAAg");
	this.shape_33.setTransform(3051.3,100);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D7DFE3").s().p("AA6B2QAbgVAAgiQAAgegVgVQgUgTgdgBQgJABgIACQgIgqgggbQghgdgrAAIgLACQAagQAfAAQArAAAgAcQAgAbAHArQAJgDAKAAQAcAAAVAVQAVATAAAdQAAAdgVAWQgVAUgcAAg");
	this.shape_34.setTransform(2168,38);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EDEDEE").s().p("AkcCJQgegBgUgUQgVgVABgdQgBgdAVgVQAUgUAeABIAEAAQACg3AognQAngnA3AAQAjABAeAQQAeARATAcQAXgKAXAAQAfgBAaARQAigfAtAAQArAAAhAcQAgAcAHAqQAJgDAKABQAcgBAVAUQAVAVAAAdQAAAdgVAVQgVAUgcABg");
	this.shape_35.setTransform(2145.5,36.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D7DFE3").s().p("AA4BzQAbgUAAgiQAAgdgUgUQgUgTgdAAQgKAAgGACQgHgpgggaQgggcgqAAIgLABQAagPAeAAQAqAAAfAbQAfAbAHApQAIgDAKAAQAcAAAUAVQAUASAAAdQAAAdgUAUQgUAUgcAAg");
	this.shape_36.setTransform(2609.2,84.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EDEDEE").s().p("AkVCFQgcAAgVgUQgUgUAAgcQAAgdAUgUQAVgTAcAAIAFAAQABg2AngmQAmglA2AAQAiAAAeAQQAcAQASAcQAWgKAYAAQAfAAAZAQQAggeAsAAQAqAAAgAbQAgAbAHApQAHgCAKAAQAdAAAUATQAUAUAAAdQAAAcgUAUQgUAUgdAAg");
	this.shape_37.setTransform(2587.3,82.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D7DFE3").s().p("ABuDiQAZgSAOgcQAOgdgBggQABg4gngnQgogng4AAQgSAAgPAFQgOhQg+g1Qg/g2hSAAIgXABQA0gdA7AAQBSAAA+A1QA9A1AOBQQARgEASAAQA4AAAnAnQAnAnAAA4QAAA4gnAoQgnAng4AAg");
	this.shape_38.setTransform(2529.6,29.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EDEDEE").s().p("AohEGQg4AAgngoQgogoAAg3QAAg4AogpQAngmA4AAIAJABQAEhqBLhKQBMhJBpAAQBDgBA6AhQA4AfAkA3QArgVAvAAQA7AAAzAfQBBg6BVAAQBSAAA/A2QA9A0APBQQAQgEASAAQA4AAAnAmQAnApAAA4QAAA3gnAoQgnAog4AAg");
	this.shape_39.setTransform(2486.5,26.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D7DFE3").s().p("ABTCrQAogfAAgyQAAgqgegeQgegdgqAAQgMAAgNADQgLg8gugoQgwgpg+AAIgRABQAngWAsAAQA+AAAvAoQAvAoAKA9QAMgDAOAAQArAAAdAeQAeAcAAArQAAAqgeAeQgdAegrAAg");
	this.shape_40.setTransform(2048.6,102.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EDEDEE").s().p("AmdDGQgpAAgegeQgegeAAgrQAAgqAegeQAegdApAAIAIAAQAChPA5g4QA5g4BQAAQAzAAArAZQArAXAcAqQAfgQAkAAQAtAAAnAYQAwgtBBABQA+AAAwAoQAvAoAKA9QAMgDAOgBQAqAAAeAdQAeAeAAAqQAAArgeAeQgeAegqAAg");
	this.shape_41.setTransform(2016,100);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D7DFE3").s().p("ABTCrQAogfAAgyQAAgqgegeQgegdgqAAQgMAAgNADQgLg8gugoQgwgpg+AAIgRABQAngWAsAAQA+AAAvAoQAvAoAKA9QAMgDAOAAQArAAAdAeQAeAcAAArQAAAqgeAeQgdAegrAAg");
	this.shape_42.setTransform(2311.7,102.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EDEDEE").s().p("AmdDGQgqAAgdgeQgegeAAgrQAAgqAegeQAdgdAqAAIAHAAQADhPA5g4QA6g4BPAAQAyAAAsAZQAsAXAaAqQAhgQAjAAQAtAAAmAYQAxgtBBABQA+AAAwAoQAuAoALA9QAMgDAOgBQAqAAAeAdQAeAeAAAqQAAArgeAeQgeAegqAAg");
	this.shape_43.setTransform(2279.1,100);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D7DFE3").s().p("ABuDiQAZgTAOgbQAOgdAAggQAAg4gogoQgogmg3AAQgQAAgRAFQgOhQg/g1Qg+g2hTAAIgWABQA0gdA6AAQBTAAA9A1QA+A1AOBQQAQgEASAAQA4AAAoAnQAnAnAAA4QAAA4gnAoQgoAng4AAg");
	this.shape_44.setTransform(980.4,44.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EDEDEE").s().p("AohEGQg4AAgngoQgogoAAg4QAAg4AognQAngnA4AAIAJABQAEhqBLhKQBLhKBqAAQBDAAA6AhQA5AfAjA3QAtgVAtAAQA6AAA0AfQAegbAmgPQAngQArAAQBSAAA/A2QA+A1AOBQQAQgFASAAQA4AAAnAnQAoAnAAA4QAAA5goAnQgnAog4AAg");
	this.shape_45.setTransform(937.3,41.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D7DFE3").s().p("AA5B2QAcgVAAgiQAAgegUgVQgWgTgdgBQgHABgKACQgGgqghgbQghgdgrAAIgMACQAbgQAfAAQArAAAgAcQAgAbAHArQAKgDAIAAQAeAAAUAVQAUATAAAdQAAAdgUAWQgUAUgeAAg");
	this.shape_46.setTransform(1441.8,38);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EDEDEE").s().p("AkcCJQgegBgUgUQgVgVAAgdQAAgdAVgVQAUgUAeABIAFAAQABg3AngnQAognA3AAQAjABAfAQQAdARASAcQAYgKAXAAQAfgBAbARQAhgfAtAAQArAAAhAcQAgAcAHAqQAKgDAIABQAegBAUAUQAUAVAAAdQAAAdgUAVQgUAUgeABg");
	this.shape_47.setTransform(1419.3,36.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D7DFE3").s().p("AA4BzQAbgUAAgiQAAgdgUgUQgUgTgdAAQgKAAgGACQgHgpgggaQgggcgqAAIgLABQAagPAeAAQAqAAAfAbQAfAbAHApQAIgDAKAAQAcAAAUAVQAUASAAAdQAAAdgUAUQgUAUgcAAg");
	this.shape_48.setTransform(1883.1,84.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EDEDEE").s().p("AkWCFQgcAAgTgUQgVgUABgcQgBgdAVgUQATgTAcAAIAGAAQABg2AmgmQAnglA1AAQAjAAAeAQQAcAQATAcQAUgKAZAAQAfAAAZAQQAggeAsAAQAqAAAgAbQAfAbAHApQAJgCAJAAQAdAAATATQAVAUAAAdQAAAcgVAUQgTAUgdAAg");
	this.shape_49.setTransform(1861.2,82.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D7DFE3").s().p("ABuDiQAYgTAOgbQAOgdAAggQAAg4gngnQgogng3AAQgSAAgQAFQgOhQg9g1QhAg2hRAAIgXABQA0gdA6AAQBSAAA+A1QA+A1AOBQQARgEASAAQA3AAAnAnQAoAnAAA4QAAA4goAoQgnAng3AAg");
	this.shape_50.setTransform(1803.5,29.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EDEDEE").s().p("AohEGQg4AAgngoQgogoAAg3QAAg4AogpQAngmA4AAIAJABQADhqBMhKQBLhJBpAAQBDgBA7AhQA4AfAkA3QArgVAvAAQA7AAAzAfQBBg6BVAAQBSAAA/A2QA+A0AOBQQAQgEASAAQA4AAAnAmQAoApAAA4QAAA3goAoQgnAog4AAg");
	this.shape_51.setTransform(1760.4,26.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D7DFE3").s().p("ABTCrQAogfAAgyQAAgqgegeQgegdgqAAQgLAAgOADQgKg8gvgoQgwgpg+AAIgRABQAogWArAAQA+AAAvAoQAvAoAKA9QAMgDAPAAQAqAAAeAeQAdAcAAArQAAAqgdAeQgeAegqAAg");
	this.shape_52.setTransform(1585.5,102.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EDEDEE").s().p("AmcDGQgrAAgdgeQgegeAAgrQAAgqAegeQAdgdArAAIAHAAQAChPA5g4QA5g4BQAAQAzAAAsAZQArAXAbAqQAggQAjAAQAuAAAlAYQAxgtBBABQA+AAAvAoQAvAoALA9QAMgDAPgBQApAAAfAdQAdAeAAAqQAAArgdAeQgfAegpAAg");
	this.shape_53.setTransform(1553,100);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D7DFE3").s().p("AA6B2QAbgVAAgiQAAgegVgVQgUgTgdgBQgJABgIACQgIgqgggbQghgdgrAAIgLACQAagQAfAAQArAAAgAcQAgAbAHArQAJgDAKAAQAcAAAVAVQAVATAAAdQAAAdgVAWQgVAUgcAAg");
	this.shape_54.setTransform(203.5,38);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EDEDEE").s().p("AkcCJQgegBgUgUQgVgVABgdQgBgdAVgVQAUgUAeABIAEAAQACg3AognQAngnA3AAQAjABAeAQQAeARATAcQAXgKAXAAQAfgBAaARQAigfAtAAQArAAAhAcQAgAcAHAqQAJgDAKABQAcgBAVAUQAVAVAAAdQAAAdgVAVQgVAUgcABg");
	this.shape_55.setTransform(181,36.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D7DFE3").s().p("AA5B2QAcgVAAgjQAAgdgUgVQgVgTgeAAQgKAAgHACQgGgqghgbQghgcgrAAIgMAAQAcgPAeAAQArAAAgAcQAgAbAHAqQAKgCAIAAQAdAAAVAUQAVAUgBAdQABAegVAUQgUAVgeAAg");
	this.shape_56.setTransform(1107,92.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDEDEE").s().p("AkdCJQgcAAgVgVQgVgVAAgdQAAgdAVgVQAVgUAcAAIAFABQACg3AngnQAognA3AAQAjAAAfARQAdARASAcQAXgLAYAAQAfAAAbARQAhgfAtAAQArAAAhAcQAgAcAHAqQAKgDAIAAQAdAAAVAUQAVAVgBAdQABAdgVAVQgUAVgeAAg");
	this.shape_57.setTransform(1084.5,90.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D7DFE3").s().p("ABuDiQAZgSAOgcQAOgdgBggQAAg4gngnQgngng4AAQgSAAgQAFQgNhQg/g1Qg+g2hSAAIgXABQA0gdA6AAQBTAAA9A1QA+A1AOBQQAUgEAOAAQA5AAAnAnQAnAnAAA4QAAA4gnAoQgnAng5AAg");
	this.shape_58.setTransform(1266.3,29.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDEDEE").s().p("AoiEGQg3AAgngoQgogoAAg3QAAg4AogpQAngmA3AAIAKABQADhqBMhKQBLhJBpAAQBDgBA7AhQA5AfAjA3QArgVAvAAQA6AAA0AfQAfgcAlgPQAngPAqAAQBTAAA+A2QA/A0AOBQQATgEAPAAQA4AAAnAmQAnApAAA4QAAA3gnAoQgnAog4AAg");
	this.shape_59.setTransform(1223.2,26.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D7DFE3").s().p("AA4BzQAbgUAAgiQAAgdgUgUQgUgTgdAAQgKAAgGACQgHgpgggaQgggcgqAAIgLABQAagPAeAAQAqAAAfAbQAfAbAHApQAIgDAKAAQAcAAAUAVQAUASAAAdQAAAdgUAUQgUAUgcAAg");
	this.shape_60.setTransform(644.7,84.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDEDEE").s().p("AkVCFQgcAAgVgUQgUgUAAgcQAAgdAUgUQAVgTAcAAIAFAAQABg2AngmQAmglA2AAQAiAAAeAQQAcAQASAcQAWgKAYAAQAfAAAZAQQAggeAsAAQAqAAAgAbQAgAbAHApQAHgCAKAAQAdAAAUATQAUAUAAAdQAAAcgUAUQgUAUgdAAg");
	this.shape_61.setTransform(622.8,82.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D7DFE3").s().p("ABuDiQAZgSAOgcQAOgdgBggQABg4gngnQgogng4AAQgSAAgPAFQgOhQg+g1Qg/g2hSAAIgXABQA0gdA7AAQBSAAA+A1QA9A1AOBQQARgEASAAQA4AAAnAnQAnAnAAA4QAAA4gnAoQgnAng4AAg");
	this.shape_62.setTransform(565.1,29.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EDEDEE").s().p("AohEGQg4AAgngoQgogoAAg3QAAg4AogpQAngmA4AAIAJABQAEhqBLhKQBMhJBpAAQBDgBA6AhQA4AfAkA3QArgVAvAAQA7AAAzAfQBBg6BVAAQBSAAA/A2QA9A0APBQQAQgEASAAQA4AAAnAmQAnApAAA4QAAA3gnAoQgnAog4AAg");
	this.shape_63.setTransform(522,26.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D7DFE3").s().p("ABTCrQAogfAAgyQAAgqgegeQgegdgqAAQgMAAgNADQgLg8gugoQgwgpg+AAIgRABQAngWAsAAQA+AAAvAoQAvAoAKA9QAMgDAOAAQArAAAdAeQAeAcAAArQAAAqgeAeQgdAegrAAg");
	this.shape_64.setTransform(84.1,102.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EDEDEE").s().p("AmdDGQgpAAgegeQgegeAAgrQAAgqAegeQAegdApAAIAIAAQAChPA5g4QA5g4BQAAQAzAAArAZQArAXAcAqQAfgQAkAAQAtAAAnAYQAwgtBBABQA+AAAwAoQAvAoAKA9QAMgDAOgBQAqAAAeAdQAeAeAAAqQAAArgeAeQgeAegqAAg");
	this.shape_65.setTransform(51.5,100);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D7DFE3").s().p("ABTCrQAogfAAgyQAAgqgegeQgegdgqAAQgMAAgNADQgLg8gugoQgwgpg+AAIgRABQAngWAsAAQA+AAAvAoQAvAoAKA9QAMgDAOAAQArAAAdAeQAeAcAAArQAAAqgeAeQgdAegrAAg");
	this.shape_66.setTransform(347.2,102.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EDEDEE").s().p("AmdDGQgqAAgdgeQgegeAAgrQAAgqAegeQAdgdAqAAIAHAAQADhPA5g4QA6g4BPAAQAyAAAsAZQAsAXAaAqQAhgQAjAAQAtAAAmAYQAxgtBBABQA+AAAwAoQAuAoALA9QAMgDAOgBQAqAAAeAdQAeAeAAAqQAAArgeAeQgeAegqAAg");
	this.shape_67.setTransform(314.6,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.CloudsCached, new cjs.Rectangle(0,0,5358.6,119.8), null);


(lib.CarPrimary = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3BA47").s().p("AgBALQgEAAgDgDQgEgDAAgFQAAgEAEgDQADgDAEAAIANAAIAAAVg");
	this.shape.setTransform(-55.9,111.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D35733").s().p("AgMAPQgGAAgFgEQgEgFAAgGQAAgFAEgFQAFgEAGAAIAZAAQAHAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgHAAg");
	this.shape_1.setTransform(-54.7,111.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9E9EA").s().p("AgPALQgEAAgEgEQgDgDAAgEQAAgDADgDQAEgDAEgBIAqAAIAAAVg");
	this.shape_2.setTransform(-113.8,110);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E9E9EA").s().p("AgPALQgEAAgDgEQgDgDgBgEQABgDADgDQADgDAEgBIApAAIAAAVg");
	this.shape_3.setTransform(-87.7,110);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B2B6BA").s().p("AmfAGIAAgLIM/AAIAAALg");
	this.shape_4.setTransform(-105.5,90.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D4D8D3").s().p("AmfAMIAAgYIM/AAIAAAYg");
	this.shape_5.setTransform(-105.5,90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E9E9EA").s().p("AgZBSIAfijIAUAAIgfCjg");
	this.shape_6.setTransform(-140.6,97.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#94D7E6").s().p("AhgAhIAKhBIC4AAIAABBg");
	this.shape_7.setTransform(-130.2,101.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#60C9DF").s().p("AiBBSIAlijIDeAAIAACjg");
	this.shape_8.setTransform(-130.2,97.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E9E9EA").s().p("AgJBSIAAijIATAAIAACjg");
	this.shape_9.setTransform(-92.8,97.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E9E9EA").s().p("AgJBSIAAijIATAAIAACjg");
	this.shape_10.setTransform(-116.1,97.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#94D7E6").s().p("AhiAhIAAhBIDFAAIAABBg");
	this.shape_11.setTransform(-104.6,101.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#60C9DF").s().p("Ah7BSIAAijID3AAIAACjg");
	this.shape_12.setTransform(-104.6,97.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E9E9EA").s().p("AgJBSIAAijIATAAIAACjg");
	this.shape_13.setTransform(-72.5,97.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E9E9EA").s().p("AgJBSIAAijIATAAIAACjg");
	this.shape_14.setTransform(-90.3,97.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#94D7E6").s().p("AhJAhIAAhBICTAAIAABBg");
	this.shape_15.setTransform(-81.3,101.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#60C9DF").s().p("AhZBSIAAijICzAAIAACjg");
	this.shape_16.setTransform(-82.4,97.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B2B6BA").s().p("AgJA8IAAh3IATAAIAAB3g");
	this.shape_17.setTransform(-9.8,112.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D4D8D3").s().p("AgXA9IAAh5IAvAAIAABOQAAASgNAMQgLANgSAAg");
	this.shape_18.setTransform(-7.9,112.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5E6B68").s().p("AhjAFIAAgJIDHAAIAAAJg");
	this.shape_19.setTransform(-158.3,131.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#67787C").s().p("Ag4AZQgSAAgMgNQgNgMAAgRIAAgHIDHAAIAAAxg");
	this.shape_20.setTransform(-158.3,134.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#879598").s().p("Ag4A2QgSAAgMgMQgNgMAAgSIAAgXQAAgSANgMQAMgNASAAICcAAIAABsg");
	this.shape_21.setTransform(-158.3,131.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5E6B68").s().p("AhjAFIAAgJIDHAAIAAAJg");
	this.shape_22.setTransform(-18.1,131.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#67787C").s().p("AhjAZIAAgxIDHAAIAAAHQAAARgNAMQgMANgSAAg");
	this.shape_23.setTransform(-18.1,134.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#879598").s().p("AhjA2IAAhsICcAAQASAAAMANQANAMAAASIAAAXQAAASgNAMQgMAMgSAAg");
	this.shape_24.setTransform(-18.1,131.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FAC83C").s().p("AAiBHIg8hcIhWAAIAAgxIB2AAIBrCNg");
	this.shape_25.setTransform(-115.5,129.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C48D42").s().p("AgGhGIB3AAIAAAxIhWAAIg8BcIhPAAg");
	this.shape_26.setTransform(-137.8,129.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FAC83C").s().p("AAiBHIg8hcIhWAAIAAgxIB3AAIBqCNg");
	this.shape_27.setTransform(-31.3,129.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C48D42").s().p("AgGhGIB3AAIAAAxIhWAAIg8BcIhPAAg");
	this.shape_28.setTransform(-53.6,129.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BED1D1").s().p("AgMAEQgGgEAAgJIAlAAQAAAJgFAEQgGAGgIgBQgHABgFgGg");
	this.shape_29.setTransform(-126.7,137.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F6E8D7").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_30.setTransform(-126.7,135.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#58595B").s().p("AgnAoQgQgRAAgXQAAgXAQgQQARgRAWAAQAXAAARARQAQAQAAAXQAAAXgQARQgQARgYAAQgWAAgRgRg");
	this.shape_31.setTransform(-126.7,136);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6D6E71").s().p("AgxAyQgUgVAAgdQAAgcAUgVQAVgVAcAAQAdAAAVAVQAUAVAAAcQAAAdgUAVQgVAVgdAAQgcAAgVgVg");
	this.shape_32.setTransform(-126.7,136);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#323031").s().p("AhXBZQgkglAAg0QAAgzAkglQAlgkAyAAQA0AAAkAkQAkAlAAAzQAAA0gkAlQgkAkg0AAQgyAAglgkg");
	this.shape_33.setTransform(-126.7,136);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BED1D1").s().p("AgNAEQgFgEAAgJIAlAAQAAAJgFAEQgGAGgIgBQgHABgGgGg");
	this.shape_34.setTransform(-42.2,137.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F6E8D7").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_35.setTransform(-42.2,135.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#58595B").s().p("AgnAoQgQgRAAgXQAAgXAQgQQARgRAWAAQAXAAARARQAQAQAAAXQAAAXgQARQgRARgXAAQgWAAgRgRg");
	this.shape_36.setTransform(-42.2,136);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6D6E71").s().p("AgxAyQgUgVAAgdQAAgcAUgVQAVgVAcAAQAdAAAVAVQAUAVAAAcQAAAdgUAVQgVAVgdAAQgcAAgVgVg");
	this.shape_37.setTransform(-42.2,136);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#323031").s().p("AhXBZQgkglAAg0QAAgzAkglQAkgkAzAAQAzAAAlAkQAkAlAAAzQAAA0gkAlQgkAkg0AAQgzAAgkgkg");
	this.shape_38.setTransform(-42.2,136);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B2B3B7").s().p("AgGACQgDgCAAgEIATAAQAAAEgDACQgDADgEAAQgDAAgDgDg");
	this.shape_39.setTransform(-265.1,90.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D4D8D3").s().p("AgKALQgEgEAAgHQAAgGAEgEQAEgFAGABQAGgBAEAFQAFAEAAAGQAAAHgFAEQgEAEgGAAQgGAAgEgEg");
	this.shape_40.setTransform(-265.1,90.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B2B6BA").s().p("AghAEIAAgHIBDAAIAAAHg");
	this.shape_41.setTransform(-262.4,90.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D4D8D3").s().p("AghAIIAAgPIBDAAIAAAPg");
	this.shape_42.setTransform(-262.4,90.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4D6531").s().p("AgGACQgDgCAAgEIATAAQAAAEgDACQgDADgEAAQgDAAgDgDg");
	this.shape_43.setTransform(-265.1,91.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4D6531").s().p("AgKALQgEgFAAgGQAAgGAEgEQAEgEAGAAQAGAAAEAEQAFAEAAAGQAAAGgFAFQgEAEgGAAQgGAAgEgEg");
	this.shape_44.setTransform(-265.1,90.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#4D6531").s().p("AghAEIAAgHIBDAAIAAAHg");
	this.shape_45.setTransform(-262.4,91.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4D6531").s().p("AghAIIAAgPIBDAAIAAAPg");
	this.shape_46.setTransform(-262.4,90.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D4D8D3").s().p("AgKALQgEgFAAgGQAAgFAEgFQAFgEAFAAQAHAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgHAAQgFAAgFgEg");
	this.shape_47.setTransform(-171.6,125.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D4D8D3").s().p("AhDCGIAAkLIAtAAIAEANIgkAAIAADxIB2AAIAEANg");
	this.shape_48.setTransform(-218.4,61.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A82D28").s().p("AgUA4IAAgFIAkAAIAAhmIgkAAIAAgEIApAAIAABvg");
	this.shape_49.setTransform(-361.9,100.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F3BA47").s().p("AgLAXIAAgsIAYAAIAAAsg");
	this.shape_50.setTransform(-362.3,101.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D35733").s().p("AgPAvIAAhdIAfAAIAABdg");
	this.shape_51.setTransform(-362.4,100.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4D6531").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_52.setTransform(-230,41.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#4D6531").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_53.setTransform(-230,39.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F3BA47").s().p("AgQAPIAAgdIASAAQAGAAAFAFQAEAEAAAFQAAAGgEAEQgFAFgGAAg");
	this.shape_54.setTransform(-233.7,40.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D35733").s().p("AgRAUQgHAAgGgFQgHgHAAgIQAAgIAHgFQAFgHAIABIAiAAQAJgBAGAHQAFAFAAAIQAAAIgFAHQgHAFgIAAg");
	this.shape_55.setTransform(-235.4,40.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgZAaQgKgLgBgPQABgOAKgLQALgLAOAAQAPAAALALQAKALAAAOQAAAPgKALQgLALgPAAQgOAAgLgLgAgYgYQgKALAAANQAAAPAKAKQALAKANAAQAOAAALgKQAKgKAAgPQAAgNgKgLQgLgKgOAAQgNAAgLAKg");
	this.shape_56.setTransform(-289.5,100.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C1E5E6").s().p("AgIACQgEgCAAgFIAZAAQgBAFgDACQgEAEgFAAQgEAAgEgEg");
	this.shape_57.setTransform(-289.6,103.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F8FBF4").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAFAAAFAEQAEAEAAAFQAAAGgEAEQgFAEgFAAQgFAAgEgEg");
	this.shape_58.setTransform(-289.5,102.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#879BA5").s().p("AgXAfQgLgLAAgQQAAgQAMgLQAMgMAPAAQAQAAANANIABABIg1A4IAAABg");
	this.shape_59.setTransform(-290.1,100.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B2B6BA").s().p("AgbAcQgMgLAAgRQAAgQAMgLQAMgMAPAAQAQAAAMAMQAMALAAAQQAAARgMALQgMAMgQAAQgPAAgMgMg");
	this.shape_60.setTransform(-289.5,100.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#941D4A").s().p("AgdAeQgMgMAAgSQAAgQAMgNQANgNAQAAQARAAANANQAMANAAAQQAAASgMAMQgNANgRAAQgRAAgMgNg");
	this.shape_61.setTransform(-289.5,101.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#941D4A").s().p("AiDASIAAgjIEHAAIAAAjg");
	this.shape_62.setTransform(-346.2,125.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#ED4A3D").s().p("Ah9AmIAAhLIDrAAIAQBLg");
	this.shape_63.setTransform(-346.9,123.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#A82D28").s().p("ABrAnIgThDIjEAAIgLgOIDZAAIAXBVg");
	this.shape_64.setTransform(-345.3,123.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#BED1D1").s().p("AgTAGQgIgIAAgLIA3AAQAAALgIAIQgIAIgMAAQgLAAgIgIg");
	this.shape_65.setTransform(-293.6,131.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F6E8D7").s().p("AgYAZQgKgLAAgOQAAgNAKgKQALgLANAAQAOAAALALQAKAKAAANQAAAOgKALQgKAKgPAAQgNAAgLgKg");
	this.shape_66.setTransform(-293.6,129.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F6E8D7").s().p("AgDANQgFgBgDgFQgCgFABgEQABgGAFgCQAFgDAEABQAFACADAEQADAFgBAEQgCAGgFADQgDABgDAAIgDAAg");
	this.shape_67.setTransform(-296.8,124.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F6E8D7").s().p("AgGALQgFgCgBgGQgBgEACgFQADgFAGgBQAEgBAEACQAFADACAGQABAEgDAFQgCAEgGACIgDAAQgCAAgEgCg");
	this.shape_68.setTransform(-299.2,126.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F6E8D7").s().p("AgIAJQgEgEAAgFQAAgFAEgDQADgEAFAAQAGAAADAEQAEADAAAFQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_69.setTransform(-300.1,129.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F6E8D7").s().p("AgDANQgFgCgDgFQgCgEABgFQABgFAFgDQAFgCAEABQAGABACAFQADAFgBAEQgCAGgFACQgDACgDAAIgDAAg");
	this.shape_70.setTransform(-299.2,133.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F6E8D7").s().p("AgGALQgFgCgBgGQgBgEACgFQADgFAGgBQAEgBAEACQAFADACAFQABAFgDAEQgCAFgGACIgCAAQgDAAgEgCg");
	this.shape_71.setTransform(-296.8,135.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F6E8D7").s().p("AgJAJQgDgEAAgFQAAgFADgDQAEgEAFAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgEgEg");
	this.shape_72.setTransform(-293.5,136.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F6E8D7").s().p("AgCANQgGgCgDgEQgCgFABgEQACgGAEgDQAFgCAEABQAGABACAFQADAFgBAEQgCAGgEACQgDACgEAAIgCAAg");
	this.shape_73.setTransform(-290.2,135.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F6E8D7").s().p("AgGAMQgFgDgBgGQgBgEACgFQADgEAFgCQAFgBAEADQAFACACAGQABAEgDAFQgCAFgGABIgDAAQgCAAgEgBg");
	this.shape_74.setTransform(-287.8,133.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F6E8D7").s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_75.setTransform(-287,129.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F6E8D7").s().p("AgCANQgGgBgDgFQgCgFABgEQABgGAFgCQAFgDAEABQAGACACAEQADAFgBAEQgCAGgFADQgDABgDAAIgCAAg");
	this.shape_76.setTransform(-287.9,126.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F6E8D7").s().p("AgGAMQgFgDgBgFQgBgFACgEQADgFAFgCQAEgBAFADQAFACACAGQABAEgDAFQgDAFgFABIgDAAQgCAAgEgBg");
	this.shape_77.setTransform(-290.3,124.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F6E8D7").s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_78.setTransform(-293.6,123.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#A82D28").s().p("Ar7AHIAGgNIXtAAIAEANg");
	this.shape_79.setTransform(-284,85.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#B2B6BA").s().p("Ai/AHIAAgNIF/AAIAAANg");
	this.shape_80.setTransform(-314.9,51.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D4D8D3").s().p("Ai/ANIAAgZIF/AAIAAAZg");
	this.shape_81.setTransform(-315,51.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D4D8D3").s().p("AhoBxQgbAAgTgTQgSgTAAgcIAAifIFSAAIAACfQAAAcgUATQgTATgbAAgAidAoQAAAbATATQATATAbAAIC5AAQAbAAATgTQATgTAAgbIAAiQIk7AAg");
	this.shape_82.setTransform(-314.7,63);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#58595B").s().p("Ag6A7QgYgZABgiQgBghAYgYQAZgZAhAAQAiAAAYAZQAZAYAAAhQAAAigZAZQgYAYgiAAQghAAgZgYg");
	this.shape_83.setTransform(-293.5,129.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#6D6E71").s().p("AhIBJQgegeAAgrQAAgqAegeQAegfAqAAQAqAAAfAfQAeAeAAAqQAAArgeAeQgeAfgrAAQgqAAgegfg");
	this.shape_84.setTransform(-293.5,129.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#323031").s().p("AiACCQg1g2AAhMQAAhLA1g2QA1g1BLAAQBLAAA2A1QA1A2AABLQAABMg1A2Qg2A1hLAAQhLAAg1g1g");
	this.shape_85.setTransform(-293.5,129.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D35733").s().p("AgvAFIAAgJIBfAAIAAAJg");
	this.shape_86.setTransform(-329.7,69.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EE9A41").s().p("AgvAKIAAgTIBfAAIAAATg");
	this.shape_87.setTransform(-329.7,69);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#927964").s().p("AgWAhIAhgrIAAhjIAMAAIAABtIgiApIAABFg");
	this.shape_88.setTransform(-327.4,63.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#927964").s().p("AgUA6IAeggIAAh0IALAAIAAB6IgfAfIAAAcg");
	this.shape_89.setTransform(-325.2,61.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#D5C2AE").s().p("AhJCPIAAkdICTAEIgbCNIgaAaIAAAVIARARIAABMg");
	this.shape_90.setTransform(-327,65);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D35733").s().p("AgvAFIAAgJIBfAAIAAAJg");
	this.shape_91.setTransform(-300.6,69.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EE9A41").s().p("AgvALIAAgUIBfAAIAAAUg");
	this.shape_92.setTransform(-300.6,69.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#927964").s().p("AAMAoIgigoIAAhtIAMAAIAABjIAhArIgLBNg");
	this.shape_93.setTransform(-302.9,63.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#927964").s().p("AALA/IgfgfIAAh6IALAAIAAB0IAeAgIgKAhg");
	this.shape_94.setTransform(-305.1,61.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D5C2AE").s().p("AgmCPIAAhMIARgSIAAgUIgagaIgaiNICTgEIAAEdg");
	this.shape_95.setTransform(-303.3,65.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#231F20").s().p("AjJAiICfghIhvAAIAAgiICkAAIAAgPIC+AAIAAAeIiyAAIAAATIgBAAIAAACIjbAug");
	this.shape_96.setTransform(-262.5,130.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#231F20").s().p("AAAADIABgCIgBAAIAAgQIgNAAQAAAJgGAGQgGAFgJAAQgJAAgHgFQgGgGAAgJIAAgDIinAAIAAgeIC/AAIAAAGIA1AAIAAAJICcAAIAAAiIhvAAICeAhIgDAPg");
	this.shape_97.setTransform(-324.3,130.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#D1ECF3").s().p("AhAA6QgjAAgZgZQgZgZAAgiIAAgfIErAAIAAAfQAAAigZAZQgYAZgkAAg");
	this.shape_98.setTransform(-314.7,67.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#E9E9EA").s().p("AgJBSIAAijIATAAIAAATIAACQg");
	this.shape_99.setTransform(-118.5,97.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#BE8233").s().p("AjODkIAAgWIC6AAIAAi9IAEAAIAAC9IEiAAIAAi9IAFAAIAADTgAkVCUIAAAAIAAgBIAAiCIAEAAIAACDgAESAEIAAhVIAAgCIADAAIACAAIAAAMIAABLgAgUAEIAAjnIAEAAIAADngAkVAEIAAhVIAAiSIAEAAIAADng");
	this.shape_100.setTransform(-89.7,113.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#E0E139").s().p("AgNA2IgGAAIAAgIIAFAAIAaAAIAAhaIgZAAIgGAAIAAgIIAHAAIAgAAIAABqg");
	this.shape_101.setTransform(-362,100.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#F6F6F6").s().p("AhfCpIAAlRIC/AAIAAFRgAhNCXICbAAIAAktIibAAg");
	this.shape_102.setTransform(-256,67.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#ED4A3D").s().p("ACNDSIAAgLIAAgVIDfAAIAAAVIAAALgAlZDHIgTAAIBChzQAOgYAXgNQAYgPAbAAIBTAAIAAASIgDAAIhKAAQgaAAgXAOQgWANgNAXIgBABIg4BigACOCEIAAlVIAGACIDSBMIAHACIAAEFg");
	this.shape_103.setTransform(-281.4,107.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#D87F33").s().p("AD0COIBykaIAAACIAAEYgAllCNIBHj4IAYAAIAACZQAAAaASASQAQARAXABIAEAAIAzAAIARABIBTAAIARgBIAxAAIAHAAQAVgCAPgQQATgSgBgaIAAgHIAAiRIAUAAIgbD3g");
	this.shape_104.setTransform(-305.4,63.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#94D7E6").s().p("Aj6BlIAAiWICNAAIAACWgACXAIIAAhsIBBAAIAiBsg");
	this.shape_105.setTransform(-237.9,71.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F48B62").s().p("AgcGIIg4hjQgNgXgWgNQgSgKgSgCIgNgBIhbAAIAAgBIAEAAIAAgSIBcAAQAbAAAYAPQAYANAOAYIBABzgAAMFzIAAgZIAAgHIDfAAIAAAHIAAAZgAATgOIAAl4IDTAAIAAHDgAAdglIDAAAIAAlSIjAAAgAEAgMIAAl6IADAAIAAAAIAAEqIAAAyIAAAZIAAAFgAgKgMIAAgFIAAgZIAAgyIAAgRIAAkZIADAAIAAF6g");
	this.shape_106.setTransform(-268.5,88.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#60C9DF").s().p("AOSEdIAAikIAmAAIAHABQAIACAHAFQAJAIACAMIAYCHIgCAAIAAACgAB+EdIABgEIAligIAFAAQAOABAMADQASAFACALIglCRgAvwA8IAAkuICcAAIAAEugAvnAzICNAAIAAiWIiNAAgApngdIAAkAIAoAAIABAAIBUD5IACAHgApWgpIBkAAIgjhtIhBAAg");
	this.shape_107.setTransform(-162.9,76.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#C19138").s().p("AjqAGIAAgBIAAgLIG8AAQANAAAJAIIADAEg");
	this.shape_108.setTransform(-38.3,106);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#B2B6BA").s().p("AH/GMIAkhHIAJAAIghBHgAkfl0IgbAAIjSAAIgbAAIgEAAIAAgCIAAgVIEPAAIAAAXg");
	this.shape_109.setTransform(-214.1,86.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#1F1F20").s().p("ApAApIAAgXIATABIAog7IDSAAIAoA7IASAAIHlAAIAwAAIAog7IDTAAIAnA7IADAAIAAAWg");
	this.shape_110.setTransform(-85.5,134.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FBB331").s().p("AJcD6IgDAAIgng9IgWggIioAAIgVAgIgoA9IgwAAIAAjTIByAAIAJgNIh7AAIAAhLIABABIHWAAIAtAAIAAB1Ig0AsQgOAJgIAOQgIAOAAARIAABTgAjwD6Igog9IgMgTIAEAAIAAiDID9AAIAAC9Ii7AAIAAAWgAolD5IjlgKIArhbIAhhHIA6h9IAVAAIADgPIAAADIA0ABIAliRQgCgLgTgFQgLgDgOAAQAEgLAJgHQAJgIANAAIKvAAQAkAAAbAXIAEAEIgIgBIgmAAIAACjIBdABIAABVIkiAAIAAjnIgEAAIAADnIj9AAIAAjnIgFAAIAAgSIgUAAIAACkIAUAAIAABVIlJAAIgJANIFSAAIAACCIgIgMIioAAIgVAgIgoA9gAgfDkIAAi9IEiAAIAAC9g");
	this.shape_111.setTransform(-88.2,111.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#D0402F").s().p("AGVGEIAAgVIAAgZIAVAAIAAlmIADAAIAAgEIFdAAQAEASACASIgBA5QgCAbgHAaIgCAHIgQArIgBADIglA7IgPATIgWAYQghAmgqAZQgQAJgQAHQgcANgdAHQgkAIgmAAgACNGEIg4hiQgOgXgXgNQgQgKgTgDQATACARAKQAXANANAXIA4BjIASAAIhBhzQgOgYgXgNQgYgOgcAAIhbAAIhTAAQgbAAgYAOQgXANgOAYIhCBzIATAAIAAAAIjqAAQhLAAg9grQg8gsgZhHIgJgaQgHgTgDgTIAhAAIAAhrIggAAQAFgaALgZIAMgcIAAAAIOLAAIAAAEIAEAAIAAFmIAUAAIAAAZIAAAVgAj3EhQANgXAWgNQAXgNAaAAIBKAAIAAAAIhJAAQgbAAgXAOQgXANgNAXgAsMCeQgEgaABgbQABgTADgTIAbAAIAABbgArDh2IBykNIhSEPg");
	this.shape_112.setTransform(-285.5,88.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#F59331").s().p("AL5D9IldAAIAAgaIFYAAIAAABIABAGQAIAbACAdQgCgTgEgSgAr+D9IAKgaIOBAAIAAAagAGcCxIAAkpIAAgyIgDAAIAAgFIkIAAIAAAFIgEAAIAAAbIAAAVIhyEaIByAAIAAARItrAAIABgBIgCAAIAHgRIACAAIBtkBQAXg3AxghQAqgbAvgFIADAAIARgBINrhGQAOAAAOACIACABQAqAGAkAYQAyAhAXA3IANAmIgpAAIAAD/ICAAAIgCgHIAVA6IgBAAIAAABgAo+CfIGtAAIAaj3IgTAAIAAgIIgBAAIAAgBIlTAAIAABhIABAMIAAArQAAAfAVAVQAPAPATAFQgWgCgRgQQgSgSAAgaIAAiZIgYAAgArUCbIAgACIBSkOgAigBrQAVgUABgeIAAAIQAAAagSASQgQAPgVADQATgFAOgPg");
	this.shape_113.setTransform(-283.8,61.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#231F20").s().p("AjeBKIAAAAIAAAAIA5hhQANgYAXgMQAWgOAbAAIBJAAIBaAAIANABQASADARAKQAWAMAOAYIA4Bhg");
	this.shape_114.setTransform(-293.7,120.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#A82D28").s().p("AF+HMIAAgHIjgAAIAAAHIgTAAIAAlnIAAl5IAbAAIAAF3IgHgCIAAFWIDfAAIAAkGIgGgCIAAnDIAaAAIAAF5IAAFngACLlGIAAgFIEHAAIAAAFgAnHmFIOKhFIAJAPQgNgCgPAAItrBGIgRABg");
	this.shape_115.setTransform(-283.1,77.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AL0EWIAAgBIlYAAIAAgyIFGAAIABAAIASAzgAr0EVIAUgyIACAAINrAAIAAAygAm8jPIC/gPIAzgEIBsgJIA8gEIAmgDIAzgEIAogDIAJgBIFVgbIAXAoIgBAAIgJgQIuLBGIgEAPIgDAAg");
	this.shape_116.setTransform(-283.8,56.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#8C959D").s().p("AAlAIIgUAAIg/AAIAAgEIAAgLIBdAAIAAAPg");
	this.shape_117.setTransform(-171,126.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#B2B3B7").s().p("AAfA3IABgSIAQgGIAAAYgAgjAPIAAgXIAAgTIBDAAIAAgTIhZAAIAAgIIBmAAIAAAbIANAAIAAAqg");
	this.shape_118.setTransform(-172.1,124.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#0096CB").s().p("Ai0BFIgIgCIgDgBQhkAFgkgMQg6gSgFhEQBlAEBygEIAzgDQA4gDA7gFIBcgHIAzgEQCQgMBxgHQABBCg3AWQgiAPhjAHQgIAFgIACIgIAAQgHAAgIgCQgPgFgLgCQgLgDgIABQgIAAgYAIIgaAJIgMAEIg8AFQgHgCgHgHQgWgRgPABQgLABgvAQIgJADQgZAJgQABIgGAAIgFAAg");
	this.shape_119.setTransform(-292.2,26.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#D4D8D3").s().p("ASgIzIgEAAIkjAAIgFAAIj8AAIgFAAIlSAAIAJgNIFJAAIAFAAID8AAIAFAAIEjAAIAEAAIB7AAIgJANgApvhgIAAgXIkOAAIAAgbIAEAAIEHAAIAEAAIAAAygA0Jj/IAAAAQARgBAYgJIAJgDIABARIgyADgAwGkWQAYgIAIAAQAHgBAMACIAAANIgzAEgA0ZoaIAAgGIAygDIAAAIIALC4IgyADgAwWodIgBgSIAzgDIAAABIALC6IgzAFg");
	this.shape_120.setTransform(-180.2,59);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00AFEC").s().p("AkIFzIgRgBQgqgFgfggQghghgEgtIgBgMIAAhiIFTAAIAAABIAABhQAAA1glAlQggAggqAFIgRABgAl0ERQAAAjAZAZQAZAZAjAAICCAAQAkAAAYgZQAZgZAAgjIAAgfIksAAgAiygkIALAAIAAAAIgEABIgHgBgAmFiFIAAgFQgFhSA2g9QA2g9BRgFQAFAAAQAcIALC6Qg7ACg3AAQg1AAgxgCgAiFlAIACgFQARglANgBQAxgCArARQAOgIAlATQATAKANAFIALCrIhcAHQg7AFg4ADgAB8lVIACgDQAPgZALAEQAQgEARgBQBRgFA9A3QA9A2AEBRIABALQhyAHiQAMg");
	this.shape_121.setTransform(-292.4,37.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#5E6B68").s().p("AE4AgIAAgYIAUAAIgPAGIgCASgAlLAEQAdgGAcgNQAQgHAQgJIHqAAIAAAYIAAALg");
	this.shape_122.setTransform(-200.6,126.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.CarPrimary, new cjs.Rectangle(-364,0,358.5,148.5), null);


(lib.Windmill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(33.1,36.6,1,1,0,0,0,0.2,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:8.1,rotation:179,y:36.7},60).to({regX:0.3,rotation:358},59).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B35337").s().p("AgSEyIAJpjIATAAIAIJjg");
	this.shape.setTransform(33.1,66.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,0,64.7,97.1);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CloudsCached();
	this.instance.parent = this;
	this.instance.setTransform(-1223.3,0.1,1,1,0,0,0,2679.3,59.9);
	this.instance.cache(-2,-2,5363,124);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3902.6,-59.8,5358.6,119.8);


(lib.Clouds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy 2
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3621.6,-174.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:886},719).wait(1));

	// Layer 1 copy
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(3894.6,59.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:1159},719).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-281,-234,5631.6,353.8);


(lib.CarRandom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(2158.8,28.7,1,1,0,0,0,36.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,x:51.2},299).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2071,0,102.4,57.3);


// stage content:
(lib.AnimateCommons_FlexibleLayout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// Animate Commons: Flexible Layout
		
		AC.FlexibleLayout.setup(this, {
			originX: 50, // percent
			originY: 100 // percent
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Cars
	this.instance = new lib.CarPrimary();
	this.instance.parent = this;
	this.instance.setTransform(564,353.1,1,1,0,0,0,179.2,74.2);
	this.instance.cache(-366,-2,363,153);

	this.instance_1 = new lib.CarRandom();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-732.1,346.2,1,1,0,0,0,51.1,28.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Clouds
	this.instance_2 = new lib.Clouds();
	this.instance_2.parent = this;
	this.instance_2.setTransform(296.7,73.7,1,1,0,0,0,947.9,59.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Scenery
	this.instance_3 = new lib.Scenery();
	this.instance_3.parent = this;
	this.instance_3.setTransform(300,231.7,1,1,0,0,0,960,218.2);
	this.instance_3.cache(-2,-2,1924,441);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Windmill
	this.instance_4 = new lib.Windmill();
	this.instance_4.parent = this;
	this.instance_4.setTransform(837.6,184.2,0.623,0.623,0,0,0,32.9,48.6);

	this.instance_5 = new lib.Windmill();
	this.instance_5.parent = this;
	this.instance_5.setTransform(911,171.6,0.623,0.623,0,0,0,32.9,48.6);

	this.instance_6 = new lib.Windmill();
	this.instance_6.parent = this;
	this.instance_6.setTransform(867.7,155.8,1,1,0,0,0,32.9,48.6);

	this.instance_7 = new lib.Windmill();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-98.3,217.1,1,1,0,0,0,32.9,48.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B7DCE9").s().p("EiV+A8xMAAAh5hMEr9AAAMAAAB5hg");
	this.shape.setTransform(299.9,-219.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CDE5F1").s().p("EiV+AjKMAAAhGTMEr9AAAMAAABGTg");
	this.shape_1.setTransform(299.9,225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-632.2,-383.1,5631.6,1058.2);
// library properties:
lib.properties = {
	width: 600,
	height: 450,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;