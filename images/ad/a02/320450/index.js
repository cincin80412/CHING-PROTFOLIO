(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[870,0,25,31],[539,0,329,269],[0,0,537,270],[0,684,640,158],[0,519,640,163],[0,844,640,105],[0,272,514,245],[539,271,358,110]]},
		{name:"index_atlas_NP_", frames: [[0,902,640,900],[0,0,640,900]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
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



(lib.downtxt = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.gril = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.line2 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.line = function() {
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



(lib.toptxt = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(7);
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


(lib.title2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.title();
	this.instance.parent = this;
	this.instance.setTransform(-257,-122.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.title2, new cjs.Rectangle(-257,-122.5,514,245), null);


(lib.sendbtn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sendbtn();
	this.instance.parent = this;
	this.instance.setTransform(-320,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sendbtn_1, new cjs.Rectangle(-320,-52.5,640,105), null);


(lib.line2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.line2();
	this.instance.parent = this;
	this.instance.setTransform(-320,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.line2_1, new cjs.Rectangle(-320,-79,640,158), null);


(lib.bg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg2();
	this.instance.parent = this;
	this.instance.setTransform(-320,-450);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2_1, new cjs.Rectangle(-320,-450,640,900), null);


(lib.toptxt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.toptxt();
	this.instance.parent = this;
	this.instance.setTransform(-179,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.toptxt_1, new cjs.Rectangle(-179,-55,358,110), null);


(lib.line_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.line();
	this.instance.parent = this;
	this.instance.setTransform(-320,-81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.line_1, new cjs.Rectangle(-320,-81.5,640,163), null);


(lib.gril_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gril();
	this.instance.parent = this;
	this.instance.setTransform(-268.5,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gril_1, new cjs.Rectangle(-268.5,-135,537,270), null);


(lib.downtxt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.downtxt();
	this.instance.parent = this;
	this.instance.setTransform(-164.5,-134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.downtxt_1, new cjs.Rectangle(-164.5,-134.5,329,269), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-320,-450);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(-320,-450,640,900), null);


(lib.arrow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(-12.5,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow_1, new cjs.Rectangle(-12.5,-15.5,25,31), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow.png
	this.instance = new lib.arrow_1();
	this.instance.parent = this;
	this.instance.setTransform(463.5,845.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(114).to({_off:false},0).to({alpha:1},9).to({x:483.5},7).to({x:463.5},7).to({x:483.5},7).to({x:463.5},7).to({x:483.5},7).to({x:463.5},7).to({x:483.5},7).to({x:463.5},7).to({x:483.5},7).to({x:463.5},7).to({x:483.5},7).to({x:463.5},7).to({alpha:0},6).wait(7));

	// send-btn.png
	this.instance_1 = new lib.sendbtn_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(320,867.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(114).to({_off:false},0).to({y:847.5,alpha:1},9,cjs.Ease.cubicInOut).wait(84).to({alpha:0},12).wait(1));

	// down-txt.png
	this.instance_2 = new lib.downtxt_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(338.1,682.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(106).to({_off:false},0).to({y:654.5,alpha:1},10,cjs.Ease.cubicInOut).to({y:662.5},6,cjs.Ease.cubicInOut).wait(85).to({alpha:0},12).wait(1));

	// line-2.png
	this.instance_3 = new lib.line2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(321,698);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(125).to({_off:false},0).wait(24).to({alpha:0},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0},0).wait(2).to({alpha:1},0).wait(29).to({alpha:0},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0},0).wait(2).to({alpha:1},0).wait(17).to({alpha:0},12).wait(1));

	// gril.png
	this.instance_4 = new lib.gril_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(326.1,450.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(102).to({_off:false},0).to({alpha:1},16,cjs.Ease.cubicInOut).wait(89).to({alpha:0},12).wait(1));

	// title.png
	this.instance_5 = new lib.title2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(318,213.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(99).to({_off:false},0).to({y:193.5,alpha:1},12,cjs.Ease.cubicInOut).to({y:213.5},8,cjs.Ease.cubicInOut).wait(88).to({alpha:0},12).wait(1));

	// bg
	this.instance_6 = new lib.bg2_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(320,451);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(97).to({_off:false},0).to({alpha:1},12,cjs.Ease.cubicInOut).wait(98).to({alpha:0},12).wait(1));

	// line.png
	this.instance_7 = new lib.line_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(320,698.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(17).to({_off:false},0).wait(19).to({alpha:0},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0},0).wait(2).to({alpha:1},0).wait(25).to({alpha:0},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0},0).wait(2).to({alpha:1},0).wait(16).to({alpha:0},10,cjs.Ease.cubicInOut).to({_off:true},1).wait(120));

	// gril.png
	this.instance_8 = new lib.gril_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(323.5,525);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},0).to({alpha:1},11,cjs.Ease.cubicOut).wait(76).to({alpha:0},10,cjs.Ease.cubicInOut).to({_off:true},1).wait(120));

	// down-txt.png
	this.instance_9 = new lib.downtxt_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(336.5,769.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10).to({_off:false},0).to({y:749.5,alpha:1},11,cjs.Ease.cubicInOut).wait(68).to({alpha:0},10,cjs.Ease.cubicInOut).to({_off:true},1).wait(120));

	// top-txt.png
	this.instance_10 = new lib.toptxt_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(319,80);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2).to({_off:false},0).to({y:128,alpha:1},11,cjs.Ease.cubicInOut).to({y:120},7,cjs.Ease.cubicInOut).wait(69).to({alpha:0},10,cjs.Ease.cubicInOut).to({_off:true},1).wait(120));

	// bg.jpg
	this.instance_11 = new lib.bg_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(319.1,448.3,1.077,1.076,0,0,0,-0.1,-0.4);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:0,regY:0,scaleX:1,scaleY:1,x:320,y:450,alpha:1},13,cjs.Ease.cubicOut).wait(76).to({alpha:0},10,cjs.Ease.cubicInOut).to({_off:true},1).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(294.7,414.4,689,968.8);
// library properties:
lib.properties = {
	id: 'ECD0D134F87D422AB71DFCE9BE726A5A',
	width: 640,
	height: 900,
	fps: 30,
	color: "#F7CED5",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_P_.png", id:"index_atlas_P_"},
		{src:"images/index_atlas_NP_.jpg", id:"index_atlas_NP_"}
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
an.compositions['ECD0D134F87D422AB71DFCE9BE726A5A'] = {
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