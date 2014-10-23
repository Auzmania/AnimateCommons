// EdgeCommons for Edge Animate v1.4.0 +++ Visit edgecommons.org for documentation, updates and examples +++ Copyright (c) 2013 by Simon Widjaja +++ Distributed under the terms of the MIT license (http://www.opensource.org/licenses/mit-license.html) +++ This notice shall be included in all copies or substantial portions of the Software.


(function($){function CollisionCoords(proto,containment)
{if(!proto)
{this.x1=this.y1=this.x2=this.y2=0;this.proto=null;}
else if("offset"in proto)
{var d=proto.data("jquery-collision-coordinates");if(d)
{this.x1=d.x1;this.y1=d.y1;this.x2=d.x2;this.y2=d.y2;}
else if(containment&&containment.length&&containment.length>=4)
{this.x1=containment[0];this.y1=containment[1];this.x2=containment[2]+proto.outerWidth(true);this.y2=containment[3]+proto.outerHeight(true);}
else if(proto.parent().length<=0)
{this.x1=parseInt(proto.css("left"))||0;this.y1=parseInt(proto.css("top"))||0;this.x2=parseInt(proto.css("width"))||0;this.y2=parseInt(proto.css("height"))||0;this.x2+=this.x1;this.x2+=(parseInt(proto.css("margin-left"))||0)+(parseInt(proto.css("border-left"))||0)+(parseInt(proto.css("padding-left"))||0)+
(parseInt(proto.css("padding-right"))||0)+(parseInt(proto.css("border-right"))||0)+(parseInt(proto.css("margin-right"))||0);this.y2+=this.y1;this.y2+=(parseInt(proto.css("margin-top"))||0)+(parseInt(proto.css("border-top"))||0)+(parseInt(proto.css("padding-top"))||0)+
(parseInt(proto.css("padding-bottom"))||0)+(parseInt(proto.css("border-bottom"))||0)+(parseInt(proto.css("margin-bottom"))||0);}
else
{var o=proto.offset();this.x1=o.left-(parseInt(proto.css("margin-left"))||0);this.y1=o.top-(parseInt(proto.css("margin-top"))||0);this.x2=this.x1+proto.outerWidth(true);this.y2=this.y1+proto.outerHeight(true);}
this.proto=proto;}
else if("x1"in proto)
{this.x1=proto.x1;this.y1=proto.y1;this.x2=proto.x2;this.y2=proto.y2;this.proto=proto;}
if("dir"in proto)
{this.dir=proto.dir;}}
CollisionCoords.prototype.innerContainer=function()
{var clone=new CollisionCoords(this);if(this.proto["css"])
{clone.x1+=parseInt(this.proto.css("margin-left"))||0;clone.x1+=parseInt(this.proto.css("border-left"))||0;clone.x1+=parseInt(this.proto.css("padding-left"))||0;clone.x2-=parseInt(this.proto.css("padding-right"))||0;clone.x2-=parseInt(this.proto.css("border-right"))||0;clone.x2-=parseInt(this.proto.css("margin-right"))||0;clone.y1+=parseInt(this.proto.css("margin-top"))||0;clone.y1+=parseInt(this.proto.css("border-top"))||0;clone.y1+=parseInt(this.proto.css("padding-top"))||0;clone.y2-=parseInt(this.proto.css("padding-bottom"))||0;clone.y2-=parseInt(this.proto.css("border-bottom"))||0;clone.y2-=parseInt(this.proto.css("margin-bottom"))||0;}
return clone;}
CollisionCoords.prototype.move=function(dx,dy)
{this.x1+=dx;this.x2+=dx;this.y1+=dy;this.y2+=dy;return this;};CollisionCoords.prototype.update=function(obj)
{if("x1"in obj)this.x1=obj["x1"];if("x2"in obj)this.x1=obj["x2"];if("y1"in obj)this.x1=obj["y1"];if("y2"in obj)this.x1=obj["y2"];if("left"in obj)
{var w=this.x2-this.x1;this.x1=obj["left"];this.x2=this.x1+w;}
if("top"in obj)
{var h=this.y2-this.y1;this.y1=obj["top"];this.y2=this.y1+h;}
if("offset"in obj)
{var o=obj.offset();this.update(o);this.x2=this.x1+obj.width();this.y2=this.y1+obj.height();}
if("dir"in obj)this.x1=obj["dir"];return this;};CollisionCoords.prototype.width=function(){return(this.x2-this.x1);};CollisionCoords.prototype.height=function(){return(this.y2-this.y1);};CollisionCoords.prototype.centerx=function(){return(this.x1+this.x2)/2;};CollisionCoords.prototype.centery=function(){return(this.y1+this.y2)/2;};CollisionCoords.prototype.toString=function()
{return(this.proto["get"]?"#"+this.proto.get(0).id:"")+"["+[this.x1,this.y1,this.x2,this.y2].join(",")+"]";};CollisionCoords.EPSILON=0.001;CollisionCoords.prototype.containsPoint=function(x,y,inclusive)
{if(!inclusive)inclusive=false;var epsilon=(inclusive?-1:+1)*CollisionCoords.EPSILON;if((x>(this.x1+epsilon)&&x<(this.x2-epsilon))&&(y>(this.y1+epsilon)&&y<(this.y2-epsilon)))
return true;else
return false;};CollisionCoords.prototype.overlaps=function(other,inclusive)
{var hit=this._overlaps(other,inclusive);if(hit.length>0)return hit;hit=other._overlaps(this,inclusive);if(hit.length>0)
{hit[0].dir=hit[0].dir=="Inside"?"Outside":hit[0].dir=="Outside"?"Inside":hit[0].dir=="N"?"S":hit[0].dir=="S"?"N":hit[0].dir=="W"?"E":hit[0].dir=="E"?"W":hit[0].dir=="NE"?"SW":hit[0].dir=="SW"?"NE":hit[0].dir=="SE"?"NW":hit[0].dir=="NW"?"SE":undefined;}
return hit||[];}
CollisionCoords.prototype._overlaps=function(other,inclusive)
{var c1=other;var c2=this;if(!inclusive)inclusive=false;var ax=c1.centerx();var ay=c1.centery();var points=[[c1.x1,c1.y1,"SE"],[c1.x2,c1.y1,"SW"],[c1.x2,c1.y2,"NW"],[c1.x1,c1.y2,"NE"],[ax,c1.y1,"S"],[c1.x2,ay,"W"],[ax,c1.y2,"N"],[c1.x1,ay,"E"],[ax,ay,undefined]];var hit=null;var dirs={NW:false,N:false,NE:false,E:false,SE:false,S:false,SW:false,W:false};for(var i=0;i<points.length;i++)
{if(this.containsPoint(points[i][0],points[i][1],inclusive))
{if(points[i][2])dirs[points[i][2]]=true;if(hit)continue;hit=[new CollisionCoords({x1:Math.max(c1.x1,c2.x1),y1:Math.max(c1.y1,c2.y1),x2:Math.min(c1.x2,c2.x2),y2:Math.min(c1.y2,c2.y2),dir:points[i][2]})];}}
if(hit)
{if(dirs["NW"]&&dirs["NE"])hit[0].dir="N";if(dirs["NE"]&&dirs["SE"])hit[0].dir="E";if(dirs["SE"]&&dirs["SW"])hit[0].dir="S";if(dirs["SW"]&&dirs["NW"])hit[0].dir="W";if(dirs["NW"]&&dirs["NE"]&&dirs["SE"]&&dirs["SW"])hit[0].dir="Outside";if(!dirs["NW"]&&!dirs["NE"]&&!dirs["SE"]&&!dirs["SW"]&&!dirs["N"]&&!dirs["E"]&&!dirs["S"]&&!dirs["W"])hit[0].dir="Inside";}
return hit||[];};CollisionCoords.prototype._protrusion=function(area,dir,list)
{var o=this.overlaps(new CollisionCoords(area),false);if(o.length<=0)return list;o[0].dir=dir;list.push(o[0]);return list;};CollisionCoords.prototype.protrusions=function(container)
{var list=[];var n=Number.NEGATIVE_INFINITY;var p=Number.POSITIVE_INFINITY;var l=container.x1;var r=container.x2;var t=container.y1;var b=container.y2;list=this._protrusion({x1:l,y1:n,x2:r,y2:t},"N",list);list=this._protrusion({x1:r,y1:n,x2:p,y2:t},"NE",list);list=this._protrusion({x1:r,y1:t,x2:p,y2:b},"E",list);list=this._protrusion({x1:r,y1:b,x2:p,y2:p},"SE",list);list=this._protrusion({x1:l,y1:b,x2:r,y2:p},"S",list);list=this._protrusion({x1:n,y1:b,x2:l,y2:p},"SW",list);list=this._protrusion({x1:n,y1:t,x2:l,y2:b},"W",list);list=this._protrusion({x1:n,y1:n,x2:l,y2:t},"NW",list);return list;};function Collision(targetNode,obstacleNode,overlapCoords,overlapType)
{this.target=targetNode;this.obstacle=obstacleNode;this.overlap=overlapCoords;this.overlapType=overlapType;}
Collision.prototype.distance=function(other)
{var tc=c.target;var oc=c.overlap;return Math.sqrt((tc.centerx()-oc.centerx())*(tc.centerx()-oc.centerx())+
(tc.centery()-oc.centery())*(tc.centery()-oc.centery()));}
function CollisionFactory(targets,obstacles,containment)
{this.targets=targets;this.obstacles=obstacles;this.collisions=null;this.cache=null;if(containment)this.containment=containment;else this.containment=null;}
CollisionFactory.prototype.getCollisions=function(overlapType)
{if(this.collisions!==null)return this.collisions;this.cache={};this.collisions=[];if(!overlapType)overlapType="collision";if(overlapType!="collision"&&overlapType!="protrusion")return[];var c=[];var t=this.targets;var o=this.obstacles;for(var ti=0;ti<t.length;ti++)
{var tc=t[ti];for(var oi=0;oi<o.length;oi++)
{var oc=o[oi];var ol=((overlapType=="collision")?tc.overlaps(oc):tc.protrusions(oc.innerContainer()));for(var oli=0;oli<ol.length;oli++)
{c.push(new Collision(t[ti],o[oi],ol[oli],overlapType));}}}
this.collisions=c;return c;};function makeCoordsArray(j)
{return $(j).get().map(function(e,i,a){return new CollisionCoords($(e));});}
function combineQueries(array)
{var j=$();for(var i=0;i<array.length;i++)
{j=j.add(array[i]);}
return j;}
$.fn.collision=function(selector,options)
{if(!options)options={};var mode="collision";var as=null;var cd=null;var od=null;var dd=null;var rel="body";if(options.mode=="protrusion")mode=options.mode;if(options.as)as=options.as;if(options.colliderData)cd=options.colliderData;if(options.obstacleData)od=options.obstacleData;if(options.directionData)dd=options.directionData;if(options.relative)rel=options.relative;var cf=new CollisionFactory(makeCoordsArray(this),makeCoordsArray(selector));var ov=cf.getCollisions(mode);var array;if(!as)array=$.map(ov,function(e,i,a){return e.obstacle.proto;});else array=$.map(ov,function(e,i,a){var xoff=e.overlap.x1;var yoff=e.overlap.y1;if(rel&&rel!="body")
{var r=rel=="collider"?$(e.target.proto):rel=="obstacle"?$(e.obstacle.proto):$(rel);if(r.length>0)
{var roff=r.offset();xoff-=roff.left;yoff-=roff.top;}}
var c=$(as).offset({left:xoff,top:yoff}).width(e.overlap.width()).height(e.overlap.height());if(cd)c.data(cd,$(e.target.proto));if(od)c.data(od,$(e.obstacle.proto));if(dd&&e.overlap.dir)c.data(dd,e.overlap.dir);return c;});return combineQueries(array);};})(jQuery);
;/*
 * EdgeCommons
 * Dirty little Helpers for Adobe Edge
 * by Simon Widjaja
 *
 * Copyright (c) 2013 Simon Widjaja
 *
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 * Released under MIT license
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 * Additional 3rd party libraries are used. For related credits and license models take a closer look at the affected library.
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
 * Module: Explore
 */

/**
Explore: Simple Game Engine

@module EdgeCommons
@submodule Explore
@main EdgeCommons
@class Explore
**/
(function (EC) {
  //------------------------------------
  // Constructor
  //------------------------------------
  var C = function () {
  };

  //------------------------------------
  // Public
  //------------------------------------
  C.VERSION = "0.0.1";

  //------------------------------------
  // Private
  //------------------------------------
  // jQuery
  var $ = EC.$;
  // Logger
  var Log = ModulogLog;
  var LOG_GROUP = "EdgeCommons | Explore";
  // Explore

  //------------------------------------
  // Methods
  //------------------------------------  
  //C.setup = function() {
  //}


  //=======================================================
  // Player Class
  //=======================================================
  var Player = function(sym) {
    this.sym = sym;
    this.el = sym.getSymbolElement();
    this.startX = this.el.position().left;
  }
  /**
   * Move player
   */
  Player.prototype.move = function() {
    
  }
  /**
   * Stop player movement
   */
  Player.prototype.stop = function() {
    
  }
  
  
  //=======================================================
  // Main Classes
  //=======================================================
  var App = C.App = function(stage, playerSymbol, config) {
    // Properties
    this.stage = stage;
    this.stageEl = stage.getSymbolElement();
    this.player = playerSymbol;
    this.playerEl = this.player.getSymbolElement();
    this.playerStartX = this.playerEl.position().left;
    this.hotspots;
    this.parallaxes;
    //this.isPlayerMoving;

    this.config = (config) ? config : {
      player: {
        step: 300,
        duration: 10000
      }
    };
  };
  
  /**
   * Init
   */
  App.prototype.run = function() {
    console.log("App::setup");
    var that = this;

    //====================================
    // Find hotspots
    //====================================
    // Get all symbols
    var symbols = this.stage.getComposition().getSymbols();
    // Find symbols with class ".hotspot"
    this.hotspots = [];
    for (var index in symbols) {
      var sym = symbols[index];
      if (sym.getSymbolElement().is(".hotspot")) {
        this.hotspots.push({symbol: sym, element: sym.getSymbolElement(), isActive: false});
      }
    }

    //====================================
    // Find parallax elements
    //====================================
    this.parallaxes = [];
    var parallaxArray = $("div[class^=parallax-],div[class*=' parallax-']");
    $.each(parallaxArray, function(index, item) {
      var factor = 1; // Default
      var classNames = item.className.split(" ");
      for (var index in classNames) {
        var cl = classNames[index];
        if (cl.indexOf("parallax-") == 0) {
          factor = Number( cl.replace("parallax-", "") );
        }
      }
      that.parallaxes.push({element: item, startX: $(item).position().left, factor: factor});
    });
    console.log("Parallaxes length: ", this.parallaxes.length);
    //console.log("Parallaxes: ", this.parallaxes);


    //====================================
    // Register Event Handler
    //====================================
    this.registerControllers();

    //====================================
    // Point and click
    //====================================
    this.stageEl.on(EC.CLICK_OR_TOUCH, function(evt) {
      var offset = $(this).offset();
      var relativeX = (evt.pageX - offset.left);
      //console.log(relativeX);
      var playerOffset = Math.floor( relativeX - (that.playerEl.position().left + (that.playerEl.width()/2)) );
      //console.log("playerOffset", playerOffset);
      var duration = Math.floor( Math.abs( playerOffset * 6) );

      that.playerEl.queue("fx", []);
      that.playerEl.stop();

      var anim = that.playerEl.animate({left: "+="+playerOffset/4}, {duration: duration, queue: false, easing: "linear", 
        complete: function() {
          that.stopPlayer();
        },
        done: function() {
          console.log("anim done");
        }
      }); // /4 -> Normal Parallax

      if (playerOffset > 0) {
        that.player.setVariable("anim", anim);
        that.player.setVariable("dir", "right");
        // Animation
        if (that.player.getVariable("state") != "right_run") {
          that.player.setVariable( "state", "right_run" );
          that.player.play("right_run");		
        }	    
      }
      else {
        that.player.setVariable("anim", anim);
        that.player.setVariable("dir", "left");
        // Animation
        if (that.player.getVariable("state") != "left_run") {
          that.player.setVariable( "state", "left_run" );
          that.player.play("left_run");
        }	    
      }

    });


    //====================================
    // Run
    //====================================
    setInterval( function() {
      that.tick()
    }, 1 );
  };


  /**
   * Register controllers
   */
  App.prototype.registerControllers = function() {
    var that = this;
    //------------------------------
    // Keyboard
    //------------------------------
    $(window).keydown( function(evt) {
      //console.log("keydown: ", evt.keyCode);
      switch (evt.keyCode) {
        case 39:
          that.movePlayer("right");
          break;
        case 37:
          that.movePlayer("left");
          break;
      }
    });
    $(window).keyup(function(evt) {
      that.stopPlayer();
    });

    //------------------------------
    // Gyro (gyro.js required)
    //------------------------------
    if (EC.isMobile() && gyro) {
      gyro.startTracking(function(o) {
        //var beta = Math.round(o.beta/10);
        var beta = Math.round(o.beta/8);

        if (beta < -1) {
          var offset = Math.abs(beta) * 12;
          that.movePlayer("right");
        }
        else if (beta > 1 ) {
          var offset = Math.abs(beta) * 12;
          that.movePlayer("left");
        }
        else {
  //        that.stopPlayer();
        }
      });
    }
  }

  /**
   * Stop Player
   */
  App.prototype.stopPlayer = function() {
    this.playerEl.queue("fx", []);
    this.playerEl.stop(true);

    this.player.setVariable( "state", "stop" );
    this.player.stop("stop");
  }


  /**
   * Move player
   */
  App.prototype.movePlayer = function(dir) {

    // Throttle
    //if (this.isPlayerMoving) {
    //  return;
    //}

    switch (dir) {
      case "left":
        //var anim = this.playerEl.animate( {left: "-="+offset}, {duration: this.config.player.duration, queue: false, easing: "linear"} );
        //var anim = this.playerEl.css( { left: "-="+offset } );
        var anim = this.playerEl.animate({left: "-="+this.config.player.step},{duration: this.config.player.duration, queue: false, easing: "linear"});
        this.player.setVariable("anim", anim);
        this.player.setVariable("dir", "left");
        // Animation
        if (this.player.getVariable("state") != "left_run") {
          this.player.setVariable( "state", "left_run" );
          this.player.play("left_run");		
        }      
        break;
      case "right":
        //var anim = this.playerEl.animate( {left: '+='+offset}, {duration: this.config.player.duration, queue: false, easing: "linear"} );
        //var anim = this.playerEl.css( { left: "+="+offset } );

        //var anim = this.playerEl.animate({left: "+="+this.config.player.step},{duration: this.config.player.duration, queue: false, easing: "linear"});
        var anim = this.playerEl.animate({left: "+="+this.config.player.step},{duration: this.config.player.duration, queue: false, easing: "linear"});

        this.player.setVariable("anim", anim);
        this.player.setVariable("dir", "right");
        // Animation
        if (this.player.getVariable("state") != "right_run") {
          this.player.setVariable( "state", "right_run" );
          this.player.play("right_run");		
        }	
        break;
    }
    //this.isPlayerMoving = true;
    //setTimeout(function(that) { that.isPlayerMoving = false;}, this.config.player.duration, this);
  }



  /**
   * Tick
   */
  App.prototype.tick = function() {
    //var playerSymbol = sym.getSymbol("player");
    //var hotspots = sym.getVariable("hotspots");


    var newlyActivated = [];
    var hits = this.playerEl
        .collision(".hotspot", {
            relative: "collider", obstacleData: "odata", colliderData: "cdata", 
            directionData: "ddata", as: "<div/>"
        });

    //==============================
    // Collisions
    //==============================
    if (hits && hits.length) {

      // Walk through hits
      for (var index in hits) {
        var obstacle = $(hits).data("odata")[0];

        // Walk through hotspots
        for (var hsIndex in this.hotspots) {
          var hs = this.hotspots[hsIndex];
          //-----------------
          // Actions
          //-----------------
          if ( hs.element[0] == obstacle && hs.element.is('.action') ) {
            //console.log(2);
            newlyActivated.push(hs);
          }
          //-----------------
          // Obstacle
          //-----------------
          if ( hs.element[0] == obstacle && hs.element.is('.obstacle') ) {
            hs.isActive = true;
            var d = $(hits).data("ddata");
            var dir = this.player.getVariable("dir");
            if ( ( d == "S" || d == "SE" || d == "NE" ) && dir == "right" ) {
              //console.debug("suppressed right");
              this.player.getVariable("anim").stop(true);
              this.stopPlayer();
            } 
            else if ( ( d == "W" || d == "NW" || d == "SW" ) && dir == "left" ) {
              //console.debug("suppressed left");
              this.player.getVariable("anim").stop(true);
              this.stopPlayer();
            }
          }        
        } // End: Walk through hotspots
      } // End: Walk through hits
    }

    //==============================
    // Update hotspots
    //==============================
    for (var index in this.hotspots) {
      var hs = this.hotspots[index];
      if ($.inArray(hs, newlyActivated) > -1 && !hs.isActive && hs.element.is('.action') ) {
        hs.isActive = true;
        hs.symbol.play();
        //console.log("play");
      }
      else if ( $.inArray(hs, newlyActivated) == -1 && hs.isActive && hs.element.is('.action') ) {
        hs.isActive = false;
        hs.symbol.playReverse();
        //console.debug("playReverse");
      }
    }

    //==============================
    // Parallax background
    //==============================
    var playerX = this.playerEl.position().left,
        stageWidth = this.stageEl.width();

    for (var index in this.parallaxes) {
      var p = this.parallaxes[index];
      //var left = Math.floor(p.startX + (this.playerStartX - playerX) * (p.factor/10));
      var left = Math.floor(p.startX + (this.playerStartX - playerX) * (p.factor/4));
      $(p.element).css({left: left, "-webkit-translate": "translate(0, 372px)"});
    }    
    
    
  
  };
  
  
  //------------------------------------
  // Init
  //------------------------------------
  EC.Explore = C;
  //Log.debug("v" + C.VERSION, LOG_GROUP);

})(EdgeCommons);


/*
//Working Draft
try {
	//=========================
	// Explore Engine
	//=========================

	var app = new EC.Explore.App(sym, sym.getSymbol("player"), {
		player: {
			step: 300,
			duration: 10000
		}
	});
	app.run();

	//=========================
	// Twitter
	//=========================

	var consumer_key = "CHqqTXTEOhWvQdgkEqbg",
       consumer_secret = "AVIhic93jZWiXGVLCvJx9ouOJLz02kb4HwrJQj6h4",
       token_access = "12751642-DBQ0o30GqDUXvKQZL00nypUErFCp2oMbNLGIGg",
       token_secret = "ihSvDSaxvtONrcIK6Ru1myXXsBJ0sZdyXdVYjfY2tU";

    var cb = new Codebird();
    cb.setConsumerKey(consumer_key, consumer_secret);    
    cb.setToken(token_access, token_secret); // see above
    cb.__call(
    	"search_tweets",
    	{q: "#DFTMW"},
    	function(results) {
    		console.log(results);
    		var r = Math.round( Math.random() * (results.statuses.length-1) );
    		console.log("r: ",r);
    		var randomTweet = results.statuses[r];
    		sym.getSymbol("hotspot01").$("tweet").html(
    			'<span style="font-size: 22px">'+randomTweet.text+'</span>'
    			+"<br />"
    			+'<span style="color: red; font-style: italic;">@'+randomTweet.user.screen_name+'</span>'
    		);
    	}
    );

}
catch(err){
	console.error(err.toString());
}
*/


/**
Twitter Library
*/
/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS PUB 180-1
 * Version 2.1 Copyright Paul Johnston 2000 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 */

var hexcase = 0; 
var b64pad  = ""; 
var chrsz   = 8; 

function hex_sha1(s){return binb2hex(core_sha1(str2binb(s),s.length * chrsz));}
function b64_sha1(s){return binb2b64(core_sha1(str2binb(s),s.length * chrsz));}
function str_sha1(s){return binb2str(core_sha1(str2binb(s),s.length * chrsz));}
function hex_hmac_sha1(key, data){ return binb2hex(core_hmac_sha1(key, data));}
function b64_hmac_sha1(key, data){ return binb2b64(core_hmac_sha1(key, data));}
function str_hmac_sha1(key, data){ return binb2str(core_hmac_sha1(key, data));}

function sha1_vm_test()
{
  return hex_sha1("abc") == "a9993e364706816aba3e25717850c26c9cd0d89d";
}

function core_sha1(x, len)
{
  x[len >> 5] |= 0x80 << (24 - len % 32);
  x[((len + 64 >> 9) << 4) + 15] = len;

  var w = Array(80);
  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;
  var e = -1009589776;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    var olde = e;

    for(var j = 0; j < 80; j++)
    {
      if(j < 16) w[j] = x[i + j];
      else w[j] = rol(w[j-3] ^ w[j-8] ^ w[j-14] ^ w[j-16], 1);
      var t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)), 
                       safe_add(safe_add(e, w[j]), sha1_kt(j)));
      e = d;
      d = c;
      c = rol(b, 30);
      b = a;
      a = t;
    }

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
    e = safe_add(e, olde);
  }
  return Array(a, b, c, d, e);
  
}

function sha1_ft(t, b, c, d)
{
  if(t < 20) return (b & c) | ((~b) & d);
  if(t < 40) return b ^ c ^ d;
  if(t < 60) return (b & c) | (b & d) | (c & d);
  return b ^ c ^ d;
}

function sha1_kt(t)
{
  return (t < 20) ?  1518500249 : (t < 40) ?  1859775393 :
         (t < 60) ? -1894007588 : -899497514;
}  

function core_hmac_sha1(key, data)
{
  var bkey = str2binb(key);
  if(bkey.length > 16) bkey = core_sha1(bkey, key.length * chrsz);

  var ipad = Array(16), opad = Array(16);
  for(var i = 0; i < 16; i++) 
  {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = core_sha1(ipad.concat(str2binb(data)), 512 + data.length * chrsz);
  return core_sha1(opad.concat(hash), 512 + 160);
}

function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

function rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

function str2binb(str)
{
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < str.length * chrsz; i += chrsz)
    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i%32);
  return bin;
}

function binb2str(bin)
{
  var str = "";
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < bin.length * 32; i += chrsz)
    str += String.fromCharCode((bin[i>>5] >>> (24 - i%32)) & mask);
  return str;
}

function binb2hex(binarray)
{
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i++)
  {
    str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +
           hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8  )) & 0xF);
  }
  return str;
}

function binb2b64(binarray)
{
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i += 3)
  {
    var triplet = (((binarray[i   >> 2] >> 8 * (3 -  i   %4)) & 0xFF) << 16)
                | (((binarray[i+1 >> 2] >> 8 * (3 - (i+1)%4)) & 0xFF) << 8 )
                |  ((binarray[i+2 >> 2] >> 8 * (3 - (i+2)%4)) & 0xFF);
    for(var j = 0; j < 4; j++)
    {
      if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
      else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
    }
  }
  return str;
}







/* Code Bird */
/**
 * A Twitter library in JavaScript
 *
 * @package codebird
 * @version 2.3.3
 * @author J.M. <me@mynetx.net>
 * @copyright 2010-2013 J.M. <me@mynetx.net>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Define constants
 */
var IMAGETYPE_GIF = 1,
    IMAGETYPE_JPEG = 2,
    IMAGETYPE_PNG = 3;

/**
 * Array.indexOf polyfill
 */
if (! Array.indexOf) {
    Array.prototype.indexOf = function (obj, start) {
        for (var i = (start || 0); i < this.length; i++) {
            if (this[i] == obj) {
                return i;
            }
        }
      return -1;
    };
}

/**
 * A Twitter library in JavaScript
 *
 * @package codebird
 * @subpackage codebird-js
 */
var Codebird = function () {

    /**
     * The OAuth consumer key of your registered app
     */
    var _oauth_consumer_key = null;

    /**
     * The corresponding consumer secret
     */
    var _oauth_consumer_secret = null;

    /**
     * The app-only bearer token. Used to authorize app-only requests
     */
    var _oauth_bearer_token = null;

    /**
     * The API endpoint base to use
     */
    var _endpoint_base = 'https://api.twitter.com/';

    /**
     * The API endpoint to use
     */
    var _endpoint = _endpoint_base + '1.1/';

    /**
     * The API endpoint to use for OAuth requests
     */
    var _endpoint_oauth = _endpoint_base;

    /**
     * API proxy endpoint
     */
    var _endpoint_proxy = 'https://api.jublo.net/codebird/';

    /**
     * Use JSONP for GET requests in IE7-9
     */
    var _use_jsonp = (typeof navigator != "undefined"
        && typeof navigator.userAgent != "undefined"
        && (navigator.userAgent.indexOf("Trident/4") > -1
            || navigator.userAgent.indexOf("Trident/5") > -1
            || navigator.userAgent.indexOf("MSIE 7.0") > -1
        )
    );

    /**
     * Whether to access the API via a proxy that is allowed by CORS
     */
    var _use_proxy = true;

    /**
     * The Request or access token. Used to sign requests
     */
    var _oauth_token = null;

    /**
     * The corresponding request or access token secret
     */
    var _oauth_token_secret = null;

    /**
     * The file formats that Twitter accepts as image uploads
     */
    var _supported_media_files = [IMAGETYPE_GIF, IMAGETYPE_JPEG, IMAGETYPE_PNG];

    /**
     * The current Codebird version
     */
    var _version = '2.3.3';

    /**
     * Sets the OAuth consumer key and secret (App key)
     *
     * @param string key    OAuth consumer key
     * @param string secret OAuth consumer secret
     *
     * @return void
     */
    var setConsumerKey = function (key, secret) {
        _oauth_consumer_key = key;
        _oauth_consumer_secret = secret;
    };

    /**
     * Sets the OAuth2 app-only auth bearer token
     *
     * @param string token OAuth2 bearer token
     *
     * @return void
     */
    var setBearerToken = function (token) {
        _oauth_bearer_token = token;
    };

    /**
     * Gets the current Codebird version
     *
     * @return string The version number
     */
    var getVersion = function () {
        return _version;
    };

    /**
     * Sets the OAuth request or access token and secret (User key)
     *
     * @param string token  OAuth request or access token
     * @param string secret OAuth request or access token secret
     *
     * @return void
     */
    var setToken = function (token, secret) {
        _oauth_token = token;
        _oauth_token_secret = secret;
    };

    /**
     * Enables or disables CORS proxy
     *
     * @param bool use_proxy Whether to use CORS proxy or not
     *
     * @return void
     */
    var setUseProxy = function (use_proxy) {
        _use_proxy = !! use_proxy;
    };

    /**
     * Parse URL-style parameters into object
     *
     * @param string str String to parse
     * @param array array to load data into
     *
     * @return object
     */
    function parse_str(str, array) {
        // Parses GET/POST/COOKIE data and sets global variables
        //
        // version: 1109.2015
        // discuss at: http://phpjs.org/functions/parse_str    // +   original by: Cagri Ekin
        // +   improved by: Michael White (http://getsprink.com)
        // +    tweaked by: Jack
        // +   bugfixed by: Onno Marsman
        // +   reimplemented by: stag019    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
        // +   bugfixed by: stag019
        // -    depends on: urldecode
        // +   input by: Dreamer
        // +   bugfixed by: Brett Zamir (http://brett-zamir.me)    // %        note 1: When no argument is specified, will put variables in global scope.
        // *     example 1: var arr = {};
        // *     example 1: parse_str('first=foo&second=bar', arr);
        // *     results 1: arr == { first: 'foo', second: 'bar' }
        // *     example 2: var arr = {};    // *     example 2: parse_str('str_a=Jack+and+Jill+didn%27t+see+the+well.', arr);
        // *     results 2: arr == { str_a: "Jack and Jill didn't see the well." }
        var glue1 = '=',
            glue2 = '&',
            array2 = String(str).replace(/^&?([\s\S]*?)&?$/, '$1').split(glue2),
            i, j, chr, tmp, key, value, bracket, keys, evalStr, that = this,
            fixStr = function (str) {
                return unescape(str).replace(/([\\"'])/g, '\\$1').replace(/\n/g, '\\n').replace(/\r/g, '\\r');
            };
        if (!array) {
            array = this.window;
        }

        for (i = 0; i < array2.length; i++) {
            tmp = array2[i].split(glue1);
            if (tmp.length < 2) {
                tmp = [tmp, ''];
            }
            key = fixStr(tmp[0]);
            value = fixStr(tmp[1]);
            while (key.charAt(0) === ' ') {
                key = key.substr(1);
            }
            if (key.indexOf('\0') !== -1) {
                key = key.substr(0, key.indexOf('\0'));
            }
            if (key && key.charAt(0) !== '[') {
                keys = [];
                bracket = 0;
                for (j = 0; j < key.length; j++) {
                    if (key.charAt(j) === '[' && !bracket) {
                        bracket = j + 1;
                    } else if (key.charAt(j) === ']') {
                        if (bracket) {
                            if (!keys.length) {
                                keys.push(key.substr(0, bracket - 1));
                            }
                            keys.push(key.substr(bracket, j - bracket));
                            bracket = 0;
                            if (key.charAt(j + 1) !== '[') {
                                break;
                            }
                        }
                    }
                }
                if (!keys.length) {
                    keys = [key];
                }
                for (j = 0; j < keys[0].length; j++) {
                    chr = keys[0].charAt(j);
                    if (chr === ' ' || chr === '.' || chr === '[') {
                        keys[0] = keys[0].substr(0, j) + '_' + keys[0].substr(j + 1);
                    }
                    if (chr === '[') {
                        break;
                    }
                }
                evalStr = 'array';
                for (j = 0; j < keys.length; j++) {
                    key = keys[j];
                    if ((key !== '' && key !== ' ') || j === 0) {
                        key = "'" + key + "'";
                    } else {
                        key = eval(evalStr + '.push([]);') - 1;
                    }
                    evalStr += '[' + key + ']';
                    if (j !== keys.length - 1 && eval('typeof ' + evalStr) === 'undefined') {
                        eval(evalStr + ' = [];');
                    }
                }
                evalStr += " = '" + value + "';\n";
                eval(evalStr);
            }
        }
    }

    /**
     * Main API handler working on any requests you issue
     *
     * @param string   fn            The member function you called
     * @param array    params        The parameters you sent along
     * @param function callback      The callback to call with the reply
     * @param bool     app_only_auth Whether to use app-only auth
     *
     * @return mixed The API reply encoded in the set return_format
     */

    var __call = function (fn, params, callback, app_only_auth) {
        if (typeof params == 'undefined') {
            var params = {};
        }
        if (typeof app_only_auth == 'undefined') {
            var app_only_auth = false;
        }
        if (typeof callback != 'function' && typeof params == 'function') {
            callback = params;
            params = {};
            if (typeof callback == 'bool') {
                app_only_auth = callback;
            }
        } else if (typeof callback == 'undefined') {
            var callback = function (reply) {};
        }
        switch (fn) {
            case "oauth_authenticate":
            case "oauth_authorize":
                return this[fn](params, callback);
                break;

            case "oauth2_token":
                return this[fn](callback);
        }
        // parse parameters
        var apiparams = {};
        if (typeof params == 'object') {
            apiparams = params;
        } else {
            parse_str(params, apiparams); //TODO
        }

        // map function name to API method
        var method = '';

        // replace _ by /
        var path = fn.split('_');
        for (var i = 0; i < path.length; i++) {
            if (i > 0) {
                method += '/';
            }
            method += path[i];
        }
        // undo replacement for URL parameters
        var url_parameters_with_underscore = ['screen_name'];
        for (i = 0; i < url_parameters_with_underscore.length; i++) {
            var param = url_parameters_with_underscore[i].toUpperCase();
            var replacement_was = param.split('_').join('/');
            method = method.split(replacement_was).join(param);
        }

        // replace AA by URL parameters
        var method_template = method;
        var match = [];
        if (match = method.match(/[A-Z_]{2,}/)) {
            for (var i = 0; i < match.length; i++) {
                var param = match[i];
                var param_l = param.toLowerCase();
                method_template = method_template.split(param).join(':' + param_l);
                if (typeof apiparams[param_l] == 'undefined') {
                    for (j = 0; j < 26; j++) {
                        method_template = method_template.split(String.fromCharCode(65 + j)).join('_' + String.fromCharCode(97 + j));
                    }
                    console.warn('To call the templated method "' + method_template + '", specify the parameter value for "' + param_l + '".');
                }
                method = method.split(param).join(apiparams[param_l]);
                delete apiparams[param_l];
            }
        }

        // replace A-Z by _a-z
        for (i = 0; i < 26; i++) {
            method = method.split(String.fromCharCode(65 + i)).join('_' + String.fromCharCode(97 + i));
            method_template = method_template.split(String.fromCharCode(65 + i)).join('_' + String.fromCharCode(97 + i));
        }

        var httpmethod = _detectMethod(method_template, apiparams);
        var multipart = _detectMultipart(method_template);

        return _callApi(
            httpmethod,
            method,
            method_template,
            apiparams,
            multipart,
            app_only_auth,
            callback
        );
    };

    /**
     * Gets the OAuth authenticate URL for the current request token
     *
     * @return string The OAuth authenticate URL
     */
    var oauth_authenticate = function (params, callback) {
        if (typeof params.force_login == "undefined") {
            params.force_login = null;
        }
        if (typeof params.screen_name == "undefined") {
            params.screen_name = null;
        }
        if (_oauth_token == null) {
            console.warn('To get the authenticate URL, the OAuth token must be set.');
        }
        var url = _endpoint_oauth + 'oauth/authenticate?oauth_token=' + _url(_oauth_token);
        if (params.force_login === true) {
            url += "?force_login=1";
            if (params.screen_name !== null) {
                url += "&screen_name=" + params.screen_name;
            }
        }
        callback(url);
        return true;
    };

    /**
     * Gets the OAuth authorize URL for the current request token
     *
     * @return string The OAuth authorize URL
     */
    var oauth_authorize = function (params, callback) {
        if (typeof params.force_login == "undefined") {
            params.force_login = null;
        }
        if (typeof params.screen_name == "undefined") {
            params.screen_name = null;
        }
        if (_oauth_token == null) {
            console.warn('To get the authorize URL, the OAuth token must be set.');
        }
        var url = _endpoint_oauth + 'oauth/authorize?oauth_token=' + _url(_oauth_token);
        if (params.force_login === true) {
            url += "?force_login=1";
            if (params.screen_name !== null) {
                url += "&screen_name=" + params.screen_name;
            }
        }
        callback(url);
        return true;
    };

    /**
     * Gets the OAuth bearer token
     *
     * @return string The OAuth bearer token
     */

    var oauth2_token = function (callback) {
        if (_oauth_consumer_key == null) {
            console.warn('To obtain a bearer token, the consumer key must be set.');
        }

        if (typeof callback == "undefined") {
            var callback = function (reply) {};
        }

        var post_fields = "grant_type=client_credentials";
        var url = _endpoint_oauth + "oauth2/token";

        if (_use_proxy) {
            url = url.replace(
                _endpoint_base,
                _endpoint_proxy
            );
        }

        var xml;
        try {
            xml = new XMLHttpRequest();
        } catch (e) {
            xml = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xml.open("POST", url, true);
        xml.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xml.setRequestHeader(
            (_use_proxy ? "X-" : "") + "Authorization",
            "Basic " + base64_encode(_oauth_consumer_key + ":" + _oauth_consumer_secret)
        );

        xml.onreadystatechange = function () {
            if (xml.readyState >= 4) {
                var httpstatus = 12027;
                try {
                    httpstatus = xml.status;
                } catch (e) {}
                var reply = _parseApiReply("oauth2/token", xml.responseText);
                reply.httpstatus = httpstatus;
                if (httpstatus == 200) {
                    setBearerToken(reply.access_token);
                }
                callback(reply);
            }
        };
        xml.send(post_fields);

    };

    /**
     * Signing helpers
     */

    /**
     * URL-encodes the given data
     *
     * @param mixed data
     *
     * @return mixed The encoded data
     */
    var _url = function (data) {
        if (typeof data == 'array') {
            return array_map([ // TODO
            this, '_url'], data);
        } else if ((/boolean|number|string/).test(typeof data)) {
            return encodeURIComponent(data).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
        } else {
            return '';
        }
    }

    /**
     * Gets the base64-encoded SHA1 hash for the given data
     *
     * @param string data The data to calculate the hash from
     *
     * @return string The hash
     */
    var _sha1 = function (data) {
        if (_oauth_consumer_secret == null) {
            console.warn('To generate a hash, the consumer secret must be set.');
        }
        if (typeof b64_hmac_sha1 != 'function') {
            console.warn('To generate a hash, the Javascript SHA1.js must be available.');
        }
        b64pad = '=';
        return b64_hmac_sha1(_oauth_consumer_secret + '&' + (_oauth_token_secret != null ? _oauth_token_secret : ''), data);
    };

    var base64_encode = function (data) {
        // http://kevin.vanzonneveld.net
        // +   original by: Tyler Akins (http://rumkin.com)
        // +   improved by: Bayron Guevara
        // +   improved by: Thunder.m
        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // +   bugfixed by: Pellentesque Malesuada
        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // +   improved by: Rafał Kukawski (http://kukawski.pl)
        // *     example 1: base64_encode('Kevin van Zonneveld');
        // *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
        // mozilla has this native
        // - but breaks in 2.0.0.12!
        //if (typeof this.window['btoa'] == 'function') {
        //    return btoa(data);
        //}
        var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
            ac = 0,
            enc = "",
            tmp_arr = [];

        if (! data) {
            return data;
        }

        do { // pack three octets into four hexets
            o1 = data.charCodeAt(i++);
            o2 = data.charCodeAt(i++);
            o3 = data.charCodeAt(i++);

            bits = o1 << 16 | o2 << 8 | o3;

            h1 = bits >> 18 & 0x3f;
            h2 = bits >> 12 & 0x3f;
            h3 = bits >> 6 & 0x3f;
            h4 = bits & 0x3f;

            // use hexets to index into b64, and append result to encoded string
            tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
        } while (i < data.length);

        enc = tmp_arr.join('');

        var r = data.length % 3;

        return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
    };

    var http_build_query = function (formdata, numeric_prefix, arg_separator) {
        // http://kevin.vanzonneveld.net
        // +     original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // +     improved by: Legaev Andrey
        // +     improved by: Michael White (http://getsprink.com)
        // +     improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // +     improved by: Brett Zamir (http://brett-zamir.me)
        // +        revised by: stag019
        // +     input by: Dreamer
        // +     bugfixed by: Brett Zamir (http://brett-zamir.me)
        // +     bugfixed by: MIO_KODUKI (http://mio-koduki.blogspot.com/)
        // %                note 1: If the value is null, key and value is skipped in http_build_query of PHP. But, phpjs is not.
        var value, key, tmp = [],
            that = http_build_query;

        var _http_build_query_helper = function (key, val, arg_separator) {
            var k, tmp = [];
            if (val === true) {
                val = "1";
            } else if (val === false) {
                val = "0";
            }
            if (val != null) {
                if(typeof(val) === "object") {
                    for (k in val) {
                        if (val[k] != null) {
                            tmp.push(_http_build_query_helper(key + "[" + k + "]", val[k], arg_separator));
                        }
                    }
                    return tmp.join(arg_separator);
                } else if (typeof(val) !== "function") {
                    return _url(key) + "=" + _url(val);
                } else {
                    throw new Error('There was an error processing for http_build_query().');
                }
            } else {
                return '';
            }
        };

        if (!arg_separator) {
            arg_separator = "&";
        }
        for (key in formdata) {
            value = formdata[key];
            if (numeric_prefix && !isNaN(key)) {
                key = String(numeric_prefix) + key;
            }
            var query=_http_build_query_helper(key, value, arg_separator);
            if(query != '') {
                tmp.push(query);
            }
        }

        return tmp.join(arg_separator);
    };

    /**
     * Generates a (hopefully) unique random string
     *
     * @param int optional length The length of the string to generate
     *
     * @return string The random string
     */
    var _nonce = function (length) {
        if (typeof length == 'undefined') {
            var length = 8;
        }
        if (length < 1) {
            console.warn('Invalid nonce length.');
        }
        var nonce = '';
        for (var i = 0; i < length; i++) {
            var character = Math.floor(Math.random() * 61);
            nonce += '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.substring(character, character + 1);
        }
        return nonce;
    };

    var _ksort = function (inputArr) {
        // http://kevin.vanzonneveld.net
        // +   original by: GeekFG (http://geekfg.blogspot.com)
        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // +   improved by: Brett Zamir (http://brett-zamir.me)
        var tmp_arr = {},
        keys = [],
        sorter, i, k, that = this,
        strictForIn = false,
        populateArr = {};

        sorter = function (a, b) {
            var aFloat = parseFloat(a),
            bFloat = parseFloat(b),
            aNumeric = aFloat + '' === a,
            bNumeric = bFloat + '' === b;
            if (aNumeric && bNumeric) {
                return aFloat > bFloat ? 1 : aFloat < bFloat ? -1 : 0;
            } else if (aNumeric && !bNumeric) {
                return 1;
            } else if (!aNumeric && bNumeric) {
                return -1;
            }
            return a > b ? 1 : a < b ? -1 : 0;
        };

        // Make a list of key names
        for (k in inputArr) {
            if (inputArr.hasOwnProperty(k)) {
                keys.push(k);
            }
        }
        keys.sort(sorter);
        return keys;
    };

    /**
     * Clone objects
     * 
     * @param object obj    The object to clone
     *
     * @return object clone The cloned object
     */
    var _clone = function (obj) {
        var clone = {};
        for (var i in obj) {
            if (typeof(obj[i]) == "object") {
                clone[i] = clone(obj[i]);
            } else {
                clone[i] = obj[i];
            }
        }
        return clone;
    };

    /**
     * Generates an OAuth signature
     *
     * @param string          httpmethod    Usually either 'GET' or 'POST' or 'DELETE'
     * @param string          method        The API method to call
     * @param array  optional params        The API call parameters, associative
     * @param bool   optional append_to_get Whether to append the OAuth params to GET
     *
     * @return string Authorization HTTP header
     */
    var _sign = function (httpmethod, method, params, append_to_get) {
        if (typeof params == 'undefined') {
            var params = {};
        }
        if (typeof append_to_get == "undefined") {
            var append_to_get = false;
        }
        if (_oauth_consumer_key == null) {
            console.warn('To generate a signature, the consumer key must be set.');
        }
        var sign_params = {
            consumer_key: _oauth_consumer_key,
            version: '1.0',
            timestamp: Math.round(new Date().getTime() / 1000),
            nonce: _nonce(),
            signature_method: 'HMAC-SHA1'
        };
        var sign_base_params = {};
        for (var key in sign_params) {
            var value = sign_params[key];
            sign_base_params['oauth_' + key] = _url(value);
        }
        if (_oauth_token != null) {
            sign_base_params['oauth_token'] = _url(_oauth_token);
        }
        oauth_params = _clone(sign_base_params);
        for (var key in params) {
            var value = params[key];
            sign_base_params[key] = _url(value);
        }
        var keys = _ksort(sign_base_params);
        var sign_base_string = '';
        for (var i=0;i<keys.length;i++) {
            var key = keys[i];
            var value = sign_base_params[key];
            sign_base_string += key + '=' + value + '&';
        }
        sign_base_string = sign_base_string.substring(0, sign_base_string.length - 1);
        var signature = _sha1(httpmethod + '&' + _url(method) + '&' + _url(sign_base_string));

        params = append_to_get ? sign_base_params : oauth_params;
        params['oauth_signature'] = signature;
        if (append_to_get) {
            var authorization = '';
            for(var key in params) {
                var value = params[key];
                authorization += key + "=" + _url(value) + "&";
            }
            return authorization.substring(0, authorization.length - 1);
        }
        var authorization = 'OAuth ';
        for (var key in params) {
            var value = params[key];
            authorization += key + '="' + _url(value) + '", ';
        }
        return authorization.substring(0, authorization.length - 2);
    };

    /**
     * Detects HTTP method to use for API call
     *
     * @param string method The API method to call
     * @param array  params The parameters to send along
     *
     * @return string The HTTP method that should be used
     */
    var _detectMethod = function (method, params) {
        // multi-HTTP method endpoints
        switch(method) {
            case 'account/settings':
                method = params.length ? method + '__post' : method;
                break;
        }

        var httpmethods = {};
        httpmethods['GET'] = [
            // Timelines
            'statuses/mentions_timeline',
            'statuses/user_timeline',
            'statuses/home_timeline',
            'statuses/retweets_of_me',

            // Tweets
            'statuses/retweets/:id',
            'statuses/show/:id',
            'statuses/oembed',

            // Search
            'search/tweets',

            // Direct Messages
            'direct_messages',
            'direct_messages/sent',
            'direct_messages/show',

            // Friends & Followers
            'friendships/no_retweets/ids',
            'friends/ids',
            'followers/ids',
            'friendships/lookup',
            'friendships/incoming',
            'friendships/outgoing',
            'friendships/show',
            'friends/list',
            'followers/list',

            // Users
            'account/settings',
            'account/verify_credentials',
            'blocks/list',
            'blocks/ids',
            'users/lookup',
            'users/show',
            'users/search',
            'users/contributees',
            'users/contributors',
            'users/profile_banner',

            // Suggested Users
            'users/suggestions/:slug',
            'users/suggestions',
            'users/suggestions/:slug/members',

            // Favorites
            'favorites/list',

            // Lists
            'lists/list',
            'lists/statuses',
            'lists/memberships',
            'lists/subscribers',
            'lists/subscribers/show',
            'lists/members/show',
            'lists/members',
            'lists/show',
            'lists/subscriptions',

            // Saved searches
            'saved_searches/list',
            'saved_searches/show/:id',

            // Places & Geo
            'geo/id/:place_id',
            'geo/reverse_geocode',
            'geo/search',
            'geo/similar_places',

            // Trends
            'trends/place',
            'trends/available',
            'trends/closest',

            // OAuth
            'oauth/authenticate',
            'oauth/authorize',

            // Help
            'help/configuration',
            'help/languages',
            'help/privacy',
            'help/tos',
            'application/rate_limit_status'
        ];
        httpmethods['POST'] = [
            // Tweets
            'statuses/destroy/:id',
            'statuses/update',
            'statuses/retweet/:id',
            'statuses/update_with_media',

            // Direct Messages
            'direct_messages/destroy',
            'direct_messages/new',

            // Friends & Followers
            'friendships/create',
            'friendships/destroy',
            'friendships/update',

            // Users
            'account/settings__post',
            'account/update_delivery_device',
            'account/update_profile',
            'account/update_profile_background_image',
            'account/update_profile_colors',
            'account/update_profile_image',
            'blocks/create',
            'blocks/destroy',
            'account/update_profile_banner',
            'account/remove_profile_banner',

            // Favorites
            'favorites/destroy',
            'favorites/create',

            // Lists
            'lists/members/destroy',
            'lists/subscribers/create',
            'lists/subscribers/destroy',
            'lists/members/create_all',
            'lists/members/create',
            'lists/destroy',
            'lists/update',
            'lists/create',
            'lists/members/destroy_all',

            // Saved Searches
            'saved_searches/create',
            'saved_searches/destroy/:id',

            // Places & Geo
            'geo/place',

            // Spam Reporting
            'users/report_spam',

            // OAuth
            'oauth/access_token',
            'oauth/request_token',
            'oauth2/token',
            'oauth2/invalidate_token'
        ];
        for (var httpmethod in httpmethods) {
            if (httpmethods[httpmethod].indexOf(method) > -1) {
                return httpmethod;
            }
        }
        console.warn('Can\'t find HTTP method to use for "' + method + '".');
    };

    /**
     * Detects if API call should use multipart/form-data
     *
     * @param string method The API method to call
     *
     * @return bool Whether the method should be sent as multipart
     */
    var _detectMultipart = function (method) {
        var multiparts = [
            // Tweets
            'statuses/update_with_media',

            // Users
            'account/update_profile_background_image',
            'account/update_profile_image',
            'account/update_profile_banner'
        ];
        return multiparts.indexOf(method) > -1;
    };

    /**
     * Builds the complete API endpoint url
     *
     * @param string method           The API method to call
     * @param string method_template  The API method template to call
     *
     * @return string The URL to send the request to
     */
    var _getEndpoint = function (method, method_template) {
        if (method.substring(0, 5) == 'oauth') {
            url = _endpoint_oauth + method;
        } else {
            url = _endpoint + method + '.json';
        }
        return url;
    };

    /**
     * Calls the API using cURL
     *
     * @param string          httpmethod      The HTTP method to use for making the request
     * @param string          method          The API method to call
     * @param string          method_template The templated API method to call
     * @param array  optional params          The parameters to send along
     * @param bool   optional multipart       Whether to use multipart/form-data
     * @param bool   optional $app_only_auth  Whether to use app-only bearer authentication
     * @param function        callback        The function to call with the API call result
     *
     * @return mixed The API reply, encoded in the set return_format
     */

    var _callApi = function (httpmethod, method, method_template, params, multipart, app_only_auth, callback) {
        if (typeof params == 'undefined') {
            var params = {};
        }
        if (typeof multipart == 'undefined') {
            var multipart = false;
        }
        if (typeof app_only_auth == 'undefined') {
            var app_only_auth = false;
        }
        if (typeof callback != 'function') {
            var callback = function (reply) {};
        }

        url = _getEndpoint(method, method_template);
        var authorization = null;

        var xml;
        try {
            xml = new XMLHttpRequest();
        } catch (e) {
            xml = new ActiveXObject('Microsoft.XMLHTTP');
        }
        if (httpmethod == 'GET') {
            var url_with_params = url;
            if (JSON.stringify(params) != "{}") {
                url_with_params += '?' + http_build_query(params);
            }
            authorization = _sign(httpmethod, url, params);

            // append auth params to GET url for IE7-9, to send via JSONP
            if (_use_jsonp) {
                if (JSON.stringify(params) != "{}") {
                    url_with_params += '&';
                } else {
                    url_with_params += '?';
                }
                var callback_name = _nonce();
                window[callback_name] = function (reply) {
                    reply.httpstatus = 200;
                    callback(reply);
                };
                params.callback = callback_name;
                url_with_params = url + "?" + _sign(httpmethod, url, params, true);
                var tag = document.createElement("script");
                tag.type = "text/javascript";
                tag.src = url_with_params;
                var body = document.getElementsByTagName("body")[0];
                body.appendChild(tag);
                return;

            } else if (_use_proxy) {
                url_with_params = url_with_params.replace(
                    _endpoint_base,
                    _endpoint_proxy
                );
            }
            xml.open(httpmethod, url_with_params, true);
        } else {
            if (_use_jsonp) {
                console.warn('Sending POST requests is not supported for IE7-9.');
                return;
            }
            authorization = _sign(httpmethod, url, {});
            if (! multipart) {
                authorization = _sign(httpmethod, url, params);
                params        = http_build_query(params);
            }
            post_fields = params;
            if (_use_proxy) {
                url = url.replace(
                    _endpoint_base,
                    _endpoint_proxy
                );
            }
            xml.open(httpmethod, url, true);
            if (multipart) {
                xml.setRequestHeader("Content-Type", "multipart/form-data");
            } else {
                xml.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            }
        }
        if (app_only_auth) {
            if (_oauth_consumer_key == null) {
                console.warn('To make an app-only auth API request, the consumer key must be set.');
            }
            // automatically fetch bearer token, if necessary
            if (_oauth_bearer_token == null) {
                return oauth2_token(function (reply) {
                    _callApi(httpmethod, method, method_template, params, multipart, app_only_auth, callback);
                });
            }
            authorization = 'Bearer ' + _oauth_bearer_token;
        }
        if (authorization !== null) {
            xml.setRequestHeader((_use_proxy ? "X-" : "") + "Authorization", authorization);
        }
        xml.onreadystatechange = function () {
            if (xml.readyState >= 4) {
                var httpstatus = 12027;
                try {
                    httpstatus = xml.status;
                } catch (e) {}
                var reply = _parseApiReply(method_template, xml.responseText);
                reply.httpstatus = httpstatus;
                callback(reply);
            }
        };
        xml.send(httpmethod == "GET" ? null : post_fields);
        return true;
    };

    /**
     * Parses the API reply to encode it in the set return_format
     *
     * @param string method The method that has been called
     * @param string reply  The actual reply, JSON-encoded or URL-encoded
     *
     * @return array|object The parsed reply
     */
    var _parseApiReply = function (method, reply) {
        if (reply == '[]') {
            return [];
        }
        var parsed = false;
        try {
            parsed = JSON.parse(reply);
        } catch (e) {
            parsed = {};
            if (reply.indexOf('<' + '?xml version="1.0" encoding="UTF-8"?' + '>') === 0) {
                // we received XML...
                // since this only happens for errors,
                // don't perform a full decoding
                parsed["request"] = reply.match(/<request>(.*)<\/request>/)[1];
                parsed["error"] = reply.match(/<error>(.*)<\/error>/)[1];
            } else {
                // assume query format
                var elements = reply.split("&");
                for (var i = 0; i < elements.length; i++) {
                    var element = elements[i].split("=", 2);
                    if (element.length > 1) {
                        parsed[element[0]] = unescape(element[1]);
                    } else {
                        parsed[element[0]] = null;
                    }
                }
            }
        }
        return parsed;
    };

    return {
        setConsumerKey: setConsumerKey,
        getVersion: getVersion,
        setToken: setToken,
        setBearerToken: setBearerToken,
        setUseProxy: setUseProxy,
        __call: __call,
        oauth_authenticate: oauth_authenticate,
        oauth_authorize: oauth_authorize,
        oauth2_token: oauth2_token
    };
};