(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[322,572,149,45],[162,743,69,14],[162,365,142,139],[0,0,364,363],[0,365,160,600],[306,365,119,127],[162,706,96,35],[260,706,47,39],[322,494,106,76],[162,619,160,85],[162,506,158,111]]}
];


// symbols:



(lib.bigtxtbtn = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.btntxt = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.btn = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.game = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.kvbg = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.light = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.money = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.prod_light = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.stitle = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title = function() {
	this.initialize(ss["index_atlas_"]);
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


(lib.title_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.title();
	this.instance.parent = this;
	this.instance.setTransform(-145,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.title_1, new cjs.Rectangle(-145,-49.5,158,111), null);


(lib.s_title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.stitle();
	this.instance.parent = this;
	this.instance.setTransform(-123,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.s_title, new cjs.Rectangle(-123,-32.5,160,85), null);


(lib.prodlight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.prod_light();
	this.instance.parent = this;
	this.instance.setTransform(-53,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.prodlight, new cjs.Rectangle(-53,-38,106,76), null);


(lib.money_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.money();
	this.instance.parent = this;
	this.instance.setTransform(-23.5,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.money_1, new cjs.Rectangle(-23.5,-19.5,47,39), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-38,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-38,-14,96,35), null);


(lib.light_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(-59.5,-63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.light_1, new cjs.Rectangle(-59.5,-63.5,119,127), null);


(lib.game_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.game();
	this.instance.parent = this;
	this.instance.setTransform(-144.5,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_1, new cjs.Rectangle(-144.5,-72,364,363), null);


(lib.btntxtbig = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bigtxtbtn();
	this.instance.parent = this;
	this.instance.setTransform(-74.5,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btntxtbig, new cjs.Rectangle(-74.5,-22.5,149,45), null);


(lib.btntxt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.btntxt();
	this.instance.parent = this;
	this.instance.setTransform(-40.5,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btntxt_1, new cjs.Rectangle(-40.5,-14.5,69,14), null);


(lib.btn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-71,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_1, new cjs.Rectangle(-71,-69.5,142,139), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.kvbg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-125,160,600), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt_big_btn
	this.instance = new lib.btntxtbig();
	this.instance.parent = this;
	this.instance.setTransform(80.1,622.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({y:558.3},15,cjs.Ease.backInOut).wait(7).to({alpha:0.4414},6).to({alpha:1},6).to({alpha:0.4414},6).to({alpha:1},6).to({alpha:0.4414},6).to({alpha:1},6).to({alpha:0.4414},6).to({alpha:1},6).to({alpha:0.4414},6).to({alpha:1},6).to({alpha:0.4414},6).to({alpha:1},6).to({alpha:0.4414},6).to({alpha:1},6).to({alpha:0},5).wait(1));

	// prod_light_png
	this.instance_1 = new lib.prodlight();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120.7,118.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({alpha:1},6).to({rotation:73.9998},35).wait(1).to({rotation:0},31).wait(1).to({rotation:64.0003,x:120.65,y:118.55,alpha:0},27).wait(1));

	// title_png
	this.instance_2 = new lib.title_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(148.45,48.55,1.0219,1.0219,0,0,0,0.3,0.4);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:0.2,y:136.8,alpha:1},25,cjs.Ease.backInOut).wait(90).to({alpha:0},7).wait(1));

	// s_title_png
	this.instance_3 = new lib.s_title();
	this.instance_3.parent = this;
	this.instance_3.setTransform(123.55,237.75,1.0225,1.0225,0,0,0,0.2,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({alpha:1},16,cjs.Ease.quartInOut).wait(93).to({alpha:0},7).wait(1));

	// light_png_copy
	this.instance_4 = new lib.light_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(133.8,63.5,1,1,0,0,180);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({alpha:1},16,cjs.Ease.bounceInOut).wait(85).to({alpha:0},7).wait(1));

	// light_png
	this.instance_5 = new lib.light_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(36.55,63.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({alpha:1},16,cjs.Ease.bounceInOut).wait(85).to({alpha:0},7).wait(1));

	// btn_txt_png
	this.instance_6 = new lib.btntxt_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(86.2,371);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({alpha:1},12).wait(85).to({alpha:0},7).wait(1));

	// btn_png
	this.instance_7 = new lib.btn_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(79,384.6);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:360.05,alpha:1},20,cjs.Ease.backInOut).wait(8).to({rotation:40.9995,x:79.05},16).to({rotation:-45,x:79},39).to({scaleX:0.9999,scaleY:0.9999,rotation:35.0006,x:79.05},32).to({scaleX:1,scaleY:1,rotation:0,x:79,alpha:0},7).wait(1));

	// game_png
	this.instance_8 = new lib.game_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(37.6,305.95,1.0407,1.0407,0,0,0,0.1,0.1);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:253.05,alpha:1},20,cjs.Ease.backInOut).wait(95).to({y:249},0).to({alpha:0},7).wait(1));

	// money_png_copy_copy_copy
	this.instance_9 = new lib.money_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(94.9,300.9,1.1483,1.1483,0,-28.8541,151.1459);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(41).to({_off:false},0).to({regX:0.1,regY:0.5,scaleX:0.5741,scaleY:0.5741,skewX:-28.8538,skewY:151.1462,x:136,y:149.6,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({regX:0,regY:0,scaleX:1.1483,scaleY:1.1483,skewX:-28.8541,skewY:151.1459,x:94.9,y:300.9,alpha:1},0).to({regX:0.1,regY:0.5,scaleX:0.5741,scaleY:0.5741,skewX:-28.8538,skewY:151.1462,x:136,y:149.6,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({regX:0,regY:0,scaleX:1.1483,scaleY:1.1483,skewX:-28.8541,skewY:151.1459,x:94.9,y:300.9,alpha:1},0).to({regX:0.1,regY:0.5,scaleX:0.5741,scaleY:0.5741,skewX:-28.8538,skewY:151.1462,x:136,y:149.6,alpha:0},24,cjs.Ease.cubicIn).wait(8));

	// money_png_copy_copy
	this.instance_10 = new lib.money_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(75.65,242.75,1.1483,1.1483,0,-28.8541,151.1459,0,0.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(36).to({_off:false},0).to({regX:-0.1,regY:0.6,scaleX:0.5741,scaleY:0.5741,skewX:-28.8538,skewY:151.1462,x:130.35,y:116.2,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({regX:0,regY:0.1,scaleX:1.1483,scaleY:1.1483,skewX:-28.8541,skewY:151.1459,x:75.65,y:242.75,alpha:1},0).to({regX:-0.1,regY:0.6,scaleX:0.5741,scaleY:0.5741,skewX:-28.8538,skewY:151.1462,x:130.35,y:116.2,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({regX:0,regY:0.1,scaleX:1.1483,scaleY:1.1483,skewX:-28.8541,skewY:151.1459,x:75.65,y:242.75,alpha:1},0).to({regX:-0.1,regY:0.6,scaleX:0.5741,scaleY:0.5741,skewX:-28.8538,skewY:151.1462,x:130.35,y:116.2,alpha:0},24,cjs.Ease.cubicIn).wait(13));

	// money_png_copy
	this.instance_11 = new lib.money_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(152.2,251.7,1.1483,1.1483,0,-28.8541,151.1459,0.1,0.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(23).to({_off:false},0).to({regY:0.2,x:215.5,y:171.55,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({regY:0.1,x:152.2,y:251.7,alpha:1},0).to({regY:0.2,x:215.5,y:171.55,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({regY:0.1,x:152.2,y:251.7,alpha:1},0).to({regY:0.2,x:215.5,y:171.55,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({regY:0.1,x:152.2,y:251.7,alpha:1},0).to({regY:0.2,x:215.5,y:171.55,alpha:0},24,cjs.Ease.cubicIn).wait(1));

	// money_png_copy_copy_copy
	this.instance_12 = new lib.money_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(64.4,253,1.148,1.148,32.8454,0,0,0.2,0.1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(41).to({_off:false},0).to({regX:0.1,regY:0.3,scaleX:0.6888,scaleY:0.6888,rotation:32.8437,x:-1.85,y:154.6},24,cjs.Ease.quadIn).wait(1).to({regX:0.2,regY:0.1,scaleX:1.148,scaleY:1.148,rotation:32.8454,x:64.4,y:253},0).to({regX:0.1,regY:0.3,scaleX:0.6888,scaleY:0.6888,rotation:32.8437,x:-1.85,y:154.6},24,cjs.Ease.quadIn).wait(1).to({regX:0.2,regY:0.1,scaleX:1.148,scaleY:1.148,rotation:32.8454,x:64.4,y:253},0).to({regX:0.1,regY:0.3,scaleX:0.6888,scaleY:0.6888,rotation:32.8437,x:-1.85,y:154.6,alpha:0},24,cjs.Ease.quadIn).wait(8));

	// money_png_copy
	this.instance_13 = new lib.money_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(56.05,256.85,1.1487,1.1487,21.8377,0,0,0.3,0);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(36).to({_off:false},0).to({regX:0.2,regY:0.2,scaleX:0.6892,scaleY:0.6892,rotation:21.8363,x:1.85,y:150.95,alpha:0},24,cjs.Ease.quadIn).wait(1).to({regY:0.1,scaleX:1.1487,scaleY:1.1487,rotation:21.8377,x:72.85,y:242.75,alpha:1},0).to({regY:0.2,scaleX:0.6892,scaleY:0.6892,rotation:21.8363,x:1.85,y:150.95,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({regY:0.1,scaleX:1.1487,scaleY:1.1487,rotation:21.8377,x:72.85,y:242.75,alpha:1},0).to({regY:0.2,scaleX:0.6892,scaleY:0.6892,rotation:21.8363,x:1.85,y:150.95},24,cjs.Ease.quadIn).to({alpha:0},12).wait(1));

	// money_png
	this.instance_14 = new lib.money_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(23.4,271.4,1.1487,1.1487,21.8377,0,0,0.2,0);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(23).to({_off:false},0).to({regX:0,regY:0.4,scaleX:0.6892,scaleY:0.6892,rotation:21.8363,x:-39.7,y:195.8,alpha:0},24,cjs.Ease.quadIn).to({_off:true},1).wait(1).to({_off:false,regX:0.2,regY:0,scaleX:1.1487,scaleY:1.1487,rotation:21.8377,x:23.4,y:271.4,alpha:1},0).to({regX:0,regY:0.4,scaleX:0.6892,scaleY:0.6892,rotation:21.8363,x:-39.7,y:195.8,alpha:0},24,cjs.Ease.quadIn).wait(1).to({regX:0.2,regY:0,scaleX:1.1487,scaleY:1.1487,rotation:21.8377,x:23.4,y:271.4,alpha:1},0).to({regX:0,regY:0.4,scaleX:0.6892,scaleY:0.6892,rotation:21.8363,x:-39.7,y:195.8,alpha:0},24,cjs.Ease.quadIn).wait(1).to({regX:0.2,regY:0,scaleX:1.1487,scaleY:1.1487,rotation:21.8377,x:23.4,y:271.4,alpha:1},0).to({regX:0,regY:0.4,scaleX:0.6892,scaleY:0.6892,rotation:21.8363,x:-39.7,y:195.8,alpha:0},23,cjs.Ease.quadIn).wait(1));

	// logo_png
	this.instance_15 = new lib.logo_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(72.2,31.8);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({alpha:1},14,cjs.Ease.quartInOut).wait(101).to({alpha:0},7).wait(1));

	// kv_bg_jpg
	this.instance_16 = new lib.bg();
	this.instance_16.parent = this;
	this.instance_16.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(123));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.9,288.8,298.79999999999995,362.2);
// library properties:
lib.properties = {
	id: 'BFB39840DC2841B68D79C9F818A6AF0D',
	width: 160,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png?1568272636019", id:"index_atlas_"}
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
an.compositions['BFB39840DC2841B68D79C9F818A6AF0D'] = {
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;