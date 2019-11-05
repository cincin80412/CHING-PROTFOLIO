(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[282,967,149,45],[302,527,69,14],[302,101,142,139],[0,602,364,363],[0,0,300,600],[302,242,119,127],[302,449,96,35],[302,486,47,39],[302,371,106,76],[0,967,280,44],[302,0,290,99]]}
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

}).prototype = getMCSymbolPrototype(lib.title_1, new cjs.Rectangle(-145,-49.5,290,99), null);


(lib.s_title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.stitle();
	this.instance.parent = this;
	this.instance.setTransform(-123,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.s_title, new cjs.Rectangle(-123,-32.5,280,44), null);


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

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-125,300,600), null);


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
	this.instance_1.setTransform(178.7,72.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({alpha:1},6).to({rotation:73.9998},35).wait(1).to({rotation:0},31).wait(1).to({rotation:64.0003,x:178.65,y:72.55,alpha:0},27).wait(1));

	// title_png
	this.instance_2 = new lib.title_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.45,32.55,1.0219,1.0219,0,0,0,0.3,0.4);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:0.2,y:120.8,alpha:1},25,cjs.Ease.backInOut).wait(90).to({alpha:0},7).wait(1));

	// s_title_png
	this.instance_3 = new lib.s_title();
	this.instance_3.parent = this;
	this.instance_3.setTransform(133.25,208.1,0.9926,0.9926,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({alpha:1},16,cjs.Ease.quartInOut).wait(93).to({alpha:0},7).wait(1));

	// light_png_copy
	this.instance_4 = new lib.light_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(253.8,63.5,1,1,0,0,180);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({alpha:1},16,cjs.Ease.bounceInOut).wait(85).to({alpha:0},7).wait(1));

	// light_png
	this.instance_5 = new lib.light_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(46.55,63.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({alpha:1},16,cjs.Ease.bounceInOut).wait(85).to({alpha:0},7).wait(1));

	// btn_txt_png
	this.instance_6 = new lib.btntxt_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(159.2,371);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({alpha:1},12).wait(85).to({alpha:0},7).wait(1));

	// btn_png
	this.instance_7 = new lib.btn_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(152,384.6);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:360.05,alpha:1},20,cjs.Ease.backInOut).wait(8).to({rotation:40.9995,x:152.05},16).to({rotation:-45,x:152},39).to({scaleX:0.9999,scaleY:0.9999,rotation:35.0006,x:152.05},32).to({scaleX:1,scaleY:1,rotation:0,x:152,alpha:0},7).wait(1));

	// game_png
	this.instance_8 = new lib.game_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(114.6,312.55,0.9594,0.9594);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:263.8,alpha:1},20,cjs.Ease.backInOut).wait(95).to({y:260.05},0).to({alpha:0},7).wait(1));

	// money_png_copy_copy_copy
	this.instance_9 = new lib.money_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(169.85,368.45,1.1499,1.1499,0,0,180,0.1,0);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(41).to({_off:false},0).to({regY:0.1,scaleX:0.575,scaleY:0.575,x:279.1,y:255.4,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({regY:0,scaleX:1.1499,scaleY:1.1499,x:169.85,y:368.45,alpha:1},0).to({regY:0.1,scaleX:0.575,scaleY:0.575,x:279.1,y:255.4,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({regY:0,scaleX:1.1499,scaleY:1.1499,x:169.85,y:368.45,alpha:1},0).to({regY:0.1,scaleX:0.575,scaleY:0.575,x:279.1,y:255.4,alpha:0},24,cjs.Ease.cubicIn).wait(8));

	// money_png_copy_copy
	this.instance_10 = new lib.money_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(181.05,308.05,1.1499,1.1499,0,0,180,0.1,0);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(36).to({_off:false},0).to({regY:0.1,scaleX:0.575,scaleY:0.575,x:290.3,y:223.4,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({regY:0,scaleX:1.1499,scaleY:1.1499,x:181.05,y:308.05,alpha:1},0).to({regY:0.1,scaleX:0.575,scaleY:0.575,x:290.3,y:223.4,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({regY:0,scaleX:1.1499,scaleY:1.1499,x:181.05,y:308.05,alpha:1},0).to({regY:0.1,scaleX:0.575,scaleY:0.575,x:290.3,y:223.4,alpha:0},24,cjs.Ease.cubicIn).wait(13));

	// money_png_copy
	this.instance_11 = new lib.money_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(244,352.9,1.1499,1.1499,0,0,180,0.1,0);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(23).to({_off:false},0).to({regY:0.1,x:338.3,y:313.2,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({regY:0,x:244,y:352.9,alpha:1},0).to({regY:0.1,x:338.3,y:313.2,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({regY:0,x:244,y:352.9,alpha:1},0).to({regY:0.1,x:338.3,y:313.2,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({regY:0,x:244,y:352.9,alpha:1},0).to({regY:0.1,x:338.3,y:313.2,alpha:0},24,cjs.Ease.cubicIn).wait(1));

	// money_png_copy_copy_copy
	this.instance_12 = new lib.money_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(85.95,293.1,1.1499,1.1499,0,0,0,0.1,0);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(41).to({_off:false},0).to({regY:0.1,scaleX:0.69,scaleY:0.69,x:-23.3,y:246.3},24,cjs.Ease.quadIn).wait(1).to({regY:0,scaleX:1.1499,scaleY:1.1499,x:85.95,y:293.1},0).to({regY:0.1,scaleX:0.69,scaleY:0.69,x:-23.3,y:246.3},24,cjs.Ease.quadIn).wait(1).to({regY:0,scaleX:1.1499,scaleY:1.1499,x:85.95,y:293.1},0).to({regY:0.1,scaleX:0.69,scaleY:0.69,x:-23.3,y:246.3,alpha:0},24,cjs.Ease.quadIn).wait(8));

	// money_png_copy
	this.instance_13 = new lib.money_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(97.85,322.75,1.1499,1.1499,0,0,0,0.1,0);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(36).to({_off:false},0).to({regY:0.2,scaleX:0.69,scaleY:0.69,x:8.05,y:244.6,alpha:0},24,cjs.Ease.quadIn).wait(1).to({regY:0,scaleX:1.1499,scaleY:1.1499,x:108.3,y:303.3,alpha:1},0).to({regY:0.2,scaleX:0.69,scaleY:0.69,x:8.05,y:244.6,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({regY:0,scaleX:1.1499,scaleY:1.1499,x:108.3,y:303.3,alpha:1},0).to({regY:0.2,scaleX:0.69,scaleY:0.69,x:8.05,y:244.6},24,cjs.Ease.quadIn).to({alpha:0},12).wait(1));

	// money_png
	this.instance_14 = new lib.money_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(61.9,352.9,1.1499,1.1499,0,0,0,0.1,0);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(23).to({_off:false},0).to({regY:0.1,scaleX:0.69,scaleY:0.69,x:-24.9,y:306.1,alpha:0},24,cjs.Ease.quadIn).to({_off:true},1).wait(1).to({_off:false,regY:0,scaleX:1.1499,scaleY:1.1499,x:61.9,y:352.9,alpha:1},0).to({regY:0.1,scaleX:0.69,scaleY:0.69,x:-24.9,y:306.1,alpha:0},24,cjs.Ease.quadIn).wait(1).to({regY:0,scaleX:1.1499,scaleY:1.1499,x:61.9,y:352.9,alpha:1},0).to({regY:0.1,scaleX:0.69,scaleY:0.69,x:-24.9,y:306.1,alpha:0},24,cjs.Ease.quadIn).wait(1).to({regY:0,scaleX:1.1499,scaleY:1.1499,x:61.9,y:352.9,alpha:1},0).to({regY:0.1,scaleX:0.69,scaleY:0.69,x:-24.9,y:306.1,alpha:0},23,cjs.Ease.quadIn).wait(1));

	// logo_png
	this.instance_15 = new lib.logo_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(140.2,26.8);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({alpha:1},14,cjs.Ease.quartInOut).wait(101).to({alpha:0},7).wait(1));

	// kv_bg_jpg
	this.instance_16 = new lib.bg();
	this.instance_16.parent = this;
	this.instance_16.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(123));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(108.9,272.8,256.5,378.2);
// library properties:
lib.properties = {
	id: 'BFB39840DC2841B68D79C9F818A6AF0D',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png?1568271282953", id:"index_atlas_"}
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