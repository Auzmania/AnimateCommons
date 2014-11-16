![EdgeCommons by Simon Widjaja](http://temp.trendspurt.com/github_live/ec_github_announce.jpg)
***

### We love Adobe Edge Animate. This library extends Edge Animate and enables some cool features ;) Join us!

***

Current realease: 2.0.2

***

History:

[ 2.0.x ]
+ checkVisibility and autoplayOnVisibility
+ Demo folder added
+ EC.pause() and EC.unpause() added (both support recursive flag)
+ EC.getChildSymbols() /w as recursive function added (needed for pause/unpause)
+ EC.addCSS(...) added
+ Get rid of the jQuery dependency (where possible) 
+ Parallax: no jquery dep
+ Adaptive Layout: no jquery dep
+ Adaptive Layout: now supports option "useWindowInsteadOfStage" (works great with EC.centerStage())
+ EC.isJQuery(): Helper to find out if full jQuery is available 
+ EC.centerStage() is now REAL centering stage (even with negative left position) 
+ EC.centerElement() added to center Elements
+ EC.Sound package is no longer included in "All in one" package
+ setMetaViewport: Set the viewport metatag

[ 1.4.0 ]
+ Parallax Update: Fix for Animate 5.x (thanks to psaunders)
+ Spotlight Update: Fix for Animate 5.x
+ Spotlight Update: Now supports https://

[ 1.3.1 ]
+ Added readHashFromURL to Core (e.g. for Deep Linking)

[ 1.3.0 ]
+ loadComposition: prevent flickerin

[ 1.2.0 ]
+ button helper now supports custom data object and passes sym and custom data to callback
+ button helper now supports deferred call (ready)

[ 1.1.2 ]
+ Update to SoundJS 0.5.2 (Thanks to Matthew King)
+ Added close callback for Spotlight

[ 1.1.1 ]
+ Switched to new build script with Grunt.js

[ 1.1.0 ]
+ Several bugfixes in Adaptive Layouts (buffer removed, animated symbols fix)
+ 2 Button Helper (EC.makeStaticButton() and EC.makeAnimatedButton)
+ readGetParam to get fragment of GET parameter from URL
+ Helper function to detect mobile devices

[ 1.0.4 ]
+ Composition Loader now supports symbols and elements as target
+ Composition Loader callback now gets iframeid as third parameter

[ 1.0.3 ]
+ Parallax now supports horizontal scrolling

***

**What is EdgeCommons?**

The purpose of this extension library is to improve the workflow and enhance the possibilities of Animate compositions. There are several components available, such as Parallax Scrolling, Spotlight Overlay or Adaptive Layouts. The components listed here are already tested and documented. We are, however, steadily working on new features and components.

The Edge Commons are completely open source and therefor free to use in personal and commercial projects. If you are interested, you can also contribute to the project on GitHub.

**Official Website and Documentation**

 [WWW.EDGECOMMONS.ORG](http://www.edgecommons.org)
 
**CDN Server (use Edge Commons without downloading anything)**

 [CDN.EDGECOMMONS.ORG](http://cdn.edgecommons.org)

**Features so far: (more to come)**

- Misc. Helper functions
- Helper to simplify the creation process of buttons
- Helper to handle GET parameters
- Helper function to detect mobile devices
- Composition Loader to load and nest compositions
- Parallax Scrolling with one line of code
- Spotlight Overlay for media (images, animations and youtube)
- Advanced Logging (different levels, log group and additional log targets)
- Configuration (external or internal Configuration layer)
- Script Loader (JavaScript and CSS with simple callback)
- Sound (integration of CreateJS/SoundJS by Grant Skinner)
- Adaptive Layouts (Different Layouts for different Sizes)
- Data Injection (inject Data from HTML into the Edge composition)
- Drupal and Wordpress modules to load Edge Animate compositions and inject data easily (by Timm Jansen)
- We've got plenty more in the pipeline ;) 

**Contribute**

Do you have cool extension ideas? You are welcome to join us!

**License**

Released under MIT license (open source)
[Link](http://www.opensource.org/licenses/mit-license.html)

***

Happy Coding,

Simon Widjaja and friends