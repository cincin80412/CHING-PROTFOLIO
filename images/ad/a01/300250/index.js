(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[463,0,9,12],[302,444,119,250],[301,696,97,250],[302,0,159,250],[302,252,181,190],[0,900,228,67],[230,948,228,67],[0,252,300,250],[0,969,175,42],[400,696,97,46],[0,756,237,75],[0,833,253,65],[0,504,299,250],[0,0,300,250]]}
];


// symbols:



(lib.arrow = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg11 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg12 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg21 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg22 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.btn01 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.btn02 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.linebg = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.stitle01 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.stitle02 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title01 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title02 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.unbg1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.unbg2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
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


(lib.unbg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.unbg2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.unbg2_1, new cjs.Rectangle(0,0,300,250), null);


(lib.unbg01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.unbg1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.unbg01, new cjs.Rectangle(0,0,299,250), null);


(lib.title02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.title02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.title02_1, new cjs.Rectangle(0,0,253,65), null);


(lib.title01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.title01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.title01_1, new cjs.Rectangle(0,0,237,75), null);


(lib.stitle02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.stitle02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.stitle02_1, new cjs.Rectangle(0,0,97,46), null);


(lib.stitle01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.stitle01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.stitle01_1, new cjs.Rectangle(0,0,175,42), null);


(lib.btn02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btn02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn02_1, new cjs.Rectangle(0,0,228,67), null);


(lib.btn01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btn01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn01_1, new cjs.Rectangle(0,0,228,67), null);


(lib.bg21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg21();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg21_1, new cjs.Rectangle(0,0,159,250), null);


(lib.bg12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg12_1, new cjs.Rectangle(0,0,97,250), null);


(lib.bg11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg11_1, new cjs.Rectangle(0,0,119,250), null);


(lib.arrow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow_1, new cjs.Rectangle(0,0,9,12), null);


(lib._22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._22, new cjs.Rectangle(0,0,181,190), null);


(lib.linebg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.unbg01();
	this.instance.parent = this;
	this.instance.setTransform(149.5,125,1,1,0,0,0,149.5,125);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.linebg_1, new cjs.Rectangle(0,0,299,250), null);


(lib.bg22_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._22();
	this.instance.parent = this;
	this.instance.setTransform(90.5,95,1,1,0,0,0,90.5,95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg22_1, new cjs.Rectangle(0,0,181,190), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow.png
	this.instance = new lib.arrow_1();
	this.instance.parent = this;
	this.instance.setTransform(232.5,200,1,1,0,0,0,4.5,6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(42).to({_off:false},0).to({x:237.5},10,cjs.Ease.get(1)).to({x:232.5},10,cjs.Ease.get(1)).to({x:237.5},10,cjs.Ease.get(1)).to({x:232.5},10,cjs.Ease.get(1)).to({x:237.5},10,cjs.Ease.get(1)).to({x:232.5},10,cjs.Ease.get(1)).to({x:237.5},10,cjs.Ease.get(1)).to({x:232.5},10,cjs.Ease.get(1)).wait(48).to({x:237.5},10,cjs.Ease.get(1)).to({x:232.5},10,cjs.Ease.get(1)).to({x:237.5},10,cjs.Ease.get(1)).to({x:232.5},10,cjs.Ease.get(1)).to({x:237.5},10,cjs.Ease.get(1)).to({x:232.5},10,cjs.Ease.get(1)).to({x:237.5},10,cjs.Ease.get(1)).to({x:232.5},10,cjs.Ease.get(1)).wait(1));

	// btn02.png
	this.instance_1 = new lib.btn02_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(161,211.5,1,1,0,0,0,114,33.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160).to({_off:false},0).to({alpha:1},12,cjs.Ease.get(0.97)).wait(67).to({alpha:0},11,cjs.Ease.get(1)).wait(1));

	// title02.png
	this.instance_2 = new lib.title02_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.5,133.5,1,1,0,0,0,126.5,32.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(155).to({_off:false},0).to({y:123.5,alpha:1},14,cjs.Ease.get(1)).wait(70).to({alpha:0},11,cjs.Ease.get(1)).wait(1));

	// s-title02.png
	this.instance_3 = new lib.stitle02_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(148.5,70,1,1,0,0,0,48.5,23);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(148).to({_off:false},0).to({y:50,alpha:1},15,cjs.Ease.get(1)).wait(76).to({alpha:0},11,cjs.Ease.get(1)).wait(1));

	// bg2-2.png
	this.instance_4 = new lib.bg22_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(268.5,36.5,1,1,0,0,0,90.5,95);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(138).to({_off:false},0).to({x:209.5,y:95.5,alpha:1},18,cjs.Ease.get(1)).wait(83).to({alpha:0},11,cjs.Ease.get(1)).wait(1));

	// bg2-1.png
	this.instance_5 = new lib.bg21_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(25.5,182,1,1,0,0,0,79.5,125);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(138).to({_off:false},0).to({x:79.5,y:125,alpha:1},16,cjs.Ease.get(1)).wait(85).to({alpha:0},11,cjs.Ease.get(1)).wait(1));

	// un-bg-2.png
	this.instance_6 = new lib.unbg2_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(131).to({_off:false},0).to({alpha:1},13,cjs.Ease.get(1)).wait(95).to({alpha:0},11,cjs.Ease.get(1)).wait(1));

	// btn01.png
	this.instance_7 = new lib.btn01_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(158,210.5,1,1,0,0,0,114,33.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50).to({_off:false},0).to({alpha:1},12,cjs.Ease.get(1)).wait(57).to({alpha:0},15,cjs.Ease.get(0.99)).to({_off:true},1).wait(116));

	// title01.png
	this.instance_8 = new lib.title01_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(151.5,134.5,1,1,0,0,0,118.5,37.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(42).to({_off:false},0).to({y:121.5,alpha:1},15,cjs.Ease.get(1)).wait(62).to({alpha:0},15,cjs.Ease.get(0.99)).to({_off:true},1).wait(116));

	// s-title01.png
	this.instance_9 = new lib.stitle01_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(156.5,72,1,1,0,0,0,87.5,21);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(16).to({_off:false},0).to({y:42,alpha:1},14,cjs.Ease.get(1)).wait(89).to({alpha:0},15,cjs.Ease.get(0.99)).to({_off:true},1).wait(116));

	// bg1-2.png
	this.instance_10 = new lib.bg12_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(330.6,125,1,1,0,0,0,48.5,125);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(6).to({_off:false},0).to({x:251.5,alpha:1},16,cjs.Ease.get(1)).wait(97).to({alpha:0},15,cjs.Ease.get(0.99)).to({_off:true},1).wait(116));

	// bg1-1.png
	this.instance_11 = new lib.bg11_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-1.5,125,1,1,0,0,0,59.5,125);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(6).to({_off:false},0).to({x:59.5,alpha:1},14,cjs.Ease.get(1)).wait(99).to({alpha:0},15,cjs.Ease.get(0.99)).to({_off:true},1).wait(116));

	// un-bg-1.png
	this.instance_12 = new lib.linebg_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150.5,125,1,1,0,0,0,149.5,125);

	this.instance_13 = new lib.unbg01();
	this.instance_13.parent = this;
	this.instance_13.setTransform(149.5,125,1,1,0,0,0,149.5,125);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true,x:149.5},12,cjs.Ease.get(1)).wait(239));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:false},12,cjs.Ease.get(1)).wait(107).to({alpha:0},15,cjs.Ease.get(0.99)).to({_off:true},1).wait(116));

	// Layer 1
	this.instance_14 = new lib.linebg();
	this.instance_14.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(251));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png?1516872765326", id:"index_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;