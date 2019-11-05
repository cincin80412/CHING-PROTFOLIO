(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[454,0,8,14],[152,0,300,58],[0,0,150,302],[152,60,211,74],[152,136,280,39],[365,60,116,24]]}
];


// symbols:



(lib.arrow = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.btn = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pd = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_1 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.txt = function() {
	this.spriteSheet = ss["index_atlas_P_"];
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


(lib.title_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.title();
	this.instance.parent = this;
	this.instance.setTransform(-74.5,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.title_2, new cjs.Rectangle(-74.5,-24,211,74), null);


(lib.btn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-90,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_1, new cjs.Rectangle(-90,-20.5,300,58), null);


(lib.txt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt();
	this.instance.parent = this;
	this.instance.setTransform(-97,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_1, new cjs.Rectangle(-97,-10.5,116,24), null);


(lib.title_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.title_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-74,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.title_3, new cjs.Rectangle(-74,-28.5,280,39), null);


(lib.pd_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pd();
	this.instance.parent = this;
	this.instance.setTransform(-40,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pd_1, new cjs.Rectangle(-40,-53.5,150,302), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(-150,-125,300,600), null);


(lib.arrow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(-4,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow_1, new cjs.Rectangle(-4,-7,8,14), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.arrow_1();
	this.instance.parent = this;
	this.instance.setTransform(216,577);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(132).to({_off:false},0).to({alpha:1},8).to({x:226},10).to({x:216},10).to({x:226},10).to({x:216},10).to({x:226},10).to({x:216},10).to({x:226},10).to({x:216},10).to({x:226},10).to({x:216,alpha:0},10).wait(1));

	// title.png
	this.instance_1 = new lib.title_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(83.6,479);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(124).to({_off:false},0).to({alpha:1},15,cjs.Ease.quadInOut).wait(86).to({alpha:0},15,cjs.Ease.quadInOut).wait(1));

	// title.png
	this.instance_2 = new lib.title_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(85,539.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).to({y:529.5,alpha:1},19,cjs.Ease.quadInOut).wait(75).to({alpha:0},14,cjs.Ease.quadInOut).to({_off:true},1).wait(116));

	// btn.png
	this.instance_3 = new lib.btn_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(90,562.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(132).to({_off:false},0).to({alpha:1},13).wait(80).to({alpha:0},15,cjs.Ease.quadInOut).wait(1));

	// txt.png
	this.instance_4 = new lib.txt_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(189,551);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({alpha:1},18,cjs.Ease.quadInOut).wait(74).to({alpha:0},14,cjs.Ease.quadInOut).to({_off:true},1).wait(116));

	// pd.png
	this.instance_5 = new lib.pd_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(123.5,351.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25).to({_off:false},0).to({alpha:1},15,cjs.Ease.quadInOut).wait(84).to({regX:0.1,scaleX:0.9,scaleY:0.9,x:198.4,y:346.2},21,cjs.Ease.cubicInOut).wait(80).to({alpha:0},15,cjs.Ease.quadInOut).wait(1));

	// bg.jpg
	this.instance_6 = new lib.bg_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(152,125);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:150,alpha:1},14,cjs.Ease.cubicInOut).wait(211).to({alpha:0},15,cjs.Ease.quadOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(152,300,300,600);
// library properties:
lib.properties = {
	id: '818E128800D3417FA19370CBD112913B',
	width: 300,
	height: 600,
	fps: 30,
	color: "#B4BBBF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1535604550309", id:"bg"},
		{src:"images/index_atlas_P_.png?1535604550300", id:"index_atlas_P_"}
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
an.compositions['818E128800D3417FA19370CBD112913B'] = {
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