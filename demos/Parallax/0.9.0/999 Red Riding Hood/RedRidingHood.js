(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
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


(lib.SnowBig_Still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.149)").s().p("EBgbE8+QgjgjAAgxQAAgyAjgjQAjgjAxgBQAyABAjAjQAjAjAAAyQAAAxgjAjQgjAjgyAAQgxAAgjgjgEg8qEsdQgkgkABgyQgBgyAkgjQAigjAyAAQAyAAAjAjQAjAjAAAyQAAAygjAkQgjAjgygBQgyABgigjgEgeHEgeQgjgjAAgyQAAgyAjgjQAjgjAyABQAygBAjAjQAiAjABAyQgBAygiAjQgjAjgyAAQgyAAgjgjgEicWEdeQgjgjAAgxQAAgyAjgjQAjgjAwgBQAyABAjAjQAiAjABAyQgBAxgiAjQgjAjgyAAQgwAAgjgjgEApCEb8QgigkAAgyQAAgyAigiQAjgkAxABQAxgBAkAkQAiAiAAAyQAAAygiAkQgkAigxAAQgxAAgjgigEAVdET1QgjgjAAgyQAAgyAjgiQAjgkAxAAQAxAAAjAkQAjAiAAAyQAAAygjAjQgjAigxABQgxgBgjgigEBNzEEmQgjgiAAgzQAAgxAjgjQAjgkAyAAQAxAAAjAkQAjAjAAAxQAAAzgjAiQgjAkgxAAQgyAAgjgkgEiK6EEIQgjgkAAgxQAAgyAjgjQAjgjAyAAQAxAAAjAjQAjAjABAyQgBAxgjAkQgjAigxABQgygBgjgigEgZ0EBXQgigjAAgyQAAgyAigjQAjgjAyAAQAyAAAjAjQAjAjAAAyQAAAygjAjQgjAjgyAAQgyAAgjgjgEhzBDwCQgkgkAAgxQAAgyAkgjQAjgjAxAAQAyAAAjAjQAjAjAAAyQAAAxgjAkQgjAjgyAAQgxAAgjgjgEiFaDpiQgkgjABgyQgBgyAkgjQAjgjAxAAQAyAAAkAjQAiAkAAAxQAAAygiAjQgkAjgyAAQgxAAgjgjgEhKbDlBQgkgjAAgyQAAgyAkgjQAjgjAxAAQAyAAAjAjQAjAjAAAyQAAAygjAjQgjAjgyAAQgxAAgjgjgEhDwDhxQgjgiAAgzQAAgxAjgjQAjgkAyAAQAyAAAjAkQAjAjAAAxQAAAzgjAiQgjAkgyAAQgyAAgjgkgEAODDTCQgjgkAAgxQAAgyAjgjQAjgkAxABQAyAAAjAjQAjAjAAAyQAAAxgjAkQgjAjgyAAQgxAAgjgjgECOCDOLQgkgkAAgxQAAgyAkgkQAigjAyABQAxgBAkAjQAiAkAAAyQAAAxgiAkQgkAigxAAQgyAAgigigEiEODJIQgkgjABgyQgBgxAkgjQAigkAyAAQAyAAAkAkQAiAjAAAxQAAAygiAjQgkAjgyABQgygBgigjgEBnlDGsQgjgkABgxQgBgyAjgjQAjgjAxAAQAxAAAkAjQAiAjABAyQgBAygiAjQgkAigxABQgxgBgjgigECZuC+6QgigjAAgyQAAgxAigjQAjgkAyAAQAyAAAjAkQAjAjAAAxQAAAygjAjQgjAjgyABQgygBgjgjgEgJGC9+QgjgkAAgxQAAgyAjgiQAigkAyAAQAyAAAkAkQAiAiAAAyQAAAxgiAkQgkAigyAAQgyAAgigigEgGAC4eQgjgkAAgxQAAgyAjgjQAjgjAyAAQAyAAAjAjQAjAjAAAyQAAAxgjAkQgjAigyAAQgyAAgjgigEBgbCRZQgjgjAAgyQAAgxAjgjQAjgkAxAAQAyAAAjAkQAjAjAAAxQAAAygjAjQgjAigyAAQgxAAgjgigEg8qCA4QgkgkABgxQgBgyAkgkQAigjAyAAQAyAAAjAjQAjAjAAAzQAAAxgjAkQgjAigyAAQgyAAgigigEgeHB05QgjgkAAgxQAAgyAjgjQAjgjAyAAQAyAAAjAjQAiAjABAyQgBAxgiAkQgjAigyAAQgyAAgjgigEicWBx5QgjgjAAgyQAAgxAjgjQAjgkAwAAQAyAAAjAkQAiAjABAxQgBAygiAjQgjAigyAAQgwAAgjgigEApCBwWQgigjAAgyQAAgyAigjQAjgjAxABQAxgBAkAjQAiAjAAAyQAAAygiAjQgkAjgxAAQgxAAgjgjgEAVdBoQQgjgjAAgyQAAgyAjgjQAjgjAxAAQAxAAAjAjQAjAjAAAyQAAAygjAjQgjAjgxAAQgxAAgjgjgEBNzBZCQgjgkAAgyQAAgxAjgkQAjgjAyAAQAxAAAjAjQAjAjAAAyQAAAygjAkQgjAigxAAQgyAAgjgigEiK6BYiQgjgjAAgyQAAgxAjgjQAjgjAyAAQAxAAAjAjQAjAjABAxQgBAygjAjQgjAjgxAAQgyAAgjgjgEgZ0BVyQgigkAAgxQAAgyAigjQAjgjAyAAQAyAAAjAjQAjAjAAAyQAAAxgjAkQgjAjgyAAQgyAAgjgjgEhzBBEdQgkgkAAgxQAAgyAkgjQAjgjAxgBQAyABAjAjQAjAjAAAyQAAAygjAjQgjAjgyAAQgxAAgjgjgEiFaA99QgkgkABgxQgBgyAkgjQAjgjAxAAQAyAAAkAjQAiAjAAAyQAAAxgiAkQgkAjgyAAQgxAAgjgjgEhKbA5cQgkgkAAgxQAAgyAkgjQAjgkAxABQAyAAAjAjQAjAjAAAyQAAAxgjAkQgjAjgyAAQgxAAgjgjgEhDwA2NQgjgkAAgyQAAgyAjgjQAjgjAyAAQAyAAAjAjQAjAjAAAyQAAAygjAkQgjAigyAAQgyAAgjgigEAODAncQgjgjAAgxQAAgyAjgkQAjgiAxAAQAyAAAjAiQAjAkAAAyQAAAxgjAjQgjAkgyAAQgxAAgjgkgECOCAilQgkgjAAgxQAAgzAkgjQAigjAyAAQAxAAAkAjQAiAjAAAzQAAAxgiAjQgkAkgxAAQgyAAgigkgEiEOAdkQgkgkABgyQgBgyAkgiQAigkAyAAQAyAAAkAkQAiAiAAAyQAAAygiAkQgkAjgygBQgyABgigjgEBnlAbGQgjgjABgxQgBgyAjgjQAjgjAxAAQAxAAAkAjQAiAjABAyQgBAxgiAjQgkAjgxABQgxgBgjgjgECZuATVQgigjAAgyQAAgxAigkQAjgjAyAAQAyAAAjAjQAjAkAAAxQAAAygjAjQgjAjgyAAQgyAAgjgjgApGSZQgjgkAAgxQAAgyAjgjQAigjAyAAQAyAAAkAjQAiAjAAAyQAAAxgiAkQgkAigyABQgygBgigigAmAM5QgjgkAAgyQAAgxAjgjQAjgjAyAAQAyAAAjAjQAjAjAAAxQAAAygjAkQgjAigyAAQgyAAgjgigEBgbgUkQgjgkAAgxQAAgyAjgiQAjgkAxAAQAyAAAjAkQAjAiAAAyQAAAxgjAkQgjAigyABQgxgBgjgigEg8qglGQgkgjABgyQgBgxAkgkQAigjAyAAQAyAAAjAjQAjAkAAAxQAAAygjAjQgjAjgyAAQgyAAgigjgEgeHgxEQgjgkAAgyQAAgxAjgjQAjgjAyAAQAyAAAjAjQAiAjABAxQgBAygiAkQgjAigyAAQgyAAgjgigEicWg0EQgjgkAAgxQAAgyAjgiQAjgkAwAAQAyAAAjAkQAiAiABAyQgBAxgiAkQgjAigyAAQgwAAgjgigEApCg1nQgigjAAgyQAAgyAigiQAjgkAxAAQAxAAAkAkQAiAiAAAyQAAAygiAjQgkAjgxgBQgxABgjgjgEAVdg9tQgjgjAAgzQAAgxAjgjQAjgjAxAAQAxAAAjAjQAjAjAAAxQAAAzgjAjQgjAigxAAQgxAAgjgigEBNzhM8QgjgjAAgyQAAgyAjgjQAjgjAyAAQAxAAAjAjQAjAjAAAyQAAAygjAjQgjAjgxAAQgyAAgjgjgEiK6hNaQgjgkAAgyQAAgyAjgiQAjgkAyAAQAxAAAjAkQAjAiABAyQgBAygjAkQgjAigxAAQgyAAgjgigEgZ0hQMQgigjAAgyQAAgxAigjQAjgjAygBQAyABAjAjQAjAjAAAxQAAAygjAjQgjAkgyAAQgyAAgjgkgEhzBhhgQgkgjAAgzQAAgxAkgjQAjgkAxAAQAyAAAjAkQAjAjAAAxQAAAzgjAjQgjAjgygBQgxAAgjgigEiFahoBQgkgjABgxQgBgyAkgkQAjgjAxAAQAyAAAkAjQAiAkAAAyQAAAxgiAjQgkAkgyAAQgxAAgjgkgEhKbhsiQgkgjAAgxQAAgyAkgkQAjgjAxABQAygBAjAjQAjAkAAAyQAAAxgjAjQgjAkgyAAQgxAAgjgkgEhDwhvxQgjgjAAgyQAAgyAjgjQAjgjAyAAQAyAAAjAjQAjAjAAAyQAAAygjAjQgjAkgygBQgyABgjgkgEAODh+hQgjgjAAgyQAAgxAjgjQAjgkAxAAQAyAAAjAkQAjAjAAAxQAAAygjAjQgjAjgyABQgxgBgjgjgECOCiDYQgkgjAAgyQAAgyAkgjQAigjAyAAQAxAAAkAjQAiAjAAAyQAAAygiAjQgkAjgxAAQgyAAgigjgEiEOiIaQgkgjABgyQgBgyAkgjQAigjAyAAQAyAAAkAjQAiAjAAAyQAAAygiAjQgkAjgyAAQgyAAgigjgEBnliK2QgjgkABgyQgBgyAjgiQAjgjAxAAQAxAAAkAjQAiAiABAyQgBAygiAkQgkAigxAAQgxAAgjgigECZuiSoQgigjAAgyQAAgyAigjQAjgjAygBQAyABAjAjQAjAjAAAyQAAAygjAjQgjAjgyAAQgyAAgjgjgEgJGiTlQgjgjAAgyQAAgxAjgjQAigjAyAAQAyAAAkAjQAiAjAAAxQAAAygiAjQgkAjgyAAQgyAAgigjgEgGAiZFQgjgjAAgxQAAgzAjgiQAjgjAyAAQAyAAAjAjQAjAiAAAzQAAAxgjAjQgjAjgyAAQgyAAgjgjgEBgbi1zQgjgjAAgyQAAgyAjgjQAjgiAxAAQAyAAAjAiQAjAjAAAyQAAAygjAjQgjAigyABQgxgBgjgigEg8qjGVQgkgjABgyQgBgxAkgjQAigkAyAAQAyAAAjAkQAjAjAAAxQAAAygjAjQgjAjgyABQgygBgigjgEgeHjSTQgjgkAAgxQAAgyAjgiQAjgkAyAAQAyAAAjAkQAiAiABAyQgBAxgiAkQgjAigyAAQgyAAgjgigEicWjVTQgjgjAAgyQAAgyAjgjQAjgiAwAAQAyAAAjAiQAiAjABAyQgBAygiAjQgjAjgyAAQgwAAgjgjgEApCjW2QgigjAAgyQAAgxAigjQAjgkAxAAQAxAAAkAkQAiAjAAAxQAAAygiAjQgkAjgxAAQgxAAgjgjgEAVdje8QgjgjAAgyQAAgyAjgiQAjgjAxgBQAxABAjAjQAjAiAAAyQAAAygjAjQgjAigxAAQgxAAgjgigEBNzjuLQgjgjAAgxQAAgzAjgiQAjgkAyAAQAxAAAjAkQAjAiAAAzQAAAxgjAjQgjAkgxAAQgyAAgjgkgEiK6jupQgjgkAAgyQAAgxAjgiQAjgkAyAAQAxAAAjAkQAjAiABAxQgBAygjAkQgjAigxAAQgyAAgjgigEgZ0jxaQgigjAAgyQAAgxAigkQAjgjAyAAQAyAAAjAjQAjAkAAAxQAAAygjAjQgjAjgyAAQgyAAgjgjgEhzBkCvQgkgjAAgyQAAgyAkgjQAjgkAxABQAygBAjAkQAjAjAAAyQAAAygjAjQgjAjgyAAQgxAAgjgjgEiFakJPQgkgjABgyQgBgyAkgjQAjgjAxgBQAyABAkAjQAiAjAAAyQAAAygiAjQgkAjgyAAQgxAAgjgjgEhKbkNwQgkgjAAgyQAAgyAkgjQAjgjAxgBQAyABAjAjQAjAjAAAyQAAAygjAjQgjAjgyAAQgxAAgjgjgEhDwkRAQgjgjAAgxQAAgzAjgjQAjgjAyAAQAyAAAjAjQAjAjAAAzQAAAxgjAjQgjAkgyAAQgyAAgjgkgEAODkfvQgjgjAAgzQAAgxAjgjQAjgkAxAAQAyAAAjAkQAjAjAAAxQAAAzgjAjQgjAjgyAAQgxAAgjgjgECOCkkmQgkgkAAgyQAAgyAkgiQAigkAyAAQAxAAAkAkQAiAiAAAyQAAAygiAkQgkAjgxgBQgyABgigjgEiEOkppQgkgjABgxQgBgzAkgjQAigjAyAAQAyAAAkAjQAiAjAAAzQAAAxgiAjQgkAkgyAAQgyAAgigkgEBnlksFQgjgjABgyQgBgyAjgiQAjgkAxAAQAxAAAkAkQAiAiABAyQgBAygiAjQgkAigxAAQgxAAgjgigECZukz3QgigjAAgyQAAgyAigjQAjgjAyAAQAyAAAjAjQAjAkAAAxQAAAygjAjQgjAkgyAAQgyAAgjgkgEgJGk0zQgjgkAAgxQAAgyAjgjQAigjAyAAQAyAAAkAjQAiAjAAAyQAAAxgiAkQgkAjgygBQgyABgigjgEgGAk6UQgjgjAAgxQAAgyAjgjQAjgjAyAAQAyAAAjAjQAjAjAAAyQAAAxgjAjQgjAkgyAAQgyAAgjgkg");
	this.shape.setTransform(897.8,1817.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.SnowBig_Still, new cjs.Rectangle(-106.4,-214.3,2008.5,4064.2), null);


(lib.Level6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(73,82,91,0)","rgba(54,58,69,0.247)","rgba(41,42,53,0.569)","rgba(33,32,44,0.678)","rgba(30,28,41,0.776)"],[0,0.216,0.443,0.694,1],-93.7,44.4,0,-93.7,44.4,527.9).s().p("EhpTAfQMAAAg+fMDSnAAAMAAAA+fg");
	this.shape.setTransform(488,200,1.188,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Level6, new cjs.Rectangle(-312.7,0,1601.5,400), null);


(lib.Level5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#534154","#47394B","#352C3B","#282331","#201E2A","#1E1C29"],[0.012,0.075,0.208,0.369,0.573,1],0,54.9,0,-54.9).s().p("EjUlAIlIAAriQIcgRI+gQQR7ggClAEQCmAECNBhQBGAxAmAwMAiigCJIHPjVIJGHHIGBjyIJGAAIHIg9IILA8QIRAyAggxQASgcGogcQGFgZIbgOQIpgOGAAHQGwAIAhAhQA6A7JwitQE4hWEthiMAlzAH8MAkTAAAMAlFgDSIKpAAMAiRADSIGTjSIQGDSIHdDRIRPmjIYDEvIAAHwg");
	this.shape.setTransform(479.4,386,0.353,0.353);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#1E1C29","#201E2A","#282331","#352C3B","#47394B","#534154"],[0,0.427,0.631,0.792,0.925,0.988],61,567,-17.8,-570).s().p("EABWBYlUgA0gRmgC8g5vIuZ2fIAqotINVXQUgCJgqAgCVgtCIiXm2IIOAAMACoAp4MAJfgp4IGIAAMgOrA4lMAHnB4kg");
	this.shape_1.setTransform(-111,210,0.37,0.37);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#1E1C29","#24202D","#332B3A","#4D3E50","#534154"],[0,0.251,0.569,0.925,0.988],-68.3,576.5,65.2,-564.4).s().p("EgXeBYlUACJgPVAG4gynIjlkhIBKp3IDdGuUAFagn0AITg9rIgdiEIG/AAIj2fNIUhphIgUCmI0xLdMgEVAjRISE9UIA8AzQA7A7gEAiQgEAdoUO/QlfJ2naNPMgLrBesg");
	this.shape_2.setTransform(1142.4,210,0.37,0.37);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#1E1C29","#201E2A","#282331","#352C3B","#47394B","#534154"],[0,0.427,0.631,0.792,0.925,0.988],-100.6,363.4,96.7,-587.8).s().p("EggeBZnMAEQgjeUAAjgB9AFagu4UAEPgkpAGmg68IJtAAMgFPBUEUAHpgbpAPjg4bIGdAAMgKwAo3ISXi9ICODHI3EJPMggMCBsIpsAng");
	this.shape_3.setTransform(1075.7,214,0.37,0.37);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#1E1C29","#24202D","#332B3A","#4D3E50","#534154"],[0,0.251,0.569,0.925,0.988],-68.3,576.5,65.2,-564.4).s().p("EgXeBYlUACJgPVAG4gynIjlkhIBKp3IDdGuUAFagn0AITg9rIgdiEIG/AAIj2fNIUhphIgUCmI0xLdMgEVAjRISE9UIA8AzQA7A7gEAiQgEAdoUO/QlfJ2naNPMgLrBesg");
	this.shape_4.setTransform(133.4,210,0.37,0.37);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#1E1C29","#24202D","#332B3A","#4D3E50","#534154"],[0,0.251,0.569,0.925,0.988],-136.6,-562.1,123,585.2).s().p("EAXMBYlMgV6heHQonsJmqpdQp4uBgGgcQgIgiA0hAIA2g6IVGbPMgIDgimI13pMIglilIVaHUMgHnggvIHmAAIgZDeUAKkArOANyA4QICvh+ICMEmIjFE4UAMzA0FADqAOog");
	this.shape_5.setTransform(35.3,210,0.37,0.37);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#1E1C29","#24202D","#332B3A","#4D3E50","#534154"],[0,0.251,0.569,0.925,0.988],-40.9,572,29.2,-565.6).s().p("EgTWBYlUABGgMrAEpg59Ij0kUIAnp6ID1GhUADngtEAEQg1wIGRAAIhuZrIT8qpIgKCoI0GMlMgCaAjdIQc+SIA/AxQA9A3gCAjUgADAAwgTFAm3MgGyBj9g");
	this.shape_6.setTransform(228.2,210,0.37,0.37);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#534154","#1E1C29"],[0.012,1],109.1,468.2,-39.6,-486.9).s().p("EgORhK0IEkAAMAO3BjlUgDWglUgFog+RIEjAAIAMB+IASh+ICzAAIiHLcMAFPAzVIHJkFIAAEgIlcEtIg2D/MAGSBMdIhzAMIABAJImUA/UgAQgDDgUMiSmg");
	this.shape_7.setTransform(1010.7,208.6,0.468,0.457);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#1E1C29","#201E2A","#282331","#352C3B","#47394B","#534154"],[0,0.427,0.631,0.792,0.925,0.988],-100.6,363.4,96.7,-587.8).s().p("EggeBZnMAEQgjeUAAjgB9AFagu4UAEPgkpAGmg68IJtAAMgFPBUEUAHpgbpAPjg4bIGdAAMgKwAo3ISXi9ICODHI3EJPMggMCBsIpsAng");
	this.shape_8.setTransform(66.8,214,0.37,0.37);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#1E1C29","#201E2A","#282331","#352C3B","#47394B","#534154"],[0,0.427,0.631,0.792,0.925,0.988],0,567,0,-566.9).s().p("EgDpBYlUAAVgNrAA2gt7UgN5gvxAAAgAqQAAggBJhgQAlgxAkgqMAL5AkfUAAlgfSABBg5vImZtLIFkAAIBBCKIADiKIGnAAIgCG6ICym6IEnAAIneSiMgAPAmrIILyCICTISIqhSUMgAsBvYg");
	this.shape_9.setTransform(922.1,210,0.37,0.37);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#1E1C29","#201E2A","#282331","#352C3B","#47394B","#534154"],[0,0.427,0.631,0.792,0.925,0.988],61,567,-17.8,-570).s().p("EABWBYlUgA0gRmgC8g5vIuZ2fIAqotINVXQUgCJgqAgCVgtCIiXm2IIOAAMACoAp4MAJfgp4IGIAAMgOrA4lMAHnB4kg");
	this.shape_10.setTransform(818,210,0.37,0.37);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#1E1C29","#201E2A","#282331","#352C3B","#47394B","#534154"],[0,0.427,0.631,0.792,0.925,0.988],81.6,562.7,-33.4,-577.2).s().p("EgGaBYlUgCYgehgMOiSoIF4AAMALcB4zUgBJggOgDNhYlIIKAAIh6ICMADIBB5IQooVIDDCUIzNPuMAEeBdhg");
	this.shape_11.setTransform(615.4,210,0.37,0.37);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#1E1C29","#24202D","#332B3A","#4D3E50","#534154"],[0,0.251,0.569,0.925,0.988],-40.8,572,29.3,-565.6).s().p("EgTWBYlUABGgMrAEpg59Ij0kUIAnp6ID1GhMAH3hi0IGRAAIhvZrIT9qpIgKCoI0GMlMgCaAjdIQc+SIA+AxQA+A3gCAjQgBAdngPaQk8KLmrNlMgGyBj9g");
	this.shape_12.setTransform(702.3,210,0.37,0.37);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#534154","#1E1C29"],[0.012,1],0,473.9,0,-473.9).s().p("EgIpBJ5IAAAJImZAAUAAPgDJACiiQ7IEiAAMgAmBicUAB/gecAEYhEAIEiAAIgFBVIAahVIC5AAIjzK1MgCtAzjINllMICMCCIwLKvMgEIBOIg");
	this.shape_13.setTransform(877.9,175.6,0.37,0.37);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#534154","#1E1C29"],[0.012,1],0,168.2,0,-168.1).s().p("AkJaRQAFhFADi6QAFjkASvdIighaIA9hVIBkBbIAW0hIjBnsIBCAAICDFFIAFlFIBtAAIgHRFIFMskIAlAAIj0KVIFqmqIATA4In7KxMgANAgsg");
	this.shape_14.setTransform(714.9,168.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#534154","#1E1C29"],[0.012,1],0,490.5,0,-490.4).s().p("EgGIBMoQAGhTAm/SIininIAAnbICuEEUAAigb6AAxgrbMgLUggSIBvhFIJyWIMAAkggIIEeAAIgDE2IDIk2IDhAAImsPMMgAXA4+IHAi/IE+rzICCAAIkgKvIC+hRIAyAhQAwAmAAAaQAAAWlkDvQjiCXk8DKIgEHvIOtpDIAAB+IutKhIgKYHIFsr0IAAEYIlvPFMgANAgXg");
	this.shape_15.setTransform(799,181.7,0.37,0.37);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#1E1C29","#201E2A","#282331","#352C3B","#47394B","#534154"],[0,0.427,0.631,0.792,0.925,0.988],0,566.9,0,-566.9).s().p("EgQKBYlQALlsAVxkUAASgPTAAxgsMIpulfIDrlJIGIFhMABYhP7IjtpYIKtAAMgASAt+MAS+gt+ICyAAMgOIAlOIWC53IBIDYMge2Ap5MgAwB4hg");
	this.shape_16.setTransform(767,210,0.37,0.37);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#1E1C29","#201E2A","#282331","#352C3B","#47394B","#534154"],[0,0.427,0.631,0.792,0.925,0.988],-84.4,353.4,57.1,-343.6).s().p("EgMBA3dUAC1gMYAOZhAyIn45hIC7oOIGraAIFC2sMAAFAh1MgPbBJwg");
	this.shape_17.setTransform(979.2,288.4,0.37,0.37);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#534154","#1E1C29"],[0.012,1],0,490.5,0,-490.4).s().p("EgGIBMoQAGhTAm/SIininIAAnbICuEEUAAigb6AAxgrbMgLUggSIBvhFIJyWIMAAkggIIEeAAIgDE2IDIk2IDhAAImsPMMgAXA4+IHAi/IE+rzICCAAIkgKvIC+hRIAyAhQAwAmAAAaQAAAWlkDvQjiCXk8DKIgEHvIOtpDIAAB+IutKhIgKYHIFsr0IAAEYIlvPFMgANAgXg");
	this.shape_18.setTransform(-61,181.7,0.37,0.37);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#534154","#1E1C29"],[0.012,1],0,490.5,0,-490.4).s().p("EgGIBMoQAGhTAm/SIininIAAnbICuEEUAAigb6AAxgrbMgLUggSIBvhFIJyWIMAAkggIIEeAAIgDE2IDIk2IDhAAImsPMMgAXA4+IHAi/IE+rzICCAAIkgKvIC+hRIAyAhQAwAmAAAaQAAAWlkDvQjiCXk8DKIgEHvIOtpDIAAB+IutKhIgKYHIFsr0IAAEYIlvPFMgANAgXg");
	this.shape_19.setTransform(166,181.7,0.37,0.37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Level5, new cjs.Rectangle(-150.7,-10.4,1348.7,438.2), null);


(lib.Level3Blurry = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#534154","#514053","#4A3B4D","#3E3344","#2E2736","#1E1C29"],[0.012,0.518,0.698,0.827,0.933,1],73.2,0,-73.1,0).s().p("EAFVBGPMgQwiMeIFEAAMARyCMeg");
	this.shape.setTransform(259.6,159.8,0.356,0.356);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#534154","#514053","#4A3B4D","#3E3344","#2E2736","#1E1C29"],[0.012,0.518,0.698,0.827,0.933,1],73.2,0,-73.1,0).s().p("EAFVBGPMgQwiMeIFEAAMARyCMeg");
	this.shape_1.setTransform(266.6,159.8,0.356,0.356);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#534154","#514053","#4A3B4D","#3E3344","#2E2736","#1E1C29"],[0.012,0.518,0.698,0.827,0.933,1],-71.3,0,71.4,0).s().p("EgLJBD6MARNiHzIFGAAMgQNCHzg");
	this.shape_2.setTransform(-327.3,154.5,0.356,0.356);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#534154","#514053","#4A3B4D","#3E3344","#2E2736","#1E1C29"],[0.012,0.518,0.698,0.827,0.933,1],-71.3,0,71.4,0).s().p("EgLJBD6MARNiHzIFGAAMgQNCHzg");
	this.shape_3.setTransform(-337.5,154.5,0.356,0.356);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#534154","#1E1C29"],[0.012,1],123.4,444.5,-12.7,-471).s().p("EAHcA8SUgBMgJfgFegpiInNiyICAj5IEwDKMgHOg3DIsi1tIDCAAIImOsIh8usIEoAAMAGlAuKMAI4gjuIBjgPImFdKIMg0BIBICNIw8f8MAMfBXmImVA8QgOi9hAnyg");
	this.shape_4.setTransform(33.9,161.6,0.356,0.356);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#534154","#1E1C29"],[0.012,1],123.4,444.5,-12.7,-471).s().p("EAHcA8SUgBMgJfgFegpiInNiyICAj5IEwDKMgHOg3DIsi1tIDCAAIImOsIh8usIEoAAMAGlAuKMAI4gjuIBjgPImFdKIMg0BIBICNIw8f8MAMfBXmImVA8QgOi9hAnyg");
	this.shape_5.setTransform(44.2,161.6,0.356,0.356);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#534154","#514053","#4A3B4D","#3E3344","#2E2736","#1E1C29"],[0.012,0.518,0.698,0.827,0.933,1],-71.3,0,71.4,0).s().p("EgLJBD6MARNiHzIFGAAMgQNCHzg");
	this.shape_6.setTransform(-344.5,154.5,0.356,0.356);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#534154","#1E1C29"],[0.012,1],0,490.5,0,-490.4).s().p("EgGIBMoQAGhTAm/SIininIAAnbICuEEUAAigb6AAxgrbMgLUggSIBvhFIJyWIMAAkggIIEeAAIgDE2IDIk2IDhAAImsPMMgAXA4+IHAi/IE+rzICCAAIkgKvIC+hRIAyAhQAwAmAAAaQAAAWlkDvQjiCXk8DKIgEHvIOtpDIAAB+IutKhIgKYHIFsr0IAAEYIlvPFMgANAgXg");
	this.shape_7.setTransform(-166.1,148.7,0.349,0.337);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#534154","#1E1C29"],[0.012,1],0,490.5,0,-490.4).s().p("EgGIBMoQAGhTAm/SIininIAAnbICuEEUAAigb6AAxgrbMgLUggSIBvhFIJyWIMAAkggIIEeAAIgDE2IDIk2IDhAAImsPMMgAXA4+IHAi/IE+rzICCAAIkgKvIC+hRIAyAhQAwAmAAAaQAAAWlkDvQjiCXk8DKIgEHvIOtpDIAAB+IutKhIgKYHIFsr0IAAEYIlvPFMgANAgXg");
	this.shape_8.setTransform(-411.9,148.7,0.349,0.337);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#534154","#1E1C29"],[0.012,1],123.4,444.5,-12.7,-471).s().p("EAHcA8SUgBMgJfgFegpiInNiyICAj5IEwDKMgHOg3DIsi1tIDCAAIImOsIh8usIEoAAMAGlAuKMAI4gjuIBjgPImFdKIMg0BIBICNIw8f8MAMfBXmImVA8QgOi9hAnyg");
	this.shape_9.setTransform(53.8,161.6,0.356,0.356);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#534154","#514053","#4A3B4D","#3E3344","#2E2736","#1E1C29"],[0.012,0.518,0.698,0.827,0.933,1],73.2,0,-73.1,0).s().p("EAFVBGPMgQwiMeIFEAAMARyCMeg");
	this.shape_10.setTransform(273.5,159.8,0.356,0.356);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#534154","#514053","#4A3B4D","#3E3344","#2E2736","#1E1C29"],[0.012,0.518,0.698,0.827,0.933,1],-71.3,0,71.4,0).s().p("EgLJBD6MARNiHzIFGAAMgQNCHzg");
	this.shape_11.setTransform(158.5,154.5,0.356,0.356);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Level3Blurry, new cjs.Rectangle(-446.2,-16.6,745.8,339.8), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#49525B","#1E1C29"],[0.012,1],0,296.6,0,-296.6).s().p("EjUlAuWMAAAgygIH1JvIdLwNMAlzAVAIR0p6IKDFlIRcprIDnCBMAvqgsuIeieVIXHzKMAh7AeyITOuVIaOXaMA/MgjFIc5aOIcv8VMAAABO1g");
	this.shape.setTransform(1360.6,296.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,2721.3,593.2), null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMANQgFgFgBgIQABgHAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAHQAAAIgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape.setTransform(1.9,50.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMANQgGgGAAgHQAAgHAGgFQAFgFAHAAQAIAAAFAFQAFAFAAAHQAAAHgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1.setTransform(2274.3,384.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMANQgFgFAAgIQAAgHAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAHQAAAIgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_2.setTransform(2354.3,377);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMANQgFgFAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_3.setTransform(2357.2,284.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgHAGgFQAGgFAGAAQAIAAAFAFQAGAFAAAHQAAAIgGAFQgFAFgIAAQgGAAgGgFg");
	this.shape_4.setTransform(710.7,225.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMANQgFgGgBgHQABgGAFgGQAGgFAGgBQAIABAFAFQAFAGAAAGQAAAHgFAGQgFAGgIgBQgGABgGgGg");
	this.shape_5.setTransform(772.4,74.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgHAGgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAFQgFAGgIAAQgHAAgFgGg");
	this.shape_6.setTransform(2589.6,88.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMANQgFgGgBgHQABgHAFgFQAFgFAHAAQAIAAAFAFQAGAFgBAHQABAHgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_7.setTransform(2505.8,47.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMANQgFgGgBgHQABgGAFgGQAFgFAHgBQAIABAFAFQAGAGgBAGQABAHgGAGQgFAGgIgBQgHABgFgGg");
	this.shape_8.setTransform(2242.5,112.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMANQgFgFAAgIQAAgGAFgGQAFgFAHgBQAHABAGAFQAFAGAAAGQAAAIgFAFQgFAGgIgBQgHABgFgGg");
	this.shape_9.setTransform(2227.1,45.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMANQgFgFAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAFQgFAGgIAAQgHAAgFgGg");
	this.shape_10.setTransform(2024.6,7.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMANQgFgFgBgIQABgHAFgFQAFgFAHAAQAHAAAGAFQAGAFgBAHQABAIgGAFQgGAFgHAAQgHAAgFgFg");
	this.shape_11.setTransform(1823.1,70.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMANQgGgGAAgHQAAgHAGgFQAFgFAHAAQAHAAAGAFQAGAFgBAHQABAHgGAGQgGAFgHAAQgHAAgFgFg");
	this.shape_12.setTransform(1900.3,108);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgHAGgFQAFgFAHAAQAHAAAGAFQAFAFABAHQgBAIgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_13.setTransform(1602.3,328.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMANQgFgFAAgIQAAgHAFgFQAFgGAHABQAIgBAFAGQAFAFAAAHQAAAIgFAFQgFAFgIABQgHgBgFgFg");
	this.shape_14.setTransform(1631.2,269.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgMANQgFgFgBgIQABgHAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAHQAAAIgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_15.setTransform(1605.2,206.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgGAGgGQAFgFAHgBQAHABAGAFQAFAGABAGQgBAIgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_16.setTransform(1438.4,144.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgGAGgGQAGgFAGgBQAIABAFAFQAGAGAAAGQAAAIgGAFQgFAFgIAAQgGAAgGgFg");
	this.shape_17.setTransform(1457.7,35.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMANQgFgFAAgIQAAgGAFgGQAFgFAHgBQAHABAGAFQAFAGABAGQgBAIgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_18.setTransform(1326.6,1.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMANQgFgGgBgHQABgHAFgFQAGgFAGAAQAHAAAGAFQAGAFgBAHQABAHgGAGQgGAFgHAAQgGAAgGgFg");
	this.shape_19.setTransform(1194.5,94.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgMANQgFgFgBgIQABgHAFgFQAFgFAHgBQAHABAGAFQAGAFgBAHQABAIgGAFQgGAGgHgBQgHABgFgGg");
	this.shape_20.setTransform(1262,186);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgGAGgGQAFgFAHgBQAHABAGAFQAGAGgBAGQABAIgGAFQgGAFgHAAQgHAAgFgFg");
	this.shape_21.setTransform(1271.6,333.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgHAGgFQAFgGAHAAQAIAAAFAGQAFAFABAHQgBAIgFAFQgFAGgIgBQgHABgFgGg");
	this.shape_22.setTransform(1426.8,399.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgMANQgFgGgBgHQABgHAFgFQAGgFAGAAQAHAAAGAFQAFAFAAAHQAAAHgFAGQgGAFgHAAQgGAAgGgFg");
	this.shape_23.setTransform(1100.3,244.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgMANQgGgGABgHQgBgHAGgFQAGgGAGAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIgBQgGABgGgGg");
	this.shape_24.setTransform(312.4,72.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMANQgGgGAAgHQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIgBQgHABgFgGg");
	this.shape_25.setTransform(128.3,154.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgMANQgFgFAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAFQgFAGgIAAQgHAAgFgGg");
	this.shape_26.setTransform(310.5,297.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgMANQgGgGABgHQgBgHAGgFQAFgGAHABQAHgBAGAGQAFAFABAHQgBAHgFAGQgGAFgHABQgHgBgFgFg");
	this.shape_27.setTransform(171.7,388.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgMANQgFgFAAgIQAAgHAFgFQAFgFAHgBQAIABAFAFQAFAFAAAHQAAAIgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_28.setTransform(384.7,413.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMANQgFgGAAgHQAAgHAFgFQAFgGAHABQAIgBAFAGQAFAFAAAHQAAAHgFAGQgFAFgIABQgHgBgFgFg");
	this.shape_29.setTransform(706.9,424.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgMANQgFgGgBgHQABgHAFgFQAGgFAGgBQAHABAGAFQAGAFgBAHQABAHgGAGQgGAGgHgBQgGABgGgGg");
	this.shape_30.setTransform(698.2,329.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAHAAAGAGQAGAFgBAHQABAIgGAFQgGAGgHAAQgHAAgFgGg");
	this.shape_31.setTransform(1556,358.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAHAAAGAGQAGAFgBAHQABAIgGAFQgGAGgHAAQgHAAgFgGg");
	this.shape_32.setTransform(1811.5,345.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgMANQgGgGAAgHQAAgHAGgFQAGgFAGgBQAIABAFAFQAGAFAAAHQAAAHgGAGQgFAGgIgBQgGABgGgGg");
	this.shape_33.setTransform(1917.6,266.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgHAGgFQAGgGAGAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgGAAgGgGg");
	this.shape_34.setTransform(245.8,146.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgMANQgGgGABgHQgBgHAGgFQAFgGAHABQAIgBAFAGQAFAFAAAHQAAAHgFAGQgFAFgIABQgHgBgFgFg");
	this.shape_35.setTransform(2609.9,371.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,0,2611.7,426.5), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMANQgFgGAAgHQAAgHAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAHQAAAHgFAGQgGAFgHAAQgHAAgFgFg");
	this.shape.setTransform(2147.9,384.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMANQgFgFAAgIQAAgHAFgFQAGgFAGAAQAIAAAFAFQAFAFAAAHQAAAIgFAFQgFAFgIAAQgGAAgGgFg");
	this.shape_1.setTransform(2227.9,377);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMANQgFgFgBgIQABgHAFgFQAGgGAGAAQAIAAAFAGQAFAFAAAHQABAIgGAFQgFAGgIAAQgGAAgGgGg");
	this.shape_2.setTransform(2230.8,284.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMANQgFgFgBgIQABgHAFgFQAGgFAGAAQAIAAAFAFQAGAFgBAHQABAIgGAFQgFAFgIAAQgGAAgGgFg");
	this.shape_3.setTransform(584.3,225.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMANQgGgGABgHQgBgGAGgGQAGgFAGgBQAIABAFAFQAFAGABAGQgBAHgFAGQgFAGgIgBQgGABgGgGg");
	this.shape_4.setTransform(646,74.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMANQgGgGAAgHQAAgGAGgGQAFgFAHgBQAIABAFAFQAFAGABAGQgBAHgFAGQgFAGgIgBQgHABgFgGg");
	this.shape_5.setTransform(2630,106);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAGgGAGAAQAIAAAFAGQAGAFgBAHQABAIgGAFQgFAGgIAAQgGAAgGgGg");
	this.shape_6.setTransform(2463.2,88.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMANQgGgGABgHQgBgHAGgFQAFgFAHAAQAHAAAGAFQAGAFAAAHQAAAHgGAGQgGAFgHAAQgHAAgFgFg");
	this.shape_7.setTransform(2379.4,47.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMANQgGgGABgHQgBgGAGgGQAGgFAGgBQAIABAFAFQAGAGAAAGQAAAHgGAGQgFAGgIgBQgGABgGgGg");
	this.shape_8.setTransform(2116.1,112.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgGAGgGQAFgFAHgBQAIABAFAFQAGAGAAAGQAAAIgGAFQgFAGgIgBQgHABgFgGg");
	this.shape_9.setTransform(2100.7,45.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_10.setTransform(1898.2,7.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgHAGgFQAFgFAHAAQAHAAAGAFQAFAFABAHQgBAIgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_11.setTransform(1696.7,70.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMANQgFgGAAgHQAAgHAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAHQAAAHgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_12.setTransform(1773.8,108);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgFAHAAQAHAAAGAFQAGAFgBAHQABAIgGAFQgGAFgHAAQgHAAgFgFg");
	this.shape_13.setTransform(1475.9,328.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHABQAIgBAFAGQAGAFAAAHQAAAIgGAFQgFAFgIABQgHgBgFgFg");
	this.shape_14.setTransform(1504.8,269.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgFAHAAQAIAAAFAFQAGAFAAAHQAAAIgGAFQgFAFgIAAQgHAAgFgFg");
	this.shape_15.setTransform(1478.8,206.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgGAGgGQAFgFAHgBQAHABAGAFQAGAGgBAGQABAIgGAFQgGAFgHAAQgHAAgFgFg");
	this.shape_16.setTransform(1312,144.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgMANQgFgFgBgIQABgGAFgGQAGgFAGgBQAIABAFAFQAFAGAAAGQAAAIgFAFQgFAFgIAAQgGAAgGgFg");
	this.shape_17.setTransform(1331.3,35.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgGAGgGQAFgFAHgBQAIABAFAFQAGAGAAAGQAAAIgGAFQgFAFgIAAQgHAAgFgFg");
	this.shape_18.setTransform(1200.2,1.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMANQgGgGABgHQgBgHAGgFQAFgFAHAAQAHAAAGAFQAFAFABAHQgBAHgFAGQgGAFgHAAQgHAAgFgFg");
	this.shape_19.setTransform(1068.1,94.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgHAGgFQAFgFAHgBQAHABAGAFQAFAFABAHQgBAIgFAFQgGAGgHgBQgHABgFgGg");
	this.shape_20.setTransform(1135.6,186);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgMANQgFgFAAgIQAAgGAFgGQAFgFAHgBQAHABAGAFQAFAGAAAGQAAAIgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_21.setTransform(1145.2,333.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAFQgFAGgIgBQgHABgFgGg");
	this.shape_22.setTransform(1300.4,399.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgMANQgGgGABgHQgBgHAGgFQAFgFAHAAQAIAAAFAFQAGAFAAAHQAAAHgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_23.setTransform(973.9,244.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgMANQgFgGgBgHQABgHAFgFQAGgGAGAAQAIAAAFAGQAGAFgBAHQABAHgGAGQgFAGgIgBQgGABgGgGg");
	this.shape_24.setTransform(186,72.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMANQgFgGgBgHQABgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAHgFAGQgFAGgIgBQgHABgFgGg");
	this.shape_25.setTransform(1.9,154.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_26.setTransform(184.1,297.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgMANQgFgGAAgHQAAgHAFgFQAFgGAHABQAIgBAFAGQAFAFAAAHQAAAHgFAGQgFAFgIABQgHgBgFgFg");
	this.shape_27.setTransform(45.2,388.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgFAHgBQAIABAFAFQAGAFAAAHQAAAIgGAFQgFAFgIAAQgHAAgFgFg");
	this.shape_28.setTransform(258.3,413.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMANQgFgGAAgHQAAgHAFgFQAFgGAHABQAIgBAFAGQAFAFAAAHQAAAHgFAGQgFAFgIABQgHgBgFgFg");
	this.shape_29.setTransform(580.5,424.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgMANQgGgGABgHQgBgHAGgFQAFgFAHgBQAHABAGAFQAFAFABAHQgBAHgFAGQgGAGgHgBQgHABgFgGg");
	this.shape_30.setTransform(571.8,329.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgMANQgFgFAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgHAAQgHAAgFgGg");
	this.shape_31.setTransform(1429.6,358.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgHAGgFQAFgGAHAAQAHAAAGAGQAFAFABAHQgBAIgFAFQgGAGgHAAQgHAAgFgGg");
	this.shape_32.setTransform(1685.1,345.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgMANQgFgGgBgHQABgHAFgFQAGgFAGgBQAIABAFAFQAFAFAAAHQAAAHgFAGQgFAGgIgBQgGABgGgGg");
	this.shape_33.setTransform(1791.2,266.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgMANQgFgFgBgIQABgHAFgFQAGgGAGAAQAHAAAGAGQAGAFgBAHQABAIgGAFQgGAGgHAAQgGAAgGgGg");
	this.shape_34.setTransform(119.4,146.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgMANQgGgGAAgHQAAgHAGgFQAGgGAGABQAIgBAFAGQAGAFgBAHQABAHgGAGQgFAFgIABQgGgBgGgFg");
	this.shape_35.setTransform(2483.5,371.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgMANQgFgGAAgHQAAgHAFgFQAFgGAHABQAIgBAFAGQAFAFAAAHQAAAHgFAGQgFAFgIABQgHgBgFgFg");
	this.shape_36.setTransform(2632.9,295);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,2634.8,426.5), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgHAGgFQAFgFAHgBQAIABAFAFQAFAFAAAHQAAAIgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape.setTransform(2609.9,50.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMANQgGgGAAgHQAAgHAGgFQAFgFAHAAQAHAAAGAFQAGAFgBAHQABAHgGAGQgGAFgHAAQgHAAgFgFg");
	this.shape_1.setTransform(337.4,384.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMANQgFgGAAgHQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAHgFAGQgFAGgIgBQgHABgFgGg");
	this.shape_2.setTransform(257.4,377);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMANQgFgFgBgIQABgHAFgFQAFgFAHAAQAHAAAGAFQAGAFgBAHQABAIgGAFQgGAFgHAAQgHAAgFgFg");
	this.shape_3.setTransform(254.5,284.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMANQgFgGgBgHQABgHAFgFQAFgGAHABQAHgBAGAGQAGAFgBAHQABAHgGAGQgGAFgHABQgHgBgFgFg");
	this.shape_4.setTransform(1901.1,225.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgGAGgGQAFgGAHABQAHgBAGAGQAFAGABAGQgBAIgFAFQgGAGgHAAQgHAAgFgGg");
	this.shape_5.setTransform(1839.4,74.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMANQgFgFgBgIQABgHAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAHQAAAIgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_6.setTransform(22.1,88.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMANQgGgGABgHQgBgHAGgFQAGgGAGAAQAIAAAFAGQAFAFABAHQgBAHgFAGQgFAGgIgBQgGABgGgGg");
	this.shape_7.setTransform(106,47.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgGAGgGQAFgGAHABQAHgBAGAGQAFAGABAGQgBAIgFAFQgGAFgHABQgHgBgFgFg");
	this.shape_8.setTransform(369.2,112.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgGAGgGQAFgGAHABQAIgBAFAGQAFAGABAGQgBAIgFAFQgFAFgIABQgHgBgFgFg");
	this.shape_9.setTransform(384.6,45.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgHAGgFQAFgFAHAAQAHAAAGAFQAFAFABAHQgBAIgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_10.setTransform(587.1,7.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgHAGgFQAGgGAGABQAHgBAGAGQAFAFABAHQgBAIgFAFQgGAGgHAAQgGAAgGgGg");
	this.shape_11.setTransform(788.6,70.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMANQgGgGAAgHQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIgBQgHABgFgGg");
	this.shape_12.setTransform(711.5,107.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMANQgFgGgBgHQABgHAFgFQAGgGAGABQAIgBAFAGQAFAFAAAHQAAAHgFAGQgFAFgIABQgGgBgGgFg");
	this.shape_13.setTransform(1009.4,328.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMANQgFgFAAgIQAAgHAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAHQAAAIgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_14.setTransform(980.5,269.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgHAGgFQAFgFAHgBQAIABAFAFQAFAFABAHQgBAIgFAFQgFAGgIgBQgHABgFgGg");
	this.shape_15.setTransform(1006.5,206.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMANQgFgFgBgIQABgHAFgFQAGgGAGABQAIgBAFAGQAFAFAAAHQAAAIgFAFQgFAGgIAAQgGAAgGgGg");
	this.shape_16.setTransform(1173.3,144.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgMANQgFgFgBgIQABgHAFgFQAFgFAHgBQAHABAGAFQAGAFgBAHQABAIgGAFQgGAFgHAAQgHAAgFgFg");
	this.shape_17.setTransform(1154.1,35.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgHAGgFQAFgFAHgBQAIABAFAFQAFAFAAAHQAAAIgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_18.setTransform(1285.2,1.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMANQgGgGABgHQgBgHAGgFQAGgGAGAAQAHAAAGAGQAGAFAAAHQAAAHgGAGQgGAGgHgBQgGABgGgGg");
	this.shape_19.setTransform(1417.3,94.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgHAGgFQAGgFAGgBQAIABAFAFQAGAFAAAHQAAAIgGAFQgFAGgIgBQgGABgGgGg");
	this.shape_20.setTransform(1349.8,186);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgGAGgGQAFgFAHgBQAIABAFAFQAFAGAAAGQAAAIgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_21.setTransform(1340.1,333.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgMANQgFgFgBgIQABgHAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAHQAAAIgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_22.setTransform(1184.9,399.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgHAGgFQAFgFAHAAQAHAAAGAFQAFAFABAHQgBAIgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_23.setTransform(1511.4,244.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgGAGgGQAGgGAGABQAHgBAGAGQAGAGgBAGQAAAIgFAFQgGAFgHABQgGgBgGgFg");
	this.shape_24.setTransform(2299.3,72.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAGgGAGAAQAIAAAFAGQAGAFgBAHQABAIgGAFQgFAGgIgBQgGABgGgGg");
	this.shape_25.setTransform(2483.5,154.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgMANQgFgFAAgIQAAgHAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAHQAAAIgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_26.setTransform(2301.2,297.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgMANQgFgFgBgIQABgGAFgGQAGgGAGABQAIgBAFAGQAGAGgBAGQAAAIgFAFQgFAFgIABQgGgBgGgFg");
	this.shape_27.setTransform(2440.1,388.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgHAGgFQAFgGAHABQAHgBAGAGQAFAFAAAHQAAAIgFAFQgGAGgHAAQgHAAgFgGg");
	this.shape_28.setTransform(2227,413.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMANQgFgGAAgHQAAgGAFgGQAFgGAHABQAIgBAFAGQAFAGABAGQgBAHgFAGQgFAFgIABQgHgBgFgFg");
	this.shape_29.setTransform(1904.8,424.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgMANQgGgGABgHQgBgGAGgGQAGgFAGgBQAIABAFAFQAGAGAAAGQAAAHgGAGQgFAGgIgBQgGABgGgGg");
	this.shape_30.setTransform(1913.5,329.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_31.setTransform(1055.7,358.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgHAGgFQAGgGAGAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgGAAgGgGg");
	this.shape_32.setTransform(800.2,345.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgMANQgFgFgBgIQABgGAFgGQAGgFAGgBQAHABAGAFQAGAGgBAGQABAIgGAFQgGAGgHgBQgGABgGgGg");
	this.shape_33.setTransform(694.2,266.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgMANQgFgFgBgIQABgHAFgFQAFgGAHAAQAHAAAGAGQAGAFgBAHQABAIgGAFQgGAGgHAAQgHAAgFgGg");
	this.shape_34.setTransform(2365.9,146.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgMANQgFgFgBgIQABgHAFgFQAFgGAHABQAIgBAFAGQAFAFAAAHQAAAIgFAFQgFAFgIABQgHgBgFgFg");
	this.shape_35.setTransform(1.9,371.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,2611.7,426.5), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMANQgFgGAAgHQAAgHAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAHQAAAHgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape.setTransform(486.9,384.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMANQgFgGgBgHQABgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAHgFAGQgFAGgIgBQgHABgFgGg");
	this.shape_1.setTransform(406.9,377);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgHAGgFQAFgFAHAAQAHAAAGAFQAFAFABAHQgBAIgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_2.setTransform(404,284.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMANQgGgGABgHQgBgHAGgFQAFgGAHABQAHgBAGAGQAFAFABAHQgBAHgFAGQgGAFgHABQgHgBgFgFg");
	this.shape_3.setTransform(2050.5,225.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMANQgFgFgBgIQABgGAFgGQAFgGAHABQAHgBAGAGQAGAGgBAGQABAIgGAFQgGAGgHAAQgHAAgFgGg");
	this.shape_4.setTransform(1988.8,74.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMANQgFgFgBgIQABgGAFgGQAFgGAHABQAHgBAGAGQAGAGgBAGQABAIgGAFQgGAFgHABQgHgBgFgFg");
	this.shape_5.setTransform(4.8,106);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgHAGgFQAFgFAHAAQAIAAAFAFQAGAFAAAHQAAAIgGAFQgFAFgIAAQgHAAgFgFg");
	this.shape_6.setTransform(171.6,88.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMANQgFgGgBgHQABgHAFgFQAGgGAGAAQAIAAAFAGQAGAFgBAHQABAHgGAGQgFAGgIgBQgGABgGgGg");
	this.shape_7.setTransform(255.4,47.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMANQgFgFgBgIQABgGAFgGQAFgGAHABQAHgBAGAGQAGAGgBAGQABAIgGAFQgGAFgHABQgHgBgFgFg");
	this.shape_8.setTransform(518.7,112.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgGAGgGQAFgGAHABQAIgBAFAGQAGAGgBAGQABAIgGAFQgFAFgIABQgHgBgFgFg");
	this.shape_9.setTransform(534.1,45.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgFAHAAQAHAAAGAFQAGAFgBAHQABAIgGAFQgGAFgHAAQgHAAgFgFg");
	this.shape_10.setTransform(736.6,7.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMANQgFgFgBgIQABgHAFgFQAGgGAGABQAIgBAFAGQAGAFgBAHQABAIgGAFQgFAGgIAAQgGAAgGgGg");
	this.shape_11.setTransform(938.1,70.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMANQgFgGgBgHQABgHAFgFQAGgGAGAAQAIAAAFAGQAFAFAAAHQAAAHgFAGQgFAGgIgBQgGABgGgGg");
	this.shape_12.setTransform(860.9,107.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMANQgGgGABgHQgBgHAGgFQAFgGAHABQAIgBAFAGQAGAFAAAHQAAAHgGAGQgFAFgIABQgHgBgFgFg");
	this.shape_13.setTransform(1158.9,328.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgFAHAAQAHAAAGAFQAGAFAAAHQAAAIgGAFQgGAFgHAAQgHAAgFgFg");
	this.shape_14.setTransform(1130,269.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgFAHgBQAIABAFAFQAFAFAAAHQAAAIgFAFQgFAGgIgBQgHABgFgGg");
	this.shape_15.setTransform(1156,206.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgHAGgFQAGgGAGABQAIgBAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgGAAgGgGg");
	this.shape_16.setTransform(1322.8,144.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgHAGgFQAFgFAHgBQAHABAGAFQAFAFABAHQgBAIgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_17.setTransform(1303.5,35.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgFAHgBQAIABAFAFQAFAFAAAHQAAAIgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_18.setTransform(1434.6,1.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMANQgGgGAAgHQAAgHAGgFQAGgGAGAAQAHAAAGAGQAGAFgBAHQABAHgGAGQgGAGgHgBQgGABgGgGg");
	this.shape_19.setTransform(1566.7,94.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAGgFAGgBQAIABAFAFQAGAFgBAHQABAIgGAFQgFAGgIgBQgGABgGgGg");
	this.shape_20.setTransform(1499.2,186);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgMANQgFgFgBgIQABgGAFgGQAGgFAGgBQAIABAFAFQAFAGAAAGQAAAIgFAFQgFAFgIAAQgGAAgGgFg");
	this.shape_21.setTransform(1489.6,333.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgHAGgFQAFgFAHAAQAIAAAFAFQAGAFAAAHQAAAIgGAFQgFAFgIAAQgHAAgFgFg");
	this.shape_22.setTransform(1334.4,399.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgFAHAAQAHAAAGAFQAGAFgBAHQABAIgGAFQgGAFgHAAQgHAAgFgFg");
	this.shape_23.setTransform(1660.9,244.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgGAGgGQAGgGAGABQAHgBAGAGQAFAGABAGQgBAIgFAFQgGAFgHABQgGgBgGgFg");
	this.shape_24.setTransform(2448.8,72.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMANQgFgFAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAFQgFAGgIgBQgHABgFgGg");
	this.shape_25.setTransform(2632.9,154.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgFAHAAQAHAAAGAFQAGAFAAAHQAAAIgGAFQgGAFgHAAQgHAAgFgFg");
	this.shape_26.setTransform(2450.7,297.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgGAGgGQAFgGAHABQAIgBAFAGQAFAGABAGQgBAIgFAFQgFAFgIABQgHgBgFgFg");
	this.shape_27.setTransform(2589.5,388.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHABQAHgBAGAGQAGAFAAAHQAAAIgGAFQgGAGgHAAQgHAAgFgGg");
	this.shape_28.setTransform(2376.5,413.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMANQgFgGAAgHQAAgGAFgGQAFgGAHABQAIgBAFAGQAFAGAAAGQAAAHgFAGQgFAFgIABQgHgBgFgFg");
	this.shape_29.setTransform(2054.3,424.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgMANQgFgGgBgHQABgGAFgGQAFgFAHgBQAHABAGAFQAFAGAAAGQAAAHgFAGQgGAGgHgBQgHABgFgGg");
	this.shape_30.setTransform(2063,329.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgMANQgFgFgBgIQABgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAFQgFAGgIAAQgHAAgFgGg");
	this.shape_31.setTransform(1205.2,358.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgMANQgFgFgBgIQABgHAFgFQAGgGAGAAQAIAAAFAGQAFAFAAAHQAAAIgFAFQgFAGgIAAQgGAAgGgGg");
	this.shape_32.setTransform(949.7,345.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgGAGgGQAGgFAGgBQAHABAGAFQAFAGABAGQgBAIgFAFQgGAGgHgBQgGABgGgGg");
	this.shape_33.setTransform(843.6,266.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgHAGgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgHAAQgHAAgFgGg");
	this.shape_34.setTransform(2515.4,146.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgHAGgFQAFgGAHABQAIgBAFAGQAGAFAAAHQAAAIgGAFQgFAFgIABQgHgBgFgFg");
	this.shape_35.setTransform(151.3,371.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgMANQgFgGgBgHQABgHAFgFQAFgGAHABQAIgBAFAGQAFAFAAAHQAAAHgFAGQgFAFgIABQgHgBgFgFg");
	this.shape_36.setTransform(1.9,295);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,2634.8,426.5), null);


(lib.Group_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgMARQgGgHAAgKQAAgJAGgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAAKgFAHQgFAIgIAAQgHAAgFgIg");
	this.shape_36.setTransform(2593.8,68.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgMASQgGgIABgKQgBgJAGgHQAGgIAGAAQAIAAAFAIQAGAHAAAJQAAAKgGAIQgFAHgIAAQgGAAgGgHg");
	this.shape_37.setTransform(335.4,518.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgMASQgFgIAAgKQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_38.setTransform(255.8,508.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgMARQgFgHAAgKQAAgJAFgIQAGgHAGAAQAIAAAFAHQAFAIAAAJQAAAKgFAHQgFAIgIAAQgGAAgGgIg");
	this.shape_39.setTransform(253,383.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgMASQgGgIAAgKQAAgKAGgGQAFgIAHAAQAHAAAGAIQAGAGgBAKQABAKgGAIQgGAHgHAAQgHAAgFgHg");
	this.shape_40.setTransform(1889.4,304.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgMARQgFgHAAgKQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAALgFAGQgFAIgIAAQgHAAgFgIg");
	this.shape_41.setTransform(1828,100.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgMASQgFgHAAgLQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAALgFAHQgFAHgIAAQgHAAgFgHg");
	this.shape_42.setTransform(22,119.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgMARQgFgHAAgKQAAgJAFgIQAGgHAGAAQAIAAAFAHQAFAIAAAJQAAAKgFAHQgFAIgIAAQgGAAgGgIg");
	this.shape_43.setTransform(105.4,63.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgMASQgGgIABgKQgBgJAGgIQAGgHAGAAQAHAAAGAHQAFAIABAJQgBAKgFAIQgGAHgHAAQgGAAgGgHg");
	this.shape_44.setTransform(367,152);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgMARQgFgHAAgKQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAALgFAGQgFAIgIAAQgHAAgFgIg");
	this.shape_45.setTransform(382.3,61);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgMASQgGgIABgKQgBgJAGgHQAFgIAHAAQAHAAAGAIQAFAHABAJQgBAKgFAIQgGAHgHAAQgHAAgFgHg");
	this.shape_46.setTransform(583.5,10.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgMASQgFgHAAgLQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAALgFAHQgFAHgIAAQgHAAgFgHg");
	this.shape_47.setTransform(783.8,94.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgMASQgFgHAAgLQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAALgFAHQgFAHgIAAQgHAAgFgHg");
	this.shape_48.setTransform(707.1,145.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgMARQgFgHgBgKQABgKAFgGQAGgIAGAAQAHAAAGAIQAFAGAAAKQAAAKgFAHQgGAIgHAAQgGAAgGgIg");
	this.shape_49.setTransform(1003.2,443.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgMASQgGgIABgKQgBgJAGgIQAGgHAGAAQAHAAAGAHQAFAIABAJQgBAKgFAIQgGAHgHAAQgGAAgGgHg");
	this.shape_50.setTransform(974.5,363.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgMASQgFgIAAgKQAAgKAFgGQAFgIAHAAQAIAAAFAIQAFAGAAAKQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_51.setTransform(1000.3,278.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgMASQgFgIgBgKQABgJAFgHQAGgIAGAAQAHAAAGAIQAGAHgBAJQABAKgGAIQgGAHgHAAQgGAAgGgHg");
	this.shape_52.setTransform(1166.1,194.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgMASQgGgIAAgKQAAgJAGgHQAFgIAHAAQAHAAAGAIQAFAHAAAJQAAAKgFAIQgGAHgHAAQgHAAgFgHg");
	this.shape_53.setTransform(1147,48);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgMASQgFgIgBgKQABgJAFgHQAGgIAGAAQAIAAAFAIQAFAHAAAJQAAAKgFAIQgFAHgIAAQgGAAgGgHg");
	this.shape_54.setTransform(1277.3,2.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgMASQgFgIgBgKQABgJAFgIQAFgHAHAAQAHAAAGAHQAFAIAAAJQAAAKgFAIQgGAHgHAAQgHAAgFgHg");
	this.shape_55.setTransform(1408.6,127.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgMARQgFgHAAgKQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAAKgFAHQgFAIgIAAQgHAAgFgIg");
	this.shape_56.setTransform(1341.5,250.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgMASQgFgIAAgKQAAgKAFgGQAFgIAHAAQAIAAAFAIQAFAGAAAKQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_57.setTransform(1331.9,449.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgMASQgFgHAAgLQAAgJAFgIQAFgHAHAAQAHAAAGAHQAFAIAAAJQAAALgFAHQgGAHgHAAQgHAAgFgHg");
	this.shape_58.setTransform(1177.6,538.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgMARQgGgHAAgKQAAgJAGgIQAFgHAHAAQAHAAAGAHQAFAIAAAJQAAAKgFAHQgGAIgHAAQgHAAgFgIg");
	this.shape_59.setTransform(1502.1,329.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgMASQgFgIAAgKQAAgJAFgIQAGgHAGAAQAHAAAGAHQAFAIAAAJQAAAKgFAIQgGAHgHAAQgHAAgFgHg");
	this.shape_60.setTransform(2285.2,97.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgMASQgFgHAAgLQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAALgFAHQgFAHgIAAQgHAAgFgHg");
	this.shape_61.setTransform(2468.2,208);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgMASQgFgIgBgKQABgJAFgIQAGgHAGAAQAIAAAFAHQAGAIgBAJQAAAKgFAIQgFAHgIAAQgGAAgGgHg");
	this.shape_62.setTransform(2287.1,401.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgMASQgGgIAAgKQAAgKAGgGQAFgIAHAAQAIAAAFAIQAFAGAAAKQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_63.setTransform(2425.1,524);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgMARQgFgGAAgLQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAAKgFAHQgFAIgIAAQgHAAgFgIg");
	this.shape_64.setTransform(2213.3,557.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgMASQgFgHAAgLQAAgJAFgIQAFgHAHAAQAHAAAGAHQAFAIAAAJQAAALgFAHQgGAHgHAAQgHAAgFgHg");
	this.shape_65.setTransform(1893.1,572.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgMASQgFgIAAgKQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_66.setTransform(1901.7,443.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgMASQgFgIAAgKQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_67.setTransform(1049.2,483.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgMASQgFgIgBgKQABgJAFgIQAGgHAGAAQAHAAAGAHQAGAIgBAJQABAKgGAIQgGAHgHAAQgGAAgGgHg");
	this.shape_68.setTransform(795.3,465.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgMASQgFgIgBgKQABgKAFgGQAGgIAGAAQAIAAAFAIQAFAGAAAKQAAAKgFAIQgFAHgIAAQgGAAgGgHg");
	this.shape_69.setTransform(689.9,358.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgMASQgFgHAAgLQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAALgFAHQgFAHgIAAQgHAAgFgHg");
	this.shape_70.setTransform(2351.3,197.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgMASQgFgIgBgKQABgJAFgIQAGgHAGAAQAIAAAFAHQAFAIAAAJQAAAKgFAIQgFAHgIAAQgGAAgGgHg");
	this.shape_71.setTransform(1.9,500.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6_1, new cjs.Rectangle(0,0,2595.7,575.2), null);


(lib.Group_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgMASQgFgIAAgKQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_37.setTransform(483.9,518.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgMASQgFgIgBgKQABgJAFgHQAGgIAGAAQAHAAAGAIQAGAHgBAJQABAKgGAIQgGAHgHAAQgGAAgGgHg");
	this.shape_38.setTransform(404.4,508.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgMARQgFgHAAgKQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAAKgFAHQgFAIgIAAQgHAAgFgIg");
	this.shape_39.setTransform(401.5,383.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgMASQgFgIAAgKQAAgKAFgGQAFgIAHAAQAIAAAFAIQAFAGAAAKQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_40.setTransform(2037.9,304.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgMARQgFgGAAgLQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAAKgFAHQgFAIgIAAQgHAAgFgIg");
	this.shape_41.setTransform(1976.5,100.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgMASQgFgHAAgLQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAALgFAHQgFAHgIAAQgHAAgFgHg");
	this.shape_42.setTransform(4.7,142.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgMASQgFgHAAgLQAAgJAFgHQAFgIAHAAQAHAAAGAIQAFAHAAAJQAAALgFAHQgGAHgHAAQgHAAgFgHg");
	this.shape_43.setTransform(170.5,119.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgMARQgFgHAAgKQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAAKgFAHQgFAIgIAAQgHAAgFgIg");
	this.shape_44.setTransform(253.9,63.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgMASQgFgIAAgKQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_45.setTransform(515.5,152);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgMARQgGgHAAgKQAAgJAGgIQAGgHAGAAQAHAAAGAHQAGAIgBAJQABAKgGAHQgGAIgHAAQgGAAgGgIg");
	this.shape_46.setTransform(530.8,61);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgMASQgFgIAAgKQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_47.setTransform(732,10.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgMASQgGgHAAgLQAAgJAGgIQAFgHAHAAQAHAAAGAHQAGAIgBAJQABALgGAHQgGAHgHAAQgHAAgFgHg");
	this.shape_48.setTransform(932.3,94.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgMASQgFgHAAgLQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAALgFAHQgFAHgIAAQgHAAgFgHg");
	this.shape_49.setTransform(855.6,145.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgMARQgFgGAAgLQAAgKAFgGQAFgIAHAAQAIAAAFAIQAFAGAAAKQAAAKgFAHQgFAIgIAAQgHAAgFgIg");
	this.shape_50.setTransform(1151.7,443.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgMASQgFgIAAgKQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_51.setTransform(1123,363.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgMASQgGgIAAgKQAAgKAGgGQAFgIAHAAQAHAAAGAIQAFAGAAAKQAAAKgFAIQgGAHgHAAQgHAAgFgHg");
	this.shape_52.setTransform(1148.9,278.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgMASQgFgIAAgKQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_53.setTransform(1314.6,194.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgMASQgFgIAAgKQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_54.setTransform(1295.5,48);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgMASQgFgIAAgKQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_55.setTransform(1425.8,2.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgMASQgFgIAAgKQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_56.setTransform(1557.1,127.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgMARQgFgHAAgKQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAAKgFAHQgFAIgIAAQgHAAgFgIg");
	this.shape_57.setTransform(1490,250.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgMASQgGgIAAgKQAAgKAGgGQAFgIAHAAQAHAAAGAIQAGAGgBAKQABAKgGAIQgGAHgHAAQgHAAgFgHg");
	this.shape_58.setTransform(1480.4,449.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgMASQgFgHAAgLQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAALgFAHQgFAHgIAAQgHAAgFgHg");
	this.shape_59.setTransform(1326.1,538.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgMARQgFgHAAgKQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAAKgFAHQgFAIgIAAQgHAAgFgIg");
	this.shape_60.setTransform(1650.6,329.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgMASQgFgIAAgKQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_61.setTransform(2433.7,97.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgMASQgFgIAAgKQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_62.setTransform(2435.6,401.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgMASQgFgIAAgKQAAgKAFgGQAFgIAHAAQAIAAAFAIQAFAGAAAKQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_63.setTransform(2573.6,524);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgMARQgGgHABgKQgBgJAGgIQAGgHAGAAQAHAAAGAHQAFAIABAJQgBAKgFAHQgGAIgHAAQgGAAgGgIg");
	this.shape_64.setTransform(2361.8,557.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgMASQgFgHAAgLQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAALgFAHQgFAHgIAAQgHAAgFgHg");
	this.shape_65.setTransform(2041.6,572.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgMASQgFgIgBgKQABgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_66.setTransform(2050.3,443.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgMASQgGgIABgKQgBgJAGgIQAFgHAHAAQAIAAAFAHQAFAIABAJQgBAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_67.setTransform(1197.8,483.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgMASQgFgIAAgKQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_68.setTransform(943.8,465.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgMASQgFgIAAgKQAAgKAFgGQAFgIAHAAQAIAAAFAIQAFAGAAAKQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_69.setTransform(838.4,358.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgMASQgGgHAAgLQAAgJAGgHQAGgIAGAAQAIAAAFAIQAGAHAAAJQAAALgGAHQgFAHgIAAQgGAAgGgHg");
	this.shape_70.setTransform(2499.9,197.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgMASQgFgIAAgKQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_71.setTransform(150.4,500.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgMASQgFgIgBgKQABgJAFgHQAGgIAGAAQAIAAAFAIQAFAHAAAJQAAAKgFAIQgFAHgIAAQgGAAgGgHg");
	this.shape_72.setTransform(1.9,397.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4_1, new cjs.Rectangle(0,0,2575.4,575.2), null);


(lib.Group_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#695360").s().p("AgMASQgGgIAAgKQAAgJAGgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_36.setTransform(2593.8,68.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#695360").s().p("AgMASQgGgHABgLQgBgJAGgIQAGgHAGAAQAIAAAFAHQAGAIAAAJQAAALgGAHQgFAHgIAAQgGAAgGgHg");
	this.shape_37.setTransform(335.4,518.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_38.setTransform(255.8,508.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgJAFgHQAGgIAGAAQAIAAAFAIQAFAHAAAJQAAAKgFAIQgFAHgIAAQgGAAgGgHg");
	this.shape_39.setTransform(253,383.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_40.setTransform(1889.3,304.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#695360").s().p("AgMASQgGgIABgKQgBgJAGgHQAGgIAGAAQAIAAAFAIQAGAHAAAJQAAAKgGAIQgFAHgIAAQgGAAgGgHg");
	this.shape_41.setTransform(1828,100.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_42.setTransform(22,119.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgJAFgHQAGgIAGAAQAIAAAFAIQAFAHAAAJQAAAKgFAIQgFAHgIAAQgGAAgGgHg");
	this.shape_43.setTransform(105.4,63.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#695360").s().p("AgMASQgFgHAAgLQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAALgFAHQgFAHgIAAQgHAAgFgHg");
	this.shape_44.setTransform(366.9,152.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_45.setTransform(382.3,61);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#695360").s().p("AgMASQgGgHABgLQgBgJAGgHQAFgIAHAAQAHAAAGAIQAFAHABAJQgBALgFAHQgGAHgHAAQgHAAgFgHg");
	this.shape_46.setTransform(583.5,10.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#695360").s().p("AgMARQgFgHAAgKQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAALgFAGQgFAIgIAAQgHAAgFgIg");
	this.shape_47.setTransform(783.8,94.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#695360").s().p("AgMASQgFgHgBgLQABgKAFgGQAGgIAGAAQAHAAAGAIQAFAGAAAKQAAALgFAHQgGAHgHAAQgGAAgGgHg");
	this.shape_48.setTransform(707.1,145.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#695360").s().p("AgMASQgFgIgBgKQABgJAFgIQAGgHAGAAQAHAAAGAHQAFAIAAAJQAAAKgFAIQgGAHgHAAQgGAAgGgHg");
	this.shape_49.setTransform(1003.2,443.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#695360").s().p("AgMASQgGgHABgLQgBgJAGgIQAGgHAGAAQAHAAAGAHQAFAIABAJQgBALgFAHQgGAHgHAAQgGAAgGgHg");
	this.shape_50.setTransform(974.5,364);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_51.setTransform(1000.3,278.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#695360").s().p("AgMASQgFgHgBgLQABgJAFgHQAGgIAGAAQAHAAAGAIQAGAHgBAJQABALgGAHQgGAHgHAAQgGAAgGgHg");
	this.shape_52.setTransform(1166.1,195);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_53.setTransform(1146.9,48);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#695360").s().p("AgMASQgFgHgBgLQABgJAFgIQAGgHAGAAQAHAAAGAHQAFAIAAAJQAAALgFAHQgGAHgHAAQgGAAgGgHg");
	this.shape_54.setTransform(1277.3,2.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#695360").s().p("AgMARQgFgGAAgLQAAgKAFgGQAFgIAHAAQAIAAAFAIQAFAGAAAKQAAAKgFAHQgFAIgIAAQgHAAgFgIg");
	this.shape_55.setTransform(1408.5,127.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#695360").s().p("AgMASQgGgIAAgKQAAgJAGgHQAFgIAHAAQAHAAAGAIQAGAHAAAJQAAAKgGAIQgGAHgHAAQgHAAgFgHg");
	this.shape_56.setTransform(1341.5,250.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_57.setTransform(1331.9,449.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgKAFgGQAFgIAHAAQAHAAAGAIQAFAGAAAKQAAAKgFAIQgGAHgHAAQgHAAgFgHg");
	this.shape_58.setTransform(1177.6,538.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#695360").s().p("AgMASQgGgIAAgKQAAgJAGgIQAFgHAHAAQAHAAAGAHQAFAIAAAJQAAAKgFAIQgGAHgHAAQgHAAgFgHg");
	this.shape_59.setTransform(1502.1,329.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_60.setTransform(2285.1,97.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#695360").s().p("AgMASQgGgIAAgKQAAgKAGgGQAFgIAHAAQAHAAAGAIQAFAGAAAKQAAAKgFAIQgGAHgHAAQgHAAgFgHg");
	this.shape_61.setTransform(2468.2,208.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#695360").s().p("AgMARQgFgHgBgKQABgKAFgGQAGgIAGAAQAIAAAFAIQAGAGgBAKQAAAKgFAHQgFAIgIAAQgGAAgGgIg");
	this.shape_62.setTransform(2287.1,401.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#695360").s().p("AgMASQgGgHAAgLQAAgJAGgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAALgFAHQgFAHgIAAQgHAAgFgHg");
	this.shape_63.setTransform(2425.1,524);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_64.setTransform(2213.3,557.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgJAFgHQAFgIAHAAQAHAAAGAIQAFAHAAAJQAAAKgFAIQgGAHgHAAQgHAAgFgHg");
	this.shape_65.setTransform(1893.1,572.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#695360").s().p("AgMASQgFgHAAgLQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAALgFAHQgFAHgIAAQgHAAgFgHg");
	this.shape_66.setTransform(1901.7,444);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#695360").s().p("AgMASQgFgHAAgLQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAALgFAHQgFAHgIAAQgHAAgFgHg");
	this.shape_67.setTransform(1049.2,483.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#695360").s().p("AgMASQgFgHgBgLQABgJAFgIQAGgHAGAAQAHAAAGAHQAGAIgBAJQABALgGAHQgGAHgHAAQgGAAgGgHg");
	this.shape_68.setTransform(795.3,465.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#695360").s().p("AgMASQgFgIgBgKQABgJAFgIQAGgHAGAAQAIAAAFAHQAFAIAAAJQAAAKgFAIQgFAHgIAAQgGAAgGgHg");
	this.shape_69.setTransform(689.9,358.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgKAFgGQAFgIAHAAQAIAAAFAIQAFAGAAAKQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_70.setTransform(2351.3,197.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#695360").s().p("AgMASQgFgIgBgKQABgKAFgGQAGgIAGAAQAIAAAFAIQAFAGAAAKQAAAKgFAIQgFAHgIAAQgGAAgGgHg");
	this.shape_71.setTransform(1.9,500.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2_1, new cjs.Rectangle(0,0,2595.7,575.2), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#695360").s().p("AgMASQgFgHAAgLQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAALgFAHQgFAHgIAAQgHAAgFgHg");
	this.shape_37.setTransform(483.9,518.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#695360").s().p("AgMASQgFgIgBgKQABgJAFgIQAGgHAGAAQAHAAAGAHQAGAIgBAJQABAKgGAIQgGAHgHAAQgGAAgGgHg");
	this.shape_38.setTransform(404.4,508.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_39.setTransform(401.5,383.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#695360").s().p("AgMASQgGgIAAgKQAAgJAGgHQAFgIAHAAQAHAAAGAIQAGAHgBAJQABAKgGAIQgGAHgHAAQgHAAgFgHg");
	this.shape_40.setTransform(2037.9,304.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_41.setTransform(1976.5,100.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_42.setTransform(4.7,143);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgJAFgHQAFgIAHAAQAHAAAGAIQAFAHAAAJQAAAKgFAIQgGAHgHAAQgHAAgFgHg");
	this.shape_43.setTransform(170.5,119.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_44.setTransform(253.9,63.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#695360").s().p("AgMASQgGgHABgLQgBgJAGgHQAGgIAGAAQAHAAAGAIQAFAHABAJQgBALgFAHQgGAHgHAAQgGAAgGgHg");
	this.shape_45.setTransform(515.5,152.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#695360").s().p("AgMASQgGgIAAgKQAAgJAGgHQAGgIAGAAQAHAAAGAIQAGAHgBAJQABAKgGAIQgGAHgHAAQgGAAgGgHg");
	this.shape_46.setTransform(530.8,61);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#695360").s().p("AgMASQgFgHAAgLQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAALgFAHQgFAHgIAAQgHAAgFgHg");
	this.shape_47.setTransform(732,10.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#695360").s().p("AgMARQgGgHAAgKQAAgJAGgIQAFgHAHAAQAHAAAGAHQAGAIgBAJQABAKgGAHQgGAIgHAAQgHAAgFgIg");
	this.shape_48.setTransform(932.3,94.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#695360").s().p("AgMASQgFgHAAgLQAAgKAFgGQAFgIAHAAQAIAAAFAIQAFAGAAAKQAAALgFAHQgFAHgIAAQgHAAgFgHg");
	this.shape_49.setTransform(855.6,145.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_50.setTransform(1151.7,443.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#695360").s().p("AgMASQgFgHAAgLQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAALgFAHQgFAHgIAAQgHAAgFgHg");
	this.shape_51.setTransform(1123,364);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#695360").s().p("AgMASQgGgIAAgKQAAgJAGgHQAFgIAHAAQAHAAAGAIQAFAHAAAJQAAAKgFAIQgGAHgHAAQgHAAgFgHg");
	this.shape_52.setTransform(1148.9,278.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#695360").s().p("AgMASQgFgHAAgLQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAALgFAHQgFAHgIAAQgHAAgFgHg");
	this.shape_53.setTransform(1314.6,195);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#695360").s().p("AgMASQgGgIAAgKQAAgJAGgIQAFgHAHAAQAHAAAGAHQAFAIAAAJQAAAKgFAIQgGAHgHAAQgHAAgFgHg");
	this.shape_54.setTransform(1295.5,48);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#695360").s().p("AgMASQgFgHAAgLQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAALgFAHQgFAHgIAAQgHAAgFgHg");
	this.shape_55.setTransform(1425.8,2.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#695360").s().p("AgMARQgFgHgBgKQABgKAFgGQAGgIAGAAQAHAAAGAIQAFAGAAAKQAAAKgFAHQgGAIgHAAQgGAAgGgIg");
	this.shape_56.setTransform(1557.1,127.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_57.setTransform(1490,250.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#695360").s().p("AgMASQgGgIAAgKQAAgJAGgHQAFgIAHAAQAHAAAGAIQAGAHgBAJQABAKgGAIQgGAHgHAAQgHAAgFgHg");
	this.shape_58.setTransform(1480.4,449.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgKAFgGQAFgIAHAAQAIAAAFAIQAFAGAAAKQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_59.setTransform(1326.1,538.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_60.setTransform(1650.6,329.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgJAFgIQAGgHAGAAQAIAAAFAHQAFAIAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_61.setTransform(2433.7,97.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgKAFgGQAFgIAHAAQAIAAAFAIQAFAGAAAKQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_62.setTransform(2616.7,208.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#695360").s().p("AgMARQgFgGAAgLQAAgKAFgGQAFgIAHAAQAIAAAFAIQAFAGAAAKQAAAKgFAHQgFAIgIAAQgHAAgFgIg");
	this.shape_63.setTransform(2435.6,401.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#695360").s().p("AgMASQgFgHAAgLQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAALgFAHQgFAHgIAAQgHAAgFgHg");
	this.shape_64.setTransform(2573.6,524);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#695360").s().p("AgMASQgGgIABgKQgBgJAGgIQAGgHAGAAQAHAAAGAHQAFAIABAJQgBAKgFAIQgGAHgHAAQgGAAgGgHg");
	this.shape_65.setTransform(2361.8,557.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_66.setTransform(2041.6,572.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#695360").s().p("AgMASQgFgHgBgLQABgJAFgHQAFgIAHAAQAIAAAFAIQAFAHAAAJQAAALgFAHQgFAHgIAAQgHAAgFgHg");
	this.shape_67.setTransform(2050.3,444);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#695360").s().p("AgMASQgGgHABgLQgBgJAGgIQAFgHAHAAQAHAAAGAHQAFAIABAJQgBALgFAHQgGAHgHAAQgHAAgFgHg");
	this.shape_68.setTransform(1197.8,483.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#695360").s().p("AgMASQgFgHAAgLQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAALgFAHQgFAHgIAAQgHAAgFgHg");
	this.shape_69.setTransform(943.8,465.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgJAFgIQAFgHAHAAQAIAAAFAHQAFAIAAAJQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_70.setTransform(838.4,358.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#695360").s().p("AgMASQgGgIAAgKQAAgKAGgGQAGgIAGAAQAIAAAFAIQAGAGAAAKQAAAKgGAIQgFAHgIAAQgGAAgGgHg");
	this.shape_71.setTransform(2499.9,197.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#695360").s().p("AgMASQgFgIAAgKQAAgKAFgGQAFgIAHAAQAIAAAFAIQAFAGAAAKQAAAKgFAIQgFAHgIAAQgHAAgFgHg");
	this.shape_72.setTransform(150.4,500.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#695360").s().p("AgMASQgFgIgBgKQABgJAFgHQAGgIAGAAQAIAAAFAIQAFAHAAAJQAAAKgFAIQgFAHgIAAQgGAAgGgHg");
	this.shape_73.setTransform(1.9,397.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,2618.5,575.2), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak7E8QiDiCAAi6QAAi4CDiDQCDiDC4AAQC5AACDCDQCDCDAAC4QAAC5iDCDQiDCDi5AAQi4AAiDiDg");
	this.shape.setTransform(44.7,44.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,89.5,89.5), null);


(lib.Path_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F0125").s().p("AsKAvQlDgTAAgcQAAgbFDgTQFCgUHIAAQHJAAFDAUQFCATAAAbQAAAclCATQlEAUnIAAQnGAAlEgUg");
	this.shape.setTransform(110.2,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_26, new cjs.Rectangle(0,0,220.4,13.3), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F0125").s().p("A0UBRQobghAAgwQAAguIbgiQIaghL6gBQL7ABIaAhQIbAiAAAuQAAAwobAhQobAir6gBQr4ABocgig");
	this.shape.setTransform(184,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,368,22.9), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#15141C").s().p("AlSiUIExBzIFzhAIlSD2g");
	this.shape.setTransform(33.9,14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,67.7,29.9), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#534154","#1E1C29"],[0.012,1],-124.2,0,124.3,0).s().p("AKkG2IAADTIiskeIgTBAQgWA/gRAAQgSAAhDiWIhAiWIgjCmIizl/IAAD7IiXj0IAtDgIjFkTIAAC8IhJkfIhnDJIgUhCQgWhFAAgJQAAgIgqBBIgrBCIgOhuQgNhxACgKQACgLjQAjQhnAShpAUIgfhvIh5AjIiAAAIA/iHQHZjgAbgVQARgNE6giQCegRCZgPIIWJfILpLmIlVhlIAbCRg");
	this.shape.setTransform(124.3,69.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,248.5,139.5), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#15141C").s().p("Ai1L3QpehHpPhKImKmZICYivMA1BgOOIqVbfQgKACgdAAQjEAAwih6g");
	this.shape_1.setTransform(177.3,88.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,354.6,176.3), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAiD2Qi5gDhTg9QgpgfgEgeIAoiyIAAheIgbgvIAAgvIHiAAIAbAPIANAkIgNArIgMBJIAxC4QgRBah0AiQg3AQg0AAIgGAAg");
	mask.setTransform(28,24.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#533031").s().p("AjqC2QgZgUgNgWIgHgTIAoiyIAAheIgbgvIAAgvIHiAAIAbAPIANAkIgNArIgMBJIAxC4QgRBah0AiQglALgqADIgiACQi5gDhTg9g");
	this.shape.setTransform(38,24.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(10,0,46,49.3), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhxAWIAlhZIBSgWIAwgCIAtBDIAPBRIgyAbIh1AIg");
	mask.setTransform(14.4,9.2);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BEA17E").s().p("AALA/QhgAAgFgBQgIgCguhhIBvAgIBogJIBFgxIAFA1IgnBKIhfgBg");
	this.shape.setTransform(14.5,15.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(3,9.5,22.8,8.9), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgfDTQgEgBiTi3QiTi3ACgHQADgJgShFQARAOFQB7QCnA+ClA6IhBBTIhDASIASAkIhOBZg");
	mask.setTransform(40.5,27.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B272E").s().p("AgJERQgngmiAiIQiYigAEgIIANhHQAMhCAMgNQAKgMAUgcQASgWAIACQAJABBNAdIBLAdIAGAbIgcAaQgcAaAEABIE5BeIhfAnICpBrIkRg+QDVCBAJgBIBpgLQgsBggNAKQgLAJh+AIQgwACggAAQg0AAgIgHg");
	this.shape.setTransform(32.5,28.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(6.2,3.6,58.8,48.5), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag3ARIAEgPIBJg1IAiA/Ig7Aog");
	mask.setTransform(8.2,5.2);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77578").s().p("AAUAdQgJgJgigGIgtgHQgKgCAJgSIAKgSIBoAMIAYgIIAGAiQgLAJgMAHQgPAJgJAAQgFAAgDgDg");
	this.shape.setTransform(7.5,8.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(2.6,5.7,11.3,4.7), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgjEbIiiiLIgpikIFbkaIBvArQAVB/gCAIQgYBkgYCUQACAagGAkIiVBzIgLACQgXAAgngUg");
	mask.setTransform(31,39.2);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BEA17E").s().p("AgmCIQgDAAiUjJIBViBIBZDbICPCIIA+APIgEARIgwACg");
	this.shape.setTransform(19,50.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BEA17E").s().p("AAUCaIgIAjQisimgYgSIgVgDIBbikQABgEBTgaIBRgYIBVBHQBCC8ADAEQAEAEhVCmg");
	this.shape_1.setTransform(41.9,21.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(7.1,9,47.9,60.6), null);


(lib.Group_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AptYoMAJsgxPMAJvAxPg");
	this.shape.setTransform(62.2,157.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_43, new cjs.Rectangle(0,0,124.5,315.2), null);


(lib.Group_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AmcQUMAGcggoMAGdAgog");
	this.shape.setTransform(41.3,104.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_42, new cjs.Rectangle(0,0,82.5,208.9), null);


(lib.Group_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("Ap1Y8MAJ3gx3MAJ0Ax3g");
	this.shape.setTransform(63,159.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_40, new cjs.Rectangle(0,0,126.1,319.3), null);


(lib.Group_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AoCUYMAIBgovMAIEAovg");
	this.shape.setTransform(51.5,130.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_38, new cjs.Rectangle(0,0,103,260.7), null);


(lib.Group_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("EgN1AjBMANzhGBMAN4BGBg");
	this.shape.setTransform(88.6,224.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_37, new cjs.Rectangle(0,0,177.1,448.3), null);


(lib.Group_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AqfamMAKeg1MMAKhA1Mg");
	this.shape.setTransform(67.2,170.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_36, new cjs.Rectangle(0,0,134.5,340.5), null);


(lib.Group_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AjgI6IDgxzIDhRzg");
	this.shape.setTransform(22.5,57);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_35, new cjs.Rectangle(0,0,45,113.9), null);


(lib.Group_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AiHFZICHqxICIKxg");
	this.shape.setTransform(13.6,34.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_34, new cjs.Rectangle(0,0,27.3,69), null);


(lib.Group_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AlxOpIFw9RIFzdRg");
	this.shape.setTransform(37,93.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_33, new cjs.Rectangle(0,0,74,187.4), null);


(lib.Group_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AolVvMAIkgrdMAImArdg");
	this.shape.setTransform(55,139.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_32, new cjs.Rectangle(0,0,109.9,278.2), null);


(lib.Group_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AjLIGIDLwLIDMQLg");
	this.shape.setTransform(20.4,51.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_31, new cjs.Rectangle(0,0,40.9,103.5), null);


(lib.Group_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AokVvMAIjgrdMAImArdg");
	this.shape.setTransform(54.9,139.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_30, new cjs.Rectangle(0,0,109.9,278.2), null);


(lib.Group_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AiyHFICyuJICzOJg");
	this.shape.setTransform(17.9,45.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_29, new cjs.Rectangle(0,0,35.8,90.5), null);


(lib.Group_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AkMKoIEM1QIENVQg");
	this.shape.setTransform(26.9,68.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_28, new cjs.Rectangle(0,0,53.8,136.1), null);


(lib.Group_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AjgI6IDgxzIDhRzg");
	this.shape.setTransform(22.5,57);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_27, new cjs.Rectangle(0,0,45,113.9), null);


(lib.Group_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AjgI6IDgxzIDhRzg");
	this.shape.setTransform(22.5,57);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_26, new cjs.Rectangle(0,0,45,113.9), null);


(lib.Group_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AoZVSMAIYgqjMAIbAqjg");
	this.shape.setTransform(53.8,136.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_25, new cjs.Rectangle(0,0,107.6,272.4), null);


(lib.Group_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AmBPRIGA+hIGDehg");
	this.shape.setTransform(38.6,97.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_24, new cjs.Rectangle(0,0,77.2,195.5), null);


(lib.Group_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AkMKoIEM1QIENVQg");
	this.shape.setTransform(26.9,68.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_23, new cjs.Rectangle(0,0,53.8,136.1), null);


(lib.Group_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AkMKoIEM1QIENVQg");
	this.shape.setTransform(26.9,68.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_22, new cjs.Rectangle(0,0,53.8,136.1), null);


(lib.Group_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AkMKoIEM1QIENVQg");
	this.shape.setTransform(26.9,68.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_21, new cjs.Rectangle(0,0,53.8,136.1), null);


(lib.Group_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AkMKoIEM1QIENVQg");
	this.shape.setTransform(26.9,68.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_20, new cjs.Rectangle(0,0,53.7,136.1), null);


(lib.Group_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AinGpICntRICoNRg");
	this.shape.setTransform(16.8,42.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_19, new cjs.Rectangle(0,0,33.6,85.1), null);


(lib.Group_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AinGpICntRICoNRg");
	this.shape.setTransform(16.8,42.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_18, new cjs.Rectangle(0,0,33.6,85.1), null);


(lib.Group_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AinGpICntRICoNRg");
	this.shape.setTransform(16.8,42.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_17, new cjs.Rectangle(0,0,33.6,85.1), null);


(lib.Group_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AqgamMAKeg1MMAKiA1Mg");
	this.shape.setTransform(67.3,170.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_16, new cjs.Rectangle(0,0,134.5,340.5), null);


(lib.Group_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AoCUYMAIBgovMAIEAovg");
	this.shape.setTransform(51.5,130.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_15, new cjs.Rectangle(0,0,103,260.7), null);


(lib.Group_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AshfuMAMfg/cMAMkA/cg");
	this.shape.setTransform(80.2,203.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_14, new cjs.Rectangle(0,0,160.4,406.1), null);


(lib.Group_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AnER6MAHDgjzMAHGAjzg");
	this.shape.setTransform(45.3,114.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(0,0,90.5,229.2), null);


(lib.Group_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AnkTMMAHjgmXMAHmAmXg");
	this.shape.setTransform(48.5,122.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(0,0,97,245.6), null);


(lib.Group_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AnkTMMAHjgmXMAHmAmXg");
	this.shape.setTransform(48.5,122.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(0,0,97,245.6), null);


(lib.Group_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AnkTMMAHjgmXMAHmAmXg");
	this.shape.setTransform(48.5,122.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(0,0,97,245.6), null);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AnkTMMAHjgmXMAHmAmXg");
	this.shape.setTransform(48.5,122.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(0,0,97,245.6), null);


(lib.Group_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AnqTbMAHqgm1MAHrAm1g");
	this.shape.setTransform(49.1,124.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(0,0,98.2,248.6), null);


(lib.Group_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AnqTbMAHpgm1MAHsAm1g");
	this.shape.setTransform(49.1,124.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(0,0,98.2,248.6), null);


(lib.Group_6_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#1E1C29").s().p("AnqTbMAHqgm1MAHrAm1g");
	this.shape_72.setTransform(49.1,124.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_72).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6_2, new cjs.Rectangle(0,0,98.2,248.6), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AnqTbMAHpgm1MAHsAm1g");
	this.shape.setTransform(49.1,124.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,98.2,248.6), null);


(lib.Group_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#1E1C29").s().p("AnqTbMAHpgm1MAHsAm1g");
	this.shape_73.setTransform(49.1,124.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_73).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4_2, new cjs.Rectangle(0,0,98.2,248.6), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AnqTbMAHqgm1MAHrAm1g");
	this.shape.setTransform(49.1,124.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,98.2,248.6), null);


(lib.Group_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#1E1C29").s().p("AqgamMAKeg1MMAKiA1Mg");
	this.shape_72.setTransform(67.3,170.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_72).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2_2, new cjs.Rectangle(0,0,134.5,340.5), null);


(lib.Group_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AnqTbMAHqgm1MAHrAm1g");
	this.shape.setTransform(49.1,124.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(0,0,98.2,248.6), null);


(lib.Group_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_39, null, null);


(lib.Level1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_8();
	this.instance.parent = this;
	this.instance.setTransform(1081.3,114.3,0.353,0.353,0,0,0,49.2,124.3);
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.Group_9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(992.9,114.8,0.353,0.353,0,0,0,48.5,122.8);
	this.instance_1.alpha = 0.602;

	this.instance_2 = new lib.Group_18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1054.3,143.2,0.353,0.353,0,0,0,16.9,42.6);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.Group_21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1069.9,134.1,0.353,0.353,0,0,0,26.9,68);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.Group_22();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1009.4,134.1,0.353,0.353,0,0,0,26.8,68);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.Group_23();
	this.instance_5.parent = this;
	this.instance_5.setTransform(949,134.1,0.353,0.353,0,0,0,26.9,68);
	this.instance_5.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AgsNHIAAhUIkOAAIE645IE7Y5IkOAAIAABUg");
	this.shape.setTransform(967.7,135.5,0.353,0.353);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E1C29").s().p("Ag3QRIAAhoIlPAAIGG+5IGHe5IlPAAIAABog");
	this.shape_1.setTransform(1018.7,121.1,0.353,0.353);

	this.instance_6 = new lib.Group_32();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1030.1,109.1,0.353,0.353,0,0,0,55,139.1);
	this.instance_6.alpha = 0.301;

	this.instance_7 = new lib.Group_33();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1097.7,125.1,0.353,0.353,0,0,0,37,93.7);
	this.instance_7.alpha = 0.301;

	this.instance_8 = new lib.Group_39();
	this.instance_8.parent = this;
	this.instance_8.setTransform(28.5,114.3,0.353,0.353,0,0,0,29.2,124.3);
	this.instance_8.alpha = 0.602;

	this.instance_9 = new lib.Group_1_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-0.8,114.3,0.353,0.353,0,0,0,49.1,124.3);
	this.instance_9.alpha = 0.602;

	this.instance_10 = new lib.Group_2_2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-13,98.1,0.353,0.353,0,0,0,67.3,170.2);
	this.instance_10.alpha = 0.5;

	this.instance_11 = new lib.Group_3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-59.8,114.3,0.353,0.353,0,0,0,49.2,124.3);
	this.instance_11.alpha = 0.602;

	this.instance_12 = new lib.Group_4_2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-96.1,114.3,0.353,0.353,0,0,0,49.1,124.3);
	this.instance_12.alpha = 0.602;

	this.instance_13 = new lib.Group_24();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-40.8,123.7,0.353,0.353,0,0,0,38.7,97.8);
	this.instance_13.alpha = 0.5;

	this.instance_14 = new lib.Group_25();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-159.9,110.1,0.353,0.353,0,0,0,53.7,136.1);
	this.instance_14.alpha = 0.5;

	this.instance_15 = new lib.Group_26();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-43.8,138.1,0.353,0.353,0,0,0,22.6,57);
	this.instance_15.alpha = 0.5;

	this.instance_16 = new lib.Group_34();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-71.1,146,0.353,0.353,0,0,0,13.6,34.5);
	this.instance_16.alpha = 0.5;

	this.instance_17 = new lib.Group_35();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-92.2,138.1,0.353,0.353,0,0,0,22.4,57);
	this.instance_17.alpha = 0.5;

	this.instance_18 = new lib.Group_36();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-108.4,98.1,0.353,0.353,0,0,0,67.2,170.2);
	this.instance_18.alpha = 0.5;

	this.instance_19 = new lib.Group_43();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-133.8,102.5,0.353,0.353,0,0,0,62.2,157.5);
	this.instance_19.alpha = 0.801;

	this.instance_20 = new lib.Group_39();
	this.instance_20.parent = this;
	this.instance_20.setTransform(949.8,114.3,0.353,0.353,0,0,0,29.2,124.3);
	this.instance_20.alpha = 0.602;

	this.instance_21 = new lib.Group_1_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(920.5,114.3,0.353,0.353,0,0,0,49.1,124.3);
	this.instance_21.alpha = 0.602;

	this.instance_22 = new lib.Group_2_2();
	this.instance_22.parent = this;
	this.instance_22.setTransform(908.3,98.1,0.353,0.353,0,0,0,67.3,170.2);
	this.instance_22.alpha = 0.5;

	this.instance_23 = new lib.Group_3();
	this.instance_23.parent = this;
	this.instance_23.setTransform(861.5,114.3,0.353,0.353,0,0,0,49.2,124.3);
	this.instance_23.alpha = 0.602;

	this.instance_24 = new lib.Group_4_2();
	this.instance_24.parent = this;
	this.instance_24.setTransform(825.2,114.3,0.353,0.353,0,0,0,49.1,124.3);
	this.instance_24.alpha = 0.602;

	this.instance_25 = new lib.Group_5();
	this.instance_25.parent = this;
	this.instance_25.setTransform(704.2,114.3,0.353,0.353,0,0,0,49.1,124.3);
	this.instance_25.alpha = 0.602;

	this.instance_26 = new lib.Group_6_2();
	this.instance_26.parent = this;
	this.instance_26.setTransform(641.3,114.3,0.353,0.353,0,0,0,49.2,124.3);
	this.instance_26.alpha = 0.602;

	this.instance_27 = new lib.Group_7();
	this.instance_27.parent = this;
	this.instance_27.setTransform(507.3,114.3,0.353,0.353,0,0,0,49.1,124.3);
	this.instance_27.alpha = 0.602;

	this.instance_28 = new lib.Group_8();
	this.instance_28.parent = this;
	this.instance_28.setTransform(399.4,114.3,0.353,0.353,0,0,0,49.2,124.3);
	this.instance_28.alpha = 0.602;

	this.instance_29 = new lib.Group_9();
	this.instance_29.parent = this;
	this.instance_29.setTransform(311,114.8,0.353,0.353,0,0,0,48.5,122.8);
	this.instance_29.alpha = 0.602;

	this.instance_30 = new lib.Group_10();
	this.instance_30.parent = this;
	this.instance_30.setTransform(226.3,114.8,0.353,0.353,0,0,0,48.5,122.8);
	this.instance_30.alpha = 0.602;

	this.instance_31 = new lib.Group_11();
	this.instance_31.parent = this;
	this.instance_31.setTransform(177.9,114.8,0.353,0.353,0,0,0,48.5,122.8);
	this.instance_31.alpha = 0.602;

	this.instance_32 = new lib.Group_12();
	this.instance_32.parent = this;
	this.instance_32.setTransform(165.8,114.8,0.353,0.353,0,0,0,48.5,122.8);
	this.instance_32.alpha = 0.301;

	this.instance_33 = new lib.Group_13();
	this.instance_33.parent = this;
	this.instance_33.setTransform(34.2,117.7,0.353,0.353,0,0,0,45.4,114.7);
	this.instance_33.alpha = 0.602;

	this.instance_34 = new lib.Group_14();
	this.instance_34.parent = this;
	this.instance_34.setTransform(602.3,86.6,0.353,0.353,0,0,0,80.2,203.2);
	this.instance_34.alpha = 0.699;

	this.instance_35 = new lib.Group_15();
	this.instance_35.parent = this;
	this.instance_35.setTransform(578.1,112.2,0.353,0.353,0,0,0,51.5,130.4);
	this.instance_35.alpha = 0.699;

	this.instance_36 = new lib.Group_16();
	this.instance_36.parent = this;
	this.instance_36.setTransform(724,98.1,0.353,0.353,0,0,0,67.2,170.2);
	this.instance_36.alpha = 0.5;

	this.instance_37 = new lib.Group_17();
	this.instance_37.parent = this;
	this.instance_37.setTransform(213.9,143.2,0.353,0.353,0,0,0,16.9,42.6);
	this.instance_37.alpha = 0.301;

	this.instance_38 = new lib.Group_18();
	this.instance_38.parent = this;
	this.instance_38.setTransform(372.4,143.2,0.353,0.353,0,0,0,16.9,42.6);
	this.instance_38.alpha = 0.301;

	this.instance_39 = new lib.Group_19();
	this.instance_39.parent = this;
	this.instance_39.setTransform(493.3,143.2,0.353,0.353,0,0,0,16.9,42.6);
	this.instance_39.alpha = 0.301;

	this.instance_40 = new lib.Group_20();
	this.instance_40.parent = this;
	this.instance_40.setTransform(521.1,134.1,0.353,0.353,0,0,0,26.9,68);
	this.instance_40.alpha = 0.301;

	this.instance_41 = new lib.Group_21();
	this.instance_41.parent = this;
	this.instance_41.setTransform(388,134.1,0.353,0.353,0,0,0,26.9,68);
	this.instance_41.alpha = 0.301;

	this.instance_42 = new lib.Group_22();
	this.instance_42.parent = this;
	this.instance_42.setTransform(327.5,134.1,0.353,0.353,0,0,0,26.8,68);
	this.instance_42.alpha = 0.301;

	this.instance_43 = new lib.Group_23();
	this.instance_43.parent = this;
	this.instance_43.setTransform(267.1,134.1,0.353,0.353,0,0,0,26.9,68);
	this.instance_43.alpha = 0.301;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E1C29").s().p("Ag3QRIAAhoIlPAAIGF+5IGIe5IlPAAIAABog");
	this.shape_2.setTransform(675.5,133.2,0.353,0.353);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E1C29").s().p("AgsNHIAAhUIkOAAIE645IE7Y5IkOAAIAABUg");
	this.shape_3.setTransform(285.8,135.5,0.353,0.353);

	this.instance_44 = new lib.Group_24();
	this.instance_44.parent = this;
	this.instance_44.setTransform(880.5,123.7,0.353,0.353,0,0,0,38.7,97.8);
	this.instance_44.alpha = 0.5;

	this.instance_45 = new lib.Group_25();
	this.instance_45.parent = this;
	this.instance_45.setTransform(761.4,110.1,0.353,0.353,0,0,0,53.7,136.1);
	this.instance_45.alpha = 0.5;

	this.instance_46 = new lib.Group_26();
	this.instance_46.parent = this;
	this.instance_46.setTransform(877.5,138.1,0.353,0.353,0,0,0,22.6,57);
	this.instance_46.alpha = 0.5;

	this.instance_47 = new lib.Group_27();
	this.instance_47.parent = this;
	this.instance_47.setTransform(744.5,138.1,0.353,0.353,0,0,0,22.6,57);
	this.instance_47.alpha = 0.5;

	this.instance_48 = new lib.Group_28();
	this.instance_48.parent = this;
	this.instance_48.setTransform(206.6,134.1,0.353,0.353,0,0,0,26.8,68);
	this.instance_48.alpha = 0.301;

	this.instance_49 = new lib.Group_29();
	this.instance_49.parent = this;
	this.instance_49.setTransform(179.2,142.2,0.353,0.353,0,0,0,17.9,45.2);
	this.instance_49.alpha = 0.301;

	this.instance_50 = new lib.Group_30();
	this.instance_50.parent = this;
	this.instance_50.setTransform(44.8,109.1,0.353,0.353,0,0,0,55,139.1);
	this.instance_50.alpha = 0.301;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E1C29").s().p("Ag3QRIAAhoIlPAAIGG+5IGHe5IlPAAIAABog");
	this.shape_4.setTransform(336.8,121.1,0.353,0.353);

	this.instance_51 = new lib.Group_31();
	this.instance_51.parent = this;
	this.instance_51.setTransform(71.3,139.9,0.353,0.353,0,0,0,20.4,51.8);
	this.instance_51.alpha = 0.5;

	this.instance_52 = new lib.Group_32();
	this.instance_52.parent = this;
	this.instance_52.setTransform(348.2,109.1,0.353,0.353,0,0,0,55,139.1);
	this.instance_52.alpha = 0.301;

	this.instance_53 = new lib.Group_33();
	this.instance_53.parent = this;
	this.instance_53.setTransform(415.8,125.1,0.353,0.353,0,0,0,37,93.7);
	this.instance_53.alpha = 0.301;

	this.instance_54 = new lib.Group_34();
	this.instance_54.parent = this;
	this.instance_54.setTransform(850.2,146,0.353,0.353,0,0,0,13.6,34.5);
	this.instance_54.alpha = 0.5;

	this.instance_55 = new lib.Group_35();
	this.instance_55.parent = this;
	this.instance_55.setTransform(829.1,138.1,0.353,0.353,0,0,0,22.4,57);
	this.instance_55.alpha = 0.5;

	this.instance_56 = new lib.Group_36();
	this.instance_56.parent = this;
	this.instance_56.setTransform(812.9,98.1,0.353,0.353,0,0,0,67.2,170.2);
	this.instance_56.alpha = 0.5;

	this.instance_57 = new lib.Group_37();
	this.instance_57.parent = this;
	this.instance_57.setTransform(663.8,79.1,0.353,0.353,0,0,0,88.6,224.1);
	this.instance_57.alpha = 0.301;

	this.instance_58 = new lib.Group_38();
	this.instance_58.parent = this;
	this.instance_58.setTransform(626.5,112.2,0.353,0.353,0,0,0,51.5,130.4);
	this.instance_58.alpha = 0.699;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E1C29").s().p("AlYNpIFZ7RIFYbRg");
	this.shape_5.setTransform(141.5,127.3,0.353,0.353);

	this.instance_59 = new lib.Group_40();
	this.instance_59.parent = this;
	this.instance_59.setTransform(103.2,101.8,0.353,0.353,0,0,0,63,159.6);
	this.instance_59.alpha = 0.801;

	this.instance_60 = new lib.Group_42();
	this.instance_60.parent = this;
	this.instance_60.setTransform(555.2,121.3,0.353,0.353,0,0,0,41.2,104.4);
	this.instance_60.alpha = 0.898;

	this.instance_61 = new lib.Group_43();
	this.instance_61.parent = this;
	this.instance_61.setTransform(787.5,102.5,0.353,0.353,0,0,0,62.2,157.5);
	this.instance_61.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.shape_5},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.shape_4},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.shape_3},{t:this.shape_2},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_1},{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Level1, new cjs.Rectangle(-178.8,0,1289.6,170), null);


(lib.Group_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_6();
	this.instance.parent = this;
	this.instance.setTransform(1305.9,213.2,1,1,0,0,0,1305.9,213.2);
	this.instance.alpha = 0.5;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_1.setTransform(761.8,100.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_2.setTransform(1148.2,55.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAEAFABAFQgBAHgEAEQgEAFgHAAQgFAAgFgFg");
	this.shape_3.setTransform(1782.6,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgFAFABQAHgBAEAFQAFAFAAAFQAAAGgFAFQgEAFgHgBQgFABgFgFg");
	this.shape_4.setTransform(2345.7,14.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgEAFgBQAGABAFAEQAEAEAAAGQAAAHgEAEQgFAFgGgBQgFABgFgFg");
	this.shape_5.setTransform(2394.9,166.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgFAFAAQAGAAAFAFQAEAEABAGQgBAGgEAFQgFAFgGAAQgFAAgFgFg");
	this.shape_6.setTransform(696.2,266.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgFAFAAQAHAAAEAFQAEAEABAGQgBAGgEAFQgEAFgHAAQgFAAgFgFg");
	this.shape_7.setTransform(375,317.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgFAFABQAHgBAEAFQAFAFAAAFQAAAGgFAFQgEAFgHgBQgFABgFgFg");
	this.shape_8.setTransform(1811.5,358.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgFAFgFQAEgFAGABQAGgBAFAFQAFAFAAAFQAAAGgFAFQgFAFgGgBQgGABgEgFg");
	this.shape_9.setTransform(2095.9,473.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_10.setTransform(1528,462.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_11.setTransform(368.3,456);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7C64B0").s().p("AgKALQgFgFABgGQgBgGAFgEQAFgFAFAAQAGAAAFAFQAFAEgBAGQABAGgFAFQgFAFgGAAQgFAAgFgFg");
	this.shape_12.setTransform(87.8,315.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7C64B0").s().p("AgKALQgEgEAAgHQAAgFAEgFQAFgFAFAAQAHAAAEAFQAFAFgBAFQABAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_13.setTransform(832.3,175.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_14.setTransform(1369,401);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_15.setTransform(1119.6,278);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7C64B0").s().p("AgKALQgEgFAAgGQAAgGAEgEQAFgFAFAAQAHAAAEAFQAFAEgBAGQABAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_16.setTransform(535.3,168.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_17.setTransform(209.2,231.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgFAFABQAHgBAEAFQAFAFAAAFQAAAGgFAFQgEAFgHgBQgFABgFgFg");
	this.shape_18.setTransform(229.5,392.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgEAFAAQAHAAAEAEQAFAFAAAFQAAAHgFAEQgEAFgHgBQgFABgFgFg");
	this.shape_19.setTransform(578.6,354.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_20.setTransform(859.2,351.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7C64B0").s().p("AgKALQgEgEgBgHQABgGAEgEQAEgFAGABQAGgBAFAFQAFAEAAAGQAAAHgFAEQgFAEgGABQgGgBgEgEg");
	this.shape_21.setTransform(854.4,255);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_22.setTransform(591.2,291.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_23.setTransform(306.6,284.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_24.setTransform(928.7,235.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7C64B0").s().p("AgKALQgEgFAAgGQAAgGAEgEQAFgFAFABQAHgBAEAFQAFAEgBAGQABAGgFAFQgEAEgHAAQgFAAgFgEg");
	this.shape_25.setTransform(271.9,79.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgEAFAAQAHAAAEAEQAFAFAAAFQAAAHgFAEQgEAFgHgBQgFABgFgFg");
	this.shape_26.setTransform(1092.6,268.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGABQAGgBAFAFQAFAEAAAGQAAAGgFAFQgFAEgGAAQgGAAgEgEg");
	this.shape_27.setTransform(1600.4,459.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgEAFgBQAHABAEAEQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_28.setTransform(1356.4,384.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAGAAAFAFQAEAFABAFQgBAHgEAEQgFAFgGAAQgFAAgFgFg");
	this.shape_29.setTransform(1450,321.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#7C64B0").s().p("AgKALQgFgEABgHQgBgFAFgFQAEgFAGAAQAGAAAFAFQAEAFABAFQgBAHgEAEQgFAFgGAAQgGAAgEgFg");
	this.shape_30.setTransform(1479.9,129.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_31.setTransform(1271.6,91.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgFAFABQAHgBAEAFQAFAFAAAFQAAAGgFAFQgEAFgHgBQgFABgFgFg");
	this.shape_32.setTransform(1288.9,184.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAGAAAFAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_33.setTransform(1558.9,105);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#7C64B0").s().p("AgKALQgEgEAAgHQAAgGAEgEQAFgFAFABQAHgBAEAFQAFAEgBAGQABAHgFAEQgEAEgHAAQgFAAgFgEg");
	this.shape_34.setTransform(1707.4,174.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAGAAAFAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_35.setTransform(1966.8,336.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7C64B0").s().p("AgKALQgFgFABgGQgBgFAFgFQAEgEAGAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgGAAgEgEg");
	this.shape_36.setTransform(2292.7,123.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_37.setTransform(2042,71.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgEAGAAQAGAAAFAEQAFAFAAAFQAAAHgFAEQgFAFgGgBQgGABgEgFg");
	this.shape_38.setTransform(2592.5,408.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7C64B0").s().p("AgKALQgFgFABgGQgBgGAFgEQAEgFAGAAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAFgGAAQgGAAgEgFg");
	this.shape_39.setTransform(303.7,280.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_40.setTransform(589.2,168.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_41.setTransform(2232.8,390.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAEgEAGgBQAGABAFAEQAFAEAAAGQAAAHgFAEQgFAFgGgBQgGABgEgFg");
	this.shape_42.setTransform(2014,381.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgEAFgBQAHABAEAEQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_43.setTransform(115.6,319.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_44.setTransform(331.6,118.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgFAFgFQAEgFAGABQAGgBAFAFQAFAFAAAFQAAAGgFAFQgFAFgGgBQgGABgEgFg");
	this.shape_45.setTransform(2324.5,217.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgFAFAAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAFgGAAQgFAAgFgFg");
	this.shape_46.setTransform(2455.6,185);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGABQAGgBAFAFQAFAEAAAGQAAAGgFAFQgFAEgGAAQgGAAgEgEg");
	this.shape_47.setTransform(2514.4,52);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_48.setTransform(554.5,73.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFgBgFgEg");
	this.shape_49.setTransform(681.7,231.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAEgEAGgBQAGABAFAEQAFAEAAAGQAAAHgFAEQgFAFgGgBQgGABgEgFg");
	this.shape_50.setTransform(2136.4,273.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7C64B0").s().p("AgKALQgFgFABgGQgBgGAFgEQAEgFAGABQAGgBAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAQgGAAgEgEg");
	this.shape_51.setTransform(618.1,43.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGABQAGgBAFAFQAFAEAAAGQAAAGgFAFQgFAEgGAAQgGAAgEgEg");
	this.shape_52.setTransform(538.1,43.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_53.setTransform(2617.6,186.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5_1, new cjs.Rectangle(0,0,2619.2,475), null);


(lib.Group_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_4();
	this.instance.parent = this;
	this.instance.setTransform(1357.6,213.2,1,1,0,0,0,1317.4,213.2);
	this.instance.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAGAAAFAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape.setTransform(675.6,100.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_1.setTransform(1062,55.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7C64B0").s().p("AgKALQgFgEABgHQgBgFAFgFQAEgFAGAAQAGAAAFAFQAEAFAAAFQAAAHgEAEQgFAFgGAAQgGAAgEgFg");
	this.shape_2.setTransform(1696.4,6.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgFAFABQAHgBAEAFQAFAFAAAFQAAAGgFAFQgEAFgHgBQgFABgFgFg");
	this.shape_3.setTransform(2259.5,14.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgEAFgBQAGABAFAEQAEAEAAAGQAAAHgEAEQgFAFgGgBQgFABgFgFg");
	this.shape_4.setTransform(2308.7,166.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7C64B0").s().p("AgKALQgFgFABgGQgBgGAFgEQAEgFAGAAQAHAAAEAFQAEAEAAAGQAAAGgEAFQgEAFgHAAQgGAAgEgFg");
	this.shape_5.setTransform(610,266.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7C64B0").s().p("AgKALQgFgFABgGQgBgGAFgEQAEgFAGAAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAFgGAAQgGAAgEgFg");
	this.shape_6.setTransform(288.8,317.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgFAFABQAHgBAEAFQAFAFAAAFQAAAGgFAFQgEAFgHgBQgFABgFgFg");
	this.shape_7.setTransform(1725.3,358.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgFAFgFQAEgFAGABQAGgBAFAFQAFAFAAAFQAAAGgFAFQgFAFgGgBQgGABgEgFg");
	this.shape_8.setTransform(2009.7,473.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_9.setTransform(1441.8,462.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_10.setTransform(282.1,456);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7C64B0").s().p("AgKALQgEgFgBgGQABgGAEgEQAFgFAFAAQAHAAAEAFQAFAEgBAGQABAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_11.setTransform(1.6,315.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7C64B0").s().p("AgKALQgEgEgBgHQABgFAEgFQAFgFAFAAQAGAAAFAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgFAAgFgFg");
	this.shape_12.setTransform(746.1,175.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_13.setTransform(1282.8,401);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_14.setTransform(1033.4,278);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7C64B0").s().p("AgKALQgEgFgBgGQABgGAEgEQAFgFAFAAQAGAAAFAFQAFAEAAAGQAAAGgFAFQgFAFgGAAQgFAAgFgFg");
	this.shape_15.setTransform(449.1,168.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_16.setTransform(123,231.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgFAFABQAHgBAEAFQAFAFAAAFQAAAGgFAFQgEAFgHgBQgFABgFgFg");
	this.shape_17.setTransform(143.3,392.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgEAFAAQAHAAAEAEQAFAFAAAFQAAAHgFAEQgEAFgHgBQgFABgFgFg");
	this.shape_18.setTransform(492.4,354.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_19.setTransform(773,351.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgFAFABQAGgBAFAFQAEAEABAGQgBAHgEAEQgFAEgGABQgFgBgFgEg");
	this.shape_20.setTransform(768.2,255);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_21.setTransform(505,291.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_22.setTransform(220.4,284.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_23.setTransform(842.5,235.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7C64B0").s().p("AgKALQgEgFgBgGQABgGAEgEQAEgFAGABQAGgBAFAFQAFAEAAAGQAAAGgFAFQgFAEgGAAQgGAAgEgEg");
	this.shape_24.setTransform(185.7,79.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgEAFAAQAHAAAEAEQAFAFAAAFQAAAHgFAEQgEAFgHgBQgFABgFgFg");
	this.shape_25.setTransform(1006.4,268.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGABQAGgBAFAFQAFAEAAAGQAAAGgFAFQgFAEgGAAQgGAAgEgEg");
	this.shape_26.setTransform(1514.2,459.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgEAFgBQAHABAEAEQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_27.setTransform(1270.2,384.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAEAFAAAFQAAAHgEAEQgEAFgHAAQgGAAgEgFg");
	this.shape_28.setTransform(1363.8,321.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7C64B0").s().p("AgKALQgFgEABgHQgBgFAFgFQAEgFAGAAQAGAAAFAFQAFAFgBAFQABAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_29.setTransform(1393.7,129.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_30.setTransform(1185.4,91.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgFAFABQAHgBAEAFQAFAFAAAFQAAAGgFAFQgEAFgHgBQgFABgFgFg");
	this.shape_31.setTransform(1202.7,184.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#7C64B0").s().p("AgKALQgEgEgBgHQABgFAEgFQAEgFAGAAQAGAAAFAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_32.setTransform(1472.7,105);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgFAFABQAHgBAEAFQAFAEAAAGQAAAHgFAEQgEAEgHAAQgFAAgFgEg");
	this.shape_33.setTransform(1621.2,174.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#7C64B0").s().p("AgKALQgFgEABgHQgBgFAFgFQAFgFAFAAQAGAAAFAFQAEAFAAAFQAAAHgEAEQgEAFgHAAQgFAAgFgFg");
	this.shape_34.setTransform(1880.6,336.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7C64B0").s().p("AgKALQgEgFAAgGQAAgFAEgFQAEgEAGAAQAGAAAFAEQAFAFgBAFQABAGgFAFQgFAEgGAAQgGAAgEgEg");
	this.shape_35.setTransform(2206.5,123.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_36.setTransform(1955.8,71.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgEAGAAQAGAAAFAEQAFAFAAAFQAAAHgFAEQgFAFgGgBQgGABgEgFg");
	this.shape_37.setTransform(2506.3,408.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_38.setTransform(2701.1,230.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7C64B0").s().p("AgKALQgEgFAAgGQAAgGAEgEQAFgFAFAAQAHAAAEAFQAFAEgBAGQABAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_39.setTransform(217.5,280.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_40.setTransform(503,168.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_41.setTransform(2146.6,390.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAEgEAGgBQAGABAFAEQAFAEAAAGQAAAHgFAEQgFAFgGgBQgGABgEgFg");
	this.shape_42.setTransform(1927.8,381.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgEAFgBQAHABAEAEQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_43.setTransform(29.4,319.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAGAAAFAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_44.setTransform(245.4,118.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgFAFgFQAEgFAGABQAGgBAFAFQAFAFAAAFQAAAGgFAFQgFAFgGgBQgGABgEgFg");
	this.shape_45.setTransform(2238.3,217.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgFAFAAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAFgGAAQgFAAgFgFg");
	this.shape_46.setTransform(2369.4,185);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGABQAGgBAFAFQAFAEAAAGQAAAGgFAFQgFAEgGAAQgGAAgEgEg");
	this.shape_47.setTransform(2428.2,52);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgFAFABQAHgBAEAFQAFAEAAAGQAAAGgFAFQgEAEgHAAQgFAAgFgEg");
	this.shape_48.setTransform(2616.2,255.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_49.setTransform(468.3,73.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgEAFgBQAHABAEAEQAFAEAAAGQAAAHgFAEQgEAFgHgBQgFABgFgFg");
	this.shape_50.setTransform(595.5,231.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAEgEAGgBQAGABAFAEQAFAEAAAGQAAAHgFAEQgFAFgGgBQgGABgEgFg");
	this.shape_51.setTransform(2050.2,273.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#7C64B0").s().p("AgKALQgFgFABgGQgBgGAFgEQAFgFAFABQAGgBAFAFQAFAEgBAGQABAGgFAFQgFAEgGAAQgFAAgFgEg");
	this.shape_52.setTransform(531.9,43.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGABQAGgBAFAFQAFAEAAAGQAAAGgFAFQgFAEgGAAQgGAAgEgEg");
	this.shape_53.setTransform(451.9,43.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_54.setTransform(2531.4,186.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#7C64B0").s().p("AgKALQgEgEgBgHQABgFAEgFQAEgFAGAAQAGAAAFAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_55.setTransform(2709.8,142.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_0, new cjs.Rectangle(0,0,2711.3,475), null);


(lib.Group_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(1377.9,213.2,1,1,0,0,0,1317.4,213.2);
	this.instance.alpha = 0.5;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAGgFAFQgEAEgHABQgFgBgFgEg");
	this.shape_1.setTransform(2059.8,100.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_2.setTransform(1673.4,55.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGABQAGgBAFAFQAFAEAAAGQAAAGgFAFQgFAEgGAAQgGAAgEgEg");
	this.shape_3.setTransform(1039,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_4.setTransform(475.9,14.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgFAFAAQAHAAAEAFQAEAEABAGQgBAGgEAFQgEAFgHAAQgFAAgFgFg");
	this.shape_5.setTransform(426.8,166.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7C64B0").s().p("AgKALQgEgEgBgHQABgFAEgFQAFgFAFAAQAHAAAEAFQAFAFgBAFQABAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_6.setTransform(1.6,389.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAGAAAFAFQAEAFABAFQgBAHgEAEQgFAFgGAAQgFAAgFgFg");
	this.shape_7.setTransform(2125.4,266.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAGAAAFAFQAEAFAAAFQAAAHgEAEQgFAFgGAAQgFAAgFgFg");
	this.shape_8.setTransform(2446.6,317.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_9.setTransform(1010.1,358.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgEAFAAQAHAAAEAEQAFAFAAAFQAAAGgFAFQgEAEgHAAQgFAAgFgEg");
	this.shape_10.setTransform(725.7,473.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgEAFgBQAHABAEAEQAFAEAAAGQAAAHgFAEQgEAFgHgBQgFABgFgFg");
	this.shape_11.setTransform(1293.6,462.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgEAFgBQAHABAEAEQAFAEAAAGQAAAHgFAEQgEAFgHgBQgFABgFgFg");
	this.shape_12.setTransform(2453.3,456.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7C64B0").s().p("AgKALQgFgFABgGQgBgGAFgEQAEgFAGABQAGgBAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAQgGAAgEgEg");
	this.shape_13.setTransform(1989.4,175.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAGgFAFQgEAEgHABQgFgBgFgEg");
	this.shape_14.setTransform(1452.6,401);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgFAFgFQAEgEAGgBQAGABAFAEQAFAFAAAFQAAAGgFAFQgFAFgGAAQgGAAgEgFg");
	this.shape_15.setTransform(1702,278.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7C64B0").s().p("AgKALQgFgEABgHQgBgFAFgFQAEgFAGAAQAGAAAFAFQAEAFAAAFQAAAHgEAEQgFAFgGAAQgGAAgEgFg");
	this.shape_16.setTransform(2286.4,168.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgEAGAAQAGAAAFAEQAFAFAAAFQAAAHgFAEQgFAFgGgBQgGABgEgFg");
	this.shape_17.setTransform(2612.4,231.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_18.setTransform(2592.1,392.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_19.setTransform(2243,354.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_20.setTransform(1962.4,351.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7C64B0").s().p("AgKALQgEgFAAgGQAAgGAEgEQAEgFAGAAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAFgGAAQgGAAgEgFg");
	this.shape_21.setTransform(1967.2,255);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgFAFABQAHgBAEAFQAFAEAAAGQAAAGgFAFQgEAFgHgBQgFABgFgFg");
	this.shape_22.setTransform(2230.4,291.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_23.setTransform(2515,284.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_24.setTransform(1892.9,235.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7C64B0").s().p("AgKALQgFgFABgGQgBgGAFgEQAEgEAGgBQAGABAFAEQAFAEgBAGQABAGgFAFQgFAFgGAAQgGAAgEgFg");
	this.shape_25.setTransform(2549.7,79.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_26.setTransform(1729,268.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_27.setTransform(1221.2,459.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_28.setTransform(1465.2,384.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgEAFgBQAGABAFAEQAFAEAAAGQAAAHgFAEQgFAFgGgBQgFABgFgFg");
	this.shape_29.setTransform(1371.7,322);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#7C64B0").s().p("AgKALQgEgFgBgGQABgFAEgFQAEgEAGgBQAHABAEAEQAFAFAAAFQAAAGgFAFQgEAFgHAAQgGAAgEgFg");
	this.shape_30.setTransform(1341.8,129.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAGAAAFAFQAFAFAAAFQAAAHgFAEQgFAEgGABQgGgBgEgEg");
	this.shape_31.setTransform(1550,91.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_32.setTransform(1532.7,184.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7C64B0").s().p("AgKALQgFgEABgHQgBgFAFgFQAFgFAFAAQAGAAAFAFQAEAFAAAFQAAAHgEAEQgFAEgGABQgGgBgEgEg");
	this.shape_33.setTransform(1262.7,105);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAGgFAFQgFAFgGAAQgGAAgEgFg");
	this.shape_34.setTransform(1114.2,174.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7C64B0").s().p("AgKALQgEgFgBgGQABgGAEgEQAEgFAGABQAGgBAFAFQAFAEAAAGQAAAGgFAFQgFAEgGAAQgGAAgEgEg");
	this.shape_35.setTransform(854.9,336.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7C64B0").s().p("AgKALQgEgFgBgGQABgGAEgEQAEgFAGAAQAHAAAEAFQAFAEgBAGQABAGgFAFQgEAFgHAAQgGAAgEgFg");
	this.shape_36.setTransform(529,123.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAEgHABQgFgBgFgEg");
	this.shape_37.setTransform(779.6,71.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_38.setTransform(229.1,408.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgFAFgFQAEgEAGgBQAGABAFAEQAFAFAAAFQAAAGgFAFQgFAFgGAAQgGAAgEgFg");
	this.shape_39.setTransform(34.3,230.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#7C64B0").s().p("AgKALQgEgEgBgHQABgFAEgFQAEgFAGAAQAHAAAEAFQAEAFAAAFQAAAHgEAEQgEAFgHAAQgGAAgEgFg");
	this.shape_40.setTransform(2518,280.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgEAFAAQAHAAAEAEQAFAFAAAFQAAAHgFAEQgEAFgHgBQgFABgFgFg");
	this.shape_41.setTransform(2232.4,168.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_42.setTransform(588.8,390.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_43.setTransform(807.6,381.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAGgFAFQgFAFgGAAQgGAAgEgFg");
	this.shape_44.setTransform(2706,319.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgEAFgBQAHABAEAEQAFAFAAAFQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_45.setTransform(2490,118.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_46.setTransform(497.1,217.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAEAFABAFQgBAHgEAEQgEAFgHAAQgFAAgFgFg");
	this.shape_47.setTransform(366,185);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_48.setTransform(307.2,52);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_49.setTransform(8.3,69.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_50.setTransform(119.2,255.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAGgFAFQgEAEgHABQgFgBgFgEg");
	this.shape_51.setTransform(2267.1,73.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_52.setTransform(2139.9,231.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_53.setTransform(685.2,273.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#7C64B0").s().p("AgKALQgEgFgBgGQABgGAEgEQAEgEAGgBQAGABAFAEQAFAEAAAGQAAAGgFAFQgFAFgGAAQgGAAgEgFg");
	this.shape_54.setTransform(2203.5,43.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgEAFgBQAHABAEAEQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_55.setTransform(2283.5,43.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAEgEAGgBQAGABAFAEQAFAEAAAGQAAAHgFAEQgFAFgGgBQgGABgEgFg");
	this.shape_56.setTransform(204,187);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#7C64B0").s().p("AgKALQgFgFABgGQgBgFAFgFQAFgEAFgBQAGABAFAEQAFAFgBAFQABAGgFAFQgFAFgGAAQgFAAgFgFg");
	this.shape_57.setTransform(25.7,142.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_2, new cjs.Rectangle(0,0,2707.6,474.9), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_2();
	this.instance.parent = this;
	this.instance.setTransform(1313.4,213.2,1,1,0,0,0,1305.9,213.2);
	this.instance.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAGgFAFQgEAEgHABQgFgBgFgEg");
	this.shape.setTransform(1857.4,100.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_1.setTransform(1471,55.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7C64B0").s().p("AgKALQgFgFABgGQgBgGAFgEQAEgFAGABQAGgBAFAFQAFAEgBAGQABAGgFAFQgFAEgGAAQgGAAgEgEg");
	this.shape_2.setTransform(836.6,6.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_3.setTransform(273.5,14.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7C64B0").s().p("AgKALQgEgFgBgGQABgGAEgEQAEgFAGAAQAHAAAEAFQAFAEgBAGQABAGgFAFQgEAFgHAAQgGAAgEgFg");
	this.shape_4.setTransform(224.3,166.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7C64B0").s().p("AgKALQgEgEAAgHQAAgFAEgFQAFgFAFAAQAHAAAEAFQAFAFgBAFQABAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_5.setTransform(1923,266.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7C64B0").s().p("AgKALQgFgEABgHQgBgFAFgFQAEgFAGAAQAGAAAFAFQAFAFgBAFQABAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_6.setTransform(2244.2,317.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAGgFAFQgFAFgGAAQgGAAgEgFg");
	this.shape_7.setTransform(807.7,358.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgFAFgFQAEgEAGAAQAGAAAFAEQAFAFAAAFQAAAGgFAFQgFAEgGAAQgGAAgEgEg");
	this.shape_8.setTransform(523.2,473.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgEAFgBQAHABAEAEQAFAEAAAGQAAAHgFAEQgEAFgHgBQgFABgFgFg");
	this.shape_9.setTransform(1091.1,462.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAEgEAGgBQAGABAFAEQAFAEAAAGQAAAHgFAEQgFAFgGgBQgGABgEgFg");
	this.shape_10.setTransform(2250.8,456.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAGAAAFAFQAEAFAAAFQAAAHgEAEQgFAFgGAAQgFAAgFgFg");
	this.shape_11.setTransform(2531.4,315.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7C64B0").s().p("AgKALQgEgFgBgGQABgGAEgEQAEgFAGABQAGgBAFAFQAFAEAAAGQAAAGgFAFQgFAEgGAAQgGAAgEgEg");
	this.shape_12.setTransform(1786.9,175.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAGgFAFQgEAEgHABQgFgBgFgEg");
	this.shape_13.setTransform(1250.2,401);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgFAFgFQAEgEAGgBQAGABAFAEQAFAFAAAFQAAAGgFAFQgFAFgGAAQgGAAgEgFg");
	this.shape_14.setTransform(1499.6,278.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAGAAAFAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgFAAgFgFg");
	this.shape_15.setTransform(2083.9,168.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgEAGAAQAGAAAFAEQAFAFAAAFQAAAHgFAEQgFAFgGgBQgGABgEgFg");
	this.shape_16.setTransform(2409.9,231.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_17.setTransform(2389.7,392.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAGgFAFQgFAFgGAAQgGAAgEgFg");
	this.shape_18.setTransform(2040.5,354.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_19.setTransform(1759.9,351.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7C64B0").s().p("AgKALQgEgFgBgGQABgGAEgEQAEgFAGAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAFgHAAQgGAAgEgFg");
	this.shape_20.setTransform(1764.8,255);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGABQAGgBAFAFQAFAEAAAGQAAAGgFAFQgFAFgGgBQgGABgEgFg");
	this.shape_21.setTransform(2028,291.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_22.setTransform(2312.5,284.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_23.setTransform(1690.5,235.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgEAFgBQAGABAFAEQAEAEABAGQgBAGgEAFQgFAFgGAAQgFAAgFgFg");
	this.shape_24.setTransform(2347.3,79.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_25.setTransform(1526.6,268.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_26.setTransform(1018.8,459.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_27.setTransform(1262.7,384.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgEAFgBQAHABAEAEQAFAEAAAGQAAAHgFAEQgEAFgHgBQgFABgFgFg");
	this.shape_28.setTransform(1169.2,322);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7C64B0").s().p("AgKALQgFgFABgGQgBgFAFgFQAEgEAGgBQAGABAFAEQAEAFAAAFQAAAGgEAFQgFAFgGAAQgGAAgEgFg");
	this.shape_29.setTransform(1139.3,129.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAGAAAFAFQAFAFAAAFQAAAHgFAEQgFAEgGABQgGgBgEgEg");
	this.shape_30.setTransform(1347.6,91.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAGgFAFQgFAFgGAAQgGAAgEgFg");
	this.shape_31.setTransform(1330.2,184.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAEgHABQgFgBgFgEg");
	this.shape_32.setTransform(1060.2,105);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgFAFAAQAGAAAFAFQAEAEABAGQgBAGgEAFQgFAFgGAAQgFAAgFgFg");
	this.shape_33.setTransform(911.8,174.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgFAFABQAHgBAEAFQAFAEAAAGQAAAGgFAFQgEAEgHAAQgFAAgFgEg");
	this.shape_34.setTransform(652.4,336.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7C64B0").s().p("AgKALQgFgFABgGQgBgGAFgEQAEgFAGAAQAHAAAEAFQAEAEAAAGQAAAGgEAFQgEAFgHAAQgGAAgEgFg");
	this.shape_35.setTransform(326.5,123.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAEgHABQgFgBgFgEg");
	this.shape_36.setTransform(577.2,71.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_37.setTransform(26.6,408.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAEAFABAFQgBAHgEAEQgEAFgHAAQgGAAgEgFg");
	this.shape_38.setTransform(2315.5,280.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgEAGAAQAGAAAFAEQAFAFAAAFQAAAHgFAEQgFAFgGgBQgGABgEgFg");
	this.shape_39.setTransform(2030,168.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_40.setTransform(386.3,390.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_41.setTransform(605.2,381.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAGgFAFQgFAFgGAAQgGAAgEgFg");
	this.shape_42.setTransform(2503.5,319.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgEAFgBQAHABAEAEQAFAFAAAFQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_43.setTransform(2287.5,118.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_44.setTransform(294.7,217.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#7C64B0").s().p("AgKALQgEgEgBgHQABgFAEgFQAEgFAGAAQAHAAAEAFQAFAFgBAFQABAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_45.setTransform(163.6,185);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_46.setTransform(104.7,52);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAGgFAFQgEAEgHABQgFgBgFgEg");
	this.shape_47.setTransform(2064.7,73.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_48.setTransform(1937.4,231.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_49.setTransform(482.7,273.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7C64B0").s().p("AgKALQgFgFABgGQgBgGAFgEQAEgEAGgBQAGABAFAEQAEAEAAAGQAAAGgEAFQgFAFgGAAQgGAAgEgFg");
	this.shape_50.setTransform(2001.1,43.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7C64B0").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgEAGgBQAGABAFAEQAFAEAAAGQAAAGgFAFQgFAFgGAAQgGAAgEgFg");
	this.shape_51.setTransform(2081.1,43.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#7C64B0").s().p("AgKALQgFgEAAgHQAAgGAFgEQAEgEAGgBQAGABAFAEQAFAEAAAGQAAAHgFAEQgFAFgGgBQgGABgEgFg");
	this.shape_52.setTransform(1.6,187);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,2619.2,474.9), null);


(lib.Group_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Group_6_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1305.2,287.6,1,1,0,0,0,1297.8,287.6);
	this.instance_1.alpha = 0.5;

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgKAPQgFgGABgJQgBgHAFgHQAEgGAGAAQAGAAAFAGQAFAHgBAHQABAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_54.setTransform(1845.9,135.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgKAPQgEgGgBgJQABgIAEgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAIgEAHQgFAGgGAAQgGAAgEgGg");
	this.shape_55.setTransform(1461.9,75.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_56.setTransform(831.4,9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgKAPQgEgGgBgJQABgIAEgGQAFgGAFAAQAGAAAFAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgFAAgFgGg");
	this.shape_57.setTransform(271.8,19.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAHAAAEAGQAEAGABAIQgBAJgEAGQgEAGgHAAQgFAAgFgGg");
	this.shape_58.setTransform(222.9,224.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgKAPQgFgGABgJQgBgHAFgHQAEgGAGAAQAGAAAFAGQAEAHAAAHQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_59.setTransform(1911.1,359);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgHAFgHQAFgGAFAAQAHAAAEAGQAFAHAAAHQAAAJgFAGQgEAGgHAAQgGAAgEgGg");
	this.shape_60.setTransform(2230.3,428.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgKAPQgEgGgBgJQABgIAEgGQAEgGAGAAQAGAAAFAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_61.setTransform(802.7,483.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_62.setTransform(520,638.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgGAAgEgGg");
	this.shape_63.setTransform(1084.4,624.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgKAPQgFgHAAgIQAAgHAFgHQAFgGAFAAQAGAAAFAGQAFAHAAAHQAAAJgFAGQgFAGgGAAQgFAAgFgGg");
	this.shape_64.setTransform(2236.9,615);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgHAFgHQAEgGAGAAQAHAAAEAGQAEAHABAHQgBAJgEAGQgEAGgHAAQgGAAgEgGg");
	this.shape_65.setTransform(2515.8,425.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAHAAAEAGQAEAGABAIQgBAJgEAGQgEAGgHAAQgFAAgFgGg");
	this.shape_66.setTransform(1775.9,237.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgKAPQgFgGABgJQgBgIAFgGQAFgGAFAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_67.setTransform(1242.5,540.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgKAPQgFgHABgIQgBgIAFgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAIgEAHQgFAGgGAAQgGAAgEgGg");
	this.shape_68.setTransform(1490.3,375);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQABgIAEgGQAEgGAGAAQAHAAAEAGQAEAGAAAIQAAAJgEAGQgEAGgHAAQgGAAgEgGg");
	this.shape_69.setTransform(2071,226.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_70.setTransform(2395,312);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_71.setTransform(2374.9,529.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgKAPQgEgGgBgJQABgIAEgGQAFgGAFAAQAHAAAEAGQAFAGgBAIQABAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_72.setTransform(2027.9,477.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_73.setTransform(1749.1,473.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgKAPQgEgGgBgJQABgIAEgGQAEgGAGAAQAHAAAEAGQAEAGAAAIQAAAJgEAGQgEAGgHAAQgGAAgEgGg");
	this.shape_74.setTransform(1753.9,343.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_75.setTransform(2015.5,393.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgKAPQgFgHAAgIQABgIAEgGQAEgGAGAAQAHAAAEAGQAEAGAAAIQAAAIgEAHQgEAGgHAAQgGAAgEgGg");
	this.shape_76.setTransform(2298.3,383.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_77.setTransform(1680,317.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgKAPQgEgGgBgJQABgIAEgGQAEgGAGAAQAGAAAFAGQAEAGABAIQgBAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_78.setTransform(2332.8,106.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgKAPQgFgHAAgIQAAgIAFgGQAEgGAGAAQAGAAAFAGQAFAGAAAIQAAAIgFAHQgFAGgGAAQgGAAgEgGg");
	this.shape_79.setTransform(1517.1,362);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_80.setTransform(1012.5,620.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgKAPQgEgGgBgJQABgHAEgHQAEgGAGAAQAGAAAFAGQAEAHAAAHQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_81.setTransform(1254.9,518.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAGAAAFAGQAEAGABAIQgBAJgEAGQgFAGgGAAQgFAAgFgGg");
	this.shape_82.setTransform(1162,434.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAGAAAFAGQAEAGABAIQgBAJgEAGQgFAGgGAAQgFAAgFgGg");
	this.shape_83.setTransform(1132.3,174.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgGAAgEgGg");
	this.shape_84.setTransform(1339.2,123.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgKAPQgFgGABgJQgBgHAFgHQAEgGAGAAQAGAAAFAGQAEAHAAAHQAAAIgEAHQgFAGgGAAQgGAAgEgGg");
	this.shape_85.setTransform(1322,248.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_86.setTransform(1053.7,141.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_87.setTransform(906.1,235.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgKAPQgFgHABgIQgBgIAFgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAIgEAHQgFAGgGAAQgGAAgEgGg");
	this.shape_88.setTransform(648.4,453.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgKAPQgFgGABgJQgBgIAFgGQAFgGAFAAQAGAAAFAGQAFAGgBAIQABAJgFAGQgFAGgGAAQgFAAgFgGg");
	this.shape_89.setTransform(324.5,166.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgKAPQgEgHgBgIQABgHAEgHQAEgGAGAAQAGAAAFAGQAFAHAAAHQAAAIgFAHQgFAGgGAAQgGAAgEgGg");
	this.shape_90.setTransform(573.6,96.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_91.setTransform(26.5,551.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_92.setTransform(2301.2,378);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_93.setTransform(2017.4,227.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAGAAAFAGQAEAGABAIQgBAJgEAGQgFAGgGAAQgFAAgFgGg");
	this.shape_94.setTransform(383.9,526.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_95.setTransform(601.4,514.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_96.setTransform(2488.1,431.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgKAPQgFgHABgIQgBgHAFgHQAEgGAGAAQAGAAAFAGQAFAHgBAHQABAIgFAHQgFAGgGAAQgGAAgEgGg");
	this.shape_97.setTransform(2273.4,159.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgKAPQgFgGABgJQgBgHAFgHQAEgGAGAAQAGAAAFAGQAEAHAAAHQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_98.setTransform(292.9,293.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgKAPQgFgHAAgIQAAgHAFgHQAEgGAGAAQAGAAAFAGQAFAHAAAHQAAAIgFAHQgFAGgGAAQgGAAgEgGg");
	this.shape_99.setTransform(162.5,249.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgHAFgHQAEgGAGAAQAGAAAFAGQAFAHAAAHQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_100.setTransform(104.1,70.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAGAAAFAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_101.setTransform(2051.9,99);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgKAPQgFgGABgJQgBgHAFgHQAEgGAGAAQAGAAAFAGQAEAHAAAHQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_102.setTransform(1925.5,312.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgHAFgHQAFgGAFAAQAGAAAFAGQAEAHABAHQgBAIgEAHQgFAGgGAAQgFAAgFgGg");
	this.shape_103.setTransform(479.8,369.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_104.setTransform(1988.7,58.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAFAGgBAIQABAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_105.setTransform(2068.2,58.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgKAPQgEgHgBgIQABgIAEgGQAFgGAFAAQAHAAAEAGQAFAGgBAIQABAIgFAHQgEAGgHAAQgFAAgFgGg");
	this.shape_106.setTransform(1.6,252.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5_2, new cjs.Rectangle(0,0,2603,640.6), null);


(lib.Group_1_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_4_1();
	this.instance.parent = this;
	this.instance.setTransform(1347.8,287.6,1,1,0,0,0,1287.7,287.6);
	this.instance.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgHAFgHQAFgGAFAAQAHAAAEAGQAFAHAAAHQAAAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape.setTransform(2047.1,135.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAPQgFgHABgIQgBgIAFgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAIgEAHQgFAGgGAAQgGAAgEgGg");
	this.shape_1.setTransform(1663.1,75.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAPQgEgGgBgJQABgIAEgGQAEgGAGAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgGAAgEgGg");
	this.shape_2.setTransform(1032.6,9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAGAAAFAGQAEAGABAIQgBAJgEAGQgFAGgGAAQgFAAgFgGg");
	this.shape_3.setTransform(473,19.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKAPQgEgGgBgJQABgIAEgGQAEgGAGAAQAHAAAEAGQAFAGgBAIQABAJgFAGQgEAGgHAAQgGAAgEgGg");
	this.shape_4.setTransform(424.1,224.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKAPQgEgGgBgJQABgIAEgGQAFgGAFAAQAHAAAEAGQAFAGgBAIQABAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_5.setTransform(1.6,525.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKAPQgFgGABgJQgBgHAFgHQAEgGAGAAQAGAAAFAGQAEAHAAAHQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_6.setTransform(2112.3,359);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgHAFgHQAEgGAGAAQAGAAAFAGQAEAHABAHQgBAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_7.setTransform(2431.5,428.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_8.setTransform(1003.9,483.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKAPQgEgGgBgJQABgIAEgGQAEgGAGAAQAGAAAFAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_9.setTransform(721.2,638.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKAPQgEgGgBgJQABgIAEgGQAFgGAFAAQAGAAAFAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgFAAgFgGg");
	this.shape_10.setTransform(1285.6,624.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKAPQgFgHAAgIQAAgHAFgHQAFgGAFAAQAGAAAFAGQAEAHABAHQgBAIgEAHQgFAGgGAAQgFAAgFgGg");
	this.shape_11.setTransform(2438.2,615);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAGAAAFAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgGAAgEgGg");
	this.shape_12.setTransform(1977.1,237.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAGAAAFAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgGAAgEgGg");
	this.shape_13.setTransform(1443.7,540.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKAPQgEgHgBgIQABgIAEgGQAEgGAGAAQAGAAAFAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_14.setTransform(1691.5,375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQABgIAEgGQAFgGAFAAQAHAAAEAGQAEAGAAAIQAAAJgEAGQgEAGgHAAQgFAAgFgGg");
	this.shape_15.setTransform(2272.3,226.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQABgIAEgGQAFgGAFAAQAHAAAEAGQAEAGAAAIQAAAJgEAGQgEAGgHAAQgFAAgFgGg");
	this.shape_16.setTransform(2596.3,312);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_17.setTransform(2576.1,529.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_18.setTransform(2229.1,477.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_19.setTransform(1950.3,473.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgKAPQgEgGAAgJQAAgIAEgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_20.setTransform(1955.1,343.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAGAAAFAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgFAAgFgGg");
	this.shape_21.setTransform(2216.7,393.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgKAPQgFgHAAgIQAAgIAFgGQAEgGAGAAQAGAAAFAGQAEAGABAIQgBAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_22.setTransform(2499.5,383.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_23.setTransform(1881.3,317.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAFAGgBAIQABAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_24.setTransform(2534,106.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgKAPQgFgHABgIQgBgIAFgGQAEgGAGAAQAGAAAFAGQAEAGABAIQgBAIgEAHQgFAGgGAAQgGAAgEgGg");
	this.shape_25.setTransform(1718.4,362);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAGAAAFAGQAEAGABAIQgBAJgEAGQgFAGgGAAQgFAAgFgGg");
	this.shape_26.setTransform(1213.7,620.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgHAFgHQAFgGAFAAQAHAAAEAGQAFAHAAAHQAAAJgFAGQgEAGgHAAQgGAAgEgGg");
	this.shape_27.setTransform(1456.1,518.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_28.setTransform(1363.2,434.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_29.setTransform(1333.5,174.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgKAPQgEgGAAgJQAAgIAEgGQAFgGAFAAQAHAAAEAGQAFAGgBAIQABAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_30.setTransform(1540.5,123.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgKAPQgFgHAAgIQAAgHAFgHQAFgGAFAAQAGAAAFAGQAFAHAAAHQAAAIgFAHQgFAGgGAAQgFAAgFgGg");
	this.shape_31.setTransform(1523.2,248.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgKAPQgEgGgBgJQABgIAEgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_32.setTransform(1254.9,141.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_33.setTransform(1107.4,235.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgKAPQgFgHAAgIQAAgIAFgGQAEgGAGAAQAGAAAFAGQAFAGAAAIQAAAIgFAHQgFAGgGAAQgGAAgEgGg");
	this.shape_34.setTransform(849.6,453.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgKAPQgEgGAAgJQAAgIAEgGQAFgGAFAAQAHAAAEAGQAFAGgBAIQABAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_35.setTransform(525.7,166.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgKAPQgFgHAAgIQAAgHAFgHQAFgGAFAAQAHAAAEAGQAFAHAAAHQAAAIgFAHQgEAGgHAAQgFAAgFgGg");
	this.shape_36.setTransform(774.8,96.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_37.setTransform(227.7,551.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_38.setTransform(34.1,310.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAGAAAFAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgFAAgFgGg");
	this.shape_39.setTransform(2502.4,378);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgFAAgFgGg");
	this.shape_40.setTransform(2218.7,227.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAHAAAEAGQAEAGABAIQgBAJgEAGQgEAGgHAAQgFAAgFgGg");
	this.shape_41.setTransform(585.2,526.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgKAPQgEgGgBgJQABgIAEgGQAEgGAGAAQAGAAAFAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_42.setTransform(802.7,514.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgKAPQgFgHAAgIQAAgHAFgHQAEgGAGAAQAGAAAFAGQAFAHAAAHQAAAIgFAHQgFAGgGAAQgGAAgEgGg");
	this.shape_43.setTransform(2474.6,159.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgKAPQgEgGgBgJQABgHAEgHQAFgGAFAAQAGAAAFAGQAFAHAAAHQAAAJgFAGQgFAGgGAAQgFAAgFgGg");
	this.shape_44.setTransform(494.1,293.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgKAPQgFgHAAgIQAAgHAFgHQAFgGAFAAQAHAAAEAGQAEAHABAHQgBAIgEAHQgEAGgHAAQgFAAgFgGg");
	this.shape_45.setTransform(363.8,249.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgKAPQgEgGgBgJQABgHAEgHQAEgGAGAAQAHAAAEAGQAFAHgBAHQABAJgFAGQgEAGgHAAQgGAAgEgGg");
	this.shape_46.setTransform(305.3,70.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgHAFgHQAFgGAFAAQAHAAAEAGQAEAHABAHQgBAJgEAGQgEAGgHAAQgFAAgFgGg");
	this.shape_47.setTransform(8.3,93.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgKAPQgEgGAAgJQAAgIAEgGQAFgGAFAAQAHAAAEAGQAFAGgBAIQABAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_48.setTransform(118.5,344.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAFAGgBAIQABAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_49.setTransform(2253.2,99);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgJQAAgHAFgHQAFgGAFAAQAGAAAFAGQAFAHAAAHQAAAJgFAGQgFAGgGAAQgFAAgFgGg");
	this.shape_50.setTransform(2126.7,312.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgKAPQgEgHAAgIQAAgHAEgHQAFgGAFAAQAHAAAEAGQAFAHgBAHQABAIgFAHQgEAGgHAAQgFAAgFgGg");
	this.shape_51.setTransform(681,369.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgKAPQgEgGgBgJQABgIAEgGQAEgGAGAAQAHAAAEAGQAEAGAAAIQAAAJgEAGQgEAGgHAAQgGAAgEgGg");
	this.shape_52.setTransform(2189.9,58.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgKAPQgEgGAAgJQAAgIAEgGQAEgGAGAAQAGAAAFAGQAFAGgBAIQABAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_53.setTransform(2269.5,58.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgKAPQgFgHABgIQgBgIAFgGQAEgGAGAAQAGAAAFAGQAEAGABAIQgBAIgEAHQgFAGgGAAQgGAAgEgGg");
	this.shape_54.setTransform(202.8,252.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgKAPQgEgGgBgJQABgIAEgGQAEgGAGAAQAGAAAFAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_55.setTransform(25.5,192.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_1_1, new cjs.Rectangle(0,0,2635.5,640.6), null);


(lib.Group_1_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1369.3,287.6,1,1,0,0,0,1309.2,287.6);
	this.instance_1.alpha = 0.5;

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_56.setTransform(2047.2,135.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#695360").s().p("AgKAPQgEgGgBgJQABgIAEgGQAEgGAGAAQAGAAAFAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_57.setTransform(1663.2,75.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_58.setTransform(1032.7,9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_59.setTransform(473,19.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_60.setTransform(424.2,224.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_61.setTransform(1.6,525.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_62.setTransform(2112.3,359.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgHAFgHQAFgGAFAAQAHAAAEAGQAFAHgBAHQABAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_63.setTransform(2431.6,428.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAGAAAFAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_64.setTransform(1003.9,483.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#695360").s().p("AgKAPQgFgHABgIQgBgHAFgHQAEgGAGAAQAGAAAFAGQAEAHAAAHQAAAIgEAHQgFAGgGAAQgGAAgEgGg");
	this.shape_65.setTransform(721.3,638.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAFAGgBAIQABAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_66.setTransform(1285.7,624.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#695360").s().p("AgKAPQgEgGAAgJQAAgIAEgGQAEgGAGAAQAGAAAFAGQAFAGgBAIQABAIgFAHQgFAGgGAAQgGAAgEgGg");
	this.shape_67.setTransform(2438.2,615.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_68.setTransform(2717,425.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#695360").s().p("AgKAPQgFgHABgIQgBgIAFgGQAEgGAGAAQAGAAAFAGQAEAGABAIQgBAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_69.setTransform(1977.1,237.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#695360").s().p("AgKAPQgEgHAAgIQAAgHAEgHQAFgGAFAAQAHAAAEAGQAFAHgBAHQABAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_70.setTransform(1443.7,540.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgIAFgGQAFgGAFAAQAHAAAEAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgFAAgFgGg");
	this.shape_71.setTransform(1691.6,375);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAHAAAEAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_72.setTransform(2272.3,226.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgHAFgHQAEgGAGAAQAHAAAEAGQAEAHAAAHQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_73.setTransform(2596.3,312.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAGAAAFAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgGAAgEgGg");
	this.shape_74.setTransform(2576.2,529.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#695360").s().p("AgKAPQgEgGgBgJQABgIAEgGQAEgGAGAAQAHAAAEAGQAEAGAAAIQAAAJgEAGQgEAGgHAAQgGAAgEgGg");
	this.shape_75.setTransform(2229.2,477.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#695360").s().p("AgKAPQgFgHAAgIQAAgIAFgGQAEgGAGAAQAGAAAFAGQAFAGAAAIQAAAIgFAHQgFAGgGAAQgGAAgEgGg");
	this.shape_76.setTransform(1950.3,473.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#695360").s().p("AgKAPQgEgGgBgJQABgIAEgGQAEgGAGAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgGAAgEgGg");
	this.shape_77.setTransform(1955.1,343.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAFAGgBAIQABAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_78.setTransform(2216.7,393.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQABgIAEgGQAFgGAFAAQAHAAAEAGQAEAGAAAIQAAAJgEAGQgEAGgHAAQgFAAgFgGg");
	this.shape_79.setTransform(2499.5,383.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#695360").s().p("AgKAPQgEgGgBgJQABgIAEgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_80.setTransform(1881.3,317.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAGAAAFAGQAEAGABAIQgBAJgEAGQgFAGgGAAQgFAAgFgGg");
	this.shape_81.setTransform(2534,106.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#695360").s().p("AgKAPQgEgGgBgJQABgIAEgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_82.setTransform(1718.4,362);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgIAFgGQAFgGAFAAQAHAAAEAGQAFAGgBAIQABAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_83.setTransform(1213.8,620.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#695360").s().p("AgKAPQgFgHAAgIQAAgHAFgHQAEgGAGAAQAGAAAFAGQAFAHAAAHQAAAIgFAHQgFAGgGAAQgGAAgEgGg");
	this.shape_84.setTransform(1456.2,518.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_85.setTransform(1363.2,434.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAGAAAFAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_86.setTransform(1333.5,174.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#695360").s().p("AgKAPQgFgHAAgIQAAgIAFgGQAFgGAFAAQAHAAAEAGQAEAGABAIQgBAIgEAHQgEAGgHAAQgFAAgFgGg");
	this.shape_87.setTransform(1540.5,123.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAFAGgBAIQABAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_88.setTransform(1523.3,248.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgHAFgHQAEgGAGAAQAGAAAFAGQAEAHAAAHQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_89.setTransform(1255,141.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_90.setTransform(1107.4,235.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgIAFgGQAFgGAFAAQAGAAAFAGQAFAGgBAIQABAJgFAGQgFAGgGAAQgFAAgFgGg");
	this.shape_91.setTransform(849.6,453.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgHAFgHQAFgGAFAAQAHAAAEAGQAFAHAAAHQAAAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_92.setTransform(525.7,166.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_93.setTransform(774.9,96.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAGAAAFAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_94.setTransform(227.7,551.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#695360").s().p("AgKAPQgEgHgBgIQABgIAEgGQAFgGAFAAQAGAAAFAGQAFAGAAAIQAAAIgFAHQgFAGgGAAQgFAAgFgGg");
	this.shape_95.setTransform(34.2,310.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAFAGgBAIQABAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_96.setTransform(2502.5,378);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#695360").s().p("AgKAPQgEgGgBgJQABgIAEgGQAEgGAGAAQAHAAAEAGQAEAGAAAIQAAAJgEAGQgEAGgHAAQgGAAgEgGg");
	this.shape_97.setTransform(2218.7,227.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_98.setTransform(585.2,526.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_99.setTransform(802.7,514.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#695360").s().p("AgKAPQgFgHAAgIQAAgHAFgHQAFgGAFAAQAHAAAEAGQAFAHgBAHQABAIgFAHQgEAGgHAAQgFAAgFgGg");
	this.shape_100.setTransform(2689.3,431.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAFAGgBAIQABAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_101.setTransform(2474.7,159.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAFAGgBAIQABAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_102.setTransform(494.1,293.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#695360").s().p("AgKAPQgEgGgBgJQABgIAEgGQAEgGAGAAQAHAAAEAGQAFAGgBAIQABAJgFAGQgEAGgHAAQgGAAgEgGg");
	this.shape_103.setTransform(363.8,249.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_104.setTransform(305.4,70.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#695360").s().p("AgKAPQgEgGgBgJQABgIAEgGQAFgGAFAAQAHAAAEAGQAFAGgBAIQABAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_105.setTransform(8.3,93.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgHAFgHQAFgGAFAAQAHAAAEAGQAEAHABAHQgBAIgEAHQgEAGgHAAQgFAAgFgGg");
	this.shape_106.setTransform(118.5,344.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAGAAAFAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_107.setTransform(2253.2,99);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAFAGgBAIQABAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_108.setTransform(2126.7,312.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAHAAAEAGQAEAGABAIQgBAJgEAGQgEAGgHAAQgFAAgFgGg");
	this.shape_109.setTransform(681,369.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAGAAAFAGQAEAGABAIQgBAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_110.setTransform(2190,58.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_111.setTransform(2269.5,58.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#695360").s().p("AgKAPQgEgGgBgJQABgIAEgGQAEgGAGAAQAGAAAFAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_112.setTransform(202.8,252.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgHAFgHQAEgGAGAAQAGAAAFAGQAEAHAAAHQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_113.setTransform(25.6,192.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_0_1, new cjs.Rectangle(0,0,2718.6,640.6), null);


(lib.Group_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Group_2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1305.2,287.6,1,1,0,0,0,1297.8,287.6);
	this.instance_1.alpha = 0.5;

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAFAGgBAIQABAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_53.setTransform(1845.9,135.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_54.setTransform(1461.9,75.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#695360").s().p("AgKAPQgEgGgBgJQABgIAEgGQAEgGAGAAQAHAAAEAGQAFAGgBAIQABAJgFAGQgEAGgHAAQgGAAgEgGg");
	this.shape_55.setTransform(831.4,9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#695360").s().p("AgKAPQgEgGgBgJQABgIAEgGQAFgGAFAAQAGAAAFAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgFAAgFgGg");
	this.shape_56.setTransform(271.8,19.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAHAAAEAGQAEAGABAIQgBAJgEAGQgEAGgHAAQgFAAgFgGg");
	this.shape_57.setTransform(222.9,224.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_58.setTransform(1911.1,359.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgHAFgHQAEgGAGAAQAGAAAFAGQAFAHAAAHQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_59.setTransform(2230.3,428.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#695360").s().p("AgKAPQgEgGgBgJQABgIAEgGQAEgGAGAAQAGAAAFAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_60.setTransform(802.7,483.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#695360").s().p("AgKAPQgFgHAAgIQAAgHAFgHQAEgGAGAAQAGAAAFAGQAFAHAAAHQAAAIgFAHQgFAGgGAAQgGAAgEgGg");
	this.shape_61.setTransform(520,638.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_62.setTransform(1084.4,624.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#695360").s().p("AgKAPQgFgHAAgIQAAgIAFgGQAFgGAFAAQAGAAAFAGQAFAGAAAIQAAAIgFAHQgFAGgGAAQgFAAgFgGg");
	this.shape_63.setTransform(2236.9,615.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAHAAAEAGQAEAGABAIQgBAJgEAGQgEAGgHAAQgGAAgEgGg");
	this.shape_64.setTransform(2515.8,425.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#695360").s().p("AgKAPQgFgHAAgIQAAgIAFgGQAFgGAFAAQAHAAAEAGQAEAGABAIQgBAIgEAHQgEAGgHAAQgFAAgFgGg");
	this.shape_65.setTransform(1775.9,237.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#695360").s().p("AgKAPQgFgHABgIQgBgHAFgHQAFgGAFAAQAGAAAFAGQAEAHAAAHQAAAIgEAHQgFAGgGAAQgGAAgEgGg");
	this.shape_66.setTransform(1242.5,540.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_67.setTransform(1490.3,375);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQABgIAEgGQAEgGAGAAQAHAAAEAGQAEAGAAAIQAAAJgEAGQgEAGgHAAQgGAAgEgGg");
	this.shape_68.setTransform(2071,226.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgHAFgHQAEgGAGAAQAGAAAFAGQAFAHAAAHQAAAJgFAGQgEAGgHAAQgGAAgEgGg");
	this.shape_69.setTransform(2395,312.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_70.setTransform(2374.9,529.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#695360").s().p("AgKAPQgEgGgBgJQABgIAEgGQAFgGAFAAQAHAAAEAGQAFAGgBAIQABAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_71.setTransform(2027.9,477.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#695360").s().p("AgKAPQgFgHABgIQgBgIAFgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAIgEAHQgFAGgGAAQgGAAgEgGg");
	this.shape_72.setTransform(1749.1,473.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#695360").s().p("AgKAPQgEgGgBgJQABgIAEgGQAEgGAGAAQAHAAAEAGQAEAGAAAIQAAAJgEAGQgEAGgHAAQgGAAgEgGg");
	this.shape_73.setTransform(1753.9,343.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_74.setTransform(2015.5,393.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQABgIAEgGQAEgGAGAAQAHAAAEAGQAEAGAAAIQAAAJgEAGQgEAGgHAAQgGAAgEgGg");
	this.shape_75.setTransform(2298.3,383.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAGAAAFAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgGAAgEgGg");
	this.shape_76.setTransform(1680,317.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#695360").s().p("AgKAPQgEgGgBgJQABgIAEgGQAEgGAGAAQAGAAAFAGQAEAGABAIQgBAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_77.setTransform(2332.8,106.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_78.setTransform(1517.1,362);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAGAAAFAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgGAAgEgGg");
	this.shape_79.setTransform(1012.5,620.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#695360").s().p("AgKAPQgEgHgBgIQABgHAEgHQAEgGAGAAQAGAAAFAGQAEAHAAAHQAAAIgEAHQgFAGgGAAQgGAAgEgGg");
	this.shape_80.setTransform(1254.9,518.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAGAAAFAGQAEAGABAIQgBAJgEAGQgFAGgGAAQgFAAgFgGg");
	this.shape_81.setTransform(1162,434.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAGAAAFAGQAEAGABAIQgBAJgEAGQgFAGgGAAQgFAAgFgGg");
	this.shape_82.setTransform(1132.3,174.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#695360").s().p("AgKAPQgFgHAAgIQAAgIAFgGQAFgGAFAAQAHAAAEAGQAFAGAAAIQAAAIgFAHQgEAGgHAAQgFAAgFgGg");
	this.shape_83.setTransform(1339.2,123.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_84.setTransform(1322,248.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgHAFgHQAEgGAGAAQAGAAAFAGQAFAHAAAHQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_85.setTransform(1053.7,141.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_86.setTransform(906.1,235.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_87.setTransform(648.4,453.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgHAFgHQAFgGAFAAQAGAAAFAGQAFAHgBAHQABAJgFAGQgFAGgGAAQgFAAgFgGg");
	this.shape_88.setTransform(324.5,166.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#695360").s().p("AgKAPQgEgGgBgJQABgIAEgGQAEgGAGAAQAGAAAFAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_89.setTransform(573.6,96.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_90.setTransform(26.5,551.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_91.setTransform(2301.2,378);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAGAAAFAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgGAAgEgGg");
	this.shape_92.setTransform(2017.4,227.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAGAAAFAGQAEAGABAIQgBAJgEAGQgFAGgGAAQgFAAgFgGg");
	this.shape_93.setTransform(383.9,526.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAGAAAFAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgGAAgEgGg");
	this.shape_94.setTransform(601.4,514.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#695360").s().p("AgKAPQgFgHABgIQgBgHAFgHQAEgGAGAAQAGAAAFAGQAEAHAAAHQAAAIgEAHQgFAGgGAAQgGAAgEgGg");
	this.shape_95.setTransform(2488.1,431.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAFAGgBAIQABAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_96.setTransform(2273.4,159.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_97.setTransform(292.9,293.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAGAAAFAGQAEAGABAIQgBAJgEAGQgFAGgGAAQgFAAgFgGg");
	this.shape_98.setTransform(162.5,249.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#695360").s().p("AgKAPQgEgGAAgJQAAgIAEgGQAFgGAFAAQAHAAAEAGQAFAGgBAIQABAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_99.setTransform(104.1,70.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_100.setTransform(2051.9,99);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_101.setTransform(1925.4,312.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_102.setTransform(479.7,369.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#695360").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAEgGAGAAQAGAAAFAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgGAAgEgGg");
	this.shape_103.setTransform(1988.7,58.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#695360").s().p("AgKAPQgFgGABgJQgBgIAFgGQAEgGAGAAQAGAAAFAGQAFAGgBAIQABAJgFAGQgFAGgGAAQgGAAgEgGg");
	this.shape_104.setTransform(2068.2,58.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#695360").s().p("AgKAPQgEgGgBgJQABgIAEgGQAFgGAFAAQAHAAAEAGQAFAGgBAIQABAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_105.setTransform(1.6,252.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0_1, new cjs.Rectangle(0,0,2603,640.6), null);


(lib.Group_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_7();
	this.instance.parent = this;
	this.instance.setTransform(193.3,49.9,1,1,0,0,0,44.7,44.7);
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3_1, new cjs.Rectangle(148.6,5.2,89.4,89.4), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7TY0Ig3gpIBzirIBghAIBTAJIBlhvIBBAAIglhuIB6k9IAngcIAOidICBoWIAqgWIgPlLIicCPIhhhXIhbg4Igqj9IhzgbIhcirIg4glIAlgcIgbg3IAugWIBBiPIA3g3Iglg9IhqmeIAyAAICUBTIF0glIDrgJIAzhFIDKAuICLAzIBlgFIApA4ID4BXIBXAAIBcA7IAABYIBFBaQBcBtBxBbQFsEmHBAOICeCSIDCDVIigDPIiRBnIgbBTIENJtIAHA3IA4AWIEGGkIifAOIjIlnIimh1Imsp1ICmQMIhvEiIjkgHQgRgdgKgfQgVg7AjgFQAigEA+g2IA3g0IlRwMIhagiIhaA+IifgxICfN0Ig3AAIBEE3InGCJIAAhLICPh1IAci0Qgcj5AAgiIAAj4IjimYIifiRIhSBMIg3iYIgjBTIiaASIguAcIAWBFImiOrIgvAuIAAAgIhECBIAACvIl/BFg");
	mask.setTransform(180.3,179.5);

	// Layer 3
	this.instance = new lib.Path_0();
	this.instance.parent = this;
	this.instance.setTransform(165.5,69.7,1,1,0,0,0,124.2,69.7);
	this.instance.alpha = 0.199;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(41.3,20.7,248.5,118.7), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjMElIgejdIGpmsIAsBfIgrGhIhJCIIiVBBg");
	mask.setTransform(33.1,38.7);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D2F36").s().p("ABuBMIgKAXIg7g8IAJBHIh4iIIAOBdIhvhdIgIggIA8hWIBrguIBVAsIACAGIAbAHQA0CkgBADQgBADAKBNIAKBMg");
	this.shape.setTransform(45.2,22.8);

	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(31.2,35.1,1,1,0,0,0,31.2,35.1);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(42.3,50.7,1,1,0,0,0,7.5,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6A184").s().p("Ag3ARIAEgPIBJg1IAiA/Ig7Aog");
	this.shape_1.setTransform(43,49.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FED6A4").s().p("AgjEbIiiiLIgpikIFbkaIBvArQAVB/gCAIQgYBkgYCUQACAagGAkIiVBzIgLACQgXAAgngUg");
	this.shape_2.setTransform(31,39.2);

	var maskedShapeInstanceList = [this.shape,this.instance,this.instance_1,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(9.7,3.1,47,67.3), null);


(lib.Level3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_3_1();
	this.instance.parent = this;
	this.instance.setTransform(-353.5,144.9,0.88,0.88,0,0,0,119,108.8);
	this.instance.alpha = 0.699;

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#534154","#1E1C29"],[0.012,1],0,490.5,0,-490.4).s().p("EgGIBMoQAGhTAm/SIininIAAnbICuEEUAAigb6AAxgrbMgLUggSIBvhFIJyWIMAAkggIIEeAAIgDE2IDIk2IDhAAImsPMMgAXA4+IHAi/IE+rzICCAAIkgKvIC+hRIAyAhQAwAmAAAaQAAAWlkDvQjiCXk8DKIgEHvIOtpDIAAB+IutKhIgKYHIFsr0IAAEYIlvPFMgANAgXg");
	this.shape.setTransform(-623,148.7,0.349,0.337);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#534154","#1E1C29"],[0.012,1],0,490.5,0,-490.4).s().p("EgGIBMoQAGhTAm/SIininIAAnbICuEEUAAigb6AAxgrbMgLUggSIBvhFIJyWIMAAkggIIEeAAIgDE2IDIk2IDhAAImsPMMgAXA4+IHAi/IE+rzICCAAIkgKvIC+hRIAyAhQAwAmAAAaQAAAWlkDvQjiCXk8DKIgEHvIOtpDIAAB+IutKhIgKYHIFsr0IAAEYIlvPFMgANAgXg");
	this.shape_1.setTransform(-411.9,148.7,0.349,0.337);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#534154","#1E1C29"],[0.012,1],123.4,444.5,-12.7,-471).s().p("EAHcA8SUgBMgJfgFegpiInNiyICAj5IEwDKMgHOg3DIsi1tIDCAAIImOsIh8usIEoAAMAGlAuKMAI4gjuIBjgPImFdKIMg0BIBICNIw8f8MAMfBXmImVA8QgOi9hAnyg");
	this.shape_2.setTransform(44.2,161.6,0.356,0.356);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#534154","#514053","#4A3B4D","#3E3344","#2E2736","#1E1C29"],[0.012,0.518,0.698,0.827,0.933,1],73.2,0,-73.1,0).s().p("EAFVBGPMgQwiMeIFEAAMARyCMeg");
	this.shape_3.setTransform(273.5,159.8,0.356,0.356);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#534154","#514053","#4A3B4D","#3E3344","#2E2736","#1E1C29"],[0.012,0.518,0.698,0.827,0.933,1],-71.3,0,71.4,0).s().p("EgLJBD6MARNiHzIFGAAMgQNCHzg");
	this.shape_4.setTransform(158.5,154.5,0.356,0.356);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Level3, new cjs.Rectangle(-657.3,-16.6,956.9,339.8), null);


(lib.Level2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1C29").s().p("AnrHJIgyjqIEIi+IA6AtQA8AtAJgEQAPgGB5h/IBbAvIA0jKID6gcIAAkDICjHpIkNgUIiQDSIjVAjIiDDHg");
	this.shape.setTransform(635.4,-7.3,1.004,1.004);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E1C29").s().p("AAWCkIi/hHIAriOIDVimIAVhIIA+A+IAAIBg");
	this.shape_1.setTransform(370.3,-74.8,1.004,1.004);

	this.instance = new lib.ClipGroup_5();
	this.instance.parent = this;
	this.instance.setTransform(452.7,47.3,1.004,1.004,0,0,0,180.2,169.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C9C944").s().p("AhUAcIAXhFIAxgKIBgASIgkAWIgTAnIhGAYg");
	this.shape_2.setTransform(355.2,-29.8,1.004,1.004);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C9C944").s().p("AgdAcIgTgnIgkgWIBggSIAyAKIAXBFIgsAYg");
	this.shape_3.setTransform(321.9,-29.8,1.004,1.004);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E1C29").s().p("A53Y6Ig3gqIBzirIBhhBIBTAKIBmhvIBAAAIglhvIB7k/IAngbIAOidICBoYIAqgXIgOlMIidCPIhhhXIhcg4Igqj+IhzgcIhdirIg3glIAlgbIgcg4IAugXIBBiPIA3g3Iglg9IhqmfIAzAAICUBTIF2glIDsgJIAyhGIDMAvICKAzIBlgFIAqA3ID4BYIBYAAIBdA8IAABYIBFBbQBcBsByBcQFtEnHCAOICfCSIDCDXIifDPIiSBnIgcBTIEPJwIAGA3IA4AVIBDJQQiQBugUhpQA+i0hNk7IiXiPImup3ICnQPIhvEjIjlgHQgRgdgLgeQgVg9AjgEQAjgFA+g1QAfgbAZgaIlUwPIhagjIhaA+IifgwICfN3Ig3AAIBFE3InICLIAAhMICPh2IAdi0IgPiBQgPiFABgWIAAj5IjjmZIifiSIhTBNIg3iZIgjBTIibATIguAbIAXBGImkOuIgvAuIAAAgIhFCCIAACvIl/BGg");
	this.shape_4.setTransform(443.1,58);

	this.instance_1 = new lib.Path_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(467.2,203,1.004,1.004,0,0,0,184.1,11.2);
	this.instance_1.alpha = 0.301;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4B272E").s().p("AhKCPIBPjVIAyhIIAUAYIgmAyIhPDTg");
	this.shape_5.setTransform(35.2,108.9,1.004,1.004);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#673B3B").s().p("AAeCnIgwjrIgbgjIgMg/IBEBiIAvDrg");
	this.shape_6.setTransform(66.4,106.4,1.004,1.004);

	this.instance_2 = new lib.ClipGroup_4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(56.9,147.4,1.004,1.004,0,0,0,33,24.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4B272E").s().p("AjqC2QgZgUgNgWIgHgTIAoiyIAAheIgbgvIAAgvIHiAAIAbAPIANAkIgNArIgMBJIAxC4QgRBah0AiQglALgqADIgiACQi5gDhTg9g");
	this.shape_7.setTransform(51.8,147.9,1.004,1.004);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#D95658","#534154"],[0,0.988],-35.5,0,35.6,0).s().p("ACTDiIjWAWIi7jVIhkliIE3E+IGCCYIgbB4IAnAyg");
	this.shape_8.setTransform(48,41.6,1.004,1.004);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#D95658","#CA5457","#A54E56","#874955","#704655","#5F4355","#564255","#534154"],[0,0.047,0.176,0.314,0.459,0.612,0.776,0.988],-41.7,0,41.7,0).s().p("AAqEqIh+AaQiAAZgDgBQgFgCjEiKIBZjsIgolUIDcGsIEKgTIEhBjIAJByIi8Bzg");
	this.shape_9.setTransform(51.8,55.7,1.004,1.004);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#D95658","#D65658","#A74E56","#824955","#684555","#584255","#534154"],[0,0.012,0.243,0.467,0.671,0.851,0.988],-3.2,0,4.1,0).s().p("AgMgiIAxAwIhJAVg");
	this.shape_10.setTransform(86.1,126.2,1.004,1.004);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#534154","#584255","#684555","#824955","#A74E56","#D65658","#D95658"],[0.012,0.149,0.329,0.533,0.757,0.988,1],-1.6,0,92.6,0).s().p("AC3COIi8AeInRisIB7j7ID0CfID2gKID/BkIBJgVIAABQIibDDg");
	this.shape_11.setTransform(42.5,130,1.004,1.004);

	this.instance_3 = new lib.ClipGroup_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(50.8,92,1.004,1.004,0,0,0,14.5,11.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FED6A4").s().p("AhxAWIAlhZIBSgWIAwgCIAsBDIAQBRIgyAbIh2AIg");
	this.shape_12.setTransform(50.3,90.3,1.004,1.004);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#534154","#D95658"],[0.012,1],-0.1,1.1,-4.7,-2).s().p("AgegXIA8AZIg3AWg");
	this.shape_13.setTransform(96.3,78.2,1.004,1.004);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#534154","#8E4B56","#D95658"],[0.012,0.463,1],36.5,23.1,-33.2,-24.3).s().p("ABSE1IjuAAIlljoIBRiCIAAh9ICMjcIAcB1IBkC2IDZAOIDXBFID2hfIAABfIg5BPIhxFQg");
	this.shape_14.setTransform(47.8,89.6,1.004,1.004);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#534154","#D95658"],[0.012,1],0,4.7,0,-4.7).s().p("AgYAbIAPgLIAFg+IAdBdg");
	this.shape_15.setTransform(86.2,33.8,1.004,1.004);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#534154","#D95658"],[0.012,1],0,31.4,0,-31.3).s().p("Ah7CeIjOk4IgrgwIgPhvIEuDQIHZDAIhaBmIgNB8g");
	this.shape_16.setTransform(49.8,29.9,1.004,1.004);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#534154","#554255","#5E4355","#6D4555","#824955","#9D4D56","#BE5257","#D95658"],[0.012,0.259,0.427,0.569,0.694,0.816,0.925,1],0,20.6,0,-20.6).s().p("AB7DAIkplPIBag+IAiA8IAMAzIDVEsg");
	this.shape_17.setTransform(31.2,-16.7,1.004,1.004);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#534154","#D95658"],[0.012,1],0,16.8,0,-16.7).s().p("Ai5iBIBJgmIEpFPg");
	this.shape_18.setTransform(25,-14.3,1.004,1.004);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#463248","#534154","#5B4355","#714655","#964C56","#C85457","#D95658"],[0,0.373,0.459,0.588,0.753,0.941,1],0,35.1,0,-35).s().p("Al3gKIg7lUIFzEqIGCBrIBwAZIhOB0IgGBPIhpBMg");
	this.shape_19.setTransform(50,7.8,1.004,1.004);

	this.instance_4 = new lib.ClipGroup_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(58,-6.7,1.004,1.004,0,0,0,38,28.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7B4442").s().p("AgfDTQgEgBiTi3QiUi3ADgHQADgJgShFQASAOFOB7QCoA+ClA6IhBBTIAdAfIgLBaIiQAWg");
	this.shape_20.setTransform(60.5,-7,1.004,1.004);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4D353B").s().p("AALBaQg+hCABgIQABgMgYieIB9CPIgQA/IAmBnQgggfgfgig");
	this.shape_21.setTransform(52.7,-24.3,1.004,1.004);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5D2F36").s().p("AA5A2IgJAXIg6g8IAIBHIhOhYIBpinIABAFIAcAHQAzCkgBADQAAADAJBNIAKBMgAh6gwIAqAwIgdAtgAhQAAg");
	this.shape_22.setTransform(85.8,-64.1,1.004,1.004);

	this.instance_5 = new lib.ClipGroup();
	this.instance_5.parent = this;
	this.instance_5.setTransform(66.8,-52,1.004,1.004,0,0,0,31.2,37.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5A433E").s().p("AgYD2IgqgMIBMl3Igrg4IA5g6IAsBeIgrGiQgHgBgqgKg");
	this.shape_23.setTransform(85.2,-60.3,1.004,1.004);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#725B67").s().p("AgeiHIAjAJIAaD8IgoAKg");
	this.shape_24.setTransform(40.5,-31.1,1.004,1.004);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BDB094").s().p("AkGDhIFzm6QCPgTALADInpHTg");
	this.shape_25.setTransform(63.8,-67.4,1.004,1.004);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#81635A").s().p("AjMElIgejdIGpmsIAsBfIgrGhIhJCIIiVBBg");
	this.shape_26.setTransform(68.4,-50.3,1.004,1.004);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2DDB7").s().p("Aj0FNIgZj9IHmnUIA1CiIgzGYIhPCjIiYAsg");
	this.shape_27.setTransform(68.2,-51.9,1.004,1.004);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#89806F").s().p("ACAjaIA6gCIlzG5g");
	this.shape_28.setTransform(56.1,-67,1.004,1.004);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#AFA38D").s().p("AiYjVICQhRIChI5IgUAUg");
	this.shape_29.setTransform(16.7,-53.9,1.004,1.004);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#89806F").s().p("AhBkIICoAeIjNHzg");
	this.shape_30.setTransform(47.7,-71.4,1.004,1.004);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BDB094").s().p("ABgjrIA9AfIk5G4g");
	this.shape_31.setTransform(53.2,-68.4,1.004,1.004);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BDB094").s().p("AgTFNIken9IGLjgICpAeIAvAcIitLng");
	this.shape_32.setTransform(32,-57.7,1.004,1.004);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5D2F36").s().p("AiJgnIBegUQCpBzAMAEg");
	this.shape_33.setTransform(81.1,-11.4,1.004,1.004);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BDB094").s().p("AgwBTIhfnpIEfFJIgIHkg");
	this.shape_34.setTransform(26.8,15.9,1.004,1.004);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#938874").s().p("Aj1DzIAInkIHjAaIiqHKg");
	this.shape_35.setTransform(65.1,32.4,1.004,1.004);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#D95658","#BE5257","#9D4D56","#824955","#6D4555","#5E4355","#554255","#534154"],[0,0.075,0.184,0.306,0.431,0.573,0.741,0.988],-38.5,0,38.6,0).s().p("AhhDdIkglIIFJiLIFoCRIBSFcg");
	this.shape_36.setTransform(51,-14.1,1.004,1.004);

	this.instance_6 = new lib.Path_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-9.6,61.2,0.12,1.004,0,0,0,177.4,88.2);
	this.instance_6.alpha = 0.398;

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#534154","#D95658"],[0.012,1],0,88.2,0,-88.2).s().p("At/LMI4cjEIFPk8ICYiuMA1BgOPIEwBzIF1hAIELB/IBfKeIjhhGQlSDplhDwQrDHghNAcQgKAEgkAAQjuAA1bimg");
	this.shape_37.setTransform(-5.7,61.1,0.12,1.004);

	this.instance_7 = new lib.Path_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(15.3,-12.8,0.12,1.004,0,0,0,33,14.5);
	this.instance_7.alpha = 0.398;

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#534154","#D95658"],[0.012,1],0,6.4,0,-6.3).s().p("AgYAzIAOgnIgShKIA5B9g");
	this.shape_38.setTransform(90.8,9.5,1.004,1.004);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#534154","#D95658"],[0.012,1],-7.3,0,7.4,0).s().p("AhIAVIAbgvIB2A1g");
	this.shape_39.setTransform(85.4,67,1.004,1.004);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#D95658","#534154"],[0,0.988],-5.2,0,5.2,0).s().p("AgzgHIA7gZIAsBBg");
	this.shape_40.setTransform(77.2,53.4,1.004,1.004);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#D95658","#B55057","#8A4A56","#6C4555","#594255","#534154"],[0,0.188,0.439,0.663,0.855,0.988],-45.5,0,45.5,0).s().p("AnGD9IEZmtIIFjGIBvLtg");
	this.shape_41.setTransform(-9.9,38.4,0.64,1.499);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#1F0125","#534154"],[0,0.988],-1.2,49.9,11.7,-45).s().p("Ak6HKICMjrIgmniIEUjGIg6KuIE2B+IgOBng");
	this.shape_42.setTransform(56.3,168.6,1.004,1.004);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FED6A4").s().p("AksJNIB9jdIgttzIgkhKIE+ArIhDOZIEyCBIgMBVg");
	this.shape_43.setTransform(56.9,154.1,1.004,1.004);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#1F0125","#210427","#290E2E","#351D3A","#47344A","#534154"],[0,0.298,0.522,0.718,0.902,0.988],-1.5,48.7,11.2,-44.8).s().p("AkvG/IB9jdIgrniIEajGIg7KqIEuCDIgGBgg");
	this.shape_44.setTransform(67.5,168.4,1.004,1.004);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FED6A4").s().p("AksJNIB9jdIgttzIgkhKIE+ArIhDOZIEyCBIgMBVg");
	this.shape_45.setTransform(67.2,154.1,1.004,1.004);

	this.instance_8 = new lib.Path_26();
	this.instance_8.parent = this;
	this.instance_8.setTransform(70.9,208.8,1.004,1.004,0,0,0,110.4,6.6);
	this.instance_8.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.instance_7},{t:this.shape_37},{t:this.instance_6},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.instance_5},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance_4},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance_3},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance_2},{t:this.shape_6},{t:this.shape_5},{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Level2, new cjs.Rectangle(-39.9,-122.5,729.8,339.9), null);


(lib.Group_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Group_5_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1398.4,237.5,1,1,0,0,0,1309.5,237.5);
	this.instance_1.alpha = 0.801;

	this.instance_2 = new lib.Group_1_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1355.7,237.5,1,1,0,0,0,1355.7,237.5);
	this.instance_2.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3_2, new cjs.Rectangle(0,0,2711.3,475), null);


(lib.Group_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Group_5_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1328.8,320.2,1,1,0,0,0,1301.5,320.2);
	this.instance_3.alpha = 0.801;

	this.instance_4 = new lib.Group_1_1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1317.7,320.2,1,1,0,0,0,1317.7,320.2);
	this.instance_4.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3_3, new cjs.Rectangle(0,0,2635.5,640.6), null);


(lib.Group_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Group_0_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1328.8,320.2,1,1,0,0,0,1301.5,320.2);
	this.instance_1.alpha = 0.801;

	this.instance_2 = new lib.Group_1_0_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1359.3,320.2,1,1,0,0,0,1359.3,320.2);
	this.instance_2.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_3, new cjs.Rectangle(0,0,2718.6,640.6), null);


(lib.Snow_Still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_3_3();
	this.instance.parent = this;
	this.instance.setTransform(1367.8,722.6,1,1,0,0,0,1317.7,320.2);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.Group_1_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1359.3,320.2,1,1,0,0,0,1359.3,320.2);
	this.instance_1.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Snow_Still, new cjs.Rectangle(0,0,2718.6,1043), null);


(lib.Level8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.instance = new lib.SnowBig_Still();
	this.instance.parent = this;
	this.instance.setTransform(1270.1,-2384,1,1,0,0,0,897.8,390.3);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.BlurFilter(26, 26, 2)];
	this.instance.cache(-108,-216,2013,4068);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AhjBkIAAjHIDHAAIAADHg");
	this.shape.setTransform(-10,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.instance}]},21).to({state:[{t:this.instance}]},56).to({state:[{t:this.instance}]},83).to({state:[{t:this.instance}]},36).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({y:-1853.4,alpha:0.051},0).to({y:-438.4,alpha:1},56).to({y:850.3},83).to({y:1507.3,alpha:0},36).wait(1));

	// Layer 1 copy 2
	this.instance_1 = new lib.Snow_Still();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1359.3,404.5,1,1,0,0,0,1359.3,521.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;
	this.instance_1.cache(-2,-2,2723,1047);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(127).to({_off:false},0).to({y:436.5,alpha:1},4).to({y:500.5,alpha:0.602},8).to({y:572.5,alpha:1},9).to({y:628.5,alpha:0.699},7).to({y:676.5,alpha:0.352},6).to({y:716.5,alpha:0},8).to({_off:true},1).wait(27));

	// Layer 1 copy 3
	this.instance_2 = new lib.Snow_Still();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1359.3,404.5,1,1,0,0,0,1359.3,521.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;
	this.instance_2.cache(-2,-2,2723,1047);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85).to({_off:false},0).to({y:436.5,alpha:1},4).to({y:500.5,alpha:0.602},8).to({y:572.5,alpha:1},9).to({y:628.5,alpha:0.699},7).to({y:676.5,alpha:1},6).to({y:716.5,alpha:0},8).to({_off:true},1).wait(69));

	// Layer 1 copy
	this.instance_3 = new lib.Snow_Still();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1359.3,404.5,1,1,0,0,0,1359.3,521.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;
	this.instance_3.cache(-2,-2,2723,1047);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({_off:false},0).to({y:436.5,alpha:1},4).to({y:500.5,alpha:0.602},8).to({y:572.5,alpha:1},9).to({y:628.5,alpha:0.699},7).to({y:676.5,alpha:1},6).to({y:716.5,alpha:0},8).to({_off:true},1).wait(120));

	// Layer 1
	this.instance_4 = new lib.Snow_Still();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1359.3,404.5,1,1,0,0,0,1359.3,521.5);
	this.instance_4.alpha = 0;
	this.instance_4.cache(-2,-2,2723,1047);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:436.5,alpha:0.051},4).to({y:500.5,alpha:0},8).to({y:572.5,alpha:1},9).to({y:628.5,alpha:0.699},7).to({y:676.5,alpha:1},6).to({y:716.5,alpha:0},8).to({_off:true},1).wait(154));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-3044.6,2766.6,4182);


(lib.Level0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_3_2();
	this.instance.parent = this;
	this.instance.setTransform(481,208.1,0.353,0.353,0,0,0,1355.6,237.4);
	this.instance.alpha = 0.398;

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#534154","#1E1C29"],[0.012,1],4,228,-4.9,-282.7).s().p("EjUlAXXMAAAgusMGpLAAAMAAAAusg");
	this.shape.setTransform(480,347.3,0.499,0.353);

	this.instance_1 = new lib.Group_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(474.5,74.7,0.353,0.353,0,0,0,1309.6,237.6);
	this.instance_1.alpha = 0.801;

	this.instance_2 = new lib.Group_1_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(480.4,74.7,0.353,0.353,0,0,0,1353.8,237.6);
	this.instance_2.alpha = 0.801;

	this.instance_3 = new lib.Path();
	this.instance_3.parent = this;
	this.instance_3.setTransform(480.1,209.4,0.499,0.353,0,0,0,1360.7,296.7);
	this.instance_3.alpha = 0.398;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#534154","#1E1C29"],[0.012,1],-5.5,-270.3,4.7,317.8).s().p("EjUlAt9MAAAhb5MA/AA6wIe08wIOgNhMAm4gkQIW6QzIZj0QMAvhAsVIDmjWIRZQNIKBpWIRwQkMAltgjJIdGbIIQKvDIbfZoIW10hMAAAApog");
	this.shape_1.setTransform(480,210.2,0.499,0.353);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#534154","#49525B"],[0,1],0,566.9,0,-566.9).s().p("EjUlBYlMAAEixJMGpHAAAMAAACxJg");
	this.shape_2.setTransform(480,200,0.489,0.353);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Level0, new cjs.Rectangle(-199,-9.1,1358.1,409.2), null);


// stage content:
(lib.RedRidingHood = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// Setup Parallax Perspective
		AC.Parallax.setup(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Snow
	this.instance = new lib.Level8();
	this.instance.parent = this;
	this.instance.setTransform(538.6,-626.3,0.641,0.641,0,0,0,1359.3,-956.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Overlay
	this.instance_1 = new lib.Level6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(475.3,200,1,1,0,0,0,488,200);
	this.instance_1.cache(-315,-2,1606,404);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// parallax5
	this.parallax5 = new lib.Level3Blurry();
	this.parallax5.parent = this;
	this.parallax5.setTransform(413.1,208,1.464,1.464,0,0,0,-73.3,153.2);
	this.parallax5.filters = [new cjs.BlurFilter(25, 25, 1)];
	this.parallax5.cache(-448,-19,750,344);

	this.timeline.addTween(cjs.Tween.get(this.parallax5).wait(1));

	// parallax10
	this.parallax10 = new lib.Level5();
	this.parallax10.parent = this;
	this.parallax10.setTransform(490.9,207.9,1,1,0,0,0,523.6,208.6);
	this.parallax10.cache(-153,-12,1353,442);

	this.timeline.addTween(cjs.Tween.get(this.parallax10).wait(1));

	// parallax20
	this.parallax20 = new lib.Level3();
	this.parallax20.parent = this;
	this.parallax20.setTransform(448.4,156.2,0.977,1.017,0,0,0,-178.8,153.2);
	this.parallax20.cache(-659,-19,961,344);

	this.timeline.addTween(cjs.Tween.get(this.parallax20).wait(1));

	// parallax10
	this.parallax15 = new lib.Level2();
	this.parallax15.parent = this;
	this.parallax15.setTransform(450.6,282.2,0.536,0.536,0,0,0,325.5,47.5);
	this.parallax15.cache(-42,-124,734,344);

	this.timeline.addTween(cjs.Tween.get(this.parallax15).wait(1));

	// parallax30
	this.parallax30 = new lib.Level1();
	this.parallax30.parent = this;
	this.parallax30.setTransform(383,230.1,1,1,0,0,0,465.9,85);
	this.parallax30.cache(-181,-2,1294,174);

	this.timeline.addTween(cjs.Tween.get(this.parallax30).wait(1));

	// parallax40
	this.parallax50 = new lib.Level0();
	this.parallax50.parent = this;
	this.parallax50.setTransform(412.1,200,1,1,0,0,0,480.1,200);
	this.parallax50.cache(-201,-11,1362,413);

	this.timeline.addTween(cjs.Tween.get(this.parallax50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(104.6,-1756.7,1755.2,2664);
// library properties:
lib.properties = {
	width: 900,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};





})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;