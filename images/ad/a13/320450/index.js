(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[1926,514,59,32],[0,0,640,900],[506,902,468,331],[642,0,640,900],[1926,0,85,512],[0,902,504,319],[1284,0,640,900],[1433,902,366,263],[1801,902,186,186],[976,902,455,320],[1801,1090,155,62],[1433,1167,255,74]]}
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



(lib.cut03btn = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.cut03icon = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.cut03txt = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.doctorname = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
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

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,255,74), null);


(lib.doctorname_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.doctorname();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.doctorname_1, new cjs.Rectangle(0,0,155,62), null);


(lib.cut02pd_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cut02pd();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cut02pd_1, new cjs.Rectangle(0,0,85,512), null);


(lib.arrow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow_1, new cjs.Rectangle(0,0,59,32), null);


(lib.cut03txt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cut03txt();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cut03txt_1, new cjs.Rectangle(0,0,455,320), null);


(lib.cut03icon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cut03icon();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cut03icon_1, new cjs.Rectangle(0,0,186,186), null);


(lib.cut03btn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cut03btn();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cut03btn_1, new cjs.Rectangle(0,0,366,263), null);


(lib.cut03bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cut03bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cut03bg_1, new cjs.Rectangle(0,0,640,900), null);


(lib.cut02txt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cut02txt();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cut02txt_1, new cjs.Rectangle(0,0,504,319), null);


(lib.cut02bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cut02bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cut02bg_1, new cjs.Rectangle(0,0,640,900), null);


(lib.cut01txt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cut01txt();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cut01txt_1, new cjs.Rectangle(0,0,468,331), null);


(lib.cut01bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cut01bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cut01bg_1, new cjs.Rectangle(0,0,640,900), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo.png
	this.instance = new lib.logo_1();
	this.instance.parent = this;
	this.instance.setTransform(153.5,64.9,1,1,0,0,0,127.5,37);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({alpha:1},7,cjs.Ease.quadInOut).wait(53).to({alpha:0},10).wait(8).to({alpha:1},10).wait(64).to({alpha:0},10).wait(8).to({alpha:1},9).wait(75).to({alpha:0},21).wait(1));

	// arrow.png
	this.instance_1 = new lib.arrow_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(553.6,868.2,1,1,0,0,0,29.5,16);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(179).to({_off:false},0).to({alpha:1},11).to({y:876.2},9).to({y:868.2},10).to({y:876.2},9).to({y:868.2},10).to({y:876.2},9).to({y:868.2},10).to({y:876.2},9).to({y:868.2},10).to({y:876.2},9).to({y:868.2,alpha:0},10).wait(1));

	// cut03-icon.png
	this.instance_2 = new lib.cut03icon_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(293.6,290.8,1.371,1.371,0,0,0,93,93);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(179).to({_off:false},0).to({scaleX:1,scaleY:1,x:287,y:280,alpha:1},19,cjs.Ease.quartOut).wait(71).to({alpha:0},16).wait(1));

	// cut03-txt.png
	this.instance_3 = new lib.cut03txt_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(412.5,447,1,1,0,0,0,227.5,160);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(182).to({_off:false},0).to({y:439,alpha:1},16,cjs.Ease.cubicOut).wait(71).to({alpha:0},16).wait(1));

	// cut03-btn.png
	this.instance_4 = new lib.cut03btn_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(629,896.4,1,1,0,0,0,183,131.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(179).to({_off:false},0).to({x:457,y:768.5,alpha:1},23,cjs.Ease.quartOut).wait(67).to({alpha:0},16).wait(1));

	// cut03-bg.png
	this.instance_5 = new lib.cut03bg_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(320,450,1,1,0,0,0,320,450);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(173).to({_off:false},0).to({alpha:1},11).wait(85).to({alpha:0},16).wait(1));

	// doctor-name.png copy
	this.instance_6 = new lib.doctorname_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(540.6,812.6,1,1,0,0,0,77.5,31);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(89).to({_off:false},0).to({alpha:1},14).wait(56).to({alpha:0},18,cjs.Ease.quartOut).to({_off:true},1).wait(108));

	// cut02-txt.png
	this.instance_7 = new lib.cut02txt_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(253,295.5,1,1,0,0,0,252,159.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(93).to({_off:false},0).to({y:285.5,alpha:1},13,cjs.Ease.cubicOut).wait(56).to({alpha:0},15,cjs.Ease.quartOut).to({_off:true},1).wait(108));

	// cut02-pd
	this.instance_8 = new lib.cut02pd_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(218.5,644,1,1,0,0,0,42.5,256);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(93).to({_off:false},0).to({x:178.5,alpha:1},20,cjs.Ease.quartOut).wait(49).to({alpha:0},15,cjs.Ease.quartOut).to({_off:true},1).wait(108));

	// cut02-bg.png
	this.instance_9 = new lib.cut02bg_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(320,450,1,1,0,0,0,320,450);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(85).to({_off:false},0).to({alpha:1},16,cjs.Ease.cubicInOut).wait(61).to({alpha:0},15,cjs.Ease.quartOut).to({_off:true},1).wait(108));

	// doctor-name.png
	this.instance_10 = new lib.doctorname_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(540.6,812.6,1,1,0,0,0,77.5,31);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(7).to({_off:false},0).to({alpha:1},10).wait(53).to({alpha:0},18,cjs.Ease.quartOut).to({_off:true},1).wait(197));

	// cut01-txt.png
	this.instance_11 = new lib.cut01txt_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(235,330.5,1,1,0,0,0,234,165.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(11).to({_off:false},0).to({y:300.5,alpha:1},16,cjs.Ease.quadOut).wait(43).to({alpha:0},18,cjs.Ease.quartOut).to({_off:true},1).wait(197));

	// cut01-bg.png
	this.instance_12 = new lib.cut01bg_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(320,450,1,1,0,0,0,320,450);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({alpha:1},17,cjs.Ease.quadOut).wait(53).to({alpha:0},18,cjs.Ease.quartOut).to({_off:true},1).wait(197));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,450,640,900);
// library properties:
lib.properties = {
	id: 'C08BD3B556D44721817F1E30B4BBD6DF',
	width: 640,
	height: 900,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png?1529910749578", id:"index_atlas_"}
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
an.compositions['C08BD3B556D44721817F1E30B4BBD6DF'] = {
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