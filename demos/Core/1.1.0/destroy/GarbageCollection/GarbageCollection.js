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


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399FF").s().p("EgyxABkIAAjHMBljAAAIAADHg");
	this.shape.setTransform(-325,0,1,1,0,0,0,-325,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-325,-10,650,20);


(lib.MC_2_Content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9E4F1").s().p("AgUBeQAFAAADgDQADgDAAgFIAAikQAAgFgDgDQgDgEgFAAIApAAIAAC7g");
	this.shape.setTransform(352.2,499.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414042").s().p("AgaAbQgLgLAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgLALQgLALgQAAQgOAAgMgLg");
	this.shape_1.setTransform(412.9,542);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6D6E71").s().p("AgsAtQgTgTAAgaQAAgZATgTQATgTAZAAQAaAAATATQASATAAAZQAAAagSATQgTASgaAAQgZAAgTgSg");
	this.shape_2.setTransform(412.9,542);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3B3A3B").s().p("AgpBPQAfgCAVgWQAVgXAAggQAAgegVgXQgVgXgfgCIAFAAQAhAAAWAXQAXAXAAAgQAAAhgXAXQgWAXghAAg");
	this.shape_3.setTransform(331.5,541.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3B3A3B").s().p("AgpBPQAfgCAVgWQAVgXAAggQAAgegVgXQgVgXgfgCIAFAAQAhAAAWAXQAXAXAAAgQAAAhgXAXQgWAXghAAg");
	this.shape_4.setTransform(416.6,541.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#414042").s().p("Ag3A4QgXgXAAghQAAggAXgXQAXgXAgAAQAhAAAXAXQAXAXAAAgQAAAhgXAXQgXAXghAAQggAAgXgXg");
	this.shape_5.setTransform(412.9,541.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#414042").s().p("AgaAbQgLgLAAgQQAAgPALgLQALgLAPAAQAQAAALALQALALAAAPQAAAQgLALQgLALgQAAQgOAAgMgLg");
	this.shape_6.setTransform(327.8,542);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6D6E71").s().p("AgsAtQgTgTAAgaQAAgZATgTQATgTAZAAQAaAAATATQASATAAAZQAAAagSATQgTASgaAAQgZAAgTgSg");
	this.shape_7.setTransform(327.8,542);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#414042").s().p("Ag3A4QgXgXgBghQABggAXgXQAXgXAgAAQAhAAAXAXQAXAXAAAgQAAAhgXAXQgXAXghAAQggAAgXgXg");
	this.shape_8.setTransform(327.8,541.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F3BA47").s().p("AgtAZIAAgxIBCAAQAKAAAIAIQAHAHAAAJQAAAKgHAIQgIAHgKAAg");
	this.shape_9.setTransform(316.5,524.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#394F59").s().p("AgjAKQgDAAgEgDQgDgDAAgEQAAgDADgDQAEgDADAAIBHAAQAEAAADADQACADAAADQAAAEgCADQgDADgEAAg");
	this.shape_10.setTransform(349.7,512.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DAF1FC").s().p("AiRBeIBui7IC1AAIAAC7g");
	this.shape_11.setTransform(339.6,499.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#30444D").s().p("AgRAcIAAg3IAjAAIAAA3g");
	this.shape_12.setTransform(425.9,515.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#30444D").s().p("AgRAbIAAg2IAjAAIAAA2g");
	this.shape_13.setTransform(425.9,522.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#30444D").s().p("AgRAcIAAg3IAjAAIAAA3g");
	this.shape_14.setTransform(425.9,529.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CDD5D9").s().p("AgRAKIAAgTIAjAAIAAATg");
	this.shape_15.setTransform(425.9,535.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#394F59").s().p("AkLAcIAAg3IIXAAIAAA3g");
	this.shape_16.setTransform(400.9,515.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#394F59").s().p("AjaAbIAAg2IG1AAIAAA2g");
	this.shape_17.setTransform(405.8,522.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#394F59").s().p("AiTAcIAAg3IEmAAIAAA3g");
	this.shape_18.setTransform(413,529.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E1E9ED").s().p("ApCAKIAAgTISFAAIAAATg");
	this.shape_19.setTransform(369.8,535.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4D6673").s().p("AggEZQASAAAHgRIAEgTIAAnvQABgIgCgIQgFgOgQgBIAjAAQAQAAAFAPQADAIgBAIIAAHvIgEATQgIARgUAAg");
	this.shape_20.setTransform(424.4,513.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#587482").s().p("AorEZQgHAAgHgHQgJgKAAgTIAAjRQAAgLAJgNIAJgKIAxgmICTjjQADgEAFgFQAKgIANgBIN5AAQAQAAAFAPQADAIgBAIIAAHvIgEATQgIARgUAAg");
	this.shape_21.setTransform(369.8,513.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C4D740").s().p("Eg9FAB7QgzAAgkgkQglgkABgzQgBgyAlgkQAkgkAzAAMB6MAAAQAyAAAkAkQAkAkAAAyQAAAzgkAkQgkAkgyAAg");
	this.shape_22.setTransform(425,528);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#416328").s().p("AgRAkIgMAIIgLgJIgSAKIA6hmIA7BmIgWgOIgIAPIgTgMIgJAYg");
	this.shape_23.setTransform(531.7,452.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#31501C").s().p("Ag1AfIAwhSIA7Bng");
	this.shape_24.setTransform(532.3,454.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#416328").s().p("AgXAxIgQAKIgOgMIgZANIBOiIIBPCIIgegSIgKAUIgZgQIgMAfg");
	this.shape_25.setTransform(531.7,457.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#31501C").s().p("AhHAiIA9hpIBSCPg");
	this.shape_26.setTransform(532.8,460.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#416328").s().p("AghBEIgXAPIgUgQIgiARIBui/IBvC/IgqgZIgOAcIgkgWIgRArg");
	this.shape_27.setTransform(531.7,464.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#31501C").s().p("AhpAjIBUiRIB/Ddg");
	this.shape_28.setTransform(533.9,469.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#416328").s().p("AgyBmIgiAWIgegZIgzAbIClkfICmEfIg/glIgUAoIg3ggIgZBAg");
	this.shape_29.setTransform(531.7,474.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#31501C").s().p("AiPA7IB2jNICpElg");
	this.shape_30.setTransform(534.2,481.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#416328").s().p("AhDCHIgsAdIgoggIhEAjIDbl8IDcF8IhUgyIgaA3IhIgsIgiBWg");
	this.shape_31.setTransform(531.7,488.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#664224").s().p("AgTBjQAZgBAAgHIAAi+IAOAAIAAC+QAAAEgKACQgJADgNgBg");
	this.shape_32.setTransform(533,507.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#744C2B").s().p("AgWBhQgKgCAAgEIAAi+IBBAAIAAC+QAAAEgKACQgJADgOgBQgNABgJgDg");
	this.shape_33.setTransform(531.7,507.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#416328").s().p("AgQAhIgKAGIgJgHIgRAIIA0hbIA1BbIgUgMIgGANIgSgKIgIAVg");
	this.shape_34.setTransform(471.1,459.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#31501C").s().p("AgvAcIAqhKIA1Bdg");
	this.shape_35.setTransform(471.7,461.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#416328").s().p("AgVArIgOAJIgNgKIgWAMIBGh6IBHB6IgbgQIgIASIgYgPIgLAcg");
	this.shape_36.setTransform(471.1,463.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#31501C").s().p("Ag/AeIA2heIBJCBg");
	this.shape_37.setTransform(472.1,466.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#416328").s().p("AgdA9IgVANIgSgOIgeAPIBiirIBjCrIglgWIgNAZIgggUIgPAng");
	this.shape_38.setTransform(471.1,469.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#31501C").s().p("AheAfIBLiBIByDFg");
	this.shape_39.setTransform(473.1,474.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#416328").s().p("AgtBcIgeATIgagWIgvAYICUkBICVEBIg5giIgSAlIgwgdIgXA6g");
	this.shape_40.setTransform(471.1,478.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#31501C").s().p("AiAA1IBqi4ICXEHg");
	this.shape_41.setTransform(473.4,485.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#416328").s().p("Ag8B6IgnAZIgkgdIg9AgIDElVIDGFVIhLgtIgYAxIhBgnIgfBNg");
	this.shape_42.setTransform(471.1,491.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#664224").s().p("AgRBZQAXgBAAgGIAAiqIAMAAIAACqQAAADgJACQgJACgLAAg");
	this.shape_43.setTransform(472.3,508.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#744C2B").s().p("AgUBXQgJgCAAgDIAAiqIA7AAIAACqQAAADgJACQgJACgMAAQgLAAgJgCg");
	this.shape_44.setTransform(471.1,508.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#365620").s().p("AgKAVIgHAFIgGgFIgLAGIAig8IAjA8IgNgIIgEAIIgMgHIgFAOg");
	this.shape_45.setTransform(726,479.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2B4918").s().p("AgfASIAcgwIAjA9g");
	this.shape_46.setTransform(726.3,480.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#365620").s().p("AgOAdIgJAGIgIgHIgPAIIAuhQIAvBQIgSgLIgGAMIgPgKIgHATg");
	this.shape_47.setTransform(726,482.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2B4918").s().p("AgqAUIAkg+IAxBVg");
	this.shape_48.setTransform(726.6,484);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#365620").s().p("AgTAoIgNAJIgMgKIgVALIBBhxIBCBxIgZgPIgIAQIgVgNIgLAag");
	this.shape_49.setTransform(726,486.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2B4918").s().p("Ag+AVIAyhWIBLCDg");
	this.shape_50.setTransform(727.3,489.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#365620").s().p("AgeA9IgTAMIgSgOIgeAQIBhiqIBjCqIgmgWIgMAYIgggUIgPAng");
	this.shape_51.setTransform(726,492.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2B4918").s().p("AhUAjIBGh5IBkCtg");
	this.shape_52.setTransform(727.5,496.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#365620").s().p("AgnBQIgbARIgXgTIgpAVICCjhICCDhIgxgeIgQAhIgrgaIgTAzg");
	this.shape_53.setTransform(726,500.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#664224").s().p("AgMA7QAOgBAAgEIAAhwIALAAIAABwQAAAFgTAAg");
	this.shape_54.setTransform(726.7,512);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#744C2B").s().p("AgTA2IAAhwIAnAAIAABwQAAAFgUAAQgTAAAAgFg");
	this.shape_55.setTransform(726,512);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#416328").s().p("AgPAhIgLAGIgJgHIgRAIIA0hbIA1BbIgUgMIgGANIgSgKIgIAVg");
	this.shape_56.setTransform(383.6,459.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#31501C").s().p("AgvAcIAqhKIA1Bdg");
	this.shape_57.setTransform(384.2,461.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#416328").s().p("AgVArIgOAJIgNgKIgWAMIBGh6IBHB6IgbgQIgIASIgYgPIgKAcg");
	this.shape_58.setTransform(383.6,463.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#31501C").s().p("Ag/AeIA2heIBJCBg");
	this.shape_59.setTransform(384.6,466.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#416328").s().p("AgeA9IgUANIgSgOIgeAPIBiirIBkCrIgmgWIgNAZIgggUIgPAng");
	this.shape_60.setTransform(383.6,469.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#31501C").s().p("AheAfIBLiBIByDFg");
	this.shape_61.setTransform(385.6,474.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#416328").s().p("AgtBcIgeATIgbgWIguAYICUkBICVEBIg4giIgTAlIgwgdIgXA6g");
	this.shape_62.setTransform(383.6,478.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#31501C").s().p("AiAA1IBqi4ICXEHg");
	this.shape_63.setTransform(385.9,485.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#416328").s().p("Ag8B6IgnAZIgkgdIg9AgIDElVIDGFVIhMgtIgXAxIhBgnIgfBNg");
	this.shape_64.setTransform(383.6,491.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#664224").s().p("AgRBZQAWgBABgGIAAiqIAMAAIAACqQAAADgJACQgJACgLAAg");
	this.shape_65.setTransform(384.8,508.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#744C2B").s().p("AgUBXQgJgCAAgDIAAiqIA7AAIAACqQAAADgJACQgJACgMAAQgLAAgJgCg");
	this.shape_66.setTransform(383.6,508.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#B6B8BA").s().p("AgHASQAHgBAAgKIAAgNQAAgLgHAAIAPAAIAAAjg");
	this.shape_67.setTransform(737.5,449.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C7C8CA").s().p("AiIASIAAgjIERAAIAAAjg");
	this.shape_68.setTransform(724.6,449.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#B1B3B6").s().p("AgSAKIAAgjIAlAAIAAAzg");
	this.shape_69.setTransform(724.6,452.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#C7C8CA").s().p("AgSFQIAAqfIAlAAIAAKfg");
	this.shape_70.setTransform(724.6,483.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#ABADB0").s().p("AgFARQAHgCAAgIIAAgNQAAgIgHgBIACgBQADAAADADQADADAAAEIAAANQAAAEgDADQgDADgDAAg");
	this.shape_71.setTransform(736.6,447.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#ABADB0").s().p("AgFARQAHgCAAgIIAAgNQAAgIgHgBIACgBQAJAAAAAKIAAANQAAAKgJAAg");
	this.shape_72.setTransform(733.1,447.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#BCBEC0").s().p("AgJAHIAAgNQAAgKAJAAQAEAAADADQACADAAAEIAAANQAAAEgCADQgDADgEAAQgJAAAAgKg");
	this.shape_73.setTransform(736.3,447.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#BCBEC0").s().p("AgFAOQgDgDAAgEIAAgNQAAgEADgDQACgDADAAQAKAAAAAKIAAANQAAAKgKAAQgDAAgCgDg");
	this.shape_74.setTransform(732.7,447.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#ABADB0").s().p("AgFARQAHgCAAgIIAAgNQAAgIgHgBIACgBQADAAADADQADADAAAEIAAANQAAAEgDADQgDADgDAAg");
	this.shape_75.setTransform(716.9,447.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#ABADB0").s().p("AgFARQAHgCAAgIIAAgNQAAgIgHgBIACgBQAIAAAAAKIAAANQAAAKgIAAg");
	this.shape_76.setTransform(713.4,447.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#BCBEC0").s().p("AgGAOQgDgDAAgEIAAgNQAAgEADgDQADgDADAAQAJAAAAAKIAAANQAAAKgJAAQgDAAgDgDg");
	this.shape_77.setTransform(713,447.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#BCBEC0").s().p("AgIAHIAAgNQgBgKAJAAQAEAAACADQAEADAAAEIAAANQAAAEgEADQgCADgEAAQgJAAABgKg");
	this.shape_78.setTransform(716.5,447.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B6B8BA").s().p("AgHASQAHgBAAgKIAAgNQAAgLgHAAIAPAAIAAAjg");
	this.shape_79.setTransform(564.6,449.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#C7C8CA").s().p("AiIASIAAgjIERAAIAAAjg");
	this.shape_80.setTransform(551.8,449.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#B1B3B6").s().p("AgSAKIAAgjIAlAAIAAAzg");
	this.shape_81.setTransform(551.8,452.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#C7C8CA").s().p("AgSFQIAAqfIAlAAIAAKfg");
	this.shape_82.setTransform(551.8,483.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#ABADB0").s().p("AgFARQAHgCAAgIIAAgNQAAgIgHgBIACgBQADAAADADQADADAAAEIAAANQAAAEgDADQgDADgDAAg");
	this.shape_83.setTransform(563.8,447.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#ABADB0").s().p("AgFARQAHgCAAgIIAAgNQAAgIgHgBIACgBQAJAAAAAKIAAANQAAAKgJAAg");
	this.shape_84.setTransform(560.2,447.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#BCBEC0").s().p("AgJAHIAAgNQAAgKAJAAQAEAAACADQADADABAEIAAANQgBAEgDADQgCADgEAAQgJAAAAgKg");
	this.shape_85.setTransform(563.4,447.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#BCBEC0").s().p("AgGAOQgDgDAAgEIAAgNQAAgEADgDQADgDADAAQAJAAAAAKIAAANQAAAKgJAAQgDAAgDgDg");
	this.shape_86.setTransform(559.9,447.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#ABADB0").s().p("AgFARQAHgCAAgIIAAgNQAAgIgHgBIACgBQADAAADADQADADAAAEIAAANQAAAEgDADQgDADgDAAg");
	this.shape_87.setTransform(544,447.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#ABADB0").s().p("AgFARQAHgCAAgIIAAgNQAAgIgHgBIACgBQAJAAAAAKIAAANQAAAKgJAAg");
	this.shape_88.setTransform(540.5,447.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#BCBEC0").s().p("AgFAOQgDgDAAgEIAAgNQAAgEADgDQACgDADAAQAKAAAAAKIAAANQAAAKgKAAQgDAAgCgDg");
	this.shape_89.setTransform(540.1,447.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#BCBEC0").s().p("AgIAHIAAgNQgBgKAJAAQAEAAADADQACADAAAEIAAANQAAAEgCADQgDADgEAAQgJAAABgKg");
	this.shape_90.setTransform(543.7,447.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#B6B8BA").s().p("AgHASQAHgBAAgKIAAgNQAAgLgHAAIAPAAIAAAjg");
	this.shape_91.setTransform(391.8,449.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#C7C8CA").s().p("AiIASIAAgjIERAAIAAAjg");
	this.shape_92.setTransform(378.9,449.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#B1B3B6").s().p("AgSAKIAAgjIAlAAIAAAzg");
	this.shape_93.setTransform(378.9,452.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#C7C8CA").s().p("AgSFQIAAqfIAlAAIAAKfg");
	this.shape_94.setTransform(378.9,483.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#ABADB0").s().p("AgFARQAHgCAAgIIAAgNQAAgIgHgBIACgBQADAAADADQADADAAAEIAAANQAAAEgDADQgDADgDAAg");
	this.shape_95.setTransform(390.9,447.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#ABADB0").s().p("AgFARQAHgCAAgIIAAgNQAAgIgHgBIACgBQAJAAAAAKIAAANQAAAKgJAAg");
	this.shape_96.setTransform(387.4,447.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#BCBEC0").s().p("AgIAHIAAgNQAAgKAIAAQAEAAADADQACADAAAEIAAANQAAAEgCADQgDADgEAAQgIAAAAgKg");
	this.shape_97.setTransform(390.6,447.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#BCBEC0").s().p("AgFAOQgDgDgBgEIAAgNQABgEADgDQACgDADAAQAKAAAAAKIAAANQAAAKgKAAQgDAAgCgDg");
	this.shape_98.setTransform(387,447.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#ABADB0").s().p("AgFARQAHgCAAgIIAAgNQAAgIgHgBIACgBQADAAADADQADADAAAEIAAANQAAAEgDADQgDADgDAAg");
	this.shape_99.setTransform(371.2,447.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#ABADB0").s().p("AgFARQAHgCAAgIIAAgNQAAgIgHgBIACgBQAJAAAAAKIAAANQAAAKgJAAg");
	this.shape_100.setTransform(367.6,447.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#BCBEC0").s().p("AgGAOQgDgDAAgEIAAgNQAAgEADgDQADgDADAAQAJAAAAAKIAAANQAAAKgJAAQgDAAgDgDg");
	this.shape_101.setTransform(367.3,447.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#BCBEC0").s().p("AgJAHIAAgNQAAgKAJAAQAEAAACADQADADABAEIAAANQgBAEgDADQgCADgEAAQgJAAAAgKg");
	this.shape_102.setTransform(370.8,447.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#B6B8BA").s().p("AgGASQAHgBAAgKIAAgNQAAgLgIAAIAPAAIAAAjg");
	this.shape_103.setTransform(218.9,449.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#C7C8CA").s().p("AiIASIAAgjIERAAIAAAjg");
	this.shape_104.setTransform(206,449.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#B1B3B6").s().p("AgSAKIAAgjIAlAAIAAAzg");
	this.shape_105.setTransform(206,452.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#C7C8CA").s().p("AgSFQIAAqfIAlAAIAAKfg");
	this.shape_106.setTransform(206,483.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#ABADB0").s().p("AgFARQAHgCAAgIIAAgNQAAgIgHgBIACgBQADAAADADQADADAAAEIAAANQAAAEgDADQgDADgDAAg");
	this.shape_107.setTransform(218.1,447.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#ABADB0").s().p("AgFARQAHgCAAgIIAAgNQAAgIgHgBIACgBQADAAADADQADADAAAEIAAANQAAAEgDADQgDADgDAAg");
	this.shape_108.setTransform(214.5,447.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#BCBEC0").s().p("AgGAOQgDgDAAgEIAAgNQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAANQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_109.setTransform(217.7,447.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#BCBEC0").s().p("AgIAHIAAgNQAAgKAIAAQAEAAADADQACADAAAEIAAANQAAAEgCADQgDADgEAAQgIAAAAgKg");
	this.shape_110.setTransform(214.2,447.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#ABADB0").s().p("AgFARQAHgCAAgIIAAgNQAAgIgHgBIACgBQADAAADADQADADAAAEIAAANQAAAEgDADQgDADgDAAg");
	this.shape_111.setTransform(198.3,447.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#ABADB0").s().p("AgFARQAHgCAAgIIAAgNQAAgIgHgBIACgBQADAAADADQADADAAAEIAAANQAAAEgDADQgDADgDAAg");
	this.shape_112.setTransform(194.8,447.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#BCBEC0").s().p("AgJAHIAAgNQAAgKAJAAQAEAAACADQADADABAEIAAANQgBAEgDADQgCADgEAAQgJAAAAgKg");
	this.shape_113.setTransform(194.4,447.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#BCBEC0").s().p("AgGAOQgDgDAAgEIAAgNQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAANQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_114.setTransform(197.9,447.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#B6B8BA").s().p("AgHASQAHgBAAgKIAAgNQAAgLgHAAIAPAAIAAAjg");
	this.shape_115.setTransform(80.2,449.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#C7C8CA").s().p("AiIASIAAgjIERAAIAAAjg");
	this.shape_116.setTransform(67.4,449.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#B1B3B6").s().p("AgSAKIAAgjIAlAAIAAAzg");
	this.shape_117.setTransform(67.4,452.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#C7C8CA").s().p("AgSFQIAAqfIAlAAIAAKfg");
	this.shape_118.setTransform(67.4,483.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#ABADB0").s().p("AgFARQAHgCAAgIIAAgNQAAgIgHgBIACgBQAJAAAAAKIAAANQAAAKgJAAg");
	this.shape_119.setTransform(79.4,447.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#ABADB0").s().p("AgFARQAHgCAAgIIAAgNQAAgIgHgBIACgBQADAAADADQADADAAAEIAAANQAAAEgDADQgDADgDAAg");
	this.shape_120.setTransform(75.9,447.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#BCBEC0").s().p("AgFAOQgEgDAAgEIAAgNQAAgEAEgDQACgDADAAQAJAAAAAKIAAANQAAAKgJAAQgDAAgCgDg");
	this.shape_121.setTransform(79,447.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#BCBEC0").s().p("AgGAOQgDgDAAgEIAAgNQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAANQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_122.setTransform(75.5,447.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#ABADB0").s().p("AgFARQAHgCAAgIIAAgNQAAgIgHgBIACgBQAJAAAAAKIAAANQAAAKgJAAg");
	this.shape_123.setTransform(59.6,447.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#ABADB0").s().p("AgFARQAHgCAAgIIAAgNQAAgIgHgBIACgBQADAAADADQADADAAAEIAAANQAAAEgDADQgDADgDAAg");
	this.shape_124.setTransform(56.1,447.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#BCBEC0").s().p("AgGAOQgDgDAAgEIAAgNQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAANQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_125.setTransform(55.7,447.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#BCBEC0").s().p("AgGAOQgCgDAAgEIAAgNQAAgEACgDQADgDADAAQAKAAAAAKIAAANQAAAKgKAAQgDAAgDgDg");
	this.shape_126.setTransform(59.3,447.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#808284").s().p("AorAFQh1gYhzgeIhggZIADgKIBfAaQB0AeB0AYQFzBPD0AAQD1AAE2hPQCagnBtgpIADAKQhtApibAmQk3BQj2AAQj1AAl0hQg");
	this.shape_127.setTransform(648.6,455.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#808284").s().p("AorAFQh0gYh0geIhggZIAEgKIBeAaQB0AeB0AYQFzBPD0AAQD1AAE1hPQCbgnBtgpIAEAKQhtApidAmQk2BQj2AAQj1AAl0hQg");
	this.shape_128.setTransform(629.1,455.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#808284").s().p("AorAFQh1gYhzgeIhggZIADgKIBfAaQB0AeB0AYQFzBPD0AAQD1AAE2hPQCagnBtgpIADAKQhtApibAmQk3BQj2AAQj1AAl0hQg");
	this.shape_129.setTransform(475.4,455.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#808284").s().p("AorAFQh1gYhzgeIhggZIAEgKIBeAaQB0AeB0AYQFzBPD0AAQD1AAE1hPQCbgnBtgpIAEAKQhtApidAmQk2BQj2AAQj1AAl0hQg");
	this.shape_130.setTransform(455.9,455.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#808284").s().p("AorAFQh1gYhzgeIhggZIADgKIBfAaQB0AeB0AYQFzBPD0AAQD1AAE2hPQCagnBtgpIADAKQhtApibAmQk3BQj2AAQj1AAl0hQg");
	this.shape_131.setTransform(302.1,455.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#808284").s().p("AorAFQh1gYhzgeIhggZIAEgKIBeAaQB0AeB0AYQFzBPD0AAQD1AAE1hPQCbgnBtgpIAEAKQhtApidAmQk2BQj2AAQj0AAl1hQg");
	this.shape_132.setTransform(282.6,455.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#808284").s().p("AmrAFIkcgzIACgJIEbAzQE9AyC5AAQC6AADxgyQB5gZBVgaIADAJQhWAbh5AYQjyAzi7AAQi5AAk+gzg");
	this.shape_133.setTransform(146.7,453);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#808284").s().p("AmrAFIkcgzIACgJIEbAzQE9AyC6AAQC6AADwgyQB5gZBWgaIACAJQhVAbh6AYQjxAzi7AAQi6AAk+gzg");
	this.shape_134.setTransform(126.8,453);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#416328").s().p("AgNAcIgJAFIgIgGIgOAHIAshNIAtBNIgRgKIgGALIgPgJIgGASg");
	this.shape_135.setTransform(795.3,469.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#31501C").s().p("AgoAXIAkg+IAtBOg");
	this.shape_136.setTransform(795.7,471);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#416328").s().p("AgRAlIgNAIIgLgJIgSAJIA7hnIA8BnIgXgNIgHAPIgUgMIgJAXg");
	this.shape_137.setTransform(795.3,472.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#31501C").s().p("Ag2AaIAvhQIA+Btg");
	this.shape_138.setTransform(796.1,475.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#416328").s().p("AgZA0IgRALIgPgNIgaAOIBTiRIBUCRIgggTIgKAVIgbgRIgNAhg");
	this.shape_139.setTransform(795.2,478);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#31501C").s().p("AhQAbIBAhuIBhCng");
	this.shape_140.setTransform(796.9,481.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#416328").s().p("AgmBNIgaARIgWgTIgnAUIB9jZIB+DZIgwgcIgPAfIgqgZIgTAyg");
	this.shape_141.setTransform(795.3,485.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#31501C").s().p("AhsAtIBaibICADdg");
	this.shape_142.setTransform(797.2,491.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#416328").s().p("AgyBmIgjAWIgdgYIg0AbICmkgICnEgIhAgmIgUApIg2ghIgaBCg");
	this.shape_143.setTransform(795.3,496.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#664224").s().p("AgOBLQAUgBAAgEIAAiQIAJAAIAACQQAAACgHABQgIACgJAAg");
	this.shape_144.setTransform(796.3,511.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#744C2B").s().p("AgRBJQgHgBAAgCIAAiQIAxAAIAACQQAAACgHABQgHACgLAAQgJAAgIgCg");
	this.shape_145.setTransform(795.2,511.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#365620").s().p("AgQAhIgKAGIgJgHIgRAIIA0hbIA1BbIgUgMIgGANIgSgKIgIAVg");
	this.shape_146.setTransform(766.9,463.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#2B4918").s().p("AgvAbIArhIIA0Bbg");
	this.shape_147.setTransform(767.4,465.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#365620").s().p("AgVAsIgOAJIgNgKIgWAKIBGh5IBHB5IgbgQIgJASIgXgOIgLAcg");
	this.shape_148.setTransform(766.9,467.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#2B4918").s().p("AhAAeIA3heIBJCBg");
	this.shape_149.setTransform(767.9,470.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#365620").s().p("AgdA9IgVANIgSgOIgfAPIBjirIBjCrIglgWIgMAZIghgUIgPAng");
	this.shape_150.setTransform(766.9,473.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#2B4918").s().p("AheAgIBLiDIByDGg");
	this.shape_151.setTransform(768.8,478.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#365620").s().p("AgtBcIgeATIgagWIgvAYICUkBICVEBIg5giIgSAlIgwgdIgXA6g");
	this.shape_152.setTransform(766.9,482.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#2B4918").s().p("AiAA1IBqi3ICXEGg");
	this.shape_153.setTransform(769.1,489.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#365620").s().p("Ag8B5IgnAaIgkgcIg+AeIDFlUIDFFUIhKgsIgYAxIhBgoIgfBOg");
	this.shape_154.setTransform(766.9,495.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#664224").s().p("AgRBZQAWgCAAgFIAAiqIANAAIAACqQAAADgJACQgIACgMAAg");
	this.shape_155.setTransform(768,512.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#744C2B").s().p("AgUBXQgJgCAAgDIAAiqIA7AAIAACqQAAADgJACQgJACgMAAQgLAAgJgCg");
	this.shape_156.setTransform(766.9,512.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#416328").s().p("AgNAcIgJAFIgIgGIgOAHIAshNIAtBNIgRgKIgFALIgQgJIgHASg");
	this.shape_157.setTransform(99.3,469.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#31501C").s().p("AgoAXIAlg+IAsBOg");
	this.shape_158.setTransform(99.7,471);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#416328").s().p("AgSAlIgMAIIgKgJIgTAJIA7hnIA8BnIgXgNIgHAPIgUgMIgJAXg");
	this.shape_159.setTransform(99.3,472.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#31501C").s().p("Ag2AaIAvhQIA+Btg");
	this.shape_160.setTransform(100.1,475.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#416328").s().p("AgZA0IgRALIgPgNIgaAOIBTiRIBUCRIgggTIgKAVIgbgRIgNAhg");
	this.shape_161.setTransform(99.2,478);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#31501C").s().p("AhPAbIBAhuIBgCng");
	this.shape_162.setTransform(100.9,481.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#416328").s().p("AgmBNIgaARIgWgTIgnAUIB9jZIB+DZIgwgcIgQAfIgogZIgUAyg");
	this.shape_163.setTransform(99.3,485.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#31501C").s().p("AhtAtIBbibICADdg");
	this.shape_164.setTransform(101.2,491.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#416328").s().p("AgyBmIgiAWIgfgYIgzAbICmkgICnEgIg/gmIgVApIg3ghIgZBCg");
	this.shape_165.setTransform(99.3,496.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#664224").s().p("AgOBLQAUgBAAgEIAAiQIAJAAIAACQQAAACgHABQgIACgJAAg");
	this.shape_166.setTransform(100.3,511.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#744C2B").s().p("AgRBJQgHgBAAgCIAAiQIAxAAIAACQQAAACgHABQgHACgLAAQgJAAgIgCg");
	this.shape_167.setTransform(99.2,511.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#416328").s().p("AgPAhIgLAGIgKgHIgQAIIA0hbIA1BbIgUgMIgHANIgRgKIgIAVg");
	this.shape_168.setTransform(47.5,461.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#31501C").s().p("AgvAcIAqhJIA1Bbg");
	this.shape_169.setTransform(48.1,463.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#416328").s().p("AgVAsIgOAJIgNgKIgWALIBGh6IBHB6IgbgQIgJARIgXgOIgLAcg");
	this.shape_170.setTransform(47.5,465.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#31501C").s().p("AhAAeIA3heIBKCBg");
	this.shape_171.setTransform(48.5,468.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#416328").s().p("AgeA9IgUANIgSgOIgeAPIBiirIBjCrIglgWIgMAZIghgUIgPAng");
	this.shape_172.setTransform(47.5,471.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#31501C").s().p("AheAgIBLiDIByDGg");
	this.shape_173.setTransform(49.5,476.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#416328").s().p("AgtBcIgeATIgbgWIguAYICUkBICVEBIg5giIgSAlIgwgdIgXA6g");
	this.shape_174.setTransform(47.5,480.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#31501C").s().p("AiBA1IBri3ICXEGg");
	this.shape_175.setTransform(49.8,487.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#416328").s().p("Ag8B6IgoAZIgjgcIg9AeIDElUIDFFUIhLgsIgYAxIhAgoIgeBOg");
	this.shape_176.setTransform(47.5,493.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#664224").s().p("AgRBZQAXgCAAgFIAAiqIAMAAIAACqQAAADgJACQgJACgLAAg");
	this.shape_177.setTransform(48.7,510.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#744C2B").s().p("AgUBXQgJgCAAgDIAAiqIA7AAIAACqQAAADgJACQgJACgMAAQgLAAgJgCg");
	this.shape_178.setTransform(47.5,510.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#365620").s().p("AgPAhIgLAGIgJgHIgRAIIA0hbIA1BbIgUgMIgGANIgSgKIgIAVg");
	this.shape_179.setTransform(70.9,463.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#2B4918").s().p("AgvAbIAqhIIA1Bbg");
	this.shape_180.setTransform(71.4,465.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#365620").s().p("AgVAsIgOAJIgNgKIgWAKIBGh5IBHB5IgbgQIgIASIgYgOIgKAcg");
	this.shape_181.setTransform(70.9,467.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#2B4918").s().p("Ag/AeIA2heIBJCBg");
	this.shape_182.setTransform(71.9,470.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#365620").s().p("AgeA9IgUANIgSgOIgeAPIBiirIBkCrIgmgWIgNAZIgggUIgPAng");
	this.shape_183.setTransform(70.9,473.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#2B4918").s().p("AheAgIBLiDIByDGg");
	this.shape_184.setTransform(72.8,478.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#365620").s().p("AgtBcIgeATIgbgWIguAYICUkBICVEBIg5giIgSAlIgwgdIgXA6g");
	this.shape_185.setTransform(70.9,482.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#2B4918").s().p("AiAA1IBqi3ICXEGg");
	this.shape_186.setTransform(73.1,489.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#365620").s().p("Ag8B5IgnAaIgkgcIg9AeIDElUIDGFUIhMgsIgXAxIhBgoIgfBOg");
	this.shape_187.setTransform(70.9,495.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#664224").s().p("AgRBZQAWgCAAgFIAAiqIANAAIAACqQAAADgJACQgIACgMAAg");
	this.shape_188.setTransform(72,512.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#744C2B").s().p("AgUBXQgJgCAAgDIAAiqIA7AAIAACqQAAADgJACQgJACgMAAQgLAAgJgCg");
	this.shape_189.setTransform(70.9,512.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#416328").s().p("AgNAcIgJAFIgIgGIgOAHIAshNIAtBNIgRgKIgGALIgOgJIgHASg");
	this.shape_190.setTransform(585,470.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#31501C").s().p("AgoAXIAlg+IAsBOg");
	this.shape_191.setTransform(585.4,471.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#416328").s().p("AgSAlIgMAIIgKgJIgTAKIA7hoIA8BoIgXgOIgHAPIgUgMIgJAXg");
	this.shape_192.setTransform(585,473.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#31501C").s().p("Ag2AZIAvhPIA+Btg");
	this.shape_193.setTransform(585.8,476);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#416328").s().p("AgZA0IgRALIgPgNIgaAOIBTiRIBUCRIgggTIgKAVIgcgRIgMAhg");
	this.shape_194.setTransform(585,478.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#31501C").s().p("AhPAbIA/huIBhCng");
	this.shape_195.setTransform(586.7,482.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#416328").s().p("AgmBOIgZAQIgXgSIgnAUIB9jaIB+DaIgwgdIgPAfIgpgZIgUAyg");
	this.shape_196.setTransform(585,486.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#31501C").s().p("AhtAtIBbibICADdg");
	this.shape_197.setTransform(586.9,491.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#416328").s().p("AgzBmIghAWIgegYIg0AbICmkgICnEgIg/gmIgVApIg2ghIgaBCg");
	this.shape_198.setTransform(585,496.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#664224").s().p("AgOBLQASAAAAgGIAAiQIALAAIAACQQAAAHgYgBg");
	this.shape_199.setTransform(586,511.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#744C2B").s().p("AgYBFIAAiQIAxAAIAACQQAAAHgZgBQgYABAAgHg");
	this.shape_200.setTransform(585,511.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#416328").s().p("AgNAcIgJAFIgIgGIgOAHIAshNIAtBNIgRgKIgGALIgOgJIgHASg");
	this.shape_201.setTransform(412.6,470.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#31501C").s().p("AgoAXIAkg+IAtBOg");
	this.shape_202.setTransform(413.1,471.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#416328").s().p("AgRAlIgMAIIgMgJIgSAKIA7hoIA8BoIgXgOIgHAPIgUgMIgJAXg");
	this.shape_203.setTransform(412.6,473.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#31501C").s().p("Ag2AZIAuhPIA/Btg");
	this.shape_204.setTransform(413.5,476);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#416328").s().p("AgZA0IgRALIgPgNIgaAOIBTiRIBUCRIgfgTIgLAVIgbgRIgOAhg");
	this.shape_205.setTransform(412.6,478.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#31501C").s().p("AhQAbIBAhuIBhCng");
	this.shape_206.setTransform(414.3,482.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#416328").s().p("AglBOIgaAQIgXgSIgnAUIB9jaIB+DaIgvgdIgQAfIgqgZIgTAyg");
	this.shape_207.setTransform(412.6,486.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#31501C").s().p("AhtAtIBaibICBDdg");
	this.shape_208.setTransform(414.6,491.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#416328").s().p("AgzBmIghAWIgegYIg0AbICmkgICnEgIg/gmIgVApIg2ghIgaBCg");
	this.shape_209.setTransform(412.6,496.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#664224").s().p("AgPBLQAUAAAAgGIAAiQIALAAIAACQQgBAHgYgBg");
	this.shape_210.setTransform(413.6,511.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#744C2B").s().p("AgYBFIAAiQIAxAAIAACQQAAAHgZgBQgYABAAgHg");
	this.shape_211.setTransform(412.6,511.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#416328").s().p("AgPAhIgLAGIgKgHIgQAIIA0hbIA1BbIgUgMIgHANIgRgKIgIAVg");
	this.shape_212.setTransform(702.4,459.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#31501C").s().p("AgvAcIArhKIA0Bdg");
	this.shape_213.setTransform(702.9,461.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#416328").s().p("AgVArIgOAJIgNgKIgWAMIBGh6IBHB6IgbgQIgJASIgXgPIgKAcg");
	this.shape_214.setTransform(702.4,463.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#31501C").s().p("AhAAeIA3heIBKCBg");
	this.shape_215.setTransform(703.4,466.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#416328").s().p("AgeA9IgTANIgSgOIggAPIBjirIBjCrIglgWIgMAZIghgUIgPAng");
	this.shape_216.setTransform(702.4,469.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#31501C").s().p("AheAfIBLiBIByDFg");
	this.shape_217.setTransform(704.3,474.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#416328").s().p("AgtBcIgeATIgbgWIguAYICUkBICVEBIg4giIgSAlIgygdIgWA6g");
	this.shape_218.setTransform(702.4,478.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#31501C").s().p("AiAA1IBqi4ICXEHg");
	this.shape_219.setTransform(704.6,485.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#416328").s().p("Ag8B6IgoAZIgjgdIg+AgIDFlVIDFFVIhLgtIgYAxIhAgnIgeBNg");
	this.shape_220.setTransform(702.4,491.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#664224").s().p("AgRBZQAWgCAAgFIAAiqIANAAIAACqQAAADgJACQgIACgMAAg");
	this.shape_221.setTransform(703.5,508.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#744C2B").s().p("AgUBXQgJgCAAgDIAAiqIA7AAIAACqQAAADgJACQgIACgNAAQgMAAgIgCg");
	this.shape_222.setTransform(702.4,508.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#416328").s().p("AgNAcIgJAFIgIgGIgOAHIAshNIAtBNIgRgKIgFALIgPgJIgHASg");
	this.shape_223.setTransform(656.4,470.1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#31501C").s().p("AgoAXIAkg+IAtBOg");
	this.shape_224.setTransform(656.8,471.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#416328").s().p("AgSAlIgLAIIgLgJIgTAKIA7hoIA8BoIgXgOIgHAPIgUgMIgJAXg");
	this.shape_225.setTransform(656.4,473.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#31501C").s().p("Ag2AZIAuhPIA/Btg");
	this.shape_226.setTransform(657.2,476);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#416328").s().p("AgZA0IgRALIgPgNIgaAOIBTiRIBUCRIgggTIgKAVIgbgRIgOAhg");
	this.shape_227.setTransform(656.4,478.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#31501C").s().p("AhQAbIBAhuIBhCng");
	this.shape_228.setTransform(658,482.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#416328").s().p("AgmBOIgZAQIgXgSIgnAUIB9jaIB+DaIgvgdIgQAfIgpgZIgTAyg");
	this.shape_229.setTransform(656.4,486.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#31501C").s().p("AhsAtIBaibIB/Ddg");
	this.shape_230.setTransform(658.3,491.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#416328").s().p("AgyBmIgiAWIgegYIg0AbICmkgICnEgIg/gmIgUApIg3ghIgaBCg");
	this.shape_231.setTransform(656.4,496.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#664224").s().p("AgOBLQASAAABgGIAAiQIAKAAIAACQQABAHgZgBg");
	this.shape_232.setTransform(657.4,511.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#744C2B").s().p("AgYBFIAAiQIAxAAIAACQQAAAHgZgBQgYABAAgHg");
	this.shape_233.setTransform(656.4,511.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#416328").s().p("AgQAhIgKAGIgJgHIgRAIIA0hbIA1BbIgUgMIgGANIgSgKIgIAVg");
	this.shape_234.setTransform(283.4,459.5);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#31501C").s().p("AgvAcIAqhKIA1Bdg");
	this.shape_235.setTransform(283.9,461.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#416328").s().p("AgVArIgOAJIgNgKIgWAMIBGh6IBHB6IgbgQIgIASIgYgPIgLAcg");
	this.shape_236.setTransform(283.4,463.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#31501C").s().p("Ag/AeIA2heIBJCBg");
	this.shape_237.setTransform(284.4,466.4);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#416328").s().p("AgeA9IgUANIgSgOIgeAPIBiirIBkCrIgmgWIgNAZIgggUIgPAng");
	this.shape_238.setTransform(283.4,469.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#31501C").s().p("AheAfIBLiBIByDFg");
	this.shape_239.setTransform(285.3,474.3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#416328").s().p("AgtBcIgeATIgbgWIguAYICUkBICVEBIg5giIgSAlIgwgdIgXA6g");
	this.shape_240.setTransform(283.4,478.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#31501C").s().p("AiAA1IBqi4ICXEHg");
	this.shape_241.setTransform(285.6,485.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#416328").s().p("Ag8B6IgnAZIgkgdIg9AgIDElVIDGFVIhMgtIgXAxIhBgnIgfBNg");
	this.shape_242.setTransform(283.4,491.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#664224").s().p("AgRBZQAWgCAAgFIAAiqIANAAIAACqQAAADgJACQgIACgMAAg");
	this.shape_243.setTransform(284.5,508.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#744C2B").s().p("AgUBXQgJgCAAgDIAAiqIA7AAIAACqQAAADgJACQgJACgMAAQgLAAgJgCg");
	this.shape_244.setTransform(283.4,508.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#365620").s().p("AgKAVIgHAFIgGgFIgLAGIAig8IAjA8IgNgIIgFAIIgLgHIgGAOg");
	this.shape_245.setTransform(307,479.4);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#2B4918").s().p("AgfASIAcgwIAjA9g");
	this.shape_246.setTransform(307.3,480.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#365620").s().p("AgOAdIgJAGIgJgHIgOAIIAuhQIAvBQIgSgLIgFAMIgQgKIgHATg");
	this.shape_247.setTransform(307,482.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#2B4918").s().p("AgqAUIAkg+IAxBVg");
	this.shape_248.setTransform(307.6,484);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#365620").s().p("AgTAoIgOAJIgMgKIgTALIBAhxIBBBxIgYgPIgIAQIgWgNIgKAag");
	this.shape_249.setTransform(307,486.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#2B4918").s().p("Ag+AVIAyhWIBLCDg");
	this.shape_250.setTransform(308.3,489.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#365620").s().p("AgdA9IgUAMIgSgOIgfAQIBiiqIBiCqIglgWIgMAYIgggUIgPAng");
	this.shape_251.setTransform(307,492.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#2B4918").s().p("AhVAjIBHh5IBjCtg");
	this.shape_252.setTransform(308.5,496.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#365620").s().p("AgnBQIgaARIgYgTIgoAVICBjhICDDhIgygeIgQAhIgqgaIgVAzg");
	this.shape_253.setTransform(307,500.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#664224").s().p("AgMA7QAOgBAAgEIAAhwIALAAIAABwQAAAFgTAAg");
	this.shape_254.setTransform(307.7,512);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#744C2B").s().p("AgTA2IAAhwIAnAAIAABwQAAAFgUAAQgTAAAAgFg");
	this.shape_255.setTransform(307,512);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#416328").s().p("AgNAcIgJAFIgIgGIgOAHIAshNIAtBNIgRgKIgGALIgOgJIgHASg");
	this.shape_256.setTransform(347.4,470.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#31501C").s().p("AgoAXIAkg+IAtBOg");
	this.shape_257.setTransform(347.8,471.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#416328").s().p("AgRAlIgMAIIgMgJIgSAKIA7hoIA8BoIgXgOIgHAPIgUgMIgJAXg");
	this.shape_258.setTransform(347.4,473.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#31501C").s().p("Ag2AZIAuhPIA/Btg");
	this.shape_259.setTransform(348.2,476);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#416328").s().p("AgZA0IgRALIgPgNIgaAOIBTiRIBUCRIgfgTIgLAVIgbgRIgOAhg");
	this.shape_260.setTransform(347.4,478.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#31501C").s().p("AhQAbIBAhuIBhCng");
	this.shape_261.setTransform(349,482.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#416328").s().p("AglBOIgaAQIgXgSIgnAUIB9jaIB+DaIgvgdIgQAfIgqgZIgTAyg");
	this.shape_262.setTransform(347.4,486.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#31501C").s().p("AhtAtIBaibICBDdg");
	this.shape_263.setTransform(349.3,491.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#416328").s().p("AgzBmIghAWIgegYIg0AbICmkgICnEgIg/gmIgVApIg2ghIgaBCg");
	this.shape_264.setTransform(347.4,496.9);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#664224").s().p("AgPBLQATAAgBgGIAAiQIANAAIAACQQgBAHgYgBg");
	this.shape_265.setTransform(348.4,511.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#744C2B").s().p("AgYBFIAAiQIAxAAIAACQQAAAHgZgBQgYABAAgHg");
	this.shape_266.setTransform(347.4,511.9);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#416328").s().p("AgPAhIgLAGIgKgHIgQAIIA0hbIA1BbIgUgMIgHANIgRgKIgIAVg");
	this.shape_267.setTransform(178.1,459.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#31501C").s().p("AgvAcIArhKIA0Bdg");
	this.shape_268.setTransform(178.7,461.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#416328").s().p("AgVArIgOAJIgNgKIgWAMIBGh6IBHB6IgbgQIgJASIgXgPIgKAcg");
	this.shape_269.setTransform(178.1,463.6);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#31501C").s().p("AhAAeIA3heIBKCBg");
	this.shape_270.setTransform(179.1,466.4);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#416328").s().p("AgdA9IgUANIgSgOIggAPIBjirIBjCrIglgWIgMAZIghgUIgPAng");
	this.shape_271.setTransform(178.1,469.6);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#31501C").s().p("AheAfIBLiBIByDFg");
	this.shape_272.setTransform(180.1,474.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#416328").s().p("AgtBcIgeATIgbgWIguAYICUkBICVEBIg4giIgSAlIgygdIgWA6g");
	this.shape_273.setTransform(178.1,478.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#31501C").s().p("AiAA1IBqi4ICXEHg");
	this.shape_274.setTransform(180.4,485.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#416328").s().p("Ag8B6IgoAZIgjgdIg+AgIDFlVIDFFVIhLgtIgYAxIhAgnIgeBNg");
	this.shape_275.setTransform(178.1,491.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#664224").s().p("AgRBZQAXgBAAgGIAAiqIAMAAIAACqQAAADgJACQgIACgMAAg");
	this.shape_276.setTransform(179.3,508.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#744C2B").s().p("AgUBXQgJgCAAgDIAAiqIA7AAIAACqQAAADgJACQgIACgNAAQgMAAgIgCg");
	this.shape_277.setTransform(178.1,508.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#4C4D4E").s().p("ABxBfIkCixIARgMIESC9g");
	this.shape_278.setTransform(631.8,483.2);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#58595B").s().p("AkTBfIETi9IEUC9g");
	this.shape_279.setTransform(618.9,483.2);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#814739").s().p("AjqAGIAAgLIHUAAIAAALg");
	this.shape_280.setTransform(618.9,515.3);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#C9E4F1").s().p("AgIAyQAIAAAAgIIAAhTQAAgIgIAAIARAAIAABjg");
	this.shape_281.setTransform(607.8,505.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#DAF1FC").s().p("AgsAyIAAhjIBYAAIAABjg");
	this.shape_282.setTransform(604.3,505.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#C9E4F1").s().p("AgIAyQAIAAgBgIIAAhTQABgIgIAAIARAAIAABjg");
	this.shape_283.setTransform(635.5,505.7);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#DAF1FC").s().p("AgsAyIAAhjIBYAAIAABjg");
	this.shape_284.setTransform(632,505.7);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#8E7752").s().p("AgDBOIAAibIAHAAIAACbg");
	this.shape_285.setTransform(621.9,508.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#9B8159").s().p("AgpBOIAAibIBTAAIAACbg");
	this.shape_286.setTransform(618.1,508.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#D0C5AC").s().p("AgMCBIAAkBIAYAAIAAEBg");
	this.shape_287.setTransform(641.1,503.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#DCD0B5").s().p("AjqCBIAAkBIHUAAIAAEBg");
	this.shape_288.setTransform(618.9,503.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#C4BAA3").s().p("AgNAAIANAAIAOAAQgEABgKAAQgJAAgEgBg");
	this.shape_289.setTransform(605.3,483.1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#C4BAA3").s().p("AgOAAIAOAAIAPAAIgPABg");
	this.shape_290.setTransform(603.1,482.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#C4BAA3").s().p("AgNAAQAGAAAHAAIAOAAIgOABIgNgBg");
	this.shape_291.setTransform(605.3,480.8);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#C4BAA3").s().p("AgOAAIAOAAIAPAAIgPABg");
	this.shape_292.setTransform(603.1,479.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#C4BAA3").s().p("AgNAAIANAAIAOAAIgOABIgNgBg");
	this.shape_293.setTransform(607.4,477.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#C4BAA3").s().p("AgOAAIAOAAIAPAAIgPABIgOgBg");
	this.shape_294.setTransform(603.1,477.6);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#C4BAA3").s().p("AgNAAIANAAIAOAAIgOABQgHAAgGgBg");
	this.shape_295.setTransform(607.4,475.4);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#C4BAA3").s().p("AgOAAIAOAAIAPAAQgHABgIAAIgOgBg");
	this.shape_296.setTransform(603.1,475.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#4C4D4E").s().p("AgFAJQAEAAAAgEIAAgJQAAgEgEAAIAHAAQAEAAAAAEIAAAJQAAAEgEAAg");
	this.shape_297.setTransform(609.9,473.4);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#58595B").s().p("AgwAJQgEAAAAgEIAAgJQAAgEAEAAIBhAAQAEAAAAAEIAAAJQAAAEgEAAg");
	this.shape_298.setTransform(605.2,473.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#D0C5AC").s().p("AgDBGIAAiLIAHAAIAACLg");
	this.shape_299.setTransform(609.4,480.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#DCD0B5").s().p("AgsBGIAAiLIBZAAIAACLg");
	this.shape_300.setTransform(605.2,480.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#4C4D4E").s().p("ABwBfIkBixIAQgMIETC9g");
	this.shape_301.setTransform(149.7,468.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#58595B").s().p("AkTBfIETi9IEUC9g");
	this.shape_302.setTransform(136.8,468.1);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#814739").s().p("AjpAGIAAgLIHTAAIAAALg");
	this.shape_303.setTransform(136.8,515.3);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#C9E4F1").s().p("AgIAyQAHAAABgIIAAhTQgBgIgHAAIARAAIAABjg");
	this.shape_304.setTransform(125.7,487.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#C9E4F1").s().p("AgIAyQAIAAAAgIIAAhTQAAgIgIAAIARAAIAABjg");
	this.shape_305.setTransform(139.5,505.7);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#C9E4F1").s().p("AgIAyQAIAAAAgIIAAhTQAAgIgIAAIARAAIAABjg");
	this.shape_306.setTransform(153.4,505.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#C9E4F1").s().p("AgIAyQAIAAAAgIIAAhTQAAgIgIAAIARAAIAABjg");
	this.shape_307.setTransform(139.5,487.4);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#C9E4F1").s().p("AgIAyQAIAAAAgIIAAhTQAAgIgIAAIARAAIAABjg");
	this.shape_308.setTransform(153.4,487.4);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#DAF1FC").s().p("AgsAyIAAhjIBZAAIAABjg");
	this.shape_309.setTransform(149.8,487.4);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#DAF1FC").s().p("AgrAyIAAhjIBYAAIAABjg");
	this.shape_310.setTransform(122.2,487.4);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#DAF1FC").s().p("AgsAyIAAhjIBYAAIAABjg");
	this.shape_311.setTransform(136,487.4);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#DAF1FC").s().p("AgsAyIAAhjIBZAAIAABjg");
	this.shape_312.setTransform(149.8,505.7);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#DAF1FC").s().p("AgsAyIAAhjIBYAAIAABjg");
	this.shape_313.setTransform(136,505.7);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#8E7752").s().p("AgDBOIAAibIAHAAIAACbg");
	this.shape_314.setTransform(126.2,508.2);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#9B8159").s().p("AgpBOIAAibIBTAAIAACbg");
	this.shape_315.setTransform(122.4,508.2);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#D0C5AC").s().p("AgLDJIAAmRIAXAAIAAGRg");
	this.shape_316.setTransform(159,495.8);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#DCD0B5").s().p("AjpDJIAAmRIHTAAIAAGRg");
	this.shape_317.setTransform(136.8,495.8);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#C4BAA3").s().p("AgOAAIAOAAIAOAAIgOABIgOgBg");
	this.shape_318.setTransform(154.1,469.8);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#C4BAA3").s().p("AgOAAIAOAAIAPAAIgPABIgOgBg");
	this.shape_319.setTransform(149.8,469.8);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#C4BAA3").s().p("AgOAAIAOAAIAOAAIgOABIgOgBg");
	this.shape_320.setTransform(154.1,467.5);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#C4BAA3").s().p("AgOAAIAOAAIAPAAQgIABgHAAIgOgBg");
	this.shape_321.setTransform(149.8,467.5);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#C4BAA3").s().p("AgOAAIAOAAIAOAAIgOABIgOgBg");
	this.shape_322.setTransform(152,466.3);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#C4BAA3").s().p("AgOAAIAOAAIAOAAQgEABgKAAQgIAAgGgBg");
	this.shape_323.setTransform(154.1,465.3);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#C4BAA3").s().p("AgOAAIAOAAIAPAAQgFABgKAAQgJAAgFgBg");
	this.shape_324.setTransform(149.8,465.3);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#C4BAA3").s().p("AgOAAIAOAAIAOAAIgOABIgOgBg");
	this.shape_325.setTransform(152,464);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#C4BAA3").s().p("AgOAAIAOAAIAOAAIgOABg");
	this.shape_326.setTransform(154.1,463);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#C4BAA3").s().p("AgOAAIAOAAIAPAAIgPABg");
	this.shape_327.setTransform(149.8,463);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#4C4D4E").s().p("AgFAJQAEAAAAgEIAAgJQAAgEgEAAIAHAAQAEAAAAAEIAAAJQAAAEgEAAg");
	this.shape_328.setTransform(156.6,461.1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#58595B").s().p("AgwAJQgEAAAAgEIAAgJQAAgEAEAAIBhAAQAEAAAAAEIAAAJQAAAEgEAAg");
	this.shape_329.setTransform(151.9,461.1);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#D0C5AC").s().p("AgDBGIAAiLIAHAAIAACLg");
	this.shape_330.setTransform(156.1,467.9);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#DCD0B5").s().p("AgsBGIAAiLIBZAAIAACLg");
	this.shape_331.setTransform(151.9,467.9);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("Ah+APQgOAAAAgPQAAgOAOAAID8AAQAPAAAAAOQAAAPgPAAg");
	this.shape_332.setTransform(774.8,556.3);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("Ah+APQgOAAAAgPQAAgOAOAAID8AAQAPAAAAAOQAAAPgPAAg");
	this.shape_333.setTransform(696.7,556.3);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("Ah+APQgOAAAAgPQAAgOAOAAID8AAQAPAAAAAOQAAAPgPAAg");
	this.shape_334.setTransform(618.5,556.3);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("Ah9APQgPAAAAgPQAAgOAPAAID8AAQAOAAAAAOQAAAPgOAAg");
	this.shape_335.setTransform(540.3,556.3);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("Ah+APQgOAAAAgPQAAgOAOAAID9AAQAOAAAAAOQAAAPgOAAg");
	this.shape_336.setTransform(462.2,556.3);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("Ah9APQgPAAAAgPQAAgOAPAAID8AAQAOAAAAAOQAAAPgOAAg");
	this.shape_337.setTransform(384,556.3);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("Ah+APQgOAAAAgPQAAgOAOAAID8AAQAPAAAAAOQAAAPgPAAg");
	this.shape_338.setTransform(305.8,556.3);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("Ah+APQgOAAAAgPQAAgOAOAAID9AAQAOAAAAAOQAAAPgOAAg");
	this.shape_339.setTransform(227.7,556.3);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("Ah9APQgPAAAAgPQAAgOAPAAID7AAQAPAAAAAOQAAAPgPAAg");
	this.shape_340.setTransform(149.5,556.3);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("Ah9APQgPAAAAgPQAAgOAPAAID8AAQAOAAAAAOQAAAPgOAAg");
	this.shape_341.setTransform(71.3,556.3);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#D7DFE3").s().p("ABuDhQAYgTAOgbQAPgdgBggQAAg3gngnQgngng4AAQgSAAgQAFQgOhQg9g1Qg/g1hSAAIgXACQA0geA6AAQBSAAA+A1QA+A1AOBQQATgFAQAAQA3AAAnAnQAoAnAAA3QAAA4goAnQgnAog3AAg");
	this.shape_342.setTransform(793.3,236.7);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#EDEDEE").s().p("AohEEQg4AAgngoQgognAAg3QAAg4AognQAngnA4AAIAJABQADhqBMhIQBLhKBpAAQBDAAA7AgQA4AgAkA2QArgVAvAAQA7AAAzAfQBBg5BVAAQBSAAA/A0QA+A1AOBQQASgFAQAAQA4AAAnAnQAoAnAAA4QAAA3goAnQgnAog4AAg");
	this.shape_343.setTransform(750.2,233.2);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#D7DFE3").s().p("AA6B1QAbgVAAgiQAAgdgVgVQgUgTgdAAQgLAAgGACQgIgqgggbQghgcgrAAIgMABQAbgPAfAAQArAAAgAbQAgAcAHApQAKgCAJAAQAdAAAUAUQAVAUAAAdQAAAdgVAVQgUAUgdAAg");
	this.shape_344.setTransform(646.4,156.2);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#EDEDEE").s().p("AkdCIQgdAAgUgVQgVgUAAgdQAAgeAVgUQAUgUAdAAIAGABQABg3AngmQAognA3AAQAjAAAfARQAdAQASAdQAXgLAYAAQAfAAAbAQQAggeAuAAQArAAAgAcQAhAbAHAqQAKgDAIAAQAeAAAUAUQAUAVAAAdQAAAdgUAUQgUAVgeAAg");
	this.shape_345.setTransform(623.9,154.3);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#D7DFE3").s().p("AA6B1QAbgVAAgiQAAgdgVgVQgUgTgdAAQgIAAgJACQgIgpgggcQghgcgrAAIgLABQAagPAfAAQArAAAgAbQAgAcAIApQAKgCAIAAQAcAAAVAUQAUAUABAdQgBAdgUAVQgVAUgcAAg");
	this.shape_346.setTransform(780.9,53.9);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#EDEDEE").s().p("AkdCIQgdAAgUgVQgUgUAAgdQAAgdAUgVQAUgUAdAAIAFABQADg3AngmQAngnA3AAQAjAAAeARQAeARATAcQAXgLAXAAQAgAAAZAQQAigeAtAAQArAAAhAcQAgAbAIAqQAKgDAIAAQAcAAAVAUQAUAUABAeQgBAdgUAUQgVAVgcAAg");
	this.shape_347.setTransform(758.4,52.1);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#D7DFE3").s().p("ABuDhQAYgTAOgcQAOgcAAggQAAg3gngoQgngmg4AAQgQAAgRAFQgPhQg9g1Qg/g1hSAAIgXACQA0geA6AAQBSAAA+A1QA+A1AOBPQAUgEAPAAQA3AAAoAnQAnAmAAA4QAAA4gnAnQgoAog3AAg");
	this.shape_348.setTransform(513,279.5);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#EDEDEE").s().p("AohEEQg4AAgngnQgogoABg4QgBg4AogmQAngnA4AAIAJAAQAEhpBLhJQBMhJBpAAQBDAAA6AhQA5AeAjA2QAsgUAuAAQA7AAAzAfQBBg5BVgBQBSAAA/A2QA9A0APBQQAUgFAOAAQA4AAAoAnQAnAmgBA4QABA4gnAoQgoAng4AAg");
	this.shape_349.setTransform(469.9,276);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#D7DFE3").s().p("AA4BzQAbgVAAgiQAAgcgVgUQgTgTgdAAQgJAAgIACQgHgpgfgbQgggbgqAAIgMABQAagOAeAAQArAAAfAbQAfAbAHAoQAKgDAIABQAcAAAUATQAVATAAAdQAAAcgVAVQgUATgcABg");
	this.shape_350.setTransform(327.1,35.8);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#EDEDEE").s().p("AkVCFQgdgBgUgTQgUgVAAgcQAAgdAUgUQAUgSAdAAIAEAAQACg2AmglQAngmA1ABQAjAAAdAQQAdAQASAbQAXgKAXAAQAdAAAbAQQAggdAsAAQAqAAAgAbQAgAbAHAoQAJgDAIABQAcAAAVASQAUAUAAAdQAAAcgUAVQgVATgcABg");
	this.shape_351.setTransform(305.1,34);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#D7DFE3").s().p("ABuDgQAYgSAOgcQAOgbAAghQAAg3gngnQgogng3AAQgPAAgTAEQgOhPg9g1Qg/g1hSAAIgXACQAzgeA7AAQBSAAA+A1QA+A1AOBQQAQgFATAAQA3AAAnAoQAoAmAAA3QAAA4goAoQgnAng3gBg");
	this.shape_352.setTransform(524.7,91.2);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#EDEDEE").s().p("AohEEQg4AAgngnQgogoAAg3QAAg4AognQAngnA4AAIAJABQAEhpBLhJQBLhKBqAAQBDAAA6AhQA5AfAjA2QAsgVAuAAQA7AAAzAfQAfgbAlgPQAngPArAAQBSAAA/A1QA+A0AOBQQAQgFASAAQA4AAAnAnQAoAnAAA4QAAA3goAoQgnAng4AAg");
	this.shape_353.setTransform(481.6,87.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#D7DFE3").s().p("ABTCqQATgOAKgVQALgVAAgZQAAgqgegdQgegdgqAAQgMAAgNADQgKg8gvgoQgwgog+ABIgRAAQAogWArAAQA+AAAvAoQAvAoAKA8QAMgDAPAAQAqAAAeAeQAdAdAAApQAAArgdAdQgeAegqAAg");
	this.shape_354.setTransform(289.2,180.8);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#EDEDEE").s().p("AmdDFQgqgBgdgdQgegeAAgqQAAgqAegdQAdgeAqAAIAIAAQAChPA5g3QA5g3BQgBQAzABAsAYQArAYAaAoQAigPAjgBQArABAnAXQAxgsBBABQA+gBAwApQAuAoALA8QAMgDAOgBQAqAAAeAeQAeAdAAAqQAAAqgeAeQgeAdgqABg");
	this.shape_355.setTransform(256.7,178.2);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#D7DFE3").s().p("ABTCqQATgOAKgVQALgVAAgYQAAgqgegeQgegdgqAAQgLAAgOADQgLg7gvgoQgvgpg+AAIgRABQAogWArAAQA+AAAvApQAvAnAKA9QAMgEAOAAQAqAAAeAeQAeAcAAArQAAApgeAfQgeAdgqAAg");
	this.shape_356.setTransform(130.6,248.8);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#EDEDEE").s().p("AmcDEQgqAAgegdQgegeAAgqQAAgqAegeQAegcAqAAIAHAAQAChQA5g3QA5g3BQAAQAzAAAsAYQArAYAbApQAhgRAiABQAsgBAoAYQAwgrBBAAQA+AAAwAoQAvAnAKA9QAMgEAOABQAqAAAeAcQAeAeAAAqQAAAqgeAeQgeAdgqAAg");
	this.shape_357.setTransform(98,246.2);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#416328").s().p("AgNAcIgJAFIgIgGIgOAHIAshNIAtBNIgRgKIgGALIgOgJIgHASg");
	this.shape_358.setTransform(237.4,470.1);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#31501C").s().p("AgoAXIAkg+IAtBOg");
	this.shape_359.setTransform(237.8,471.7);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#416328").s().p("AgRAlIgNAIIgLgJIgSAKIA7hoIA8BoIgWgOIgIAPIgTgMIgKAXg");
	this.shape_360.setTransform(237.4,473.6);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#31501C").s().p("Ag2AZIAuhPIA/Btg");
	this.shape_361.setTransform(238.2,476);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#416328").s().p("AgZA0IgRALIgPgNIgaAOIBTiRIBUCRIgfgTIgLAVIgcgRIgMAhg");
	this.shape_362.setTransform(237.4,478.7);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#31501C").s().p("AhQAbIBAhuIBhCng");
	this.shape_363.setTransform(239,482.6);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#416328").s().p("AgmBOIgZAQIgXgSIgnAUIB9jaIB+DaIgwgdIgPAfIgqgZIgTAyg");
	this.shape_364.setTransform(237.4,486.5);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#31501C").s().p("AhtAtIBaibICBDdg");
	this.shape_365.setTransform(239.3,491.8);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#416328").s().p("AgzBmIghAWIgegYIg0AbICmkgICnEgIg/gmIgVApIg2ghIgaBCg");
	this.shape_366.setTransform(237.4,496.9);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#664224").s().p("AgPBLQAUAAgBgGIAAiQIAMAAIAACQQAAAHgZgBg");
	this.shape_367.setTransform(238.4,511.9);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#744C2B").s().p("AgYBFIAAiQIAxAAIAACQQAAAHgZgBQgYABAAgHg");
	this.shape_368.setTransform(237.4,511.9);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#F0BC54").s().p("AjAFhQCIgNBbhkQBehmAAiKQAAiJhehmQhbhkiIgNQAQgBAQAAQCTgBBnBoQBnBoABCSQgBCShnBpQhnBniTAAQgQAAgQgBg");
	this.shape_369.setTransform(150.6,78.3);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FDC659").s().p("Aj5D7QhphpABiSQgBiSBphoQBnhoCSABQCTgBBoBoQBnBoABCSQgBCShnBpQhoBniTAAQiSAAhnhng");
	this.shape_370.setTransform(134.5,78.3);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#F79D52").s().p("AhEEFIBon6IAhgdIhwIlg");
	this.shape_371.setTransform(160.6,48.5);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#F79D52").s().p("AjAC6IFWmCIArgJIlzGjg");
	this.shape_372.setTransform(172.4,66.2);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#F79D52").s().p("AkKBEIHriiIApANIoUCwg");
	this.shape_373.setTransform(173.9,86.4);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#F79D52").s().p("AkSgsIAOgYIH5BoIAeAhg");
	this.shape_374.setTransform(164.2,104.5);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#F79D52").s().p("AjRizIAYgNIGCFWIAJAsg");
	this.shape_375.setTransform(146.5,116.2);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#F79D52").s().p("AhfkJIAcAAICiHpIgNArg");
	this.shape_376.setTransform(126.3,117.7);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#F79D52").s().p("AAskSIAZANIhoH7IggAdg");
	this.shape_377.setTransform(108.3,108);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#F79D52").s().p("ACzjRIAPAYIlXGCIgrAJg");
	this.shape_378.setTransform(96.6,90.3);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#F79D52").s().p("AkKBRIIVivIAAAbInrCjg");
	this.shape_379.setTransform(95,70.1);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#F79D52").s().p("Aj0giIgegiIIlBxIgOAXg");
	this.shape_380.setTransform(104.7,52.1);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#F79D52").s().p("AjIiWIgJgrIGjF1IgYANg");
	this.shape_381.setTransform(122.4,40.4);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#F79D52").s().p("ABDEKIiinpIAPgrICwIUg");
	this.shape_382.setTransform(142.6,38.8);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FAAF55").s().p("AiwEKICwoUICxIUg");
	this.shape_383.setTransform(134.5,38.8);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FAAF55").s().p("AjRkSIGjF0IkyCxg");
	this.shape_384.setTransform(122.4,48.5);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FAAF55").s().p("AkSjRIIlBxIixEyg");
	this.shape_385.setTransform(104.7,66.2);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FAAF55").s().p("AkKAAIIViwIAAFhg");
	this.shape_386.setTransform(95,78.3);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FAAF55").s().p("ABijRICxEyIolBxg");
	this.shape_387.setTransform(104.7,90.3);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FAAF55").s().p("AhgkSIEyCxImjF0g");
	this.shape_388.setTransform(122.4,108);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FAAF55").s().p("AiwkJIFhAAIixIUg");
	this.shape_389.setTransform(134.5,117.7);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FAAF55").s().p("AjRhhIEyixIBxIlg");
	this.shape_390.setTransform(146.5,108);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FAAF55").s().p("AkSBhICxkyIF0Gjg");
	this.shape_391.setTransform(164.2,90.3);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FAAF55").s().p("AkKiwIIUCwIoUCxg");
	this.shape_392.setTransform(173.9,78.3);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FAAF55").s().p("AkShgIIlhxIl0Gjg");
	this.shape_393.setTransform(164.2,66.2);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FAAF55").s().p("AjRBiIGjl0IhxIlg");
	this.shape_394.setTransform(146.5,48.5);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#416328").s().p("AgKAWIgHAEIgHgEIgLAFIAjg8IAkA8IgOgIIgEAJIgMgHIgFANg");
	this.shape_395.setTransform(248.3,359.1);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#31501C").s().p("AgfASIAcgwIAjA9g");
	this.shape_396.setTransform(248.7,360.4);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#416328").s().p("AgNAdIgKAGIgIgHIgQAIIAvhRIAwBRIgSgLIgGAMIgQgJIgHASg");
	this.shape_397.setTransform(248.3,361.9);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#31501C").s().p("AgqAUIAkg+IAxBVg");
	this.shape_398.setTransform(249,363.8);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#416328").s().p("AgUApIgMAIIgNgJIgVAKIBChyIBDByIgagPIgIARIgVgOIgKAbg");
	this.shape_399.setTransform(248.3,365.9);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#31501C").s().p("Ag/AVIAzhXIBMCFg");
	this.shape_400.setTransform(249.6,369);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#416328").s().p("AgeA9IgUANIgSgPIgfARIBjisIBkCsIgmgXIgMAYIghgTIgPAng");
	this.shape_401.setTransform(248.3,372.1);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#31501C").s().p("AhWAjIBIh6IBkCvg");
	this.shape_402.setTransform(249.9,376.2);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#416328").s().p("AgoBRIgaARIgYgTIgpAVICDjkICEDkIgygeIgQAhIgrgaIgVA0g");
	this.shape_403.setTransform(248.3,380.3);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#664224").s().p("AgLA8QAPgBAAgEIAAhyIAIAAIAAByQAAAFgTAAg");
	this.shape_404.setTransform(249.1,392.1);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#744C2B").s().p("AgTA3IAAhyIAnAAIAAByQAAAFgUAAQgTAAAAgFg");
	this.shape_405.setTransform(248.3,392.1);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#416328").s().p("AgKAWIgHAEIgHgFIgLAGIAjg9IAkA9IgOgIIgEAJIgMgHIgFAOg");
	this.shape_406.setTransform(223.3,353.8);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#31501C").s().p("AgfASIAcgwIAjA9g");
	this.shape_407.setTransform(223.7,355);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#416328").s().p("AgOAdIgJAGIgIgGIgQAHIAvhRIAwBRIgSgLIgGAMIgPgJIgIASg");
	this.shape_408.setTransform(223.3,356.5);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#31501C").s().p("AgqAUIAkg+IAxBVg");
	this.shape_409.setTransform(224,358.4);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#416328").s().p("AgUApIgMAIIgMgJIgWAKIBChyIBCByIgZgPIgIARIgVgNIgKAag");
	this.shape_410.setTransform(223.3,360.6);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#31501C").s().p("Ag/AVIAzhWIBMCDg");
	this.shape_411.setTransform(224.6,363.7);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#416328").s().p("AgeA+IgUAMIgSgOIgfAPIBjirIBkCrIgmgWIgMAZIghgUIgPAng");
	this.shape_412.setTransform(223.3,366.7);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#31501C").s().p("AhWAkIBHh7IBlCvg");
	this.shape_413.setTransform(224.9,370.9);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#416328").s().p("AgoBRIgaARIgYgTIgpAVICDjkICEDkIgygeIgQAhIgrgbIgVA1g");
	this.shape_414.setTransform(223.3,375);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#664224").s().p("AgLA8QAPgBAAgEIAAhyIAIAAIAAByQAAAFgTAAg");
	this.shape_415.setTransform(224.1,386.8);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#744C2B").s().p("AgTA3IAAhyIAnAAIAAByQAAAFgUAAQgTAAAAgFg");
	this.shape_416.setTransform(223.3,386.8);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#416328").s().p("AgKAWIgHAEIgHgFIgLAGIAjg9IAkA9IgOgIIgEAJIgMgHIgFAOg");
	this.shape_417.setTransform(197.3,351.8);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#31501C").s().p("AgfASIAcgwIAjA9g");
	this.shape_418.setTransform(197.7,353);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#416328").s().p("AgOAdIgJAGIgJgGIgPAHIAvhRIAwBRIgTgLIgFAMIgPgJIgIASg");
	this.shape_419.setTransform(197.3,354.5);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#31501C").s().p("AgqAUIAkg+IAxBVg");
	this.shape_420.setTransform(198,356.4);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#416328").s().p("AgUApIgNAIIgLgJIgWAKIBChyIBCByIgZgPIgIARIgWgNIgJAag");
	this.shape_421.setTransform(197.3,358.6);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#31501C").s().p("Ag/AVIAzhXIBMCEg");
	this.shape_422.setTransform(198.6,361.7);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#416328").s().p("AgeA+IgUAMIgSgPIgfAQIBjirIBkCrIgmgWIgMAZIghgUIgPAng");
	this.shape_423.setTransform(197.3,364.7);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#31501C").s().p("AhWAjIBHh6IBmCvg");
	this.shape_424.setTransform(198.9,368.9);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#416328").s().p("AgoBRIgaARIgYgTIgpAVICDjkICEDkIgygeIgQAhIgrgaIgVA0g");
	this.shape_425.setTransform(197.3,373);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#664224").s().p("AgLA8QAOgBAAgEIAAhyIAJAAIAAByQAAAFgTAAg");
	this.shape_426.setTransform(198.1,384.8);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#744C2B").s().p("AgTA3IAAhyIAnAAIAAByQAAAFgUAAQgTAAAAgFg");
	this.shape_427.setTransform(197.3,384.8);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#365620").s().p("AgIASIgGAEIgFgEIgKAEIAdgyIAeAyIgMgGIgDAHIgKgGIgFAMg");
	this.shape_428.setTransform(266.7,358.6);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#2B4918").s().p("AgaAPIAYgoIAdAzg");
	this.shape_429.setTransform(267,359.7);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#365620").s().p("AgLAYIgIAFIgHgFIgMAGIAmhDIAoBDIgPgJIgFAKIgNgIIgGAPg");
	this.shape_430.setTransform(266.7,360.9);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#2B4918").s().p("AgjARIAfg0IAoBHg");
	this.shape_431.setTransform(267.2,362.5);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#365620").s().p("AgQAiIgLAHIgKgIIgSAJIA3hfIA3BfIgVgMIgHANIgSgLIgIAWg");
	this.shape_432.setTransform(266.7,364.3);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#2B4918").s().p("Ag0ASIAqhJIA/Bvg");
	this.shape_433.setTransform(267.8,366.9);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#365620").s().p("AgZAzIgQALIgPgMIgaANIBSiPIBTCPIgggTIgJAVIgbgRIgOAhg");
	this.shape_434.setTransform(266.7,369.4);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#2B4918").s().p("AhHAeIA7hmIBUCRg");
	this.shape_435.setTransform(267.9,372.9);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#365620").s().p("AghBEIgWAOIgUgQIgiARIBti9IBuC9IgpgYIgOAbIgkgWIgRArg");
	this.shape_436.setTransform(266.7,376.3);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#664224").s().p("AgJAyQAMgBAAgDIAAhfIAHAAIAABfQAAAEgPAAg");
	this.shape_437.setTransform(267.3,386.1);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#744C2B").s().p("AgQAuIAAhfIAgAAIAABfQAAAEgQAAQgPAAgBgEg");
	this.shape_438.setTransform(266.7,386.1);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#365620").s().p("AgIASIgGAEIgFgEIgKAEIAdgyIAeAyIgMgHIgDAIIgKgGIgEAMg");
	this.shape_439.setTransform(238.3,349.3);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#2B4918").s().p("AgaAPIAYgoIAdAzg");
	this.shape_440.setTransform(238.6,350.4);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#365620").s().p("AgLAYIgIAFIgHgFIgMAGIAmhDIAoBDIgQgJIgEAKIgNgIIgGAPg");
	this.shape_441.setTransform(238.3,351.6);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#2B4918").s().p("AgjARIAeg0IApBHg");
	this.shape_442.setTransform(238.9,353.2);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#365620").s().p("AgQAiIgLAIIgKgJIgRAJIA2hfIA3BfIgVgMIgGANIgTgLIgIAWg");
	this.shape_443.setTransform(238.3,355);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#2B4918").s().p("Ag0ASIAqhIIA/Btg");
	this.shape_444.setTransform(239.4,357.5);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#365620").s().p("AgZAzIgQALIgPgMIgaANIBSiPIBTCPIgggTIgKAVIgbgRIgNAhg");
	this.shape_445.setTransform(238.3,360.1);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#2B4918").s().p("AhHAdIA7hlIBUCRg");
	this.shape_446.setTransform(239.6,363.6);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#365620").s().p("AggBEIgXAOIgTgQIgjARIBti9IBuC9IgpgYIgOAbIgkgWIgRArg");
	this.shape_447.setTransform(238.3,366.9);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#664224").s().p("AgJAyQAMgBAAgDIAAhfIAHAAIAABfQAAAEgQAAg");
	this.shape_448.setTransform(239,376.8);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#744C2B").s().p("AgQAuIAAhfIAhAAIAABfQAAAEgRAAQgQAAAAgEg");
	this.shape_449.setTransform(238.3,376.8);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#365620").s().p("AgIASIgGAEIgFgEIgJAEIAcgyIAdAyIgKgGIgEAHIgKgGIgFAMg");
	this.shape_450.setTransform(182.7,352.6);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#2B4918").s().p("AgaAPIAYgoIAdAzg");
	this.shape_451.setTransform(183,353.7);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#365620").s().p("AgLAYIgIAFIgHgFIgMAGIAmhDIAnBDIgOgJIgFAKIgNgIIgGAPg");
	this.shape_452.setTransform(182.7,354.9);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#2B4918").s().p("AgjARIAeg0IApBHg");
	this.shape_453.setTransform(183.2,356.5);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#365620").s().p("AgQAiIgLAHIgKgIIgRAJIA2hfIA3BfIgUgMIgIANIgSgLIgIAWg");
	this.shape_454.setTransform(182.7,358.3);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#2B4918").s().p("Ag0ASIAqhIIA/Btg");
	this.shape_455.setTransform(183.8,360.9);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#365620").s().p("AgZAzIgRALIgOgMIgaANIBSiPIBTCPIgfgTIgKAVIgbgRIgOAhg");
	this.shape_456.setTransform(182.7,363.4);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#2B4918").s().p("AhHAeIA7hmIBUCRg");
	this.shape_457.setTransform(183.9,366.9);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#365620").s().p("AghBEIgWAOIgUgQIgiASIBti+IBuC+IgpgZIgOAbIgkgWIgRArg");
	this.shape_458.setTransform(182.7,370.3);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#664224").s().p("AgJAyQAMgBAAgDIAAhfIAHAAIAABfQAAAEgQAAg");
	this.shape_459.setTransform(183.3,380.1);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#744C2B").s().p("AgQAuIAAhfIAhAAIAABfQAAAEgRAAQgQAAAAgEg");
	this.shape_460.setTransform(182.7,380.1);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#2B4918").s().p("AgGAPIgFADIgFgEIgHAEIAXgpIAYApIgJgFIgDAGIgIgFIgEAJg");
	this.shape_461.setTransform(168.2,359.7);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#1E3B0C").s().p("AgVANIATghIAYApg");
	this.shape_462.setTransform(168.4,360.5);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#2B4918").s().p("AgJAUIgHAFIgFgGIgKAGIAfg3IAgA3IgMgIIgEAIIgKgGIgFANg");
	this.shape_463.setTransform(168.2,361.5);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#1E3B0C").s().p("AgdAOIAZgrIAiA7g");
	this.shape_464.setTransform(168.7,362.8);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#2B4918").s().p("AgNAcIgJAGIgIgHIgOAHIAshNIAtBNIgRgKIgFALIgPgJIgHASg");
	this.shape_465.setTransform(168.2,364.3);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#1E3B0C").s().p("AgqAOIAig6IAzBZg");
	this.shape_466.setTransform(169.1,366.4);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#2B4918").s().p("AgUAqIgOAIIgMgJIgVAKIBDh0IBEB0IgagPIgIARIgWgNIgLAag");
	this.shape_467.setTransform(168.2,368.5);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#1E3B0C").s().p("Ag6AYIAwhTIBFB3g");
	this.shape_468.setTransform(169.2,371.3);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#2B4918").s().p("AgbA4IgSALIgQgNIgcAOIBZiaIBaCaIgigUIgLAWIgegSIgNAjg");
	this.shape_469.setTransform(168.2,374.1);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#664224").s().p("AgHApQAJgBAAgDIAAhNIAGAAIAABNQAAAEgNAAg");
	this.shape_470.setTransform(168.7,382.1);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#744C2B").s().p("AgNAlIAAhNIAbAAIAABNQAAAEgOAAQgNAAAAgEg");
	this.shape_471.setTransform(168.2,382.1);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#365620").s().p("AgIASIgGAEIgFgEIgKAEIAdgyIAeAyIgMgGIgDAHIgKgGIgEAMg");
	this.shape_472.setTransform(209.3,348);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#2B4918").s().p("AgaAPIAYgoIAdAzg");
	this.shape_473.setTransform(209.6,349);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#365620").s().p("AgLAZIgIAEIgHgFIgMAGIAmhDIAnBDIgOgJIgFAKIgNgIIgGAPg");
	this.shape_474.setTransform(209.3,350.3);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#2B4918").s().p("AgjARIAeg0IApBHg");
	this.shape_475.setTransform(209.9,351.9);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#365620").s().p("AgQAiIgLAHIgKgIIgRAJIA2hfIA3BfIgVgNIgGAOIgTgLIgIAWg");
	this.shape_476.setTransform(209.3,353.6);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#2B4918").s().p("Ag0ARIAqhIIA/Bug");
	this.shape_477.setTransform(210.4,356.2);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#365620").s().p("AgZAzIgQALIgPgMIgaANIBSiPIBTCPIgggTIgKAVIgbgRIgNAhg");
	this.shape_478.setTransform(209.3,358.7);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#2B4918").s().p("AhHAdIA7hlIBUCRg");
	this.shape_479.setTransform(210.6,362.2);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#365620").s().p("AghBDIgWAPIgTgQIgjARIBti9IBuC9IgpgZIgOAbIgkgVIgRArg");
	this.shape_480.setTransform(209.3,365.6);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#664224").s().p("AgJAyQAMgBAAgDIAAhfIAHAAIAABfQAAAEgQAAg");
	this.shape_481.setTransform(210,375.4);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#744C2B").s().p("AgQAuIAAhfIAhAAIAABfQAAAEgRAAQgQAAAAgEg");
	this.shape_482.setTransform(209.3,375.4);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#AAB834").s().p("ADtCOQgWgFghgNQlXjXlfgrICsgLQGuAAGnEEIgkgEQgUgDgNgBQgegBhJAZQgrAPggAAQgQAAgNgEg");
	this.shape_483.setTransform(250,390.9);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#ABC13B").s().p("AD/CbQg6gYgbgIQhYgXhoAZQhGAWggADQgzAGguggIg6gpQgigWgdgHQgYgHguAKIhSAUQhmAWgag8IgEgPQEPiZEggkQFeArFYDXQgxgRgXgEQgogJghAIQgfAGgoAkQgrAngYAIQgPAGgSAAQgZAAgfgLg");
	this.shape_484.setTransform(205.5,394);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#90AA35").s().p("ALGLUQgshShSh9Qijj5jAjVQpmqtqdhSQBYgLBUAAQLaAAKkLTQDTDiC1EQQBbCHAwBbg");
	this.shape_485.setTransform(304.2,448.7);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#9FBB3B").s().p("A9NLUQAnhbBPiHQCbkQC+jiQELk7Eri2QF0jiGSAAQLYAAKlLTQDTDiC2EQQBaCHAwBbg");
	this.shape_486.setTransform(222.7,448.7);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#416328").s().p("AgKAWIgHAEIgGgFIgLAGIAig9IAkA9IgOgIIgEAJIgMgHIgFAOg");
	this.shape_487.setTransform(613,382.3);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#31501C").s().p("AgfASIAcgwIAjA9g");
	this.shape_488.setTransform(613.4,383.5);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#416328").s().p("AgOAdIgJAGIgJgGIgPAHIAvhRIAwBRIgSgLIgHAMIgPgJIgHASg");
	this.shape_489.setTransform(613,385);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#31501C").s().p("AgrAUIAlg+IAyBVg");
	this.shape_490.setTransform(613.7,386.9);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#416328").s().p("AgUApIgNAIIgMgJIgVAKIBChyIBCByIgZgPIgIARIgVgNIgLAag");
	this.shape_491.setTransform(613,389.1);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#31501C").s().p("Ag+AVIAyhXIBLCEg");
	this.shape_492.setTransform(614.3,392.2);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#416328").s().p("AgeA9IgUANIgSgPIgeARIBiisIBkCsIgngXIgMAZIgggUIgPAng");
	this.shape_493.setTransform(613,395.2);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#31501C").s().p("AhVAjIBHh6IBlCvg");
	this.shape_494.setTransform(614.5,399.4);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#416328").s().p("AgoBRIgbARIgYgTIgoAVICDjjICEDjIgygeIgQAhIgsgaIgTA0g");
	this.shape_495.setTransform(613,403.5);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#664224").s().p("AgLA8QAPgBAAgEIAAhyIAIAAIAAByQAAAFgTAAg");
	this.shape_496.setTransform(613.8,415.3);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#744C2B").s().p("AgTA3IAAhyIAnAAIAAByQAAAFgUAAQgTAAAAgFg");
	this.shape_497.setTransform(613,415.3);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#416328").s().p("AgKAWIgHAEIgHgFIgKAGIAig9IAkA9IgOgIIgEAJIgMgHIgFAOg");
	this.shape_498.setTransform(583,387.7);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#31501C").s().p("AgfATIAcgxIAjA9g");
	this.shape_499.setTransform(583.3,388.9);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#416328").s().p("AgOAdIgJAHIgJgHIgPAHIAvhRIAwBRIgTgLIgFAMIgQgJIgHASg");
	this.shape_500.setTransform(583,390.4);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#31501C").s().p("AgqAUIAkg+IAxBVg");
	this.shape_501.setTransform(583.6,392.3);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#416328").s().p("AgUApIgNAJIgMgKIgVAKIBChyIBCByIgZgPIgIARIgWgNIgJAag");
	this.shape_502.setTransform(583,394.5);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#31501C").s().p("Ag/AVIAzhXIBMCFg");
	this.shape_503.setTransform(584.3,397.6);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#416328").s().p("AgeA9IgUANIgSgOIgeAPIBiirIBkCrIgmgWIgNAZIgggUIgPAng");
	this.shape_504.setTransform(583,400.6);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#31501C").s().p("AhWAjIBHh6IBmCvg");
	this.shape_505.setTransform(584.5,404.8);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#416328").s().p("AgoBRIgbARIgXgTIgpAVICDjkICEDkIgygeIgQAhIgrgaIgUA0g");
	this.shape_506.setTransform(583,408.9);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#664224").s().p("AgLA8QAOgBAAgEIAAhyIAJAAIAAByQAAAFgTAAg");
	this.shape_507.setTransform(583.8,420.7);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#744C2B").s().p("AgTA3IAAhyIAnAAIAAByQAAAFgUAAQgTAAAAgFg");
	this.shape_508.setTransform(583,420.7);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#365620").s().p("AgIATIgGADIgFgEIgKAEIAdgyIAeAyIgMgGIgDAHIgKgFIgEALg");
	this.shape_509.setTransform(567.1,386.2);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#2B4918").s().p("AgaAPIAYgoIAdAzg");
	this.shape_510.setTransform(567.4,387.3);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#365620").s().p("AgLAZIgIAEIgHgFIgNAGIAnhDIAoBDIgPgJIgFAKIgNgIIgGAPg");
	this.shape_511.setTransform(567.1,388.5);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#2B4918").s().p("AgjARIAeg0IApBHg");
	this.shape_512.setTransform(567.7,390.1);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#365620").s().p("AgQAiIgLAHIgKgIIgRAJIA2hfIA3BfIgVgMIgGANIgSgKIgJAVg");
	this.shape_513.setTransform(567.1,391.9);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#2B4918").s().p("Ag0ARIAqhIIA/Bug");
	this.shape_514.setTransform(568.2,394.5);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#365620").s().p("AgZAzIgQALIgPgMIgaANIBSiPIBTCPIgggTIgKAVIgbgRIgMAhg");
	this.shape_515.setTransform(567.1,397);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#2B4918").s().p("AhHAdIA7hlIBUCRg");
	this.shape_516.setTransform(568.4,400.5);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#365620").s().p("AghBDIgWAPIgUgRIgiASIBti9IBuC9IgqgZIgNAbIgkgVIgRArg");
	this.shape_517.setTransform(567.1,403.9);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#664224").s().p("AgJAyQAMgBAAgDIAAhfIAHAAIAABfQAAAEgQAAg");
	this.shape_518.setTransform(567.8,413.7);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#744C2B").s().p("AgQAuIAAhfIAhAAIAABfQAAAEgRAAQgQAAAAgEg");
	this.shape_519.setTransform(567.1,413.7);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#2B4918").s().p("AgHAPIgEADIgFgEIgHAFIAXgqIAYAqIgJgGIgDAGIgIgFIgEAJg");
	this.shape_520.setTransform(632.9,393.4);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#1E3B0C").s().p("AgVAMIAUggIAXApg");
	this.shape_521.setTransform(633.1,394.3);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#2B4918").s().p("AgJAUIgHAEIgFgFIgKAFIAfg3IAhA3IgNgHIgEAIIgKgGIgGAMg");
	this.shape_522.setTransform(632.9,395.3);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#1E3B0C").s().p("AgcAOIAZgrIAgA7g");
	this.shape_523.setTransform(633.3,396.6);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#2B4918").s().p("AgNAcIgJAGIgIgHIgPAHIAthNIAtBNIgRgKIgFALIgPgJIgHASg");
	this.shape_524.setTransform(632.9,398);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#1E3B0C").s().p("AgrAOIAjg6IAzBZg");
	this.shape_525.setTransform(633.8,400.1);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#2B4918").s().p("AgUAqIgOAIIgMgJIgVAKIBDh0IBEB0IgagPIgIARIgXgNIgKAag");
	this.shape_526.setTransform(632.9,402.2);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#1E3B0C").s().p("Ag6AYIAxhTIBEB3g");
	this.shape_527.setTransform(633.9,405.1);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#2B4918").s().p("AgbA3IgSAMIgQgNIgcAOIBZibIBaCbIgigUIgLAWIgdgSIgPAkg");
	this.shape_528.setTransform(632.9,407.8);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#664224").s().p("AgHApQAKgBAAgDIAAhNIAFAAIAABNQAAAEgMAAg");
	this.shape_529.setTransform(633.4,415.9);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#744C2B").s().p("AgMAlIAAhNIAaAAIAABNQAAAEgOAAQgMAAAAgEg");
	this.shape_530.setTransform(632.9,415.9);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#2B4918").s().p("AgGAPIgFADIgFgEIgHAEIAXgoIAYAoIgJgFIgDAGIgIgFIgDAJg");
	this.shape_531.setTransform(552.6,393.2);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#1E3B0C").s().p("AgVAMIAUggIAXApg");
	this.shape_532.setTransform(552.9,394.1);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#2B4918").s().p("AgJAUIgHAEIgFgEIgLAEIAgg3IAhA3IgNgHIgEAIIgKgGIgGAMg");
	this.shape_533.setTransform(552.7,395.1);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#1E3B0C").s().p("AgcANIAZgpIAgA5g");
	this.shape_534.setTransform(553.1,396.4);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#2B4918").s().p("AgNAcIgJAGIgIgHIgPAIIAthOIAtBOIgRgLIgFALIgPgJIgHASg");
	this.shape_535.setTransform(552.7,397.9);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#1E3B0C").s().p("AgrAOIAjg7IA0Bag");
	this.shape_536.setTransform(553.6,400);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#2B4918").s().p("AgUAqIgOAIIgMgJIgVAKIBDh0IBEB0IgagPIgIARIgXgOIgKAbg");
	this.shape_537.setTransform(552.7,402);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#1E3B0C").s().p("Ag6AYIAxhTIBEB3g");
	this.shape_538.setTransform(553.7,404.9);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#2B4918").s().p("AgbA3IgSAMIgQgNIgcAOIBZibIBaCbIgigUIgLAWIgdgSIgPAkg");
	this.shape_539.setTransform(552.7,407.7);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#664224").s().p("AgHApQAJgBAAgCIAAhOIAGAAIAABOQAAADgMAAg");
	this.shape_540.setTransform(553.2,415.7);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#744C2B").s().p("AgMAmIAAhOIAaAAIAABOQAAADgOAAQgMAAAAgDg");
	this.shape_541.setTransform(552.7,415.7);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#AAB834").s().p("AnkhfIBAgEIBfgCQGXAAGUCJQg1AEgiAQQgNAGgSARQgVARgJAGQmYiqmegbg");
	this.shape_542.setTransform(622.5,420.5);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#ABC13B").s().p("AA8B4QgbAAgngPQgsgTgWgHQhYgag9gDQhBgDhBAPQgaAGhhAfQgvAQg0gOQg2gNgggkQgUgUgCgyQEJhTEUgTQGdAcGZCpIgJAFQgjAOg3gNQgQgEhJgZQhIgYgvgHQhCgKg2ASQgYAIhHAuQg2AkgsAAIgCgBg");
	this.shape_543.setTransform(588.1,422.9);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#90AA35").s().p("ANjIqQgzhAhfhhQi/jCjgilQrLoRsIg0QBSgFBNAAQNCAAMEIoQDxCtDPDQQBnBnA3BGg");
	this.shape_544.setTransform(692.6,465.7);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#9FBB3B").s().p("EghXAIqQAthGBZhnQCyjQDZitQK5ooNBAAQNAAAMFIoQDyCtDODQQBoBnA3BGg");
	this.shape_545.setTransform(597.6,465.7);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#87A341").s().p("AFICgQhMgOgYAAQgsAAghAKQkjkKkngxIA9gIIBKgDQFyAAFvFUIgQABQgjAAg6gLg");
	this.shape_546.setTransform(435.4,286.1);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#90AD45").s().p("AFkClQg5gYgWgEQglgFgxAEQgYACg8AJQgSADgqAPQglAOgVACQg4ADhxhAQgogXgmgIQgmgJgvADQgUACgsAHQgqAIgWABQgzABgdgUQD8jeEJgtQEmAyElEJQgWAHgRAIIglAaQgVAOgUAAIgBABQgeAAgxgVg");
	this.shape_547.setTransform(395.3,288.7);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#6D8C38").s().p("AL+T2QgsiThUjeQinm9jFl9QkSoVkllHQlvmal3g/QBAgLBHAAQGRAAGKGNQE6E+EoIqQDUGNC1HcQBaDuAwCfg");
	this.shape_548.setTransform(495.4,396);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#7C9D40").s().p("A9NT2QAoifBOjuQCbncC/mNQEKoqErk+QF0mNGSAAQGPAAGKGNQE7E+EpIqQDTGNC2HcQBaDuAwCfg");
	this.shape_549.setTransform(412,396);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#84A644").s().p("AhxmEIAAgBIDjL5QgogJgJgBQgagEgXAEQgPADgQAJIgdAQg");
	this.shape_550.setTransform(145.3,221);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#92B64B").s().p("AAhF+QgUgJg2gkQgngbg7AGIDSrHIAAABIBFMKQgLAGgMADQgMADgOAAQgcAAgegOg");
	this.shape_551.setTransform(126.8,221.6);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#73933B").s().p("AjOanMgEsg1MIAAgBMAP1A1Ng");
	this.shape_552.setTransform(184.6,352.3);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#82A443").s().p("Av0anMAP0g1NMAP1A1Ng");
	this.shape_553.setTransform(134,352.3);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#82A443").s().p("Av0anMAP0g1NMAP1A1Ng");
	this.shape_554.setTransform(134,352.3);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#C7C8CA").s().p("Eg7aADmQhfAAhEhEQhDhDAAhfQAAheBDhDQBEhEBfAAMB22AAAQBfAABDBEQBDBDAABeQAABfhDBDQhEBEheAAg");
	this.shape_555.setTransform(425,547);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#EA7D3E").s().p("AgEAUQgJgCgEgHQgEgIACgHQACgJAHgEQAIgEAHACQAIACAFAHQAEAIgCAHQgCAIgIAFQgFADgFAAIgEgBg");
	this.shape_556.setTransform(597.3,352.7);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#ED8E40").s().p("AgGAaQgLgDgFgJQgGgKADgKQADgLAJgFQAKgGAJADQALADAGAJQAFAKgCAJQgDALgJAGQgHAEgHAAIgGgBg");
	this.shape_557.setTransform(597.3,352.7);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#EE9A41").s().p("AgHAgQgOgDgHgMQgHgMADgMQAEgOAMgHQAMgHAMADQAOAEAHAMQAHAMgEAMQgDAOgMAHQgIAFgIAAIgIgCg");
	this.shape_558.setTransform(597.3,352.7);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#DDA73E").s().p("AgLARIALglIAMAMIgIAdg");
	this.shape_559.setTransform(597.5,350.2);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#D98D3B").s().p("AgPAAIAKgcIAVAVIgLAkg");
	this.shape_560.setTransform(595.9,349);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#F3B744").s().p("AgzCuIBllfQADADgBAEIhXFcg");
	this.shape_561.setTransform(601.6,334.5);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#EE9A41").s().p("AgpCwIgVgeIBrlAQADgGAHACIABAAQAIACgCAIIhXFcg");
	this.shape_562.setTransform(600.6,334.3);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#DDA73E").s().p("AgQAAIAZgPIAIANIghATg");
	this.shape_563.setTransform(594.7,354.4);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#D98D3B").s().p("AgQgEIAhgUIAAABIgGAiIgbAOg");
	this.shape_564.setTransform(594.7,356.6);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#F3B744").s().p("AicBZIE0i3IAJANIlBCwQAAgEAEgCg");
	this.shape_565.setTransform(580.4,362.3);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#EE9A41").s().p("AieBgIgBgBQgCgDABgDQABgDADgCIE0i3IAJAOIgHAjIkuCWIgDAAQgEAAgDgEg");
	this.shape_566.setTransform(580.4,362.7);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#DDA73E").s().p("AgTAAIAIgOIAfAVIgPAIg");
	this.shape_567.setTransform(600.3,354.1);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#D98D3B").s().p("AgdgEIABgBIAhgKIAZARIgbAOg");
	this.shape_568.setTransform(602,353.1);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#F3B744").s().p("ACVBlIkwi9IAIgOIEvDMIgDABIgEgCg");
	this.shape_569.setTransform(613.9,362.9);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#EE9A41").s().p("ACSBrIkwi+IAJgOIAigKIEPDIQAGAEgEAGIgBABQgDAEgDAAQgCAAgDgBg");
	this.shape_570.setTransform(614.1,362.3);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#A34B31").s().p("AgKAcIABhNIATAAIABBkg");
	this.shape_571.setTransform(597.2,356.2);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#B35337").s().p("AgSEwIAJpfIATAAIAJJfg");
	this.shape_572.setTransform(597.2,381.6);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#EA7D3E").s().p("AgCANQgGgCgCgEQgDgFABgEQACgGAEgCQAFgDAEABQAFACADAEQADAFgBAEQgCAFgEADQgEACgDAAIgCAAg");
	this.shape_573.setTransform(626.8,381.6);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#ED8E40").s().p("AgDAQQgHgCgDgGQgEgFACgGQABgHAGgDQAGgEAGACQAHABADAGQAEAGgCAGQgCAHgGADQgDADgEAAIgEgBg");
	this.shape_574.setTransform(626.8,381.6);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#EE9A41").s().p("AgEAUQgJgCgEgHQgEgIACgHQACgJAHgEQAIgEAHACQAIACAFAHQAEAIgCAHQgCAIgHAFQgFADgGAAIgEgBg");
	this.shape_575.setTransform(626.8,381.6);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#DDA73E").s().p("AgGAKIAGgWIAHAIIgFARg");
	this.shape_576.setTransform(627,380.1);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#D98D3B").s().p("AADASIgMgSIAGgSIANAOIgHAWg");
	this.shape_577.setTransform(625.9,379.3);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#F3B744").s().p("AggBtIA/jcQAAABABAAQAAABAAAAQABABAAAAQAAABgBABIg2Dag");
	this.shape_578.setTransform(629.5,370.2);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#EE9A41").s().p("AgaBuIgMgSIBCjIQACgEAEABIABAAQAFACgBAEIg3Dag");
	this.shape_579.setTransform(628.9,370.1);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#DDA73E").s().p("AgKAAIAQgJIAFAJIgUAKg");
	this.shape_580.setTransform(625.2,382.6);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#D98D3B").s().p("AgKgDIAUgLIgDAVIgRAIg");
	this.shape_581.setTransform(625.2,384);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#F3B744").s().p("AhiA4IDChzIAEAJIjIBuQAAgBABAAQAAgBAAgBQAAAAABAAQAAgBAAAAg");
	this.shape_582.setTransform(616.2,387.6);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#EE9A41").s().p("AhiA8IgBAAQgCgEAEgDIDBhzIAFAJIgEAWIi9BdIgCABQgBAAAAAAQgBgBgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_583.setTransform(616.2,387.9);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#DDA73E").s().p("AgMAAIAFgIIAUAMIgKAFg");
	this.shape_584.setTransform(628.7,382.4);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#D98D3B").s().p("AgRgCIAAAAIAUgHIAQAKIgRAJg");
	this.shape_585.setTransform(629.8,381.9);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#F3B744").s().p("ABdBAIi+h3IAFgIIC+B/IgCAAIgDAAg");
	this.shape_586.setTransform(637.2,387.9);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#EE9A41").s().p("ABbBDIi+h3IAGgIIAVgHICqB9QAEADgDADIgBABQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAIgDgBg");
	this.shape_587.setTransform(637.4,387.6);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#A34B31").s().p("AgGASIABgxIALAAIABA/g");
	this.shape_588.setTransform(626.8,383.8);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#B35337").s().p("AgLC/IAGl9IALAAIAGF9g");
	this.shape_589.setTransform(626.7,399.7);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#EA7D3E").s().p("AgCANQgFgCgDgEQgDgFABgEQACgGAEgCQAFgDAEABQAGACACAEQADAFgBAEQgBAFgFADQgEACgDAAIgCAAg");
	this.shape_590.setTransform(567.7,376.2);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#ED8E40").s().p("AgDAQQgGgCgEgGQgEgFACgGQACgHAFgDQAHgEAFACQAHABAEAGQADAGgCAGQgCAHgGADQgDADgEAAIgEgBg");
	this.shape_591.setTransform(567.7,376.2);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#EE9A41").s().p("AgEAUQgIgCgFgHQgFgIACgHQADgJAHgEQAIgEAHACQAIACAFAHQAEAIgBAHQgDAIgIAFQgFADgFAAIgEgBg");
	this.shape_592.setTransform(567.7,376.2);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#DDA73E").s().p("AgGAKIAGgWIAHAIIgEARg");
	this.shape_593.setTransform(567.8,374.7);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#D98D3B").s().p("AADASIgMgSIAGgSIANAOIgHAWg");
	this.shape_594.setTransform(566.8,373.9);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#F3B744").s().p("AggBtIA/jcQABABAAAAQAAABABAAQAAABAAABQAAAAgBABIg2Dag");
	this.shape_595.setTransform(570.4,364.8);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#EE9A41").s().p("AgZBuIgNgSIBDjIQABgEAEABIABAAQAFACgBAEIg2Dag");
	this.shape_596.setTransform(569.7,364.7);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#DDA73E").s().p("AgKAAIAPgJIAGAJIgVAKg");
	this.shape_597.setTransform(566.1,377.2);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#D98D3B").s().p("AgKgDIAVgLIgEAVIgRAIg");
	this.shape_598.setTransform(566.1,378.6);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#F3B744").s().p("AhhA4IDAhzIAGAJIjJBuQAAgBAAAAQABgBAAgBQAAAAABAAQAAgBABAAg");
	this.shape_599.setTransform(557.1,382.2);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#EE9A41").s().p("AhjA8IAAAAQgCgFAEgCIDAhzIAGAJIgEAWIi9BdIgDABQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_600.setTransform(557.1,382.5);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#DDA73E").s().p("AgMAAIAGgIIATAMIgKAFg");
	this.shape_601.setTransform(569.5,377.1);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#D98D3B").s().p("AgSgCIAVgHIAPAKIgRAJg");
	this.shape_602.setTransform(570.7,376.5);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#F3B744").s().p("ABeBAIi/h2IAFgJIC+B/IgCAAIgCAAg");
	this.shape_603.setTransform(578.1,382.5);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#EE9A41").s().p("ABcBDIi/h2IAGgJIAVgHICqB9QAEADgDADIgBABQAAABgBAAQAAABgBAAQAAABAAAAQgBAAAAAAIgDgBg");
	this.shape_604.setTransform(578.2,382.2);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#A34B31").s().p("AgGASIAAgxIAMAAIABA/g");
	this.shape_605.setTransform(567.6,378.4);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#B35337").s().p("AgKC/IAEl9IAMAAIAFF9g");
	this.shape_606.setTransform(567.6,394.3);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#C2C4C6").s().p("AALFAQgGgDgagbIhJprIC9J8QgRAQgWAFQgIACgGAAQgRAAgOgKg");
	this.shape_607.setTransform(223.4,182.3);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#D3D5D6").s().p("ABRE8QgagagPgMQgVgQgbACQgNAAgkAJQg9AQgbgmQgGgIgHgVQgIgXgFgIICaoHIC9J8QgQAQgXAEIgNABQgVAAgSgNg");
	this.shape_608.setTransform(215.7,182.2);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#ABADB0").s().p("AhtanMgGNg1NMAP1A1Ng");
	this.shape_609.setTransform(264.6,319.7);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#C7C8CA").s().p("Av0anMAP0g1NMAP1A1Ng");
	this.shape_610.setTransform(214,319.7);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#C2C4C6").s().p("AAtFjQgPgDgTgGIghgKIhHq1IC7LLIgNAAQgTAAgRgDg");
	this.shape_611.setTransform(292.1,49.5);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#D3D5D6").s().p("AhMFgIgxgdIC0qvIBHK1QgYgHgSgBQgWgBgUAIQgKAEgbASQgUAOgTABIgBAAQgPAAgagNg");
	this.shape_612.setTransform(277.2,50.2);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#ABADB0").s().p("AhteKMgGMg8TMAPzA8Tg");
	this.shape_613.setTransform(333.3,206.7);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#C7C8CA").s().p("Av0eKMAP0g8TMAP1A8Tg");
	this.shape_614.setTransform(282.7,206.7);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#69B6C9").s().p("EgPxAugMAAAhc/IfjAAQq6ICmMMAQmaMaAAODQAAOEGaMaQGMMAK6ICg");
	this.shape_615.setTransform(101,297.6);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#69B6C9").s().p("EgPxAugQK6oCGMsAQGasaAAuEQAAuDmasaQmMsAq6oCIfjAAMAAABc/g");
	this.shape_616.setTransform(740.8,297.6);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#69B6C9").s().p("EhBwACXIAAktMCDhAAAIAAEtg");
	this.shape_617.setTransform(420.9,580.1);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#6AB7CA").s().p("EhBwAC2IAAlrMCDhAAAIAAFrg");
	this.shape_618.setTransform(420.9,577.1);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#6BB7CA").s().p("EhBwADVIAAmpMCDhAAAIAAGpg");
	this.shape_619.setTransform(420.9,574);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#6CB8CB").s().p("EhBwAD0IAAnmMCDhAAAIAAHmg");
	this.shape_620.setTransform(420.9,570.9);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#6DB8CB").s().p("EhBwAESIAAojMCDhAAAIAAIjg");
	this.shape_621.setTransform(420.9,567.8);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#6FB9CC").s().p("EhBwAExIAAphMCDhAAAIAAJhg");
	this.shape_622.setTransform(420.9,564.8);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#70B9CC").s().p("EhBwAFQIAAqfMCDhAAAIAAKfg");
	this.shape_623.setTransform(420.9,561.7);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#71BACC").s().p("EhBwAFuIAArbMCDhAAAIAALbg");
	this.shape_624.setTransform(420.9,558.6);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#72BACD").s().p("EhBwAGNIAAsZMCDhAAAIAAMZg");
	this.shape_625.setTransform(420.9,555.6);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#73BBCD").s().p("EhBwAGsIAAtXMCDhAAAIAANXg");
	this.shape_626.setTransform(420.9,552.5);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#75BBCE").s().p("EhBwAHLIAAuVMCDhAAAIAAOVg");
	this.shape_627.setTransform(420.9,549.4);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#76BCCE").s().p("EhBwAHpIAAvRMCDhAAAIAAPRg");
	this.shape_628.setTransform(420.9,546.3);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#77BDCF").s().p("EhBwAIIIAAwPMCDhAAAIAAQPg");
	this.shape_629.setTransform(420.9,543.3);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#78BDCF").s().p("EhBwAInIAAxMMCDhAAAIAARMg");
	this.shape_630.setTransform(420.9,540.2);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#79BED0").s().p("EhBwAJFIAAyJMCDhAAAIAASJg");
	this.shape_631.setTransform(420.9,537.1);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#7ABED0").s().p("EhBwAJkIAAzHMCDhAAAIAATHg");
	this.shape_632.setTransform(420.9,534.1);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#7BBFD0").s().p("EhBwAKDIAA0FMCDhAAAIAAUFg");
	this.shape_633.setTransform(420.9,531);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#7DBFD1").s().p("EhBwAKiIAA1DMCDhAAAIAAVDg");
	this.shape_634.setTransform(420.9,527.9);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#7EC0D1").s().p("EhBwALAIAA1/MCDhAAAIAAV/g");
	this.shape_635.setTransform(420.9,524.9);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#7FC0D2").s().p("EhBwALfIAA29MCDhAAAIAAW9g");
	this.shape_636.setTransform(420.9,521.8);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#80C1D2").s().p("EhBwAL+IAA36MCDhAAAIAAX6g");
	this.shape_637.setTransform(420.9,518.7);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#81C1D3").s().p("EhBwAMcIAA43MCDhAAAIAAY3g");
	this.shape_638.setTransform(420.9,515.6);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#82C2D3").s().p("EhBwAM7IAA51MCDhAAAIAAZ1g");
	this.shape_639.setTransform(420.9,512.6);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#83C2D4").s().p("EhBwANaIAA6zMCDhAAAIAAazg");
	this.shape_640.setTransform(420.9,509.5);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#85C3D4").s().p("EhBwAN4IAA7vMCDhAAAIAAbvg");
	this.shape_641.setTransform(420.9,506.4);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#86C4D5").s().p("EhBwAOXIAA8tMCDhAAAIAActg");
	this.shape_642.setTransform(420.9,503.4);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#87C4D5").s().p("EhBwAO2IAA9rMCDhAAAIAAdrg");
	this.shape_643.setTransform(420.9,500.3);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#88C5D6").s().p("EhBwAPVIAA+pMCDhAAAIAAepg");
	this.shape_644.setTransform(420.9,497.2);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#89C5D6").s().p("EhBwAPzIAA/lMCDhAAAIAAflg");
	this.shape_645.setTransform(420.9,494.1);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#8AC6D7").s().p("EhBwAQSMAAAggjMCDhAAAMAAAAgjg");
	this.shape_646.setTransform(420.9,491.1);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#8BC6D7").s().p("EhBwAQxMAAAghgMCDhAAAMAAAAhgg");
	this.shape_647.setTransform(420.9,488);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#8DC7D8").s().p("EhBwARPMAAAgidMCDhAAAMAAAAidg");
	this.shape_648.setTransform(420.9,484.9);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#8EC8D8").s().p("EhBwARuMAAAgjbMCDhAAAMAAAAjbg");
	this.shape_649.setTransform(420.9,481.9);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#8FC8D9").s().p("EhBwASNMAAAgkZMCDhAAAMAAAAkZg");
	this.shape_650.setTransform(420.9,478.8);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#90C9D9").s().p("EhBwASsMAAAglXMCDhAAAMAAAAlXg");
	this.shape_651.setTransform(420.9,475.7);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#91C9DA").s().p("EhBwATKMAAAgmTMCDhAAAMAAAAmTg");
	this.shape_652.setTransform(420.9,472.7);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#92CADA").s().p("EhBwATpMAAAgnRMCDhAAAMAAAAnRg");
	this.shape_653.setTransform(420.9,469.6);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#94CBDA").s().p("EhBwAUIMAAAgoOMCDhAAAMAAAAoOg");
	this.shape_654.setTransform(420.9,466.5);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#95CBDB").s().p("EhBwAUmMAAAgpLMCDhAAAMAAAApLg");
	this.shape_655.setTransform(420.9,463.4);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#96CCDB").s().p("EhBwAVFMAAAgqJMCDhAAAMAAAAqJg");
	this.shape_656.setTransform(420.9,460.4);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#97CCDC").s().p("EhBwAVkMAAAgrHMCDhAAAMAAAArHg");
	this.shape_657.setTransform(420.9,457.3);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#98CDDC").s().p("EhBwAWCMAAAgsDMCDhAAAMAAAAsDg");
	this.shape_658.setTransform(420.9,454.2);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#99CDDD").s().p("EhBwAWhMAAAgtBMCDhAAAMAAAAtBg");
	this.shape_659.setTransform(420.9,451.2);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#9BCEDD").s().p("EhBwAXAMAAAgt/MCDhAAAMAAAAt/g");
	this.shape_660.setTransform(420.9,448.1);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#9CCFDE").s().p("EhBwAXfMAAAgu9MCDhAAAMAAAAu9g");
	this.shape_661.setTransform(420.9,445);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#9DCFDE").s().p("EhBwAX9MAAAgv5MCDhAAAMAAAAv5g");
	this.shape_662.setTransform(420.9,441.9);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#9ED0DF").s().p("EhBwAYcMAAAgw3MCDhAAAMAAAAw3g");
	this.shape_663.setTransform(420.9,438.9);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#9FD0DF").s().p("EhBwAY7MAAAgx0MCDhAAAMAAAAx0g");
	this.shape_664.setTransform(420.9,435.8);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#A0D1E0").s().p("EhBwAZZMAAAgyxMCDhAAAMAAAAyxg");
	this.shape_665.setTransform(420.9,432.7);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#A2D2E0").s().p("EhBwAZ4MAAAgzvMCDhAAAMAAAAzvg");
	this.shape_666.setTransform(420.9,429.7);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#A3D2E1").s().p("EhBwAaXMAAAg0tMCDhAAAMAAAA0tg");
	this.shape_667.setTransform(420.9,426.6);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#A4D3E1").s().p("EhBwAa2MAAAg1rMCDhAAAMAAAA1rg");
	this.shape_668.setTransform(420.9,423.5);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#A5D3E2").s().p("EhBwAbUMAAAg2nMCDhAAAMAAAA2ng");
	this.shape_669.setTransform(420.9,420.5);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#A6D4E2").s().p("EhBwAbzMAAAg3lMCDhAAAMAAAA3lg");
	this.shape_670.setTransform(420.9,417.4);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#A7D5E3").s().p("EhBwAcSMAAAg4iMCDhAAAMAAAA4ig");
	this.shape_671.setTransform(420.9,414.3);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#A9D5E3").s().p("EhBwAcwMAAAg5fMCDhAAAMAAAA5fg");
	this.shape_672.setTransform(420.9,411.2);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#AAD6E4").s().p("EhBwAdPMAAAg6dMCDhAAAMAAAA6dg");
	this.shape_673.setTransform(420.9,408.2);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#ABD6E4").s().p("EhBwAduMAAAg7bMCDhAAAMAAAA7bg");
	this.shape_674.setTransform(420.9,405.1);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#ACD7E5").s().p("EhBwAeMMAAAg8XMCDhAAAMAAAA8Xg");
	this.shape_675.setTransform(420.9,402);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#ADD8E5").s().p("EhBwAerMAAAg9VMCDhAAAMAAAA9Vg");
	this.shape_676.setTransform(420.9,399);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#AED8E6").s().p("EhBwAfKMAAAg+TMCDhAAAMAAAA+Tg");
	this.shape_677.setTransform(420.9,395.9);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#B0D9E6").s().p("EhBwAfpMAAAg/RMCDhAAAMAAAA/Rg");
	this.shape_678.setTransform(420.9,392.8);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#B1DAE7").s().p("EhBwAgHMAAAhANMCDhAAAMAAABANg");
	this.shape_679.setTransform(420.9,389.7);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#B2DAE7").s().p("EhBwAgmMAAAhBLMCDhAAAMAAABBLg");
	this.shape_680.setTransform(420.9,386.7);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#B3DBE8").s().p("EhBwAhFMAAAhCIMCDhAAAMAAABCIg");
	this.shape_681.setTransform(420.9,383.6);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#B4DBE8").s().p("EhBwAhjMAAAhDFMCDhAAAMAAABDFg");
	this.shape_682.setTransform(420.9,380.5);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#B6DCE9").s().p("EhBwAiCMAAAhEDMCDhAAAMAAABEDg");
	this.shape_683.setTransform(420.9,377.5);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#B7DDEA").s().p("EhBwAihMAAAhFBMCDhAAAMAAABFBg");
	this.shape_684.setTransform(420.9,374.4);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#B8DDEA").s().p("EhBwAjAMAAAhF/MCDhAAAMAAABF/g");
	this.shape_685.setTransform(420.9,371.3);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#B9DEEB").s().p("EhBwAjeMAAAhG7MCDhAAAMAAABG7g");
	this.shape_686.setTransform(420.9,368.3);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#BADFEB").s().p("EhBwAj9MAAAhH5MCDhAAAMAAABH5g");
	this.shape_687.setTransform(420.9,365.2);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#BCDFEC").s().p("EhBwAkcMAAAhI2MCDhAAAMAAABI2g");
	this.shape_688.setTransform(420.9,362.1);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#BDE0EC").s().p("EhBwAk6MAAAhJzMCDhAAAMAAABJzg");
	this.shape_689.setTransform(420.9,359);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#BEE1ED").s().p("EhBwAlZMAAAhKxMCDhAAAMAAABKxg");
	this.shape_690.setTransform(420.9,356);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#BFE1EE").s().p("EhBwAl4MAAAhLvMCDhAAAMAAABLvg");
	this.shape_691.setTransform(420.9,352.9);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#C1E2EE").s().p("EhBwAmWMAAAhMrMCDhAAAMAAABMrg");
	this.shape_692.setTransform(420.9,349.8);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#C2E3EF").s().p("EhBwAm1MAAAhNpMCDhAAAMAAABNpg");
	this.shape_693.setTransform(420.9,346.8);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#C3E3EF").s().p("EhBwAnUMAAAhOnMCDhAAAMAAABOng");
	this.shape_694.setTransform(420.9,343.7);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#C4E4F0").s().p("EhBwAnzMAAAhPlMCDhAAAMAAABPlg");
	this.shape_695.setTransform(420.9,340.6);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#C5E5F1").s().p("EhBwAoRMAAAhQhMCDhAAAMAAABQhg");
	this.shape_696.setTransform(420.9,337.5);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#C7E6F1").s().p("EhBwAowMAAAhRfMCDhAAAMAAABRfg");
	this.shape_697.setTransform(420.9,334.5);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#C8E6F2").s().p("EhBwApPMAAAhScMCDhAAAMAAABScg");
	this.shape_698.setTransform(420.9,331.4);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#C9E7F3").s().p("EhBwAptMAAAhTZMCDhAAAMAAABTZg");
	this.shape_699.setTransform(420.9,328.3);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#CBE8F3").s().p("EhBwAqMMAAAhUXMCDhAAAMAAABUXg");
	this.shape_700.setTransform(420.9,325.3);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#CCE9F4").s().p("EhBwAqrMAAAhVVMCDhAAAMAAABVVg");
	this.shape_701.setTransform(420.9,322.2);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#CDE9F5").s().p("EhBwArKMAAAhWTMCDhAAAMAAABWTg");
	this.shape_702.setTransform(420.9,319.1);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#CFEAF6").s().p("EhBwAroMAAAhXPMCDhAAAMAAABXPg");
	this.shape_703.setTransform(420.9,316.1);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#D0EBF7").s().p("EhBwAsHMAAAhYNMCDhAAAMAAABYNg");
	this.shape_704.setTransform(420.9,313);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#D1ECF8").s().p("EhBwAsmMAAAhZKMCDhAAAMAAABZKg");
	this.shape_705.setTransform(420.9,309.9);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#D3EDF9").s().p("EhBwAtEMAAAhaHMCDhAAAMAAABaHg");
	this.shape_706.setTransform(420.9,306.8);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#D4EEFA").s().p("EhBwAtjMAAAhbFMCDhAAAMAAABbFg");
	this.shape_707.setTransform(420.9,303.8);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#D6EFFB").s().p("EhBwAuCMAAAhcDMCDhAAAMAAABcDg");
	this.shape_708.setTransform(420.9,300.7);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#D7F0FC").s().p("EhBwAugMAAAhc/MCDhAAAMAAABc/g");
	this.shape_709.setTransform(420.9,297.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MC_2_Content, new cjs.Rectangle(0,0,841.9,595.3), null);


(lib.MC_1_Content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FEC435","#E6213C"],[0,1],0,0,0,0,0,5.5).s().p("AgmAnQgQgQAAgXQAAgWAQgQQAQgQAWAAQAXAAAQAQQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape.setTransform(490.4,145.9,1.86,1.861);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FEC435","#E6213C"],[0,1],0,0,0,0,0,5.5).s().p("AgmAnQgQgQAAgXQAAgWAQgQQAQgQAWAAQAXAAAQAQQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_1.setTransform(114.3,145.9,1.86,1.861);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgGAHQgBgKAEgOIAEgMIADALQADANAAAJQAAAMgHAOQgDgFgDgSg");
	this.shape_2.setTransform(301.9,90.8,1.86,1.861);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgtAzQgTgOACgZQABgZASgOQAKgHAagCQAYgBAKgJQAGgJAJgCQAJAAAHAGQAGAHAAAJQgBALgIAIIgQANQgTAMgMAWQgIAPgEADQgLAJgKAAQgKAAgKgHg");
	this.shape_3.setTransform(376.1,57.4,1.86,1.861);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgtA2QgKgFgEgNQgDgLACgMQADgaAYgUQANgJAPgGQARgIAOACQAXgEAJAZQAKAZgTANQgJAGgOACIgTAEQgHADgEAHIgIAMQgGAKgIAEQgFADgFAAQgFAAgEgCg");
	this.shape_4.setTransform(473.2,108.4,1.86,1.861);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgjBdQgIgOAEgRIAKgkQAGgUgCgQIgMgrQgIgaAKgRQAGgJAJgFQAKgFAKACIAAABQAEgDAFACQAPAGAHASQAGAPgCASQgBAPgGAXQgDATAGATIAHAWQAEANgBAKQgDAfgcAOQgKAFgHAAQgRAAgLgWg");
	this.shape_5.setTransform(433.6,84.5,1.86,1.861);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AhHBhQgGgEADgHQAUgvAIgzQAFgiAMgQQAQgYAegHQARgHAQADQAQAEAFANQAFAHAAAOQgBAPgNAPQgIAIgTAPQgrAgg0BEQgDAFgEAAIgEgCg");
	this.shape_6.setTransform(436.5,142.6,1.86,1.861);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AAUBoQgQgLgLgeQgLgigHgOQgbgogOgeQgag6ArAEQAQACAPARQAJAMAMAYIAbAcQAPARAIANQAgA4gMAdQgGAQgRAEIgJABQgLAAgKgGg");
	this.shape_7.setTransform(503.4,309.1,1.86,1.861);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AAAAEQgDAAAAgEQAAgDADAAIAAAAQAFAAAAADQAAAEgFAAg");
	this.shape_8.setTransform(549,102.1,1.86,1.861);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_9.setTransform(548.9,98.1,1.86,1.861);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_10.setTransform(538.4,103.1,1.86,1.861);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_11.setTransform(535.8,114.9,1.86,1.861);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_12.setTransform(540.7,114.5,1.86,1.861);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AgDABIAAgBQAAgEADAAQAEAAAAAEIAAABQAAADgEAAQgDAAAAgDg");
	this.shape_13.setTransform(548.1,107.5,1.86,1.861);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_14.setTransform(540.5,110.7,1.86,1.861);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_15.setTransform(554,94.5,1.86,1.861);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_16.setTransform(552,96.7,1.86,1.861);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgDABIAAgBQAAgEADAAQAEAAAAAEIAAABQAAADgEAAQgDAAAAgDg");
	this.shape_17.setTransform(530.4,107.5,1.86,1.861);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_18.setTransform(528.5,109.2,1.86,1.861);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AAAAEQgDAAgBgEQABgDADAAIABAAQADAAAAADQAAAEgDAAg");
	this.shape_19.setTransform(542.5,112.2,1.86,1.861);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_20.setTransform(532.7,106.5,1.86,1.861);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_21.setTransform(537.7,113.2,1.86,1.861);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_22.setTransform(544.7,109.4,1.86,1.861);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_23.setTransform(545.3,94.3,1.86,1.861);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_24.setTransform(550.4,99.8,1.86,1.861);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AAFAxQgFgDgCgHIgGgLQgJgRgXgQQgMgIgEgFQgHgIABgLQABgJAFgFQAGgGAJAAQAJACAGAJQAKAJAYABQAaACAKAHQAJAHAGAMQAFAKAAAMQAAAZgTANQgKAGgJAAQgLAAgKgJg");
	this.shape_25.setTransform(228.2,57.4,1.86,1.861);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("AAfA2QgHgCgJgKQgIgNgFgFQgHgIgMgCQgPgCgFgCQgLgEgGgHQgMgRALgUQALgUAUAEQAUgEAYAOQAWANALASQALARgDAbQgDAZgSAAIgJgCg");
	this.shape_26.setTransform(130.8,108.4,1.86,1.861);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AgLBtQgegRABghQAAgJAEgNIAIgXQAEgPgEgUIgHgkQgBgSAGgPQAHgRAPgGQAEgCAEACIAEAAQAUgCAMAUQAKASgJAhQgMArAAAGQAAAKALAiQAIAbgIARQgLAWgRAAQgIAAgLgGg");
	this.shape_27.setTransform(170.6,84.5,1.86,1.861);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AA9BeQg0hDgvgkQgRgOgHgIQgMgOgBgOQgBgOAGgHQAFgNARgEQAPgCARAGQAeAHAQAYQAIALAEAPQACAJADAUQAGAoAWA1QADAHgGAEIgEABQgEAAgDgEg");
	this.shape_28.setTransform(167.8,142.7,1.86,1.861);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("AgzBsQgPgFgGgOQgNgeAkg8QAIgMAPgRQASgRAIgKQALgXAJgLQAOgRAQgBQArgEgaA5QgOAegbApQgGANgNAlQgMAggSAJQgIAEgJAAQgFAAgGgCg");
	this.shape_29.setTransform(100.8,309.2,1.86,1.861);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231F20").s().p("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");
	this.shape_30.setTransform(300.9,410.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231F20").s().p("AgJBDQgBABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgSgFgLgPQgLgOgDgTQgFgpArgnQAFgEAFACQAEACAAAFQABABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgRAZAJAxIADADIAFAEQAOAEAEgaQADgLAAgMQgBgNgDgLQgDgHgFgFQgCgDAEgCQABgEAEgCQAFgCAEAEQArAngFApQgCATgMAOQgMAPgRAFQgBABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgGACgFAAQgEAAgFgCg");
	this.shape_31.setTransform(302.1,94.2,1.86,1.861);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231F20").s().p("AAAAEQgDAAAAgEQAAgDADAAIABAAQADAAAAADQAAAEgDAAg");
	this.shape_32.setTransform(55.3,102.1,1.86,1.861);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#231F20").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_33.setTransform(55.3,98.1,1.86,1.861);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#231F20").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_34.setTransform(65.8,103.1,1.86,1.861);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#231F20").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_35.setTransform(68.5,114.9,1.86,1.861);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#231F20").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_36.setTransform(63.5,114.5,1.86,1.861);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#231F20").s().p("AgDABIAAgBQAAgEADAAQAEAAAAAEIAAABQAAADgEAAQgDAAAAgDg");
	this.shape_37.setTransform(56.1,107.5,1.86,1.861);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#231F20").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_38.setTransform(63.7,110.7,1.86,1.861);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#231F20").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_39.setTransform(50.2,94.5,1.86,1.861);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#231F20").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_40.setTransform(52.3,96.7,1.86,1.861);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#231F20").s().p("AgDABIAAgBQAAgEADAAQAEAAAAAEIAAABQAAADgEAAQgDAAAAgDg");
	this.shape_41.setTransform(73.8,107.5,1.86,1.861);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#231F20").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_42.setTransform(75.7,109.2,1.86,1.861);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#231F20").s().p("AAAAEQgDAAAAgEQAAgDADAAIAAAAQAEAAAAADQAAAEgEAAg");
	this.shape_43.setTransform(61.7,112.2,1.86,1.861);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#231F20").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_44.setTransform(71.5,106.5,1.86,1.861);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#231F20").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_45.setTransform(66.6,113.2,1.86,1.861);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#231F20").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_46.setTransform(59.5,109.4,1.86,1.861);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#231F20").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_47.setTransform(59,94.3,1.86,1.861);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#231F20").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_48.setTransform(53.8,99.8,1.86,1.861);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("EgX3AhBMAAAhCBMAvvAAAMAAABCBg");
	this.shape_49.setTransform(300.8,410.2,1.86,1.861);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F0AB47").s().p("EgZMAidMAAAhE5MAyYAAAMAAABE5g");
	this.shape_50.setTransform(300,410.2,1.86,1.861);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MC_1_Content, new cjs.Rectangle(0,0,600,820.5), null);


(lib.btnCreate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCFF66").s().p("AvnCWIAAkrIfPAAIAAErg");
	this.shape.setTransform(100,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnCreate, new cjs.Rectangle(0,0,200,30), null);


(lib.MC_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.instance = new lib.MC_2_Content();
	this.instance.parent = this;
	this.instance.setTransform(421,297.7,0.247,0.247,0,0,0,420.9,297.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.MC_2, new cjs.Rectangle(317,224.2,207.9,147), null);


(lib.MC_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.instance = new lib.MC_1_Content();
	this.instance.parent = this;
	this.instance.setTransform(80.7,110.3,0.5,0.5,0,0,0,161.3,220.5);
	this.instance.cache(-2,-2,604,825);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.MC_1, new cjs.Rectangle(0,0,300,410.3), null);


(lib.Heartbeat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// progress
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.5,10,0.002,1,0,0,0,-324.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-325,scaleX:1,x:0},59).wait(1));

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EgyxABkIAAjHMBljAAAIAADHg");
	this.shape.setTransform(325,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,0,650.5,20);


// stage content:
(lib.GarbageCollection = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var sym = this;
		
		AC.Debug.enableFpsMeter(this);
		
		sym.btnCreate.on('click', function(evt) {
			for(var i=0; i<10; i++) {
				var mc = new lib.MC_1();
				mc.x = i * 20;
				mc.y = i * 20;
				sym.addChild(mc);
				sym['genMc'+i] = mc;
			}
		});
		
		
		sym.btnCleanup.on('click', function(evt) {
			for(var mc_i=1; mc_i<=8; mc_i++) {
				var mc = sym['mc'+mc_i];
				if (mc) {
					AC.destroy(mc, sym);
				}
			}
		});
		
		
		sym.btnCleanupDynamic.on('click', function(evt) {
			for(var i=0; i<10; i++) {
				AC.destroy(sym['genMc'+i], sym);
				//console.log( "removeChild() ", 'genMc'+i, sym.removeChild( sym['genMc'+i] ) );
			}
		});
		
		
		
		sym.btnAllocate.on('click', function(evt) {
			for(var i=0; i<1; i++) {
				var mc = new lib.MC_2();
				mc.x = 400 + i * 20;
				mc.y = 200 + i * 20;
				sym.addChild(mc);
			}
		});
		
		
		sym.btnPureStart.on('click', function(evt) {
			window.aPool = {
				TestObject: function() {
					this.a = "b";
				}
			}
			
			for(var i=0; i<66; i++) {
				window['testObject'+i] = new window.aPool.TestObject();
			}
		});
		
		
		
		sym.btnPureClean.on('click', function(evt) {
			for(var i=0; i<66; i++) {
				window['testObject'+i] = null;
			}
		});
		
		
		
		
		
		
		
		
		
		
		/**
		 * Destroy
		 * parent is necessary if mc was created on a timeline but anim sequence is NOT active anymore and it's not connected to it's parent anymore. we need it to clean up tweens for garbage collection
		 * @QUESTION: What if parent w/ timeline gets deleted? Does problem still exist?
		 */
		/*
		function destroyR(sym, pParent) {
			//console.log( "children: ", sym.children );
			//console.log("sym id", AC(sym).getId());
			
			var parent =  sym.parent || pParent;
		
			// Remove tweens from parent (tweens hold references to symbols and prevent garbage collection)
			if (parent) {
				
				var timeline = parent.timeline;
				//console.log("timeline", timeline);
				for (var t_i=0; t_i<timeline._tweens.length; t_i++) {
					var tween = timeline._tweens[t_i];
					//console.log("Tween: ", tween);
					if (tween.target == sym) {
					//if (tween.target == mc) {
						//console.log(" 2 matching tween found...", tween.target);
						timeline.removeTween(tween);
						tween.removeAllEventListeners();
						tween.removeAllTweens && tween.removeAllTweens();
						tween.target = null;
						tween = null;						
					}
					timeline[t_i] = null;
					//console.log(" 2 removed from timeline: ", t_i);
				}	
				
			}
				
			// Remove childs recursively
			for (var i=0; i<sym.children.length; i++) {
				var child = sym.children[i];
				//console.log("child: ", child);
		
				// Recursive
				child.children && child.children.length && destroyR(child, null);
				
				// Destroy if end of line
				child.removeAllEventListeners();
				child.removeAllChildren && child.removeAllChildren(); // Does this make sense? there shouldn't be any children here
				child.parent && child.parent.removeChild(child);
				child = null;
				delete child;
			}
			
			// Remove id on parent
			if (pParent) {
				// id cannot be calculated if sym is not in display list anymore (e.g. track ended on timeline)
				var id = AC(sym).getId();
				if (!id) {
				  for (var p in pParent) {
					if (parent.hasOwnProperty(p)) {
					  if (pParent[p] === sym) {
						id = p;
					  }
					}
				  }
				}
		
				console.log("removing: ", id, ", from: ", pParent);
				
				pParent.removeChild(sym);
				pParent[ id ] = null;
			}
		}
		*/
	}
	this.frame_304 = function() {
		this.stop();
		console.log("[ STAGE ] stopped");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(304).call(this.frame_304).wait(1));

	// Layer 3
	this.btnPureClean = new lib.btnCreate();
	this.btnPureClean.parent = this;
	this.btnPureClean.setTransform(777.2,564.9,1,1,0,0,0,100,15);

	this.btnPureStart = new lib.btnCreate();
	this.btnPureStart.parent = this;
	this.btnPureStart.setTransform(777.2,524.9,1,1,0,0,0,100,15);

	this.btnCleanup = new lib.btnCreate();
	this.btnCleanup.parent = this;
	this.btnCleanup.setTransform(777.2,162.7,1,1,0,0,0,100,15);

	this.btnCreate = new lib.btnCreate();
	this.btnCreate.parent = this;
	this.btnCreate.setTransform(777.2,100.7,1,1,0,0,0,100,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnCreate},{t:this.btnCleanup},{t:this.btnPureStart},{t:this.btnPureClean}]}).wait(305));

	// btnAllocate
	this.btnAllocate = new lib.btnCreate();
	this.btnAllocate.parent = this;
	this.btnAllocate.setTransform(777.2,293,1,1,0,0,0,100,15);

	this.btnCleanupDynamic = new lib.btnCreate();
	this.btnCleanupDynamic.parent = this;
	this.btnCleanupDynamic.setTransform(777.2,223,1,1,0,0,0,100,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnCleanupDynamic},{t:this.btnAllocate}]}).wait(305));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("Egq9AH0IAAvnMBV7AAAIAAPng");
	this.shape.setTransform(900,0,0.455,9,0,0,0,275,-50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(305));

	// Layer 5
	this.instance = new lib.Heartbeat();
	this.instance.parent = this;
	this.instance.setTransform(325,10,1,1,0,0,0,325,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(305));

	// Layer 7
	this.instance_1 = new lib.MC_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(487,164.4,1,1,0,0,0,420.9,297.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(305));

	// Layer 1 copy 7
	this.mc1 = new lib.MC_1();
	this.mc1.parent = this;
	this.mc1.setTransform(174.2,311.5,1,1,0,0,0,161.2,220.5);

	this.timeline.addTween(cjs.Tween.get(this.mc1).wait(48).to({y:316.3},0).to({y:569.5},108).to({_off:true},1).wait(148));

	// Layer 1 copy 6
	this.mc2 = new lib.MC_1();
	this.mc2.parent = this;
	this.mc2.setTransform(174.2,311.5,1,1,0,0,0,161.2,220.5);

	this.timeline.addTween(cjs.Tween.get(this.mc2).wait(45).to({y:316.3},0).to({y:569.5},109).to({_off:true},1).wait(150));

	// Layer 1 copy 5
	this.mc3 = new lib.MC_1();
	this.mc3.parent = this;
	this.mc3.setTransform(174.2,311.5,1,1,0,0,0,161.2,220.5);

	this.timeline.addTween(cjs.Tween.get(this.mc3).wait(42).to({y:316.3},0).to({y:569.5},109).to({_off:true},1).wait(153));

	// Layer 1 copy 4
	this.mc4 = new lib.MC_1();
	this.mc4.parent = this;
	this.mc4.setTransform(174.2,311.5,1,1,0,0,0,161.2,220.5);

	this.timeline.addTween(cjs.Tween.get(this.mc4).wait(39).to({y:316.3},0).to({y:569.5},109).to({_off:true},1).wait(156));

	// Layer 1 copy 3
	this.mc5 = new lib.MC_1();
	this.mc5.parent = this;
	this.mc5.setTransform(174.2,311.5,1,1,0,0,0,161.2,220.5);

	this.timeline.addTween(cjs.Tween.get(this.mc5).wait(36).to({y:316.3},0).to({y:569.5},109).to({_off:true},1).wait(159));

	// Layer 1 copy 2
	this.mc6 = new lib.MC_1();
	this.mc6.parent = this;
	this.mc6.setTransform(174.2,311.5,1,1,0,0,0,161.2,220.5);

	this.timeline.addTween(cjs.Tween.get(this.mc6).wait(33).to({y:316.3},0).to({y:569.5},109).to({_off:true},1).wait(162));

	// Layer 1 copy
	this.mc7 = new lib.MC_1();
	this.mc7.parent = this;
	this.mc7.setTransform(174.2,311.5,1,1,0,0,0,161.2,220.5);

	this.timeline.addTween(cjs.Tween.get(this.mc7).wait(30).to({y:316.3},0).to({y:569.5},109).to({_off:true},1).wait(165));

	// Layer 1
	this.mc8 = new lib.MC_1();
	this.mc8.parent = this;
	this.mc8.setTransform(174.2,311.5,1,1,0,0,0,161.2,220.5);

	this.timeline.addTween(cjs.Tween.get(this.mc8).wait(27).to({y:316.3},0).to({y:569.5},109).to({_off:true},1).wait(168));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(449.5,450,900.5,900);
// library properties:
lib.properties = {
	width: 900,
	height: 900,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;