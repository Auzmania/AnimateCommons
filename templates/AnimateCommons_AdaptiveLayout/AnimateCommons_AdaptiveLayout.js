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


(lib.Layout900x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.988)").s().p("AgXAoQgJgMAAgcQAAgbAKgNQAIgKAOAAQAPAAAHALQAKAMAAAbQAAAcgKANQgHAKgPAAQgNAAgKgLgAgFggQgDACgBAGQgDAHAAARQAAARADAHQABAHADACQADADACgBQADABADgDQADgCACgGQABgIAAgRQAAgRgBgGQgCgHgDgCQgDgCgDAAQgDAAgCACg");
	this.shape.setTransform(52.4,9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.988)").s().p("AgXAoQgJgMAAgcQAAgbAKgNQAIgKAOAAQAPAAAHALQALAMgBAbQABAcgLANQgHAKgPAAQgNAAgKgLgAgFggQgDACgCAGQgCAHAAARQAAARACAHQACAHADACQADADACgBQADABADgDQADgCACgGQABgIAAgRQAAgRgBgGQgCgHgDgCQgDgCgDAAQgCAAgDACg");
	this.shape_1.setTransform(44.7,9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.988)").s().p("AgWArQgJgHgBgNIASgCQABAHAEAEQAEADAFAAQAFABAEgFQAEgEAAgJQAAgGgDgFQgEgEgGAAIgIACIACgPQAHAAAEgDQAEgFAAgFQAAgGgDgCQgDgEgEAAQgFAAgDAEQgEADAAAHIgSgDQACgJAEgFQADgGAHgDQAHgDAIAAQANAAAJAJQAHAIAAAIQAAAOgPAIQAJACAFAFQAFAHAAAIQAAAOgKAJQgJAJgOAAQgNAAgJgIg");
	this.shape_2.setTransform(36.9,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.988)").s().p("AAOAkIgOgWIgOAWIgXAAIAagkIgZgjIAYAAIAMAUIANgUIAXAAIgZAiIAbAlg");
	this.shape_3.setTransform(29.2,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAoQgJgMAAgcQAAgbAJgNQAJgKANAAQAOAAAJALQAKAMAAAbQAAAcgKANQgJAKgOAAQgOAAgIgLgAgFggQgDACgCAGQgBAHAAARQAAARABAHQACAHADACQADADACgBQADABADgDQADgCABgGQADgIAAgRQAAgRgDgGQgBgHgDgCQgDgCgDAAQgCAAgDACg");
	this.shape_4.setTransform(21.4,9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAoQgJgMAAgcQgBgbAKgNQAJgKANAAQAOAAAJALQAJAMABAbQgBAcgJANQgJAKgOAAQgOAAgIgLgAgGggQgCACgCAGQgBAHAAARQAAARABAHQACAHADACQACADADgBQADABADgDQADgCABgGQACgIABgRQgBgRgCgGQgBgHgDgCQgDgCgDAAQgDAAgDACg");
	this.shape_5.setTransform(13.7,9.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAtQgHgGgBgNIASgCQABAGACACQADADAFAAQAFAAAEgFQAEgGABgRQgHAIgJAAQgMAAgJgJQgIgIAAgOQgBgQAKgJQAIgJAOAAQAPAAAJALQALAMgBAbQAAAbgKAMQgKAMgQAAQgLAAgIgGgAgKgeQgDAEAAAKQAAAJADAFQAEADAFAAQAFAAAEgDQAEgEAAgJQAAgJgFgFQgDgFgGAAQgEAAgEAEg");
	this.shape_6.setTransform(5.9,9.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,204,153,0.498)").s().p("EhGTAXcMAAAgu3MCMnAAAMAAAAu3g");
	this.shape_7.setTransform(450,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Layout900x300, new cjs.Rectangle(0,0,900,300), null);


(lib.Layout600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.988)").s().p("AgXAoQgJgMAAgcQAAgbAKgNQAIgKAOAAQAPAAAHALQAKAMAAAbQAAAcgKANQgHAKgPAAQgNAAgKgLgAgFggQgDACgBAGQgDAHAAARQAAARADAHQABAHADACQADADACgBQADABADgDQADgCACgGQABgIAAgRQAAgRgBgGQgCgHgDgCQgDgCgDAAQgDAAgCACg");
	this.shape.setTransform(52.4,9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.988)").s().p("AgXAoQgJgMAAgcQAAgbAKgNQAIgKAOAAQAPAAAHALQALAMgBAbQABAcgLANQgHAKgPAAQgNAAgKgLgAgFggQgDACgCAGQgCAHAAARQAAARACAHQACAHADACQADADACgBQADABADgDQADgCACgGQABgIAAgRQAAgRgBgGQgCgHgDgCQgDgCgDAAQgCAAgDACg");
	this.shape_1.setTransform(44.7,9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.988)").s().p("AgWArQgJgHgBgNIASgCQABAHAEAEQAEADAFAAQAFABAEgFQAEgEAAgJQAAgGgDgFQgEgEgGAAIgIACIACgPQAHAAAEgDQAEgFAAgFQAAgGgDgCQgDgEgEAAQgFAAgDAEQgEADAAAHIgSgDQACgJAEgFQADgGAHgDQAHgDAIAAQANAAAJAJQAHAIAAAIQAAAOgPAIQAJACAFAFQAFAHAAAIQAAAOgKAJQgJAJgOAAQgNAAgJgIg");
	this.shape_2.setTransform(36.9,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.988)").s().p("AAOAkIgOgWIgOAWIgXAAIAagkIgZgjIAYAAIAMAUIANgUIAXAAIgZAiIAbAlg");
	this.shape_3.setTransform(29.2,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAoQgJgMAAgcQAAgbAJgNQAJgKANAAQAOAAAJALQAKAMAAAbQAAAcgKANQgJAKgOAAQgOAAgIgLgAgFggQgDACgCAGQgBAHAAARQAAARABAHQACAHADACQADADACgBQADABADgDQADgCABgGQADgIAAgRQAAgRgDgGQgBgHgDgCQgDgCgDAAQgCAAgDACg");
	this.shape_4.setTransform(21.4,9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAoQgJgMAAgcQgBgbAKgNQAJgKANAAQAOAAAJALQAJAMABAbQgBAcgJANQgJAKgOAAQgOAAgIgLgAgGggQgCACgCAGQgBAHAAARQAAARABAHQACAHADACQACADADgBQADABADgDQADgCABgGQACgIABgRQgBgRgCgGQgBgHgDgCQgDgCgDAAQgDAAgDACg");
	this.shape_5.setTransform(13.7,9.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.988)").s().p("AgXAoQgKgMAAgbQAAgbALgMQAKgMAPAAQAMAAAHAGQAIAHACAMIgTACQgBgGgDgCQgDgEgEAAQgFAAgFAGQgDAGgBARQAGgJAKABQAMAAAJAJQAJAHAAAPQAAAQgJAJQgKAJgOAAQgOAAgKgLgAgHADQgEAEAAAJQAAAJAEAFQAEAGAFgBQAGABADgFQADgEABgKQAAgKgFgEQgDgDgGgBQgFABgDADg");
	this.shape_6.setTransform(6,9.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,204,255,0.498)").s().p("Egu3AXcMAAAgu3MBdvAAAMAAAAu3g");
	this.shape_7.setTransform(300,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Layout600x300, new cjs.Rectangle(0,0,600,300), null);


(lib.Layout300x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.988)").s().p("AgXAoQgJgMAAgcQAAgbAKgNQAIgKAOAAQAPAAAHALQAKAMAAAbQAAAcgKANQgHAKgPAAQgNAAgKgLgAgFggQgDACgBAGQgDAHAAARQAAARADAHQABAHADACQADADACgBQADABADgDQADgCACgGQABgIAAgRQAAgRgBgGQgCgHgDgCQgDgCgDAAQgDAAgCACg");
	this.shape.setTransform(52.4,9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.988)").s().p("AgXAoQgJgMAAgcQAAgbAKgNQAIgKAOAAQAPAAAHALQALAMgBAbQABAcgLANQgHAKgPAAQgNAAgKgLgAgFggQgDACgCAGQgCAHAAARQAAARACAHQACAHADACQADADACgBQADABADgDQADgCACgGQABgIAAgRQAAgRgBgGQgCgHgDgCQgDgCgDAAQgCAAgDACg");
	this.shape_1.setTransform(44.7,9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.988)").s().p("AgWArQgJgHgBgNIASgCQABAHAEAEQAEADAFAAQAFABAEgFQAEgEAAgJQAAgGgDgFQgEgEgGAAIgIACIACgPQAHAAAEgDQAEgFAAgFQAAgGgDgCQgDgEgEAAQgFAAgDAEQgEADAAAHIgSgDQACgJAEgFQADgGAHgDQAHgDAIAAQANAAAJAJQAHAIAAAIQAAAOgPAIQAJACAFAFQAFAHAAAIQAAAOgKAJQgJAJgOAAQgNAAgJgIg");
	this.shape_2.setTransform(36.9,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.988)").s().p("AAOAkIgOgWIgOAWIgXAAIAagkIgZgjIAYAAIAMAUIANgUIAXAAIgZAiIAbAlg");
	this.shape_3.setTransform(29.2,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAoQgJgMAAgcQAAgbAJgNQAJgKANAAQAOAAAJALQAKAMAAAbQAAAcgKANQgJAKgOAAQgOAAgIgLgAgFggQgDACgCAGQgBAHAAARQAAARABAHQACAHADACQADADACgBQADABADgDQADgCABgGQADgIAAgRQAAgRgDgGQgBgHgDgCQgDgCgDAAQgCAAgDACg");
	this.shape_4.setTransform(21.4,9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAoQgJgMAAgcQgBgbAKgNQAJgKANAAQAOAAAJALQAJAMABAbQgBAcgJANQgJAKgOAAQgOAAgIgLgAgGggQgCACgCAGQgBAHAAARQAAARABAHQACAHADACQACADADgBQADABADgDQADgCABgGQACgIABgRQgBgRgCgGQgBgHgDgCQgDgCgDAAQgDAAgDACg");
	this.shape_5.setTransform(13.7,9.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.988)").s().p("AgWArQgJgHgBgNIASgCQABAHAEAEQAEADAFAAQAFABAEgFQAEgEAAgJQAAgGgDgFQgEgEgGAAIgIACIACgPQAHAAAEgDQAEgFAAgFQAAgGgDgCQgDgEgEAAQgFAAgDAEQgEADAAAHIgSgDQACgJAEgFQADgGAHgDQAHgDAIAAQANAAAJAJQAHAIAAAIQAAAOgPAIQAJACAFAFQAFAHAAAIQAAAOgKAJQgJAJgOAAQgNAAgJgIg");
	this.shape_6.setTransform(5.9,9.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,51,102,0.498)").s().p("A3bXcMAAAgu3MAu3AAAMAAAAu3g");
	this.shape_7.setTransform(150,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Layout300x300, new cjs.Rectangle(0,0,300,300), null);


(lib.LibEnforcer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// Note on: LibEnforcer
		// This symbol is just a workaround to make sure the different layout symbols will actually be exported.
		// (Symbols with a use count of 0 will not be exported in Animate CC yet)
		AC.destroy(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Content
	this.text = new cjs.Text("Note on: LibEnforcer\nThis symbol is just a workaround to make sure the different layout symbols will actually be exported.\n(Symbols with a use count of 0 will not be exported in Animate CC yet)", "bold 12px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 15;
	this.text.lineWidth = 600;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.instance = new lib.Layout900x300();
	this.instance.parent = this;
	this.instance.setTransform(340,260,1,1,0,0,0,300,150);

	this.instance_1 = new lib.Layout300x300();
	this.instance_1.parent = this;
	this.instance_1.setTransform(300,220,1,1,0,0,0,300,150);

	this.instance_2 = new lib.Layout600x300();
	this.instance_2.parent = this;
	this.instance_2.setTransform(320,240,1,1,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.LibEnforcer, new cjs.Rectangle(0,0,940,410), null);


// stage content:
(lib.AnimateCommons_AdaptiveLayout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// Animate Commons: Adaptive Layout
		
		AC.AdaptiveLayout.setup(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// SCRIPT
	this.instance = new lib.LibEnforcer();
	this.instance.parent = this;
	this.instance.setTransform(344.1,-305,1,1,0,0,0,344.1,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,-230,940,410);
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