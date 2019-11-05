(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[290,501,81,29],[290,282,142,139],[0,282,288,250],[0,0,336,280],[338,0,119,127],[338,129,76,28],[416,129,47,39],[290,423,106,76],[0,635,246,65],[0,534,290,99]]}
];


// symbols:



(lib.btntxt = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.btn = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.game = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.kvbg = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.light = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.money = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.prod_light = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.stitle = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title = function() {
	this.initialize(ss["index_atlas_"]);
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

}).prototype = getMCSymbolPrototype(lib.s_title, new cjs.Rectangle(-123,-32.5,246,65), null);


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

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-38,-14,76,28), null);


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

}).prototype = getMCSymbolPrototype(lib.game_1, new cjs.Rectangle(-144.5,-72,288,250), null);


(lib.btntxt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.btntxt();
	this.instance.parent = this;
	this.instance.setTransform(-40.5,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btntxt_1, new cjs.Rectangle(-40.5,-14.5,81,29), null);


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

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-125,336,280), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// prod_light_png
	this.instance = new lib.prodlight();
	this.instance.parent = this;
	this.instance.setTransform(201.1,47);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({alpha:1},6).to({rotation:73.9998},35).wait(1).to({rotation:0},31).wait(1).to({rotation:64.0003,x:201.05,y:46.95,alpha:0},27).wait(1));

	// title_png
	this.instance_1 = new lib.title_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(168,3,1.1118,1.1118,0,0,0,0,0.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:0,y:99.1,alpha:1},25,cjs.Ease.backInOut).wait(90).to({alpha:0},7).wait(1));

	// s_title_png
	this.instance_2 = new lib.s_title();
	this.instance_2.parent = this;
	this.instance_2.setTransform(168,187,1.1118,1.1118,0,0,0,0,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({alpha:1},16,cjs.Ease.quartInOut).wait(93).to({alpha:0},7).wait(1));

	// light_png_copy
	this.instance_3 = new lib.light_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(285.8,63.5,1,1,0,0,180);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({alpha:1},16,cjs.Ease.bounceInOut).wait(85).to({alpha:0},7).wait(1));

	// light_png
	this.instance_4 = new lib.light_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(46.55,63.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({alpha:1},16,cjs.Ease.bounceInOut).wait(85).to({alpha:0},7).wait(1));

	// btn_txt_png
	this.instance_5 = new lib.btntxt_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(168.8,263.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:false},0).to({alpha:1},12).wait(85).to({alpha:0},7).wait(1));

	// btn_png
	this.instance_6 = new lib.btn_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(168,295);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:270.45,alpha:1},20,cjs.Ease.backInOut).wait(8).to({rotation:40.9995,x:168.05},16).to({rotation:-45,x:168},39).to({scaleX:0.9999,scaleY:0.9999,rotation:35.0006,x:168.05},32).to({scaleX:1,scaleY:1,rotation:0,x:168,alpha:0},7).wait(1));

	// game_png
	this.instance_7 = new lib.game_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(167.55,253.65,1.17,1.17);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:194.2,alpha:1},20,cjs.Ease.backInOut).wait(95).to({y:189.65},0).to({alpha:0},7).wait(1));

	// money_png_copy_copy_copy
	this.instance_8 = new lib.money_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(227,236.15,1,1,0,0,180,0.1,0);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(41).to({_off:false},0).to({regY:0.1,scaleX:0.5,scaleY:0.5,x:322,y:137.85,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({regY:0,scaleX:1,scaleY:1,x:227,y:236.15,alpha:1},0).to({regY:0.1,scaleX:0.5,scaleY:0.5,x:322,y:137.85,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({regY:0,scaleX:1,scaleY:1,x:227,y:236.15,alpha:1},0).to({regY:0.1,scaleX:0.5,scaleY:0.5,x:322,y:137.85,alpha:0},24,cjs.Ease.cubicIn).wait(8));

	// money_png_copy_copy
	this.instance_9 = new lib.money_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(227,211.45,1,1,0,0,180,0.1,0);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(36).to({_off:false},0).to({regY:0.1,scaleX:0.5,scaleY:0.5,x:322,y:137.85,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({regY:0,scaleX:1,scaleY:1,x:227,y:211.45,alpha:1},0).to({regY:0.1,scaleX:0.5,scaleY:0.5,x:322,y:137.85,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({regY:0,scaleX:1,scaleY:1,x:227,y:211.45,alpha:1},0).to({regY:0.1,scaleX:0.5,scaleY:0.5,x:322,y:137.85,alpha:0},24,cjs.Ease.cubicIn).wait(13));

	// money_png_copy
	this.instance_10 = new lib.money_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(240,250.45,1,1,0,0,180,0.1,0);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(23).to({_off:false},0).to({x:322,y:215.85,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({x:240,y:250.45,alpha:1},0).to({x:322,y:215.85,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({x:240,y:250.45,alpha:1},0).to({x:322,y:215.85,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({x:240,y:250.45,alpha:1},0).to({x:322,y:215.85,alpha:0},24,cjs.Ease.cubicIn).wait(1));

	// money_png_copy_copy_copy
	this.instance_11 = new lib.money_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(116.5,198.45,1,1,0,0,0,0.1,0);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(41).to({_off:false},0).to({regY:0.1,scaleX:0.6,scaleY:0.6,x:21.45,y:157.75},24,cjs.Ease.quadIn).wait(1).to({regY:0,scaleX:1,scaleY:1,x:116.5,y:198.45},0).to({regY:0.1,scaleX:0.6,scaleY:0.6,x:21.45,y:157.75},24,cjs.Ease.quadIn).wait(1).to({regY:0,scaleX:1,scaleY:1,x:116.5,y:198.45},0).to({regY:0.1,scaleX:0.6,scaleY:0.6,x:21.45,y:157.75,alpha:0},24,cjs.Ease.quadIn).wait(8));

	// money_png_copy
	this.instance_12 = new lib.money_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(87.9,267.35,1,1,0,0,0,0.1,0);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(36).to({_off:false},0).to({regY:0.1,scaleX:0.6,scaleY:0.6,x:9.75,y:199.35,alpha:0},24,cjs.Ease.quadIn).wait(1).to({regY:0,scaleX:1,scaleY:1,x:97,y:250.45,alpha:1},0).to({regY:0.1,scaleX:0.6,scaleY:0.6,x:9.75,y:199.35,alpha:0},24,cjs.Ease.cubicIn).wait(1).to({regY:0,scaleX:1,scaleY:1,x:97,y:250.45,alpha:1},0).to({regY:0.1,scaleX:0.6,scaleY:0.6,x:9.75,y:199.35},24,cjs.Ease.quadIn).to({alpha:0},12).wait(1));

	// money_png
	this.instance_13 = new lib.money_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(97,250.45,1,1,0,0,0,0.1,0);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(23).to({_off:false},0).to({regY:0.1,scaleX:0.6,scaleY:0.6,x:21.45,y:209.75,alpha:0},24,cjs.Ease.quadIn).to({_off:true},1).wait(1).to({_off:false,regY:0,scaleX:1,scaleY:1,x:97,y:250.45,alpha:1},0).to({regY:0.1,scaleX:0.6,scaleY:0.6,x:21.45,y:209.75,alpha:0},24,cjs.Ease.quadIn).wait(1).to({regY:0,scaleX:1,scaleY:1,x:97,y:250.45,alpha:1},0).to({regY:0.1,scaleX:0.6,scaleY:0.6,x:21.45,y:209.75,alpha:0},24,cjs.Ease.quadIn).wait(1).to({regY:0,scaleX:1,scaleY:1,x:97,y:250.45,alpha:1},0).to({regY:0.1,scaleX:0.6,scaleY:0.6,x:21.45,y:209.75,alpha:0},23,cjs.Ease.quadIn).wait(1));

	// logo_png
	this.instance_14 = new lib.logo_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(65,22);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({alpha:1},14,cjs.Ease.quartInOut).wait(101).to({alpha:0},7).wait(1));

	// kv_bg_jpg
	this.instance_15 = new lib.bg();
	this.instance_15.parent = this;
	this.instance_15.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(123));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(155.1,78.3,190.50000000000003,389.5);
// library properties:
lib.properties = {
	id: 'BFB39840DC2841B68D79C9F818A6AF0D',
	width: 336,
	height: 280,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png?1568260873577", id:"index_atlas_"}
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