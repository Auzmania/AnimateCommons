(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"AnimateCommons_Parallax_atlas_P_", frames: [[1298,335,250,147],[1298,0,128,333],[0,0,1296,600]]}
];


// symbols:



(lib.Background = function() {
	this.initialize(img.Background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1017,600);


(lib.Chair = function() {
	this.spriteSheet = ss["AnimateCommons_Parallax_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Lamp_big = function() {
	this.spriteSheet = ss["AnimateCommons_Parallax_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Table = function() {
	this.spriteSheet = ss["AnimateCommons_Parallax_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
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


(lib.Table_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Table();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Table_1, new cjs.Rectangle(0,0,1296,600), null);


(lib.Lamp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Lamp_big();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Lamp, new cjs.Rectangle(0,0,128,333), null);


(lib.Chair_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Chair();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Chair_1, new cjs.Rectangle(0,0,250,147), null);


(lib.Background_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Background();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Background_1, new cjs.Rectangle(0,0,1017,600), null);


// stage content:
(lib.AnimateCommons_Parallax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// Setup Parallax
		AC.Parallax.setup(this);
		
		
		
		
		// Immediate movement
		//AC.Parallax.setup(this, {speed: 1, throttle: 10});
		
		// Immediate movement
		//AC.Parallax.setup(this, {speed: 1, throttle: 10});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Background
	this.parallax5 = new lib.Chair_1();
	this.parallax5.parent = this;
	this.parallax5.setTransform(344,526.5,1,1,0,0,0,125,73.5);

	this.timeline.addTween(cjs.Tween.get(this.parallax5).wait(1));

	// Lamp
	this.parallax10 = new lib.Table_1();
	this.parallax10.parent = this;
	this.parallax10.setTransform(373,300,1,1,0,0,0,648,300);

	this.timeline.addTween(cjs.Tween.get(this.parallax10).wait(1));

	// Table
	this.parallax20 = new lib.Lamp();
	this.parallax20.parent = this;
	this.parallax20.setTransform(660,247.5,1,1,0,0,0,64,166.5);

	this.timeline.addTween(cjs.Tween.get(this.parallax20).wait(1));

	// Chair
	this.parallax40 = new lib.Background_1();
	this.parallax40.parent = this;
	this.parallax40.setTransform(423.5,300,1,1,0,0,0,508.5,300);

	this.timeline.addTween(cjs.Tween.get(this.parallax40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(125,300,1296,600);
// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Background.jpg?1478970820098", id:"Background"},
		{src:"images/AnimateCommons_Parallax_atlas_P_.png?1478970820091", id:"AnimateCommons_Parallax_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;