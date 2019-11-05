(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[302,0,300,276],[0,602,300,276],[302,278,300,276],[302,556,300,276],[302,834,23,35],[0,0,300,600]]}
];


// symbols:



(lib.a01 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.a02 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.a03 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.a04 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.abarrow = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.abg = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
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


(lib.abg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.abg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.abg_1, new cjs.Rectangle(0,0,300,600), null);


(lib.abarrow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.abarrow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.abarrow_1, new cjs.Rectangle(0,0,23,35), null);


(lib.a04_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a04();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a04_1, new cjs.Rectangle(0,0,300,276), null);


(lib.a03_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a03();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a03_1, new cjs.Rectangle(0,0,300,276), null);


(lib.a02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a02_1, new cjs.Rectangle(0,0,300,276), null);


(lib.a01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a01_1, new cjs.Rectangle(0,0,300,276), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ab-arrow.png
	this.instance = new lib.abarrow_1();
	this.instance.parent = this;
	this.instance.setTransform(259.5,572.5,1,1,0,0,0,11.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:268.5},12).to({x:259.5},11).to({x:268.5},12).to({x:259.5},11).to({x:268.5},12).to({x:259.5},11).to({x:268.5},12).to({x:259.5},11).to({x:268.5},12).to({x:259.5},11).to({x:268.5},12).wait(10));

	// a04.jpg
	this.instance_1 = new lib.a04_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,186,1,1,0,0,0,150,138);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(102).to({_off:false},0).wait(35));

	// a03.jpg
	this.instance_2 = new lib.a03_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,186,1,1,0,0,0,150,138);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(67).to({_off:false},0).to({_off:true},35).wait(35));

	// a02.jpg
	this.instance_3 = new lib.a02_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,186,1,1,0,0,0,150,138);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({_off:false},0).wait(37).to({x:151},0).to({_off:true},1).wait(69));

	// a01.jpg
	this.instance_4 = new lib.a01_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,186,1,1,0,0,0,150,138);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},30).wait(107));

	// abg.jpg
	this.instance_5 = new lib.abg_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(137));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,300,600);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png?1507815597724", id:"index_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;