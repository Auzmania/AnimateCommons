// EdgeCommons for Edge Animate v2.0.2 +++ Visit edgecommons.org for documentation, updates and examples +++ Copyright (c) 2013 by Simon Widjaja +++ Distributed under the terms of the MIT license (http://www.opensource.org/licenses/mit-license.html) +++ This notice shall be included in all copies or substantial portions of the Software.

!function(a){var b=function(){};b.VERSION="1.0.0";var c=a.$,d=ModulogLog,e="EdgeCommons | Spotlight";b.setup=function(){},b.open=function(b,f){try{if("image"!=b.type&&"animate"!=b.type&&"youtube"!=b.type)return d.error("Error in open(). Unsupported type: "+b.type,e),void 0;void 0==f&&(f=window.top.document),b.width=b.width||400,b.height=b.height||600,b.borderWidth=b.borderWidth||5,b.borderColor=b.borderColor||"#FFF";var g='<div id="spotlight"> <div class="background animated transparent"> </div> </div>';c("body",f).append(g);var g='<div class="base"></div>';c("#spotlight .background",f).append(g);var g='<div class="close-button animated transparent"></div>';c("#spotlight .background",f).append(g);var h=c("#spotlight .close-button",f);h.css("margin-left",.5*b.width-15+b.borderWidth).css("margin-top",-.5*b.height-15);var i=c("#spotlight .base",f);i.css("width",0).css("height",0).css("margin-left",0).css("margin-top",0).css("border-width",b.borderWidth).css("border-color",b.borderColor).css("border-radius",5),i.css({width:b.width,"margin-left":-.5*b.width,height:b.height,"margin-top":-.5*b.height}),setTimeout(function(){c("#spotlight .background").removeClass("transparent")},10),setTimeout(function(){i.addClass("finalscale"),c("#spotlight .content",f).css("display","inline"),c("#spotlight .close-button",f).css("display","block")},100),setTimeout(function(){c("#spotlight .fader",f).css("opacity",0),c("#spotlight .close-button",f).removeClass("transparent")},500),i.append('<div class="content"></div>');var j=c("#spotlight .content",f),k=document.location.href.split("/"),l=k[k.length-1];-1!=l.indexOf(".")&&k.pop();var m=k.join("/");switch(b.type){case"image":var n=-1==b.source.indexOf("http:")&&-1==b.source.indexOf("https:")?m+"/"+b.source:b.source;j.append('<img src="'+n+'" />');break;case"animate":var n=-1==b.source.indexOf("http:")&&-1==b.source.indexOf("https:")?m+"/"+b.source:b.source;j.append('<iframe src="'+n+'" style="overflow: hidden; width: 100%; height: 100%; margin: auto; border: 0 none;"></iframe>');break;case"youtube":j.append('<iframe width="'+b.width+'" height="'+b.height+'" src="http://www.youtube.com/embed/'+b.source+"?autoplay="+(b.param&&b.param.autoPlay?"1":"0")+'" frameborder="0" allowfullscreen></iframe>')}j.append('<div class="fader animated"></div>');{c("#spotlight .fader",f)}return c("#spotlight .background",f).bind("click",function(){a.Spotlight.close(b,f)}),!0}catch(o){return d.error(o.toString()),!1}},b.close=function(a,b){void 0==b&&(b=window.top.document),c("#spotlight .content",b).remove(),c("#spotlight .close-button",b).remove(),c("#spotlight .background",b).css("opacity",0);var d=c("#spotlight .base",b);d.removeClass("finalscale"),setTimeout(function(){c("#spotlight",b).remove(),"function"==typeof a.onClose&&a.onClose(a,b)},300)},a.Spotlight=b}(EdgeCommons);