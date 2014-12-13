//================================================
// Configuration
//================================================
var customConfig = {
  an: {
    version: "2.0.0" 
  },
  rf: {
    version: "0.0.4"
  }
};

//================================================
//================================================
module.exports = function(grunt) {
  
  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-jsdoc');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });
  
  //================================================================================================
  // Custom Tasks
  //================================================================================================

  
  //======================================================
  // Task "anBuild" - Build Edge Commons for Animate
  //======================================================
  // 
  //------------------------------------------------------
  function anBuild (fn) {
  
    // Concat
    grunt.config.set("concat", {
      options: {
        separator: ';',
        banner: '// EdgeCommons for Edge Animate v'+customConfig.an.version+' +++ Visit edgecommons.org for documentation, updates and examples +++ Copyright (c) 2015 by Simon Widjaja +++ Distributed under the terms of the MIT license (http://www.opensource.org/licenses/mit-license.html) +++ This notice shall be included in all copies or substantial portions of the Software.\n\n'
      },
      an_allinone: {
        src: ['src-Animate/libs/Modulog-0.0.2.js', 'src-Animate/EdgeCommons.js', 'src-Animate/modules/Core/Core.js', 'src-Animate/modules/Parallax/Parallax.js', 'src-Animate/modules/Spotlight/Spotlight.js', 'src-Animate/modules/SVG/SVG.js'],
        dest: 'sprint/an/'+customConfig.an.version+'/js/max/EdgeCommons.js'
      },
      an_core: {
        src: ['src-Animate/libs/Modulog-0.0.2.js', 'src-Animate/EdgeCommons.js', 'src-Animate/modules/Core/Core.js'],
        dest: 'sprint/an/'+customConfig.an.version+'/js/max/EdgeCommons.Core.js'
      },
      an_parallax: {
        src: ['src-Animate/modules/Parallax/Parallax.js'],
        dest: 'sprint/an/'+customConfig.an.version+'/js/max/EdgeCommons.Parallax.js'
      },
      an_sound: {
        src: ['src-Animate/modules/Sound/Sound.js'],
        dest: 'sprint/an/'+customConfig.an.version+'/js/max/EdgeCommons.Sound.js'
      },
      an_spotlight: {
        src: ['src-Animate/modules/Spotlight/Spotlight.js'],
        dest: 'sprint/an/'+customConfig.an.version+'/js/max/EdgeCommons.Spotlight.js'
      },
      an_svg: {
        src: ['src-Animate/modules/SVG/SVG.js'],
        dest: 'sprint/an/'+customConfig.an.version+'/js/max/EdgeCommons.SVG.js'
      },
      an_explore: {
        src: ['src-Animate/modules/Explore/jquery-collision.min.js', 'src-Animate/modules/Explore/Explore.js'],
        dest: 'sprint/an/'+customConfig.an.version+'/js/max/EdgeCommons.Explore.js'
      },
    });
    
    // Replace (grunt-text-replace)
    grunt.config.set("replace", {
      version: {
        src:  'sprint/an/'+customConfig.an.version+'/js/max/*.js',
        dest: 'sprint/an/'+customConfig.an.version+'/js/max/',
        replacements: [
          {from: /EdgeCommons.VERSION = "\d+.\d+.\d+";/, to: 'EdgeCommons.VERSION = "'+customConfig.an.version+'";'}
        ]
      },
      documentation: {
        src:  'doc/template/config.json',
        dest: 'doc/template/',
        replacements: [
          {from: /(v\d+.\d+.\d)/, to: 'v'+customConfig.an.version}
        ]
      }
    });
      
    // Uglify
    grunt.config.set("uglify", {
      options: {
        banner: '// EdgeCommons for Edge Animate v'+customConfig.an.version+' +++ Visit edgecommons.org for documentation, updates and examples +++ Copyright (c) 2013 by Simon Widjaja +++ Distributed under the terms of the MIT license (http://www.opensource.org/licenses/mit-license.html) +++ This notice shall be included in all copies or substantial portions of the Software.\n\n'
      },
      an_allinone: {
        src: 'sprint/an/'+customConfig.an.version+'/js/max/EdgeCommons.js',
        dest: 'sprint/an/'+customConfig.an.version+'/js/min/EdgeCommons.js'
      },
      an_core: {
        src: 'sprint/an/'+customConfig.an.version+'/js/max/EdgeCommons.Core.js',
        dest: 'sprint/an/'+customConfig.an.version+'/js/min/EdgeCommons.Core.js'
      },
      an_parallax: {
        src: 'sprint/an/'+customConfig.an.version+'/js/max/EdgeCommons.Parallax.js',
        dest: 'sprint/an/'+customConfig.an.version+'/js/min/EdgeCommons.Parallax.js'
      },
      an_sound: {
        src: 'sprint/an/'+customConfig.an.version+'/js/max/EdgeCommons.Sound.js',
        dest: 'sprint/an/'+customConfig.an.version+'/js/min/EdgeCommons.Sound.js'
      },
      an_spotlight: {
        src: 'sprint/an/'+customConfig.an.version+'/js/max/EdgeCommons.Spotlight.js',
        dest: 'sprint/an/'+customConfig.an.version+'/js/min/EdgeCommons.Spotlight.js'
      },
      an_svg: {
        src: 'sprint/an/'+customConfig.an.version+'/js/max/EdgeCommons.SVG.js',
        dest: 'sprint/an/'+customConfig.an.version+'/js/min/EdgeCommons.SVG.js'
      },
      an_explore: {
        src: 'sprint/an/'+customConfig.an.version+'/js/max/EdgeCommons.Explore.js',
        dest: 'sprint/an/'+customConfig.an.version+'/js/min/EdgeCommons.Explore.js'
      }
    }); 
  
    // Copy (CSS)
    grunt.config.set("copy", {    
      main: {
        files: [ {expand: true, cwd: 'src-Animate/css/', src: ['**'], dest: 'sprint/an/'+customConfig.an.version+'/css/'} ]
      }
    });    
  
    // JSDoc
    grunt.config.set("jsdoc", {
      dist: {
        src: ['sprint/an/' + customConfig.an.version + '/js/max/EdgeCommons.js' /*, 'test/*.js'*/ ],
        options: {
          destination: 'doc/' + customConfig.an.version,
          //template : "node_modules/grunt-jsdoc/node_modules/ink-docstrap/template",
          template : "doc/template",
          //configure : "node_modules/grunt-jsdoc/node_modules/ink-docstrap/template/jsdoc.conf.json"
          // HACK: 
          // Search in "node_modules/grunt-jsdoc/node_modules/jsdoc/templates/default/publish.js" for following comment and force 'outputSourceFiles' to 'false'
          // // output pretty-printed source files by default
        },
      }
    });    
    
    // Watch 
    grunt.config.set("watch", {
      scripts : {
        files: ['src-Animate/**/*.js', 'doc/template/**/*.*'],
        tasks: ['concat', 'replace', 'uglify', 'copy', 'jsdoc'],
        options: {
          nospawn: true
        }        
      }
    });

    //--------------------------------------------------
    // Initially run
    //--------------------------------------------------
    grunt.task.run(['concat', 'replace', 'uglify', 'copy', 'jsdoc', 'watch']);
  }
    
  
  
  //======================================================
  // Task "rfBuild" - Build Edge Commons for Reflow
  //======================================================
  // 
  //------------------------------------------------------
  function rfBuild (fn) {
    
    // Concat
    grunt.config.set("concat", {
      options: {
        separator: ';'
      },
      rf: {
        src: ['src-Reflow/EdgeCommons.js', 'src-Reflow/modules/Experimental/Experimental.js'],
        dest: 'sprint/rf/'+customConfig.rf.version+'/js/max/EdgeCommons.js'
        //dest: 'sprint/rf/EdgeCommons.js'
      },
    });
    
    // Replace (grunt-text-replace)
    grunt.config.set("replace", {
      version: {
        src: 'sprint/rf/'+customConfig.rf.version+'/js/max/EdgeCommons.js',
        dest: 'sprint/rf/'+customConfig.rf.version+'/js/max/EdgeCommons.js',
        replacements: [
          {from: /EdgeCommons.VERSION = "\d+.\d+.\d+";/, to: 'EdgeCommons.VERSION = "'+customConfig.rf.version+'";'}
        ]
      }
    });
    
    // Uglify
    grunt.config.set("uglify", {
      options: {
        banner: '// EdgeCommons for Edge Reflow v'+customConfig.rf.version+' +++ Visit edgecommons.org for documentation, updates and examples +++ Copyright (c) 2013 by Simon Widjaja +++ Distributed under the terms of the MIT license (http://www.opensource.org/licenses/mit-license.html) +++ This notice shall be included in all copies or substantial portions of the Software.\n\n'
      },
      build: {
        src: 'sprint/rf/'+customConfig.rf.version+'/js/max/EdgeCommons.js',
        dest: 'sprint/rf/'+customConfig.rf.version+'/js/min/EdgeCommons.js'
      }
    });
  
    // Watch 
    grunt.config.set("watch", {
      scripts : {
        files: 'src-Reflow/**/*.js',
        tasks: ['concat', 'replace', 'uglify'],
        options: {
          nospawn: true
        }        
      }
    });
  }
  
  

  
  
  //================================================
  // Register Tasks
  //================================================
  grunt.registerTask('anBuild', "Build Edge Commons for Animate", anBuild);  
  grunt.registerTask('rfBuild', "Build Edge Commons for Reflow", rfBuild);  
  grunt.registerTask('default', ['anBuild', 'rfBuild']);
  
};