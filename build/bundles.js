// version

var version = '0.8.0';

module.exports = {
  default: {
    dest: "dist/"+version,
    filename: "AnimateCommons."+version+".js",
    includes: [
      'src/AnimateCommons.js',
      'src/core/Composition.js',
      'src/layout/AdaptiveLayout.js',
      'src/parallax/Parallax.js',
    ]
  },
  debug: {
    dest: "dist/"+version,
    filename: "AnimateCommons."+version+".debug.js",
    includes: [
      'src/AnimateCommons.js',
      'src/core/Composition.js',
      'src/layout/AdaptiveLayout.js',
      'src/parallax/Parallax.js',
      'src/debug/Debug.js',
    ]
  }
};
