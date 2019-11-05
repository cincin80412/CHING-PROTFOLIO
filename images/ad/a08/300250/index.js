(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[302,445,18,27],[0,252,300,250],[0,0,300,250],[218,504,220,57],[0,504,216,70],[302,354,135,89],[302,131,134,125],[302,0,135,129],[302,258,134,94]]}
];


// symbols:



(lib.abarrow = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.abg = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cbg02 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ctilte02 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ctitle01 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.c01 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.c02 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.c03 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.c04 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
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


(lib.title02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ctilte02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.title02, new cjs.Rectangle(0,0,220,57), null);


(lib.title1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ctitle01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.title1, new cjs.Rectangle(0,0,216,70), null);


(lib.c4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c04();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.c4, new cjs.Rectangle(0,0,134,94), null);


(lib.c3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c03();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.c3, new cjs.Rectangle(0,0,135,129), null);


(lib.c2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.c2, new cjs.Rectangle(0,0,134,125), null);


(lib.c1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.c1, new cjs.Rectangle(0,0,135,89), null);


(lib.bg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cbg02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2, new cjs.Rectangle(0,0,300,250), null);


(lib.abg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.abg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.abg_1, new cjs.Rectangle(0,0,300,250), null);


(lib.abarrow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.abarrow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.abarrow_1, new cjs.Rectangle(0,0,18,27), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ab-arrow.png
	this.instance = new lib.abarrow_1();
	this.instance.parent = this;
	this.instance.setTransform(247.5,212.5,1,1,0,0,0,11.5,17.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(174).to({_off:false},0).to({x:256.5},12).to({x:247.5},11).to({x:256.5},12).to({x:247.5},11).to({x:256.5},12).to({x:247.5},11).to({x:256.5},12).to({x:247.5},11).to({x:256.5},12).to({x:247.5},11).to({x:256.5},12).wait(9).to({_off:true},7).wait(3));

	// c-title01.png
	this.instance_1 = new lib.title1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(151.6,60.7,1.204,1.203,0,0,0,108.1,35);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(170).to({_off:false},0).to({regX:108,scaleX:1,scaleY:1,x:149,y:65,alpha:1},26,cjs.Ease.get(1)).wait(86).to({alpha:0},31,cjs.Ease.get(1)).wait(7));

	// c-tilte02.png
	this.instance_2 = new lib.title02();
	this.instance_2.parent = this;
	this.instance_2.setTransform(151,134.5,1,1,0,0,0,110,28.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(176).to({_off:false},0).to({alpha:1},23,cjs.Ease.get(0.92)).wait(83).to({alpha:0},31,cjs.Ease.get(1)).wait(7));

	// c-bg02.jpg
	this.instance_3 = new lib.bg2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(154).to({_off:false},0).to({alpha:1},29).wait(99).to({alpha:0},31,cjs.Ease.get(1)).wait(7));

	// c04.jpg
	this.instance_4 = new lib.c4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(222,193,1,1,0,0,0,67,47);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(74).to({_off:false},0).to({alpha:1},15).wait(53).to({alpha:0},16).to({_off:true},157).wait(5));

	// c03.jpg
	this.instance_5 = new lib.c3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(79.5,176,1,1,0,0,0,67.5,64.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(55).to({_off:false},0).to({alpha:1},14).wait(73).to({alpha:0},16).to({_off:true},157).wait(5));

	// c02.jpg
	this.instance_6 = new lib.c2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(222,75,1,1,0,0,0,67,62.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(34).to({_off:false},0).to({alpha:1},15).wait(93).to({alpha:0},16).to({_off:true},157).wait(5));

	// c01.jpg
	this.instance_7 = new lib.c1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(79.5,57,1,1,0,0,0,67.5,44.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({_off:false},0).to({alpha:1},14).wait(113).to({alpha:0},16).to({_off:true},157).wait(5));

	// abg.jpg
	this.instance_8 = new lib.abg_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:1},29,cjs.Ease.get(1)).wait(129).to({_off:true},157).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png?1507814953365", id:"index_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;