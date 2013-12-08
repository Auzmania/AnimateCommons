// HOW TO RUN THIS SCRIPT:
// - Node.js installed
// - npm install -g grunt-cli
// - npm install -g browserify
// run this script by passing "grunt" to your command line


//================================================
// Configuration
//================================================
var customConfig = {
  an: {
    version: "1.1.0"
  },
  rf: {
    version: "0.0.1"
  }
};


//================================================
//================================================
module.exports = function(grunt) {
  
  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  
  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify']);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      rf: {
        src: ['src-Reflow/EdgeCommons.js', 'src-Reflow/modules/Experimental/Experimental.js'],
        dest: 'sprint/rf/'+customConfig.rf.version+'/max/EdgeCommons.js'
      },
      /*
      an: {
        src: ['src-Reflow/EdgeCommons.js'],
        dest: 'TEMP_BUILD2222.js'
      }
      */
    },
    uglify: {
      options: {
        banner: '// EdgeCommons for Edge Reflow v0.0.1 +++ Visit edgecommons.org for documentation, updates and examples +++ Copyright (c) 2013 by Simon Widjaja +++ Distributed under the terms of the MIT license (http://www.opensource.org/licenses/mit-license.html) +++ This notice shall be included in all copies or substantial portions of the Software.\n\n'
        //banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        //src: 'src/<%= pkg.name %>.js',
        src: 'sprint/rf/'+customConfig.rf.version+'/max/EdgeCommons.js',
        dest: 'sprint/rf/'+customConfig.rf.version+'/min/EdgeCommons.js'
      }
    }
    
  });

  //================================================
  // Custom Tasks
  //================================================
  // rfBuild
  function rfBuild (fn) {
    console.log("rfBuild");
    return;
    
    var fs = require("fs");
    var browserify = require("browserify");

    // building it
    var ubr = browserify(uberflowConfig.corePath);
    ubr.bundle({debug: uberflowConfig.debug}).pipe(fs.createWriteStream(uberflowConfig.coreOutputPath)).on('close', function () {
      grunt.log.write('bundled...').ok();
      if (fn) fn();
    });
  }
  grunt.registerTask('rfBuild', 'Build Edge Commons for Reflow', function () {
    var done = this.async();
    rfBuild(function () {
      done();
    });
  });
  
  

};



return;

//------------------------------------------------------------------------------------------------------------
// OLD
//------------------------------------------------------------------------------------------------------------

var uberflowConfig = {
  corePath: './src/ubr.js',               // path to Uberflow Core
  packagePath: undefined,                 // path to a package/set [! should be undefined in the Core Gruntfile]
  coreOutputPath: './build/ubr.core.js',  // output path for the bundled core package
  packageOutputPath: undefined,           // output path for the package/set
  debug: true,                            // debug flag (true = on, false = off)
  watchPaths: [__dirname],                // entry point for the watcher
  ignorePaths: [__dirname+'/build', __dirname+'/node_modules'] // ingore directories / files passed to the watcher module
}

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-yuidoc');
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['src/**/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        },
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'dot' // use TAP or min or dot!
        },
        src: ['test/**/*.unit.test.js']
      }
    },
    yuidoc: {
      compile: {
        name: "Uberflow Core",
        description: "Uberflow Core by UBERFLOW",
        version: grunt.file.readJSON('package.json').version,
        url: "http://uberflow.io/",
        logo: "",
        options: {
          linkNatives: "true",        
          attributesEmit: "true",
          selleck: "true",
          paths: './src/',
          outdir: "doc"
        }
      }
    }
  });



  // Ubr Build
  function build (fn) {
    var fs = require("fs");
    var browserify = require("browserify");

    // building it
    var ubr = browserify(uberflowConfig.corePath);
    ubr.bundle({debug: uberflowConfig.debug}).pipe(fs.createWriteStream(uberflowConfig.coreOutputPath)).on('close', function () {
      grunt.log.write('bundled...').ok();
      if (fn) fn();
    });
  }
  grunt.registerTask('ubrBuild', 'UBERFLOW Build', function () {
    var done = this.async();
    build(function () {
      done();
    });
  });
  

  // Ubr Watch
  grunt.registerTask('ubrWatch', 'UBERFLOW Watch', function() {
    var that = this;
    var done = this.async();
    
    var watchr = require('watchr');

    watchr.watch({
      paths: uberflowConfig.watchPaths,
      ignorePaths: uberflowConfig.ignorePaths,
      listeners: {
        change: function(changeType,filePath,fileCurrentStat,filePreviousStat){
          console.log('a change event occured:',filePath);
          build();
        }
      }
    });
  });


  grunt.registerTask('default', ['mochaTest', 'ubrBuild']);
};