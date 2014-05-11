/*
 ADOBE CONFIDENTIAL
 ___________________

 Copyright 2011 Adobe Systems Incorporated
 All Rights Reserved.

 NOTICE:  All information contained herein is, and remains
 the property of Adobe Systems Incorporated and its suppliers,
 if any.  The intellectual and technical concepts contained
 herein are proprietary to Adobe Systems Incorporated and its
 suppliers and may be covered by U.S. and Foreign Patents,
 patents in process, and are protected by trade secret or copyright law.
 Dissemination of this information or reproduction of this material
 is strictly forbidden unless prior written permission is obtained
 from Adobe Systems Incorporated.
*/
if(typeof Muse=="undefined")window.Muse={};Muse.Assert={};Muse.Assert.fail=function(a){alert("MuseJSAssert: "+a)};Muse.Assert.assert=function(a,b){if(!a)throw Error(b);};$.extend($.browser,{SafariMobile:navigator.userAgent.toLowerCase().match(/iP(hone|ad)/i)});if(!Array.indexOf)Array.prototype.indexOf=function(a){for(var b=0;b<this.length;++b)if(this[b]==a)return b;return-1};Muse.Plugins={};Muse.Utils={};
Muse.Utils.getCssVendorPrefix=function(){if(typeof Muse.Utils.getCssVendorPrefix.flag=="undefined")Muse.Utils.getCssVendorPrefix.flag=/webkit/i.test(navigator.appVersion)?"-webkit":/firefox/i.test(navigator.userAgent)?"-moz":/trident/i.test(navigator.userAgent)?"-ms":"opera"in window?"-o":"";return Muse.Utils.getCssVendorPrefix.flag};Muse.Utils.wrapElement=function(a,b){a.parentNode.replaceChild(b,a);b.appendChild(a)};
Muse.Utils.firstChild=function(a,b){for(var c=0;c<a.childNodes.length;c++){var d=a.childNodes[c];if(d.nodeType==1&&(!b||b.matches(d)))return d}return null};Muse.Utils.firstDescendant=function(a,b,c){for(var d=0;d<a.childNodes.length;d++){var f=a.childNodes[d];if(f.nodeType==1){if(!b||b.matches(f))return f;if(!c||!c.matches(f))if(f=Muse.Utils.firstDescendant(f,b,c))return f}}return null};
Muse.Utils.descendants=function(a,b,c,d){if(!d)d=[],d.forEach=function(a){for(var b=0;b<this.length;b++)if(a(this[b]))break},d.forEachTry=function(a){for(var b=0;b<this.length;b++)try{if(a(this[b]))break}catch(c){}};for(var f=0;f<a.childNodes.length;f++){var g=a.childNodes[f];g.nodeType==1&&((!b||b.matches(g))&&d.push(g),(!c||!c.matches(g))&&Muse.Utils.descendants(g,b,c,d))}return d};Muse.Utils.children=function(a,b){return Muse.Utils.descendants(a,b,Muse.Utils.Match.always)};Muse.Utils.Match={};
Muse.Utils.Match.ByClass=function(a){this.cl=a};Muse.Utils.Match.ByClass.prototype.matches=function(a){return $(a).hasClass(this.cl)};Muse.Utils.Match.ByNodeName=function(a){this.nm=a.toLowerCase()};Muse.Utils.Match.ByNodeName.prototype.matches=function(a){return this.nm==a.nodeName.toLowerCase()};Muse.Utils.Match.ByFixed=function(a){this.matchResult=a};Muse.Utils.Match.ByFixed.prototype.matches=function(){return this.matchResult};Muse.Utils.Match.byClass=function(a){return new Muse.Utils.Match.ByClass(a)};
Muse.Utils.Match.byNodeName=function(a){return new Muse.Utils.Match.ByNodeName(a)};Muse.Utils.Match.byFixed=function(a){return new Muse.Utils.Match.ByFixed(a)};Muse.Utils.Match.always=Muse.Utils.Match.byFixed(!0);Muse.Utils.Match.never=Muse.Utils.Match.byFixed(!1);Muse.Utils.moveChildren=function(a,b){for(;a.childNodes.length>0;)b.appendChild(a.childNodes[0])};Muse.Utils.copyChildren=function(a,b){for(var c=0;c<a.childNodes.length;c++)b.appendChild(a.childNodes[c].cloneNode(!0))};
Muse.Utils.copyChildrenBefore=function(a,b){for(var c=0;c<a.childNodes.length;c++)b.parentNode.insertBefore(a.childNodes[c].cloneNode(!0),b)};Muse.Utils.pixelRound=function(a){return Math.floor((a*100+0.5)/100)};Muse.Utils.getCurrentHTMLFileName=function(a){var b=document.location.href;b.charAt(b.length-1)=="/"?b="index":(b=b.substring(b.lastIndexOf("/")+1),b=b.indexOf("#")==0?"index":b.substring(0,b.lastIndexOf(".")));a&&(b+=".html");return b};
Muse.Utils.getPageStyleSheet=function(){for(var a=0;a<document.styleSheets.length;++a){var b=document.styleSheets[a],c=b.ownerNode?b.ownerNode:b.owningElement;if(c&&c.id=="pagesheet")return b}};Muse.Utils.getStyleSheetRuleById=function(a,b){var c="#"+b.toLowerCase();return Muse.Utils.anyStyleSheetRule(a,function(a){return a.toLowerCase()==c})};
Muse.Utils.anyStyleSheetRule=function(a,b){var c=!1,d=a.cssRules;if(!d)c=!0,d=a.rules;if(!d)return null;for(var f=0;f<d.length;++f){var g=d[f];if(c){if(b(g.selectorText))return g}else for(var i=g.selectorText.split(/\s*,\s*/),h=0;h<i.length;h++)if(b(i[h]))return g}return null};Muse.Utils.getRuleProperty=function(a,b){return a.style.getPropertyValue?a.style.getPropertyValue(b):a.style.getAttribute(b)};
Muse.Utils.setRuleProperty=function(a,b,c){a.style.setProperty?a.style.setProperty(b,c,""):a.style.setAttribute(b,c,0)};Muse.Utils.removeRuleProperty=function(a,b){a.style.removeProperty?a.style.removeProperty(b):a.style.removeAttribute(b,0)};
Muse.Utils.cloneStyleSheetRule=function(a){if(typeof Muse.Utils.cloneStyleSheetRule.newNumber=="undefined")Muse.Utils.cloneStyleSheetRule.newNumber=1;var b=Muse.Utils.getPageStyleSheet(a),c=Muse.Utils.getStyleSheetRuleById(b,a),d="c"+Muse.Utils.cloneStyleSheetRule.newNumber++,f="#"+d;b.insertRule?b.insertRule(c.cssText.replace("#"+a,f),b.cssRules.length):b.addRule(f,c.style.cssText);return d};
Muse.Utils.toCamelCase=function(a){for(var b=Muse.Utils.toCamelCase.exp;b.test(a);a=a.replace(b,RegExp.$1.toUpperCase()));return a};Muse.Utils.toCamelCase.exp=/-([a-z])/;Muse.Utils.getStyleValue=function(a,b){var c=a.style[Muse.Utils.toCamelCase(b)];c||(document.defaultView?c=document.defaultView.getComputedStyle(a,"").getPropertyValue(b):a.currentStyle&&(c=a.currentStyle[Muse.Utils.toCamelCase(b)]));c&&c.match(/(\d+)px/)&&(c=parseInt(c.substring(0,c.length-2)));return c};
Muse.Utils.urlParam=function(a,b){var c=RegExp("[\\?&]"+b+"=([^&#]*)").exec(a);return c?c[1]:null};
Muse.Utils.processHyperlink=function(a){var b=a.href,c=$(window),d=$(a),a=d.attr("target");if(!a||a=="_self"){var f=b.lastIndexOf("/"),a=b.lastIndexOf("#");if((d=d.attr("class").match(/anim_(\w+)/))&&a>f){f=c.data("scrollWrapper");destination=b.substring(a);destinationOffset=$(destination).offset();speed=1E3;animation=d[1];windowWrapper=f||window;doc=document.documentElement||document.body;scrollDistanceTop=(f?f.scrollHeight():doc.scrollHeight)-c.height();scrollDistanceLeft=(f?f.scrollWidth():doc.scrollWidth)-
c.width();distanceTop=Math.min(scrollDistanceTop,destinationOffset.top+(f&&!f.isStandard()?f.scrollTop():0));distanceLeft=Math.min(scrollDistanceLeft,destinationOffset.left+(f&&!f.isStandard()?f.scrollLeft():0));completeFn=function(){windowWrapper.scrollTo(distanceLeft,distanceTop);try{history.replaceState({})}catch(a){if(!jQuery.browser.msie||jQuery.browser.version>7)window.location.hash=destination}};try{history.pushState({},null,destination)}catch(g){}if(window.scrollTo||void 0!==f){var b=f||$(document),
i=b.scrollLeft(),h=b.scrollTop(),k=i,j=h;$({scrollDistance:0}).animate({scrollDistance:1},{duration:speed,easing:animation,step:function(a){a!=0&&(j=a*(distanceTop-h),k=a*(distanceLeft-i),windowWrapper.scrollTo(i+k,h+j))},complete:completeFn})}else $("html,body").animate({scrollTop:distanceTop,scrollLeft:distanceLeft},speed,animation,completeFn);return!1}}(b=Muse.Utils.urlParam(b,"devicelock"))&&Muse.Utils.createCookie("devicelock",b,0);return!0};var actionStack=[];Muse.Utils.redirectCancelled=!1;
Muse.Utils.redirectHyperlink=function(a){if(Muse.Utils.redirectCancelled)setTimeout(function(){Muse.Utils.redirectCancelled=!1},0);else if(actionStack=[],Muse.Utils.processHyperlink(a)){var b=$(a).attr("target");b||(b="_self");window.open(a.href,b)}};Muse.Utils.redirectHyperlinkInNewTab=function(a,b){if(Muse.Utils.redirectCancelled)setTimeout(function(){Muse.Utils.redirectCancelled=!1},0);else{actionStack=[];thisWindow=window.self;var c=window.open(a);b?c.focus():thisWindow.focus()}};
Muse.Utils.isMouseLeftClick=function(a){return a.which==1};Muse.Utils.isMouseMiddleClick=function(a){return a.which==2};Muse.Utils.isRedirectLinkKeyboardAction=function(a){return a.which==13};
Muse.Utils.addHyperlinkAnchor=function(a){a=$(a);a.bind("mousedown",function(a){(Muse.Utils.isMouseLeftClick(a)||Muse.Utils.isMouseMiddleClick(a))&&actionStack.push(this)});a.bind("mouseup keyup",function(a){if(Muse.Utils.isMouseLeftClick(a)&&actionStack.indexOf(this)!=-1)a.ctrlKey||a.metaKey?Muse.Utils.redirectHyperlinkInNewTab(this.href,a.shiftKey):Muse.Utils.redirectHyperlink(this);else if(Muse.Utils.isMouseMiddleClick(a)&&actionStack.indexOf(this)!=-1)if(jQuery.browser.webkit||!a.target.href&&
jQuery.browser.msie)Muse.Utils.redirectHyperlinkInNewTab(this.href,a.shiftKey);else return actionStack=[],!0;else Muse.Utils.isRedirectLinkKeyboardAction(a)&&Muse.Utils.redirectHyperlink(this);return!1});a.bind("click",function(){return!1})};
Muse.Utils.addHyperlinkBlock=function(a){var b=$(a.parentNode);b.bind("mousedown",function(a){(Muse.Utils.isMouseLeftClick(a)||Muse.Utils.isMouseMiddleClick(a))&&actionStack.push(this);return!1});b.bind("mouseup keyup",function(b){Muse.Utils.isMouseLeftClick(b)&&actionStack.indexOf(this)!=-1?b.ctrlKey||b.metaKey?Muse.Utils.redirectHyperlinkInNewTab(a.href,b.shiftKey):Muse.Utils.redirectHyperlink(a):Muse.Utils.isMouseMiddleClick(b)&&actionStack.indexOf(this)!=-1?Muse.Utils.redirectHyperlinkInNewTab(a.href,
b.shiftKey):Muse.Utils.isRedirectLinkKeyboardAction(b)&&Muse.Utils.redirectHyperlink(a);return!1});b.bind("click",function(){return!1})};
Muse.Utils.prepHyperlinks=function(a){$("a.block").each(function(){var a=$(this.parentNode);Muse.Utils.addHyperlinkBlock(this);a.find("a.nonblock").each(function(){var a=$(this);if(a.data("registeredNonBlockLink")===!0)return!1;Muse.Utils.addHyperlinkAnchor(this);a.data("registeredNonBlockLink",!0)})});$("a.nonblock").each(function(){var a=$(this);a.data("registeredNonBlockLink")!==!0&&(a.parent('[class~="sbg"]').length>0?Muse.Utils.addHyperlinkAnchor(this):(a.attr("class").match(/anim_(\w+)/)||this.href.indexOf("devicelock=")!=
-1)&&$(this).bind("click",function(){return Muse.Utils.processHyperlink(this)}))});a&&Muse.Utils.enableAnchorLinksActiveState()};Muse.Utils.pathOnly=function(a){if(!a)return a;return a.replace(/#(?:[^#]+)$/,"").replace(/\?(?:[^\?]+)$/,"")};
Muse.Utils.enableAnchorLinksActiveState=function(){var a=$("#page"),b=a.outerWidth()/a.outerHeight()>2,c=[],a=$(window),d=Muse.Utils.getPageStyleSheet(),f=function(){c.splice(0,c.length);$("a.nonblock,a.block").each(function(){Muse.Utils.saveHyperlinkInfo($(this),d,b,c)});c.sort(function(a,b){if(a.from<b.from)return-1;if(a.from>b.from)return 1;return 0})};f();if(0!=c.length){var g=!1,i=a.data("scrollWrapper"),h=i||a,k=function(){g=!1;var a=b?h.scrollLeft():h.scrollTop(),d;a:{var j=0;d=c.length;for(var k;j<
d;j++)if(k=c[j],k.from<=a&&a<=k.to){d=j;break a}d=-1}var o,n,j=Math.max(0,d);for(d=Math.min(d+2,c.length);j<d;j++)if(o=c[j],k=o.$elem.offset().left+(i&&!i.isStandard()?i.scrollLeft():0),n=o.$elem.offset().top+(i&&!i.isStandard()?i.scrollTop():0),o.from!=(b?k:n)){f();break}j=0;for(d=c.length;j<d;j++){o=c[j];k=o.from<=a&&a<=o.to;o=o.hyperLinks;n=void 0;for(var t=0;t<o.length;t++)n=o[t].hasClass("MenuItem")?"MuseMenuActive":"MuseLinkActive",k&&!o[t].hasClass(n)?o[t].addClass(n):!k&&o[t].hasClass(n)&&
o[t].removeClass(n)}},j=function(){g||(g=!0,Muse.Utils.requestAnimationFrame(k))};if(a.data("scrollWrapper"))a.on("scrolled",j);else a.scroll(j);k()}};
Muse.Utils.saveHyperlinkInfo=function(a,b,c,d){var f=a.attr("href"),g=Muse.Utils.pathOnly(f),i=-1,h=a.attr("target"),k=window.location.href.replace(/#.*$/i,"");if(f&&-1!=f.indexOf("#")&&!(h&&h!="_self")&&!(0<=g.indexOf("/"))&&(k.charAt(k.length-1)=="/"&&(k+="index.html"),-1!=k.indexOf("/"+g,k.length-g.length-1))){var h=$(window).data("scrollWrapper"),k=f.substring(f.lastIndexOf("#")),a=a.parent('[class~="sbg"]').length>0||a.hasClass("block")?a.parent():a,j=a.attr("id");if(null!==Muse.Utils.anyStyleSheetRule(b,
function(a){return 0<=a.indexOf("#"+j+".MuseMenuActive")||0<=a.indexOf("#"+j+".MuseLinkActive")||0<=a.indexOf(".MuseMenuActive#"+j)||0<=a.indexOf(".MuseLinkActive#"+j)})){b=0;for(g=d.length;b<g;b++)if(d[b].href==f){i=b;break}if(-1==i){k=$(k);if(k.length===0)return;c=c?k.offset().left+(h&&!h.isStandard()?h.scrollLeft():0):k.offset().top+(h&&!h.isStandard()?h.scrollTop():0);h=Number.MAX_VALUE;b=0;for(g=d.length;b<g;b++)if(d[b].href!=f&&d[b].from==c){i=b;break}if(-1==i){b=0;for(g=d.length;b<g;b++){i=
d[b];if(i.from<c&&c<i.to){h=i.to;i.to=c-1;break}i.from<=h&&(h=i.from-1)}d.push({hyperLinks:[],from:c,to:h,$elem:k,href:f});i=d.length-1}}d[i].hyperLinks.push(a)}}};
Muse.Utils.getNaturalWidth=function(a){var b=-1;a.naturalWidth!=null?b=a.naturalWidth:a.runtimeStyle?(a.runtimeStyle.width="auto",a.runtimeStyle.height="auto",a.runtimeStyle.borderWidth="0",a.runtimeStyle.padding="0",b=a.offsetWidth,a.runtimeStyle.width="",a.runtimeStyle.height="",a.runtimeStyle.borderWidth="",a.runtimeStyle.padding=""):(a=a.cloneNode(!0),a.className="",a.style.width="auto !important",a.style.height="auto !important",a.style.borderWidth="0 !important",a.style.padding="0 !important",
b=a.width);return b};
Muse.Utils.getNaturalHeight=function(a){var b=-1;a.naturalHeight!=null?b=a.naturalHeight:a.runtimeStyle?(a.runtimeStyle.width="auto",a.runtimeStyle.height="auto",a.runtimeStyle.borderWidth="0",a.runtimeStyle.padding="0",b=a.offsetHeight,a.runtimeStyle.width="",a.runtimeStyle.height="",a.runtimeStyle.borderWidth="",a.runtimeStyle.padding=""):(a=a.cloneNode(!0),a.className="",a.style.width="auto !important",a.style.height="auto !important",a.style.borderWidth="0 !important",a.style.padding="0 !important",
b=a.height);return b};Muse.Utils.pieLoading=!1;Muse.Utils.pieFunctionQueue=[];
Muse.Utils.needPIE=function(a){if(Muse.Utils.havePIE)a();else if(Muse.Utils.pieFunctionQueue.push(a),!Muse.Utils.pieLoading)Muse.Utils.pieLoading=!0,a="scripts/pie.js",a[0]=="/"&&(a=location.pathname.indexOf(".html")!=-1?location.pathname.substring(0,location.pathname.lastIndexOf("/"))+a:location.pathname+a,a=a.replace(/\/+/g,"/")),$.ajax({url:a,dataType:"script",complete:function(){if(typeof PIE!="undefined"){Muse.Utils.havePIE=!0;Muse.Utils.pieLoading=!1;for(var a=0;a<Muse.Utils.pieFunctionQueue.length;++a)Muse.Utils.pieFunctionQueue[a]()}}})};
Muse.Utils.transformMarkupToFixBrowserProblemsPreInit=function(){jQuery.browser.msie?(jQuery("html").addClass("ie"),jQuery.browser.version<8&&Muse.Utils.changeLItoDIVs()):jQuery.browser.SafariMobile&&jQuery("body").css("-webkit-text-size-adjust","none")};
Muse.Utils.transformMarkupToFixBrowserProblems=function(){Muse.Utils.havePIE=!1;jQuery.browser.msie&&jQuery.browser.version<=9&&(Muse.Utils.needPIE(function(){Muse.Utils.addGradientFill();Muse.Utils.addShadows();jQuery.browser.version<9&&(Muse.Utils.addRoundedCorners(),Muse.Utils.addRGBA())}),jQuery.browser.version<9&&(Muse.Utils.applyIEFilterToPNGImages(),Muse.Utils.removeEdgeAnimationBorderForIE78()),jQuery.browser.version<8&&Muse.Utils.fixWidthsForClearingInIE7());(jQuery.browser.msie&&jQuery.browser.version<
9||jQuery.browser.webkit)&&Muse.Utils.insertEmptyDivAfterPinnedColumnElements();Muse.Utils.fixTransformRotations()};
Muse.Utils.applyIEFilterToPNGImages=function(){jQuery.browser.msie&&jQuery.browser.version<9&&$("body *").not(".museBgSizePolyfill img,.f3s_top,.f3s_mid").each(function(){var a=$(this);if(a.css("background-image").match(/\b.png/i)||this.nodeName&&this.nodeName.toLowerCase()=="img"&&a.attr("src").match(/\b.png/i)){var b=a.css("filter");a.css("filter",b?b+" progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)":"progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)")}})};
Muse.Utils.insertEmptyDivAfterPinnedColumnElements=function(){$(".pinned-colelem").each(function(){$("<div class='colelem'/>").insertAfter($(this))})};Muse.Utils.fixPNGImages=function(){$("body *").each(function(){var a=$(this);if(a.css("background-image").match(/\b.png/i)||this.nodeName&&this.nodeName.toLowerCase()=="img"&&a.attr("src").match(/\b.png/i))a.css("-pie-png-fix","true"),PIE.attach(this)})};Muse.Utils.addGradientFill=function(){$(".gradient").each(function(){PIE.attach(this)})};
Muse.Utils.addShadows=function(){$(".shadow").each(function(){PIE.attach(this)})};
Muse.Utils.addRoundedCorners=function(){$(".rounded-corners").each(function(){var a=$(this);if(jQuery.browser.msie&&jQuery.browser.version<8&&(a.css("border-left-width")==0||a.css("border-left-style")=="none")&&(a.css("border-right-width")==0||a.css("border-right-style")=="none")&&(a.css("border-top-width")==0||a.css("border-top-style")=="none")&&(a.css("border-bottom-width")==0||a.css("border-bottom-style")=="none"))a.css({"border-right-width":"1px","border-right-style":"solid","border-right-color":a.css("background-color")}),
a.width(a.width()-1);PIE.attach(this)})};Muse.Utils.addRGBA=function(){$(".rgba-background").each(function(){PIE.attach(this)})};Muse.Utils.fixWidthsForClearingInIE7=function(){$(".colelem").each(function(){var a=$(this).offset().left-$(this).parent().offset().left;if($(this).width()<1||$(this).width()+a<1)$(this).css("width",(a<0?1-a:1)+"px")})};
Muse.Utils.removeEdgeAnimationBorderForIE78=function(){$(".animationContainer").each(function(){$(this).parent().html(function(a,b){return b.replace(/><\/iframe>$/gi,' frameBorder="0"></iframe>')})})};Muse.Utils.fixAnimationsMarkup=function(){$(".animationContainer").each(function(){var a=$(this);a.load(function(){var b=a.contents();$("#report-abuse",b).remove();$("#report-abuse-spacer",b).remove()})})};
Muse.Utils.fixTransformRotations=function(){Muse.Browser.Features.checkCSSFeature("transform")||$("*[data-mu-ie-matrix]").each(function(){var a=$(this),b=a.parent(),c=Math.round(a.data("mu-ie-matrix-dx")),d=Math.round(a.data("mu-ie-matrix-dy")),f=b.innerHeight(),g=b.innerWidth();a.css({filter:function(b,c){if(c)return c+" "+a.data("mu-ie-matrix");return a.data("mu-ie-matrix")},"margin-bottom":"-="+d}).removeClass("shadow");b.css({"margin-bottom":"-="+(b.innerHeight()-f),"margin-right":"-="+(b.innerWidth()-
g)});a.hasClass("actAsDiv")?(a.wrap('<span class="actAsDiv rotateWrapper"></span>'),a.parent().css("float",a.css("float"))):a.hasClass("actAsInlineDiv")?a.wrap('<span class="actAsInlineDiv rotateWrapper"></span>'):a.wrap('<div class="rotateWrapper"></div>');a.parent().css({top:d,left:c,position:"relative","margin-bottom":d})})};
Muse.Utils.fullPage=function(a){var b=$(a+" .verticalspacer"),c=$(a),d=$(window),f=$("body"),g=b.height();f.bind("wp-page-height-change",function(a,b){o(b)});var i=Muse.Utils.getCSSIntValue(f,"padding-top")+Muse.Utils.getCSSIntValue(f,"margin-top"),h=Muse.Utils.getCSSIntValue(f,"padding-bottom")+Muse.Utils.getCSSIntValue(f,"margin-bottom"),k=0,j=!0,l=f.hasClass("always_vert_scroll"),m=0!=Muse.Utils.getCSSIntValue(b,"margin-bottom"),p=function(a){var a=k<a,c=!1;l||(a&&!f.hasClass("no_vert_scroll")?
(f.addClass("no_vert_scroll"),c=!0):!a&&f.hasClass("no_vert_scroll")&&(f.removeClass("no_vert_scroll"),c=!0));c&&b.css("height")},r=function(a){parseInt(a)||(a=0);m&&b.css("margin-bottom",-(b.offset().top-i));var f=c.outerHeight(!0),l=f-g,a=Math.max(k,d.height()-i-h-l-a);a!=g&&(j=!1,p(a),b.css("height",a),a<g&&f==c.outerHeight(!0)&&(a=g,p(a),b.css("height",a)),j=!0);return g=a},o=function(a){j&&r(a)};Muse.Browser.Bugs.CannotHandleZeroHeightDivs&&(k=1);Muse.Browser.Bugs.CannotHandleClearBoth&&0!=Muse.Utils.getCSSIntValue(b,
"margin-bottom")&&(b.css("margin-bottom",0),m=!1);(function(){for(var a=0,b=0;b++<20;){var c=r();if(c<=a)break;a=c}})();c.watch("height",o);d.resize(r)};Muse.Utils.endsWith=function(a,b){if(!a||!b)return!1;Muse.Assert.assert("string"==typeof a,'Invalid type for "str" argument - expected string.');Muse.Assert.assert("string"==typeof b,'Invalid type for "ending" argument - expected string.');return a.substring(a.length-b.length)==b};
Muse.Utils.firstDefined=function(){for(var a=0;a<arguments.length;a++)if(typeof arguments[a]!="undefined")return arguments[a]};Muse.Utils.isDefined=function(a){return"undefined"!=typeof a};Muse.Utils.getCSSIntValue=function(a,b){return Muse.Utils.tryParse(a.css(b),parseInt,0)};Muse.Utils.tryParse=function(a,b,c){if(typeof a=="undefined")return c;a=b(a);return!isNaN(a)?a:c};
Muse.Utils.changeLItoDIVs=function(){var a=function(){var a=$(this),c=$("<div/>");c.addClass(a.attr("class"));c.attr("id",a.attr("id"));c.append(a.contents());a.replaceWith(c)};$("ul").each(function(){$(this).find("li").each(a)});$("ul").each(a)};Muse.Utils.initWidget=function(a,b){$(a).each(function(){b(this)})};Muse.Utils.showWidgetsWhenReady=function(){jQuery(".disn").removeClass("disn");jQuery(".invi").removeClass("invi");jQuery(".widget_invisible").removeClass("widget_invisible")};
Muse.Utils.detachIframesAndObjectsToPauseMedia=function(a){var b=[];$("iframe, object",a).each(function(){var a=$(this);if(!a.is("object")||!(jQuery.browser.msie&&jQuery.browser.version<9)){var d={};d.$next=a.next();d.$parent=a.parent();jQuery.browser.msie?(d.html=a.wrap("<div id='deleteMeWrapper'/>").parent().html(),a.remove(),d.$parent.children("div #deleteMeWrapper").remove()):d.$node=a.detach();b.push(d)}});b.length&&a.data("detached",b);$("video",a).each(function(){if(jQuery.browser.msie&&jQuery.browser.version==
9&&this.pause&&this.getAttribute("autoplay")&&this.readyState!=4)$(this).one("play",function(){this.pause()});else this.pause&&!this.paused&&this.pause()})};
Muse.Utils.attachIframesAndObjectsToResumeMedia=function(a){var b=a.data("detached");if(b){for(var c=b.length-1;c>=0;c--){var d=b[c];!d.$next||d.$next.length==0?d.$parent.append(d.$node?d.$node:d.html):d.$next.before(d.$node?d.$node:d.html);d.$next=d.$parent=d.$node=d.html=void 0}a.data("detached",null)}$("video",a).each(function(){if(this.play&&this.getAttribute("autoplay")&&this.paused)this.currentTime=0,this.play()})};
Muse.Utils.createCookie=function(a,b,c){if(c){var d=new Date;d.setTime(d.getTime()+c*864E5);c="; expires="+d.toGMTString()}else c="";document.cookie=a+"="+b+c+"; path=/"};Muse.Utils.readCookie=function(a){a+="=";for(var b=document.cookie.split(";"),c=0;c<b.length;c++){for(var d=b[c];d.charAt(0)==" ";)d=d.substring(1,d.length);if(d.indexOf(a)==0)return d.substring(a.length,d.length)}return null};Muse.Utils.eraseCookie=function(a){createCookie(a,"",-1)};Muse.Browser={};
Muse.Browser.domPrefixes=["Webkit","Moz","O","ms","Khtml"];Muse.Browser.Features={};
Muse.Browser.Features.Touch=function(){if(navigator.maxTouchPoints>0)return{Start:"pointerDown",End:"pointerUp",Move:"pointerMove",Listener:function(a){return function(b){var c=b.originalEvent||b;if(c.pointerType!=c.POINTER_TYPE_MOUSE)return a.apply(this,arguments)}}};else for(var a=0,b=Muse.Browser.domPrefixes.length;a<b;a++){var c=Muse.Browser.domPrefixes[a];if(c+"MaxTouchPoints"in navigator&&navigator[c+"MaxTouchPoints"])return c=c.toUpperCase(),{Start:c+"PointerDown",End:c+"PointerUp",Move:c+
"PointerMove",Listener:function(a){return function(b){var d=b.originalEvent||b;if(d.pointerType!=d[c+"POINTER_TYPE_MOUSE"])return a.apply(this,arguments)}}}}try{return document.createEvent("TouchEvent"),{Start:"touchstart",End:"touchend",Move:"touchmove",Listener:function(a){return a}}}catch(d){}return!1}();
Muse.Browser.Features.checkCSSFeature=function(a,b){var c=Muse.Utils.toCamelCase(a),b=b||document.createElement("div");if(c in b.style)return!0;for(var c=c.charAt(0).toUpperCase()+c.substr(1),d=0,f=Muse.Browser.domPrefixes.length;d<f;d++)if(Muse.Browser.domPrefixes[d]+c in b.style)return Muse.Browser.domPrefixes[d];return!1};
Muse.Browser.Features.checkCSSValueCompatibility=function(a,b){var c=document.createElement("div"),a=Muse.Utils.toCamelCase(a),d=Muse.Browser.Features.checkCSSFeature(a,c);if(d)d!==!0&&(a=d+a.charAt(0).toUpperCase()+a.substr(1));else return!1;d=c.style[a];c.style[a]=b;if(c.style[a]!==d||b===d)return!0;for(var f=0;f<Muse.Browser.domPrefixes.length;f++){var g="-"+Muse.Browser.domPrefixes[f].toLowerCase()+"-"+b;c.style[a]=g;if(c.style[a]!==d)return Muse.Browser.domPrefixes[f]}return!1};
Muse.Browser.Bugs={};
Muse.Browser.Bugs.ClearNeedsOuterWidth=function(){var a=document.createElement("div");a.id="mbbcnow00";a.innerHTML='<div>a</div><style type="text/css">#mbbcnow00{position:absolute;top:-9999px;left:-9999px;visibility:hidden;} #mbbcnow01{width:1px;margin-right:-9999px;float:left} #mbbcnow02{clear:left;}</style>';var b=document.createElement("div"),c=document.createElement("div");document.body.appendChild(a);a.appendChild(b);a.appendChild(c);b.innerHTML="a";b.id="mbbcnow01";c.innerHTML="b";c.id="mbbcnow02";
b=c.getBoundingClientRect().top-b.getBoundingClientRect().top;document.body.removeChild(a);return b<1}();Muse.Browser.Bugs.CannotHandleZeroHeightDivs=function(){return jQuery.browser.msie&&8==jQuery.browser.version}();Muse.Browser.Bugs.CannotHandleClearBoth=function(){return jQuery.browser.msie&&7==jQuery.browser.version}();
Muse.Browser.Bugs.ScrollWidthHeightIncludesBorder=function(){var a=!1,b=$("<div>").css({border:"1px solid #000000;",width:100,height:100,position:"absolute",top:-99999,left:-99999,padding:0,margin:0,overflow:"auto"}).appendTo(document.body)[0];b.scrollHeight!==b.clientHeight&&(a=!0);$(b).remove();return a}();
Muse.Utils.requestAnimationFrame=function(){return window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame&&window.webkitRequestAnimationFrame.bind(window)||window.mozRequestAnimationFrame&&window.mozRequestAnimationFrame.bind(window)||function(a){window.setTimeout(a,20)}}();
