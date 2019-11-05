(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[1454,502,255,190],[1204,0,600,500],[1045,502,407,309],[602,0,600,500],[1930,69,44,217],[0,0,600,500],[0,502,600,500],[1806,69,122,122],[602,502,441,310],[1806,0,234,67]]}
];


// symbols:



(lib.arrow = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cut01bg = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cut01txt = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cut02bg = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.cut02pd = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.cut02txt = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.cut03bg = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.cut03icon = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.cut03txt = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["index_atlas_"];
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


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,234,67), null);


(lib.arrow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow_1, new cjs.Rectangle(0,0,255,190), null);


(lib.cut03txt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cut03txt();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cut03txt_1, new cjs.Rectangle(0,0,441,310), null);


(lib.cut03icon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cut03icon();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cut03icon_1, new cjs.Rectangle(0,0,122,122), null);


(lib.cut03bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cut03bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cut03bg_1, new cjs.Rectangle(0,0,600,500), null);


(lib.cut02txt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cut02txt();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cut02txt_1, new cjs.Rectangle(0,0,600,500), null);


(lib.cut02pd_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cut02pd();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cut02pd_1, new cjs.Rectangle(0,0,44,217), null);


(lib.cut02bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cut02bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cut02bg_1, new cjs.Rectangle(0,0,600,500), null);


(lib.cut01txt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cut01txt();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cut01txt_1, new cjs.Rectangle(0,0,407,309), null);


(lib.cut01bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cut01bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cut01bg_1, new cjs.Rectangle(0,0,600,500), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo.png
	this.instance = new lib.logo_1();
	this.instance.parent = this;
	this.instance.setTransform(137,58.5,1,1,0,0,0,117,33.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},17).wait(55).to({alpha:0},13).wait(8).to({alpha:1},12).wait(56).to({alpha:0},13).wait(8).to({alpha:1},12).wait(75).to({alpha:0},16,cjs.Ease.quartOut).wait(1));

	// arrow.png
	this.instance_1 = new lib.arrow_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(97,294,1,1,0,0,0,32,17);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(185).to({_off:false},0).to({y:299},10).to({y:294,alpha:1},10).to({y:299},10).to({y:294},10).to({y:299},10).to({y:294},10).to({y:299},10).to({y:294},10).to({y:299,alpha:0},10).to({y:294},10).wait(1));

	// cut03-icon.png
	this.instance_2 = new lib.cut03icon_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(404.1,143.2,1.459,1.459,0,0,0,61,60.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(193).to({_off:false},0).to({regY:61,scaleX:1,scaleY:1,x:411,y:143,alpha:1},13,cjs.Ease.quartOut).wait(63).to({alpha:0},16,cjs.Ease.quartOut).wait(1));

	// cut03-txt.png
	this.instance_3 = new lib.cut03txt_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(221.5,225,1,1,0,0,0,220.5,155);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(181).to({_off:false},0).to({y:215,alpha:1},16,cjs.Ease.quartOut).wait(72).to({alpha:0},16,cjs.Ease.quartOut).wait(1));

	// cut03-bg.png
	this.instance_4 = new lib.cut03bg_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(300,250,1,1,0,0,0,300,250);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(172).to({_off:false},0).to({alpha:1},15,cjs.Ease.quartOut).wait(82).to({alpha:0},16,cjs.Ease.quartOut).wait(1));

	// cut02-txt.png
	this.instance_5 = new lib.cut02txt_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(300,260,1,1,0,0,0,300,250);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(99).to({_off:false},0).to({y:250,alpha:1},17,cjs.Ease.quartOut).wait(46).to({alpha:0},15,cjs.Ease.quartOut).to({_off:true},1).wait(108));

	// cut02-pd.png
	this.instance_6 = new lib.cut02pd_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(247,390.5,1,1,0,0,0,22,108.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(105).to({_off:false},0).to({x:227,alpha:1},15,cjs.Ease.quartOut).wait(42).to({alpha:0},15,cjs.Ease.quartOut).to({_off:true},1).wait(108));

	// cut02-bg.png
	this.instance_7 = new lib.cut02bg_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(300,250,1,1,0,0,0,300,250);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(95).to({_off:false},0).to({alpha:1},18,cjs.Ease.quartOut).wait(49).to({alpha:0},15,cjs.Ease.quartOut).to({_off:true},1).wait(108));

	// cut01-txt.png
	this.instance_8 = new lib.cut01txt_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(204.5,222.5,1,1,0,0,0,203.5,154.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},0).to({y:212.5,alpha:1},15,cjs.Ease.quartOut).wait(50).to({alpha:0},20,cjs.Ease.quartOut).to({_off:true},1).wait(188));

	// cut01-bg.png
	this.instance_9 = new lib.cut01bg_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(300,249,1,1,0,0,0,300,250);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},17,cjs.Ease.cubicOut).wait(60).to({alpha:0},20,cjs.Ease.quartOut).to({_off:true},1).wait(188));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,249,600,500);
// library properties:
lib.properties = {
	id: 'C199F6022DCC4C3FA8172ED1BA789B2C',
	width: 600,
	height: 500,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png?1529910805966", id:"index_atlas_"}
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
an.compositions['C199F6022DCC4C3FA8172ED1BA789B2C'] = {
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