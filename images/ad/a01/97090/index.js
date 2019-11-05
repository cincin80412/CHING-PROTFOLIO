(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[972,0,9,12],[0,183,294,90],[296,183,254,90],[791,156,219,62],[791,92,219,62],[0,0,970,90],[552,183,224,55],[778,220,224,55],[552,240,163,43],[0,275,118,56],[0,92,789,89]]}
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



(lib.btn01 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.btn02 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.linebg = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.stitle01 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.stitle02 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title01 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title02 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.unbg1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
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


(lib.linebg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.linebg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.linebg_1, new cjs.Rectangle(0,0,970,90), null);


(lib.title02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.title02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.title02_1, new cjs.Rectangle(0,0,118,56), null);


(lib.stitle02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.stitle02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.stitle02_1, new cjs.Rectangle(0,0,224,55), null);


(lib.btn02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btn02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn02_1, new cjs.Rectangle(0,0,219,62), null);


(lib.unbg01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.unbg1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.unbg01, new cjs.Rectangle(0,0,789,89), null);


(lib.title01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.title01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.title01_1, new cjs.Rectangle(0,0,163,43), null);


(lib.stitle01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.stitle01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.stitle01_1, new cjs.Rectangle(0,0,224,55), null);


(lib.btn01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btn01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn01_1, new cjs.Rectangle(0,0,219,62), null);


(lib.bg12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg12_1, new cjs.Rectangle(0,0,254,90), null);


(lib.bg11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg11_1, new cjs.Rectangle(0,0,294,90), null);


(lib.arrow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow_1, new cjs.Rectangle(0,0,9,12), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow.png
	this.instance = new lib.arrow_1();
	this.instance.parent = this;
	this.instance.setTransform(761.5,49.1,1,1,0,0,0,4.5,6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({_off:false},0).to({x:766.5},10,cjs.Ease.get(1)).to({x:761.5},10,cjs.Ease.get(1)).to({x:766.5},10,cjs.Ease.get(1)).to({x:761.5},10,cjs.Ease.get(1)).to({x:766.5},10,cjs.Ease.get(1)).to({x:761.5},10,cjs.Ease.get(1)).to({x:766.5},10,cjs.Ease.get(1)).to({x:761.5},10,cjs.Ease.get(1)).to({_off:true},1).wait(38).to({_off:false},0).to({x:766.5},10,cjs.Ease.get(1)).to({x:761.5},10,cjs.Ease.get(1)).to({x:766.5},10,cjs.Ease.get(1)).to({x:761.5},10,cjs.Ease.get(1)).to({x:766.5},10,cjs.Ease.get(1)).to({x:761.5},10,cjs.Ease.get(1)).to({x:766.5},10,cjs.Ease.get(1)).to({x:761.5},10,cjs.Ease.get(1)).wait(1));

	// btn02.png
	this.instance_1 = new lib.btn02_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(691,61.5,1,1,0,0,0,114,33.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(146).to({_off:false},0).to({alpha:1},12,cjs.Ease.get(1)).wait(67).to({alpha:0},11,cjs.Ease.get(1)).wait(1));

	// title02.png
	this.instance_2 = new lib.title02_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(290.5,51.5,1,1,0,0,0,126.5,32.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(134).to({_off:false},0).to({alpha:1},14).wait(77).to({alpha:0},11,cjs.Ease.get(1)).wait(1));

	// s-title02.png
	this.instance_3 = new lib.stitle02_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(376.5,44.7,1.183,1.182,0,0,0,48.5,22.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(143).to({_off:false},0).to({regY:23,scaleX:1,scaleY:1,x:378.5,y:42,alpha:1},10,cjs.Ease.get(1)).wait(72).to({alpha:0},11,cjs.Ease.get(1)).wait(1));

	// btn01.png
	this.instance_4 = new lib.btn01_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(691,61.5,1,1,0,0,0,114,33.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(22).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(82).to({alpha:0},15,cjs.Ease.get(1)).to({_off:true},1).wait(102));

	// title01.png
	this.instance_5 = new lib.title01_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(260.5,67.5,1,1,0,0,0,118.5,37.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(95).to({alpha:0},15,cjs.Ease.get(1)).to({_off:true},1).wait(102));

	// s-title01.png
	this.instance_6 = new lib.stitle01_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(417.6,42,1.121,1.12,0,0,0,87.5,21);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({_off:false},0).to({scaleX:1,scaleY:1,x:417.5,y:40,alpha:1},14,cjs.Ease.get(1)).wait(92).to({alpha:0},15,cjs.Ease.get(1)).to({_off:true},1).wait(102));

	// bg1-2.png
	this.instance_7 = new lib.bg12_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(903.5,125,1,1,0,0,0,48.5,125);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({x:764.5,alpha:1},17,cjs.Ease.get(1)).wait(202).to({alpha:0},11,cjs.Ease.get(1)).wait(1));

	// bg1-1.png
	this.instance_8 = new lib.bg11_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-46.5,125,1,1,0,0,0,59.5,125);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({x:59.5,alpha:1},14,cjs.Ease.get(1)).wait(205).to({alpha:0},11,cjs.Ease.get(0.97)).wait(1));

	// un-bg-1.png
	this.instance_9 = new lib.unbg01();
	this.instance_9.parent = this;
	this.instance_9.setTransform(149.5,125,1,1,0,0,0,149.5,125);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},12,cjs.Ease.get(1)).wait(213).to({alpha:0},11,cjs.Ease.get(0.97)).wait(1));

	// Layer 1
	this.instance_10 = new lib.linebg_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(486,45,1,1,0,0,0,485,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(237));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(485,45,971,90);
// library properties:
lib.properties = {
	width: 970,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png?1516870307247", id:"index_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;