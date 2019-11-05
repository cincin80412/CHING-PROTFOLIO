(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[448,0,21,26],[351,419,125,298],[0,326,142,76],[0,0,289,249],[291,0,155,417],[0,571,313,84],[0,419,349,150],[0,657,83,96],[0,251,267,73]]},
		{name:"index_atlas_NP_", frames: [[0,0,600,500],[0,502,600,500]]}
];


// symbols:



(lib.arrow = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg2 = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bluegril = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.downline = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.downtxt = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.greengril = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.sendbtn = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.topline = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.toptxt = function() {
	this.spriteSheet = ss["index_atlas_P_"];
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


(lib.toplime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.topline();
	this.instance.parent = this;
	this.instance.setTransform(-41.5,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.toplime, new cjs.Rectangle(-41.5,-48,83,96), null);


(lib.title_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.title();
	this.instance.parent = this;
	this.instance.setTransform(-174.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.title_1, new cjs.Rectangle(-174.5,-75,349,150), null);


(lib.sendbtn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sendbtn();
	this.instance.parent = this;
	this.instance.setTransform(-156.5,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sendbtn_1, new cjs.Rectangle(-156.5,-42,313,84), null);


(lib.greengirl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.greengril();
	this.instance.parent = this;
	this.instance.setTransform(-64,-172);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.greengirl, new cjs.Rectangle(-64,-172,155,417), null);


(lib.downline_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.downline();
	this.instance.parent = this;
	this.instance.setTransform(-71,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.downline_1, new cjs.Rectangle(-71,-38,142,76), null);


(lib.bg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg2();
	this.instance.parent = this;
	this.instance.setTransform(-300,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2_1, new cjs.Rectangle(-300,-250,600,500), null);


(lib.arrow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(-10.5,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow_1, new cjs.Rectangle(-10.5,-13,21,26), null);


(lib.toptxt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.toptxt();
	this.instance.parent = this;
	this.instance.setTransform(-133.5,-36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.toptxt_1, new cjs.Rectangle(-133.5,-36.5,267,73), null);


(lib.downtxt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.downtxt();
	this.instance.parent = this;
	this.instance.setTransform(-144.5,-124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.downtxt_1, new cjs.Rectangle(-144.5,-124.5,289,249), null);


(lib.bluegril_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bluegril();
	this.instance.parent = this;
	this.instance.setTransform(-62.5,-149);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bluegril_1, new cjs.Rectangle(-62.5,-149,125,298), null);


(lib.bg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-300,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1, new cjs.Rectangle(-300,-250,600,500), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow.png
	this.instance = new lib.arrow_1();
	this.instance.parent = this;
	this.instance.setTransform(481.5,359);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(112).to({_off:false},0).to({y:349,alpha:1},11).to({x:491.5},7).to({x:481.5},7).to({x:491.5},7).to({x:481.5},7).to({x:491.5},7).to({x:481.5},7).to({x:491.5},7).to({x:481.5},7).to({x:491.5},7).to({x:481.5},7).to({x:491.5},7).to({x:481.5},7).to({x:491.5},7).to({x:481.5,alpha:0},11).wait(1));

	// send-btn.png
	this.instance_1 = new lib.sendbtn_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(371.5,359);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(112).to({_off:false},0).to({y:349},11,cjs.Ease.cubicInOut).wait(92).to({alpha:0},10).wait(1));

	// top-line.png
	this.instance_2 = new lib.toplime();
	this.instance_2.parent = this;
	this.instance_2.setTransform(558.5,93.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(108).to({_off:false},0).wait(107).to({alpha:0},10).wait(1));

	// down-line.png
	this.instance_3 = new lib.downline_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(188,451);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(129).to({_off:false},0).wait(2).to({alpha:0},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0},0).wait(2).to({alpha:1},0).wait(22).to({alpha:0},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0},0).wait(2).to({alpha:1},0).wait(26).to({alpha:0},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0},0).wait(2).to({alpha:1},0).wait(18).to({alpha:0},10).wait(1));

	// green-gril.png
	this.instance_4 = new lib.greengirl();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-17,217);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(103).to({_off:false},0).to({x:93,y:217.1,alpha:1},11,cjs.Ease.cubicInOut).to({x:83},6).wait(95).to({alpha:0},10).wait(1));

	// title.png
	this.instance_5 = new lib.title_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(364.5,209);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(97).to({_off:false},0).to({y:183,alpha:1},10,cjs.Ease.cubicInOut).to({y:189},7,cjs.Ease.cubicInOut).wait(101).to({alpha:0},10).wait(1));

	// bg-2.jpg
	this.instance_6 = new lib.bg2_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(300,250);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(94).to({_off:false},0).to({alpha:1},10,cjs.Ease.quartInOut).wait(111).to({alpha:0},10).wait(1));

	// down-txt.png
	this.instance_7 = new lib.downtxt_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(289.5,411.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({_off:false},0).to({y:371.5,alpha:1},11,cjs.Ease.cubicInOut).wait(67).to({alpha:0},10,cjs.Ease.quartOut).to({_off:true},1).wait(130));

	// blue-gril.png
	this.instance_8 = new lib.bluegril_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(597.5,343);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10).to({_off:false},0).to({x:527.5,alpha:1},11,cjs.Ease.cubicInOut).to({x:537.5},6,cjs.Ease.cubicInOut).wait(58).to({alpha:0},10,cjs.Ease.quartOut).to({_off:true},1).wait(130));

	// top-txt.png
	this.instance_9 = new lib.toptxt_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(285.5,12.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({_off:false},0).to({y:78.5,alpha:1},10,cjs.Ease.cubicInOut).to({y:72.5},7,cjs.Ease.quadOut).wait(66).to({alpha:0},10,cjs.Ease.quartOut).to({_off:true},1).wait(130));

	// bg.jpg
	this.instance_10 = new lib.bg1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(298.8,247.9,1.108,1.108,0,0,0,-0.1,-0.5);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:0,regY:0,scaleX:1,scaleY:1,x:300,y:250,alpha:1},13,cjs.Ease.cubicInOut).wait(72).to({alpha:0},10,cjs.Ease.quartOut).to({_off:true},1).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(266.4,221.4,665,554.1);
// library properties:
lib.properties = {
	id: '407BCCE81A4742909B05978E96BA4A69',
	width: 600,
	height: 500,
	fps: 24,
	color: "#F7CED5",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_P_.png?1533197252255", id:"index_atlas_P_"},
		{src:"images/index_atlas_NP_.jpg?1533197252255", id:"index_atlas_NP_"}
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
an.compositions['407BCCE81A4742909B05978E96BA4A69'] = {
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