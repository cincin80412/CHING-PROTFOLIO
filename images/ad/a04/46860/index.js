(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[664,182,149,45],[572,182,90,83],[366,182,204,206],[0,0,364,363],[0,390,468,60],[896,0,119,127],[815,207,123,46],[940,207,47,39],[896,129,106,76],[664,255,167,32],[366,0,528,180]]}
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

}).prototype = getMCSymbolPrototype(lib.title_1, new cjs.Rectangle(-145,-49.5,528,180), null);


(lib.s_title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.stitle();
	this.instance.parent = this;
	this.instance.setTransform(-123,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.s_title, new cjs.Rectangle(-123,-32.5,167,32), null);


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

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-38,-14,123,46), null);


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

}).prototype = getMCSymbolPrototype(lib.btntxt_1, new cjs.Rectangle(-40.5,-14.5,90,83), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.kvbg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-125,468,60), null);


(lib.bbbbbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-102,-103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bbbbbtn, new cjs.Rectangle(-102,-103,204,206), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt_big_btn
	this.instance = new lib.btntxtbig();
	this.instance.parent = this;
	this.instance.setTransform(150.1,622.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({y:558.3},15,cjs.Ease.backInOut).wait(7).to({alpha:0.4414},6).to({alpha:1},6).to({alpha:0.4414},6).to({alpha:1},6).to({alpha:0.4414},6).to({alpha:1},6).to({alpha:0.4414},6).to({alpha:1},6).to({alpha:0.4414},6).to({alpha:1},6).to({alpha:0.4414},6).to({alpha:1},6).to({alpha:0.4414},6).to({alpha:1},6).to({alpha:0},5).wait(1));

	// prod_light_png
	this.instance_1 = new lib.prodlight();
	this.instance_1.parent = this;
	this.instance_1.setTransform(131.8,10.2,0.6316,0.6316,0,0,0,0,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({alpha:1},6).to({regX:0.1,regY:0,rotation:74.0017},35).wait(1).to({regX:0,regY:0.1,rotation:0},31).wait(1).to({regX:0.2,regY:0,rotation:64.0014,alpha:0},27).wait(1));

	// title_png
	this.instance_2 = new lib.title_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(76.6,-5.5,0.3223,0.3223,0,0,0,1,1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:24.55,alpha:1},25,cjs.Ease.backInOut).wait(90).to({alpha:0},7).wait(1));

	// light_png_copy
	this.instance_3 = new lib.light_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(180.8,63.5,1,1,0,0,180);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({alpha:1},16,cjs.Ease.bounceInOut).wait(85).to({alpha:0},7).wait(1));

	// light_png
	this.instance_4 = new lib.light_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(43.55,63.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({alpha:1},16,cjs.Ease.bounceInOut).wait(85).to({alpha:0},7).wait(1));

	// btn_txt_png
	this.instance_5 = new lib.btntxt_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(425.2,14.65,0.5614,0.5614,0,0,0,0.2,0.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:false},0).to({alpha:1},12).wait(85).to({alpha:0},7).wait(1));

	// btttn
	this.instance_6 = new lib.bbbbbtn();
	this.instance_6.parent = this;
	this.instance_6.setTransform(571.65,30.9,0.6624,0.6624,0,0,0,0.2,0.1);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:0.1,regY:0.2,x:419.85,y:31.2,alpha:1},20,cjs.Ease.backInOut).wait(15).to({regX:0,regY:0.1,scaleX:0.6623,scaleY:0.6623,rotation:-46.0025,y:31.25},41).to({regX:0.1,regY:0.2,scaleX:0.6624,scaleY:0.6624,rotation:0,y:31.2},39).to({alpha:0},7).wait(1));

	// s_title_png
	this.instance_7 = new lib.s_title();
	this.instance_7.parent = this;
	this.instance_7.setTransform(321.9,56.9,0.9235,0.9235,0,0,0,0.4,0.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({alpha:1},16,cjs.Ease.quartInOut).wait(93).to({alpha:0},7).wait(1));

	// game_png
	this.instance_8 = new lib.game_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(506.75,-41.55,0.6774,0.6774,0,0,0,0.2,-0.2);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:0.3,x:411.35,alpha:1},20,cjs.Ease.backInOut).wait(95).to({alpha:0},7).wait(1));

	// money_png_copy_copy_copy
	this.instance_9 = new lib.money_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(362.8,22.35,0.7411,0.7411,0,-130.1045,49.8955,0.3,0);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(41).to({_off:false},0).to({regX:0.8,regY:0.2,scaleX:0.3705,scaleY:0.3705,skewX:-130.104,skewY:49.896,x:261.85,y:15.45,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({regX:0.3,regY:0,scaleX:0.7411,scaleY:0.7411,skewX:-130.1045,skewY:49.8955,x:362.8,y:22.35,alpha:1},0).to({regX:0.8,regY:0.2,scaleX:0.3705,scaleY:0.3705,skewX:-130.104,skewY:49.896,x:261.85,y:15.45,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({regX:0.3,regY:0,scaleX:0.7411,scaleY:0.7411,skewX:-130.1045,skewY:49.8955,x:362.8,y:22.35,alpha:1},0).to({regX:0.8,regY:0.2,scaleX:0.3705,scaleY:0.3705,skewX:-130.104,skewY:49.896,x:261.85,y:15.45,alpha:0},24,cjs.Ease.cubicIn).to({regX:0.6,regY:0.1,x:250.9,y:15.85},7).wait(1));

	// money_png_copy
	this.instance_10 = new lib.money_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(379.95,11.6,0.741,0.741,-14.234,0,0,0.1,0.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(23).to({_off:false},0).to({regY:0.2,x:314.8,y:1.55,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({regY:0.4,x:379.95,y:11.6,alpha:1},0).to({regY:0.2,x:314.8,y:1.55,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({regY:0.4,x:379.95,y:11.6,alpha:1},0).to({regY:0.2,x:314.8,y:1.55,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({regY:0.4,x:379.95,y:11.6,alpha:1},0).to({regY:0.2,x:306.15,y:-5.1,alpha:0},24,cjs.Ease.cubicIn).wait(1));

	// money_png_copy_copy_copy
	this.instance_11 = new lib.money_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(349.85,47.35,0.6686,0.6686,-35.8917,0,0,0.1,0.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(41).to({_off:false},0).to({regX:0,regY:0.5,scaleX:0.4011,scaleY:0.4011,rotation:-35.8899,x:282.4,y:62.6},24,cjs.Ease.quadIn).wait(1).to({regX:0.1,regY:0.2,scaleX:0.6686,scaleY:0.6686,rotation:-35.8917,x:349.85,y:47.35},0).to({regX:0,regY:0.5,scaleX:0.4011,scaleY:0.4011,rotation:-35.8899,x:282.4,y:62.6},24,cjs.Ease.quadIn).wait(1).to({regX:0.1,regY:0.2,scaleX:0.6686,scaleY:0.6686,rotation:-35.8917,x:349.85,y:47.35},0).to({regX:0,regY:0.5,scaleX:0.4011,scaleY:0.4011,rotation:-35.8899,x:282.4,y:62.6,alpha:0},24,cjs.Ease.quadIn).to({x:271.75,y:58.7},7).wait(1));

	// logo_png
	this.instance_12 = new lib.logo_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(274.25,10.9,0.4273,0.4273,0,0,0,0.2,0.4);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({alpha:1},14,cjs.Ease.quartInOut).wait(101).to({alpha:0},7).wait(1));

	// kv_bg_jpg
	this.instance_13 = new lib.bg();
	this.instance_13.parent = this;
	this.instance_13.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(123));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(218.1,-60.1,446.69999999999993,711.1);
// library properties:
lib.properties = {
	id: 'BFB39840DC2841B68D79C9F818A6AF0D',
	width: 468,
	height: 60,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png?1568278668187", id:"index_atlas_"}
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