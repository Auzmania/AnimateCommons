/*global env: true */
'use strict';

var fs = require('jsdoc/fs');
var grunt = require('grunt');
/*
var helper = require('jsdoc/util/templateHelper');
var logger = require('jsdoc/util/logger');
var path = require('jsdoc/path');
var taffy = require('taffydb').taffy;
var template = require('jsdoc/template');
var util = require('util');

var bodyHTMLsafe = helper.bodyHTMLsafe;
var linkto = helper.linkto;
var resolveAuthorLinks = helper.resolveAuthorLinks;
var scopeToPunc = helper.scopeToPunc;
var hasOwnProp = Object.prototype.hasOwnProperty;
*/




/**
 * Generate documentation output.
 *
 * @param {TAFFY} data - A TaffyDB collection representing
 *                       all the symbols documented in your code.
 * @param {object} opts - An object with options information.
 */
exports.publish = function(data, opts) {
  
  // Infos:
  // opts.destination (e.g. 'doc/2.0.4') 
  // opts.template (e.g. '.../doc/template')
  
  try {
    
    // Read config 
    var config = JSON.parse(fs.readFileSync(opts.template+"/config.json", 'utf8'));
    
    // Read template: index.html
    var tplIndex = fs.readFileSync(opts.template + '/tpl/index.html', {encoding: 'utf8'});
    
    // Fill template
    tplIndex = tplIndex.replace("#HEAD_TITLE#", config.custom_title);
    tplIndex = tplIndex.replace("#OVERVIEW-TITLE#", config.custom_title);
    tplIndex = tplIndex.replace("#OVERVIEW-SUBTITLE#", config.subtitle);
    
    // Create HTMLs
    var bodyHTML = "";
    var overviewHTML = "";

    // Remove undocumented (taken from haruki template)
    data({undocumented: true}).remove();
    data({ignore: true}).remove();
    
    // ??? (taken from haruki template)
    var docs = data().get(); // <-- an array of Doclet objects    
    //console.error("docs: ", docs);
    
    
    //==================================================
    //==================================================
    // Namespaces
    //==================================================
    //==================================================
    // Get all namespaces
    data({kind: "namespace"}).each( function (namespace) {
      //console.error("namespace: ", namespace);
      bodyHTML += '<div class="section-namespace">';
      bodyHTML += '<h1>'+namespace.name+'</h1>';
      bodyHTML += '<h2>'+namespace.description+'</h2>';
      
      // Overview
      overviewHTML += '<div class="namespace"><p class="namespace">'+namespace.name+'</p>';
      
      //==================================================
      // Functions
      //==================================================
      // Get all functions
      data({kind: "function", memberof: namespace.name}).each( function (func) {
        //console.error("func: ", func.params && func.params.length);
        
        //--------------------------------------------------
        // Params
        //--------------------------------------------------
        var paramsSignatureString = "",
            paramsTablebodyHTML = '<table class="parameters">#ROWS</table>',
            paramsRowsbodyHTML = '<tr><th>Parameter</th><th>Type</th><th>Description</th></tr>';
        if (func.params) {
          for (var pI = 0; pI < func.params.length; pI++) {
            var param = func.params[pI];
            //console.error(param);
            // signature string. e.g. myFunction([paramsSignatureString]) : returnType
            paramsSignatureString += ((param.optional) ? "[" : "" ) + param.name + ((param.optional) ? "]" : "" ) + ", ";
            paramsRowsbodyHTML += '<tr><td>'+param.name+'</td><td>'+param.type.names[0]+'</td><td>'+param.description+'</td></tr>';
          }
        }
        // Prepare table
        paramsTablebodyHTML = paramsTablebodyHTML.replace("#ROWS", paramsRowsbodyHTML);
        // Remove last ", " in signature
        paramsSignatureString = paramsSignatureString.substr(0, paramsSignatureString.length-2);

        //--------------------------------------------------
        // Returns
        //--------------------------------------------------        
        var returnString = func.returns && func.returns[0].type.names[0];
        var returnbodyHTML = '<br/>Returns: '
            + "<strong>(" +((func.returns) ? func.returns[0].type.names[0] : '') + ")</strong> "
            + ((func.returns) ? func.returns[0].description : '');

        //--------------------------------------------------
        // Example
        //--------------------------------------------------        
        var examplesbodyHTML = '<p>Examples:</p>' + ((func.examples) ? '<pre class="examples">' + func.examples + '</pre>' : '');
        
        //--------------------------------------------------  
        // Put it all together
        //-------------------------------------------------- 
        var anchor = func.name.replace(".", "_")+"_"+Math.random().toString(36).substring(7);
        bodyHTML += '<div id="'+anchor+'" class="section-function">';
        bodyHTML += '<p class="func-signature"><strong>'+func.name+'(</strong> '+paramsSignatureString+' <strong>)</strong> : ' + returnString + '</p>';
        bodyHTML += '<p class="func-description">'+func.description+'</p>';
        bodyHTML += paramsTablebodyHTML;            
        bodyHTML += returnbodyHTML;            
        bodyHTML += examplesbodyHTML;
        
        // Finalize function
        bodyHTML += '</div>';
        
        // Overview
        overviewHTML += '<p class="function"><a href="#" onclick="scrollToAnchor('+anchor+')">'+func.name+'</a></p>';
      });
      
      // Finalize namespace
      bodyHTML += '</div>';
      overviewHTML += '</div>';
    });
    
    // Fill template
    tplIndex = tplIndex.replace("#BODY#", bodyHTML);
    tplIndex = tplIndex.replace("#OVERVIEW#", overviewHTML);
    
    //write(bodyHTML, opts);
    write(tplIndex, opts);
  }
  catch (err) {
    console.error("ERROR: ", err.toString());
  }
};


function write(bodyHTML, opts) {
  try {
    // Create folder
    //fs.mkdir(opts.destination);
    
    // Create index.bodyHTML
    fs.writeFileSync ( opts.destination + '/index.html', bodyHTML);
  }
  catch (err) {
    console.error("ERROR: ", err.toString());
  }
}