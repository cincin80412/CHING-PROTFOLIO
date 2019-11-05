(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[0,283,147,50],[149,289,145,28],[0,187,94,94],[178,148,139,139],[96,187,31,32],[129,221,31,30],[96,221,31,31],[129,187,30,32],[178,0,144,146],[0,0,176,185]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
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



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,900);


(lib.btn = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.GENIUS = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._new = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.new_2 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.st1 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.st2 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.st3 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.st4 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.t1 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.t2 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(9);
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


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.t2();
	this.instance.parent = this;
	this.instance.setTransform(-44,-46.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-44,-46.2,88,92.5), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.t1();
	this.instance.parent = this;
	this.instance.setTransform(-36,-36.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-36,-36.5,72,73), null);


(lib.st4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.st4();
	this.instance.parent = this;
	this.instance.setTransform(-7.5,-8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.st4_1, new cjs.Rectangle(-7.5,-8,15,16), null);


(lib.st3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.st3();
	this.instance.parent = this;
	this.instance.setTransform(-7.7,-7.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.st3_1, new cjs.Rectangle(-7.7,-7.7,15.5,15.5), null);


(lib.st2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.st2();
	this.instance.parent = this;
	this.instance.setTransform(-7.7,-7.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.st2_1, new cjs.Rectangle(-7.7,-7.5,15.5,15), null);


(lib.st1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.st1();
	this.instance.parent = this;
	this.instance.setTransform(-7.7,-8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.st1_1, new cjs.Rectangle(-7.7,-8,15.5,16), null);


(lib.ss8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglBzQgLgBgGgHQgGgGAAgLIAAgXQAAgPgBgFIAZAEQAFABAAADQAAADgEACIgFACIAAAZQAAAIAKACQAJACAdAAQAbABAIgDQAGgCACgDIAJgaIAGAAIAAAVQAAAFAEADQAEADAAAFQAAAFgFACQgFAEgMACQgPACgcAAQghAAgNgDgAh1BpQgDgCAAgGQAAgEAFgEIAMgKQAIgJAIgRIAHABQgBARgDALQgDALgFAGQgIAIgJAAQgFAAgDgCgABjBgQgFgKgGgIQgGgJgJgIIAFgGQAWAMALAJQAGAFADAEQACAEAAAEQAAAMgMABQgHgBgEgJgAANBOQgLgOgQgOIADgGQATAFALAHQAKAHAAAIQAAALgLAAQgCAAgDgEgAgmAjQgCgEgRgEIABgGIAVABIAEgBQACgBAAgFIAAgKIg4AAIAAAfQAAAFgEACQgEACgGAAQgGAAAAgGIABgZIAAg6QAAgOgCgEIgCAEIgEADQgCAAgCgFIgFgWIAbgBIAHgKQAGgKAGgOIAXAHQAGABAAADQAAAEgLACQgLAKgKAGIgBABIA2gFIgJgKIAGgEQAPAJAJAGQAIAHAAAHQAAAGgDADQgCADgFAAQgDAAgDgGIgKgPQg2AOgeAFIAAABIAUAKIA2AAIAMgKIAQAOQADACAAADQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABIgGACIAAA3QAAAJgEAGQgDAFgGAEQgHADgGAAQAAgHgCgDgAhVgCIA4AAIAAgRIg4AAgAhVgaIA4AAIAAgTIg4AAgAApArQgNgBgHgFQgHgGAAgKIAAgoQAAgKgCgEIAXAEQAHAAAAAEQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAIgHACIAAARQAkgNASgMIARANQADADAAADQAAAFgDAAIgJgDIg+AKIAAAMQAAAEADADQADACAGAAIAkAAIAJgBQADgBADgDIAMgSIAFABIAAANQAAAGADACQAFAEAAADQAAAGgJACQgOAEgPAAgAAogmQgaAAAAgVIAAgqQAAgLgCgDIAXADQAHABAAAEQAAABAAAAQgBABAAABQAAAAgBAAQAAABgBAAIgHACIAAAUQAigOARgMIARANQADACAAAEQAAAEgDAAIgJgCQgVAFgmAIIAAAJQAAAEADACQADACAFAAIAiAAIAIAAQADgBADgDIALgTIAFABIAAANQAAAHADABQAFAEAAAEQAAAGgJACQgNADgOAAg");
	this.shape.setTransform(-0.5,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ss8, new cjs.Rectangle(-15.5,-15,31,30), null);


(lib.ss7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah3BxQAQAAAOgCQAPgBANgDQANgDALgDQAKgEAJgFQAJgEAIgFIgugLIgJAKQgDADgFAAQgHAAgFgDQgCgEAAgDQATgSAPgTIACgDIgvAAQgPAAgOACIgFgNQARADARAAIA1AAQAJgNAFgLIAWAEQAFACgBADQAAAEgEABIgGADIgFAHIBeAAIAQgSIAVAQQAEADAAADQAAAEgFAAIg5AAQgQAcgIALIgDAEQAjAHAUAGQARAHAAAIQAAAMgNAAQgDAAgLgGQgWgLgngLIgNAIIgWAJIgaAHQgbAFgvAAgAgqBCIA1AIIAEgEQAFgGAGgJQAFgIAFgMIg1AAQgLAPgOAQgAg9AFQAXgHANgIQANgIALgLQAHgJAGgOQAHgMABgQIgVAAIgHAIQgKAKgTAPIgFgGQAPgRAJgPQAJgQAHgRIAWAFQAHABAAAEQAAADgFABIgIACIgKAPIBPAAIAOgMIASAOQADABAAAFQAAADgFABIgGABQgMALgTANIgGgDQAKgPAFgMIgqAAQAFAPAGAJQAMAQARALQAOAJAaAIIgDAHIgIgBIgEACQgDAAgLALQgUgLgMgOQgGgIgEgIQgGgHgCgJIgFgQQgDAKgFAIQgGAPgKAJQgLAKgOAIQgQAJggAIgAhpgCIgKgYQAdgEA3gMIACAFQgdAOglANIgDAJQAAADgDAAQgDAAgBgEgAhxhgQARAEARAAIAMAAIAOgQIASAOQADADAAACQABAEgFAAIgrAAQgPAAgNACg");
	this.shape.setTransform(-0.5,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ss7, new cjs.Rectangle(-15.5,-15,31,30), null);


(lib.ss6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhSB1IgHgbIAagBIAAgoIgCgNIAWADQAGABAAAEQAAADgDABIgEACIAAAHIARAAIAMgOIARANQADACAAADQAAAEgEAAIgtAAIAAAXIAUgCIAcgEIACAGIgVAIIgiAJIgWAFIgDAHQgCAFgDAAQgCAAgBgFgAh5BtQAHgLAGgQQACgJABgOQACgNAAgTIAAgxQAAgMgCgIIATAMIBMAAIAAgNIgCgOIAVAEQAGABAAAEQAAACgDACIgEACIAAAMIBOAAIAOgPIATAOQADACAAADQAAADgEAAIhWAAIAAARIAoAAIALgIIAPAKQACACAAACQAAADgDABIgFADIAAAMIABANQAAADgCACQgDACgFABIAPAKQACACAAAEQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAIgJgBQgNAFgPAEQgKADgTACIAAAKQAAAEADADQADACAFAAIAiAAIAJgBQACgBADgDIAKgXIAHABIAAARQgBAHAEACQAFAFAAADQAAAGgJADQgNADgOAAIgpAAQgbAAAAgXIAAgkQABgLgCgDIAZADQAGABAAAEQAAAEgDAAIgHACIAAAOQAOgEAIgFQANgGAJgLQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgFIidAAQAAAfgJAUQgJASgPAOgAAgAYIApAAIAAgXIgpAAgAgZAYIAnAAIAAgXIgnAAgAhUAYIApAAIAAgXIgpAAgAgZgGIAnAAIAAgRIgnAAgAhUgGIApAAIAAgRIgpAAgAA4gsQgCgMgIgMIAHgEIAOAMQAFAGABAEQAAAGgDADQgDADgFAAQgEAAgCgGgAg/gsQgDgMgGgNIAFgEQAJAGAGAHQAEAFAAAFQAAAGgCADQgDADgFAAQgDAAgCgGgAARgsIAAgQIAAgQIgBgPIATAHIAvAAIAKgHIAPAJQAAABAAAAQABABAAAAQAAABAAABQABAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAIgGADIAAAHIACANQAAADgDACQgDACgGAAQgIAAAAgDIAAgeIguAAIAAAeQAAAEgFADQgCABgEAAQgIAAAAgFgAglgqIAAgjIgwAAIAAAbQABAEgEADQgDABgEAAQgIAAAAgFIAAgQIAAgNIgBgPIASAHIAwAAIAKgHIAOAJQADACAAADQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAIgFADIAAAMIABANQAAADgDACQgDACgGAAQgIAAABgDgAAEhtQARADAQAAIAuAAIAOgPIATANQADADAAACQAAAEgEAAIhOAAQgOAAgOACgAh1htQARADAQAAIAxAAIAMgOIASANQADACAAACQAAAEgEAAIhOAAQgOAAgOACg");
	this.shape.setTransform(-0.6,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ss6, new cjs.Rectangle(-15.5,-15,31,30), null);


(lib.ss5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah3ByQAmgLASgKIARgKQAHgFAFgGQAIgJAGgNIg9AAQgPAAgNADIgGgNQARADARAAIA/AAQAFgNABgUIAWADQAIACAAADQAAAEgLADIgFASIBFAAIAQgRIAUAPQADADAAADQABADgFAAIhjAAQAMAMANAHQAKAHAdALQAXAHAaAFIgDAGIgJABQgFABgGALQgYgHgSgJQgVgLgOgNQgLgKgJgRIgGAMQgEAIgHAGQgGAHgHAFQgQAKgVAIQgUAHgdAGgAhygDQARADARAAIBEAAIAAgjIgxAAQgOAAgPACIgEgMQARADAQAAIAxAAIAAgjIhDAAQgOAAgPADIgEgNQAQADARAAIAqAAIgCgCQgJgOgOgOIAGgEQAPAHAKAGQAJAGAAAFQAAAHgEADIAwAAQADgHACgGQAEgJADgNIAYAHQAEABAAAEQAAADgKACQgHAJgIAFIgEAEIAmAAIAPgRIAUAPQADADAAADQABADgFAAIhiAAIAAAjIAxAAIAOgPIATANQACADAAACQABAEgFAAIhQAAIAAAjIBAAAIAQgRIAUAPQADADAAACQABAEgFAAIi6AAQgOAAgPACg");
	this.shape.setTransform(-0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ss5, new cjs.Rectangle(-15.5,-15,31,30), null);


(lib.ss4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABUBxIAAgQIhkAAIAAAMQAAAFgFACQgDADgGAAQgGAAgBgHIABgaIAAg+QAAgOgDgEIAWALIAnAAIAAgvIgjAAQgPAAgOACIgGgMQASADARAAIAjAAIAAgvIg+AFIgDgGQArgGAXgFQAkgIAbgOIAUAPQACABAAAFQAAABAAABQAAAAgBAAQAAABAAAAQgBAAgBAAIgJgBQgYAFgeAEIAAAxIArAAIAOgRIAVAPQADADAAADQAAADgEAAIhNAAIAAAvIAnAAIANgMIAQANQADADABACQgBAAAAABQAAAAAAABQAAAAgBABQAAAAgBABIgHADIAAA6IACAXQAAADgDACQgEADgFAAQgKAAAAgGgAgQBaIBkAAIAAhCIhkAAgAhdBzQgFgFAAgJIABgMIABgNQAAgJgFgHQgDgFgPgCIAAgHQAKADAFAAQAEAAAFgKIAvhuIAGACIgjBxQgCAHAAAGQAAAJADAMQAFAQgBAFQABAJgFAGQgEAFgFAAQgFAAgDgEgAhkgVQgHgOgPgNIAFgFQATAJALAGQAKAHAAAGQAAAMgMAAQgGAAgFgIgAhPhSQgIgOgPgNIAGgFQATAJAKAGQAKAHAAAGQAAAGgCADQgEADgFAAQgIAAgDgIg");
	this.shape.setTransform(-0.5,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ss4, new cjs.Rectangle(-15.5,-15,31,30), null);


(lib.ss3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah5BmQARADAQAAIBQAAIAAhNIg0AAQgOAAgPADIgFgOQARAEARAAIA0AAIAAg8Ig9AAIgLARQgLARgWAVIgGgDQASgcALgYQAHgSANgtIAbAKQAGACAAAFQAAADgMACQgIAUgIAOIA5AAIAAgzIgCgQIAZADQAIABgBAFQAAAFgLADIAAAyIAxAAIAPgTIAWARQADADAAADQAAADgEAAIhVAAIAAA8IAuAAIAPgQIATAPQADACAAACQABAEgFAAIhPAAIAABNIBGAAIAQgSIAVAQQAEADAAADQAAADgFABIjNAAQgNAAgPABg");
	this.shape.setTransform(-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ss3, new cjs.Rectangle(-15.5,-15,31,30), null);


(lib.ss2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggByQAfgQASgPQAPgNANgRQgGgMgFgMQgEgNgDgOQgDgNgBgSQgOAcgKAQIgGgEQANggAGgaQAKgfAGgoIAaAJQAFACABAEQAAAEgMACIgMAmIAyAAIAPgRIAUAPQAEADAAADQAAADgFAAIgTAAQgEAlgJAZQgJAagMAQIAGAHQAJAJAMAKIAfATIgCAHIgIgBQgEAAgDADQgCABgIAJQgggggMgPQgKAKgMAJQgVAQgnAPgAAegtQABAYAHAVQAGATALARQAIgOAGgSQAIgYADggIgvAAgAh8BxQAKgRAGgQQAGgQAEgXQADgSAEgcQACgaABgjIgCAAQgOAAgPACIgFgMQARADARAAIAPAAIAAgdIgCgQIAZADQAHABABAEQAAAFgLADIAAAdIAYAAIAOgQIATAOQADADAAACQAAAEgFAAIhEAAIgDAqIAlAAIAKgLIATAPQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAACgKAEQgBAcgDASQgDAdgGAVQgDAMgIAGQgHAEgQACQgCgNgFgCIgTgGIABgGIAdADQAFAAADgDQADgCACgJQAFgQADgcIADgtIgnAAIgCARQgEAegFASQgIAagGAKQgJASgQAQg");
	this.shape.setTransform(-0.5,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ss2, new cjs.Rectangle(-15.5,-15,31,30), null);


(lib.ss1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhWBxIABgaIAAhUIgXAHIgDAFQgBABAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgCAAgBgEIgGgWIAYgBIASggQALgVAIgUIAXAKQAEABAAADQABAEgLABQgRAXgaAfIAjgDIgGgLIAGgEQANAKAHAIQAIAIgBAGQAAAGgCACQgDADgFAAQgFAAgDgIQgCgIgEgHIgOAFIAABxQgBAEgFADQgEACgEAAQgHAAAAgHgAgvBzIAOgbIAKgWQAEgNADgQQAEgQACgTIAWAHQAIACAAAEQAAAEgLABQgFASgEAPIAIAPQAIAJALAGIACABIAAhtIgYAAQgNAAgPACIgEgMQAQADAQAAIBIAAIANgPIASAOQADACAAADQAAADgEAAIg7AAIAAA4IAYAAIAOgPIATANQACADAAADQAAADgDAAIg4AAIAAA0QALACAUAAIAtgBIgBAHQgIACgBABQgFACgDANIgggBQgNgCgKgDQgRgFgKgHQgPgNgHgJQgDgGgDgIIgIARQgKAQgUAXgAh9BmQAFgWADgVIACgfIAWAGQAFABAAAEQAAADgIACQgEARgGARQgGAQgGAMgAguBFQgEgQgIgTIAFgDQALAJAGAKQAGAJAAAHQAAAGgDADQgCADgGAAQgEAAgBgJgAhjgoQgKgQgPgQIAGgEIAMAHIAIgUIAIgdIAYAKQAEACAAADQAAADgLACIgZAiIAGAEQAKAGAAAHQAAAGgEADQgCADgFAAQgEAAgCgFgAgpg1QAAgEAEgEIAIgKQAFgIAGgQIAGABIAAAKIApAAIAAgTIgBgQIAZADQAHACAAAEQAAAEgKAEIAAASIApAAIAOgLIASANQADACAAAEQAAADgEABIgHACQgLAKgQALIgHgDQAJgNADgMIhqAAQgCASgEAIQgFAIgFAAQgMAAAAgKg");
	this.shape.setTransform(-0.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ss1, new cjs.Rectangle(-15.5,-15,31,30), null);


(lib.s9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsByIACgpIAAhKIgRAAIAABXQABAEgFABIgJABQgHAAAAgGIABgpIAAguQAAgLgCgHIAVAKIARAAIAAgmIgmAAQAAA4gKAlQgFARgGAOQgHAPgIAMIgFgFQALgeADgTQAEgRABgZQACgYAAgiIAAgvQAAgNgDgIIAVANIBQAAIALgLIAOAMQAEADAAACQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgGADIAAAcIABAWQAAADgDACQgDADgFAAQgIAAAAgGIAAgHIgXAAIAAAmIATAAIALgJIAPANQAEACAAADQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAgBABIgFACIAAA6QAAAJgEAGQgCAFgHAEQgFADgFAAQAAgIgCgCQgBgEgKgEIABgGIAMABQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQACgCAAgFIAAg8IgWAAIAABwQAAAFgDACIgKABQgHAAgBgFgAhQg2IBQAAIAAgsIhQAAgABPBoQgDgEgYgFIABgGIAhADQAFAAAAgFIAAipQAAgXgCgMIAaAEQAHABAAAEQAAAEgEACIgHACIAAC+QAAANgLAJQgKAGgJAAQAAgLgCgDgAAtA1IAAgpIAAhKQAAgXgCgKIAZADQAGABAAAEQAAAEgEABIgGACIAACEQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQgDACgIAAQgGAAAAgFg");
	this.shape.setTransform(-0.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s9, new cjs.Rectangle(-15.5,-15,31,30), null);


(lib.s8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AACBpQgPgGgVgDIABgHIAqAEQAHgBAAgFIAAhXQgPATgOANQgMAMgOAIQgNAKgOAHQgiARgSAGIgDgFQANgFAagQQAcgSAVgWQARgRAOgUIhEAAIgFAOQgBAEgEAAIgGABQgHAAgBgDQgDAAgBgFIALgdQAEgOAEgSIAEgWIAXADQAHAAAAAEQAAADgEACIgHADQgEAVgFATIgCAKIBTAAIAAhMIhZAAQgOAAgOACIgFgMQAQACARAAICJAAIAPgRIAVAQQADACAAADQAAAEgFAAIg8AAIAABMIArAAIAQgTIAWAQQADAEAAADQABADgGAAIhPAAIAABmQAAAOgNAIQgLAHgJAAQAAgLgDgEg");
	this.shape.setTransform(-0.5,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s8, new cjs.Rectangle(-15.5,-15,31,30), null);


(lib.s7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVBzQALgMAIgMQAIgMAFgMIAKgWIAHgZQAHgWACgjIABgGIgZACIgFgMQAPADAPAAQADgbAAgnIAYADQAHABAAAEQAAADgKAEIgEAzIAhAAIAMgLIATAQQACACAAACQAAACgKAEQgBAjgEAXQgDAlgIAaQgBAIgDAFQgDAGgDAEQgJAGgRACQgCgOgHgCIgVgGIABgHIAhADQAGAAADgDQADgEADgLQAFgUAEgkQADgfABgdIglAAIgEAeQgGAkgLAYQgKAZgNATIgOAPIgRAOgAhwBzIgIgZQAdgBAbgEIAAgZIgQAAQgOAAgPACIgFgNQARAEARAAIAQAAIAAgZIgdAAIAAADQAAAEgEACQgFADgFAAQgFAAgBgGIABgZIAAgsQAAgNgCgFIAVALIAdAAIAAgVIgaAAQgNAAgPACIgFgMQARACAQAAIAaAAIAAgTIgyADIgDgFQAggFARgFIAXgHQALgEAKgGIAUAOQACACAAAEQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgIgBIgfAFIAAAVIAZAAIANgPIASAOQADADABACQgBAEgEAAIg3AAIAAAVIAZAAIALgKIANALQADADAAACQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAIgGAEIAAAlIABAUQAAAEgCACQgCACgFAAQgJAAAAgFIAAgDIgbAAIAAAZIAQAAIAMgPIARAOQADACAAACQAAAEgEAAIgsAAIAAAXIAsgGIAAAFQgPAHgmAJQggAJgQACIgEAIQgBADgDAAQgDAAAAgFgAgsAVIAbAAIAAgaIgbAAgAhdAVIAdAAIAAgaIgdAAgAgsgLIAbAAIAAgYIgbAAgAhdgLIAdAAIAAgYIgdAAg");
	this.shape.setTransform(-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s7, new cjs.Rectangle(-15.5,-15,31,30), null);


(lib.s6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHBzQgKgCgGgGQgGgGAAgLIAAgOIg4AAIAAALQAAAFgEABQgEADgGAAQgFAAgBgHIABgZIAAg1QAAgMgCgEIAVAJICGAAIAMgKIAPALQAEADAAACQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABIgGADIAAAnIABAWQAAADgDACQgDADgFAAQgKAAAAgGIAAgEIg+AAIAAAKQAAAJAKABQALADAdAAQAcAAAIgCQAHgCACgEIAJgbIAFABIAAAWQAAAEAEADQAFAEAAAFQAAAFgFACQgFAEgNACQgOACgeAAQgiAAgNgDgAADBFIA+AAIAAgaIg+AAgAhHBFIA4AAIAAgaIg4AAgAADAkIA+AAIAAgZIg+AAgAhHAkIA4AAIAAgZIg4AAgAgOgGIABgaIAAgjIhUAAQAAALgCAHQgDAJgEAEQgEAEgEAAQgLAAAAgLQAAgEAFgEQAFgFAEgHQAEgKAEgNIAGACIAAAKIBUAAIAAgTIgyAAQgOAAgPACIgFgNQARADARAAIB1AAIAOgQIAUAPQADACAAADQAAAEgEAAIhSAAIAAATIBWAAIAOgMIASAOQADACAAAEQAAADgFABIgHACQgIAJgPAMIgGgDQAFgOADgLIhYAAIAAA6QAAAFgEACQgEACgEAAQgHAAAAgGgAAMgZQARAEAQAAIAFAAIANgOIAQANQADACAAACQAAAEgEAAIghAAQgOAAgOACgAhdgZQARAEARAAIAGAAIALgNIAQAMQACACAAACQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBAAIggAAQgOAAgPACgAAMgzQARADAQAAIAFAAIANgNIAQAMQADADAAACQAAADgEAAIghAAQgOAAgOADgAhdgzQARADARAAIAGAAIALgMIAQALQACADAAACQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIggAAQgOAAgPADg");
	this.shape.setTransform(-0.5,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s6, new cjs.Rectangle(-15.5,-15,31,30), null);


(lib.s5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABVBwIAAgQIg3AAIAAAKQgBAFgEACQgEACgGAAQgFAAAAgGIAAgZIAAhDQAAgOgCgDIAVAJIA2AAIAMgKIAQALQAEADAAACQAAADgDABIgHADIAABAIACAXQAAAEgEACQgDACgFAAQgKAAAAgFgAAeBYIA3AAIAAhIIg3AAgAhwBuIAAgZIAAhEQAAgOgCgDIAVAJIA2AAIAMgKIAPALQAEADAAACQAAADgDABIgHADIAAA9IADAVQAAAEgEACQgDACgFAAQgKAAAAgFIAAgLIg4AAIAAALQAAAFgDACQgFACgFAAQgGAAAAgGgAhdBYIA4AAIAAhIIg4AAgAAngTIAAgLIhUAAIAAAGQAAAFgFACQgEACgFAAQgHAAgBgHIABgaIAAgxQABgOgDgFIAWALIBTAAIAMgLIAQAMQAEADAAADQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABIgIADIAAAuIACAXQAAAEgDACQgEACgFAAQgKAAAAgFgAgtgmIBUAAIAAg7IhUAAg");
	this.shape.setTransform(-0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s5, new cjs.Rectangle(-15.5,-15,31,30), null);


(lib.s4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABHBrQgCgDgWgEIABgGIAeAAQAEAAAAgFIAAgaIhIAAIAAAyQAAAEgEACIgIABQgHAAAAgHIABgpIAAhFQAAgKgBgHIATAKIBIAAIAKgLIARANQADACAAACQAAADgDABIgHAEIAABSQAAANgLAJQgKAGgIAAQAAgKgCgDgAAKA3IBIAAIAAgXIhIAAgAAKAZIBIAAIAAgWIAAAAIhIAAgAhRBzIAAgpIAAg1QgIATgLAMQgJANgMAIIgDgFQAHgHAGgMQAJgSAHgUQAGgQAEgTIgFAAQgOAAgPACIgFgMQARADARAAIAJAAIAAg3QAAgWgCgLIAZAEQAGABAAAEQAAAEgEABIgGACIAABIIAIAAIANgOIASANQADACAAADQgBADgEAAIglAAIAAAPQASAJALAIQAFAEADAFQADAEAAAEQAAAGgDAEQgCADgGAAQgEAAgEgHQgIgOgNgPIAABwQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgDACgIAAQgGAAAAgFgAgSgkQARADAPAAIAUAAIAAgXIgPAAQgPAAgNACIgFgNQAQAEARAAIAPAAIAAgWIgSAAQgOAAgNADIgGgNQARADAQAAIASAAIAAgLIgCgQIAZAEQAHABAAAEQAAAEgKAEIAAAKIAcAAIANgPIATAOQADACAAADQAAADgFAAIg6AAIAAAWIAXAAIANgPIASANQADADgBACQAAAEgDAAIg1AAIAAAXIAkAAIANgPIATAOQADACAAADQAAADgFAAIhqAAQgOAAgNACgAg5gsIAIgbIAGgeIAXAKQADACAAACQABAEgKABQgKARgPAXgAhpg2QgDgUgIgVIAGgDQAJALAHAMQAGALAAAIQAAAGgDADQgDADgEAAQgFAAgCgKg");
	this.shape.setTransform(-0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s4, new cjs.Rectangle(-15.5,-15,31,30), null);


(lib.s3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhMB2IgKgYIAhgEIAAgaIgHACQgjAKgZAEIgCgFQAXgGAigOQAWgKARgPIg9AAQgOAAgPACIgEgMQAQADARAAIBUAAIAAgKIAAgMIgDACQgHADgFAAQAAgGgCgDQgBgEgOgDIABgGIAQABQABAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQABgCAAgEIAAgMIgcAAIAAAlQAAAEgFACQgEACgEAAQgGAAAAgGIABgYIAAgPIgZAAIAAAiQAAADgEACQgDACgFAAQgHAAAAgGIABgXIAAgMQAAgNgCgEIATAKIAaAAIAAgTIgZAAQgOAAgOACIgGgNQASAEAQAAIAZAAIAAgUIgiAAIAAABIgQANIgEgFQAGgKAEgKIAGgUIAXAFQAGABAAAEQAAADgEAAIgIADIgGAIIAbAAIAAAAQAAgYgCgEIAVAEQAGABAAADQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBABIgDACIAAAOIAQAAIANgOIARANQACACAAADQAAADgDAAIgtAAIAAAUIAcAAIAMgPIASANQADADAAACQAAAEgFAAIg4AAIAAATIAbAAIAKgJIAOAMQACADABACQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABIgGACIAAAIQAAAJgDAFIgCAEIAUABQAHABAAAEQAAAFgLAEIAAAJIBFAAIAOgRIAVAPQADADAAACQAAAEgEAAIhqAAQAMAPANAKIAJAIQARgNAJgKIARANQAEADAAADQAAAFgEAAIgJgCIgYAHIAUAJQAOAGAgAJIgCAGQgHAAgDACQgFAAgIAMQgWgIgQgLIgTgOQgJgIgGgIQgPgUgGgOQgNANgOAHIgLAGIAAAfIAzgKIABAGQg1ATggAJIgCAIQgBABAAABQAAAAgBABQAAAAgBABQAAAAgBAAQgDAAgBgFgABLgFQgDgEgVgEIABgGIAdADQAFAAAAgGIAAhBQAAgWgCgLIAZAEQAGABAAAEQABAEgFABIgGACIAABWQABAGgDAFQgDAFgFADQgLAGgHAAQAAgJgCgDgAAigfIABgaIAAgYQAAgZgCgEIAXAEQAGABAAAEQAAACgDACIgEACIAAA+QAAAEgFADQgEACgFAAQgGAAgBgHg");
	this.shape.setTransform(-0.5,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s3, new cjs.Rectangle(-15.5,-15,31,30), null);


(lib.s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABUBwIAAgJIiwAAIAAAHQAAAFgEABIgJABQgIAAABgHIABgoIAAinQAAgKgCgHIAUAKICwAAIAKgMIASANQADADAAADQAAACgDACIgHAEIAACgIAAAlQAAAFgFADQgDABgGAAQgGAAAAgFgAhcBhICwAAIAAjBIgBgBIivAAgAAzBSQgNgJgLgNIgHgLQgTAVgeATIgDgGQAMgIALgMQAKgLAKgOIACgDIgEgJQgEgMgFgcQgCgPgBgVIg0AAQgOAAgOADIgGgOQARAEARAAIA0AAIAAgNIgCgVIAUACQAHABAAADQAAADgIAEIAAAVIAhAAIAMgOIATANQACACAAADQABADgFAAIg+AAIACAhQACARAGARIAAABQAIgOANghIAVAEQAFACAAADQAAADgJACQgNAagRAZIAEAHQAGAKAJAIIAEACQAAAAABAAQAAAAABAAQAAgBAAgBQABAAAAgBIAMgeIAFABIgFAiQAAAFAFADQACAEAAAFQAAAGgJABQgHAAgKgHgAhMBOIgJgXQAdgEA2gNIABAFQgcAOglAOIgDAJQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAQgDAAgBgEgAhNAeIABgVIAAgbQAAgMgCgDIAQAIIAhAAIAJgIIAMAKQADACABACQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAIgFACIAAAUIABASQAAADgCABQgDADgFAAQgIAAAAgFIAAgDIgfAAIAAAFQAAAEgEACQgCACgGAAQgFAAAAgGgAg8AQIAfAAIAAghIgfAAgAAmhDQgFgKgJgJIAEgEQALADAIAGQAGAEgBAHQABAHgKABQgDgBgCgEg");
	this.shape.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s2, new cjs.Rectangle(-15.5,-15,31,30), null);


(lib.s1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhfByIABgaIAAhSIgYAUIgFgEQAMgNAQgXQALgUAKgaIAYAIQAEABAAAEQAAAEgKABQgLATgLANIAGACQAFACAAACQgBADgDABIgEABIAABuQAAAGgGACQgDABgFAAQgGAAAAgGgAAMBxQgZAAAAgWIAAgkQAAgLgBgEIAWADQAHABAAAFQAAADgDABIgHACIAAAfQAAAEACACQADACAFAAIAhAAIAHgBQACgBADgEIAJgZIAHABIAAAVQgBAGAEACQAFAFAAAEQAAAGgIACQgNADgNAAgAg6BmQgDgCAAgGQAAgEAFgFQAFgFAFgIQAFgKADgOIAHACIAAAPQAAANgDAJQgCAJgFAFQgFAEgEAAQgGAAgCgDgABmBYQgEgJgEgJQgGgJgHgJIAGgFQARAMAKAJQAJAJAAAJQAAAMgMAAQgGAAgDgKgAAkA/QgGgPgMgNIAFgFQAQAJAJAHQAJAHAAAGQAAAGgEADQgCADgGAAQgGAAgDgIgAg4AKQARADARAAIBtAAIAPgPIAUANQACADAAADQABADgFAAIiOAAQgOAAgOADgAgogEIABgZIAAgXQAAgNgCgEIAUAKIAlAAIAAgYIgiAAQgOAAgOACIgFgNQARAEAQAAIAiAAIAAgNIgBgQIAZADQAIABAAAEQAAAFgLADIAAANIAmAAIAPgSIAVAQQADADAAACQAAAEgEAAIhJAAIAAAYIApAAIALgIIAPAKQADACAAADQAAADgDABIgGACIAAAYIACAOQAAADgDACQgEADgGAAQgIAAAAgFIAAgEIhkAAIAAADQAAAEgDACQgFACgFAAQgGAAAAgGgAA6gQIAVAAIAAgkIgVAAgAASgQIAVAAIAAgkIgVAAgAgVgQIAVAAIAAgkIgVAAgAh6gxQAQgRAIgPQAKgQAKgWIAWAIQAFABAAAEQAAAEgKABQgOAVgNAMQgKAKgTANg");
	this.shape.setTransform(-0.5,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s1, new cjs.Rectangle(-15.5,-15,31,30), null);


(lib.new2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.new_2();
	this.instance.parent = this;
	this.instance.setTransform(-69.5,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.new2, new cjs.Rectangle(-69.5,-69.5,139,139), null);


(lib._new_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._new();
	this.instance.parent = this;
	this.instance.setTransform(-23.5,-23.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._new_1, new cjs.Rectangle(-23.5,-23.5,47,47), null);


(lib.cenius = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GENIUS();
	this.instance.parent = this;
	this.instance.setTransform(-36.2,-7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cenius, new cjs.Rectangle(-36.2,-7,72.5,14), null);


(lib.btn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_1, new cjs.Rectangle(-73.5,-25,147,50), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-207,-188,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(-207,-188,320,450), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 態
	this.instance = new lib.ss8();
	this.instance.parent = this;
	this.instance.setTransform(407.8,768.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(189).to({_off:false},0).to({x:417.8,alpha:1},81,cjs.Ease.quadInOut).wait(73).to({alpha:0},10).wait(1));

	// 姿
	this.instance_1 = new lib.ss7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(379.3,768.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(189).to({_off:false},0).to({x:389.3,alpha:1},47,cjs.Ease.quadInOut).wait(107).to({alpha:0},10).wait(1));

	// 麗
	this.instance_2 = new lib.ss6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(352,768.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(189).to({_off:false},0).to({x:362,alpha:1},35,cjs.Ease.quadInOut).wait(119).to({alpha:0},10).wait(1));

	// 美
	this.instance_3 = new lib.ss5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(333.8,768.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(189).to({_off:false},0).to({alpha:1},81,cjs.Ease.quadInOut).wait(73).to({alpha:0},10).wait(1));

	// 活
	this.instance_4 = new lib.ss4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(306.5,768.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(189).to({_off:false},0).to({alpha:1},99,cjs.Ease.quadInOut).wait(55).to({alpha:0},10).wait(1));

	// 生
	this.instance_5 = new lib.ss3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(288.3,768.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(189).to({_off:false},0).to({x:278.3,alpha:1},47,cjs.Ease.quadInOut).wait(107).to({alpha:0},10).wait(1));

	// 放
	this.instance_6 = new lib.ss2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(251.1,768.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(189).to({_off:false},0).to({alpha:1},99,cjs.Ease.quadInOut).wait(55).to({alpha:0},10).wait(1));

	// 綻
	this.instance_7 = new lib.ss1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(233.7,768.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(189).to({_off:false},0).to({x:223.7,alpha:1},35,cjs.Ease.quadInOut).wait(119).to({alpha:0},10).wait(1));

	// 刷
	this.instance_8 = new lib.s9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(421.3,731.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(189).to({_off:false},0).to({x:431.3,alpha:1},98,cjs.Ease.quadInOut).wait(56).to({alpha:0},10).wait(1));

	// 牙
	this.instance_9 = new lib.s8();
	this.instance_9.parent = this;
	this.instance_9.setTransform(393.3,731.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(189).to({_off:false},0).to({x:403.3,alpha:1},81,cjs.Ease.quadInOut).wait(73).to({alpha:0},10).wait(1));

	// 動
	this.instance_10 = new lib.s7();
	this.instance_10.parent = this;
	this.instance_10.setTransform(376.5,731.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(189).to({_off:false},0).to({alpha:1},81,cjs.Ease.quadInOut).wait(73).to({alpha:0},10).wait(1));

	// 電
	this.instance_11 = new lib.s6();
	this.instance_11.parent = this;
	this.instance_11.setTransform(348.8,731.8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(189).to({_off:false},0).to({alpha:1},49,cjs.Ease.quadInOut).wait(105).to({alpha:0},10).wait(1));

	// 品
	this.instance_12 = new lib.s5();
	this.instance_12.parent = this;
	this.instance_12.setTransform(320.3,731.8);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(189).to({_off:false},0).to({alpha:1},49,cjs.Ease.quadInOut).wait(105).to({alpha:0},10).wait(1));

	// 精
	this.instance_13 = new lib.s4();
	this.instance_13.parent = this;
	this.instance_13.setTransform(302.8,731.8);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(189).to({_off:false},0).to({x:292.8,alpha:1},81,cjs.Ease.quadInOut).wait(73).to({alpha:0},10).wait(1));

	// 製
	this.instance_14 = new lib.s3();
	this.instance_14.parent = this;
	this.instance_14.setTransform(275.5,731.8);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(189).to({_off:false},0).to({x:265.5,alpha:1},49,cjs.Ease.quadInOut).wait(105).to({alpha:0},10).wait(1));

	// 國
	this.instance_15 = new lib.s2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(246.8,731.8);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(189).to({_off:false},0).to({x:236.8,alpha:1},35,cjs.Ease.quadInOut).wait(119).to({alpha:0},10).wait(1));

	// 德
	this.instance_16 = new lib.s1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(209.4,731.8);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(189).to({_off:false},0).to({alpha:1},98,cjs.Ease.quadInOut).wait(56).to({alpha:0},10).wait(1));

	// new_2.png
	this.instance_17 = new lib.new2();
	this.instance_17.parent = this;
	this.instance_17.setTransform(319.3,634.4,0.882,0.882,0,0,0,0.1,0.1);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(174).to({_off:false},0).to({alpha:1},28).wait(141).to({alpha:0},10).wait(1));

	// btn.png
	this.instance_18 = new lib.btn_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(320.3,836.5,0.989,0.989,0,0,0,0.4,0.2);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(208).to({_off:false},0).to({alpha:1},16).wait(119).to({alpha:0},10).wait(1));

	// st4
	this.instance_19 = new lib.st4_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(318.4,799.3,2.043,2.043,0,0,0,0.7,1);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(17).to({_off:false},0).to({regX:0.5,x:438.6,alpha:1},61,cjs.Ease.get(1)).wait(82).to({alpha:0},14).to({_off:true},1).wait(179));

	// st3
	this.instance_20 = new lib.st3_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(317.9,799.7,2.043,2.043,0,0,0,0.6,1);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(17).to({_off:false},0).to({regX:0.7,x:396.2,alpha:1},48,cjs.Ease.get(0.5)).wait(95).to({alpha:0},14).to({_off:true},1).wait(179));

	// st2
	this.instance_21 = new lib.st2_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(314,800.2,2.043,2.043,0,0,0,0.9,1);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(17).to({_off:false},0).to({regX:0.7,x:351.6,alpha:1},56).wait(87).to({alpha:0},14).to({_off:true},1).wait(179));

	// st1
	this.instance_22 = new lib.st1_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(311,798.8,2.043,2.043,0,0,0,0.9,1);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(17).to({_off:false},0).to({alpha:1},63,cjs.Ease.get(0.5)).wait(80).to({alpha:0},14).to({_off:true},1).wait(179));

	// new.png
	this.instance_23 = new lib._new_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(232.9,769.9,2.248,2.248,0,0,0,0.8,0.8);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(43).to({_off:false},0).to({alpha:1},42,cjs.Ease.quadOut).wait(75).to({alpha:0},14).to({_off:true},1).wait(179));

	// GENIUS.png
	this.instance_24 = new lib.cenius();
	this.instance_24.parent = this;
	this.instance_24.setTransform(374.1,751.1,2.203,2.203,0,0,0,0.8,0.6);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(52).to({_off:false},0).to({alpha:1},40).wait(68).to({alpha:0},14).to({_off:true},1).wait(179));

	// t2.png
	this.instance_25 = new lib.t2_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(359.6,770.6,2.248,2.248,0,0,0,0.8,0.8);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(14).to({_off:false},0).to({regX:0.6,x:527.9,alpha:1},107,cjs.Ease.cubicOut).wait(39).to({regX:0.7,x:528.1},0).to({alpha:0},14).to({_off:true},1).wait(179));

	// t1.png
	this.instance_26 = new lib.t1_1();
	this.instance_26.parent = this;
	this.instance_26.setTransform(308.8,777,2.248,2.248,0,0,0,0.4,0.7);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(14).to({_off:false},0).to({regX:0.5,x:125.7,y:773.6,alpha:1},107,cjs.Ease.cubicOut).wait(39).to({alpha:0},14).to({_off:true},1).wait(179));

	// bg.jpg
	this.instance_27 = new lib.bg_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(414,376,2,2);
	this.instance_27.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).to({alpha:1},17).wait(326).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,450,640,900);
// library properties:
lib.properties = {
	id: '3E4EAE17AD744A3CBCD5E105CCF4C999',
	width: 640,
	height: 900,
	fps: 33,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/index_atlas_P_.png", id:"index_atlas_P_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3E4EAE17AD744A3CBCD5E105CCF4C999'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;