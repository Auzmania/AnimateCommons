// Globals
var globals = require('./globals.js');

module.exports = {
  default: {
    dest: "dist/"+globals.version,
    filename: "AnimateCommons."+globals.version+".js",
    includes: [
      'src/AnimateCommons.js',
      'src/core/Composition.js',
      'src/layout/AdaptiveLayout.js',
      'src/layout/FlexibleLayout.js',
      'src/parallax/Parallax.js',
    ]
  },
  debug: {
    dest: "dist/"+globals.version,
    filename: "AnimateCommons."+globals.version+".debug.js",
    includes: [
      'src/AnimateCommons.js',
      'src/core/Composition.js',
      'src/layout/AdaptiveLayout.js',
      'src/layout/FlexibleLayout.js',
      'src/parallax/Parallax.js',
      'src/debug/Debug.js',
    ]
  }
};
