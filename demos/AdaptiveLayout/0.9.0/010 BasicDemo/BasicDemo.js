(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.10,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap1.png", id:"Bitmap1"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,62);


(lib.Layout900x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAnQgJgLAAgcQAAgbAKgNQAIgKANAAQAOAAAIALQAKAMAAAbQAAAcgKAMQgIAKgOAAQgNAAgJgLgAgFggQgCADgCAFQgCAIAAAQQAAARACAHQABAGAEACQACADACAAQADAAADgDQADgCABgFQACgIAAgRQAAgQgCgHQgBgGgDgDQgDgBgDAAQgCAAgDABg");
	this.shape.setTransform(52.4,9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAnQgJgLAAgcQAAgbAKgNQAIgKANAAQAOAAAIALQAKAMAAAbQAAAcgKAMQgIAKgOAAQgNAAgJgLgAgFggQgCADgCAFQgCAIAAAQQAAARACAHQACAGACACQADADACAAQADAAADgDQADgCABgFQACgIAAgRQAAgQgCgHQgBgGgDgDQgDgBgDAAQgCAAgDABg");
	this.shape_1.setTransform(44.7,9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.988)").s().p("AgWArQgJgIgBgNIATgCQAAAIAEADQAEAEAFAAQAFAAAEgFQAEgEAAgIQAAgHgEgEQgEgFgFAAIgHACIACgOQAGAAAEgDQAEgEAAgGQAAgFgDgDQgDgDgDAAQgFAAgEADQgDAEgBAGIgSgDQACgJAEgFQAEgGAGgDQAHgDAIAAQAMAAAJAJQAHAIAAAJQAAANgOAIQAIACAFAEQAGAHAAAJQAAANgKAJQgKAJgNAAQgNABgJgIg");
	this.shape_2.setTransform(36.9,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.988)").s().p("AAOAkIgOgXIgOAXIgWAAIAagkIgZgjIAXAAIAMAUIAMgUIAXAAIgZAjIAbAkg");
	this.shape_3.setTransform(29.2,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAnQgJgLAAgcQAAgbAJgNQAJgKANAAQAOAAAIALQAKAMAAAbQAAAcgKAMQgIAKgOAAQgNAAgJgLgAgFggQgDADgBAFQgCAIAAAQQAAARACAHQABAGADACQADADACAAQADAAACgDQAEgCABgFQACgIAAgRQAAgQgCgHQgBgGgEgDQgCgBgDAAQgCAAgDABg");
	this.shape_4.setTransform(21.4,9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAnQgJgLAAgcQAAgbAJgNQAJgKANAAQAOAAAIALQAKAMAAAbQAAAcgKAMQgIAKgOAAQgNAAgJgLgAgFggQgDADgBAFQgCAIAAAQQAAARACAHQACAGADACQACADACAAQADAAACgDQAEgCABgFQACgIAAgRQAAgQgCgHQgBgGgEgDQgCgBgDAAQgCAAgDABg");
	this.shape_5.setTransform(13.7,9.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.988)").s().p("AgVAsQgHgGgCgMIATgCQAAAFADADQADADAFAAQAEAAAEgGQAEgFABgRQgHAIgJAAQgMAAgJgJQgIgHAAgPQAAgPAJgKQAJgJAOAAQANAAAKAMQAKAMAAAaQAAAagKAMQgLANgOAAQgLAAgIgHgAgJgeQgEAEAAAKQAAAKAEAEQAEADAFAAQAEAAAEgDQADgEAAgIQABgKgFgFQgEgFgEAAQgFAAgDAEg");
	this.shape_6.setTransform(5.9,9.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,204,153,0.498)").s().p("EhGTAXbMAAAgu2MCMnAAAMAAAAu2g");
	this.shape_7.setTransform(450,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,900,300);


(lib.Layout600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAnQgJgLAAgcQAAgbAKgNQAIgKANAAQAOAAAIALQAKAMAAAbQAAAcgKAMQgIAKgOAAQgNAAgJgLgAgFggQgCADgCAFQgCAIAAAQQAAARACAHQABAGAEACQACADACAAQADAAADgDQADgCABgFQACgIAAgRQAAgQgCgHQgBgGgDgDQgDgBgDAAQgCAAgDABg");
	this.shape.setTransform(52.4,9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAnQgJgLAAgcQAAgbAKgNQAIgKANAAQAOAAAIALQAKAMAAAbQAAAcgKAMQgIAKgOAAQgNAAgJgLgAgFggQgCADgCAFQgCAIAAAQQAAARACAHQACAGACACQADADACAAQADAAADgDQADgCABgFQACgIAAgRQAAgQgCgHQgBgGgDgDQgDgBgDAAQgCAAgDABg");
	this.shape_1.setTransform(44.7,9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.988)").s().p("AgWArQgJgIgBgNIATgCQAAAIAEADQAEAEAFAAQAFAAAEgFQAEgEAAgIQAAgHgEgEQgEgFgFAAIgHACIACgOQAGAAAEgDQAEgEAAgGQAAgFgDgDQgDgDgDAAQgFAAgEADQgDAEgBAGIgSgDQACgJAEgFQAEgGAGgDQAHgDAIAAQAMAAAJAJQAHAIAAAJQAAANgOAIQAIACAFAEQAGAHAAAJQAAANgKAJQgKAJgNAAQgNABgJgIg");
	this.shape_2.setTransform(36.9,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.988)").s().p("AAOAkIgOgXIgOAXIgWAAIAagkIgZgjIAXAAIAMAUIAMgUIAXAAIgZAjIAbAkg");
	this.shape_3.setTransform(29.2,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAnQgJgLAAgcQAAgbAJgNQAJgKANAAQAOAAAIALQAKAMAAAbQAAAcgKAMQgIAKgOAAQgNAAgJgLgAgFggQgDADgBAFQgCAIAAAQQAAARACAHQABAGADACQADADACAAQADAAACgDQAEgCABgFQACgIAAgRQAAgQgCgHQgBgGgEgDQgCgBgDAAQgCAAgDABg");
	this.shape_4.setTransform(21.4,9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAnQgJgLAAgcQAAgbAJgNQAJgKANAAQAOAAAIALQAKAMAAAbQAAAcgKAMQgIAKgOAAQgNAAgJgLgAgFggQgDADgBAFQgCAIAAAQQAAARACAHQACAGADACQACADACAAQADAAACgDQAEgCABgFQACgIAAgRQAAgQgCgHQgBgGgEgDQgCgBgDAAQgCAAgDABg");
	this.shape_5.setTransform(13.7,9.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.988)").s().p("AgXAnQgJgMAAgaQAAgbAKgMQAKgLAOgBQAMABAHAGQAIAGACANIgTABQgBgFgCgDQgDgDgEAAQgEAAgFAFQgEAGgBASQAHgJAIAAQANAAAIAJQAJAHAAAPQAAAPgJAJQgJAJgOAAQgNABgLgMgAgGACQgFAFAAAIQAAAKAFAEQAEAGAEAAQAFAAAEgFQADgDAAgKQAAgKgEgFQgEgCgFAAQgEAAgDACg");
	this.shape_6.setTransform(6,9.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,204,255,0.498)").s().p("Egu3AXbMAAAgu2MBdvAAAMAAAAu2g");
	this.shape_7.setTransform(300,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.Layout300x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAnQgJgLAAgcQAAgbAKgNQAIgKANAAQAOAAAIALQAKAMAAAbQAAAcgKAMQgIAKgOAAQgNAAgJgLgAgFggQgCADgCAFQgCAIAAAQQAAARACAHQABAGAEACQACADACAAQADAAADgDQADgCABgFQACgIAAgRQAAgQgCgHQgBgGgDgDQgDgBgDAAQgCAAgDABg");
	this.shape.setTransform(52.4,9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAnQgJgLAAgcQAAgbAKgNQAIgKANAAQAOAAAIALQAKAMAAAbQAAAcgKAMQgIAKgOAAQgNAAgJgLgAgFggQgCADgCAFQgCAIAAAQQAAARACAHQACAGACACQADADACAAQADAAADgDQADgCABgFQACgIAAgRQAAgQgCgHQgBgGgDgDQgDgBgDAAQgCAAgDABg");
	this.shape_1.setTransform(44.7,9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.988)").s().p("AgWArQgJgIgBgNIATgCQAAAIAEADQAEAEAFAAQAFAAAEgFQAEgEAAgIQAAgHgEgEQgEgFgFAAIgHACIACgOQAGAAAEgDQAEgEAAgGQAAgFgDgDQgDgDgDAAQgFAAgEADQgDAEgBAGIgSgDQACgJAEgFQAEgGAGgDQAHgDAIAAQAMAAAJAJQAHAIAAAJQAAANgOAIQAIACAFAEQAGAHAAAJQAAANgKAJQgKAJgNAAQgNABgJgIg");
	this.shape_2.setTransform(36.9,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.988)").s().p("AAOAkIgOgXIgOAXIgWAAIAagkIgZgjIAXAAIAMAUIAMgUIAXAAIgZAjIAbAkg");
	this.shape_3.setTransform(29.2,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAnQgJgLAAgcQAAgbAJgNQAJgKANAAQAOAAAIALQAKAMAAAbQAAAcgKAMQgIAKgOAAQgNAAgJgLgAgFggQgDADgBAFQgCAIAAAQQAAARACAHQABAGADACQADADACAAQADAAACgDQAEgCABgFQACgIAAgRQAAgQgCgHQgBgGgEgDQgCgBgDAAQgCAAgDABg");
	this.shape_4.setTransform(21.4,9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAnQgJgLAAgcQAAgbAJgNQAJgKANAAQAOAAAIALQAKAMAAAbQAAAcgKAMQgIAKgOAAQgNAAgJgLgAgFggQgDADgBAFQgCAIAAAQQAAARACAHQACAGADACQACADACAAQADAAACgDQAEgCABgFQACgIAAgRQAAgQgCgHQgBgGgEgDQgCgBgDAAQgCAAgDABg");
	this.shape_5.setTransform(13.7,9.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.988)").s().p("AgWArQgJgIgBgNIATgCQAAAIAEADQAEAEAFAAQAFAAAEgFQAEgEAAgIQAAgHgEgEQgEgFgFAAIgHACIACgOQAGAAAEgDQAEgEAAgGQAAgFgDgDQgDgDgDAAQgFAAgEADQgDAEgBAGIgSgDQACgJAEgFQAEgGAGgDQAHgDAIAAQAMAAAJAJQAHAIAAAJQAAANgOAIQAIACAFAEQAGAHAAAJQAAANgKAJQgKAJgNAAQgNABgJgIg");
	this.shape_6.setTransform(5.9,9.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,51,102,0.498)").s().p("A3bXbMAAAgu2MAu2AAAMAAAAu2g");
	this.shape_7.setTransform(150,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.LibEnforcer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		AC.destroyChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Layout900x300();
	this.instance.setTransform(340,190,1,1,0,0,0,300,150);

	this.instance_1 = new lib.Layout300x300();
	this.instance_1.setTransform(300,150,1,1,0,0,0,300,150);

	this.instance_2 = new lib.Layout600x300();
	this.instance_2.setTransform(320,170,1,1,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,940,340);


// stage content:
(lib.BasicDemo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		AC.AdaptiveLayout.setup(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.LibEnforcer();
	this.instance.setTransform(458.3,-86.3,1,1,0,0,0,344.1,150);

	this.instance_1 = new lib.Bitmap1();
	this.instance_1.setTransform(0,-74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,-86.3,1054.2,340);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;