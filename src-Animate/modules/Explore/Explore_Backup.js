/*
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
      console.log("playerOffset", playerOffset);
      var duration = Math.floor( Math.abs( playerOffset * 6) );

      that.playerEl.queue("fx", []);
      that.playerEl.stop();

      var anim = that.playerEl.animate({left: "+="+playerOffset/4}, {duration: duration, queue: false, easing: "linear"}); // /4 -> Normal Parallax

      that.player.setVariable("anim", anim);
      that.player.setVariable("dir", "right");
      // Animation
      if (that.player.getVariable("state") != "right_run") {
        that.player.setVariable( "state", "right_run" );
        that.player.play("right_run");		
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
    this.playerEl.stop();

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
            } 
            else if ( ( d == "W" || d == "NW" || d == "SW" ) && dir == "left" ) {
              //console.debug("suppressed left");
              this.player.getVariable("anim").stop(true);
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
      var left = Math.floor(p.startX + (this.playerStartX - playerX) * (p.factor/10));
      $(p.element).css({left: left, "-webkit-translate": "translate(0, 372px)"});
    }    
    
    
  
  };
  
  
  //------------------------------------
  // Init
  //------------------------------------
  EC.Explore = C;
  //Log.debug("v" + C.VERSION, LOG_GROUP);

})(EdgeCommons);