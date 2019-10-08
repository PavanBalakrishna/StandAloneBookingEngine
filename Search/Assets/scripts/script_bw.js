/* eslint-disable */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.mobiscroll=t()}(this,function(){"use strict";function e(e){return"function"==typeof e}function t(e){return"object"===("undefined"==typeof e?"undefined":P(e))}function a(e){return"number"==typeof e.length}function n(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})}function s(e,t,a){for(var n in t)a&&(q.isPlainObject(t[n])||q.isArray(t[n]))?((q.isPlainObject(t[n])&&!q.isPlainObject(e[n])||q.isArray(t[n])&&!q.isArray(e[n]))&&(e[n]={}),s(e[n],t[n],a)):void 0!==t[n]&&(e[n]=t[n])}function i(e){return e.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function r(e,t){return"number"!=typeof t||F[i(e)]?t:t+"px"}function o(e,t,a){L[e]=function(n,s){var i,r,o={},l=s||{};return a!==!1&&(l.preset=e),q(n).each(function(){i=new t(this,l),o[this.id]=i}),r=Object.keys(o),1==r.length?o[r[0]]:o}}function l(){}function c(e){var t,a=[];for(t in e)a.push(e[t]);return a}function d(e){return e-parseFloat(e)>=0}function u(e){return"string"==typeof e}function h(e,t,a){return Math.max(t,Math.min(e,a))}function m(e,t){for(e+="",t=t||2;e.length<t;)e="0"+e;return e}function f(e){"vibrate"in navigator&&navigator.vibrate(e||50)}function p(){Q++,setTimeout(function(){Q--},500)}function b(e,t,a){var n=e.originalEvent||e,s=(a?"page":"client")+t;return n.targetTouches&&n.targetTouches[0]?n.targetTouches[0][s]:n.changedTouches&&n.changedTouches[0]?n.changedTouches[0][s]:e[s]}function v(e,t,a,n,s,i){function r(e){h||(n&&e.preventDefault(),h=this,d=b(e,"X"),u=b(e,"Y"),m=!1,f=new Date)}function o(e){h&&!m&&(Math.abs(b(e,"X")-d)>s||Math.abs(b(e,"Y")-u)>s)&&(m=!0)}function l(t){h&&((i&&new Date-f<100||!m)&&(t.preventDefault(),a.call(h,t,e)),h=!1,p())}function c(){h=!1}var d,u,h,m,f,v=L.$,g=v(t);s=s||9,e.settings.tap&&g.on("touchstart.mbsc",r).on("touchcancel.mbsc",c).on("touchmove.mbsc",o).on("touchend.mbsc",l),g.on("click.mbsc",function(t){n&&t.preventDefault(),a.call(this,t,e)})}function g(e){if(Q&&!ee&&!e.isMbscTap&&("TEXTAREA"!=e.target.nodeName||"mousedown"!=e.type))return e.stopPropagation(),e.preventDefault(),!1}function y(e,t,a,n,s,i,r){var o=new Date(e,t,a,n||0,s||0,i||0,r||0);return 23==o.getHours()&&0===(n||0)&&o.setHours(o.getHours()+2),o}function x(e,t,a){if(!t)return null;var n,s,i=oe({},me,a),r=function(t){for(var a=0;n+1<e.length&&e.charAt(n+1)==t;)a++,n++;return a},o=function(e,t,a){var n=""+t;if(r(e))for(;n.length<a;)n="0"+n;return n},l=function(e,t,a,n){return r(e)?n[t]:a[t]},c="",d=!1;for(n=0;n<e.length;n++)if(d)"'"!=e.charAt(n)||r("'")?c+=e.charAt(n):d=!1;else switch(e.charAt(n)){case"d":c+=o("d",i.getDay(t),2);break;case"D":c+=l("D",t.getDay(),i.dayNamesShort,i.dayNames);break;case"o":c+=o("o",(t.getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5,3);break;case"m":c+=o("m",i.getMonth(t)+1,2);break;case"M":c+=l("M",i.getMonth(t),i.monthNamesShort,i.monthNames);break;case"y":s=i.getYear(t),c+=r("y")?s:(s%100<10?"0":"")+s%100;break;case"h":var u=t.getHours();c+=o("h",u>12?u-12:0===u?12:u,2);break;case"H":c+=o("H",t.getHours(),2);break;case"i":c+=o("i",t.getMinutes(),2);break;case"s":c+=o("s",t.getSeconds(),2);break;case"a":c+=t.getHours()>11?i.pmText:i.amText;break;case"A":c+=t.getHours()>11?i.pmText.toUpperCase():i.amText.toUpperCase();break;case"'":r("'")?c+="'":d=!0;break;default:c+=e.charAt(n)}return c}function w(e,t,a){var n=oe({},me,a),s=C(n.defaultValue||new Date);if(!e||!t)return s;if(t.getTime)return t;t="object"==("undefined"==typeof t?"undefined":P(t))?t.toString():t+"";var i,r=n.shortYearCutoff,o=n.getYear(s),l=n.getMonth(s)+1,c=n.getDay(s),d=-1,u=s.getHours(),h=s.getMinutes(),m=0,f=-1,p=!1,b=function(t){var a=i+1<e.length&&e.charAt(i+1)==t;return a&&i++,a},v=function(e){b(e);var a="@"==e?14:"!"==e?20:"y"==e?4:"o"==e?3:2,n=new RegExp("^\\d{1,"+a+"}"),s=t.substr(x).match(n);return s?(x+=s[0].length,parseInt(s[0],10)):0},g=function(e,a,n){var s,i=b(e)?n:a;for(s=0;s<i.length;s++)if(t.substr(x,i[s].length).toLowerCase()==i[s].toLowerCase())return x+=i[s].length,s+1;return 0},y=function(){x++},x=0;for(i=0;i<e.length;i++)if(p)"'"!=e.charAt(i)||b("'")?y():p=!1;else switch(e.charAt(i)){case"d":c=v("d");break;case"D":g("D",n.dayNamesShort,n.dayNames);break;case"o":d=v("o");break;case"m":l=v("m");break;case"M":l=g("M",n.monthNamesShort,n.monthNames);break;case"y":o=v("y");break;case"H":u=v("H");break;case"h":u=v("h");break;case"i":h=v("i");break;case"s":m=v("s");break;case"a":f=g("a",[n.amText,n.pmText],[n.amText,n.pmText])-1;break;case"A":f=g("A",[n.amText,n.pmText],[n.amText,n.pmText])-1;break;case"'":b("'")?y():p=!0;break;default:y()}if(o<100&&(o+=(new Date).getFullYear()-(new Date).getFullYear()%100+(o<=("string"!=typeof r?r:(new Date).getFullYear()%100+parseInt(r,10))?0:-100)),d>-1){l=1,c=d;do{var w=32-new Date(o,l-1,32,12).getDate();c>w&&(l++,c-=w)}while(c>w)}u=f==-1?u:f&&u<12?u+12:f||12!=u?u:0;var T=n.getDate(o,l-1,c,u,h,m);return n.getYear(T)!=o||n.getMonth(T)+1!=l||n.getDay(T)!=c?s:T}function T(e){return y(e.getFullYear(),e.getMonth(),e.getDate())}function _(e,t){var a="",n="";return e&&(t.h&&(n+=m(e.getHours())+":"+m(e.getMinutes()),t.s&&(n+=":"+m(e.getSeconds())),t.u&&(n+="."+m(e.getMilliseconds(),3)),t.tz&&(n+=t.tz)),t.y?(a+=e.getFullYear(),t.m&&(a+="-"+m(e.getMonth()+1),t.d&&(a+="-"+m(e.getDate())),t.h&&(a+="T"+n))):t.h&&(a=n)),a}function D(e,t,a){var n,s,i={y:1,m:2,d:3,h:4,i:5,s:6,u:7,tz:8};if(a)for(n in i)s=e[i[n]-t],s&&(a[n]="tz"==n?s:1)}function M(e,t,a){var n=window.moment||t.moment,s=t.returnFormat;if(e){if("moment"==s&&n)return n(e);if("locale"==s)return x(a,e,t);if("iso8601"==s)return _(e,t.isoParts)}return e}function C(e,t,a,n){var s;return e?e.getTime?e:e.toDate?e.toDate():("string"==typeof e&&(e=e.trim()),(s=de.exec(e))?(D(s,2,n),new Date(1970,0,1,s[2]?+s[2]:0,s[3]?+s[3]:0,s[4]?+s[4]:0,s[5]?+s[5]:0)):(s||(s=ce.exec(e)),s?(D(s,0,n),new Date(s[1]?+s[1]:1970,s[2]?s[2]-1:0,s[3]?+s[3]:1,s[4]?+s[4]:0,s[5]?+s[5]:0,s[6]?+s[6]:0,s[7]?+s[7]:0)):w(t,e,a))):null}function k(e){var t;for(t in e)if(void 0!==pe[e[t]])return!0;return!1}function S(){var e,t=["Webkit","Moz","O","ms"];for(e in t)if(k([t[e]+"Transform"]))return"-"+t[e].toLowerCase()+"-";return""}function V(e,t){if("touchstart"==e.type)ae(t).attr("data-touch","1");else if(ae(t).attr("data-touch"))return ae(t).removeAttr("data-touch"),!1;return!0}function Y(e,t){var a,n,s=getComputedStyle(e[0]);return ae.each(["t","webkitT","MozT","OT","msT"],function(e,t){if(void 0!==s[t+"ransform"])return a=s[t+"ransform"],!1}),a=a.split(")")[0].split(", "),n=t?a[13]||a[5]:a[12]||a[4]}function N(e){if(e){if(xe[e])return xe[e];var t=ae('<div style="background-color:'+e+';"></div>').appendTo("body"),a=getComputedStyle(t[0]),n=a.backgroundColor.replace(/rgb|rgba|\(|\)|\s/g,"").split(","),s=.299*n[0]+.587*n[1]+.114*n[2],i=s<130?"#fff":"#000";return t.remove(),xe[e]=i,i}}function A(e,t,a,n,s,i){function r(e){var t;f=ae(this),w=+f.attr("data-step"),v=+f.attr("data-index"),p=!0,s&&e.stopPropagation(),"mousedown"==e.type&&e.preventDefault(),"keydown"!=e.type?(y=b(e,"X"),x=b(e,"Y"),t=V(e,this)):t=32===e.keyCode,g||!t||f.hasClass("mbsc-disabled")||(u(v,w)&&(f.addClass("mbsc-active"),i&&i.addRipple(f.find(".mbsc-segmented-content"),e)),"mousedown"==e.type&&ae(document).on("mousemove",o).on("mouseup",c))}function o(e){(Math.abs(y-b(e,"X"))>7||Math.abs(x-b(e,"Y"))>7)&&(p=!0,d())}function c(e){"touchend"==e.type&&e.preventDefault(),d(),"mouseup"==e.type&&ae(document).off("mousemove",o).off("mouseup",c)}function d(){g=!1,clearInterval(T),f&&(f.removeClass("mbsc-active"),i&&setTimeout(function(){i.removeRipple()},100))}function u(e,t){return g||_(e)||(v=e,w=t,g=!0,p=!1,setTimeout(h,100)),g}function h(){return f&&f.hasClass("mbsc-disabled")?void d():(!g&&p||(p=!0,t(v,w,h)),void(g&&a&&(clearInterval(T),T=setInterval(function(){t(v,w)},a))))}function m(){e.off("touchstart mousedown keydown",r).off("touchmove",o).off("touchend touchcancel keyup",c)}var f,p,v,g,y,x,w,T,_=n||l;return e.on("touchstart mousedown keydown",r).on("touchmove",o).on("touchend touchcancel keyup",c),{start:u,stop:d,destroy:m}}function E(e){return e[0].innerWidth||e.innerWidth()}var L=L||{},H={},P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},O={readonly:"readOnly"},W=[],$=Array.prototype.slice,I=function(){var s=function(e){var t=this,a=0;for(a=0;a<e.length;a++)t[a]=e[a];return t.length=e.length,o(this)},o=function t(a,n){var i=[],r=0;if(a&&!n&&a instanceof s)return a;if(e(a))return t(document).ready(a);if(a)if("string"==typeof a){var o,l,c;if(a=c=a.trim(),c.indexOf("<")>=0&&c.indexOf(">")>=0){var d="div";for(0===c.indexOf("<li")&&(d="ul"),0===c.indexOf("<tr")&&(d="tbody"),0!==c.indexOf("<td")&&0!==c.indexOf("<th")||(d="tr"),0===c.indexOf("<tbody")&&(d="table"),0===c.indexOf("<option")&&(d="select"),l=document.createElement(d),l.innerHTML=c,r=0;r<l.childNodes.length;r++)i.push(l.childNodes[r])}else for(n||"#"!==a[0]||a.match(/[ .<>:~]/)?(n instanceof s&&(n=n[0]),o=(n||document).querySelectorAll(a)):o=[document.getElementById(a.split("#")[1])],r=0;r<o.length;r++)o[r]&&i.push(o[r])}else if(a.nodeType||a===window||a===document)i.push(a);else if(a.length>0&&a[0].nodeType)for(r=0;r<a.length;r++)i.push(a[r]);else t.isArray(a)&&(i=a);return new s(i)};return s.prototype={ready:function(e){return(document.attachEvent?"complete"==document.readyState:"loading"!=document.readyState)?e(o):document.addEventListener("DOMContentLoaded",function(){e(o)},!1),this},concat:W.concat,empty:function(){return this.each(function(){this.innerHTML=""})},map:function(e){return o(o.map(this,function(t,a){return e.call(t,a,t)}))},slice:function(){return o($.apply(this,arguments))},addClass:function(e){if("undefined"==typeof e)return this;for(var t=e.split(" "),a=0;a<t.length;a++)for(var n=0;n<this.length;n++)"undefined"!=typeof this[n].classList&&""!==t[a]&&this[n].classList.add(t[a]);return this},removeClass:function(e){if("undefined"==typeof e)return this;for(var t=e.split(" "),a=0;a<t.length;a++)for(var n=0;n<this.length;n++)"undefined"!=typeof this[n].classList&&""!==t[a]&&this[n].classList.remove(t[a]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=e.split(" "),a=0;a<t.length;a++)for(var n=0;n<this.length;n++)"undefined"!=typeof this[n].classList&&this[n].classList.toggle(t[a]);return this},closest:function(e,a){var n=this[0],s=!1;for(t(e)&&(s=o(e));n&&!(s?s.indexOf(n)>=0:o.matches(n,e));)n=n!==a&&n.nodeType!==n.DOCUMENT_NODE&&n.parentNode;return o(n)},attr:function e(t,a){var e;if(1!==arguments.length||"string"!=typeof t){for(var n=0;n<this.length;n++)if(2===arguments.length)this[n].setAttribute(t,a);else for(var s in t)this[n][s]=t[s],this[n].setAttribute(s,t[s]);return this}if(this.length)return e=this[0].getAttribute(t),e||""===e?e:void 0},removeAttr:function(e){for(var t=0;t<this.length;t++)this[t].removeAttribute(e);return this},prop:function(e,t){if(e=O[e]||e,1===arguments.length&&"string"==typeof e)return this[0]?this[0][e]:void 0;for(var a=0;a<this.length;a++)this[a][e]=t;return this},val:function(e){if("undefined"==typeof e)return this.length&&this[0].multiple?o.map(this.find("option:checked"),function(e){return e.value}):this[0]?this[0].value:void 0;if(this.length&&this[0].multiple)o.each(this[0].options,function(){this.selected=e.indexOf(this.value)!=-1});else for(var t=0;t<this.length;t++)this[t].value=e;return this},on:function(t,a,n,s){function i(e){var t,s,i=e.target;if(o(i).is(a))n.call(i,e);else for(s=o(i).parents(),t=0;t<s.length;t++)o(s[t]).is(a)&&n.call(s[t],e)}function r(e,t,a,n){var s=t.split(".");e.DomNameSpaces||(e.DomNameSpaces=[]),e.DomNameSpaces.push({namespace:s[1],event:s[0],listener:a,capture:n}),e.addEventListener(s[0],a,n)}var l,c,d=t.split(" ");for(l=0;l<this.length;l++)if(e(a)||a===!1)for(e(a)&&(s=n||!1,n=a),c=0;c<d.length;c++)d[c].indexOf(".")!=-1?r(this[l],d[c],n,s):this[l].addEventListener(d[c],n,s);else for(c=0;c<d.length;c++)this[l].DomLiveListeners||(this[l].DomLiveListeners=[]),this[l].DomLiveListeners.push({listener:n,liveListener:i}),d[c].indexOf(".")!=-1?r(this[l],d[c],i,s):this[l].addEventListener(d[c],i,s);return this},off:function(t,a,n,s){function i(e){var t,a,n,s=e.split("."),i=s[0],r=s[1];for(t=0;t<d.length;++t)if(d[t].DomNameSpaces){for(a=0;a<d[t].DomNameSpaces.length;++a)n=d[t].DomNameSpaces[a],n.namespace!=r||n.event!=i&&i||(d[t].removeEventListener(n.event,n.listener,n.capture),n.removed=!0);for(a=d[t].DomNameSpaces.length-1;a>=0;--a)d[t].DomNameSpaces[a].removed&&d[t].DomNameSpaces.splice(a,1)}}var r,o,l,c,d=this;for(r=t.split(" "),o=0;o<r.length;o++)for(l=0;l<this.length;l++)if(e(a)||a===!1)e(a)&&(s=n||!1,n=a),0===r[o].indexOf(".")?i(r[o].substr(1),n,s):this[l].removeEventListener(r[o],n,s);else{if(this[l].DomLiveListeners)for(c=0;c<this[l].DomLiveListeners.length;c++)this[l].DomLiveListeners[c].listener===n&&this[l].removeEventListener(r[o],this[l].DomLiveListeners[c].liveListener,s);this[l].DomNameSpaces&&this[l].DomNameSpaces.length&&r[o]&&i(r[o])}return this},trigger:function(e,t){for(var a=e.split(" "),n=0;n<a.length;n++)for(var s=0;s<this.length;s++){var i;try{i=new CustomEvent(a[n],{detail:t,bubbles:!0,cancelable:!0})}catch(e){i=document.createEvent("Event"),i.initEvent(a[n],!0,!0),i.detail=t}this[s].dispatchEvent(i)}return this},width:function(e){return void 0!==e?this.css("width",e):this[0]===window?window.innerWidth:this[0]===document?document.documentElement.scrollWidth:this.length>0?parseFloat(this.css("width")):null},height:function(e){if(void 0!==e)return this.css("height",e);if(this[0]===window)return window.innerHeight;if(this[0]===document){var t=document.body,a=document.documentElement;return Math.max(t.scrollHeight,t.offsetHeight,a.clientHeight,a.scrollHeight,a.offsetHeight)}return this.length>0?parseFloat(this.css("height")):null},innerWidth:function(){var e=this;if(this.length>0){if(this[0].innerWidth)return this[0].innerWidth;var t=this[0].offsetWidth,a=["left","right"];return a.forEach(function(a){t-=parseInt(e.css(n("border-"+a+"-width"))||0,10)}),t}},innerHeight:function(){var e=this;if(this.length>0){if(this[0].innerHeight)return this[0].innerHeight;var t=this[0].offsetHeight,a=["top","bottom"];return a.forEach(function(a){t-=parseInt(e.css(n("border-"+a+"-width"))||0,10)}),t}},offset:function(){if(this.length>0){var e=this[0],t=e.getBoundingClientRect(),a=document.documentElement;return{top:t.top+window.pageYOffset-a.clientTop,left:t.left+window.pageXOffset-a.clientLeft}}},hide:function(){for(var e=0;e<this.length;e++)this[e].style.display="none";return this},show:function(){for(var e=0;e<this.length;e++)"none"==this[e].style.display&&(this[e].style.display=""),"none"==getComputedStyle(this[e],"").getPropertyValue("display")&&(this[e].style.display="block");return this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},styles:function(){return this[0]?window.getComputedStyle(this[0],null):void 0},css:function e(t,a){var n,s,o=this[0],e="";if(arguments.length<2){if(!o)return;if("string"==typeof t)return o.style[t]||getComputedStyle(o,"").getPropertyValue(t)}if("string"==typeof t)a||0===a?e=i(t)+":"+r(t,a):this.each(function(){this.style.removeProperty(i(t))});else for(s in t)if(t[s]||0===t[s])e+=i(s)+":"+r(s,t[s])+";";else for(n=0;n<this.length;n++)this[n].style.removeProperty(i(s));return this.each(function(){this.style.cssText+=";"+e})},each:function(e){for(var t=0;t<this.length&&e.apply(this[t],[t,this[t]])!==!1;t++);return this},filter:function(t){for(var a=[],n=0;n<this.length;n++)e(t)?t.call(this[n],n,this[n])&&a.push(this[n]):o.matches(this[n],t)&&a.push(this[n]);return new s(a)},html:function(e){if("undefined"==typeof e)return this[0]?this[0].innerHTML:void 0;this.empty();for(var t=0;t<this.length;t++)this[t].innerHTML=e;return this},text:function(e){if("undefined"==typeof e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t++)this[t].textContent=e;return this},is:function(e){return this.length>0&&o.matches(this[0],e)},not:function(n){var s=[];if(e(n)&&void 0!==n.call)this.each(function(e){n.call(this,e)||s.push(this)});else{var i="string"==typeof n?this.filter(n):a(n)&&e(n.item)?$.call(n):o(n);t(i)&&(i=o.map(i,function(e){return e})),this.each(function(e,t){i.indexOf(t)<0&&s.push(t)})}return o(s)},indexOf:function(e){for(var t=0;t<this.length;t++)if(this[t]===e)return t},index:function(e){return e?this.indexOf(o(e)[0]):this.parent().children().indexOf(this[0])},get:function(e){return void 0===e?$.call(this):this[e>=0?e:e+this.length]},eq:function(e){if("undefined"==typeof e)return this;var t,a=this.length;return e>a-1?new s([]):e<0?(t=a+e,new s(t<0?[]:[this[t]])):new s([this[e]])},append:function(e){var t,a;for(t=0;t<this.length;t++)if("string"==typeof e){var n=document.createElement("div");for(n.innerHTML=e;n.firstChild;)this[t].appendChild(n.firstChild)}else if(e instanceof s)for(a=0;a<e.length;a++)this[t].appendChild(e[a]);else this[t].appendChild(e);return this},appendTo:function(e){return o(e).append(this),this},prepend:function(e){var t,a;for(t=0;t<this.length;t++)if("string"==typeof e){var n=document.createElement("div");for(n.innerHTML=e,a=n.childNodes.length-1;a>=0;a--)this[t].insertBefore(n.childNodes[a],this[t].childNodes[0])}else if(e instanceof s)for(a=0;a<e.length;a++)this[t].insertBefore(e[a],this[t].childNodes[0]);else this[t].insertBefore(e,this[t].childNodes[0]);return this},prependTo:function(e){return o(e).prepend(this),this},insertBefore:function(e){for(var t=o(e),a=0;a<this.length;a++)if(1===t.length)t[0].parentNode.insertBefore(this[a],t[0]);else if(t.length>1)for(var n=0;n<t.length;n++)t[n].parentNode.insertBefore(this[a].cloneNode(!0),t[n]);return this},insertAfter:function(e){for(var t=o(e),a=0;a<this.length;a++)if(1===t.length)t[0].parentNode.insertBefore(this[a],t[0].nextSibling);else if(t.length>1)for(var n=0;n<t.length;n++)t[n].parentNode.insertBefore(this[a].cloneNode(!0),t[n].nextSibling);return this},next:function(e){return new s(this.length>0?e?this[0].nextElementSibling&&o(this[0].nextElementSibling).is(e)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(e){var t=[],a=this[0];if(!a)return new s([]);for(;a.nextElementSibling;){var n=a.nextElementSibling;e?o(n).is(e)&&t.push(n):t.push(n),a=n}return new s(t)},prev:function(e){return new s(this.length>0?e?this[0].previousElementSibling&&o(this[0].previousElementSibling).is(e)?[this[0].previousElementSibling]:[]:this[0].previousElementSibling?[this[0].previousElementSibling]:[]:[])},prevAll:function(e){var t=[],a=this[0];if(!a)return new s([]);for(;a.previousElementSibling;){var n=a.previousElementSibling;e?o(n).is(e)&&t.push(n):t.push(n),a=n}return new s(t)},parent:function(e){for(var t=[],a=0;a<this.length;a++)null!==this[a].parentNode&&(e?o(this[a].parentNode).is(e)&&t.push(this[a].parentNode):t.push(this[a].parentNode));return o(o.unique(t))},parents:function e(t){for(var e=[],a=0;a<this.length;a++)for(var n=this[a].parentNode;n;)t?o(n).is(t)&&e.push(n):e.push(n),n=n.parentNode;return o(o.unique(e))},find:function(e){for(var t=[],a=0;a<this.length;a++)for(var n=this[a].querySelectorAll(e),i=0;i<n.length;i++)t.push(n[i]);return new s(t)},children:function e(t){for(var e=[],a=0;a<this.length;a++)for(var n=this[a].childNodes,i=0;i<n.length;i++)t?1===n[i].nodeType&&o(n[i]).is(t)&&e.push(n[i]):1===n[i].nodeType&&e.push(n[i]);return new s(o.unique(e))},remove:function(){for(var e=0;e<this.length;e++)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){var e,t,a=this;for(e=0;e<arguments.length;e++){var n=o(arguments[e]);for(t=0;t<n.length;t++)a[a.length]=n[t],a.length++}return a},before:function(e){return o(e).insertBefore(this),this},after:function(e){return o(e).insertAfter(this),this},scrollTop:function(e){if(this.length){var t="scrollTop"in this[0];return void 0===e?t?this[0].scrollTop:this[0].pageYOffset:this.each(t?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var t="scrollLeft"in this[0];return void 0===e?t?this[0].scrollLeft:this[0].pageXOffset:this.each(t?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},contents:function(){return this.map(function(e,t){return $.call(t.childNodes)})},nextUntil:function(e){for(var t=this,a=[];t.length&&!t.filter(e).length;)a.push(t[0]),t=t.next();return o(a)},prevUntil:function(e){for(var t=this,a=[];t.length&&!o(t).filter(e).length;)a.push(t[0]),t=t.prev();return o(a)},detach:function(){return this.remove()}},o.fn=s.prototype,o}(),q=I;L.$=I,q.inArray=function(e,t,a){return W.indexOf.call(t,e,a)},q.extend=function(e){var t,a=$.call(arguments,1);return"boolean"==typeof e&&(t=e,e=a.shift()),e=e||{},a.forEach(function(a){s(e,a,t)}),e},q.isFunction=e,q.isArray=function(e){return"[object Array]"===Object.prototype.toString.apply(e)},q.isPlainObject=function(e){return t(e)&&null!==e&&e!==e.window&&Object.getPrototypeOf(e)==Object.prototype},q.each=function(e,a){var n,s;if(t(e)&&a){if(q.isArray(e)||e instanceof I)for(n=0;n<e.length&&a.call(e[n],n,e[n])!==!1;n++);else for(s in e)if(e.hasOwnProperty(s)&&"length"!==s&&a.call(e[s],s,e[s])===!1)break;return this}},q.unique=function(e){for(var t=[],a=0;a<e.length;a++)t.indexOf(e[a])===-1&&t.push(e[a]);return t},q.map=function(e,t){var n,s,i,r=[];if(a(e))for(s=0;s<e.length;s++)n=t(e[s],s),null!==n&&r.push(n);else for(i in e)n=t(e[i],i),null!==n&&r.push(n);return r.length>0?q.fn.concat.apply([],r):r},q.matches=function(e,t){if(!t||!e||1!==e.nodeType)return!1;var a=e.matchesSelector||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;return a.call(e,t)};var R,z,X,B,j=[],U="undefined"!=typeof window,G=U?navigator.userAgent:"",Z=G.match(/Android|iPhone|iPad|iPod|Windows Phone|Windows|MSIE/i),J=U&&window.requestAnimationFrame||function(e){e()},K=U&&window.cancelAnimationFrame||function(){};/Android/i.test(Z)?(R="android",z=G.match(/Android\s+([\d\.]+)/i),z&&(j=z[0].replace("Android ","").split("."))):/iPhone|iPad|iPod/i.test(Z)?(R="ios",z=G.match(/OS\s+([\d\_]+)/i),z&&(j=z[0].replace(/_/g,".").replace("OS ","").split("."))):/Windows Phone/i.test(Z)?R="wp":/Windows|MSIE/i.test(Z)&&(R="windows"),X=j[0],B=j[1];var Q=0,ee=void 0;U&&(["mouseover","mousedown","mouseup","click"].forEach(function(e){document.addEventListener(e,g,!0)}),"android"==R&&X<5&&document.addEventListener("change",function(e){Q&&"checkbox"==e.target.type&&!e.target.mbscChange&&(e.stopPropagation(),e.preventDefault()),delete e.target.mbscChange},!0));var te,ae=L.$,ne=+new Date,se={},ie={},re={xsmall:0,small:576,medium:768,large:992,xlarge:1200},oe=ae.extend;oe(H,{getCoord:b,preventClick:p,vibrate:f}),te=oe(L,{$:ae,version:"4.3.2",autoTheme:"mobiscroll",themes:{form:{},page:{},frame:{},scroller:{},listview:{},navigation:{},progress:{},card:{}},platform:{name:R,majorVersion:X,minorVersion:B},i18n:{},instances:se,classes:ie,util:H,settings:{},setDefaults:function(e){oe(this.settings,e)},customTheme:function(e,t){var a,n=L.themes,s=["frame","scroller","listview","navigation","form","page","progress","card"];for(a=0;a<s.length;a++)n[s[a]][e]=oe({},n[s[a]][t],{baseTheme:t})}});var le=function(e,t){function a(e){var t,a;return c.responsive&&(a=e||s.offsetWidth,ae.each(c.responsive,function(e,n){a>=(n.breakpoint||re[e])&&(t=n)})),t}function n(){ae(e).addClass("mbsc-comp"),e.id?se[e.id]&&se[e.id].destroy():e.id="mobiscroll"+ ++ne,se[e.id]=f,f.__ready=!0}var s,i,r,o,c,d,u,h,m,f=this;f.settings={},f.element=e,f._init=l,f._destroy=l,f._processSettings=l,f._checkResp=function(e){if(f._responsive&&o!==a(e))return f.init({}),!0},f.init=function(n){var l,p;n&&f.getVal&&(p=f.getVal());for(l in f.settings)delete f.settings[l];c=f.settings,oe(t,n),f._hasDef&&(m=te.settings),oe(c,f._defaults,m,t),f._hasTheme&&(u=c.theme,"auto"!=u&&u||(u=te.autoTheme),"default"==u&&(u="mobiscroll"),t.theme=u,d=te.themes[f._class]?te.themes[f._class][u]:{}),f._hasLang&&(i=te.i18n[c.lang]),oe(c,d,i,m,t),s=ae(c.context)[0],f._responsive&&(o=a(),oe(c,o)),f._processSettings(o||{}),f._presets&&(r=f._presets[c.preset],r&&(r=r.call(e,f,t),oe(c,r,t,o))),f._init(n),n&&f.setVal&&f.setVal(p,!0),h("onInit")},f.destroy=function(){f&&(f._destroy(),h("onDestroy"),delete se[e.id],f=null)},f.tap=function(e,t,a,n,s){v(f,e,t,a,n,s)},f.trigger=function(a,n){var s,i,o,l=[m,d,r,t];for(i=0;i<4;i++)o=l[i],o&&o[a]&&(s=o[a].call(e,n||{},f));return s},f.option=function(e,a){var n={},s=["data","invalid","valid","marked","labels","colors","readonly"];"object"===("undefined"==typeof e?"undefined":P(e))?n=e:n[e]=a,s.forEach(function(e){t[e]=c[e]}),f.init(n)},f.getInst=function(){return f},t=t||{},h=f.trigger,f.__ready||n()},ce=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?((Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,de=/^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,ue=/^\d{1,2}(\/\d{1,2})?$/,he=/^w\d$/i,me={shortYearCutoff:"+10",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["S","M","T","W","T","F","S"],amText:"am",pmText:"pm",getYear:function(e){return e.getFullYear()},getMonth:function(e){return e.getMonth()},getDay:function(e){return e.getDate()},getDate:y,getMaxDayOfMonth:function(e,t){return 32-new Date(e,t,32,12).getDate()},getWeekNumber:function(e){e=new Date(e),e.setHours(0,0,0),e.setDate(e.getDate()+4-(e.getDay()||7));var t=new Date(e.getFullYear(),0,1);return Math.ceil(((e-t)/864e5+1)/7)}};H.datetime={formatDate:x,parseDate:w};var fe,pe,be,ve,ge,ye,xe={};U&&(pe=document.createElement("modernizr").style,be=S(),ye=be.replace(/^\-/,"").replace(/\-$/,"").replace("moz","Moz"),fe=void 0!==pe.animation?"animationend":"webkitAnimationEnd",ve=void 0!==pe.touchAction,ge=void 0!==pe.transition);var we,Te,_e=L.themes,De=/(iphone|ipod)/i.test(G)&&X>=7,Me="android"==R,Ce="ios"==R,ke=Ce&&8==X,Se=Ce&&X>7,Ve=function(e){e.preventDefault()},Ye="input,select,textarea,button",Ne=Ye+',[tabindex="0"]',Ae=function(e,t,a){function n(e){Y&&Y.removeClass("mbsc-active"),Y=ae(this),Y.hasClass("mbsc-disabled")||Y.hasClass("mbsc-fr-btn-nhl")||Y.addClass("mbsc-active"),"mousedown"===e.type?ae(document).on("mouseup",s):"pointerdown"===e.type&&ae(document).on("pointerup",s)}function s(e){Y&&(Y.removeClass("mbsc-active"),Y=null),"mouseup"===e.type?ae(document).off("mouseup",s):"pointerup"===e.type&&ae(document).off("pointerup",s)}function i(e){13==e.keyCode?te.select():27==e.keyCode&&te.cancel()}function r(e){e||Me||!te._activeElm||te._activeElm.focus()}function o(e){var t=we,a=j.focusOnClose;te._markupRemove(),_.remove(),H&&(N.mbscModals--,j.scrollLock&&N.mbscLock--,N.mbscLock||T.removeClass("mbsc-fr-lock"),N.mbscModals||(T.removeClass("mbsc-fr-lock-ios mbsc-fr-lock-ctx"),q&&(x.css({top:"",left:""}),k.scrollLeft(U),k.scrollTop(Z)),e||(t||(t=ne),setTimeout(function(){void 0===a||a===!0?(Te=!0,t[0].focus()):a&&ae(a)[0].focus()},200)))),P=!1,K("onHide")}function c(e){clearTimeout(X),X=setTimeout(function(){te.position(!0),"orientationchange"==e.type&&(z.style.display="none",z.offsetHeight,z.style.display="")},200)}function d(e){e.target.nodeType&&!R.contains(e.target)&&re-new Date>100&&(R.focus(),re=new Date)}function m(e,t){function a(){_.off(fe,a).removeClass("mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-"+A).find(".mbsc-fr-popup").removeClass("mbsc-anim-"+A),r(t)}if(H)_.appendTo(x);else if(ne.is("div")&&!te._hasContent)ne.empty().append(_);else if(ne.hasClass("mbsc-control")){var i=ne.closest(".mbsc-control-w");_.insertAfter(i),i.hasClass("mbsc-select")&&i.addClass("mbsc-select-inline")}else _.insertAfter(ne);P=!0,te._markupInserted(_),K("onMarkupInserted",{target:O}),_.on("mousedown",".mbsc-btn-e,.mbsc-fr-btn-e",Ve).on("touchstart mousedown",function(e){j.stopProp&&e.stopPropagation()}).on("keydown",".mbsc-fr-btn-e",function(e){32==e.keyCode&&(e.preventDefault(),e.stopPropagation(),this.click())}).on("keydown",function(e){if(32==e.keyCode)e.preventDefault();else if(9==e.keyCode&&H&&j.focusTrap){var t=_.find(Ne).filter(function(){return this.offsetWidth>0||this.offsetHeight>0}),a=t.index(ae(":focus",_)),n=t.length-1,s=0;e.shiftKey&&(n=0,s=-1),a===n&&(t.eq(s)[0].focus(),e.preventDefault())}}).on("touchstart mousedown pointerdown",".mbsc-fr-btn-e",n).on("touchend",".mbsc-fr-btn-e",s),C.on("keydown",Ye,function(e){32!=e.keyCode&&13!=e.keyCode||e.stopPropagation()}),O.addEventListener("touchstart",function(){J||(J=!0,x.find(".mbsc-no-touch").removeClass("mbsc-no-touch"))},!0),ae.each(V,function(e,t){te.tap(ae(".mbsc-fr-btn"+e,_),function(e){t=u(t)?te.buttons[t]:t,(u(t.handler)?te.handlers[t.handler]:t.handler).call(this,e,te)},!0)}),te._attachEvents(_),te.position()!==!1&&(k.on(B,c),H&&(A&&!e?_.addClass("mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-"+A).on(fe,a).find(".mbsc-fr-popup").addClass("mbsc-anim-"+A):r(t)),K("onShow",{target:O,valueText:te._tempValue}))}function f(e,t){e&&e(),te.show()!==!1&&(we=t)}function v(){te._fillValue(),K("onSet",{valueText:te._value})}function g(){K("onCancel",{valueText:te._value})}function y(){te.setVal(null,!0)}var x,w,T,_,D,M,C,k,S,V,Y,N,A,E,H,P,F,O,W,$,I,q,R,z,X,B,j,U,G,Z,J,K,Q,ee,te=this,ne=ae(e),ie=[],re=new Date;le.call(this,e,t,!0),te.position=function(e){var t,a,n,s,i,r,o,l,c,d,u,m,f,p,b,v,g,y={},w=0,T=0,D=0,V=0;if(!P)return!1;if(f=O.offsetHeight,p=O.offsetWidth,Q!==p||ee!==f||!e){if(te._checkResp(p))return!1;te._isFullScreen||/top|bottom/.test(j.display)?C.width(p):H&&S.width(""),te._position(_),ae(".mbsc-comp",_).each(function(){var e=se[this.id];e&&e!==te&&e.position&&e.position()}),!te._isFullScreen&&/center|bubble/.test(j.display)&&(ae(".mbsc-w-p",_).each(function(){b=this.getBoundingClientRect().width,V+=b,D=b>D?b:D}),m=V>p-16||j.tabs===!0,S.css({width:te._isLiquid?Math.min(j.maxPopupWidth,p-16):Math.ceil(m?D:V),"white-space":m?"":"nowrap"})),K("onPosition",{target:O,popup:z,hasTabs:m,windowWidth:p,windowHeight:f})!==!1&&H&&(I&&(w=k.scrollLeft(),T=k.scrollTop(),Q&&M.css({width:"",height:""})),W=z.offsetWidth,$=z.offsetHeight,G=$<=f&&W<=p,"center"==j.display?(g=Math.max(0,w+(p-W)/2),v=Math.max(0,T+(f-$)/2)):"bubble"==j.display?(t=void 0===j.anchor?ne:ae(j.anchor),o=ae(".mbsc-fr-arr-i",_)[0],s=t.offset(),i=s.top+(E?T-x.offset().top:0),r=s.left+(E?w-x.offset().left:0),a=t[0].offsetWidth,n=t[0].offsetHeight,l=o.offsetWidth,c=o.offsetHeight,g=h(r-(W-a)/2,w+3,w+p-W-3),v=i+n+c/2,v+$+8>T+f&&i-$-c/2>T?(C.removeClass("mbsc-fr-bubble-bottom").addClass("mbsc-fr-bubble-top"),v=i-$-c/2):C.removeClass("mbsc-fr-bubble-top").addClass("mbsc-fr-bubble-bottom"),ae(".mbsc-fr-arr",_).css({left:h(r+a/2-(g+(W-l)/2),0,l)}),G=v>T&&g>w&&v+$<=T+f&&g+W<=w+p):(g=w,v="top"==j.display?T:Math.max(0,T+f-$)),I&&(d=Math.max(v+$,E?N.scrollHeight:ae(document).height()),u=Math.max(g+W,E?N.scrollWidth:ae(document).width()),M.css({width:u,height:d}),j.scroll&&"bubble"==j.display&&(v+$+8>T+f||i>T+f||i+n<T)&&k.scrollTop(Math.min(i,v+$-f+8,d-f))),y.top=Math.floor(v),y.left=Math.floor(g),C.css(y),_.removeClass("mbsc-fr-pos"),Q=p,ee=f)}},te.attachShow=function(e,t){var a,n=ae(e),s=n.prop("readonly");"inline"!==j.display&&((j.showOnFocus||j.showOnTap)&&n.is("input,select")&&(n.prop("readonly",!0).on("mousedown.mbsc",function(e){e.preventDefault()}).on("focus.mbsc",function(){te._isVisible&&this.blur()}),a=ae('label[for="'+n.attr("id")+'"]'),
a.length||(a=n.closest("label"))),n.is("select")||(j.showOnFocus&&n.on("focus.mbsc",function(){Te?Te=!1:f(t,n)}),j.showOnTap&&(n.on("keydown.mbsc",function(e){32!=e.keyCode&&13!=e.keyCode||(e.preventDefault(),e.stopPropagation(),f(t,n))}),te.tap(n,function(e){e.isMbscTap&&(J=!0),f(t,n)}),a&&a.length&&te.tap(a,function(e){e.target!==n[0]&&f(t,n)}))),ie.push({readOnly:s,el:n,lbl:a}))},te.select=function(){H?te.hide(!1,"set",!1,v):v()},te.cancel=function(){H?te.hide(!1,"cancel",!1,g):g()},te.clear=function(){te._clearValue(),K("onClear"),H&&te._isVisible&&!te.live?te.hide(!1,"clear",!1,y):y()},te.enable=function(){j.disabled=!1,ae.each(ie,function(e,t){t.el.is("input,select")&&(t.el[0].disabled=!1)})},te.disable=function(){j.disabled=!0,ae.each(ie,function(e,t){t.el.is("input,select")&&(t.el[0].disabled=!0)})},te.show=function(e,t){var a,n;if(!j.disabled&&!te._isVisible){if(te._readValue(),K("onBeforeShow")===!1)return!1;if(we=null,A=j.animate,V=j.buttons||[],I=E||"bubble"==j.display,q=De&&!I&&j.scrollLock,a=V.length>0,A!==!1&&("top"==j.display?A=A||"slidedown":"bottom"==j.display?A=A||"slideup":"center"!=j.display&&"bubble"!=j.display||(A=A||"pop")),H&&(Z=Math.max(0,k.scrollTop()),U=Math.max(0,k.scrollLeft()),Q=0,ee=0,q&&!T.hasClass("mbsc-fr-lock-ios")&&x.css({top:-Z+"px",left:-U+"px"}),T.addClass((j.scrollLock?"mbsc-fr-lock":"")+(q?" mbsc-fr-lock-ios":"")+(E?" mbsc-fr-lock-ctx":"")),ae(document.activeElement).is("input,textarea")&&document.activeElement.blur(),L.activeInstance&&L.activeInstance.hide(),L.activeInstance=te,N.mbscModals=N.mbscModals||0,N.mbscLock=N.mbscLock||0,N.mbscModals++,j.scrollLock&&N.mbscLock++),n='<div lang="'+j.lang+'" class="mbsc-fr mbsc-'+j.theme+(j.baseTheme?" mbsc-"+j.baseTheme:"")+" mbsc-fr-"+j.display+" "+(j.cssClass||"")+" "+(j.compClass||"")+(te._isLiquid?" mbsc-fr-liq":"")+(H?" mbsc-fr-pos":"")+(F?" mbsc-fr-pointer":"")+(Se?" mbsc-fr-hb":"")+(J?"":" mbsc-no-touch")+(q?" mbsc-platform-ios":"")+(a?V.length>=3?" mbsc-fr-btn-block ":"":" mbsc-fr-nobtn")+'">'+(H?'<div class="mbsc-fr-persp"><div class="mbsc-fr-overlay"></div><div role="dialog" class="mbsc-fr-scroll">':"")+'<div class="mbsc-fr-popup'+(j.rtl?" mbsc-rtl":" mbsc-ltr")+(j.headerText?" mbsc-fr-has-hdr":"")+'">'+("bubble"===j.display?'<div class="mbsc-fr-arr-w"><div class="mbsc-fr-arr-i"><div class="mbsc-fr-arr"></div></div></div>':"")+(H?'<div class="mbsc-fr-focus" tabindex="-1"></div>':"")+'<div class="mbsc-fr-w">'+(j.headerText?'<div class="mbsc-fr-hdr">'+(u(j.headerText)?j.headerText:"")+"</div>":"")+'<div class="mbsc-fr-c">',n+=te._generateContent(),n+="</div>",a){var s,r,o,l=V.length;for(n+='<div class="mbsc-fr-btn-cont">',r=0;r<V.length;r++)o=j.btnReverse?l-r-1:r,s=V[o],s=u(s)?te.buttons[s]:s,"set"===s.handler&&(s.parentClass="mbsc-fr-btn-s"),"cancel"===s.handler&&(s.parentClass="mbsc-fr-btn-c"),n+="<div"+(j.btnWidth?' style="width:'+100/V.length+'%"':"")+' class="mbsc-fr-btn-w '+(s.parentClass||"")+'"><div tabindex="0" role="button" class="mbsc-fr-btn'+o+" mbsc-fr-btn-e "+(void 0===s.cssClass?j.btnClass:s.cssClass)+(s.icon?" mbsc-ic mbsc-ic-"+s.icon:"")+'">'+(s.text||"")+"</div></div>";n+="</div>"}if(n+="</div></div></div></div>"+(H?"</div></div>":""),_=ae(n),M=ae(".mbsc-fr-persp",_),D=ae(".mbsc-fr-scroll",_),S=ae(".mbsc-fr-w",_),C=ae(".mbsc-fr-popup",_),w=ae(".mbsc-fr-hdr",_),O=_[0],R=D[0],z=C[0],te._activeElm=ae(".mbsc-fr-focus",_)[0],te._markup=_,te._isVisible=!0,te.markup=O,B="orientationchange resize",te._markupReady(_),K("onMarkupReady",{target:O}),H&&(ae(window).on("keydown",i),j.scrollLock&&_.on("touchmove mousewheel wheel",function(e){G&&e.preventDefault()}),j.focusTrap&&k.on("focusin",d),j.closeOnOverlayTap)){var c,h,f,v;D.on("touchstart mousedown",function(e){h||e.target!=R||(h=!0,c=!1,f=b(e,"X"),v=b(e,"Y"))}).on("touchmove mousemove",function(e){h&&!c&&(Math.abs(b(e,"X")-f)>9||Math.abs(b(e,"Y")-v)>9)&&(c=!0)}).on("touchcancel",function(){h=!1}).on("touchend click",function(e){h&&!c&&(te.cancel(),"touchend"==e.type&&p()),h=!1})}H&&q?setTimeout(function(){m(e,t)},100):m(e,t)}},te.hide=function(e,t,a,n){function s(){_.off(fe,s),o(e)}return!(!te._isVisible||!a&&!te._isValid&&"set"==t||!a&&K("onBeforeClose",{valueText:te._tempValue,button:t})===!1)&&(te._isVisible=!1,H&&(ae(document.activeElement).is("input,textarea")&&z.contains(document.activeElement)&&document.activeElement.blur(),L.activeInstance==te&&delete L.activeInstance,ae(window).off("keydown",i)),_&&(H&&A&&!e?_.addClass("mbsc-anim-out mbsc-anim-trans mbsc-anim-trans-"+A).on(fe,s).find(".mbsc-fr-popup").addClass("mbsc-anim-"+A):o(e),te._detachEvents(_),k.off(B,c).off("focusin",d)),n&&n(),ne.trigger("blur"),void K("onClose",{valueText:te._value}))},te.isVisible=function(){return te._isVisible},te.setVal=l,te.getVal=l,te._generateContent=l,te._attachEvents=l,te._detachEvents=l,te._readValue=l,te._clearValue=l,te._fillValue=l,te._markupReady=l,te._markupInserted=l,te._markupRemove=l,te._position=l,te.__processSettings=l,te.__init=l,te.__destroy=l,te._destroy=function(){te.hide(!0,!1,!0),ne.off(".mbsc"),ae.each(ie,function(e,t){t.el.off(".mbsc").prop("readonly",t.readOnly),t.lbl&&t.lbl.off(".mbsc")}),te.__destroy()},te._updateHeader=function(){var t=j.headerText,a=t?"function"==typeof t?t.call(e,te._tempValue):t.replace(/\{value\}/i,te._tempValue):"";w.html(a||"&nbsp;")},te._processSettings=function(e){var a,n;for(te.__processSettings(e),F=!j.touchUi,F&&(j.display=e.display||t.display||"bubble",j.buttons=e.buttons||t.buttons||[]),j.buttons=j.buttons||("inline"!==j.display?["cancel","set"]:[]),j.headerText=void 0===j.headerText?"inline"!==j.display&&"{value}":j.headerText,V=j.buttons||[],H="inline"!==j.display,E="body"!=j.context,x=ae(j.context),T=E?x:ae("body,html"),N=x[0],te._$window=k=ae(E?j.context:window),te.live=!0,n=0;n<V.length;n++)a=V[n],"ok"!=a&&"set"!=a&&"set"!=a.handler||(te.live=!1);te.buttons.set={text:j.setText,icon:j.setIcon,handler:"set"},te.buttons.cancel={text:j.cancelText,icon:j.cancelIcon,handler:"cancel"},te.buttons.close={text:j.closeText,icon:j.closeIcon,handler:"cancel"},te.buttons.clear={text:j.clearText,icon:j.clearIcon,handler:"clear"},te._isInput=ne.is("input")},te._init=function(e){var t=te._isVisible,a=t&&!_.hasClass("mbsc-fr-pos");t&&te.hide(!0,!1,!0),ne.off(".mbsc"),te.__init(e),te._isLiquid="liquid"==j.layout,H?(te._readValue(),te._hasContent||j.skipShow||te.attachShow(ne),t&&te.show(a)):te.show(),ne.removeClass("mbsc-cloak").filter("input, select, textarea").on("change.mbsc",function(){te._preventChange||te.setVal(ne.val(),!0,!1),te._preventChange=!1})},te.buttons={},te.handlers={set:te.select,cancel:te.cancel,clear:te.clear},te._value=null,te._isValid=!0,te._isVisible=!1,j=te.settings,K=te.trigger,a||te.init()};Ae.prototype._defaults={lang:"en",setText:"Set",selectedText:"{count} selected",closeText:"Close",cancelText:"Cancel",clearText:"Clear",context:"body",maxPopupWidth:600,disabled:!1,closeOnOverlayTap:!0,showOnFocus:Me||Ce,showOnTap:!0,display:"center",scroll:!0,scrollLock:!0,tap:!0,touchUi:!0,btnClass:"mbsc-fr-btn",btnWidth:!0,focusTrap:!0,focusOnClose:!ke},ie.Frame=Ae,_e.frame.mobiscroll={headerText:!1,btnWidth:!1},_e.scroller.mobiscroll=oe({},_e.frame.mobiscroll,{rows:5,showLabel:!1,selectedLineBorder:1,weekDays:"min",checkIcon:"ion-ios7-checkmark-empty",btnPlusClass:"mbsc-ic mbsc-ic-arrow-down5",btnMinusClass:"mbsc-ic mbsc-ic-arrow-up5",btnCalPrevClass:"mbsc-ic mbsc-ic-arrow-left5",btnCalNextClass:"mbsc-ic mbsc-ic-arrow-right5"}),U&&ae(window).on("focus",function(){we&&(Te=!0)});/* eslint-disable no-unused-vars */
var Ee="ios"==R,Le=function(e,t,a){function n(e){me("onStart",{domEvent:e}),we.stopProp&&e.stopPropagation(),we.prevDef&&e.preventDefault(),we.readonly||we.lock&&I||V(e,this)&&!$&&(y&&y.removeClass("mbsc-active"),H=!1,I||(y=ae(e.target).closest(".mbsc-btn-e",this),y.length&&!y.hasClass("mbsc-disabled")&&(H=!0,T=setTimeout(function(){y.addClass("mbsc-active")},100))),$=!0,G=!1,q=!1,ve.scrolled=I,re=b(e,"X"),oe=b(e,"Y"),A=re,D=0,M=0,C=0,ie=new Date,se=+Y(de,fe)||0,I&&g(se,Ee?0:1),"mousedown"===e.type&&ae(document).on("mousemove",s).on("mouseup",r))}function s(e){$&&(we.stopProp&&e.stopPropagation(),A=b(e,"X"),E=b(e,"Y"),D=A-re,M=E-oe,C=fe?M:D,H&&(Math.abs(M)>we.thresholdY||Math.abs(D)>we.thresholdX)&&(clearTimeout(T),y.removeClass("mbsc-active"),H=!1),(ve.scrolled||!q&&Math.abs(C)>he)&&(G||me("onGestureStart",L),ve.scrolled=G=!0,z||(z=!0,R=J(i))),fe||we.scrollLock?e.preventDefault():ve.scrolled?e.preventDefault():Math.abs(M)>7&&(q=!0,ve.scrolled=!0,Te.trigger("touchend")))}function i(){O&&(C=h(C,-te*O,te*O)),g(h(se+C,W-N,F+N)),z=!1}function r(e){if($){var t,a=new Date-ie;we.stopProp&&e.stopPropagation(),K(R),z=!1,!q&&ve.scrolled&&(we.momentum&&a<300&&(t=C/a,C=Math.max(Math.abs(C),t*t/we.speedUnit)*(C<0?-1:1)),v(C)),H&&(clearTimeout(T),y.addClass("mbsc-active"),setTimeout(function(){y.removeClass("mbsc-active")},100),q||ve.scrolled||me("onBtnTap",{target:y[0],domEvent:e})),"mouseup"==e.type&&ae(document).off("mousemove",s).off("mouseup",r),$=!1}}function o(e){if(e=e.originalEvent||e,C=fe?void 0==e.deltaY?e.wheelDelta||e.detail:e.deltaY:e.deltaX,me("onStart",{domEvent:e}),we.stopProp&&e.stopPropagation(),C){if(e.preventDefault(),e.deltaMode&&1==e.deltaMode&&(C*=15),C=h(-C,-Q,Q),se=pe,we.readonly)return;if(G||p(),se+C<W&&(se=W,C=0),se+C>F&&(se=F,C=0),z||(z=!0,R=J(i)),!C&&G)return;G=!0,clearTimeout(Z),Z=setTimeout(function(){K(R),z=!1,G=!1,v(C)},200)}}function l(e){me("onStart",{domEvent:e}),we.readonly||(e.stopPropagation(),se=pe,G=!1,e.target==X?(oe=b(e,"Y",!0),ae(document).on("mousemove",c).on("mouseup",m)):(oe=x.offset().top,c(e),m()))}function c(e){var t=(b(e,"Y",!0)-oe)/_;P?(C=-(O*te*2+_)*t,C=h(C,-te*O,te*O)):C=(W-F-_)*t,G||p(),G=!0,g(h(se+C,W-N,F+N))}function m(){se=pe,v(0),ae(document).off("mousemove",c).off("mouseup",m)}function f(e){e.stopPropagation()}function p(){L={posX:fe?0:pe,posY:fe?pe:0,originX:fe?0:se,originY:fe?se:0,direction:C>0?fe?270:360:fe?90:180},me("onGestureStart",L)}function v(e){var t,a,n;if(O&&(e=h(e,-te*O,te*O)),n=h(Math.round((se+e)/te)*te,W,F),ne){if(e<0){for(t=ne.length-1;t>=0;t--)if(Math.abs(n)+_>=ne[t].breakpoint){ge=t,xe=2,n=ne[t].snap2;break}}else if(e>=0)for(t=0;t<ne.length;t++)if(Math.abs(n)<=ne[t].breakpoint){ge=t,xe=1,n=ne[t].snap1;break}n=h(n,W,F)}a=we.time||(pe<W||pe>F?1e3:Math.max(1e3,Math.abs(n-pe)*we.timeUnit)),L.destinationX=fe?0:n,L.destinationY=fe?n:0,L.duration=a,L.transitionTiming=S,me("onGestureEnd",L),ve.scroll(n,a)}function g(e,t,a,n){var s,i=e!=pe,r=t>1,o=t?be+"transform "+Math.round(t)+"ms "+S:"",l=function(){clearInterval(ee),clearTimeout(ue),I=!1,pe=e,L.posX=fe?0:e,L.posY=fe?e:0,i&&me("onMove",L),r&&me("onAnimationEnd",L),n&&n()};L={posX:fe?0:pe,posY:fe?pe:0,originX:fe?0:se,originY:fe?se:0,direction:e-pe>0?fe?270:360:fe?90:180},pe=e,r&&(L.destinationX=fe?0:e,L.destinationY=fe?e:0,L.duration=t,L.transitionTiming=S,me("onAnimationStart",L)),ce[ye+"Transition"]=o,ce[ye+"Transform"]="translate3d("+(fe?"0,"+e+"px,":e+"px,0,")+"0)",X&&B&&(s=P?(j-e)/(O*te*2):(e-F)/(W-F),X.style[ye+"Transition"]=o,X.style[ye+"Transform"]="translate3d(0,"+Math.max(0,Math.min((_-B)*s,_-B))+"px,0)"),!i&&!I||!t||t<=1?l():t&&(I=!a,clearInterval(ee),ee=setInterval(function(){var t=+Y(de,fe)||0;L.posX=fe?0:t,L.posY=fe?t:0,me("onMove",L),Math.abs(t-e)<2&&l()},100),clearTimeout(ue),ue=setTimeout(function(){l()},t)),we.sync&&we.sync(e,t,S)}var y,x,w,T,_,D,M,C,k,S,N,A,E,L,H,P,F,O,W,$,I,q,R,z,X,B,j,U,G,Z,Q,ee,te,ne,se,ie,re,oe,ce,de,ue,he,me,fe,pe,ve=this,ge=0,xe=1,we=t,Te=ae(e);le.call(this,e,t,!0),ve.scrolled=!1,ve.scroll=function(t,a,n,s){t=d(t)?Math.round(t/te)*te:Math.ceil((ae(t,e).length?Math.round(de.offset()[k]-ae(t,e).offset()[k]):pe)/te)*te,t=h(t,W,F),ge=Math.round(t/te),se=pe,j=O*te+t,g(t,a,n,s)},ve.refresh=function(e){var t;for(_=void 0===we.contSize?fe?Te.height():Te.width():we.contSize,F=void 0===we.maxScroll?0:we.maxScroll,W=Math.min(F,void 0===we.minScroll?Math.min(0,fe?_-de.height():_-de.width()):we.minScroll),ne=null,!fe&&we.rtl&&(t=F,F=-W,W=-t),u(we.snap)&&(ne=[],de.find(we.snap).each(function(){var e=fe?this.offsetTop:this.offsetLeft,t=fe?this.offsetHeight:this.offsetWidth;ne.push({breakpoint:e+t/2,snap1:-e,snap2:_-e-t})})),te=d(we.snap)?we.snap:1,O=we.snap?we.maxSnapScroll:0,S=we.easing,N=we.elastic?d(we.snap)?te:d(we.elastic)?we.elastic:0:0,Q=te;Q>44;)Q/=2;Q=Math.round(44/Q)*Q,X&&(P=W==-(1/0)||F==1/0,B=W<F?Math.max(20,_*_/(F-W+_)):0,X.style.height=B+"px",U.style.height=B?"":0),void 0===pe&&(pe=we.initialPos,ge=Math.round(pe/te)),e||ve.scroll(we.snap?ne?ne[ge]["snap"+xe]:ge*te:pe)},ve._processSettings=function(){fe="Y"==we.axis,k=fe?"top":"left",de=we.moveElement||Te.children().eq(0),ce=de[0].style,he=fe?we.thresholdY:we.thresholdX,we.scrollbar&&(w=we.scrollbar,x=w.find(".mbsc-sc-bar"),X=x[0],U=w[0])},ve._init=function(){ve.refresh(),Te.on("touchstart mousedown",n).on("touchmove",s).on("touchend touchcancel",r),we.mousewheel&&Te.on("wheel mousewheel",o),X&&w.on("mousedown",l).on("click",f),e.addEventListener&&e.addEventListener("click",function(e){ve.scrolled&&(ve.scrolled=!1,e.stopPropagation(),e.preventDefault())},!0)},ve._destroy=function(){clearInterval(ee),Te.off("touchstart mousedown",n).off("touchmove",s).off("touchend touchcancel",r).off("wheel mousewheel",o),X&&w.off("mousedown",l).off("click",f)},we=ve.settings,me=ve.trigger,a||ve.init()};Le.prototype={_defaults:{speedUnit:.0022,timeUnit:3,initialPos:0,axis:"Y",thresholdX:10,thresholdY:5,easing:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",stopProp:!0,momentum:!0,mousewheel:!0,elastic:!0}};/* eslint-disable no-unused-vars */
var He={},Pe=U?window.CSS:null,Fe=Pe&&Pe.supports&&Pe.supports("(transform-style: preserve-3d)"),Oe=!Fe||"wp"==R||"android"==R,We=function(e,t,a){function n(e){var t,a,n=+ae(this).attr("data-index");38==e.keyCode?(t=!0,a=-1):40==e.keyCode?(t=!0,a=1):32==e.keyCode&&(t=!0,i(n,q[n]._$markup.find('.mbsc-sc-itm[data-val="'+E[n]+'"]'))),t&&(e.stopPropagation(),e.preventDefault(),a&&N.start(n,a))}function s(){N.stop()}function i(e,t){var a=q[e],n=+t.attr("data-index"),s=p(a,n),i=B._tempSelected[e],r=d(a.multiple)?a.multiple:1/0;$("onItemTap",{target:t[0],index:e,value:s,selected:t.hasClass("mbsc-sc-itm-sel")})!==!1&&(a.multiple&&!a._disabled[s]&&(void 0!==i[s]?(t.removeClass(V).removeAttr("aria-selected"),delete i[s]):(1==r&&(B._tempSelected[e]=i={},a._$markup.find(".mbsc-sc-itm-sel").removeClass(V).removeAttr("aria-selected")),c(i).length<r&&(t.addClass(V).attr("aria-selected","true"),i[s]=s))),_(a,e,n,X,!0,!0,a.multiple),B.live&&(!a.multiple||1===a.multiple&&W.tapSelect)&&(W.setOnTap===!0||W.setOnTap[e])&&setTimeout(function(){B.select()},W.tapSelect?0:200))}function r(e,t){var a=q[e];return a&&(!a.multiple||1!==a.multiple&&t&&(W.setOnTap===!0||W.setOnTap[e]))}function o(e){return-(e.max-e._offset-(e.multiple&&!S?Math.floor(W.rows/2):0))*H}function l(e){return-(e.min-e._offset+(e.multiple&&!S?Math.floor(W.rows/2):0))*H}function u(e,t){return(e._array?e._map[t]:+e.getIndex(t,B))||0}function h(e,t){var a=e.data;if(t>=e.min&&t<=e.max)return e._array?e.circular?ae(a).get(t%e._length):a[t]:ae.isFunction(a)?a(t,B):""}function m(e){return ae.isPlainObject(e)?void 0!==e.value?e.value:e.display:e}function f(e){var t=ae.isPlainObject(e)?e.display:e;return void 0===t?"":t}function p(e,t){return m(h(e,t))}function b(e,t){var a=q[e];_(a,e,a._current+t,W.delay+100,1==t?1:2)}function v(e){return ae.isArray(W.readonly)?W.readonly[e]:W.readonly}function g(e,t,a){var n=e._index-e._batch;return e.data=e.data||[],e.key=void 0!==e.key?e.key:t,e.label=void 0!==e.label?e.label:t,e._map={},e._array=ae.isArray(e.data),e._array&&(e._length=e.data.length,ae.each(e.data,function(t,a){e._map[m(a)]=t})),e.circular=void 0===W.circular?void 0===e.circular?e._array&&e._length>W.rows:e.circular:ae.isArray(W.circular)?W.circular[t]:W.circular,e.min=e._array?e.circular?-(1/0):0:void 0===e.min?-(1/0):e.min,e.max=e._array?e.circular?1/0:e._length-1:void 0===e.max?1/0:e.max,e._nr=t,e._index=u(e,E[t]),e._disabled={},e._batch=0,e._current=e._index,e._first=e._index-z,e._last=e._index+z,e._offset=e._first,a?(e._offset-=e._margin/H+(e._index-n),e._margin+=(e._index-n)*H):e._margin=0,e._refresh=function(t){oe(e._scroller.settings,{minScroll:o(e),maxScroll:l(e)}),e._scroller.refresh(t)},R[e.key]=e,e}function y(e,t,a,n,s){var i,r,o,l,c,d,u,p,b="",v=B._tempSelected[t],g=e._disabled||{};for(i=a;i<=n;i++)o=h(e,i),c=f(o),l=m(o),r=o&&void 0!==o.cssClass?o.cssClass:"",d=o&&void 0!==o.label?o.label:"",u=o&&o.invalid,p=void 0!==l&&l==E[t]&&!e.multiple,b+='<div role="option" aria-selected="'+!!v[l]+'" class="mbsc-sc-itm '+(s?"mbsc-sc-itm-3d ":"")+r+" "+(p?"mbsc-sc-itm-sel ":"")+(v[l]?V:"")+(void 0===l?" mbsc-sc-itm-ph":" mbsc-btn-e")+(u?" mbsc-sc-itm-inv-h mbsc-disabled":"")+(g[l]?" mbsc-sc-itm-inv mbsc-disabled":"")+'" data-index="'+i+'" data-val="'+l+'"'+(d?' aria-label="'+d+'"':"")+(p?' aria-selected="true"':"")+' style="height:'+H+"px;line-height:"+H+"px;"+(s?be+"transform:rotateX("+(e._offset-i)*k%360+"deg) translateZ("+H*W.rows/2+"px);":"")+'">'+(I>1?'<div class="mbsc-sc-itm-ml" style="line-height:'+Math.round(H/I)+"px;font-size:"+Math.round(H/I*.8)+'px;">':"")+c+(I>1?"</div>":"")+"</div>";return b}function x(e,t,a){var n=Math.round(-a/H)+e._offset,s=n-e._current,i=e._first,r=e._last,o=i+z-C+1,l=r-z+C;s&&(e._first+=s,e._last+=s,e._current=n,s>0?(e._$scroller.append(y(e,t,Math.max(r+1,i+s),r+s)),ae(".mbsc-sc-itm",e._$scroller).slice(0,Math.min(s,r-i+1)).remove(),S&&(e._$3d.append(y(e,t,Math.max(l+1,o+s),l+s,!0)),ae(".mbsc-sc-itm",e._$3d).slice(0,Math.min(s,l-o+1)).attr("class","mbsc-sc-itm-del"))):s<0&&(e._$scroller.prepend(y(e,t,i+s,Math.min(i-1,r+s))),ae(".mbsc-sc-itm",e._$scroller).slice(Math.max(s,i-r-1)).remove(),S&&(e._$3d.prepend(y(e,t,o+s,Math.min(o-1,l+s),!0)),ae(".mbsc-sc-itm",e._$3d).slice(Math.max(s,o-l-1)).attr("class","mbsc-sc-itm-del"))),e._margin+=s*H,e._$scroller.css("margin-top",e._margin+"px"))}function w(e,t,a,n){var s,i=q[e],r=n||i._disabled,o=u(i,t),l=t,c=t,d=0,h=0;if(void 0===t&&(t=p(i,o)),r[t]===!0){for(s=0;o-d>=i.min&&r[l]&&s<100;)s++,d++,l=p(i,o-d);for(s=0;o+h<i.max&&r[c]&&s<100;)s++,h++,c=p(i,o+h);t=(h<d&&h&&2!==a||!d||o-d<0||1==a)&&!r[c]?c:l}return t}function T(t,a,n,s,i,o){var l,c,d,h,m=B._isVisible;O=!0,h=W.validate.call(e,{values:E.slice(0),index:a,direction:n},B)||{},O=!1,h.valid&&(B._tempWheelArray=E=h.valid.slice(0)),o||ae.each(q,function(e,s){if(m&&s._$markup.find(".mbsc-sc-itm-inv").removeClass("mbsc-sc-itm-inv mbsc-disabled"),s._disabled={},h.disabled&&h.disabled[e]&&ae.each(h.disabled[e],function(e,t){s._disabled[t]=!0,m&&s._$markup.find('.mbsc-sc-itm[data-val="'+t+'"]').addClass("mbsc-sc-itm-inv mbsc-disabled")}),E[e]=s.multiple?E[e]:w(e,E[e],n),m){if(s.multiple&&void 0!==a||s._$markup.find(".mbsc-sc-itm-sel").removeClass(V).removeAttr("aria-selected"),s.multiple){if(void 0===a)for(var r in B._tempSelected[e])s._$markup.find('.mbsc-sc-itm[data-val="'+r+'"]').addClass(V).attr("aria-selected","true")}else s._$markup.find('.mbsc-sc-itm[data-val="'+E[e]+'"]').addClass("mbsc-sc-itm-sel").attr("aria-selected","true");c=u(s,E[e]),l=c-s._index+s._batch,Math.abs(l)>2*z+1&&(d=l+(2*z+1)*(l>0?-1:1),s._offset+=d,s._margin-=d*H,s._refresh()),s._index=c+s._batch,s._scroller.scroll(-(c-s._offset+s._batch)*H,a===e||void 0===a?t:X,i)}}),$("onValidated",{index:a,time:t}),B._tempValue=W.formatValue.call(e,E,B),m&&B._updateHeader(),B.live&&r(a,o)&&(B._hasValue=s||B._hasValue,D(s,s,0,!0),s&&$("onSet",{valueText:B._value})),s&&$("onChange",{index:a,valueText:B._tempValue})}function _(e,t,a,n,s,i,r){var o=p(e,a);void 0!==o&&(E[t]=o,e._batch=e._array?Math.floor(a/e._length)*e._length:0,e._index=a,setTimeout(function(){T(n,t,s,!0,i,r)},10))}function D(t,a,n,s,i){if(s?B._tempValue=W.formatValue.call(e,B._tempWheelArray,B):T(n),!i){B._wheelArray=[];for(var r=0;r<E.length;r++)B._wheelArray[r]=q[r]&&q[r].multiple?Object.keys(B._tempSelected[r])[0]:E[r];B._value=B._hasValue?B._tempValue:null,B._selected=oe(!0,{},B._tempSelected)}t&&(B._isInput&&j.val(B._hasValue?B._tempValue:""),$("onFill",{valueText:B._hasValue?B._tempValue:"",change:a}),a&&(B._preventChange=!0,j.trigger("change")))}var M,C,k,S,V,Y,N,E,L,H,P,F,O,W,$,I,q,R,z=40,X=1e3,B=this,j=ae(e);Ae.call(this,e,t,!0),B.setVal=B._setVal=function(t,a,n,s,i){B._hasValue=null!==t&&void 0!==t,B._tempWheelArray=E=ae.isArray(t)?t.slice(0):W.parseValue.call(e,t,B)||[],D(a,void 0===n?a:n,i,!1,s)},B.getVal=B._getVal=function(e){var t=B._hasValue||e?B[e?"_tempValue":"_value"]:null;return d(t)?+t:t},B.setArrayVal=B.setVal,B.getArrayVal=function(e){return e?B._tempWheelArray:B._wheelArray},B.changeWheel=function(e,t,a){var n,s;ae.each(e,function(e,t){s=R[e],s&&(n=s._nr,oe(s,t),g(s,n,!0),B._isVisible&&(S&&s._$3d.html(y(s,n,s._first+z-C+1,s._last-z+C,!0)),s._$scroller.html(y(s,n,s._first,s._last)).css("margin-top",s._margin+"px"),s._refresh(O)))}),!B._isVisible||B._isLiquid||O||B.position(),O||T(t,void 0,void 0,a)},B.getValidValue=w,B._generateContent=function(){var e,t=0,a="",n=S?be+"transform: translateZ("+(H*W.rows/2+3)+"px);":"",s='<div class="mbsc-sc-whl-l" style="'+n+"height:"+H+"px;margin-top:-"+(H/2+(W.selectedLineBorder||0))+'px;"></div>',i=0;return ae.each(W.wheels,function(r,o){a+='<div class="mbsc-w-p mbsc-sc-whl-gr-c'+(S?" mbsc-sc-whl-gr-3d-c":"")+(W.showLabel?" mbsc-sc-lbl-v":"")+'">'+s+'<div class="mbsc-sc-whl-gr'+(S?" mbsc-sc-whl-gr-3d":"")+(Y?" mbsc-sc-cp":"")+(W.width||W.maxWidth?'"':'" style="max-width:'+W.maxPopupWidth+'px;"')+">",ae.each(o,function(r,o){B._tempSelected[i]=oe({},B._selected[i]),q[i]=g(o,i),t+=W.maxWidth?W.maxWidth[i]||W.maxWidth:W.width?W.width[i]||W.width:0,e=void 0!==o.label?o.label:r,a+='<div class="mbsc-sc-whl-w '+(o.cssClass||"")+(o.multiple?" mbsc-sc-whl-multi":"")+'" style="'+(W.width?"width:"+(W.width[i]||W.width)+"px;":(W.minWidth?"min-width:"+(W.minWidth[i]||W.minWidth)+"px;":"")+(W.maxWidth?"max-width:"+(W.maxWidth[i]||W.maxWidth)+"px;":""))+'">'+(L?'<div class="mbsc-sc-bar-c"><div class="mbsc-sc-bar"></div></div>':"")+'<div class="mbsc-sc-whl-o" style="'+n+'"></div>'+s+'<div tabindex="0" aria-live="off" aria-label="'+e+'"'+(o.multiple?' aria-multiselectable="true"':"")+' role="listbox" data-index="'+i+'" class="mbsc-sc-whl" style="height:'+W.rows*H*(S?1.1:1)+'px;">'+(Y?'<div data-index="'+i+'" data-step="1" class="mbsc-sc-btn mbsc-sc-btn-plus '+(W.btnPlusClass||"")+'" style="height:'+H+"px;line-height:"+H+'px;"></div><div data-index="'+i+'" data-step="-1" class="mbsc-sc-btn mbsc-sc-btn-minus '+(W.btnMinusClass||"")+'" style="height:'+H+"px;line-height:"+H+'px;"></div>':"")+'<div class="mbsc-sc-lbl">'+e+'</div><div class="mbsc-sc-whl-c" style="height:'+P+"px;margin-top:-"+(P/2+1)+"px;"+n+'"><div class="mbsc-sc-whl-sc" style="top:'+(P-H)/2+'px;">',a+=y(o,i,o._first,o._last)+"</div></div>",S&&(a+='<div class="mbsc-sc-whl-3d" style="height:'+H+"px;margin-top:-"+H/2+'px;">',a+=y(o,i,o._first+z-C+1,o._last-z+C,!0),a+="</div>"),a+="</div></div>",i++}),a+="</div></div>"}),t&&(W.maxPopupWidth=t),a},B._attachEvents=function(e){N=A(ae(".mbsc-sc-btn",e),b,W.delay,v,!0),ae(".mbsc-sc-whl",e).on("keydown",n).on("keyup",s)},B._detachEvents=function(){for(var e=0;e<q.length;e++)q[e]._scroller.destroy()},B._markupReady=function(e){M=e,ae(".mbsc-sc-whl-w",M).each(function(e){var t,a=ae(this),n=q[e];n._$markup=a,n._$scroller=ae(".mbsc-sc-whl-sc",this),n._$3d=ae(".mbsc-sc-whl-3d",this),n._scroller=new Le(this,{mousewheel:W.mousewheel,moveElement:n._$scroller,scrollbar:ae(".mbsc-sc-bar-c",this),initialPos:(n._first-n._index)*H,contSize:W.rows*H,snap:H,minScroll:o(n),maxScroll:l(n),maxSnapScroll:z,prevDef:!0,stopProp:!0,timeUnit:3,easing:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",sync:function(e,t,a){var s=t?be+"transform "+Math.round(t)+"ms "+a:"";S&&(n._$3d[0].style[ye+"Transition"]=s,n._$3d[0].style[ye+"Transform"]="rotateX("+-e/H*k+"deg)")},onStart:function(t,a){a.settings.readonly=v(e)},onGestureStart:function(){a.addClass("mbsc-sc-whl-a mbsc-sc-whl-anim"),$("onWheelGestureStart",{index:e})},onGestureEnd:function(a){var s=90==a.direction?1:2,i=a.duration,r=a.destinationY;t=Math.round(-r/H)+n._offset,_(n,e,t,i,s)},onAnimationStart:function(){a.addClass("mbsc-sc-whl-anim")},onAnimationEnd:function(){a.removeClass("mbsc-sc-whl-a mbsc-sc-whl-anim"),$("onWheelAnimationEnd",{index:e}),n._$3d.find(".mbsc-sc-itm-del").remove()},onMove:function(t){x(n,e,t.posY)},onBtnTap:function(t){i(e,ae(t.target))}})}),T()},B._fillValue=function(){B._hasValue=!0,D(!0,!0,0,!0)},B._clearValue=function(){ae(".mbsc-sc-whl-multi .mbsc-sc-itm-sel",M).removeClass(V).removeAttr("aria-selected")},B._readValue=function(){var t=j.val()||"",a=0;""!==t&&(B._hasValue=!0),B._tempWheelArray=E=B._hasValue&&B._wheelArray?B._wheelArray.slice(0):W.parseValue.call(e,t,B)||[],B._tempSelected=oe(!0,{},B._selected),ae.each(W.wheels,function(e,t){ae.each(t,function(e,t){q[a]=g(t,a),a++})}),D(!1,!1,0,!0),$("onRead")},B.__processSettings=function(e){W=B.settings,$=B.trigger,I=W.multiline,V="mbsc-sc-itm-sel mbsc-ic mbsc-ic-"+W.checkIcon,F=!W.touchUi,F&&(W.tapSelect=!0,W.circular=!1,W.rows=e.rows||t.rows||7)},B.__init=function(e){e&&(B._wheelArray=null),F?(W.scroll3d=!1,L=!0):L=!1,q=[],R={},Y=W.showScrollArrows,S=W.scroll3d&&!Oe&&!Y,H=W.height,P=S?2*Math.round((H-.03*(H*W.rows/2+3))/2):H,C=Math.round(1.8*W.rows),k=360/(2*C),Y&&(W.rows=Math.max(3,W.rows))},B._getItemValue=m,B._tempSelected={},B._selected={},a||B.init()};We.prototype={_hasDef:!0,_hasTheme:!0,_hasLang:!0,_responsive:!0,_class:"scroller",_presets:He,_defaults:oe({},Ae.prototype._defaults,{minWidth:80,height:40,rows:3,multiline:1,delay:200,readonly:!1,showLabel:!0,setOnTap:!1,wheels:[],preset:"",speedUnit:.0012,timeUnit:.08,checkIcon:"checkmark",compClass:"mbsc-sc",validate:function(){},formatValue:function(e){return e.join(" ")},parseValue:function(e,t){var a,n,s=[],i=[],r=0;return null!==e&&void 0!==e&&(s=(e+"").split(" ")),ae.each(t.settings.wheels,function(e,o){ae.each(o,function(e,o){n=o.data,a=t._getItemValue(n[0]),ae.each(n,function(e,n){if(s[r]==t._getItemValue(n))return a=t._getItemValue(n),!1}),i.push(a),r++})}),i}})},ie.Scroller=We;var $e={separator:" ",dateFormat:"mm/dd/yy",dateDisplay:"MMddyy",timeFormat:"h:ii A",dayText:"Day",monthText:"Month",yearText:"Year",hourText:"Hours",minuteText:"Minutes",ampmText:"&nbsp;",secText:"Seconds",nowText:"Now",todayText:"Today"},Ie=function(e){function t(e){var t,a,n,s,i=[];if(e){for(t=0;t<e.length;t++)if(a=e[t],a.start&&a.end&&!de.test(a.start))for(n=new Date(C(a.start,j,z)),s=new Date(C(a.end,j,z));n<=s;)i.push(y(n.getFullYear(),n.getMonth(),n.getDate())),n.setDate(n.getDate()+1);else i.push(a);return i}return e}function a(e,t,a,n){return Math.min(n,Math.floor(e/t)*t+a)}function n(e,t,a){return Math.floor((a-t)/e)*e+t}function s(e){return z.getYear(e)}function i(e){return z.getMonth(e)}function r(e){return z.getDay(e)}function o(e){var t=e.getHours();return t=ie&&t>=12?t-12:t,a(t,ce,ve,xe)}function l(e){return a(e.getMinutes(),fe,ge,we)}function c(e){return a(e.getSeconds(),pe,ye,Te)}function d(e){return e.getMilliseconds()}function u(e){return e.getHours()>11?1:0}function h(e){return e.getFullYear()+"-"+m(e.getMonth()+1)+"-"+m(e.getDate())}function f(e){return a(Math.round((e.getTime()-new Date(e).setHours(0,0,0,0))/1e3),H,0,86400)}function p(e,t,a,n){var s;return void 0===O[t]||(s=+e[O[t]],isNaN(s))?a?ke[t](a):void 0!==W[t]?W[t]:ke[t](n):s}function b(e){var t,a=new Date((new Date).setHours(0,0,0,0));if(null===e)return e;void 0!==O.dd&&(t=e[O.dd].split("-"),t=new Date(t[0],t[1]-1,t[2])),void 0!==O.tt&&(t=t||a,t=new Date(t.getTime()+e[O.tt]%86400*1e3));var n=p(e,"y",t,a),s=p(e,"m",t,a),i=Math.min(p(e,"d",t,a),z.getMaxDayOfMonth(n,s)),r=p(e,"h",t,a);return z.getDate(n,s,i,ie&&p(e,"a",t,a)?r+12:r,p(e,"i",t,a),p(e,"s",t,a),p(e,"u",t,a))}function v(e,t){var a,n,s=["y","m","d","a","h","i","s","u","dd","tt"],i=[];if(null===e||void 0===e)return e;for(a=0;a<s.length;a++)n=s[a],void 0!==O[n]&&(i[O[n]]=ke[n](e)),t&&(W[n]=ke[n](e));return i}function g(e,t){return t?Math.floor(new Date(e)/864e5):e.getMonth()+12*(e.getFullYear()-1970)}function T(e){return{value:e,display:(/yy/i.test(Z)?e:(e+"").substr(2,2))+(z.yearSuffix||"")}}function _(e){return e}function D(e){var t=/d/i.test(e);return{label:"",cssClass:"mbsc-dt-whl-date",min:te?g(h(te),t):void 0,max:ne?g(h(ne),t):void 0,data:function(a){var n=new Date((new Date).setHours(0,0,0,0)),s=t?new Date(864e5*a):new Date(1970,a,1);return t&&(s=new Date(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate())),{invalid:t&&!N(s,!0),value:h(s),display:n.getTime()==s.getTime()?z.todayText:x(e,s,z)}},getIndex:function(e){return g(e,t)}}}function k(e){var t,a,n,s=[];for(/s/i.test(e)?a=pe:/i/i.test(e)?a=60*fe:/h/i.test(e)&&(a=3600*ce),H=Me.tt=a,t=0;t<86400;t+=a)n=new Date((new Date).setHours(0,0,0,0)+1e3*t),s.push({value:t,display:x(e,n,z)});return{label:"",cssClass:"mbsc-dt-whl-time",data:s}}function S(){var e,t,a,n,s,i,r,o,l=0,c=[],d=[],u=[];if(/date/i.test(X)){for(e=U.split(/\|/.test(U)?"|":""),n=0;n<e.length;n++)if(a=e[n],i=0,a.length)if(/y/i.test(a)&&($.y=1,i++),/m/i.test(a)&&($.y=1,$.m=1,i++),/d/i.test(a)&&($.y=1,$.m=1,$.d=1,i++),i>1&&void 0===O.dd)O.dd=l,l++,d.push(D(a)),u=d,P=!0;else if(/y/i.test(a)&&void 0===O.y)O.y=l,l++,d.push({cssClass:"mbsc-dt-whl-y",label:z.yearText,min:te?z.getYear(te):void 0,max:ne?z.getYear(ne):void 0,data:T,getIndex:_});else if(/m/i.test(a)&&void 0===O.m){for(O.m=l,r=[],l++,s=0;s<12;s++)o=Z.replace(/[dy|]/gi,"").replace(/mm/,m(s+1)+(z.monthSuffix||"")).replace(/m/,s+1+(z.monthSuffix||"")),r.push({value:s,display:/MM/.test(o)?o.replace(/MM/,'<span class="mbsc-dt-month">'+z.monthNames[s]+"</span>"):o.replace(/M/,'<span class="mbsc-dt-month">'+z.monthNamesShort[s]+"</span>")});d.push({cssClass:"mbsc-dt-whl-m",label:z.monthText,data:r})}else if(/d/i.test(a)&&void 0===O.d){for(O.d=l,r=[],l++,s=1;s<32;s++)r.push({value:s,display:(/dd/i.test(Z)?m(s):s)+(z.daySuffix||"")});d.push({cssClass:"mbsc-dt-whl-d",label:z.dayText,data:r})}c.push(d)}if(/time/i.test(X)){for(t=G.split(/\|/.test(G)?"|":""),n=0;n<t.length;n++)if(a=t[n],i=0,a.length&&(/h/i.test(a)&&($.h=1,i++),/i/i.test(a)&&($.i=1,i++),/s/i.test(a)&&($.s=1,i++),/a/i.test(a)&&i++),i>1&&void 0===O.tt)O.tt=l,l++,u.push(k(a));else if(/h/i.test(a)&&void 0===O.h){for(r=[],O.h=l,$.h=1,l++,s=ve;s<(ie?12:24);s+=ce)r.push({value:s,display:ie&&0===s?12:/hh/i.test(J)?m(s):s});u.push({cssClass:"mbsc-dt-whl-h",label:z.hourText,data:r})}else if(/i/i.test(a)&&void 0===O.i){for(r=[],O.i=l,$.i=1,l++,s=ge;s<60;s+=fe)r.push({value:s,display:/ii/i.test(J)?m(s):s});u.push({cssClass:"mbsc-dt-whl-i",label:z.minuteText,data:r})}else if(/s/i.test(a)&&void 0===O.s){for(r=[],O.s=l,$.s=1,l++,s=ye;s<60;s+=pe)r.push({value:s,display:/ss/i.test(J)?m(s):s});u.push({cssClass:"mbsc-dt-whl-s",label:z.secText,data:r})}else/a/i.test(a)&&void 0===O.a&&(O.a=l,l++,u.push({cssClass:"mbsc-dt-whl-a",label:z.ampmText,data:/A/.test(a)?[{value:0,display:z.amText.toUpperCase()},{value:1,display:z.pmText.toUpperCase()}]:[{value:0,display:z.amText},{value:1,display:z.pmText}]}));u!=d&&c.push(u)}return c}function V(e){var t,a,n,s={};if(e.is("input")){switch(e.attr("type")){case"date":t="yy-mm-dd";break;case"datetime":t="yy-mm-ddTHH:ii:ssZ";break;case"datetime-local":t="yy-mm-ddTHH:ii:ss";break;case"month":t="yy-mm",s.dateOrder="mmyy";break;case"time":t="HH:ii:ss"}s.format=t,a=e.attr("min"),n=e.attr("max"),a&&"undefined"!=a&&(s.min=w(t,a)),n&&"undefined"!=n&&(s.max=w(t,n))}return s}function Y(e,t){var a,n,s=!1,i=!1,r=0,o=0,l=te?b(v(te)):-(1/0),c=ne?b(v(ne)):1/0;if(N(e))return e;if(e<l&&(e=l),e>c&&(e=c),a=e,n=e,2!==t)for(s=N(a,!0);!s&&a<c;)a=new Date(a.getTime()+864e5),s=N(a,!0),r++;if(1!==t)for(i=N(n,!0);!i&&n>l;)n=new Date(n.getTime()-864e5),i=N(n,!0),o++;return 1===t&&s?a:2===t&&i?n:o<=r&&i?n:a}function N(e,t){return!(!t&&e<te)&&(!(!t&&e>ne)&&(!!A(e,ee)||!A(e,Q)))}function A(e,t){var a,n,s;if(t)for(n=0;n<t.length;n++)if(a=t[n],s=a+"",!a.start)if(he.test(s)){if(s=+s.replace("w",""),s==e.getDay())return!0}else if(ue.test(s)){if(s=s.split("/"),s[1]){if(s[0]-1==e.getMonth()&&s[1]==e.getDate())return!0}else if(s[0]==e.getDate())return!0}else if(a=C(a,j,z),e.getFullYear()==a.getFullYear()&&e.getMonth()==a.getMonth()&&e.getDate()==a.getDate())return!0;return!1}function E(e,t,a,n,s,i,r){var o,l,c,d;if(e)for(l=0;l<e.length;l++)if(o=e[l],d=o+"",!o.start)if(he.test(d))for(d=+d.replace("w",""),c=d-n;c<s;c+=7)c>=0&&(i[c+1]=r);else ue.test(d)?(d=d.split("/"),d[1]?d[0]-1==a&&(i[d[1]]=r):i[d[0]]=r):(o=C(o,j,z),z.getYear(o)==t&&z.getMonth(o)==a&&(i[z.getDay(o)]=r))}function L(e,t,n,s,i,r,o,l){var c,d,u,h,m,f,p,b,v,g,y,x,w,T,_,D,M,C,k,S,V={},Y=z.getDate(s,i,r),N=["a","h","i","s"];if(e){for(p=0;p<e.length;p++)y=e[p],y.start&&(y.apply=!1,u=y.d,M=u+"",C=M.split("/"),u&&(u.getTime&&s==z.getYear(u)&&i==z.getMonth(u)&&r==z.getDay(u)||!he.test(M)&&(C[1]&&r==C[1]&&i==C[0]-1||!C[1]&&r==C[0])||he.test(M)&&Y.getDay()==+M.replace("w",""))&&(y.apply=!0,V[Y]=!0));for(p=0;p<e.length;p++)if(y=e[p],c=0,D=0,b=_e[n],v=De[n],T=!0,_=!0,d=!1,y.start&&(y.apply||!y.d&&!V[Y])){for(x=y.start.split(":"),w=y.end.split(":"),g=0;g<3;g++)void 0===x[g]&&(x[g]=0),void 0===w[g]&&(w[g]=59),x[g]=+x[g],w[g]=+w[g];if("tt"==n)b=a(Math.round((new Date(Y).setHours(x[0],x[1],x[2])-new Date(Y).setHours(0,0,0,0))/1e3),H,0,86400),v=a(Math.round((new Date(Y).setHours(w[0],w[1],w[2])-new Date(Y).setHours(0,0,0,0))/1e3),H,0,86400);else{for(x.unshift(x[0]>11?1:0),w.unshift(w[0]>11?1:0),ie&&(x[1]>=12&&(x[1]=x[1]-12),w[1]>=12&&(w[1]=w[1]-12)),g=0;g<t;g++)void 0!==I[g]&&(k=a(x[g],Me[N[g]],_e[N[g]],De[N[g]]),S=a(w[g],Me[N[g]],_e[N[g]],De[N[g]]),h=0,m=0,f=0,ie&&1==g&&(h=x[0]?12:0,m=w[0]?12:0,f=I[0]?12:0),T||(k=0),_||(S=De[N[g]]),(T||_)&&k+h<I[g]+f&&I[g]+f<S+m&&(d=!0),I[g]!=k&&(T=!1),I[g]!=S&&(_=!1));if(!l)for(g=t+1;g<4;g++)x[g]>0&&(c=Me[n]),w[g]<De[N[g]]&&(D=Me[n]);d||(k=a(x[t],Me[n],_e[n],De[n])+c,S=a(w[t],Me[n],_e[n],De[n])-D,T&&(b=k),_&&(v=S))}if(T||_||d)for(g=b;g<=v;g+=Me[n])o[g]=!l}}}var H,P,F,O={},W={},$={},I=[],q=V(ae(this)),R=oe({},e.settings),z=oe(e.settings,me,$e,q,R),X=z.preset,B="datetime"==X?z.dateFormat+z.separator+z.timeFormat:"time"==X?z.timeFormat:z.dateFormat,j=q.format||B,U=z.dateWheels||z.dateFormat,G=z.timeWheels||z.timeFormat,Z=z.dateWheels||z.dateDisplay,J=G,K=z.baseTheme||z.theme,Q=t(z.invalid),ee=t(z.valid),te=C(z.min,j,z),ne=C(z.max,j,z),se=/time/i.test(X),ie=/h/.test(J),re=/D/.test(Z),le=z.steps||{},ce=le.hour||z.stepHour||1,fe=le.minute||z.stepMinute||1,pe=le.second||z.stepSecond||1,be=le.zeroBased,ve=be||!te?0:te.getHours()%ce,ge=be||!te?0:te.getMinutes()%fe,ye=be||!te?0:te.getSeconds()%pe,xe=n(ce,ve,ie?11:23),we=n(fe,ge,59),Te=n(fe,ge,59),_e={y:te?te.getFullYear():-(1/0),m:0,d:1,h:ve,i:ge,s:ye,a:0,tt:0},De={y:ne?ne.getFullYear():1/0,m:11,d:31,h:xe,i:we,s:Te,a:1,tt:86400},Me={y:1,m:1,d:1,h:ce,i:fe,s:pe,a:1,tt:1},Ce={bootstrap:46,ios:50,material:46,mobiscroll:46,windows:50},ke={y:s,m:i,d:r,h:o,i:l,s:c,u:d,a:u,dd:h,tt:f};return e.getVal=function(t){return e._hasValue||t?M(b(e.getArrayVal(t)),z,j):null},e.getDate=function(t){return e._hasValue||t?b(e.getArrayVal(t)):null},e.setDate=function(t,a,n,s,i){e.setArrayVal(v(t),a,i,s,n)},F=S(),z.isoParts=$,e._format=B,e._order=O,e.handlers.now=function(){e.setDate(new Date,e.live,1e3,!0,!0)},e.buttons.now={text:z.nowText,icon:z.nowIcon,handler:"now"},{minWidth:P&&se?Ce[K]:void 0,compClass:"mbsc-dt mbsc-sc",wheels:F,headerText:!!z.headerText&&function(){return x(B,b(e.getArrayVal(!0)),z)},formatValue:function(e){return x(j,b(e),z)},parseValue:function(e){return e||(W={}),v(C(e||z.defaultValue||new Date,j,z,$),!!e)},validate:function(t){var a,n,s,i,r=t.values,o=t.index,l=t.direction,c=z.wheels[0][O.d],d=Y(b(r),l),u=v(d),h=[],m={},f=ke.y(d),p=ke.m(d),g=z.getMaxDayOfMonth(f,p),y=!0,x=!0;if(ae.each(["dd","y","m","d","tt","a","h","i","s"],function(e,t){if(void 0!==O[t]){var a=_e[t],s=De[t],i=ke[t](d);if(h[O[t]]=[],y&&te&&(a=ke[t](te)),x&&ne&&(s=ke[t](ne)),"y"!=t&&"dd"!=t)for(n=_e[t];n<=De[t];n+=Me[t])(n<a||n>s)&&h[O[t]].push(n);if(i<a&&(i=a),i>s&&(i=s),y&&(y=i==a),x&&(x=i==s),"d"==t){var r=z.getDate(f,p,1).getDay(),o={};E(Q,f,p,r,g,o,1),E(ee,f,p,r,g,o,0),ae.each(o,function(e,a){a&&h[O[t]].push(e)})}}}),se&&ae.each(["a","h","i","s","tt"],function(t,a){var n=ke[a](d),s=ke.d(d),i={};void 0!==O[a]&&(L(Q,t,a,f,p,s,i,0),L(ee,t,a,f,p,s,i,1),ae.each(i,function(e,t){t&&h[O[a]].push(e)}),I[t]=e.getValidValue(O[a],n,l,i))}),c&&(c._length!==g||re&&(void 0===o||o===O.y||o===O.m))){for(m[O.d]=c,c.data=[],a=1;a<=g;a++)i=z.getDate(f,p,a).getDay(),s=Z.replace(/[my|]/gi,"").replace(/dd/,(a<10?"0"+a:a)+(z.daySuffix||"")).replace(/d/,a+(z.daySuffix||"")),c.data.push({value:a,display:/DD/.test(s)?s.replace(/DD/,'<span class="mbsc-dt-day">'+z.dayNames[i]+"</span>"):s.replace(/D/,'<span class="mbsc-dt-day">'+z.dayNamesShort[i]+"</span>")});e._tempWheelArray[O.d]=u[O.d],e.changeWheel(m)}return{disabled:h,valid:u}}}},qe={controls:["calendar"],firstDay:0,weekDays:"short",maxMonthWidth:170,breakPointMd:768,months:1,pageBuffer:1,weeks:6,highlight:!0,outerMonthChange:!0,quickNav:!0,yearChange:!0,tabs:"auto",todayClass:"mbsc-cal-today",btnCalPrevClass:"mbsc-ic mbsc-ic-arrow-left6",btnCalNextClass:"mbsc-ic mbsc-ic-arrow-right6",dateText:"Date",timeText:"Time",todayText:"Today",prevMonthText:"Previous Month",nextMonthText:"Next Month",prevYearText:"Previous Year",nextYearText:"Next Year"},Re=function(e){function t(t){t.hasClass("mbsc-cal-h")&&(t.removeClass("mbsc-cal-h"),e._onSelectShow())}function a(e){e.hasClass("mbsc-cal-h")||e.addClass("mbsc-cal-h")}function n(e){e.hasClass("mbsc-cal-h")?t(e):a(e)}function s(){var t,a,n;de={},me=[],tt=e.trigger,j=ae(dt),n=oe({},e.settings),Qe=oe(e.settings,qe,n),t=Qe.controls.join(","),Ve=Qe.rtl,Ue=Qe.pageBuffer,st=Qe.weekCounter,ie=Qe.weeks,Se=6==ie,Ye="vertical"==Qe.calendarScroll,ce="inline"==Qe.display?j.is("div")?j:j.parent():e._$window,it="full"==Qe.weekDays?"":"min"==Qe.weekDays?"Min":"Short",a=Qe.layout||("inline"==Qe.display||/top|bottom/.test(Qe.display)&&Qe.touchUi?"liquid":""),ke="liquid"==a,le=ke?null:Qe.calendarWidth,Ke=Ve&&!Ye?-1:1,fe="mbsc-disabled "+(Qe.disabledClass||""),be="mbsc-selected "+(Qe.selectedTabClass||""),pe="mbsc-selected "+(Qe.selectedClass||""),t.match(/calendar/)&&(de.calendar=1,we=!0),t.match(/date/)&&!we&&(de.date=1),t.match(/time/)&&(de.time=1),Qe.controls.forEach(function(e){de[e]&&me.push(e)}),De=Qe.quickNav&&we&&Se,rt=Qe.yearChange&&Se,ke&&we&&"center"==Qe.display&&(e._isFullScreen=!0),Qe.layout=a,Qe.preset=(de.date||we?"date":"")+(de.time?"time":"")}function i(){ze=rt?Qe.monthNamesShort:Qe.monthNames,ct=Qe.yearSuffix||"",Re=(Qe.dateWheels||Qe.dateFormat).search(/m/i),ot=(Qe.dateWheels||Qe.dateFormat).search(/y/i),xe=e._format,Qe.min&&(Fe=T(C(Qe.min,xe,Qe)),$e=Qe.getYear(Fe),We=Qe.getMonth(Fe),Oe=Qe.getDate(12*Math.floor($e/12),0,1)),Qe.max&&(Ae=T(C(Qe.max,xe,Qe)),Pe=Qe.getYear(Ae),He=Qe.getMonth(Ae),Ee=Qe.getDate(12*Math.floor(Pe/12),0,1))}function r(e,t,a){e[t]=e[t]||[],e[t].push(a)}function o(e,t,a){var n,s,i,o,l=Qe.getYear(t),c=Qe.getMonth(t),d={};return e&&ae.each(e,function(e,u){if(n=u.d||u.start||u,s=n+"",u.start&&u.end)for(o=T(C(u.start,xe,Qe)),i=T(C(u.end,xe,Qe));o<=i;)r(d,o,u),o.setDate(o.getDate()+1);else if(he.test(s)){var h=+s.replace("w",""),m=0,f=t.getDay();for(Qe.firstDay-f+1>1&&(m=7),o=Qe.getDate(l,c,h-m-f+Qe.getDay(t));o<=a;)r(d,o,u),o.setDate(o.getDate()+7)}else if(ue.test(s))if(s=s.split("/"),s[1])for(o=Qe.getDate(l,s[0]-1,s[1]);o<=a;)r(d,o,u),o=Qe.getDate(Qe.getYear(o)+1,Qe.getMonth(o),s[0]);else for(o=Qe.getDate(l,c,s[0]);o<=a;)r(d,o,u),o=Qe.getDate(Qe.getYear(o),Qe.getMonth(o)+1,s[0]);else r(d,T(C(n,xe,Qe)),u)}),d}function c(e){return!(e<Fe)&&(!(e>Ae)&&(void 0===Me[e]||void 0!==at[e]))}function d(t){var a,n,s,i,r,o,l,c=!!Ne[t]&&Ne[t],d=c&&c[0].background,u="",h="";if(c){for(r='<div class="mbsc-cal-marks">',a=0;a<c.length;a++)i=c[a],u+=(i.cssClass||"")+" ",r+='<div class="mbsc-cal-mark"'+(i.color?' style="background:'+i.color+';"':"")+"></div>",i.icon&&(h+='<span class="mbsc-ic mbsc-ic-'+i.icon+'"'+(i.text?"":i.color?' style="color:'+i.color+';"':"")+"></span>\n");r+="</div>",_e&&(c[0]&&(n=c[0].text,s=c[0].color),n?o='<div class="mbsc-cal-txt" title="'+ae("<div>"+n+"</div>").text()+'"'+(s?' style="background:'+s+";color:"+N(s)+';"':"")+">"+h+n+"</div>":h&&(o='<div class="mbsc-cal-txt mbsc-cal-icons">'+h+"</div>"))}return l={marked:c,background:d,cssClass:u,ariaLabel:_e?n:"",markup:_e?o:Te?r:""},oe(l,e._getDayProps(t,l))}function u(e){return' style="'+(Ye?"transform: translateY("+100*e+"%)":"left:"+100*e*Ke+"%")+'"'}function h(){Ge="auto"==Qe.months?Math.max(1,Math.min(3,Math.floor((le||E(ce))/280))):+Qe.months,Je=Ge+2*Ue,Ze=0,Ye=Ye&&Ge<2,et=void 0===Qe.showOuterDays?Ge<2&&!Ye:Qe.showOuterDays,re=le||280*Ge}function m(e){return W(e,Ge-1)>Ae&&(e=W(Ae,1-Ge)),e<Fe&&(e=Fe),e}function f(t){var a=W(t,-Ze-Ue),n=W(t,-Ze+Ge+Ue);Me=o(Qe.invalid,a,n),at=o(Qe.valid,a,n),Ne=o(Qe.labels||Qe.events||Qe.marked||Qe.colors,a,n),e._onGenMonth(a,n)}function b(e){var t=Qe.getYear(e),a=Qe.getMonth(e);ve=e,ne=e,Y(e),tt("onMonthChange",{year:t,month:a}),tt("onMonthLoading",{year:t,month:a}),tt("onPageChange",{firstDay:e}),tt("onPageLoading",{firstDay:e}),f(e)}function v(e){var t=Qe.getYear(e),a=Qe.getMonth(e);void 0!==je&&D(e,je,!0),ae(".mbsc-cal-slide",ye.$scroller).removeClass("mbsc-cal-slide-a"),ae(".mbsc-cal-slide",ye.$scroller).slice(Ue,Ue+Ge).addClass("mbsc-cal-slide-a"),void 0===je&&(tt("onMonthLoaded",{year:t,month:a}),tt("onPageLoaded",{firstDay:e})),M(ne,ye.focus),ye.focus=!1}function g(){var e,t;return e='<div class="mbsc-cal-tabs-c"><ul class="mbsc-cal-tabs" role="tablist">',me.forEach(function(a,n){t=Qe[("calendar"==a?"date":a)+"Text"],e+='<li role="tab" aria-controls="'+(dt.id+"-mbsc-pnl-"+n)+'" class="mbsc-cal-tab mbsc-fr-btn-e '+(n?"":be)+'" data-control="'+a+'"'+(Qe.tabLink?'><a href="#">'+t+"</a>":' tabindex="0">'+t)+"</li>"}),e+="</ul></div>"}function x(){var e,t,a,n,s="",i=Ve?Qe.btnCalNextClass:Qe.btnCalPrevClass,r=Ve?Qe.btnCalPrevClass:Qe.btnCalNextClass;for(n='<div class="mbsc-cal-btn-w"><div data-step="-1" role="button" tabindex="0" aria-label="'+Qe.prevMonthText+'" class="'+i+' mbsc-cal-prev mbsc-cal-prev-m mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div>',t=0;t<(ie?Ge:1);t++)n+='<div role="button" class="mbsc-cal-month"></div>';if(n+='<div data-step="1" role="button" tabindex="0" aria-label="'+Qe.nextMonthText+'" class="'+r+' mbsc-cal-next mbsc-cal-next-m mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div></div>',rt&&(s='<div class="mbsc-cal-btn-w"><div data-step="-12" role="button" tabindex="0" aria-label="'+Qe.prevYearText+'" class="'+i+' mbsc-cal-prev mbsc-cal-prev-y mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div><div role="button" class="mbsc-cal-year"></div><div data-step="12" role="button" tabindex="0" aria-label="'+Qe.nextYearText+'" class="'+r+' mbsc-cal-next mbsc-cal-next-y mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div></div>'),e='<div class="mbsc-w-p mbsc-cal-c"><div class="mbsc-cal '+(Se?"":" mbsc-cal-week-view")+(Ge>1?" mbsc-cal-multi ":"")+(st?" mbsc-cal-weeks ":"")+(Ye?" mbsc-cal-vertical":"")+(Te?" mbsc-cal-has-marks":"")+(_e?" mbsc-cal-has-txt":"")+(et?"":" mbsc-cal-hide-diff ")+(Qe.calendarClass||"")+'"'+(ke?"":' style="min-width:'+(le||280*Ge)+'px;"')+'><div class="mbsc-cal-hdr">'+(ot<Re||Ge>1?s+n:n+s)+"</div>",ie){for(e+='<div class="mbsc-cal-body"><div class="mbsc-cal-day-picker"><div class="mbsc-cal-days-c">',a=0;a<Ge;a++){for(e+='<div class="mbsc-cal-days">',t=0;t<7;t++)e+='<div aria-label="'+Qe.dayNames[(t+Qe.firstDay)%7]+'">'+Qe["dayNames"+it][(t+Qe.firstDay)%7]+"</div>";e+="</div>"}e+='</div><div class="mbsc-cal-scroll-c mbsc-cal-day-scroll-c '+(Qe.calendarClass||"")+'"'+(Qe.calendarHeight?' style="height:'+Qe.calendarHeight+'px"':"")+'><div class="mbsc-cal-scroll" style="width:'+100/Ge+'%">'+D(ve)+"</div></div>"}if(e+="</div>",De){for(e+='<div class="mbsc-cal-month-picker mbsc-cal-picker mbsc-cal-h"><div class="mbsc-cal-scroll-c '+(Qe.calendarClass||"")+'"><div class="mbsc-cal-scroll">',t=0;t<3;t++){for(e+='<div class="mbsc-cal-slide"'+u(t-1)+'><div role="grid" class="mbsc-cal-table"><div class="mbsc-cal-row">',a=0;a<12;a++)a&&a%3===0&&(e+='</div><div class="mbsc-cal-row">'),e+='<div role="gridcell"'+(1==t?' tabindex="-1" aria-label="'+Qe.monthNames[a]+'" data-val="'+a+'"':"")+' class="mbsc-cal-cell'+(1==t?" mbsc-btn-e":"")+'"><div class="mbsc-cal-cell-i mbsc-cal-cell-txt">'+(1==t?Qe.monthNamesShort[a]:"&nbsp;")+"</div></div>";e+="</div></div></div>"}for(e+="</div></div></div>",e+='<div class="mbsc-cal-year-picker mbsc-cal-picker mbsc-cal-h"><div class="mbsc-cal-scroll-c '+(Qe.calendarClass||"")+'"><div class="mbsc-cal-scroll">',t=-1;t<2;t++)e+=w($(ve,t),t);e+="</div></div></div>"}return e+="</div></div></div>"}function w(e,t){var a,n=Qe.getYear(e),s='<div class="mbsc-cal-slide"'+u(t)+'><div role="grid" class="mbsc-cal-table"><div class="mbsc-cal-row">';for(a=0;a<12;a++)a&&a%3===0&&(s+='</div><div class="mbsc-cal-row">'),s+='<div role="gridcell" tabindex="-1" aria-label="'+n+'" data-val="'+n+'" class="mbsc-cal-cell mbsc-btn-e '+(n<$e||n>Pe?" mbsc-disabled ":"")+(n==Qe.getYear(ve)?pe:"")+'"><div class="mbsc-cal-cell-i mbsc-cal-cell-txt">'+n+ct+"</div></div>",n++;return s+="</div></div></div>"}function _(t,a){var n,s,i,r,o,l,h,m,f,p,b,v,g,y,x,w,T=1,_=0,D=Qe.getYear(t),M=Qe.getMonth(t),C=Qe.getDay(t),k=null!==Qe.defaultValue||e._hasValue?e.getDate(!0):null,S=Qe.getDate(D,M,C).getDay(),V='<div class="mbsc-cal-slide"'+u(a)+'><div role="grid" class="mbsc-cal-table"><div class="mbsc-cal-row">';for(Qe.firstDay-S>0&&(_=7),w=0;w<7*ie;w++)x=w+Qe.firstDay-_,n=Qe.getDate(D,M,x-S+C),i=n.getFullYear(),
r=n.getMonth(),o=n.getDate(),l=Qe.getMonth(n),h=Qe.getDay(n),y=Qe.getMaxDayOfMonth(i,r),m=i+"-"+(r+1)+"-"+o,f=oe({valid:c(n),selected:k&&k.getFullYear()===i&&k.getMonth()===r&&k.getDate()===o},d(n)),p=f.valid,b=f.selected,s=f.cssClass,v=new Date(n).setHours(12,0,0,0)===(new Date).setHours(12,0,0,0),g=l!==M,ge[m]=f,w&&w%7===0&&(V+='</div><div class="mbsc-cal-row">'),st&&w%7===0&&("month"==st&&g&&T>1?T=1==o?1:2:"year"==st&&(T=Qe.getWeekNumber(Qe.getDate(i,r,o+(7-Qe.firstDay+1)%7))),V+='<div role="gridcell" class="mbsc-cal-cell mbsc-cal-week-nr">'+T+"</div>",T++),V+='<div role="gridcell" tabindex="-1" aria-label="'+(v?Qe.todayText+", ":"")+Qe.dayNames[n.getDay()]+", "+Qe.monthNames[l]+" "+h+" "+(f.ariaLabel?", "+f.ariaLabel:"")+'"'+(g&&!et?' aria-hidden="true"':' data-full="'+m+'"')+(b?' aria-selected="true"':"")+(p?"":' aria-disabled="true"')+' class="mbsc-cal-cell mbsc-cal-day mbsc-cal-day'+x%7+" "+(Qe.dayClass||"")+" "+(b?pe:"")+(v?" "+Qe.todayClass:"")+(s?" "+s:"")+(1==h?" mbsc-cal-day-first":"")+(h==y?" mbsc-cal-day-last":"")+(g?" mbsc-cal-day-diff":"")+(p?" mbsc-btn-e":" mbsc-disabled")+(f.marked?" mbsc-cal-day-marked":"")+(f.background?" mbsc-cal-day-colored":"")+'"><div class="mbsc-cal-cell-i mbsc-cal-day-i"><div class="mbsc-cal-day-date mbsc-cal-cell-txt"'+(f.background?' style="background:'+f.background+";color:"+N(f.background)+'"':"")+">"+h+"</div>"+(f.markup||"")+"</div></div>";return V+="</div></div></div>"}function D(e,t,a){var n,s=Qe.getYear(e),i=Qe.getMonth(e),r=ye?ye.pos:0,o="";if(ie)for(t||(tt("onMonthLoading",{year:s,month:i}),tt("onPageLoading",{firstDay:e})),f(e),n=0;n<Je;n++)o+=_(W(e,n-Ze-Ue),r+n-Ue);return je=void 0,a&&ye&&(ye.$scroller.html(o),tt("onMonthLoaded",{year:s,month:i}),tt("onPageLoaded",{firstDay:e})),o}function M(e,t){ye.$active&&ye.$active.attr("tabindex","-1"),ye.$active=ae('.mbsc-cal-slide-a .mbsc-cal-day[data-full="'+e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+'"]',ye.$scroller).attr("tabindex","0"),t&&ye.$active.length&&ye.$active[0].focus()}function k(t){var a=ye&&ye.$scroller;Qe.highlight&&ye&&(ae(".mbsc-selected",a).removeClass(pe).removeAttr("aria-selected"),(null!==Qe.defaultValue||e._hasValue)&&ae('.mbsc-cal-day[data-full="'+t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+'"]',a).addClass(pe).attr("aria-selected","true"))}function S(e,t){ae(".mbsc-selected",t).removeClass(pe).removeAttr("aria-selected"),ae('.mbsc-cal-cell[data-val="'+e+'"]',t).addClass(pe).attr("aria-selected","true")}function V(t,a,n,s){var i,r;t<Fe&&(t=Fe),t>Ae&&(t=Ae),("calendar"===nt||a)&&(we&&ie&&(r=m(O(t)),Be&&(t<W(ve,-Ze)||t>=W(ve,Ge-Ze))&&(i=Se?Qe.getMonth(r)-Qe.getMonth(ve)+12*(Qe.getYear(r)-Qe.getYear(ve)):Math.trunc(Math.round((r-ve)/864e5)/(7*ie)),i&&(ye.queue=[],ye.focus=s&&n,e._isSetDate=!0,I(ye,i,n),e._isSetDate=!1)),i&&n||M(t,s),a||k(t),Se||Y(t,!0),ne=t,Be=!0),e._onSetDate(t,i))}function Y(e,t){var a,n,s,i=Qe.getYear(e),r=Qe.getMonth(e),o=i+ct;if(De){if(S(r,Xe.$scroller),S(i,lt.$scroller),I(lt,Math.floor(i/12)-Math.floor(Qe.getYear(lt.first)/12),!0),ae(".mbsc-cal-cell",Xe.$scroller).removeClass("mbsc-disabled"),i===$e)for(a=0;a<We;a++)ae('.mbsc-cal-cell[data-val="'+a+'"]',Xe.$scroller).addClass("mbsc-disabled");if(i===Pe)for(a=He+1;a<=12;a++)ae('.mbsc-cal-cell[data-val="'+a+'"]',Xe.$scroller).addClass("mbsc-disabled")}for(t||(L(ae(".mbsc-cal-prev-m",G),W(e,-Ze)<=Fe),L(ae(".mbsc-cal-next-m",G),W(e,Ge-Ze)>Ae),L(ae(".mbsc-cal-prev-y",G),Qe.getDate(i-1,r+1,1)<=Fe),L(ae(".mbsc-cal-next-y",G),Qe.getDate(i+1,r,1)>Ae)),ee.attr("aria-label",i).html(o),a=0;a<Ge;a++)e=Qe.getDate(i,r-Ze+a,1),n=Qe.getYear(e),s=Qe.getMonth(e),o=n+ct,Z.eq(a).attr("aria-label",Qe.monthNames[s]+(rt?"":" "+i)).html((!rt&&ot<Re?o+" ":"")+ze[s]+(!rt&&ot>Re?" "+o:""))}function L(e,t){t?e.addClass(fe).attr("aria-disabled","true"):e.removeClass(fe).removeAttr("aria-disabled")}function H(t){var a=e.getDate(!0),n=t.attr("data-full"),s=n?n.split("-"):[],i=y(s[0],s[1]-1,s[2]),r=y(i.getFullYear(),i.getMonth(),i.getDate(),a.getHours(),a.getMinutes(),a.getSeconds()),o=t.hasClass("mbsc-selected");!et&&t.hasClass("mbsc-cal-day-diff")||tt("onDayChange",oe(ge[n],{date:r,target:t[0],selected:o}))===!1||Qe.readonly||t.hasClass("mbsc-disabled")||e._selectDay(t,i,r,o)}function P(e){a(J),V(Qe.getDate(Qe.getYear(ye.first),e.attr("data-val"),1),!0,!0)}function F(e){a(te),V(Qe.getDate(e.attr("data-val"),Qe.getMonth(ye.first),1),!0,!0)}function O(e){var t=Qe.getYear(e),a=Qe.getMonth(e),n=e.getDay(),s=0;return Qe.firstDay-n>0&&(s=7),Se?Qe.getDate(t,a,1):Qe.getDate(t,a,Qe.firstDay-s-n+Qe.getDay(e))}function W(e,t){var a=Qe.getYear(e),n=Qe.getMonth(e),s=Qe.getDay(e);return Se?Qe.getDate(a,n+t,1):Qe.getDate(a,n,s+t*ie*7)}function $(e,t){var a=12*Math.floor(Qe.getYear(e)/12);return Qe.getDate(a+12*t,0,1)}function I(t,a,n,s){a&&e._isVisible&&(t.queue.push(arguments),1==t.queue.length&&q(t,a,n,s))}function q(e,t,a,n){var s,i,r="",o=e.$scroller,l=e.buffer,c=e.offset,d=e.pages,u=e.total,h=e.first,m=e.genPage,f=e.getFirst,p=t>0?Math.min(t,l):Math.max(t,-l),b=e.pos*Ke+p-t+c,v=Math.abs(t)>l;e.callback&&(e.load(),e.callback()),e.first=f(h,t),e.pos+=p*Ke,e.changing=!0,e.load=function(){if(v){for(s=0;s<d;s++)i=t+s-c,r+=m(f(h,i),b+i);t>0?(ae(".mbsc-cal-slide",o).slice(-d).remove(),o.append(r)):t<0&&(ae(".mbsc-cal-slide",o).slice(0,d).remove(),o.prepend(r))}},e.callback=function(){var a=Math.abs(p),r="";for(s=0;s<a;s++)i=t+s-c-l+(t>0?u-a:0),r+=m(f(h,i),b+i);if(t>0?(o.append(r),ae(".mbsc-cal-slide",o).slice(0,p).remove()):t<0&&(o.prepend(r),ae(".mbsc-cal-slide",o).slice(p).remove()),v){for(r="",s=0;s<a;s++)i=t+s-c-l+(t>0?0:u-a),r+=m(f(h,i),b+i);t>0?(ae(".mbsc-cal-slide",o).slice(0,p).remove(),o.prepend(r)):t<0&&(ae(".mbsc-cal-slide",o).slice(p).remove(),o.append(r))}z(e),n&&n(),e.callback=null,e.load=null,e.queue.shift(),v=!1,e.queue.length?q.apply(this,e.queue[0]):(e.changing=!1,e.onAfterChange(e.first))},e.onBeforeChange(e.first),e.load(),e.scroller.scroll(-e.pos*e.size,a?200:0,!1,e.callback)}function R(t,a,n,s,i,r,o,l,c,d,u,h,m){var f=Ye?"Y":"X",b={$scroller:ae(".mbsc-cal-scroll",t),queue:[],buffer:s,offset:i,pages:r,first:l,total:o,pos:0,min:a,max:n,genPage:h,getFirst:m,onBeforeChange:d,onAfterChange:u};return b.scroller=new Le(t,{axis:f,easing:"",contSize:0,maxSnapScroll:s,mousewheel:Qe.mousewheel,time:200,lock:!0,rtl:Ve,stopProp:!1,minScroll:0,maxScroll:0,onBtnTap:function(e){"touchend"==e.domEvent.type&&p(),c(ae(e.target))},onAnimationEnd:function(e){h&&I(b,Math.round((-b.pos*b.size-e["pos"+f])/b.size)*Ke)}}),e._scrollers.push(b.scroller),b}function z(e){var t,a=0,n=0,s=e.first;if(e.getFirst){for(a=e.buffer,n=e.buffer;n&&e.getFirst(s,n+e.pages-e.offset-1)>e.max;)n--;for(;a&&e.getFirst(s,1-a-e.offset)<=e.min;)a--}t=Math.round(re/e.pages),ke&&e.size!=t&&e.$scroller[Ye?"height":"width"](t),oe(e.scroller.settings,{snap:t,minScroll:(-e.pos*Ke-n)*t,maxScroll:(-e.pos*Ke+a)*t}),e.size=t,e.scroller.refresh()}function X(t){e._isVisible&&we&&ie&&(ye&&ye.changing?je=t:D(ve,t,!0)),e._onRefresh(t)}function B(){if(we&&ie){var t=ae(".mbsc-cal-scroll-c",G);ye=R(t[0],Fe,Ae,Ue,Ze,Ge,Je,ve,H,b,v,_,W),De&&(Xe=R(t[1],null,null,1,0,1,3,ve,P),lt=R(t[2],Oe,Ee,1,0,1,3,ve,F,l,l,w,$),e.tap(Z,function(){n(J),a(te)}),e.tap(ee,function(){n(te),a(J)})),A(ae(".mbsc-cal-btn",G),function(e,t,a){I(ye,t,!0,a)}),v(ve),null===Qe.defaultValue&&!e._hasValue||e._multiple||(e._activeElm=ye.$active[0]),U.on("keydown",function(e){var t,a=Qe.getYear(ne),n=Qe.getMonth(ne),s=Qe.getDay(ne);switch(e.keyCode){case 32:H(ye.$active);break;case 37:t=Qe.getDate(a,n,s-1);break;case 39:t=Qe.getDate(a,n,s+1);break;case 38:t=Qe.getDate(a,n,s-7);break;case 40:t=Qe.getDate(a,n,s+7);break;case 36:t=Qe.getDate(a,n,1);break;case 35:t=Qe.getDate(a,n+1,0);break;case 33:t=e.altKey?Qe.getDate(a-1,n,s):Se?Qe.getDate(a,n-1,s):Qe.getDate(a,n,s-7*ie);break;case 34:t=e.altKey?Qe.getDate(a+1,n,s):Se?Qe.getDate(a,n+1,s):Qe.getDate(a,n,s+7*ie)}t&&(e.preventDefault(),V(t,!0,!1,!0))})}e.tap(ae(".mbsc-cal-tab",G),function(){e.changeTab(ae(this).attr("data-control"))})}var j,U,G,Z,J,K,Q,ee,te,ne,se,ie,re,le,ce,de,me,fe,pe,be,ve,ge,ye,xe,we,Te,_e,De,Me,Ce,ke,Se,Ve,Ye,Ne,Ae,Ee,He,Pe,Fe,Oe,We,$e,Re,ze,Xe,Be,je,Ue,Ge,Ze,Je,Ke,Qe,et,tt,at,nt,st,it,rt,ot,lt,ct,dt=this;return s(),se=Ie.call(this,e),i(),e.refresh=function(){X(!1)},e.redraw=function(){X(!0)},e.navigate=function(e,t){V(e,!0,t)},e.changeTab=function(t){e._isVisible&&de[t]&&nt!=t&&(nt=t,ae(".mbsc-cal-tab",G).removeClass(be).removeAttr("aria-selected"),ae('.mbsc-cal-tab[data-control="'+t+'"]',G).addClass(be).attr("aria-selected","true"),Q.addClass("mbsc-cal-h"),de[nt].removeClass("mbsc-cal-h"),"calendar"==nt&&V(e.getDate(!0),!1,!0),e._showDayPicker(),e.trigger("onTabChange",{tab:nt}))},e._onGenMonth=l,e._onSelectShow=l,e._onSetDate=l,e._onRefresh=l,e._getDayProps=l,e._prepareObj=o,e._showDayPicker=function(){De&&(a(te,!0),a(J,!0))},e._selectDay=e.__selectDay=function(t,a,n){var s=e.live;Be=Qe.outerMonthChange,Ce=!0,e.setDate(n,s,1e3,!s,!0),s&&tt("onSet",{valueText:e._value})},oe(se,{labels:null,compClass:"mbsc-calendar mbsc-dt mbsc-sc",onMarkupReady:function(t){var a=0;G=ae(t.target),K=ae(".mbsc-fr-c",G),ge={},ne=e.getDate(!0),we&&(Te=!(!Qe.marked&&!Qe.data),_e=Qe.showEventCount||!(!Qe.events&&!Qe.labels),Be=!0,nt="calendar",h(),ve=m(O(ne)),K.append(x()),Z=ae(".mbsc-cal-month",G),ee=ae(".mbsc-cal-year",G),U=ae(".mbsc-cal-day-scroll-c",G)),De&&(te=ae(".mbsc-cal-year-picker",G),J=ae(".mbsc-cal-month-picker",G)),Q=ae(".mbsc-w-p",G),me.length>1&&K.before(g()),["date","time","calendar"].forEach(function(e){de[e]?(de[e]=Q.eq(a).addClass("mbsc-cal-h"),a++):"date"==e&&!de.date&&we&&(Q.eq(a).remove(),a++)}),me.forEach(function(e){K.append(de[e])}),!we&&de.date&&de.date.css("position","relative"),e._scrollers=[],B()},onShow:function(){we&&ie&&Y(Se?ve:ne)},onHide:function(){e._scrollers.forEach(function(e){e.destroy()}),ye=null,Xe=null,lt=null,nt=null},onValidated:function(t){var a,n,s=t.index,i=e._order;n=e.getDate(!0),Ce?a="calendar":void 0!==s&&(a=i.dd==s||i.d==s||i.m==s||i.y==s?"date":"time"),tt("onSetDate",{date:n,control:a}),"time"!==a&&V(n,!1,!!t.time,Ce&&!e._multiple),Ce=!1},onPosition:function(t){var a,n,s,i,r=t.windowHeight,o=(t.hasTabs||Qe.tabs===!0||Qe.tabs!==!1&&ke)&&me.length>1;if(ke&&(t.windowWidth>=Qe.breakPointMd?ae(t.target).addClass("mbsc-fr-md"):ae(t.target).removeClass("mbsc-fr-md")),o?(G.addClass("mbsc-cal-tabbed"),nt=ae(".mbsc-cal-tab.mbsc-selected",G).attr("data-control"),Q.addClass("mbsc-cal-h"),de[nt].removeClass("mbsc-cal-h")):(nt="calendar",G.removeClass("mbsc-cal-tabbed"),Q.removeClass("mbsc-cal-h")),e._isFullScreen&&(U.height(""),i=t.popup.offsetHeight,r>=i&&U.height(r-i+U[0].offsetHeight)),we&&ie){if((ke||Ye||o)&&(re=U[0][Ye?"offsetHeight":"offsetWidth"]),ke&&rt)for(ze=Qe.maxMonthWidth>Z[0].offsetWidth?Qe.monthNamesShort:Qe.monthNames,n=Qe.getYear(ve),s=Qe.getMonth(ve),a=0;a<Ge;a++)Z.eq(a).text(ze[Qe.getMonth(Qe.getDate(n,s-Ze+a,1))]);z(ye)}De&&(z(Xe),z(lt))}})},ze={autoCorrect:!0,showSelector:!0,minRange:1,rangeTap:!0,fromText:"Start",toText:"End"};He.range=function(e){function t(e,t){e&&(e.setFullYear(t.getFullYear()),e.setMonth(t.getMonth()),e.setDate(t.getDate()))}function a(t,a){var n=e._order,s=new Date(t);return void 0===n.h&&s.setHours(a?23:0),void 0===n.i&&s.setMinutes(a?59:0),void 0===n.s&&s.setSeconds(a?59:0),s.setMilliseconds(a?999:0),s}function n(t){e._startDate=E=D,e._endDate=L=S,O.startInput&&(ae(O.startInput).val(e.startVal),t&&ae(O.startInput).trigger("change")),O.endInput&&(ae(O.endInput).val(e.endVal),t&&ae(O.endInput).trigger("change"))}function s(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+t)}function i(e){v?(S-D>O.maxRange-1&&(e?D=new Date(Math.max(T,S-O.maxRange+1)):S=new Date(Math.min(y,+D+O.maxRange-1))),S-D<O.minRange-1&&(e?D=new Date(Math.max(T,S-O.minRange+1)):S=new Date(Math.min(y,+D+O.minRange-1)))):(Math.ceil((S-D)/I)>R&&(e?D=a(Math.max(T,s(S,1-R)),!1):S=a(Math.min(y,s(D,R-1)),!0)),Math.ceil((S-D)/I)<q&&(e?D=a(Math.max(T,s(S,1-q)),!1):S=a(Math.min(y,s(D,q-1)),!0)))}function r(e,t){var a=!0;return e&&D&&S&&(i(H),i(!H)),D&&S||(a=!1),t&&d(),a}function o(){return D&&S?Math.max(1,Math.round((new Date(S).setHours(0,0,0,0)-new Date(D).setHours(0,0,0,0))/864e5)+1):0}function l(e){e.addClass(X).attr("aria-checked","true")}function c(){A&&f&&(ae(".mbsc-range-btn",f).removeClass(X).removeAttr("aria-checked"),l(ae(".mbsc-range-btn",f).eq(H)))}function d(){var t,a,n,s,i,r=0,o=$||!H?" mbsc-cal-day-hl mbsc-cal-sel-start":" mbsc-cal-sel-start",l=$||H?" mbsc-cal-day-hl mbsc-cal-sel-end":" mbsc-cal-sel-end";if(e.startVal=D?x(b,D,O):"",e.endVal=S?x(b,S,O):"",f&&(ae(".mbsc-range-btn-v-start",f).html(e.startVal||"&nbsp;"),ae(".mbsc-range-btn-v-end",f).html(e.endVal||"&nbsp;"),t=D?new Date(D):null,n=S?new Date(S):null,!t&&n&&(t=new Date(n)),!n&&t&&(n=new Date(t)),i=H?n:t,ae(".mbsc-cal-day-picker .mbsc-cal-day-hl",f).removeClass(B),ae(".mbsc-cal-day-picker .mbsc-selected",f).removeClass("mbsc-cal-sel-start mbsc-cal-sel-end "+X).removeAttr("aria-selected"),t&&n))for(a=t.setHours(0,0,0,0),s=n.setHours(0,0,0,0);n>=t&&r<126;)ae('.mbsc-cal-day[data-full="'+i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate()+'"]',f).addClass(X+" "+(i.getTime()===a?o:"")+(i.getTime()===s?l:"")).attr("aria-selected","true"),i.setDate(i.getDate()+(H?-1:1)),r++}function u(e,t){return{h:e?e.getHours():t?23:0,i:e?e.getMinutes():t?59:0,s:e?e.getSeconds():t?59:0}}function h(){D&&(g=!0,e.setDate(D,!1,0,!0),D=e.getDate(!0)),S&&(g=!0,e.setDate(S,!1,0,!0),S=e.getDate(!0))}var m,f,p,b,v,g,y,T,_,D,k,S,Y,N,A,E=e._startDate,L=e._endDate,H=0,P=new Date,F=oe({},e.settings),O=oe(e.settings,ze,F),W=O.anchor,$=O.rangeTap,I=864e5,q=Math.max(1,Math.ceil(O.minRange/I)),R=Math.max(1,Math.ceil(O.maxRange/I)),z="mbsc-disabled "+(O.disabledClass||""),X="mbsc-selected "+(O.selectedClass||""),B="mbsc-cal-day-hl",j=null===O.defaultValue?[]:O.defaultValue||[new Date(P.setHours(0,0,0,0)),new Date(P.getFullYear(),P.getMonth(),P.getDate()+6,23,59,59,999)];return $&&(O.tabs=!0),m=Re.call(this,e),b=e._format,v=/time/i.test(O.controls.join(",")),N="time"===O.controls.join(""),A=1!=O.controls.length||"calendar"!=O.controls[0]||O.showSelector,y=O.max?a(C(O.max,b,O),!0):1/0,T=O.min?a(C(O.min,b,O),!1):-(1/0),j[0]=C(j[0],b,O,O.isoParts),j[1]=C(j[1],b,O,O.isoParts),O.startInput&&e.attachShow(ae(O.startInput),function(){H=0,O.anchor=W||ae(O.startInput)}),O.endInput&&e.attachShow(ae(O.endInput),function(){H=1,O.anchor=W||ae(O.endInput)}),e._getDayProps=function(e,t){var a=D?new Date(D.getFullYear(),D.getMonth(),D.getDate()):null,n=S?new Date(S.getFullYear(),S.getMonth(),S.getDate()):null;return{selected:a&&n&&e>=a&&e<=S,cssClass:t.cssClass+" "+(($||!H)&&a&&a.getTime()===e.getTime()||($||H)&&n&&n.getTime()===e.getTime()?B:"")+(a&&a.getTime()===e.getTime()?" mbsc-cal-sel-start":"")+(n&&n.getTime()===e.getTime()?" mbsc-cal-sel-end":"")}},e.setVal=function(t,a,n,s,i){var r=t||[],o=t;_=!0,D=C(r[0],b,O,O.isoParts),S=C(r[1],b,O,O.isoParts),h(),e.startVal=D?x(b,D,O):"",e.endVal=S?x(b,S,O):"",o=m.parseValue(H?S:D,e),s||(e._startDate=E=D,e._endDate=L=S),e._setVal(o,a,n,s,i)},e.getVal=function(t){return t?[M(D,O,b),M(S,O,b)]:e._hasValue?[M(E,O,b),M(L,O,b)]:null},e.setActiveDate=function(t){var a;H="start"==t?0:1,a="start"==t?D:S,e.isVisible()&&(c(),$||(ae(".mbsc-cal-table .mbsc-cal-day-hl",f).removeClass(B),a&&ae('.mbsc-cal-day[data-full="'+a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()+'"]',f).addClass(B)),a&&(g=!0,e.setDate(a,!1,1e3,!0)))},e.getValue=e.getVal,oe({},m,{highlight:!1,outerMonthChange:!1,formatValue:function(){return e.startVal+(O.endInput?"":e.endVal?" - "+e.endVal:"")},parseValue:function(t){var a=t?t.split(" - "):[];return O.defaultValue=j[1],L=w(b,O.endInput?ae(O.endInput).val():a[1],O),O.defaultValue=j[0],E=w(b,O.startInput?ae(O.startInput).val():a[0],O),O.defaultValue=j[H],e.startVal=E?x(b,E,O):"",e.endVal=L?x(b,L,O):"",e._startDate=E,e._endDate=L,m.parseValue(H?L:E,e)},onFill:function(e){n(e.change)},onBeforeClose:function(t){if("set"===t.button&&!r(!0,!0))return e.setActiveDate(H?"start":"end"),!1},onHide:function(){m.onHide.call(e),H=0,f=null,O.anchor=W},onClear:function(){$&&(H=0)},onBeforeShow:function(){D=E||j[0],S=L||j[1],k=u(D,0),Y=u(S,1),O.counter&&(O.headerText=function(){var e=o();return(e>1?O.selectedPluralText||O.selectedText:O.selectedText).replace(/{count}/,e)}),_=!0},onMarkupReady:function(t){var a;h(),(H&&S||!H&&D)&&(g=!0,e.setDate(H?S:D,!1,0,!0)),d(),m.onMarkupReady.call(this,t),f=ae(t.target),f.addClass("mbsc-range"),A&&(a='<div class="mbsc-range-btn-t" role="radiogroup"><div class="mbsc-range-btn-c mbsc-range-btn-start"><div role="radio" data-select="start" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">'+O.fromText+'<div class="mbsc-range-btn-v mbsc-range-btn-v-start">'+(e.startVal||"&nbsp;")+'</div></div></div><div class="mbsc-range-btn-c mbsc-range-btn-end"><div role="radio" data-select="end" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">'+O.toText+'<div class="mbsc-range-btn-v mbsc-range-btn-v-end">'+(e.endVal||"&nbsp;")+"</div></div></div></div>",O.headerText?ae(".mbsc-fr-hdr",f).after(a):ae(".mbsc-fr-w",f).prepend(a),c()),ae(".mbsc-range-btn",f).on("touchstart click",function(t){V(t,this)&&(e._showDayPicker(),e.setActiveDate(ae(this).attr("data-select")))})},onDayChange:function(e){e.active=H?"end":"start",p=!0},onSetDate:function(n){var s;g||(s=a(n.date,H),_&&!p||($&&p&&(1==H&&s<D&&(H=0),H?s.setHours(Y.h,Y.i,Y.s,999):s.setHours(k.h,k.i,k.s,0)),H?(S=new Date(s),Y=u(S)):(D=new Date(s),k=u(D)),N&&O.autoCorrect&&(t(D,s),t(S,s)),$&&p&&!H&&(S=null))),N&&!O.autoCorrect&&S<D&&(S=new Date(S.setDate(S.getDate()+1))),e._isValid=r(_||p||O.autoCorrect,!g),n.active=H?"end":"start",!g&&$&&(p&&(H=H?0:1),c()),e.isVisible()&&(e._isValid?ae(".mbsc-fr-btn-s .mbsc-fr-btn",e._markup).removeClass(z):ae(".mbsc-fr-btn-s .mbsc-fr-btn",e._markup).addClass(z)),p=!1,_=!1,g=!1},onTabChange:function(t){"calendar"!=t.tab&&e.setDate(H?S:D,!1,1e3,!0),r(!0,!0)}})},o("range",We),L.i18n.zh={setText:"确定",cancelText:"取消",clearText:"明确",selectedText:"{count} 选",dateFormat:"yy/mm/dd",dayNames:["周日","周一","周二","周三","周四","周五","周六"],dayNamesShort:["日","一","二","三","四","五","六"],dayNamesMin:["日","一","二","三","四","五","六"],dayText:"日",hourText:"时",minuteText:"分",monthNames:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],monthNamesShort:["一","二","三","四","五","六","七","八","九","十","十一","十二"],monthText:"月",secText:"秒",timeFormat:"HH:ii",yearText:"年",nowText:"当前",pmText:"下午",amText:"上午",todayText:"今天",dateText:"日",timeText:"时间",closeText:"关闭",allDayText:"全天",noEventsText:"无事件",eventText:"活动",eventsText:"活动",fromText:"开始时间",toText:"结束时间",wholeText:"合计",fractionText:"分数",unitText:"单位",labels:["年","月","日","小时","分钟","秒",""],labelsShort:["年","月","日","点","分","秒",""],startText:"开始",stopText:"停止",resetText:"重置",lapText:"圈",hideText:"隐藏",backText:"返回",undoText:"复原",offText:"关闭",onText:"开启",decimalSeparator:",",thousandsSeparator:" "},L.i18n.ja={setText:"セット",cancelText:"キャンセル",clearText:"クリア",selectedText:"{count} 選択",dateFormat:"yy年mm月dd日",dayNames:["日","月","火","水","木","金","土"],dayNamesShort:["日","月","火","水","木","金","土"],dayNamesMin:["日","月","火","水","木","金","土"],dayText:"日",hourText:"時",minuteText:"分",monthNames:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],monthNamesShort:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],monthText:"月",secText:"秒",timeFormat:"HH:ii",yearText:"年",nowText:"今",pmText:"午後",amText:"午前",yearSuffix:"年",monthSuffix:"月",daySuffix:"日",todayText:"今日",dateText:"日付",timeText:"時間",closeText:"クローズ",allDayText:"終日",noEventsText:"イベントはありません",eventText:"イベント",eventsText:"イベント",fromText:"開始",toText:"終わり",wholeText:"全数",fractionText:"分数",unitText:"単位",labels:["年間","月間","日間","時間","分","秒",""],labelsShort:["年間","月間","日間","時間","分","秒",""],startText:"開始",stopText:"停止",resetText:"リセット",lapText:"ラップ",hideText:"隠す",backText:"バック",undoText:"アンドゥ"},L.i18n.ko={setText:"설정",cancelText:"취소",clearText:"삭제",selectedText:"{count} 선택된",dateFormat:"yy-mm-dd",dayNames:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],dayNamesShort:["일","월","화","수","목","금","토"],dayNamesMin:["일","월","화","수","목","금","토"],dayText:"일",delimiter:"-",hourText:"시간",minuteText:"분",monthNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],monthNamesShort:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],monthText:"달",secText:"초",timeFormat:"H:ii",yearText:"년",nowText:"지금",pmText:"오후",amText:"오전",firstDay:0,dateText:"날짜",timeText:"시간",todayText:"오늘",prevMonthText:"이전 달",nextMonthText:"다음 달",prevYearText:"이전 년",nextYearText:"다음 년",closeText:"닫기",eventText:"이벤트",eventsText:"이벤트",allDayText:"종일",noEventsText:"이벤트 없음",fromText:"시작",toText:"종료",wholeText:"정수",fractionText:"분수",unitText:"단위",labels:["년","달","일","시간","분","초",""],labelsShort:["년","달","일","시간","분","초",""],startText:"시작",stopText:"중지 ",resetText:"초기화",lapText:"기록",hideText:"숨는 장소",backText:"뒤로",undoText:"실행취소",offText:"끔",onText:"켬",decimalSeparator:",",thousandsSeparator:" "},L.i18n.th={setText:"ตั้งค่า",cancelText:"ยกเลิก",clearText:"ล้าง",selectedText:"{count} เลือก",dateFormat:"dd/mm/yy",dayNames:["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],dayNamesShort:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],dayNamesMin:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],dayText:"วัน",delimiter:".",hourText:"ชั่วโมง",minuteText:"นาที",monthNames:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],monthNamesShort:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],monthText:"เดือน",secText:"วินาที",timeFormat:"HH:ii",yearText:"ปี",nowText:"ตอนนี้",pmText:"pm",amText:"am",firstDay:0,dateText:"วัน",timeText:"เวลา",today:"วันนี้",prevMonthText:"เดือนก่อนหน้า",nextMonthText:"เดือนถัดไป",prevYearText:"ปีก่อนหน้า",nextYearText:"ปีถัดไป",closeText:"ปิด",eventText:"เหตุการณ์",eventsText:"เหตุการณ์",allDayText:"ตลอดวัน",noEventsText:"ไม่มีกิจกรรม",fromText:"จาก",toText:"ถึง",wholeText:"ทั้งหมด",fractionText:"เศษส่วน",unitText:"หน่วย",labels:["ปี","เดือน","วัน","ชั่วโมง","นาที","วินาที",""],labelsShort:["ปี","เดือน","วัน","ชั่วโมง","นาที","วินาที",""],startText:"เริ่ม",stopText:"หยุด",resetText:"รีเซ็ต",lapText:"รอบ",hideText:"ซ่อน",backText:"ย้อนกลับ",undoText:"เลิกทา",offText:"ปิด",onText:"เปิด",decimalSeparator:",",thousandsSeparator:" "},L.customTheme("mobiscroll-dark","mobiscroll");var Xe=L.themes,Be=void 0;return"android"==R?Be="material":"ios"==R?Be="ios":"wp"==R&&(Be="windows"),ae.each(Xe.frame,function(e,t){return Be&&t.baseTheme==Be&&"material-dark"!=e&&"windows-dark"!=e&&"ios-dark"!=e?(L.autoTheme=e,!1):void(e==Be&&(L.autoTheme=e))}),L.uid="1664f95d",L});

var UniversalTracking = {
    Constants: {
        Domain: "http://www.mystays.com",
        TrackingCode: null,
        SitecoreWhiteList: ["www.mystays", "dev.mystays", "mystays9.local", "mystays.local", "villagehouse", "solaniwa", "mspnarita", "osaka-baytower", "art-oita", "art-aomori"],
        SitecoreBookingWidgetAPI: '/ajax/core/UniversalTrackingSitecore/TrackEvent',
        ExternalBookingWidgetAPI: '/api/core/UniversalTrackingExternal/TrackEvent',
        UpdateConversionAPI: '/api/core/UniversalTrackingExternal/UpdateConversion',
        BookingWidgetAPI: null
    },
    HelperMethods: {
        //Function to make an ajax call
        AjaxCall: function (url, data, method, synchronous, successCallBack, failureCallBack) {
            if (window.XMLHttpRequest) {
                // code for modern browsers
                xmlhttpReq = new window.XMLHttpRequest();
            } else {
                // code for old IE browsers
                xmlhttpReq = new ActiveXObject("Microsoft.XMLHTTP");
            }


            //xmlhttpReq.addEventListener("load", successCallBack);
            //xmlhttpReq.addEventListener("error", failureCallBack);

            xmlhttpReq.onreadystatechange = function () {
                if (xmlhttpReq.readyState = XMLHttpRequest.DONE) {

                    //Set tracker code for ajax calls
                    UniversalTracking.HelperMethods.SetTrackingCode(xmlhttpReq.responseText);
                    if (successCallBack != null) {
                        successCallBack();
                    }

                }
            };
            xmlhttpReq.open(method, url, !synchronous);

            if (data) {
                xmlhttpReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                xmlhttpReq.send(data);
            } else {
                xmlhttpReq.send();
            }

        },
        GetLocalDate: function GetLocalDate(localdate) {
            if ((localdate instanceof Date) != true) {
                return localdate;
            } else {
                return (localdate.getFullYear() + "-" + (localdate.getMonth() + 1) + "-" + localdate.getDate());
            }
        },
        GetCookie: function (cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) === 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        },
        GetMainDomain: function () {
            if (window.location.host.indexOf('local') > 0) {
                return window.location.host;
            } else {
                var separate = window.location.host.split('.');
                separate.shift();
                var mainDomain = separate.join('.');
                return mainDomain;
            }
        },
        SetCookie: function SetCookie(cookiename, cvalue, days) {
            var d = new Date();
            d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = d.toUTCString();
            var mainDomain = UniversalTracking.HelperMethods.GetMainDomain();
            document.cookie = cookiename + "=" + cvalue + ";expires=" + expires + ";path=/" + ";domain=." + mainDomain;
        },
        SetTrackingCode: function (trackingCode) {
            if (trackingCode.toLowerCase().indexOf("universaltrackingcode") > 0) {
                var MystaysContact = JSON.parse(trackingCode);

                if (MystaysContact.UniversalTrackingCode != "00000000-0000-0000-0000-000000000000" && MystaysContact.universalTrackingCode != "00000000-0000-0000-0000-000000000000") {
                    if (MystaysContact.UniversalTrackingCode != null) {
                        UniversalTracking.HelperMethods.SetCookie("MystaysUniversalTrackingCode", MystaysContact.UniversalTrackingCode, 0.05);
                        UniversalTracking.Constants.TrackingCode = MystaysContact.UniversalTrackingCode;
                    } else {
                        UniversalTracking.HelperMethods.SetCookie("MystaysUniversalTrackingCode", MystaysContact.universalTrackingCode, 0.05);
                        UniversalTracking.Constants.TrackingCode = MystaysContact.universalTrackingCode;
                    }
                }



                //Only update the ContactID if the cookie isnt present

                if (MystaysContact.ContactID != null) {
                    UniversalTracking.HelperMethods.SetCookie("MystaysUniversalExternalContact", MystaysContact.ContactID, 30);
                } else {
                    UniversalTracking.HelperMethods.SetCookie("MystaysUniversalExternalContact", MystaysContact.contactID, 30);
                }

                //Set variable used in other JS files to read the values
                if (MystaysContact.ContactID != null) {
                    UniversalTracking.Constants.ContactID = MystaysContact.ContactID;
                } else {
                    UniversalTracking.Constants.ContactID = MystaysContact.contactID;
                }

            }
        },

    },
    Tracking: {
        FireEvent: function (requestType, valueCallback, languageCode, successCallBack) {

            if (languageCode === 'en') {
                languageCode = 'en-us';
            }
            languageCode = languageCode.toLowerCase().replace('-', '_');
            var valueData = null;
            if (typeof valueCallback === 'function') {
                valueData = valueCallback();
            } else {
                valueData = valueCallback;
            }
            if (UniversalTracking.Constants.BookingWidgetAPI.indexOf("api") < 0) {
                var requestBody = {
                    "TrackRequest": {
                        "RequestType": requestType,
                        "EventValue": valueData,
                        "Domain": document.location.host,
                        "PageUrl": document.location.href,
                        "ReferrerUrl": document.referrer,
                        "LanguageCode": languageCode
                    }
                };
            } else {
                var requestBody = {
                    "RequestType": requestType,
                    "EventValue": valueData,
                    "Domain": document.location.host,
                    "PageUrl": document.location.href,
                    "ReferrerUrl": document.referrer,
                    "LanguageCode": languageCode
                };
            }


            UniversalTracking.HelperMethods.AjaxCall(UniversalTracking.Constants.Domain + UniversalTracking.Constants.BookingWidgetAPI + '?sc_lang=' + languageCode, JSON.stringify(requestBody), 'POST', false, successCallBack, null);
        },
        FireBookingWidgetClick: function (valueCallback, bookingwidgetObject, languageCode, requestType, successCallBack) {
            try {

                //Return if the search is not successful and the input text is blank
                if (!bookingwidgetObject.IsSuccessfulSearch && (bookingwidgetObject.BookingWidgetSearchText === '' || bookingwidgetObject.BookingWidgetSearchText === null)) {
                    return false;
                }

                if (languageCode === 'en') {
                    languageCode = 'en-us';
                }

                languageCode = languageCode.toLowerCase().replace('-', '_');

                var valueData = null;
                if (typeof valueCallback === 'function') {
                    valueData = valueCallback();
                } else {
                    valueData = valueCallback;
                }

                if (bookingwidgetObject === null) {
                    console.log('bookingwidgetObject not assigned');
                    throw 'bookingwidgetObject not assigned';
                }

                if (UniversalTracking.Constants.BookingWidgetAPI.indexOf("api") < 0) {
                    var requestBody = {
                        "TrackRequest": {
                            "RequestType": requestType,
                            "EventValue": valueData,
                            "Domain": document.location.host,
                            "PageUrl": document.location.href,
                            "ReferrerUrl": document.referrer,
                            "LanguageCode": languageCode,
                            "IsSuccessfulSearch": bookingwidgetObject.IsSuccessfulSearch,
                            "BookingWidgetItemID": bookingwidgetObject.BookingWidgetItemID,
                            "BookingWidgetSearchText": bookingwidgetObject.BookingWidgetSearchText,
                            "BookingWidgetStartDate": UniversalTracking.HelperMethods.GetLocalDate(bookingwidgetObject.BookingWidgetStartDate),
                            "BookingWidgetEndDate": UniversalTracking.HelperMethods.GetLocalDate(bookingwidgetObject.BookingWidgetEndDate),
                            "BookingWidgetRooms": bookingwidgetObject.BookingWidgetRooms,
                            "BookingWidgetAdults": bookingwidgetObject.BookingWidgetAdults,
                            "BookingWidgetChildren": bookingwidgetObject.BookingWidgetChildren,
                            "BookingWidgetChildrenHigher": bookingwidgetObject.BookingWidgetChildrenHigher,
                            "BookingWidgetChildrenLower": bookingwidgetObject.BookingWidgetChildrenLower,
                            "BookingWidgetChildrenInfant": bookingwidgetObject.BookingWidgetChildrenInfant,
                            "BookingWidgetPromoCode": bookingwidgetObject.BookingWidgetPromoCode,
                            "BookingWidgetRoomCode": bookingwidgetObject.BookingWidgetRoomCode,
                            "ContactExternal": bookingwidgetObject.ContactExternal
                        }
                    };
                } else {
                    var requestBody = {
                        "RequestType": requestType,
                        "EventValue": valueData,
                        "Domain": document.location.host,
                        "PageUrl": document.location.href,
                        "ReferrerUrl": document.referrer,
                        "LanguageCode": languageCode,
                        "IsSuccessfulSearch": bookingwidgetObject.IsSuccessfulSearch,
                        "BookingWidgetItemID": bookingwidgetObject.BookingWidgetItemID,
                        "BookingWidgetSearchText": bookingwidgetObject.BookingWidgetSearchText,
                        "BookingWidgetStartDate": UniversalTracking.HelperMethods.GetLocalDate(bookingwidgetObject.BookingWidgetStartDate),
                        "BookingWidgetEndDate": UniversalTracking.HelperMethods.GetLocalDate(bookingwidgetObject.BookingWidgetEndDate),
                        "BookingWidgetRooms": bookingwidgetObject.BookingWidgetRooms,
                        "BookingWidgetAdults": bookingwidgetObject.BookingWidgetAdults,
                        "BookingWidgetChildren": bookingwidgetObject.BookingWidgetChildren,
                        "BookingWidgetChildrenHigher": bookingwidgetObject.BookingWidgetChildrenHigher,
                        "BookingWidgetChildrenLower": bookingwidgetObject.BookingWidgetChildrenLower,
                        "BookingWidgetChildrenInfant": bookingwidgetObject.BookingWidgetChildrenInfant,
                        "BookingWidgetPromoCode": bookingwidgetObject.BookingWidgetPromoCode,
                        "BookingWidgetRoomCode": bookingwidgetObject.BookingWidgetRoomCode,
                        "ContactExternal": bookingwidgetObject.ContactExternal
                    };
                }



                UniversalTracking.HelperMethods.AjaxCall(UniversalTracking.Constants.Domain + UniversalTracking.Constants.BookingWidgetAPI + '?sc_lang=' + languageCode, JSON.stringify(requestBody), 'POST', true, successCallBack, null);
            } catch (e) {
                console.log(e);
            }

        },
        UpdateConversion: function UpdateConversion(requestData) {
            try {
                console.log(document.cookie);
                if (languageCode === 'en') {
                    languageCode = 'en-us';
                }
                UniversalTracking.HelperMethods.AjaxCall(UniversalTracking.Constants.Domain + UniversalTracking.Constants.Domain + UniversalTracking.Constants.UpdateConversionAPI + '?sc_lang=ja-jp', requestData, 'POST', true, null, null);
            } catch (e) {
                console.log(e);
            }
        }
    }

}


//Check sitecore domain
UniversalTracking.Constants.Domain = 'https://www.mystays.com';


UniversalTracking.Constants.BookingWidgetAPI = UniversalTracking.Constants.ExternalBookingWidgetAPI;

//This javascript file contains methods used by the booking widget
var MystaysBookingWidget = {

    //Contains all the methods that are used throughout the module
    Common: {
        //Array to hold all the booking widgets
        MystaysRangeArray: [],
		
		LanguageTranslation : [],

        //A variable used to hold the event target when user performs any event(This variable  is used to distingish if the event occured in the first or the second booking widget)
        CurrentEventTarget: null,


        //The language used in the widget
        SelectedLanguage: null,

        //Used to store the original ID of the container for the booking widget
        BookingWidgetContainerID: null,

        Constants: {
            HotelPageContainer: function HotelPageContainer() {
                return '.mys-be-inner-page';
            },

            //Function to identify if the first widget has been selected on the hotel page
            HotelPageFirstWidget: function HotelPageFirstWidget() {
                return MystaysBookingWidget.Helper.ClosestElement(MystaysBookingWidget.Common.CurrentEventTarget, 'mys-be-inner-page');
            },
            CheckinDateCookie: 'datecheckinsearch',
            CheckoutDateCookie: 'datecheckoutsearch',
        },

        //**This method is used to identify the correct container or booking widget by using the value in the 'MystaysBookingWidget.Common.CurrentEventTarget
        BookingWidgetContainer: function () {
            if (MystaysBookingWidget.Common.CurrentEventTarget != null) {
                var bookingWidget = MystaysBookingWidget.Helper.ClosestElement(MystaysBookingWidget.Common.CurrentEventTarget, 'booking-widget-container');
                if (bookingWidget) {
                    return '#' + bookingWidget.id + ' ';
                } else {
                    return 'body ';
                }
            } else {
                return MystaysBookingWidget.Common.BookingWidgetContainerID;
            }
        },

        //Identifying the correct range object based on the MystaysBookingWidget.Common.BookingWidgetContainer()
        CurrentRangeObject: function CurrentRangeObject() {
            var container = MystaysBookingWidget.Common.BookingWidgetContainer();

            for (var i = 0; i < MystaysBookingWidget.Common.MystaysRangeArray.length; i++) {
                if (MystaysBookingWidget.Common.MystaysRangeArray[i].settings.context.indexOf(MystaysBookingWidget.Common.BookingWidgetContainer()) > -1) {
                    return MystaysBookingWidget.Common.MystaysRangeArray[i];
                }
            }
        },

        //Method to identify the container element
        BookingWidgetContainerElement: function BookingWidgetContainerElement() {
            if (MystaysBookingWidget.Common.BookingWidgetContainer() === '') {
                return document;
            }
            return document.getElementById(MystaysBookingWidget.Common.BookingWidgetContainer().replace('#', '').replace(' ', ''));
        },

        //Method to identify distance to be moved based on element position
        GetPositionToTop: function GetPositionToTop(element) {
            var currentPosition = element.getBoundingClientRect().y;
            return currentPosition + window.pageYOffset - 20;
        },

        

        


        //Function to make an ajax call
        AjaxCall: function AjaxCall(url, data, method, synchronous, successCallBack, failureCallBack) {
            if (window.XMLHttpRequest) {
                // code for modern browsers
                xmlhttpReq = new XMLHttpRequest();
            } else {
                // code for old IE browsers
                xmlhttpReq = new ActiveXObject("Microsoft.XMLHTTP");
            }


            //xmlhttpReq.addEventListener("load", successCallBack);
            xmlhttpReq.addEventListener("error", failureCallBack);

            xmlhttpReq.onreadystatechange = function () {
                if (xmlhttpReq.readyState == XMLHttpRequest.DONE) {
                    //alert(xhr.responseText);
                    successCallBack(xmlhttpReq.responseText)
                }
            }
            xmlhttpReq.open(method, url, !synchronous);

            if (data) {
                xmlhttpReq.send(data);
            } else {
                xmlhttpReq.send();
            }

        },
        
        //Function to update all the booking widgets with a start and end date
        UpdateAllBookingWidgetsOnPage: function UpdateAllBookingWidgetsOnPage(startDate, endDate, existingTarget) {
            //Only update if there is anor widget on the page
            if (MystaysBookingWidget.Common.MystaysRangeArray.length > 1) {
                var range = [startDate, endDate];
                for (var i = 0; i < MystaysBookingWidget.Common.MystaysRangeArray.length; i++) {
                    MystaysBookingWidget.Common.CurrentEventTarget = MystaysBookingWidget.Common.MystaysRangeArray[i].element;
                    MystaysBookingWidget.Common.MystaysRangeArray[i].setVal(range, true, true, false);
                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetDateValues(MystaysBookingWidget.Common.MystaysRangeArray[i], true);
                }

                //Resetting the target back to the original
                MystaysBookingWidget.Common.CurrentEventTarget = existingTarget;
            }

        },

        

        //Function to change the responsiveness of the range (Which varies for the popup calendar on the meeting room)
        GetRangeResponsive: function GetRangeResponsive() {
            if (MystaysBookingWidget.Common.RangeResponsive == null) {

                
                    MystaysBookingWidget.Common.RangeResponsive = {
                        BreakPoint: 768,
                        Month: 2,
                        CalendarWidth: 654
                    }
                
            }

            return MystaysBookingWidget.Common.RangeResponsive;
        },
        //Set the format for the 'dateWheels' property of the range Object
        GetDateWheelFormat: function () {
            if (MystaysBookingWidget.Common.SelectedLanguage != 'en') {
                return 'yymmdd';
            } else {
                return 'mmyydd';
            }
        },
        //Set the format for the 'weekDays' property of the range Object
        GetweekDaysFormatMobile: function () {
            if (MystaysBookingWidget.Common.SelectedLanguage == 'zh' || MystaysBookingWidget.Common.SelectedLanguage == 'tw') {
                return 'full';
            } else {
                return 'short';
            }
        },

        //Function to check what is the boking engine that has to be used(Based on certain flags like AB test and UseTravelClickInJapan)
        UseTravelClickBookingEngine: function (HotelABTestBookingEnabled, HotelUseTravelClickInJapan) {
            //AB Test Logic(If the page and hotel has this AB test enabled then check for the AB test value)
            if (HotelABTestBookingEnabled != null && HotelABTestBookingEnabled == "true") {
                var abTestField = document.getElementById('hdnABTest');
                if (abTestField && ABTestBookingEnabled == 'true') {
                    if (abTestField.value == 'ABTestUseRwith') {
                        return false;
                    } else if (abTestField.value == 'ABTestUseTravelClick') {
                        return true;
                    }
                }
            }
            //UseTravelClickInJapan Logic(If the hotel has this flag enabled then always use TC)
            else if (HotelUseTravelClickInJapan != null && HotelUseTravelClickInJapan == "true") {
                return true;
            }
            //Default logic
            else {
                //Use RWith
                if (MystaysBookingWidget.Common.SelectedLanguage === 'ja') {
                    return false;
                } else {
                    return true;
                }
            }
        },
		
		//Function to update all static labels on the HTML
		UpdateStaticLabels:function UpdateStaticLabels(){
			
			MystaysBookingWidget.Common.AjaxCall(MystaysBookingWidget.Common.Constants.TranslationsPath, null, 'GET', true, function (response) {
                var translatedData = JSON.parse(response);
				
				
				
				//Getting the translation for the language
				for(var i=0; i < translatedData.MystaysLanguages.length; i++){
					if(MystaysBookingWidget.Common.SelectedLanguage == translatedData.MystaysLanguages[i].LanguageCode){
						MystaysBookingWidget.Common.LanguageTranslation = translatedData.MystaysLanguages[i];
					}
				}
				
				
				//Looping through each key and replacing the placeholders with the value
				for(var i=0; i < MystaysBookingWidget.Common.LanguageTranslation.StaticContent.length; i++){
					document.getElementsByClassName('booking-widget-container-main')[0].innerHTML = document.getElementsByClassName('booking-widget-container-main')[0].innerHTML.replace('{{'+MystaysBookingWidget.Common.LanguageTranslation.StaticContent[i].Key+'}}', MystaysBookingWidget.Common.LanguageTranslation.StaticContent[i].Value);
				}
            })
			
		}
    },
    //All generic helper methods
    Helper: {
        isIE11: function () {
            return !!(navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/));
        },
        IsMicrosoftEdge: function () {
            return window.navigator.userAgent.indexOf("Edge") > -1;
        },
        Loaded: function Loaded() {
            MystaysBookingWidget.Helper.LoadExtensions();
            
            MystaysBookingWidget.Helper.ClickOutside();

        },

        
        //Method to get the querystring 
        GetQueryString: function GetQueryString(name) {
            var url = window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        },

        SetCookie: function SetCookie(name, value) {
            
                document.cookie = name + '=' + value + ';path=/';
            
        },
        GetCookie: function GetCookie(name) {
            var value = '; ' + document.cookie;
            var parts = value.split('; ' + name + '=');
            if (parts.length === 2) {
                return parts.pop().split(';').shift();
            } else {
                return '';
            }
        },

        ///Method to save the date in the form of a cookie
        FormatDateToString: function FormatDateToString(date) {

            if (date) {
                month = '' + (date.getMonth() + 1),
                    day = '' + date.getDate(),
                    year = date.getFullYear();

                if (month.length < 2) month = '0' + month;
                if (day.length < 2) day = '0' + day;

                return [year, month, day].join('-');
            }

        },


        //Function to close the calendar when the user clicks outside
        ClickOutside: function ClickOutside() {

            //This check is to make sure that the ClickOutside event is not attached twice(When two booking widgets are present)
            if (MystaysBookingWidget.Common.AttachClickOutside == null) {


                document.addEventListener('click', function (e) {

                    var container = document.querySelector(MystaysBookingWidget.Common.BookingWidgetContainer());
                    //var bookingBoxes = document.querySelectorAll(MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-box');
                    var promocontainer = document.querySelector(MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-box.promocode');
                    var booknowbuttoncontainer = document.querySelector(MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-box.search-button');

                    //Click secondary menu button and check availability button(mobile) and on 
                    var secondaryMenu = document.querySelector('.show-booking-widget');
                    var checkAvailabilityMobile = document.querySelector('.mobile-detail-availability .avilability');
                    var hoteldetailsStrip = document.querySelector('#secondar-menu');

                    //Check if user selected promobox or button click
                    var IsPromoCodeContainer = ((((promocontainer === e.target) || MystaysBookingWidget.Helper.IsDescendant(promocontainer, e.target))));

                    var IsBooknowContainer = ((((booknowbuttoncontainer === e.target) || MystaysBookingWidget.Helper.IsDescendant(booknowbuttoncontainer, e.target))));

                    if (((!(container === e.target) && !MystaysBookingWidget.Helper.IsDescendant(container, e.target))
                        && (!(secondaryMenu === e.target) && !MystaysBookingWidget.Helper.IsDescendant(secondaryMenu, e.target))
                        && (!(checkAvailabilityMobile === e.target) && !MystaysBookingWidget.Helper.IsDescendant(checkAvailabilityMobile, e.target))
                        && (!(hoteldetailsStrip === e.target)))
                        || IsPromoCodeContainer || IsBooknowContainer) {
                        if (MystaysBookingWidget.Common.CurrentRangeObject()) {
                            MystaysBookingWidget.Common.CurrentRangeObject().hide();
                        }
                        MystaysBookingWidget.GuestsWidget.ShowGuestSection(false);
                        MystaysBookingWidget.HotelSearch.ShowHotelList(false);
                       
                    }

                    MystaysBookingWidget.Common.AttachClickOutside = false;
                })
            }
        },
        //Method to add extension methods
        LoadExtensions: function LoadExtensions() {
            HTMLElement.prototype.ShowElement = function () {

                this.classList.add('show');
                this.classList.remove('hide');

            };
            HTMLElement.prototype.HideElement = function () {
                this.classList.add('hide');
                this.classList.remove('show');

            };
            //Method to change the date format (IOS cannot read default format)
            String.prototype.ChangeDateFormat = function () {
                //If it is already a date then ignore
                if (!Date.parse(this)) {
                    return this.replace(/-/g, '/');
                }

                return this;
            };


            //Method to change the date format (IOS cannot read default format)
            Date.prototype.ChangeDateFormat = function () {
                //If it is already a date then ignore
                if (!Date.parse(this)) {
                    return this.replace(/-/g, '/');
                }

                return this;
            };

            NodeList.prototype.ShowElement = function () {

                var nodelist = this;
                for (var i = 0; i < nodelist.length; i++) {
                    nodelist[i].ShowElement();
                }
            };
            NodeList.prototype.HideElement = function () {

                var nodelist = this;
                for (var i = 0; i < nodelist.length; i++) {
                    nodelist[i].HideElement();
                }
            };
        },

        //Function to get the closest parent element with a class
        ClosestElement: function ClosestElement(element, cls) {
            // Traverse the DOM up with a while loop
            while (!element.classList.contains(cls)) {
                // Increment the loop to the parent node
                element = element.parentNode;
                if (!element || !element.classList) {
                    return null;
                }
            }
            return element;
        },

        //Method to check if the device is a mobile or not
        IsMobile: function IsMobile() {
            return window.innerWidth <= 767;
        },
        //Check if element is visible
        IsVisiable: function (element) {
            return (element.offsetParent != null)
        },
        //Method to check if an element is a Descendant of an item
        IsDescendant: function IsDescendant(parent, child) {
            var node = child.parentNode;
            while (node != null) {
                if (node == parent) {
                    return true;
                }
                node = node.parentNode;
            }
            return false;
        },
        GetDays: function GetDays(startval, endval) {
            var dateDifference = Math.floor((Date.parse(endval) - Date.parse(startval)) / 86400000);
            return dateDifference
        },
        //Method to get the corresponding language item from an array
        //0 - Japanese
        //1 - English
        //2 - Chinese
        //3 - Taiwanese
        //4 - Korean
        GetCustomText: function GetCustomText(typeOfConstant) {
            //try to get translation from the HTML/Sitecore
            var translatedLabel = MystaysBookingWidget.Helper.GetTranslation(typeOfConstant[5])

            if (translatedLabel) {
                return translatedLabel;
            }

            if (MystaysBookingWidget.Common.SelectedLanguage === 'ja') {
                return typeOfConstant[0];
            }
            else if (MystaysBookingWidget.Common.SelectedLanguage === 'en') {
                return typeOfConstant[1];

            } else if (MystaysBookingWidget.Common.SelectedLanguage === 'zh') {
                return typeOfConstant[2];

            } else if (MystaysBookingWidget.Common.SelectedLanguage === 'tw') {
                return typeOfConstant[3];
            }
            else if (MystaysBookingWidget.Common.SelectedLanguage === 'ko') {
                return typeOfConstant[4];
            }
            else if (MystaysBookingWidget.Common.SelectedLanguage === 'th') {
                return typeOfConstant[6];

            }
        },

        //Get translation from hidden field
        GetTranslation: function GetTranslation(name) {

            for(var i=0; i< MystaysBookingWidget.Common.LanguageTranslation.DynamicContent.length; i++){
				if(MystaysBookingWidget.Common.LanguageTranslation.DynamicContent[i].Key == name){
					return MystaysBookingWidget.Common.LanguageTranslation.DynamicContent[i].Value;
				}
			}
        },

        //Method to check if a node has a class
        HasClass: function HasClass(elem, cls) {
            var str = " " + elem.className + " ";
            var testCls = " " + cls + " ";
            return (str.indexOf(testCls) != -1);
        },

        //Method to get a next or previous sibling by class name
        GetSiblingByClass: function GetSiblingByClass(node, cls, isprevious) {
            if (isprevious) {
                while (node = node.previousSibling) {
                    if (MystaysBookingWidget.Helper.HasClass(node, cls)) {
                        return node;
                    }
                }
            } else {
                while (node = node.nextSibling) {
                    if (MystaysBookingWidget.Helper.HasClass(node, cls)) {
                        return node;
                    }
                }
            }

            return null;
        }

    },


    //All functionalities related to the booking widget calendar/range
    BookingCalendar: {

        Constants: {
            //Variable used to store the current active button
            CurrentStatus: '',
            //Variable used to identify if the checkout date is manually set to the next day
            CheckNextDaySetManually: false,
            EnglishMonthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            EnglishMonthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            EnglishDayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            CalendarHeader: ['カレンダー', 'Calendar', '月历', '月曆', '캘린더', 'CalendarHeader'],
            NightsOfStayDesktop: ['({days} 泊)', '({days} Nights)', '({days} 晚)', '({days} 晚)', '({days} 박)', 'NightsOfStayDesktop'],
            NightsOfStayOneNightDesktop: ['(1 泊)', '(1 Night)', '(1 晚)', '(1 晚)', '(1 박)', 'NightsOfStayOneNightDesktop'],
            NightsOfStayMobile: ['{days} 泊の予約へすすむ', 'Ok ({days} Nights)', '预约 {days} 晚住宿', '預約 {days} 晚住宿', '{days} 박 예약에', 'NightsOfStayMobile'],
            NightsOfStayOneNightMobile: ['1 泊の予約へすすむ', 'Ok (1 Night)', '预约 1 晚住宿', '預約 1 晚住宿', '1 박 예약에 ', 'NightsOfStayOneNightMobile'],
            YearText: ['年', '', '年', '年', '년', 'YearText'],
            DateText: ['日', '', '日', '日', '일', 'DateText'],
            MonthText: ['月', '', '月', '月', '월', 'MonthText'],
            DayPrependText: ['', '', '周', '週', '', 'DayPrependText'],
            CheckinLabel: ['チェックイン', 'Check In', 'Check in', 'Check in', 'Check in', 'CheckinLabel'],
            CheckoutLabel: ['チェックアウト', 'Check Out', 'Check Out', 'Check Out', 'Check Out', 'CheckoutLabel'],
            //Selectors
            RangeBubbleContainer: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .mbsc-fr-bubble-bottom';
            },
            IndicatorIcon: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .mbsc-fr-arr';
            },
            CheckinCheckoutContainer: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-checkin-checkout';
            },
            DatePickerContainer: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .date-picker';
            },
            SetButtonContainer: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .mbsc-fr-btn0';
            },
            CalendarInnerContainer: function () {
                return ' .mbsc-fr-w';
            },
            RangeContainerClass: function () {
                return '.mbsc-fr-persp';
            },
            SetButtonInnerContainer: function () {
                return '.mbsc-fr-btn-cont';
            },
            MystaysSelectedDate: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .mystays-selected-date';
            },
            HoverIntermediate: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .mystays-hover-intermediate';
            },
            DateDisabled: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .mystays-bookingengine-disabled';
            },
            CheckinContainer: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .calendar-checkindate';
            },
            CheckoutContainer: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .calendar-checkoutdate';
            },
            CalendarFooter: function () {
                return ' .mystays-calendar-footer';
            },
            CalendarBody: function () {
                return ' .mbsc-cal-body';
            },

            CheckinButton: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .bookingwidget-checkin';
            },


            CheckinButtonTitle: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .bookingwidget-checkin .title';
            },
            CheckinButtonDesc: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .bookingwidget-checkin .desc';
            },

            CheckoutButton: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .bookingwidget-checkout';
            },
            CheckoutButtonTitle: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .bookingwidget-checkout .title';
            },
            CheckoutButtonDesc: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .bookingwidget-checkout .desc';
            },


            DefaultCalendarSelector: function () {
                return ' .mbsc-range-btn-start';
            },
            CustomCalendarSelector: function () {
                return 'mystays-range-selector-header';
            },






        },
        //Contains methods that alter the HTML of the calendar
        CustomHTML: {
            //Method to reposition the indicator icon based on user selection of start or end date
            RepositionSelectorIndicator: function RepositionSelectorIndicator(IsCheckin) {
                var rangeBubbleContainer = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.RangeBubbleContainer());
                if (rangeBubbleContainer) {

                    //Ask Vinay the logic
                    var bookingWidgetModule = MystaysBookingWidget.Common.BookingWidgetContainerElement().getElementsByClassName('booking-widget-module')[0];
                    var bookingWidgetModuleOffsetLeft = bookingWidgetModule.offsetLeft;
                    var parentLeftProperty = parseInt(window.getComputedStyle(bookingWidgetModule.parentNode).getPropertyValue('padding-left').replace("px", ""));
                    var datePickerContainer = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.DatePickerContainer());
                    var datePickerContainerOffset = datePickerContainer.offsetLeft;
                    var datePickerContainerWidth = datePickerContainer.offsetWidth;
                    var rangeBubbleContainerLeft = rangeBubbleContainer.style.left;
                    var currentRangeLeftPropertyValue = parseInt(rangeBubbleContainerLeft.replace('px', ''));

                    var updateLeftValue = bookingWidgetModuleOffsetLeft - parentLeftProperty + datePickerContainerOffset + (datePickerContainerWidth / 4) - currentRangeLeftPropertyValue;





                    var indicator = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.IndicatorIcon());
                    var indicatorLeftProperty = indicator.style.left;
                    var currentLeftPropertyValue = parseInt(indicatorLeftProperty.replace('px', ''));

                    var btncontainer = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckinCheckoutContainer());



                    //Ensuring that the calendar is always static(To override default mobiscroll logic)
                    //if (currentRangeLeftPropertyValue > updateLeftValue) {
                    //    rangeBubbleContainer.style.left = (currentRangeLeftPropertyValue - (btncontainer.offsetWidth / 2)) + "px";
                    //}

                    //When checkin button is clicked
                    if (IsCheckin) {
                        //Move indicator to checkin if necessary
                        if (currentLeftPropertyValue > updateLeftValue) {
                            indicator.style.left = (currentLeftPropertyValue - (btncontainer.offsetWidth / 2)) + "px";
                        }

                    } else {

                        //Move indicator to checkout if necessary
                        if (currentLeftPropertyValue < updateLeftValue) {
                            indicator.style.left = (currentLeftPropertyValue + (btncontainer.offsetWidth / 2)) + "px";
                        }

                    }
                    //If element is visiable then add class to allow animation on slide
                    if (MystaysBookingWidget.Helper.IsVisiable(rangeBubbleContainer)) {
                        indicator.classList.add('mystays-bookingwidget-animate-slide');
                    }

                }
            },
            //Function to reposition the SetButtonInnerContainer from inside the CalendarInnerContainer to after the CalendarInnerContainer
            AdjustSetButtonContainerPosition: function AdjustSetButtonContainerPosition(calendarElement) {
                if (MystaysBookingWidget.Helper.IsMobile()) {
                    var setButtonContainer = calendarElement.querySelector(MystaysBookingWidget.BookingCalendar.Constants.SetButtonInnerContainer());

                    //Updating the CalenderInnerContainer
                    if (setButtonContainer) {
                        var calendarInnerContainer = calendarElement.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CalendarInnerContainer());
                        calendarInnerContainer.removeChild(setButtonContainer);
                        calendarInnerContainer.insertAdjacentHTML('afterend', setButtonContainer.outerHTML);
                    }



                }
            },
            //Work around to manually update the Set button bottom in order to show the SET button(Issue - The set button was not showing)
            SetBottomForSetButton: function SetBottomForSetButton(bottomValue, calendarElement) {
                if (MystaysBookingWidget.Helper.IsMobile()) {

                    if (calendarElement) {
                        var setButtonContainer = calendarElement.querySelector(MystaysBookingWidget.BookingCalendar.Constants.SetButtonInnerContainer());
                    } else {
                        var setButtonContainer = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.SetButtonInnerContainer());
                    }


                    //Updating the CalenderInnerContainer
                    if (setButtonContainer) {
                        setButtonContainer.style.bottom = bottomValue + "px";
                    }



                }
            },

            UpdateSetButton: function (startdate, enddate) {
                if (MystaysBookingWidget.Helper.IsMobile() && document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.SetButtonContainer())) {

                    var dateDifference = MystaysBookingWidget.Helper.GetDays(startdate, enddate);
                    if (dateDifference > 1) {
                        document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.SetButtonContainer()).innerHTML = MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.NightsOfStayMobile).replace('{days}', dateDifference);
                    } else {
                        document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.SetButtonContainer()).innerHTML = MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.NightsOfStayOneNightMobile);
                    }

                }
            },
            //Method to disable previous dates after start date is selected
            DisablePreviousDates: function DisablePreviousDates(dateToCheck) {
                MystaysBookingWidget.BookingCalendar.CustomHTML.EnableAllDates();
                var dateItemList = document.querySelectorAll(MystaysBookingWidget.BookingCalendar.Constants.MystaysSelectedDate());

                for (var i = 0; i < dateItemList.length; i++) {
                    if (new Date(dateItemList[i].getAttribute('data-full').ChangeDateFormat()) < new Date(dateToCheck)) {
                        dateItemList[i].classList.add('mystays-bookingengine-disabled');
                        dateItemList[i].classList.add('mbsc-disabled');
                        dateItemList[i].classList.add('mbsc-sc-itm-inv');

                    }
                }



            },
            //Method to reenable all the dates again
            EnableAllDates: function EnableAllDates() {
                var dateItemList = document.querySelectorAll(MystaysBookingWidget.BookingCalendar.Constants.DateDisabled());

                for (var i = 0; i < dateItemList.length; i++) {
                    dateItemList[i].classList.remove('mystays-bookingengine-disabled');
                    dateItemList[i].classList.remove('mbsc-disabled');
                    dateItemList[i].classList.remove('mbsc-sc-itm-inv');
                }
            },
            //Method to set the date to the mystays check in and check out buttons
            SetDateValues: function SetDateValues(mobiScrollInstance, IgnoreUpdates) {

                startval = mobiScrollInstance.startVal;
                endval = mobiScrollInstance.endVal;

                document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckinContainer()).setAttribute('data-value', startval);
                document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckoutContainer()).setAttribute('data-value', endval);

                if (startval !== "" && startval) {
                    var startDate = startval.split('|')[0];

                    //To display short name for english
                    if (MystaysBookingWidget.Common.SelectedLanguage != 'en') {
                        var startMonth = (new Date(startval.split('|')[4]).getMonth() + 1) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.MonthText);
                    } else {
                        var startMonth = MystaysBookingWidget.BookingCalendar.Constants.EnglishMonthNamesShort[new Date(startval.split('|')[4]).getMonth()];
                    }

                    var startYear = startval.split('|')[2];

                    var checkinTitle = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckinButtonTitle());
                    if (MystaysBookingWidget.Helper.IsMobile()) {
                        checkinTitle.innerHTML = startDate;
                    } else {
                        checkinTitle.innerHTML = startDate + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DateText);;
                    }


                    var checkinDesc = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckinButtonDesc());
                    checkinDesc.innerHTML = startMonth + " " + startYear + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.YearText);

                    if (!IgnoreUpdates ) {
                        MystaysBookingWidget.Helper.SetCookie(MystaysBookingWidget.Common.Constants.CheckinDateCookie, MystaysBookingWidget.Helper.FormatDateToString(new Date(startval.split('|')[4])));
                    }



                }

                if (endval !== "" && endval) {
                    var endDate = endval.split('|')[0];


                    //To display short name for english
                    if (MystaysBookingWidget.Common.SelectedLanguage != 'en') {
                        var endMonth = (new Date(endval.split('|')[4]).getMonth() + 1) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.MonthText);
                    } else {
                        var endMonth = MystaysBookingWidget.BookingCalendar.Constants.EnglishMonthNamesShort[new Date(endval.split('|')[4]).getMonth()];
                    }


                    var endYear = endval.split('|')[2];

                    var checkoutTitle = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckoutButtonTitle());

                    if (MystaysBookingWidget.Helper.IsMobile()) {
                        checkoutTitle.innerHTML = endDate;
                    } else {
                        checkoutTitle.innerHTML = endDate + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DateText);
                    }


                    var checkoutDesc = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckoutButtonDesc());
                    checkoutDesc.innerHTML = endMonth + " " + endYear + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.YearText);

                    if (!IgnoreUpdates ) {
                        MystaysBookingWidget.Helper.SetCookie(MystaysBookingWidget.Common.Constants.CheckoutDateCookie, MystaysBookingWidget.Helper.FormatDateToString(new Date(endval.split('|')[4])));
                    }

                }
                //Updating other booking widgets
                if (!IgnoreUpdates) {
                    MystaysBookingWidget.Common.UpdateAllBookingWidgetsOnPage(new Date(startval.split('|')[4]), new Date(endval.split('|')[4]), MystaysBookingWidget.Common.CurrentEventTarget);
                }

                
                
            },
            //Method to render the text on the footer
            SetFooterText: function SetFooterText(startval, endval, RenderedElement, IsEndDateADate) {
                if (!MystaysBookingWidget.Helper.IsMobile()) {

                    var calendarContainer = '';

                    if (RenderedElement) {
                        var documentElement = RenderedElement;
                    } else {
                        //Only append MystaysBookingWidget.Common.BookingWidgetContainer() if the documentElelment is the document object and not mobiscroll object
                        calendarContainer = MystaysBookingWidget.Common.BookingWidgetContainer();
                        var documentElement = document;
                    }

                    //Removing the footer if it is already present
                    var customcalendarfooter = documentElement.querySelector(calendarContainer + MystaysBookingWidget.BookingCalendar.Constants.CalendarFooter());
                    if (customcalendarfooter) {
                        customcalendarfooter.parentNode.removeChild(customcalendarfooter);
                    }


                    var calendarbody = documentElement.querySelector(calendarContainer + MystaysBookingWidget.BookingCalendar.Constants.CalendarBody());

                    if (!IsEndDateADate) {
                        var dateDifference = MystaysBookingWidget.Helper.GetDays(startval.split('|')[4], endval.split('|')[4]);
                    } else {
                        var dateDifference = MystaysBookingWidget.Helper.GetDays(startval.split('|')[4], endval);
                    }

                    if (MystaysBookingWidget.Common.SelectedLanguage != 'en') {
                        var htmlString = '<p class="mystays-calendar-footer" >{startyear} {startmonth} {startdate} ({startday}) - {endyear} {endmonth} {enddate} ({endday}) - {NightsOfStay}</p>';
                    } else {
                        var htmlString = '<p class="mystays-calendar-footer" >{startday}, {startdate} {startmonth} {startyear} - {endday}, {enddate} {endmonth} {endyear} - {NightsOfStay}</p>';
                    }



                    htmlString = htmlString.replace('{startday}', MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DayPrependText) + startval.split('|')[5]);
                    htmlString = htmlString.replace('{startdate}', startval.split('|')[0] + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DateText));
                    htmlString = htmlString.replace('{startmonth}', (new Date(startval.split('|')[4]).getMonth() + 1) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.MonthText));
                    htmlString = htmlString.replace('{startyear}', startval.split('|')[2] + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.YearText));

                    //Not a date (When range end date is passed)
                    if (!IsEndDateADate) {


                        htmlString = htmlString.replace('{endday}', MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DayPrependText) + endval.split('|')[5]);
                        htmlString = htmlString.replace('{enddate}', endval.split('|')[0] + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DateText));
                        htmlString = htmlString.replace('{endmonth}', (new Date(endval.split('|')[4]).getMonth() + 1) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.MonthText));
                        htmlString = htmlString.replace('{endyear}', endval.split('|')[2] + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.YearText));
                    }
                    //When a date is passed for endval(When hovering over dates in desktop)
                    else {

                        var endDate = new Date(endval);


                        if (MystaysBookingWidget.Common.SelectedLanguage === 'ja') {
                            htmlString = htmlString.replace('{endday}', MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DayPrependText) + mobiscroll.i18n.ja.dayNamesShort[endDate.getDay()]);
                            htmlString = htmlString.replace('{enddate}', ('0' + endDate.getDate()).slice(-2) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DateText));
                            htmlString = htmlString.replace('{endmonth}', (endDate.getMonth() + 1) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.MonthText));
                            htmlString = htmlString.replace('{endyear}', endDate.getFullYear() + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.YearText));
                        }
                        else if (MystaysBookingWidget.Common.SelectedLanguage === 'en') {
                            htmlString = htmlString.replace('{endday}', MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DayPrependText) + MystaysBookingWidget.BookingCalendar.Constants.EnglishDayNamesShort[endDate.getDay()]);
                            htmlString = htmlString.replace('{enddate}', ('0' + endDate.getDate()).slice(-2) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DateText));
                            htmlString = htmlString.replace('{endmonth}', (endDate.getMonth() + 1) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.MonthText));
                            htmlString = htmlString.replace('{endyear}', endDate.getFullYear());
                        } else if (MystaysBookingWidget.Common.SelectedLanguage === 'zh') {
                            htmlString = htmlString.replace('{endday}', MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DayPrependText) + mobiscroll.i18n.zh.dayNamesShort[endDate.getDay()]);
                            htmlString = htmlString.replace('{enddate}', ('0' + endDate.getDate()).slice(-2) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DateText));
                            htmlString = htmlString.replace('{endmonth}', (endDate.getMonth() + 1) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.MonthText));
                            htmlString = htmlString.replace('{endyear}', endDate.getFullYear() + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.YearText));
                        } else if (MystaysBookingWidget.Common.SelectedLanguage === 'tw') {
                            htmlString = htmlString.replace('{endday}', MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DayPrependText) + mobiscroll.i18n.zh.dayNamesShort[endDate.getDay()]);
                            htmlString = htmlString.replace('{enddate}', ('0' + endDate.getDate()).slice(-2) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DateText));
                            htmlString = htmlString.replace('{endmonth}', (endDate.getMonth() + 1) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.MonthText));
                            htmlString = htmlString.replace('{endyear}', endDate.getFullYear() + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.YearText));
                        }
                        else if (MystaysBookingWidget.Common.SelectedLanguage === 'ko') {
                            htmlString = htmlString.replace('{endday}', MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DayPrependText) + mobiscroll.i18n.ko.dayNamesShort[endDate.getDay()]);
                            htmlString = htmlString.replace('{enddate}', ('0' + endDate.getDate()).slice(-2) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DateText));
                            htmlString = htmlString.replace('{endmonth}', (endDate.getMonth() + 1) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.MonthText));
                            htmlString = htmlString.replace('{endyear}', endDate.getFullYear() + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.YearText));
                        }
                        else {
                            htmlString = htmlString.replace('{endday}', MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DayPrependText) + endval.split('|')[5]);
                            htmlString = htmlString.replace('{enddate}', endval.split('|')[0]);
                            htmlString = htmlString.replace('{endmonth}', endval.split('|')[1]);
                            htmlString = htmlString.replace('{endyear}', endval.split('|')[2]);
                        }

                    }
                    if (dateDifference > 1) {
                        htmlString = htmlString.replace('{NightsOfStay}', MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.NightsOfStayDesktop).replace('{days}', dateDifference));
                    } else {
                        htmlString = htmlString.replace('{NightsOfStay}', MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.NightsOfStayOneNightDesktop));
                    }


                    calendarbody.insertAdjacentHTML('afterend', htmlString);
                }
            },

            //Method to remove all the intermediate classes
            RemoveIntermediateHoverLogic: function RemoveIntermediateHoverLogic() {

                var dateListWithInterMediate = document.querySelectorAll(MystaysBookingWidget.BookingCalendar.Constants.HoverIntermediate());

                //Remove class from existing elements
                for (var f = 0; f < dateListWithInterMediate.length; f++) {
                    dateListWithInterMediate[f].classList.remove('mystays-hover-intermediate');
                }

            },

            //Method to add a custom class on all dates in between a start and end date
            CheckHover: function CheckHover(element, dateList, rangeObject) {
                MystaysBookingWidget.BookingCalendar.CustomHTML.RemoveIntermediateHoverLogic();


                //Adding class from existing elements(rangeObject.endVal === "")
                for (var i = 0; i < dateList.length; i++) {
                    if ((MystaysBookingWidget.BookingCalendar.Constants.CheckNextDaySetManually || MystaysBookingWidget.BookingCalendar.Constants.CurrentStatus === 'end') && new Date(dateList[i].getAttribute('data-full').ChangeDateFormat()) >= new Date(rangeObject.startVal.split('|')[4]) && new Date(dateList[i].getAttribute('data-full').ChangeDateFormat()) <= new Date(element.getAttribute('data-full').ChangeDateFormat())) {
                        dateList[i].classList.add('mystays-hover-intermediate');

                    }
                }

                //Changing footer only when element date is greater than the start date
                if ((MystaysBookingWidget.BookingCalendar.Constants.CheckNextDaySetManually || MystaysBookingWidget.BookingCalendar.Constants.CurrentStatus === 'end') && new Date(rangeObject.startVal.split('|')[4]) < new Date(element.getAttribute('data-full').ChangeDateFormat())) {
                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetFooterText(rangeObject.startVal, element.getAttribute('data-full').ChangeDateFormat(), null, true);
                }
                //Else setting it to start and end date
                else {
                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetFooterText(rangeObject.startVal, rangeObject.endVal, null, false);
                }
            },
            //Set Z index for calendar and Guest widget
            SetContainerZIndex: function SetContainerZIndex(HigherZIndex) {
                if (HigherZIndex) {
                    MystaysBookingWidget.Common.BookingWidgetContainerElement().style.zIndex = "100002";
                } else {
                    MystaysBookingWidget.Common.BookingWidgetContainerElement().style.zIndex = "9";
                }
            },
            //Method to create custom selectors for start and end date(Only mobile)
            SetCustomMobileDateSelector: function SetCustomMobileDateSelector(calendarElement, startval, endval) {
                var calendarContainer = '';
                if (calendarElement) {
                    var updateContainer = calendarElement;
                } else {
                    calendarContainer = MystaysBookingWidget.Common.BookingWidgetContainer();
                    var updateContainer = document;
                }

                //Write logic only when selector is present
                if (updateContainer.querySelector(calendarContainer + MystaysBookingWidget.BookingCalendar.Constants.DefaultCalendarSelector())) {
                    //Removing existing elemtn
                    if (updateContainer.querySelectorAll(calendarContainer + MystaysBookingWidget.BookingCalendar.Constants.DefaultCalendarSelector()).length > 0) {
                        var customSelector = updateContainer.getElementsByClassName(MystaysBookingWidget.BookingCalendar.Constants.CustomCalendarSelector());

                        while (customSelector[0]) {
                            customSelector[0].parentNode.removeChild(customSelector[0]);
                        }
                    }


                    //Start date
                    var startdate = startval.split('|')[0];
                    var startday = MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DayPrependText) + startval.split('|')[5];


                    //To display short name for english
                    if (MystaysBookingWidget.Common.SelectedLanguage != 'en') {
                        var startmonth = (new Date(startval.split('|')[4]).getMonth() + 1) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.MonthText);
                    } else {
                        var startmonth = MystaysBookingWidget.BookingCalendar.Constants.EnglishMonthNamesShort[new Date(startval.split('|')[4]).getMonth()];
                    }



                    var checkinDateElement = document.createElement('div');
                    checkinDateElement.className = MystaysBookingWidget.BookingCalendar.Constants.CustomCalendarSelector();
                    checkinDateElement.innerHTML = '<div class="mystays-range-btn-heading">' + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.CheckinLabel) + '</div><div class="mystays-range-btn-date"><div class="mystays-bookingwidget-selector-date"><span>{date}</span></div><p><span>{day}</span><span>{month}</span></p></div>'.replace('{date}', startdate).replace('{day}', startday).replace('{month}', startmonth);
                    updateContainer.querySelector(calendarContainer + '.mbsc-range-btn-start .mbsc-range-btn').appendChild(checkinDateElement);


                    //End date
                    if (endval === '') {
                        var enddate = '';
                        var endday = '';
                        var endmonth = '';
                    } else {
                        var enddate = endval.split('|')[0];
                        var endday = MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.DayPrependText) + endval.split('|')[5];

                        //To display short name for english
                        if (MystaysBookingWidget.Common.SelectedLanguage != 'en') {
                            var endmonth = (new Date(endval.split('|')[4]).getMonth() + 1) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.MonthText);
                        } else {
                            var endmonth = MystaysBookingWidget.BookingCalendar.Constants.EnglishMonthNamesShort[new Date(endval.split('|')[4]).getMonth()];
                        }

                    }

                    var checkoutDateElement = document.createElement('div');
                    checkoutDateElement.className = 'mystays-range-selector-header';
                    checkoutDateElement.innerHTML = '<div class="mystays-range-btn-heading">' + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.CheckoutLabel) + '</div><div class="mystays-range-btn-date"><div class="mystays-bookingwidget-selector-date"><span>{date}</span></div><p><span>{day}</span><span>{month}</span></p></div>'.replace('{date}', enddate).replace('{day}', endday).replace('{month}', endmonth);;
                    updateContainer.querySelector(calendarContainer + ' .mbsc-range-btn-end .mbsc-range-btn').appendChild(checkoutDateElement);
                }
            },

            //TODO add seperate language file for taiwanese
            UpdateTaiwaneseDayText: function (calendarElement) {
                if (MystaysBookingWidget.Common.SelectedLanguage == 'tw' && MystaysBookingWidget.Helper.IsMobile()) {
                    var daysArray = calendarElement.querySelectorAll('.mbsc-cal-days div');
                    for (var i = 0; i < daysArray.length; i++) {
                        daysArray[i].innerHTML = daysArray[i].innerHTML.replace('周', '週');
                    }
                }
            },

            //Added a custom header section to the calendar (Mobile)
            CustomizeCalendarHTML: function CustomizeCalendarHTML(calendarElement) {

                var calendarContainer = '';
                if (calendarElement) {
                    var updateContainer = calendarElement;
                } else {
                    calendarContainer = MystaysBookingWidget.Common.BookingWidgetContainer();
                    var updateContainer = document;
                }

                var calendarheadersection = updateContainer.querySelector('.mbsc-fr-focus');

                //Write logic only when calendar selector is present
                if (calendarheadersection && MystaysBookingWidget.Helper.IsMobile()) {



                    var calendarHeader = document.createElement('div');

                    var clearButton = document.createElement('span');
                    clearButton.className = 'mystays-bookingwidget-clr-btn';
                    clearButton.classList.add('mbsc-ic-arrow-left5');
                    clearButton.classList.add('mbsc-ic');
                    calendarHeader.appendChild(clearButton);


                    var calendarHeaderElement = document.createElement('span');

                    calendarHeader.classList = 'mystays-bookingwidget-calendarheader';

                    calendarHeaderElement.innerHTML = MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.CalendarHeader);


                    calendarHeader.appendChild(calendarHeaderElement);

                    calendarheadersection.insertAdjacentHTML('beforebegin', calendarHeader.outerHTML);

                    var calendarbackbutton = updateContainer.querySelector(calendarContainer + ' .mystays-bookingwidget-clr-btn');

                    calendarbackbutton.addEventListener('click', function (e) {
                        //MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.BookingCalendar.CustomHTMLEvents.AddHideEvent();
                    });
                }
            },
            //Method to set custom header for each month(On mobile when the user scrolls)
            SetCustomMonthHeader: function SetCustomMonthHeader(calendarElement) {

                if (MystaysBookingWidget.Helper.IsMobile()) {
                    var calendarContainer = '';
                    if (calendarElement) {
                        var updateContainer = calendarElement;
                    } else {
                        calendarContainer = MystaysBookingWidget.Common.BookingWidgetContainer();
                        var updateContainer = document;
                    }

                    //Removing the header before adding again
                    if (updateContainer.querySelectorAll(calendarContainer + ' .mystays-bookingwidget-header-month').length > 0) {
                        var customSelector = updateContainer.getElementsByClassName('mystays-bookingwidget-header-month');

                        while (customSelector[0]) {
                            customSelector[0].parentNode.removeChild(customSelector[0]);
                        }
                    }

                    //Looping through each month and adding the custom header
                    for (var i = 0; i < updateContainer.querySelectorAll(calendarContainer + ' .mbsc-cal-day-picker .mbsc-cal-table').length; i++) {
                        //Get the date for the section
                        var sectionContainer = updateContainer.querySelectorAll(calendarContainer + ' .mbsc-cal-day-picker .mbsc-cal-table')[i];
                        var sectionStartDate = sectionContainer.querySelector('[data-full]').getAttribute('data-full').ChangeDateFormat();

                        var sectionStartMonth = new Date(sectionStartDate).getMonth();
                        var sectionStartYear = new Date(sectionStartDate).getFullYear();
                        var headerText = '';

                        if (MystaysBookingWidget.Common.SelectedLanguage === 'en') {
                            headerText = MystaysBookingWidget.BookingCalendar.Constants.EnglishMonthNames[sectionStartMonth] + ' ' + sectionStartYear;
                        } else {
                            headerText = sectionStartYear + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.YearText) + ' ' + (sectionStartMonth + 1) + MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.BookingCalendar.Constants.MonthText);
                        }

                        var sectionheader = document.createElement('div');
                        sectionheader.className = 'mystays-bookingwidget-header-month';
                        sectionheader.innerHTML = headerText;
                        sectionContainer.insertAdjacentHTML('beforebegin', sectionheader.outerHTML);


                    }

                }
            },


        },
        CustomHTMLEvents: {

            CalendarCustomFunctions: function CalendarCustomFunctions(inst) {
                document.querySelector(MystaysBookingWidget.Common.BookingWidgetContainer() + MystaysBookingWidget.BookingCalendar.Constants.CalendarBody()).addEventListener('mouseout', function (e) {

                    MystaysBookingWidget.BookingCalendar.CustomHTML.RemoveIntermediateHoverLogic();
                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetFooterText(inst.startVal, inst.endVal, null, false);
                });
            },
            //Hiding the calendar on back button press
            AddHideEvent: function () {
                MystaysBookingWidget.Common.CurrentRangeObject().hide();
                document.querySelector(MystaysBookingWidget.Common.BookingWidgetContainer()).classList.remove('mystays-bookingwidget-active');
            },
            //Method to add a hover event to each date which will add an intermediate class('mystays-hover-intermediate') in the 'MystaysBookingWidget.BookingCalendar.CustomHTML.CheckHover' method
            AddIntermediateHoverLogic: function (inst) {


                var dateList = document.querySelectorAll(MystaysBookingWidget.Common.BookingWidgetContainer() + ' .mbsc-cal-slide .mbsc-cal-day:not(.mystays-selected-date):not(.mbsc-disabled):not([aria-hidden="true"])');
                for (var i = 0; i < dateList.length; i++) {
                    dateList[i].classList.add('mystays-selected-date');
                    if (!MystaysBookingWidget.Helper.IsMobile()) {
                        dateList[i].addEventListener('mouseover', function (e, args) {

                            MystaysBookingWidget.BookingCalendar.CustomHTML.CheckHover(this, document.querySelectorAll(MystaysBookingWidget.BookingCalendar.Constants.MystaysSelectedDate()), inst);
                        });
                    }
                }

            }
        },

       
        //method to manually set start and end date for rangeobject
        SetManualStartAndEnddate: function (inst, startdate, enddate) {
            inst.setVal([startdate, enddate], true, true, false);
        },
        //method to override mobiscrolls default functionality to set the checkout date to the next day when user selects a checkin day
        ValidateStartEndDate: function (event, inst) {

            var startvalue = inst.startVal;
            var endvalue = inst.endVal;
            MystaysBookingWidget.BookingCalendar.Constants.CheckNextDaySetManually = false;

            //If start date is equal to end date then set end date as next day
            if (inst.endVal === "" || (new Date(endvalue.split('|')[4]) <= new Date(startvalue.split('|')[4]))) {
                MystaysBookingWidget.BookingCalendar.Constants.CheckNextDaySetManually = true;
                var startDate = new Date(inst.startVal.split('|')[4]);
                
                    var nextDay = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 1, 0, 0);
                    inst.setVal([startDate, nextDay], true, true, false);
                
            }

        },
        ///Click Event Handler for the Check in section(The section on the booking widget)
        CheckInButtonHandler: function CheckInButtonHandler(element, args) {
            MystaysBookingWidget.BookingCalendar.Constants.CurrentStatus = 'start';
            MystaysBookingWidget.BookingCalendar.Constants.CheckNextDaySetManually = false;
            MystaysBookingWidget.BookingCalendar.CustomHTML.RepositionSelectorIndicator(true);


            //Enabling all dates when user selects checkin date
            MystaysBookingWidget.BookingCalendar.CustomHTML.EnableAllDates();
            //Removing all intermediate hover classes
            MystaysBookingWidget.BookingCalendar.CustomHTML.RemoveIntermediateHoverLogic();


        },
        ///Click Event Handler for the Check out section(The section on the booking widget)
        CheckOutButtonHandler: function CheckOutButtonHandler(element, args) {
            MystaysBookingWidget.BookingCalendar.Constants.CurrentStatus = 'end';
            MystaysBookingWidget.BookingCalendar.CustomHTML.RepositionSelectorIndicator(false);

            //Disabling all dates previous to check in date when user selects checkout date
            MystaysBookingWidget.BookingCalendar.CustomHTML.DisablePreviousDates(MystaysBookingWidget.Common.CurrentRangeObject().startVal.split('|')[4]);

        },
        CheckInOutButtonHandlers: function () {
            var checkinbtn = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckinButton());
            var checkoutbtn = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckoutButton());

            checkinbtn.addEventListener("click", function (e) {
                MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                MystaysBookingWidget.BookingCalendar.CheckInButtonHandler();
            });
            checkoutbtn.addEventListener("click", function (e) {
                MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                MystaysBookingWidget.BookingCalendar.CheckOutButtonHandler();
            });

        },
        //Method to load the mobiscrol range object
        LoadRange: function LoadRange(rangeContainer) {
            var selectedLanguage = MystaysBookingWidget.Common.SelectedLanguage;
            if (selectedLanguage === 'tw') {
                selectedLanguage = 'zh';
            }

            var rangeObject = mobiscroll.range(rangeContainer + ' .range-container', {
                theme: 'mobiscroll',
                lang: selectedLanguage,
                display: 'center',
                cssClass: 'mystays-bookingwidget',
                fromText: '',
                toText: '',
                weekDays: MystaysBookingWidget.Common.GetweekDaysFormatMobile(),
                context: rangeContainer + ' .calender-render-container',
                dateFormat: 'dd|M|yy|mm/dd/yy|yy/m/d|D',
                dateWheels: MystaysBookingWidget.Common.GetDateWheelFormat(),
                controls: ['calendar'],
                startInput: rangeContainer + " .bookingwidget-checkin",
                endInput: rangeContainer + ' .bookingwidget-checkout',
                buttons: [
                    'set'
                ],
                months: 1,
                minRange: 86400000,
                outerMonthChange: false,
                calendarScroll: 'vertical',
                min: new Date(),
                layout: 'liquid',
                showSelector: true,
                animate: 'slidehorizontal',
                closeOnOverlayTap: true,
                responsive: {
                    custom: {
                        breakpoint: MystaysBookingWidget.Common.GetRangeResponsive().BreakPoint,
                        months: MystaysBookingWidget.Common.GetRangeResponsive().Month,
                        showSelector: false,
                        animate: 'pop',
                        display: 'bubble',
                        layout: 'fixed',
                        calendarScroll: 'horizontal',
                        buttons: [],
                        weekDays: 'short',
                        calendarWidth: MystaysBookingWidget.Common.GetRangeResponsive().CalendarWidth
                    }
                },
                yearChange: false,

                //Events
                onInit: function (event, inst) {
                    

                    var cookieCheckinDate = MystaysBookingWidget.Helper.GetCookie(MystaysBookingWidget.Common.Constants.CheckinDateCookie);
                    //Cookie not present or is meeting room
                    if (cookieCheckinDate) {
                        
                        var incookieDate = new Date(cookieCheckinDate);
                        
                        var checkinDate = incookieDate;
                        
                      
                    }
                    //Set the start date
                    else {
                        var today = new Date();
						var nextSunday = today.getDate() + (7 - today.getDay()) + 7;
						var nextSun = today;
						nextSun.setDate(nextSunday);
						var checkinDate = nextSun;

                    }

                    var cookieCheckoutDate = MystaysBookingWidget.Helper.GetCookie(MystaysBookingWidget.Common.Constants.CheckoutDateCookie);
                    //Cookie not present or is meeting room
                    if (cookieCheckoutDate ) {
                        var outcookieDate = new Date(cookieCheckoutDate);
                        if (outcookieDate > checkinDate) {
                            var checkoutDate = outcookieDate;
                        } else {
                            var checkoutDate = new Date(checkinDate.getFullYear(), checkinDate.getMonth(), checkinDate.getDate() + 1, 0, 0);
                        }
                    } else {
                        
                            var checkoutDate = new Date(checkinDate.getFullYear(), checkinDate.getMonth(), checkinDate.getDate() + 1, 0, 0);
                        

                    }

                    range = [checkinDate, checkoutDate];
                    inst.setVal(range, true, true, false);



                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetDateValues(inst);
                    //MystaysBookingWidget.BookingCalendar.CheckInOutButtonHandlers();

                    var checkInBtn = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckinButton()),
                        checkOutBtn = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckoutButton());

                    inst.tap(checkInBtn, function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.BookingCalendar.CheckInButtonHandler();

                        var promocontainer = document.querySelector(MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-box.promocode');
                        var IsPromoCodeContainer = ((promocontainer === e.target) || MystaysBookingWidget.Helper.IsDescendant(promocontainer, e.target));

                        

                        


                    });

                    inst.tap(checkOutBtn, function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.BookingCalendar.CheckOutButtonHandler();

                        var promocontainer = document.querySelector(MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-box.promocode');
                        var IsPromoCodeContainer = ((promocontainer === e.target) || MystaysBookingWidget.Helper.IsDescendant(promocontainer, e.target));

                        


                    });
                },
                onDayChange: function (event, inst) {
                    if (event.active === 'end') {

                        //Logic to check only if that end date that is lesser than start date cannot be selected
                        if (event.date < new Date(inst.startVal.split('|')[4])) {
                            inst.setVal([event.date, inst.endVal], true);
                            return true;
                        }
                        //Automatically hide widget on selection of end date for non mobile devices
                        if (!MystaysBookingWidget.Helper.IsMobile()) {
                            inst.hide();
                            MystaysBookingWidget.GuestsWidget.ShowGuestSection(true);

                        } else {
                            MystaysBookingWidget.BookingCalendar.CustomHTML.EnableAllDates();
                            MystaysBookingWidget.BookingCalendar.CustomHTML.UpdateSetButton(inst.startVal.split('|')[4], event.date);
                        }
                    }

                    if (event.active === 'start') {

                        MystaysBookingWidget.BookingCalendar.CustomHTML.DisablePreviousDates(event.target.getAttribute('data-full').ChangeDateFormat());
                        MystaysBookingWidget.BookingCalendar.CustomHTML.RepositionSelectorIndicator(false);
                    }
                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetBottomForSetButton(0);

                },
                onMarkupReady: function (event, inst) {
                    MystaysBookingWidget.BookingCalendar.CustomHTML.UpdateTaiwaneseDayText(event.target);
                    MystaysBookingWidget.BookingCalendar.CustomHTML.CustomizeCalendarHTML(event.target);
                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetCustomMobileDateSelector(event.target, inst.startVal, inst.endVal);
                    MystaysBookingWidget.BookingCalendar.CustomHTML.AdjustSetButtonContainerPosition(event.target);
                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetFooterText(inst.startVal, inst.endVal, event.target);
                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetCustomMonthHeader(event.target);
                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetBottomForSetButton(1, event.target);
                },
                onSet: function (event, inst) {
                    MystaysBookingWidget.BookingCalendar.ValidateStartEndDate(event, inst);
                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetDateValues(inst);

                },
                onBeforeShow: function () {
                    MystaysBookingWidget.GuestsWidget.ShowGuestSection(false);
                    MystaysBookingWidget.HotelSearch.ShowHotelList(false);

                },
                onShow: function (event, inst) {
                    MystaysBookingWidget.Common.CurrentEventTarget = inst.element;

                    if (MystaysBookingWidget.Helper.IsMobile()) {
                        MystaysBookingWidget.BookingCalendar.CustomHTML.SetContainerZIndex(true);
                        document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.RangeContainerClass()).scrollTop = 0;

                    }

                    MystaysBookingWidget.BookingCalendar.Constants.CheckNextDaySetManually = false;
                    MystaysBookingWidget.BookingCalendar.CustomHTMLEvents.AddIntermediateHoverLogic(inst);
                    MystaysBookingWidget.BookingCalendar.CustomHTMLEvents.CalendarCustomFunctions(inst);
                    MystaysBookingWidget.BookingCalendar.CustomHTML.UpdateSetButton(inst.startVal.split('|')[4], inst.endVal.split('|')[4]);

                    //Calling this method after a timeout as to wait for the DOM to be ready
                    window.setTimeout(
                        function () {
                            MystaysBookingWidget.BookingCalendar.CustomHTML.SetBottomForSetButton(0);
                        }, 1000);


                },
                onClose: function (event, inst) {
                    if (MystaysBookingWidget.Helper.IsMobile()) {
                        MystaysBookingWidget.BookingCalendar.CustomHTML.SetContainerZIndex(false);
                    }
                    MystaysBookingWidget.BookingCalendar.ValidateStartEndDate(event, inst);


                },
                onPageChange: function (event, inst) {
                    MystaysBookingWidget.BookingCalendar.CustomHTMLEvents.AddIntermediateHoverLogic(inst);
                },
                onPageLoaded: function (event, inst) {
                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetCustomMonthHeader();
                },
                onSetDate: function (event, inst) {


                    MystaysBookingWidget.BookingCalendar.Constants.CurrentStatus = event.active;

                    if (event.active === 'start') {

                        
                        MystaysBookingWidget.BookingCalendar.CustomHTML.RemoveIntermediateHoverLogic();
                    }

                    if (inst!=null) {
                        var startval = inst.startVal;
                        var endval = inst.endVal;

                        MystaysBookingWidget.BookingCalendar.CustomHTML.SetCustomMobileDateSelector(null, startval, endval);
                    }
                    
                }
            });



            return rangeObject;
        },
        //Initial method for booking calendar
        Loaded: function Loaded(BookingWidgetContainer) {


            return MystaysBookingWidget.BookingCalendar.LoadRange(BookingWidgetContainer);
        }

    },


    //Functionalities related to the guests section
    GuestsWidget: {
        Constants: {
            GuestSectionClass: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-guestselect-wrap';
            },
            GuestSectionClassAll: function () {
                return ' .booking-guestselect-wrap';
            },
            GuestButtonContainer: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-box.guests .booking-box-wrap';
            },
            GuestButtonClose: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-box.guests .booking-guestselect-close';
            },
            ButtonAdd: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .guest-row .plus';
            },
            ButtonRemove: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .guest-row .minus';
            },
            RoomElement: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-guestselect p.room';
            },
            AdultElement: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-guestselect p.adult';
            },
            ChildElement: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-guestselect p.child';
            },
            ChildElementHigher: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-guestselect p.childhighergrade';
            },
            ChildElementLower: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-guestselect p.childlowergrade';
            },
            ChildElementInfant: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-guestselect p.childinfant';
            },
            RoomElementAll: function () {
                //Adding this check to not update all widgets on hotel meeting tab
                
                    return ' .booking-guestselect p.room';
                
               
            },
            AdultElementAll: function () {


                //Adding this check to not update all widgets on hotel meeting tab
                
                    return ' .booking-guestselect p.adult';
                
            },
            ChildElementAll: function () {
                //Adding this check to not update all widgets on hotel meeting tab
                
                    return ' .booking-guestselect p.child';
                
            },
            ChildHigherElementAll: function () {
                //Adding this check to not update all widgets on hotel meeting tab
                
                    return ' .booking-guestselect p.childhighergrade';
                
            },

            ChildLowerElementAll: function () {
                
                    return ' .booking-guestselect p.childlowergrade';
                
            },

            ChildInfantElementAll: function () {
                //Adding this check to not update all widgets on hotel meeting tab
                
                    return ' .booking-guestselect p.childinfant';
                
            },
            MainGuestsButtonTitle: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-box.guests .input-top-wrap .title';
            },
            MainGuestsButtonTitleAll: function () {
                
                    return ' .booking-box.guests .input-top-wrap .title';
                

            },
            SingleGuestPlaceholder: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .guest-placeholder';
            },
            MultiGuestPlaceholder: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .guests-placeholder';
            },
            SingleGuestPlaceholderAll: function () {
                return ' .guest-placeholder';
            },
            MultiGuestPlaceholderAll: function () {
                return ' .guests-placeholder';
            },
			TravelClickChildrenSection: function () {
                return ' .guestsection-tc';
            },
			RWithChildrenSection: function () {
                return ' .guestsection-rwith';
            },
            MaximumRooms: function () {
                var maxRooms = MystaysBookingWidget.Helper.GetTranslation('MaximumRooms')

                if (!maxRooms) {
                    maxRooms = 9;
                }
                return maxRooms
            },
            MaximumAdults: function () {
                var maxAdults = MystaysBookingWidget.Helper.GetTranslation('MaximumAdults')

                if (!maxAdults) {
                    maxAdults = 15;
                }
                return maxAdults
            },
            MaximumChildren: function () {
                var maxChildren = MystaysBookingWidget.Helper.GetTranslation('MaximumChildren')

                if (!maxChildren) {
                    maxChildren = 9;
                }
                return maxChildren;
            },
            MaximumChildAge: function () {

                var maxAge = MystaysBookingWidget.GuestsWidget.GetMaximumHotelChildAge();

                if (!maxAge) {
                    maxAge = MystaysBookingWidget.Helper.GetTranslation('MaximumChildAge');
                }
                if (!maxAge) {
                    maxAge = 12;
                }
                return maxAge;
            },
            ChildAgeList: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .chidren-ages-dropndown';
            },
            ChildAgeListAll: function () {

                //Adding this check to not update all widgets on hotel meeting tab
                
                    return ' .chidren-ages-dropndown';
                
            },
            ChildAgeInfo: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .child-age-info';
            },
            ChildAgeInfoAll: function () {

                
                    return ' .child-age-info';
                
            },


            GuestWidgetBackButton: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-guestselect-heading span';
            },
            //ChildAgeSection='<li><select class="mystays-bookingengine-age"></select></li>'
            ChildAgeContainerClass: 'mystays-bookingengine-child-age',
            ChildAgeSelects: function () {
                
                    return ' .chidren-ages-dropndown:not(.mystays-bw-notrigger) .mystays-bookingengine-child-age select'
                


            }
        },

        CustomHTMLEvents: function CustomHTMLEvents() {
            MystaysBookingWidget.GuestsWidget.GuestButtonContainerClick();
            MystaysBookingWidget.GuestsWidget.GuestButtonCloseClick();
        },

        //This method is specifically for child age selects loaded by cookies
        //If the max child age for hotel is lesser than the preloaded values then update these selects to the max age of that hotel
        ResetExistingChildAgeSelects: function ResetExistingChildAgeSelects(hotelMaxChildAge) {
            var allChildAgeSelects = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildAgeSelects());

            for (var i = 0; i < allChildAgeSelects.length; i++) {

                //Removing all options from select if the options length is not equal to max child age length
                //Subtracting two as the first 2 options('Please select and <1) can be ignored
                if (allChildAgeSelects[i].options.length - 2 != parseInt(hotelMaxChildAge)) {
                    allChildAgeSelects[i].options.length = 0;

                    MystaysBookingWidget.GuestsWidget.AddingChildOptions(allChildAgeSelects[i]);
                }
                //for (var j = 0; j < allChildAgeSelects[i].options.length; j++) {
                //    var option = allChildAgeSelects[i].options[j];
                //    if (parseInt(option.value) >= parseInt(hotelMaxChildAge)) {
                //        option = null;
                //    }
                //}
            }

            
        },
        //Setting the child age from values
        SetChildAgeFromValues: function SetChildAgeFromValues(totalChildren, childAge, hotelMaxChildAge) {
            if (totalChildren != '' && totalChildren != '0' && childAge != '' && MystaysBookingWidget.Common.UseTravelClickBookingEngine()) {
                totalChildren = parseInt(totalChildren);
                var childAgeSelect = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildAgeSelects());
                var childAgeArray = childAge.split(',');
                var totalGuestsWidgets = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.GuestSectionClassAll()).length;

                //Looping through all the children
                for (var i = 0; i < parseInt(totalChildren); i++) {

                    //Set the index to -1(default value) if the childs age is greater than maximum child age for the hotel
                    if (childAgeArray[i] > parseInt(hotelMaxChildAge)) {
                        childAgeArray[i] = -1;
                    }

                    ////If there is one guest widget then set the age of the corresponding child index to the value from the cookie at the same position
                    //Exception case on hotel meeting tab
                    if (totalGuestsWidgets > 0) {

                        childAgeSelect[i].selectedIndex = parseInt(childAgeArray[i]) + 1;


                        //Setting the border color to red if the default value is selected
                        if (childAgeSelect[i].selectedIndex === 0) {
                            childAgeSelect[i].style.borderColor = "red";
                        } else {
                            childAgeSelect[i].style.borderColor = null;
                        }
                    }

                    //For more than one widget check if there is a select
                    if (childAgeSelect[(i + totalChildren)]) {
                        childAgeSelect[(i + totalChildren)].selectedIndex = parseInt(childAgeArray[i]) + 1;

                        //Setting the border color to red if the default value is selected
                        if (childAgeSelect[(i + totalChildren)].selectedIndex === 0) {
                            childAgeSelect[i].style.borderColor = "red";
                        } else {
                            childAgeSelect[i].style.borderColor = null;
                        }
                    }

                }
            }
        },
        //To load the guest details from cookies or to set the cookies(if they are not present)
        LoadGuestWidgetFromCookies: function LoadGuestWidgetFromCookies() {
            var totalRooms = MystaysBookingWidget.Helper.GetCookie('TotalRoom');
            var totalAdults = MystaysBookingWidget.Helper.GetCookie('TotalAdult');
            var totalChildren = MystaysBookingWidget.Helper.GetCookie('TotalChild');
            var totalChildrenHigher = MystaysBookingWidget.Helper.GetCookie('TotalChildHigher');
            var totalChildrenLower = MystaysBookingWidget.Helper.GetCookie('TotalChildLower');
            var totalChildrenInfant = MystaysBookingWidget.Helper.GetCookie('TotalChildInfant');
            var childAge = MystaysBookingWidget.Helper.GetCookie('TotalChildAge');
            var totalGuests = 0;
            var hidhotelMaxChildAge = document.getElementById('hidhotelmaxchildage');
            var hotelMaxChildAge = MystaysBookingWidget.Helper.GetTranslation('MaximumChildAge');




            //If cookie is not present get value from html
            if (totalRooms == '') {
                totalRooms = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.RoomElement()).children[0].innerHTML;
            }


            //If cookie is not present get value from html
            if (totalAdults == '') {
                totalAdults = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.AdultElement()).children[0].innerHTML;
            }


            //If cookie is not present get value from html
            if (totalChildren == '') {
                totalChildren = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElement()).children[0].innerHTML;
            }

            //If cookie is not present get value from html
            if (totalChildrenHigher == '') {
                totalChildrenHigher = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElementHigher()).children[0].innerHTML;
            }

            //If cookie is not present get value from html
            if (totalChildrenLower == '') {
                totalChildrenLower = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElementLower()).children[0].innerHTML;
            }

            //If cookie is not present get value from html
            if (totalChildrenInfant == '') {
                totalChildrenInfant = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElementInfant()).children[0].innerHTML;
            }

            if (MystaysBookingWidget.Common.UseTravelClickBookingEngine()) {
                totalGuests = parseInt(totalAdults) + parseInt(totalChildren);
                MystaysBookingWidget.GuestsWidget.ChildButtonAddorSet(null, parseInt(totalChildren), totalGuests);
            } else {
                totalGuests = parseInt(totalAdults) + parseInt(totalChildrenHigher) + parseInt(totalChildrenLower) + parseInt(totalChildrenInfant);
                MystaysBookingWidget.GuestsWidget.ChildHigherButtonAddorSet(null, parseInt(totalChildrenHigher), totalGuests);
                MystaysBookingWidget.GuestsWidget.ChildLowerButtonAddorSet(null, parseInt(totalChildrenLower), totalGuests);
                MystaysBookingWidget.GuestsWidget.ChildInfantButtonAddorSet(null, parseInt(totalChildrenInfant), totalGuests);
            }
            


            MystaysBookingWidget.GuestsWidget.RoomsButtonAddorSet(null, parseInt(totalRooms));
            MystaysBookingWidget.GuestsWidget.AdultButtonAddorSet(null, parseInt(totalAdults), totalGuests);
            



            if (hidhotelMaxChildAge && hidhotelMaxChildAge.value != "-1") {
                hotelMaxChildAge = hidhotelMaxChildAge.value;
            }
            

            //Setting child age values
            MystaysBookingWidget.GuestsWidget.SetChildAgeFromValues(totalChildren, childAge, hotelMaxChildAge);
        },
        //Method to show and hide the guest widget
        ShowGuestSection: function ShowGuestSection(ShowSection) {
            var guestSection = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.GuestSectionClass());

            if (ShowSection === true) {
                if (MystaysBookingWidget.Helper.IsMobile()) {
                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetContainerZIndex(true);
                    guestSection.style.transform = "translateX(0)";
                }
                guestSection.ShowElement();

            } else {

                if (MystaysBookingWidget.Helper.IsMobile()) {
                    MystaysBookingWidget.BookingCalendar.CustomHTML.SetContainerZIndex(false);
                    guestSection.style.transform = "translateX(100%)";
                }

                guestSection.HideElement();
            }

        },

        //function to update the label of all guests based on singular or prural guests
        CheckGuestsLabel: function (number) {
            var singleGuestsSelector = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.SingleGuestPlaceholderAll());
            var multiGuestsSelector = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.MultiGuestPlaceholderAll());

            for (var i = 0; i < singleGuestsSelector.length; i++) {
                if (number <= 1) {
                    singleGuestsSelector[i].ShowElement();
                    multiGuestsSelector[i].HideElement();
                } else {
                    singleGuestsSelector[i].HideElement();
                    multiGuestsSelector[i].ShowElement();
                }
            }

        },

        //Function to check the adults based on the number of rooms(There should be as many adults as rooms)
        ValidateAdults: function ValidateAdults(numberOfRooms) {
            
                var adultNodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.AdultElementAll());
                currentAdults = parseInt(adultNodeList[0].children[0].innerHTML);

                if (MystaysBookingWidget.Common.UseTravelClickBookingEngine()) {
                    var childrenNodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildElementAll());

                    currentChildren = parseInt(childrenNodeList[0].children[0].innerHTML);
                } else {
                    var childrenHigherNodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildHigherElementAll());
                    var childrenLowerNodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildLowerElementAll());
                    var childrenInfantNodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildInfantElementAll());

                    currentChildren = parseInt(childrenHigherNodeList[0].children[0].innerHTML) + parseInt(childrenLowerNodeList[0].children[0].innerHTML) + parseInt(childrenInfantNodeList[0].children[0].innerHTML);;
                }
                

                totalGuests = currentAdults + currentChildren;

                if (numberOfRooms > currentAdults) {
                    var newGuests = numberOfRooms;
                    MystaysBookingWidget.GuestsWidget.AdultButtonAddorSet(null, newGuests, totalGuests + 1, true)
                } else {
                    MystaysBookingWidget.GuestsWidget.AdultButtonAddorSet(null, currentAdults, totalGuests, false)
                }
            

        },

        //Add new room or set the room section on load
        RoomsButtonAddorSet: function RoomsButtonAddorSet(event, newNumberOfRooms) {


            
            var nodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.RoomElementAll());
            


            //Fired on click event
            if (newNumberOfRooms == null) {
                newNumberOfRooms = parseInt(nodeList[0].children[0].innerHTML) + 1;
            }

            if (newNumberOfRooms - 1 < MystaysBookingWidget.GuestsWidget.Constants.MaximumRooms()) {
                for (var i = 0; i < nodeList.length; i++) {
                    nodeList[i].children[0].innerHTML = newNumberOfRooms;
                    nodeList[i].children[0].setAttribute("data-count", (newNumberOfRooms));

                    //Adding disabled class to not allow more button click
                    if (newNumberOfRooms == MystaysBookingWidget.GuestsWidget.Constants.MaximumRooms()) {
                        nodeList[i].parentElement.querySelector('.plus').classList.add('disabled');
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                    } else {
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                    }
                    //If the number of rooms is 1 disable minus button
                    if (newNumberOfRooms == 1)
                        nodeList[i].parentElement.querySelector('.minus').classList.add('disabled');
                    }
			
                }

                
                    MystaysBookingWidget.Helper.SetCookie('TotalRoom', newNumberOfRooms);
                



                

                //Validate on button click
                MystaysBookingWidget.GuestsWidget.ValidateAdults(newNumberOfRooms);

            
        },

        //Remove room
        RoomsButtonRemove: function RoomsButtonRemove(event) {

            
            var nodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.RoomElementAll());
            
            var removebuttons = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ButtonRemove());
            var newNumberOfRooms = parseInt(nodeList[0].children[0].innerHTML) - 1;
            if (parseInt(nodeList[0].children[0].innerHTML) > 1 ) {

                for (var i = 0; i < nodeList.length; i++) {


                    nodeList[i].children[0].innerHTML = newNumberOfRooms;
                    nodeList[i].children[0].setAttribute("data-count", newNumberOfRooms);

                    //Adding disabled class to not allow more button click
                    if (parseInt(nodeList[i].children[0].innerHTML) == 1) {
                        nodeList[i].parentElement.querySelector('.minus').classList.add('disabled');
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    } else {
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    }

                    
                    MystaysBookingWidget.Helper.SetCookie('TotalRoom', newNumberOfRooms);
                    

                }

                

                //Validate adults based on rooms count
                MystaysBookingWidget.GuestsWidget.ValidateAdults(newNumberOfRooms);
            }
        },

        //Add new adult(newNumberAdults and newTotalGuests are passed when the function is triggered from LoadGuestWidgetFromCookies) or ValidateAdults
        AdultButtonAddorSet: function AdultButtonAddorSet(event, newNumberAdults, newTotalGuests, updateAdultsPerRoom) {
            var nodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.AdultElementAll());
            var roomCount = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.RoomElement()).children[0].innerHTML;
            var disableAdults;


            //Fired on click event
            if (newNumberAdults == null) {
                newNumberAdults = parseInt(nodeList[0].children[0].innerHTML) + 1;
            }

            if (roomCount == newNumberAdults) {
                disableAdults = true;
            }

            if (newTotalGuests == null) {
                newTotalGuests = parseInt(document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll()).getAttribute("data-count")) + 1;
            }


            if (newNumberAdults - 1 < MystaysBookingWidget.GuestsWidget.Constants.MaximumAdults() || updateAdultsPerRoom) {
                for (var i = 0; i < nodeList.length; i++) {
                    nodeList[i].children[0].innerHTML = newNumberAdults;
                    nodeList[i].children[0].setAttribute("data-count", newNumberAdults);

                    //Adding disabled class to not allow more button click
                    if (newNumberAdults == MystaysBookingWidget.GuestsWidget.Constants.MaximumAdults()) {
                        nodeList[i].parentElement.querySelector('.plus').classList.add('disabled');
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                    } else {
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                    }



                    //If disableAdults is passed(from ValidateAdults method) set minus to disabled else set it to enabled
                    //OR If the number of adults is 1 disable minus button
                    if (disableAdults || newNumberAdults == 1) {
                        nodeList[i].parentElement.querySelector('.minus').classList.add('disabled');
                    } else {
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                    }
                }

                var mainGuestTitleAll = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll());
                var newCount = 0;
                //Updating main guests section
                for (var i = 0; i < mainGuestTitleAll.length; i++) {

                    mainGuestTitleAll[i].innerHTML = newTotalGuests;
                    mainGuestTitleAll[i].setAttribute("data-count", newTotalGuests);
                }
                MystaysBookingWidget.GuestsWidget.CheckGuestsLabel(newTotalGuests);

                MystaysBookingWidget.Helper.SetCookie('TotalAdult', newNumberAdults);

                
                
                
            }
        },

        //Remove adult
        AdultButtonRemove: function AdultButtonRemove(event) {
            var nodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.AdultElementAll());
            var currentRoomCount = parseInt(document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.RoomElement()).children[0].innerHTML);

            if (parseInt(nodeList[0].children[0].innerHTML) > currentRoomCount) {
                for (var i = 0; i < nodeList.length; i++) {
                    nodeList[i].children[0].innerHTML = parseInt(nodeList[i].children[0].innerHTML) - 1;
                    nodeList[i].children[0].setAttribute("data-count", (parseInt(nodeList[i].children[0].getAttribute("data-count")) - 1));

                    //Adding disabled class to not allow more button click
                    if (parseInt(nodeList[i].children[0].innerHTML) == 1 || parseInt(nodeList[i].children[0].innerHTML) == currentRoomCount) {
                        nodeList[i].parentElement.querySelector('.minus').classList.add('disabled');
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    } else {
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    }



                    MystaysBookingWidget.Helper.SetCookie('TotalAdult', nodeList[i].children[0].innerHTML);
                }
                var mainGuestTitleAll = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll());
                var newCount = 0;
                //Updating main guests section
                for (var i = 0; i < mainGuestTitleAll.length; i++) {
                    newCount = parseInt(mainGuestTitleAll[i].getAttribute("data-count")) - 1;
                    mainGuestTitleAll[i].innerHTML = newCount;
                    mainGuestTitleAll[i].setAttribute("data-count", newCount);
                }
                MystaysBookingWidget.GuestsWidget.CheckGuestsLabel(newCount);

                
                
                
            }
        },

        //Add child
        ChildButtonAddorSet: function ChildButtonAddorSet(event, newNumberChildren, newTotalGuests) {
            var nodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildElementAll());

            //Fired on click event
            if (newNumberChildren == null) {
                newNumberChildren = parseInt(nodeList[0].children[0].innerHTML) + 1;
            }

            if (newTotalGuests == null) {
                newTotalGuests = parseInt(document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll()).getAttribute("data-count")) + 1;
            }

            if (newNumberChildren - 1 < MystaysBookingWidget.GuestsWidget.Constants.MaximumChildren()) {
                for (var i = 0; i < nodeList.length; i++) {
                    nodeList[i].children[0].innerHTML = newNumberChildren;
                    nodeList[i].children[0].setAttribute("data-count", newNumberChildren);

                    //Adding disabled class to not allow more button click
                    if (newNumberChildren == MystaysBookingWidget.GuestsWidget.Constants.MaximumChildren()) {
                        nodeList[i].parentElement.querySelector('.plus').classList.add('disabled');
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                    } else {
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                    }

                    //If the number of children is 0 disable minus button
                    if (newNumberChildren == 0) {
                        nodeList[i].parentElement.querySelector('.minus').classList.add('disabled');
                    }

                    //Add a single child age element when event is fired by click of add child button
                    if (event != null) {
                        MystaysBookingWidget.GuestsWidget.AddChildAge(i, true);
                    }
                    //Render number of child age sections as per number of children(When fired by LoadGuestWidgetFromCookies)
                    else {
                        for (var j = 0; j < newNumberChildren; j++) {
                            MystaysBookingWidget.GuestsWidget.AddChildAge(i, false);
                        }
                    }


                }

                var mainGuestTitleAll = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll());
                var newCount = 0;
                //Updating main guests section
                for (var i = 0; i < mainGuestTitleAll.length; i++) {

                    mainGuestTitleAll[i].innerHTML = newTotalGuests;
                    mainGuestTitleAll[i].setAttribute("data-count", newTotalGuests);

                }
                MystaysBookingWidget.GuestsWidget.CheckGuestsLabel(newTotalGuests);
                MystaysBookingWidget.Helper.SetCookie('TotalChild', newNumberChildren);
               
            }
        },

        //Remove child
        ChildButtonRemove: function ChildButtonRemove(event) {
            var nodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildElementAll());


            if (parseInt(nodeList[0].children[0].innerHTML) > 0) {
                for (var i = 0; i < nodeList.length; i++) {
                    nodeList[i].children[0].innerHTML = parseInt(nodeList[i].children[0].innerHTML) - 1;
                    nodeList[i].children[0].setAttribute("data-count", (parseInt(nodeList[i].children[0].getAttribute("data-count")) - 1));

                    //Adding disabled class to not allow more button click
                    if (parseInt(nodeList[i].children[0].innerHTML) == 0) {
                        nodeList[i].parentElement.querySelector('.minus').classList.add('disabled');
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    } else {
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    }



                    MystaysBookingWidget.Helper.SetCookie('TotalChild', nodeList[i].children[0].innerHTML);
                }
                var mainGuestTitleAll = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll());
                var newCount = 0;
                //Updating main guests section
                for (var i = 0; i < mainGuestTitleAll.length; i++) {
                    newCount = parseInt(mainGuestTitleAll[i].getAttribute("data-count")) - 1;
                    mainGuestTitleAll[i].innerHTML = newCount;
                    mainGuestTitleAll[i].setAttribute("data-count", newCount);
                    MystaysBookingWidget.GuestsWidget.RemoveChildAge(i);
                }
                MystaysBookingWidget.GuestsWidget.CheckGuestsLabel(newCount);
                
            }
        },

        //Add child high school
        ChildHigherButtonAddorSet: function ChildButtonAddorSet(event, newNumberChildren, newTotalGuests) {
            var nodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildHigherElementAll());
            
            //Fired on click event
            if (newNumberChildren == null) {
                newNumberChildren = parseInt(nodeList[0].children[0].innerHTML) + 1;
            }


            if (newTotalGuests == null) {
                newTotalGuests = parseInt(document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll()).getAttribute("data-count")) + 1;
            }

            if (newNumberChildren - 1 < MystaysBookingWidget.GuestsWidget.Constants.MaximumChildren()) {
                for (var i = 0; i < nodeList.length; i++) {
                    nodeList[i].children[0].innerHTML = newNumberChildren;
                    nodeList[i].children[0].setAttribute("data-count", newNumberChildren);

                    //Adding disabled class to not allow more button click
                    if (newNumberChildren == MystaysBookingWidget.GuestsWidget.Constants.MaximumChildren()) {
                        nodeList[i].parentElement.querySelector('.plus').classList.add('disabled');
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                    } else {
                    nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                    }

                    //If the number of children is 0 disable minus button
                    if (newNumberChildren == 0) {
                        nodeList[i].parentElement.querySelector('.minus').classList.add('disabled');
                    }
                }

                var mainGuestTitleAll = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll());
                var newCount = 0;
                //Updating main guests section
                for (var i = 0; i < mainGuestTitleAll.length; i++) {

                    mainGuestTitleAll[i].innerHTML = newTotalGuests;
                    mainGuestTitleAll[i].setAttribute("data-count", newTotalGuests);

                }
                MystaysBookingWidget.GuestsWidget.CheckGuestsLabel(newTotalGuests);
                MystaysBookingWidget.Helper.SetCookie('TotalChildHigher', newNumberChildren);
                
            }
        },

        //Remove child high school
        ChildHigherButtonRemove: function ChildHigherButtonRemove(event) {
            var nodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildHigherElementAll());


            if (parseInt(nodeList[0].children[0].innerHTML) > 0) {
                for (var i = 0; i < nodeList.length; i++) {
                    nodeList[i].children[0].innerHTML = parseInt(nodeList[i].children[0].innerHTML) - 1;
                    nodeList[i].children[0].setAttribute("data-count", (parseInt(nodeList[i].children[0].getAttribute("data-count")) - 1));

                    //Adding disabled class to not allow more button click
                    if (parseInt(nodeList[i].children[0].innerHTML) == 0) {
                        nodeList[i].parentElement.querySelector('.minus').classList.add('disabled');
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    } else {
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    }



                    MystaysBookingWidget.Helper.SetCookie('TotalChildHigher', nodeList[i].children[0].innerHTML);
                }
                var mainGuestTitleAll = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll());
                var newCount = 0;
                //Updating main guests section
                for (var i = 0; i < mainGuestTitleAll.length; i++) {
                    newCount = parseInt(mainGuestTitleAll[i].getAttribute("data-count")) - 1;
                    mainGuestTitleAll[i].innerHTML = newCount;
                    mainGuestTitleAll[i].setAttribute("data-count", newCount);
                    
                }
                MystaysBookingWidget.GuestsWidget.CheckGuestsLabel(newCount);
                
            }
        },

        //Add child lower school
        ChildLowerButtonAddorSet: function ChildButtonAddorSet(event, newNumberChildren, newTotalGuests) {
            var nodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildLowerElementAll());

            //Fired on click event
            if (newNumberChildren == null) {
                newNumberChildren = parseInt(nodeList[0].children[0].innerHTML) + 1;
            }


            if (newTotalGuests == null) {
                newTotalGuests = parseInt(document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll()).getAttribute("data-count")) + 1;
            }

            if (newNumberChildren - 1 < MystaysBookingWidget.GuestsWidget.Constants.MaximumChildren()) {
                for (var i = 0; i < nodeList.length; i++) {
                    nodeList[i].children[0].innerHTML = newNumberChildren;
                    nodeList[i].children[0].setAttribute("data-count", newNumberChildren);

                    //Adding disabled class to not allow more button click
                    if (newNumberChildren == MystaysBookingWidget.GuestsWidget.Constants.MaximumChildren()) {
                        nodeList[i].parentElement.querySelector('.plus').classList.add('disabled');
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                    } else {
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                        }

                        //If the number of children is 0 disable minus button
                        if (newNumberChildren == 0) {
                            nodeList[i].parentElement.querySelector('.minus').classList.add('disabled');
                        }
                    }

                    var mainGuestTitleAll = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll());
                    var newCount = 0;
                    //Updating main guests section
                    for (var i = 0; i < mainGuestTitleAll.length; i++) {

                        mainGuestTitleAll[i].innerHTML = newTotalGuests;
                        mainGuestTitleAll[i].setAttribute("data-count", newTotalGuests);

                    }
                    MystaysBookingWidget.GuestsWidget.CheckGuestsLabel(newTotalGuests);
                    MystaysBookingWidget.Helper.SetCookie('TotalChildLower', newNumberChildren);

                }
            
        },

        //Remove child lower school
        ChildLowerButtonRemove: function ChildLowerButtonRemove(event) {
            var nodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildLowerElementAll());


            if (parseInt(nodeList[0].children[0].innerHTML) > 0) {
                for (var i = 0; i < nodeList.length; i++) {
                    nodeList[i].children[0].innerHTML = parseInt(nodeList[i].children[0].innerHTML) - 1;
                    nodeList[i].children[0].setAttribute("data-count", (parseInt(nodeList[i].children[0].getAttribute("data-count")) - 1));

                    //Adding disabled class to not allow more button click
                    if (parseInt(nodeList[i].children[0].innerHTML) == 0) {
                        nodeList[i].parentElement.querySelector('.minus').classList.add('disabled');
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    } else {
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    }



                    MystaysBookingWidget.Helper.SetCookie('TotalChildLower', nodeList[i].children[0].innerHTML);
                }
                var mainGuestTitleAll = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll());
                var newCount = 0;
                //Updating main guests section
                for (var i = 0; i < mainGuestTitleAll.length; i++) {
                    newCount = parseInt(mainGuestTitleAll[i].getAttribute("data-count")) - 1;
                    mainGuestTitleAll[i].innerHTML = newCount;
                    mainGuestTitleAll[i].setAttribute("data-count", newCount);

                }
                MystaysBookingWidget.GuestsWidget.CheckGuestsLabel(newCount);
                
            }
        },

        //Add child infant school
        ChildInfantButtonAddorSet: function ChildButtonAddorSet(event, newNumberChildren, newTotalGuests) {
            var nodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildInfantElementAll());

            //Fired on click event
            if (newNumberChildren == null) {
                newNumberChildren = parseInt(nodeList[0].children[0].innerHTML) + 1;
            }


            if (newTotalGuests == null) {
                newTotalGuests = parseInt(document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll()).getAttribute("data-count")) + 1;
            }

            if (newNumberChildren - 1 < MystaysBookingWidget.GuestsWidget.Constants.MaximumChildren()) {
                for (var i = 0; i < nodeList.length; i++) {
                    nodeList[i].children[0].innerHTML = newNumberChildren;
                    nodeList[i].children[0].setAttribute("data-count", newNumberChildren);

                    //Adding disabled class to not allow more button click
                    if (newNumberChildren == MystaysBookingWidget.GuestsWidget.Constants.MaximumChildren()) {
                        nodeList[i].parentElement.querySelector('.plus').classList.add('disabled');
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                    } else {
                    nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                    }

                    //If the number of children is 0 disable minus button
                    if (newNumberChildren == 0) {
                        nodeList[i].parentElement.querySelector('.minus').classList.add('disabled');
                    }
                }

                var mainGuestTitleAll = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll());
                var newCount = 0;
                //Updating main guests section
                for (var i = 0; i < mainGuestTitleAll.length; i++) {

                    mainGuestTitleAll[i].innerHTML = newTotalGuests;
                    mainGuestTitleAll[i].setAttribute("data-count", newTotalGuests);

                }
                MystaysBookingWidget.GuestsWidget.CheckGuestsLabel(newTotalGuests);
                MystaysBookingWidget.Helper.SetCookie('TotalChildInfant', newNumberChildren);

            }
        },

        //Remove child infant
        ChildInfantButtonRemove: function ChildInfantButtonRemove(event) {
            var nodeList = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildInfantElementAll());


            if (parseInt(nodeList[0].children[0].innerHTML) > 0) {
                for (var i = 0; i < nodeList.length; i++) {
                    nodeList[i].children[0].innerHTML = parseInt(nodeList[i].children[0].innerHTML) - 1;
                    nodeList[i].children[0].setAttribute("data-count", (parseInt(nodeList[i].children[0].getAttribute("data-count")) - 1));

                    //Adding disabled class to not allow more button click
                    if (parseInt(nodeList[i].children[0].innerHTML) == 0) {
                        nodeList[i].parentElement.querySelector('.minus').classList.add('disabled');
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    } else {
                        nodeList[i].parentElement.querySelector('.minus').classList.remove('disabled');
                        nodeList[i].parentElement.querySelector('.plus').classList.remove('disabled');
                    }



                    MystaysBookingWidget.Helper.SetCookie('TotalChildInfant', nodeList[i].children[0].innerHTML);
                }
                var mainGuestTitleAll = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.MainGuestsButtonTitleAll());
                var newCount = 0;
                //Updating main guests section
                for (var i = 0; i < mainGuestTitleAll.length; i++) {
                    newCount = parseInt(mainGuestTitleAll[i].getAttribute("data-count")) - 1;
                    mainGuestTitleAll[i].innerHTML = newCount;
                    mainGuestTitleAll[i].setAttribute("data-count", newCount);

                }
                MystaysBookingWidget.GuestsWidget.CheckGuestsLabel(newCount);
                
            }
        },



        //Method to dynamically generate child age selector for guest widget based on index passed
        AddChildAge: function AddChildAge(index, updateCookie) {

            
                var ageContainerAll = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildAgeListAll());

                var ageListItem = document.createElement('li');
                ageListItem.className = MystaysBookingWidget.GuestsWidget.Constants.ChildAgeContainerClass;
                var ageSelectContainer = document.createElement('div');
                var ageSelect = document.createElement('select');
                var ageSelectInfo = document.createElement('i');
                ageSelect.style.borderColor = "red";

                MystaysBookingWidget.GuestsWidget.AddingChildOptions(ageSelect);

                ageSelectContainer.appendChild(ageSelect);
                ageSelectContainer.appendChild(ageSelectInfo);

                ageListItem.appendChild(ageSelectContainer);
                ageContainerAll[index].appendChild(ageListItem);

                if (updateCookie) {
                    MystaysBookingWidget.GuestsWidget.SetChildAgeCookie();
                }

            
                    //Show age info box
                    document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildAgeInfoAll())[index].ShowElement();
            
            
        },
        //Method to generate all child age options
        AddingChildOptions: function AddingChildOptions(ageSelect) {
            //Appending please select
            var ageOption = document.createElement('option');
            ageOption.setAttribute('value', '');
            ageOption.innerHTML = "";
            ageSelect.appendChild(ageOption);


            //Appending less than 1
            var ageOption = document.createElement('option');
            ageOption.setAttribute('value', 0);
            ageOption.innerHTML = "< 1";
            ageSelect.appendChild(ageOption);

            //Apending value more than one
            for (var i = 1; i <= MystaysBookingWidget.GuestsWidget.Constants.MaximumChildAge(); i++) {
                var ageOption = document.createElement('option');
                ageOption.setAttribute('value', i);
                ageOption.innerHTML = i;
                ageSelect.appendChild(ageOption);
            }
        },

        //Method to remove child when child count is reduced for guest widget based on index passed
        RemoveChildAge: function RemoveChildAge(index) {
            var ageContainerAll = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildAgeListAll());
            ageContainerAll[index].removeChild(ageContainerAll[index].lastChild);

            //Updating cookie
            var childAgeCookie = MystaysBookingWidget.Helper.GetCookie('TotalChildAge');
            var childAgeCookieArray = childAgeCookie.split(',');


            //Appending the slash at the end as this is how the value is originally set
            var newChildAgeCookie = childAgeCookieArray.splice(0, childAgeCookieArray.length - 2).join(',') + ",";
            MystaysBookingWidget.Helper.SetCookie('TotalChildAge', newChildAgeCookie);


            //Hide age info box
            if (ageContainerAll[index].children.length === 0) {
                document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildAgeInfoAll())[index].HideElement();
            }
        },

        //Method to get the selected hotels maximum child age
        GetMaximumHotelChildAge: function GetMaximumHotelChildAge() {
            var inputElement = document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchInputClass());
            var hotelcity = JSON.parse(inputElement.getAttribute('data-HotelCity'));

            if (hotelcity && hotelcity.HotelMaxChildAge != null) {
                return parseInt(hotelcity.HotelMaxChildAge);
            }

            //Hotel page
            if (document.getElementById('hidhotelmaxchildage') && document.getElementById('hidhotelmaxchildage').value != "-1") {
                return document.getElementById('hidhotelmaxchildage').value;
            }
        },

        //Function to clear all hotel child age when a user selects a new hotel
        CheckChildAge: function CheckChildAge(hotelItem) {

            //For RWith Child Age Is not needed
            if (MystaysBookingWidget.Common.UseTravelClickBookingEngine()) {
                var totalChildren = MystaysBookingWidget.Helper.GetCookie('TotalChild');
                var childAge = MystaysBookingWidget.Helper.GetCookie('TotalChildAge');
                var hotelMaxChildAge = hotelItem.getAttribute('data-hotelmaxchildage');

                //Reseting already loaded selects
                MystaysBookingWidget.GuestsWidget.ResetExistingChildAgeSelects(hotelMaxChildAge);
                //Setting child age values
                MystaysBookingWidget.GuestsWidget.SetChildAgeFromValues(totalChildren, childAge, hotelMaxChildAge);

                //Updating child age cookie
                MystaysBookingWidget.GuestsWidget.SetChildAgeCookie();
            }
        },
        

        //Function to set the MystaysChildAge cookie
        SetChildAgeCookie: function SetChildAgeCookie() {
            var childAgeString = '';
            //Looping through each child age selector to get the value
            for (var i = 0; i < MystaysBookingWidget.Common.BookingWidgetContainerElement().getElementsByClassName(MystaysBookingWidget.GuestsWidget.Constants.ChildAgeContainerClass).length; i++) {

                childAgeString += MystaysBookingWidget.Common.BookingWidgetContainerElement().getElementsByClassName(MystaysBookingWidget.GuestsWidget.Constants.ChildAgeContainerClass)[i].getElementsByTagName('select')[0].value + ',';
            }

            MystaysBookingWidget.Helper.SetCookie('TotalChildAge', childAgeString);
        },

        //function fired when used changes child age(The corresponding child age item should be updated on all the widgets on the page)
        ChildAgeChange: function ChildAgeChange() {

            document.addEventListener('change', function (e) {

                var totalGuestsWidgets = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.GuestSectionClassAll()).length;
                var childAgeSelect = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ChildAgeSelects());
                var totalSelects = childAgeSelect.length;

                //Setting the border color to red if the default value is selected
                if (e.target.selectedIndex === 0) {
                    e.target.style.borderColor = "red";
                } else {
                    e.target.style.borderColor = null;
                }

                for (var i = 0; i < childAgeSelect.length; i++) {
                    if (e.target && childAgeSelect[i] == e.target) {

                        //This is for hotel page (Although 3 widgets are present the meeting widget should NOT be updated)
                        if (totalGuestsWidgets == 3 ) {

                            //Select from first item is changed
                            if (i < totalSelects / 2) {
                                //get index of corresponding age in other widget
                                var indexOfSecSelect = (totalSelects / 2) + i;
                            }
                            //If the select is from the second widget
                            else {
                                //get index of corresponding age in other widget
                                var indexOfSecSelect = Math.abs((totalSelects / 2) - i);
                            }

                            childAgeSelect[indexOfSecSelect].selectedIndex = e.target.selectedIndex;

                            //Setting the border color to red if the default value is selected
                            if (childAgeSelect[indexOfSecSelect].selectedIndex === 0) {
                                childAgeSelect[indexOfSecSelect].style.borderColor = "red";
                            } else {
                                childAgeSelect[indexOfSecSelect].style.borderColor = null;
                            }
                        }
                        MystaysBookingWidget.GuestsWidget.SetChildAgeCookie();
                    }
                }
            })
        },


        //Method to bind all the add and remove buttons
        ButtonClick: function ButtonClick() {

            //Attaching the child age select listener
            MystaysBookingWidget.GuestsWidget.ChildAgeChange();

            var addbuttons = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ButtonAdd());
            var removebuttons = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.ButtonRemove());

            var roomsElement = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.RoomElement());
            var AdultElement = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.AdultElement());
            var ChildElement = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElement());
            var ChildElementHigher = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElementHigher());
            var ChildElementLower = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElementLower());
            var ChildElementInfant = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElementInfant());

            for (var i = 0; i < addbuttons.length; i++) {

                if (addbuttons[i].parentElement.contains(roomsElement)) {
                    addbuttons[i].addEventListener('click', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.GuestsWidget.RoomsButtonAddorSet(e);
                    });
                } else if (addbuttons[i].parentElement.contains(AdultElement)) {
                    addbuttons[i].addEventListener('click', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.GuestsWidget.AdultButtonAddorSet(e);
                    });
                } else if (addbuttons[i].parentElement.contains(ChildElement)) {
                    addbuttons[i].addEventListener('click', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.GuestsWidget.ChildButtonAddorSet(e);
                    });
                } else if (addbuttons[i].parentElement.contains(ChildElementHigher)) {
                    addbuttons[i].addEventListener('click', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.GuestsWidget.ChildHigherButtonAddorSet(e);
                    });
                } else if (addbuttons[i].parentElement.contains(ChildElementLower)) {
                    addbuttons[i].addEventListener('click', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.GuestsWidget.ChildLowerButtonAddorSet(e);
                    });
                } else if (addbuttons[i].parentElement.contains(ChildElementInfant)) {
                    addbuttons[i].addEventListener('click', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.GuestsWidget.ChildInfantButtonAddorSet(e);
                    });
                }
            }

            for (var i = 0; i < removebuttons.length; i++) {
                if (removebuttons[i].parentElement.contains(roomsElement)) {
                    removebuttons[i].addEventListener('click', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.GuestsWidget.RoomsButtonRemove(e);
                    });
                } else if (removebuttons[i].parentElement.contains(AdultElement)) {
                    removebuttons[i].addEventListener('click', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.GuestsWidget.AdultButtonRemove(e);
                    });
                } else if (removebuttons[i].parentElement.contains(ChildElement)) {
                    removebuttons[i].addEventListener('click', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.GuestsWidget.ChildButtonRemove(e)
                    });
                } else if (removebuttons[i].parentElement.contains(ChildElementHigher)) {
                    removebuttons[i].addEventListener('click', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.GuestsWidget.ChildHigherButtonRemove(e)
                    });
                } else if (removebuttons[i].parentElement.contains(ChildElementLower)) {
                    removebuttons[i].addEventListener('click', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.GuestsWidget.ChildLowerButtonRemove(e)
                    });
                } else if (removebuttons[i].parentElement.contains(ChildElementInfant)) {
                    removebuttons[i].addEventListener('click', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        MystaysBookingWidget.GuestsWidget.ChildInfantButtonRemove(e)
                    });
                }
            }

            var guestWidgetbackButton = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.GuestWidgetBackButton());

            guestWidgetbackButton.addEventListener('click', function (e) {
                MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                MystaysBookingWidget.GuestsWidget.ShowGuestSection(false);
                document.querySelector(MystaysBookingWidget.Common.BookingWidgetContainer()).classList.remove('mystays-bookingwidget-active');

            })
        },



        //Method invoked when user clicks on the guest button
        GuestButtonContainerClick: function GuestButtonContainerClick() {
            document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.GuestButtonContainer()).addEventListener('click', function (e) {
                MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                //Hide calendar
                if (MystaysBookingWidget.Common.CurrentRangeObject()) {
                    MystaysBookingWidget.Common.CurrentRangeObject().hide();
                    MystaysBookingWidget.HotelSearch.ShowHotelList(false);
                }
                MystaysBookingWidget.GuestsWidget.ShowGuestSection(true);

            })
        },

        //Close or back button to close the guest widget
        GuestButtonCloseClick: function () {
            document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.GuestButtonClose()).addEventListener('click', function (e) {
                MystaysBookingWidget.Common.CurrentEventTarget = e.target;

                MystaysBookingWidget.GuestsWidget.ShowGuestSection(false);

                document.querySelector(MystaysBookingWidget.Common.BookingWidgetContainer()).classList.remove('mystays-bookingwidget-active');
            })
        },
		
		//Function to show and hide the child section based on the booking wngine
		UpdateChildSection:function UpdateChildSection(){
			var childSections=null;
			if(MystaysBookingWidget.Common.UseTravelClickBookingEngine()){
				childSections = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.TravelClickChildrenSection());
			}
			else{
				childSections = document.querySelectorAll(MystaysBookingWidget.GuestsWidget.Constants.RWithChildrenSection());
			}
			
			for(var i=0; i< childSections.length; i++){
					childSections[i].ShowElement();
			}
			
		},
        //Method called on document ready to invoke guest wigdget functionality
        Loaded: function Loaded() {

            MystaysBookingWidget.GuestsWidget.CustomHTMLEvents();

            MystaysBookingWidget.GuestsWidget.ButtonClick();

            if (MystaysBookingWidget.GuestsWidget.LoadWidgetOnce == null) {
                MystaysBookingWidget.GuestsWidget.LoadGuestWidgetFromCookies();
                MystaysBookingWidget.GuestsWidget.LoadWidgetOnce = false;
            }

        }
    },


    //Hotel Search
    HotelSearch: {
        Constants: {
            //Flag to check whether cities are to be rendered or not
            FilterCities: false,


            MasterSearchList: [],

            SearchInputClass: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .hotel-search-input';
            },

            ClearButton: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .reset-search-list';
            },
            HotelBindListDefault: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .hotel-search-list-default';
            },
            HotelBindList: function () {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .hotel-search-list';
            },
            HotelBindListActiveElement: function () {
                return '.hotel-search-list .active';
            },
            //Each hotel or city item generated on autocomplete
            HotelSelectItem: function () {
                return 'hotel-sel-item';
            },

            HotelSearchError: function () {
                return 'bookingwidget-search-error';
            },

            HotelSearchStartDateError: function () {
                return 'bookingwidget-startdate-error';
            },

            //Footer section
            FooterCityList: function () {
                return 'city-list';
            },

            FooterCityItemSelector: function () {
                return 'span';
            },

            FooterHotelList: function () {
                return 'hotel-list';
            },

            FooterHotelItemSelector: function () {
                return '.hotel-search-item span';
            },

            APITargetLanguage: function APITargetLanguage() {
                if (MystaysBookingWidget.Common.SelectedLanguage === 'en') {
                    return 'en';
                }
                else if (MystaysBookingWidget.Common.SelectedLanguage === 'ja') {
                    return 'ja-jp';
                } else if (MystaysBookingWidget.Common.SelectedLanguage === 'ko') {
                    return 'ko-kr';
                } else if (MystaysBookingWidget.Common.SelectedLanguage === 'zh') {
                    return 'zh-cn';
                } else if (MystaysBookingWidget.Common.SelectedLanguage === 'tw') {
                    return 'zh-tw';
                }


            },

            //Footer section ends
            SearchMessageContainer: function SearchMessageContainer() {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-search-msg-wrap';
            },
            SearchMessageAnchor: function SearchMessageAnchor() {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + ' .booking-search-msg-wrap a';
            },
            SearchMessagePlaceholder: function SearchMessagePlaceholder(hotelCity) {
                if (hotelCity.Type == 'Hotel') {
                    return MystaysBookingWidget.Helper.GetTranslation('SearchMessageHotelPlaceholder');
                } else {
                    return MystaysBookingWidget.Helper.GetTranslation('SearchMessageCityPlaceholder');
                }
            },
            CityLabel: ['Japanese Cities', 'Cities', 'Chinese Cities', 'Taiwanese Cities', 'Korean Cities', 'CityLabel'],
            HotelLabel: ['Japanese Hotels', 'Hotels', 'Chinese Hotels', 'Taiwanese Hotels', 'Korean Hotels', 'HotelLabel'],

        },

        //Removing all hotels from list
        RemoveHotelList: function RemoveHotelList() {
            //Removing all child items
            var bindList = document.querySelector(MystaysBookingWidget.HotelSearch.Constants.HotelBindList());
            while (bindList.children[0]) {
                bindList.children[0].remove();
            }
        },

        //Method to show and hide hotel list
        ShowHotelList: function ShowHotelList(showHotelList) {

            var hotelList = document.querySelector(MystaysBookingWidget.HotelSearch.Constants.HotelBindList());

            if (hotelList) {
                if (showHotelList === true) {
                    document.querySelector(MystaysBookingWidget.HotelSearch.Constants.HotelBindList()).parentElement.ShowElement();
                } else {
                    document.querySelector(MystaysBookingWidget.HotelSearch.Constants.HotelBindList()).parentElement.HideElement();
                }
            }
        },

        CustomHTMLEvents: {

            HotelSearchFocus: function HotelSearchFocus() {
                document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchInputClass()).addEventListener('focus', function (e, args) {
                    MystaysBookingWidget.Common.CurrentEventTarget = e.target;

                    //Removing the error class
                    this.parentNode.classList.remove(MystaysBookingWidget.HotelSearch.Constants.HotelSearchError());
                    MystaysBookingWidget.HotelSearch.ShowHotelList(true);

                    //Hiding search message
                    MystaysBookingWidget.HotelSearch.ShowSearchMessage(false);

                    //Hiding calendar object if it is shown
                    MystaysBookingWidget.Common.CurrentRangeObject().hide();

                    //Hiding guests section if it is shown
                    MystaysBookingWidget.GuestsWidget.ShowGuestSection(false);

                   
                    var filteredHotelsList = MystaysBookingWidget.HotelSearch.LoadSearchResults(e.target.value);
                    MystaysBookingWidget.HotelSearch.BindHotelsCityData(filteredHotelsList);

                })


            },
            HotelSearchKeyUp: function HotelSearchKeyUp() {
                document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchInputClass()).addEventListener('keyup', function (e, args) {
                    MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                    var filteredHotelsList = MystaysBookingWidget.HotelSearch.LoadSearchResults(e.target.value);

                    MystaysBookingWidget.HotelSearch.BindHotelsCityData(filteredHotelsList);


                    //Showing the reset link when a value is present
                    if (e.which != 40 && e.which != 13 && e.target.value !== '') {
                        document.querySelector(MystaysBookingWidget.HotelSearch.Constants.ClearButton()).ShowElement();
                    }
                    //Hiding the reset button on keyup
                    else if (e.target.value == '') {
                        document.querySelector(MystaysBookingWidget.HotelSearch.Constants.ClearButton()).HideElement();
                    }
                })
            },

            HotelSearchKeyDown: function HotelSearchKeyDown() {
                document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchInputClass()).addEventListener('keydown', function (e, args) {
                    MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                    if (e.which === 13) {
                        //Get current active elemnt
                        var activeElement = MystaysBookingWidget.Common.BookingWidgetContainerElement().getElementsByClassName('active')[0];

                        //Triggering hotel select
                        MystaysBookingWidget.HotelSearch.TriggerHotelCitySelect(activeElement, false);

                        e.stopPropagation();
                        return;
                    }

                    if (e.which == 40) {
                        e.preventDefault();
                        e.target.blur();

                        //Getting current active element
                        var activeElement = MystaysBookingWidget.Common.BookingWidgetContainerElement().getElementsByClassName('active')[0];

                        //Removing active class
                        activeElement.classList.remove('active');

                        //Getting next sibling
                        var siblingHotelItem = MystaysBookingWidget.Helper.GetSiblingByClass(activeElement, MystaysBookingWidget.HotelSearch.Constants.HotelSelectItem(), false);

                        //Focusing on sibling and adding 'active' class
                        siblingHotelItem.classList.add('active');
                        activeElement.blur();
                        siblingHotelItem.focus();
                    }




                })
            },

            //Method to fire when user scrolls down on each hotel
            HotelItemKeyDown: function HotelItemKeyDown() {

                for (var i = 0; i < MystaysBookingWidget.Common.BookingWidgetContainerElement().querySelectorAll(MystaysBookingWidget.HotelSearch.Constants.HotelBindList() + ' .' + MystaysBookingWidget.HotelSearch.Constants.HotelSelectItem()).length; i++) {
                    var listItem = MystaysBookingWidget.Common.BookingWidgetContainerElement().querySelectorAll(MystaysBookingWidget.HotelSearch.Constants.HotelBindList() + ' .' + MystaysBookingWidget.HotelSearch.Constants.HotelSelectItem())[i];

                    listItem.addEventListener('keydown', function (e, args) {
                        //MystaysBookingWidget.Common.CurrentEventTarget = e.target;

                        e.preventDefault();
                        e.target.classList.remove('active');

                        //User clicks enter/selects 
                        if (e.which === 13) {
                            MystaysBookingWidget.HotelSearch.TriggerHotelCitySelect(e.target, false)
                            e.stopPropagation();
                            return;
                        }

                        //Tab and keydown
                        if (e.which == 9 || e.which == 40) {
                            e.target.classList.remove('active');
                            var siblingHotelItem = MystaysBookingWidget.Helper.GetSiblingByClass(e.target, MystaysBookingWidget.HotelSearch.Constants.HotelSelectItem(), false);

                        }

                        //Key up
                        if (e.which == 38) {
                            var siblingHotelItem = MystaysBookingWidget.Helper.GetSiblingByClass(e.target, MystaysBookingWidget.HotelSearch.Constants.HotelSelectItem(), true);

                        }

                        if (siblingHotelItem && siblingHotelItem.tagName === 'LI') {
                            siblingHotelItem.classList.add('active');
                            e.target.blur();
                            siblingHotelItem.focus();
                        } else {
                            MystaysBookingWidget.Common.BookingWidgetContainerElement().querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchInputClass()).focus();
                        }
                    })
                }

            },

            ClearButtonClick: function ClearButtonClick() {
                if (document.querySelector(MystaysBookingWidget.HotelSearch.Constants.ClearButton())) {
                    document.querySelector(MystaysBookingWidget.HotelSearch.Constants.ClearButton()).addEventListener('click', function () {
                        document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchInputClass()).value = "";
                        document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchInputClass()).focus();
                        document.querySelector(MystaysBookingWidget.HotelSearch.Constants.ClearButton()).HideElement();
                    })
                }


            },

            //When user selects a hotel item attach event for list item and also the default list item which will be present in hotel page
            HotelItemClick: function HotelItemClick(AttachDefaultItemTrigger, KeepCalendarClosed) {

                for (var i = 0; i < MystaysBookingWidget.Common.BookingWidgetContainerElement().querySelectorAll(MystaysBookingWidget.HotelSearch.Constants.HotelBindList() + ' .' + MystaysBookingWidget.HotelSearch.Constants.HotelSelectItem()).length; i++) {
                    var listItem = MystaysBookingWidget.Common.BookingWidgetContainerElement().querySelectorAll(MystaysBookingWidget.HotelSearch.Constants.HotelBindList() + ' .' + MystaysBookingWidget.HotelSearch.Constants.HotelSelectItem())[i];

                    listItem.addEventListener('click', function (e, args) {
                        //MystaysBookingWidget.Common.CurrentEventTarget = e.target;

                        e.preventDefault();
                        e.target.classList.remove('active');

                        MystaysBookingWidget.HotelSearch.TriggerHotelCitySelect(e.target, false);
                        e.stopPropagation();
                    })
                }

                //Triggering default hotel bind list in case of hotel inner pages
                if (AttachDefaultItemTrigger) {
                    for (var i = 0; i < MystaysBookingWidget.Common.BookingWidgetContainerElement().querySelectorAll(MystaysBookingWidget.HotelSearch.Constants.HotelBindListDefault() + ' .' + MystaysBookingWidget.HotelSearch.Constants.HotelSelectItem()).length; i++) {
                        var listItem = MystaysBookingWidget.Common.BookingWidgetContainerElement().querySelectorAll(MystaysBookingWidget.HotelSearch.Constants.HotelBindListDefault() + ' .' + MystaysBookingWidget.HotelSearch.Constants.HotelSelectItem())[i];

                        listItem.addEventListener('click', function (e, args) {
                            MystaysBookingWidget.Common.CurrentEventTarget = e.target;

                            e.preventDefault();


                            MystaysBookingWidget.HotelSearch.TriggerHotelCitySelect(e.target, KeepCalendarClosed);
                            e.stopPropagation();
                        })
                    }

                }


            },
            //Function to set the first element to active
            SetActiveHotelItem: function SetActiveHotelItem() {
                var firstHotelItem = MystaysBookingWidget.Common.BookingWidgetContainerElement().querySelector(MystaysBookingWidget.HotelSearch.Constants.HotelBindList() + ' .' + MystaysBookingWidget.HotelSearch.Constants.HotelSelectItem());

                if (firstHotelItem) {
                    firstHotelItem.classList.add('active');
                }
            }


        },

        //Method used to show or hide search message and also populate link and text
        ShowSearchMessage: function ShowSearchMessage(showsearchMessage, hotelCity) {
            if (!showsearchMessage) {
                document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchMessageContainer()).HideElement();
            } else {
                var msgPlaceholder = MystaysBookingWidget.HotelSearch.Constants.SearchMessagePlaceholder(hotelCity);
                var showAnchorTag = document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchMessageAnchor());
                msgPlaceholder = msgPlaceholder.replace('{0}', hotelCity.Name);
                showAnchorTag.href = hotelCity.Link;
                showAnchorTag.innerHTML = msgPlaceholder;

                document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchMessageContainer()).ShowElement();
            }
        },

        ////Selection Start
        //Method fired when used selects a hotel or city
        TriggerHotelCitySelect: function TriggerHotelCitySelect(hotelItem, KeepCalendarClosed) {
            //Showing the clear button
            if (document.querySelector(MystaysBookingWidget.HotelSearch.Constants.ClearButton())) {
                document.querySelector(MystaysBookingWidget.HotelSearch.Constants.ClearButton()).ShowElement();
            }
            MystaysBookingWidget.HotelSearch.GetSelectedHotelCity(hotelItem);
            MystaysBookingWidget.GuestsWidget.CheckChildAge(hotelItem);
            

            if (!KeepCalendarClosed) {
                //Trigger calendar checkin button click
                MystaysBookingWidget.Common.BookingWidgetContainerElement().querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckinButton()).click();
            }


           

            return;
        },



        //Method to create hotel/city object from LI item
        GetSelectedHotelCity: function GetSelectedHotelCity(listItem) {

            //For data list
            var selectedHotel = {};
            selectedHotel.Type = listItem.getAttribute('data-Type');
            selectedHotel.TargetCities = listItem.getAttribute('data-TargetCities');
            selectedHotel.Name = listItem.getAttribute('data-Name');
            selectedHotel.HotelSearchNames = listItem.getAttribute('data-HotelSearchNames');
            selectedHotel.Link = listItem.getAttribute('data-Link');
            selectedHotel.UseTravelClick = listItem.getAttribute('data-UseTravelClick');
            selectedHotel.UseTravelClickInJapan = listItem.getAttribute('data-UseTravelClickInJapan');
            selectedHotel.TravelClickBookingID = listItem.getAttribute('data-TravelClickBookingID');
            selectedHotel.RWIthCode = listItem.getAttribute('data-RWIthCode');
            selectedHotel.HotelCity = listItem.getAttribute('data-HotelCity');
            selectedHotel.ItemID = listItem.getAttribute('data-ItemID');

            selectedHotel.IsBookable = listItem.getAttribute('data-IsBookable');
            selectedHotel.HasMeetingRoom = listItem.getAttribute('data-HasMeetingRoom');
            selectedHotel.StartDateForBooking = listItem.getAttribute('data-StartDateForBooking');
            selectedHotel.GroupNames = listItem.getAttribute('data-GroupNames');
            selectedHotel.FastBookingAreaName = listItem.getAttribute('data-FastBookingAreaName');
            selectedHotel.ABTestBookingEnabled = listItem.getAttribute('data-ABTestBookingEnabled');
            selectedHotel.HotelMaxChildAge = listItem.getAttribute('data-HotelMaxChildAge');

            MystaysBookingWidget.HotelSearch.UpdateSerachField(selectedHotel);

        },


        //Used to bind hotel data to input element
        UpdateSerachField: function UpdateSerachField(selectedHotelCity) {
            var inputElement = document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchInputClass());
            inputElement.setAttribute('data-HotelCity', JSON.stringify(selectedHotelCity));
            inputElement.value = selectedHotelCity.Name;

            

            MystaysBookingWidget.HotelSearch.ShowSearchMessage(true, selectedHotelCity);
        },


        ////Selection End


        ////Binding Start
        //Method to initialize autocomplete
        InitializeAutocomplete: function () {
            //Attaching focus event
            MystaysBookingWidget.HotelSearch.CustomHTMLEvents.HotelSearchFocus();
            //Bind autocomplete to input search
            MystaysBookingWidget.HotelSearch.CustomHTMLEvents.HotelSearchKeyUp();
            MystaysBookingWidget.HotelSearch.CustomHTMLEvents.HotelSearchKeyDown();

            MystaysBookingWidget.HotelSearch.CustomHTMLEvents.ClearButtonClick()



        },

        //Function to load all hotels or hotels(and cities) based on a searched text
        LoadSearchResults: function (userInputText) {
            var masterHotelList = MystaysBookingWidget.HotelSearch.GetSearchList();



            //Filter text passed
            if (userInputText && userInputText != '') {
                var filteredHotelList = [];
                for (var i = 0; i < masterHotelList.length; i++) {

                    if ((masterHotelList[i].HotelSearchNames.toLowerCase().indexOf(userInputText.toLowerCase()) > -1) || (MystaysBookingWidget.HotelSearch.Constants.FilterCities ? (masterHotelList[i].HotelCity == null ? '' : masterHotelList[i].HotelCity).toLowerCase().indexOf(userInputText.toLowerCase()) > -1 : false)) {
                        filteredHotelList.push(masterHotelList[i]);
                    }
                }
                return filteredHotelList;

            }
            //Load all hotels and cities
            else {
                return masterHotelList;
            }
        },

        //Binding hotels/city to DOM
        BindHotelsCityData: function BindHotelsCityData(hotelList) {
            //Removing all child items
            MystaysBookingWidget.HotelSearch.RemoveHotelList();

            var cityList = hotelList.filter(function (item) {
                return item.Type === 'City';
            })

            var hotelList = hotelList.filter(function (item) {
                return item.Type === 'Hotel';
            })

            var bindList = document.querySelector(MystaysBookingWidget.HotelSearch.Constants.HotelBindList());




            if (cityList.length > 0) {
                //Create header item
                var headerListItem = document.createElement('li');
                headerListItem.className = 'mystyas-hotellist-heading';
                headerListItem.innerHTML = MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.HotelSearch.Constants.CityLabel);
                bindList.appendChild(headerListItem);
                for (var i = 0; i < cityList.length; i++) {
                    var bindListItem = document.createElement('li');
                    bindListItem.setAttribute('tabindex', i);

                    bindListItem.setAttribute('data-Type', cityList[i].Type);
                    bindListItem.setAttribute('data-Name', cityList[i].Name);
                    bindListItem.setAttribute('data-TargetCities', cityList[i].Target);
                    bindListItem.setAttribute('data-Link', cityList[i].Link);
                    bindListItem.setAttribute('data-HotelSearchNames', cityList[i].HotelSearchNames);
                    bindListItem.setAttribute('data-UseTravelClick', cityList[i].UseTravelClick);
                    bindListItem.setAttribute('data-TravelClickBookingID', cityList[i].TravelClickBookingID);
                    bindListItem.setAttribute('data-RWIthCode', cityList[i].RWIthCode);
                    bindListItem.setAttribute('data-HotelCity', cityList[i].HotelCity);
                    bindListItem.setAttribute('data-ItemID', cityList[i].ItemID);

                    bindListItem.setAttribute('data-IsBookable', cityList[i].IsBookable);
                    bindListItem.setAttribute('data-HasMeetingRoom', cityList[i].HasMeetingRoom);
                    bindListItem.setAttribute('data-StartDateForBooking', cityList[i].StartDateForBooking);
                    bindListItem.setAttribute('data-ListHotelGroupNameAllLang', cityList[i].ListHotelGroupNameAllLang);
                    bindListItem.setAttribute('data-FastBookingAreaName', cityList[i].FastBookingAreaName);


                    bindListItem.classList.add(MystaysBookingWidget.HotelSearch.Constants.HotelSelectItem());


                    bindListItem.innerHTML = cityList[i].Name;

                    bindList.appendChild(bindListItem);
                }
            }


            if (hotelList.length > 0) {
                //Create header item
                var headerListItem = document.createElement('li');
                headerListItem.className = 'mystyas-hotellist-heading';
                headerListItem.innerHTML = MystaysBookingWidget.Helper.GetCustomText(MystaysBookingWidget.HotelSearch.Constants.HotelLabel);
                bindList.appendChild(headerListItem);

                for (var i = 0; i < hotelList.length; i++) {
                    var bindListItem = document.createElement('li');
                    bindListItem.setAttribute('tabindex', i);
                    bindListItem.setAttribute('data-Type', hotelList[i].Type);
                    bindListItem.setAttribute('data-Name', hotelList[i].Name);
                    bindListItem.setAttribute('data-Link', hotelList[i].Link);
                    bindListItem.setAttribute('data-HotelSearchNames', hotelList[i].HotelSearchNames);
                    bindListItem.setAttribute('data-UseTravelClick', hotelList[i].UseTravelClick);
                    bindListItem.setAttribute('data-UseTravelClickInJapan', hotelList[i].UseTravelClickInJapan);
                    bindListItem.setAttribute('data-TravelClickBookingID', hotelList[i].TravelClickBookingID);
                    bindListItem.setAttribute('data-RWIthCode', hotelList[i].RWIthCode);
                    bindListItem.setAttribute('data-HotelCity', hotelList[i].HotelCity);
                    bindListItem.setAttribute('data-ItemID', hotelList[i].ItemID);
                    bindListItem.classList.add(MystaysBookingWidget.HotelSearch.Constants.HotelSelectItem());


                    bindListItem.setAttribute('data-IsBookable', hotelList[i].IsBookable);
                    bindListItem.setAttribute('data-HasMeetingRoom', hotelList[i].HasMeetingRoom);
                    bindListItem.setAttribute('data-StartDateForBooking', hotelList[i].StartDateForBooking);
                    bindListItem.setAttribute('data-ListHotelGroupNameAllLang', hotelList[i].ListHotelGroupNameAllLang);
                    bindListItem.setAttribute('data-ABTestBookingEnabled', hotelList[i].ABTestBookingEnabled);
                    bindListItem.setAttribute('data-HotelMaxChildAge', hotelList[i].HotelMaxChildAge);

                    bindListItem.innerHTML = hotelList[i].Name;

                    bindList.appendChild(bindListItem);
                }
            }
            MystaysBookingWidget.HotelSearch.CustomHTMLEvents.HotelItemKeyDown();
            MystaysBookingWidget.HotelSearch.CustomHTMLEvents.HotelItemClick(false, false);
            MystaysBookingWidget.HotelSearch.CustomHTMLEvents.SetActiveHotelItem();
            bindList.parentNode.ShowElement();


        },

        //Fetch hotel and city details from API
        GetHotelDetailsAPI: function GetHotelDetailsAPI() {

            var HotelCityList = [];

            var jsonData = {
                "Target-Language": MystaysBookingWidget.HotelSearch.Constants.APITargetLanguage(),
                "Authorization": MystaysBookingWidget.Helper.GetTranslation("MystaysAPIKey")
            }

            var apiDomain = MystaysBookingWidget.Helper.GetTranslation("MystaysAPIDomain");


            MystaysBookingWidget.Common.AjaxCall(apiDomain + '/api/Mystays/Data/GetHotels?Target-Language=' + jsonData["Target-Language"] + '&Authorization=' + jsonData.Authorization, jsonData, 'GET', true, function (response) {
                var hotelList = JSON.parse(response);

                for (var i = 0; i < hotelList.length; i++) {
                    if (hotelList[i].isBookable === true) {
                        var hotel = {
                            Type: 'Hotel',
                            Name: hotelList[i].name,
                            IsBookable: hotelList[i].isBookable,
                            HotelSearchNames: hotelList[i].listHotelNameAllLang,
                            HasMeetingRoom: hotelList[i].hasMeetingRoom,
                            HasWeddingRoom: hotelList[i].hasWeddingRoom,
                            Link: hotelList[i].publicHotelUrl,
                            UseTravelClick: hotelList[i].useTravelClick,
                            TravelClickBookingID: hotelList[i].travelClickBookingId,
                            UseTravelClickInJapan: hotelList[i].useTravelClickInJapan,
                            RWIthCode: hotelList[i].rWithBookingId,
                            HotelCity: hotelList[i].listCityNameAllLang,
                            ItemID: hotelList[i].itemId,
                            StartDateForBooking: hotelList[i].startDateForBooking,
                            GroupNames: hotelList[i].listHotelGroupNameAllLang,
                            ABTestBookingEnabled: hotelList[i].ABTestBookingEnabled,
                            HotelMaxChildAge: hotelList[i].HotelMaxChildAge
                        };

                        HotelCityList.push(hotel);
                    }

                }
            })
            
                if (MystaysBookingWidget.HotelSearch.Constants.FilterCities) {
                    MystaysBookingWidget.Common.AjaxCall(apiDomain + '/api/Mystays/Data/GetAreas?Target-Language=' + jsonData["Target-Language"] + '&Authorization=' + jsonData.Authorization, jsonData, 'GET', true, function (response) {
                        var cityList = JSON.parse(response);

                        for (var i = 0; i < cityList.length; i++) {
                            var city = {
                                Type: 'City',
                                Name: cityList[i].name,
                                IsBookable: true,
                                HotelSearchNames: '',
                                HasMeetingRoom: cityList[i].hasMeetingRoom,
                                Link: cityList[i].hotelUrl,
                                FastBookingAreaName: cityList[i].fastBookingAreaName,
                                UseTravelClick: cityList[i].useTravelClick,
                                TravelClickBookingID: cityList[i].travelClickBookingId,
                                RWIthCode: cityList[i].rWithBookingId,
                                HotelCity: cityList[i].listCityNameAllLang,
                                ItemID: cityList[i].itemId,
                                StartDateForBooking: cityList[i].startDateForBooking,
                                GroupNames: cityList[i].listHotelGroupNameAllLang

                            };

                            HotelCityList.push(city);
                        }
                    })
                }
            

            return HotelCityList;
        },

        //Function to get all the hotel details from either and api or from another element on the DOM
        //and convert it into a single format
        GetSearchList: function GetSearchList() {

            if (MystaysBookingWidget.HotelSearch.Constants.MasterSearchList.length > 0) {

                return MystaysBookingWidget.HotelSearch.Constants.MasterSearchList;

            } else {


                var searchList = [];
                var footerHotelListContainer = document.getElementById(MystaysBookingWidget.HotelSearch.Constants.FooterHotelList());
                if (footerHotelListContainer) {

                    
                        //Add cities
                        var footerCityListContainer = document.getElementById(MystaysBookingWidget.HotelSearch.Constants.FooterCityList());
                        if (MystaysBookingWidget.HotelSearch.Constants.FilterCities && footerCityListContainer) {

                            var cityList = footerCityListContainer.querySelectorAll(MystaysBookingWidget.HotelSearch.Constants.FooterCityItemSelector())
                            for (var i = 0; i < cityList.length; i++) {
                                selectedCity = {};

                                selectedCity.Type = 'City';
                                selectedCity.Name = cityList[i].innerHTML;
                                selectedCity.Target = cityList[i].getAttribute('target');
                                selectedCity.HotelSearchNames = cityList[i].getAttribute('names');
                                selectedCity.Link = cityList[i].getAttribute('hotel-url');
                                selectedCity.HotelCity = cityList[i].getAttribute('target-city');
                                selectedCity.ItemID = cityList[i].getAttribute('item-id');

                                selectedCity.IsBookable = true;
                                if (cityList[i].parentNode.getAttribute('show-in-meeting') === "true") {
                                    selectedCity.HasMeetingRoom = true;
                                } else {
                                    selectedCity.HasMeetingRoom = false;
                                }
                                selectedCity.StartDateForBooking = cityList[i].getAttribute('start-date');
                                selectedCity.GroupNames = cityList[i].getAttribute('groups');

                                searchList.push(selectedCity);
                            }
                        }
                    

                    //Add hotels
                    var hotelList = footerHotelListContainer.querySelectorAll(MystaysBookingWidget.HotelSearch.Constants.FooterHotelItemSelector())
                    for (var i = 0; i < hotelList.length; i++) {


                        selectedHotel = {};
                        selectedHotel.Name = hotelList[i].innerHTML.trim();
                        selectedHotel.Type = 'Hotel';
                        selectedHotel.HotelSearchNames = hotelList[i].getAttribute('names');
                        selectedHotel.Link = hotelList[i].getAttribute('hotel-url');
                        selectedHotel.UseTravelClick = hotelList[i].getAttribute('use-travel-click');
                        if (hotelList[i].getAttribute('use-travel-click') === "true") {
                            selectedHotel.UseTravelClick = true;
                        } else {
                            selectedHotel.UseTravelClick = false;
                        }
                        selectedHotel.TravelClickBookingID = hotelList[i].getAttribute('travel-click_booking_id');
                        selectedHotel.RWIthCode = hotelList[i].getAttribute('target');
                        selectedHotel.HotelCity = hotelList[i].getAttribute('city');
                        selectedHotel.ItemID = hotelList[i].getAttribute('item-id');
                        if (hotelList[i].parentNode.getAttribute('hotel-residence') === "true") {
                            selectedHotel.IsBookable = false;
                        } else {
                            selectedHotel.IsBookable = true;
                        }

                        if (hotelList[i].getAttribute('use-travel-click-in-japan') === "true") {
                            selectedHotel.UseTravelClickInJapan = true;
                        } else {
                            selectedHotel.UseTravelClickInJapan = false;
                        }

                        if (hotelList[i].parentNode.getAttribute('show-in-meeting') === "true") {
                            selectedHotel.HasMeetingRoom = true;
                        } else {
                            selectedHotel.HasMeetingRoom = false;
                        }

                        if (hotelList[i].getAttribute('HasWeddingRoom') === "true") {
                            selectedHotel.HasWeddingRoom = true;
                        } else {
                            selectedHotel.HasWeddingRoom = false;
                        }

                        if (hotelList[i].getAttribute('abtestbookingenabled') === "True") {
                            selectedHotel.ABTestBookingEnabled = true;
                        } else {
                            selectedHotel.ABTestBookingEnabled = false;
                        }
                        selectedHotel.HotelMaxChildAge = hotelList[i].getAttribute('HotelMaxChildAge');
                        selectedHotel.StartDateForBooking = hotelList[i].getAttribute('start-date');
                        selectedHotel.GroupNames = hotelList[i].getAttribute('groups');



                        searchList.push(selectedHotel);


                    }
                } else {
                    //Call API

                    searchList = MystaysBookingWidget.HotelSearch.GetHotelDetailsAPI();


                }


                //Writing logic for booking engine
                

                    var bookableList = [];

                    for (var i = 0; i < searchList.length; i++) {
                        if (searchList[i].IsBookable === true) {
                            bookableList.push(searchList[i]);
                        }
                    }
                    searchList = bookableList;
                
                


                MystaysBookingWidget.HotelSearch.Constants.MasterSearchList = searchList;

                return MystaysBookingWidget.HotelSearch.Constants.MasterSearchList;
            }
        },
        ////Binding End

        Loaded: function () {
            MystaysBookingWidget.HotelSearch.InitializeAutocomplete();
        }
    },


    //The functionality related to the book now buttons
    BookNowButton: {
        Constants: {
            BooknowButton: function BooknowButton() {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + '.search-button button';
            },
            PromoCodeField: function PromoCodeField() {
                return MystaysBookingWidget.Common.BookingWidgetContainer() + '.promocode input';
            },
            RWithURL: 'https://mystays.rwiths.net/r-withs/tfs0020a.do?&hotelNo={rwithbookingid}&ciDateY={checkinyear}&ciDateM={checkinmonth}&ciDateD={checkinday}&coDateY={checkoutyear}&coDateM={checkoutmonth}&coDateD={checkoutday}&otona={adults}&s1={childrenHigher}&s2={childrenLower}&y4={childrenInfant}&room={rooms}',
            TravelClickHotelURL: 'https://reservations.mystays.com/{travelclickbookingid}?hotelid={travelclickbookingid}&rooms={rooms}&datein={checkindate}&dateout={checkoutdate}&currency=JPY&adults={adults}&children={children}&languageid={language}&discount={promocode}&childage={childage}',
            TravelClickAreaURL: 'https://search.mystays.com/MYS?destination={areas}&rooms={rooms}&datein={checkindate}&dateout={checkoutdate}&currency=JPY&adults={adults}&children={children}&languageid={language}&discount={promocode}&childage={childage}',
            TravelClickLanguage: function () {
                if (MystaysBookingWidget.Common.SelectedLanguage === 'ja') {
                    return 6;
                }
                if (MystaysBookingWidget.Common.SelectedLanguage === 'en') {
                    return 1;
                }
                else if (MystaysBookingWidget.Common.SelectedLanguage === 'zh') {
                    return 5;
                }
                else if (MystaysBookingWidget.Common.SelectedLanguage === 'tw') {
                    return 12;
                }
                else if (MystaysBookingWidget.Common.SelectedLanguage === 'ko') {
                    return 26;
                }
            }


        },
        //Method to retrieve the new hotel rates with promocode
        FirePromocodeAPI: function FirePromocodeAPI(promocode) {
            try {
                mystays.booking.updatePrice(promocode);
            } catch (e) {

            }
        },

        FireUniversalTracker: function FireUniversalTracker(eventValue) {
            try {
                var bookingWidgetObject = {};

                var inputElement = document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchInputClass());
                var adultElement = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.AdultElement()).children[0];
                var childrenElement = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElement()).children[0];
                var childrenElementHigher = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElementHigher()).children[0];
                var childrenElementLower = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElementLower()).children[0];
                var childrenElementInfant = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElementInfant()).children[0];
                var roomsElement = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.RoomElement()).children[0];
                var hotelcity = JSON.parse(inputElement.getAttribute('data-HotelCity'));
                
                var promoCodeValue = document.querySelector(MystaysBookingWidget.BookNowButton.Constants.PromoCodeField()).value;





                //Not successful search
                if (hotelcity === null) {
                    bookingWidgetObject = {
                        IsSuccessfulSearch: false,
                        BookingWidgetItemID: null
                    };

                    if (MystaysBookingWidget.Common.SelectedLanguage.toLowerCase() === 'ja') {
                        bookingWidgetObject.BookingWidgetAdults = adultElement.getAttribute('data-count');
                        bookingWidgetObject.BookingWidgetChildrenHigher = childrenElementHigher.getAttribute('data-count');
                        bookingWidgetObject.BookingWidgetChildrenLower = childrenElementLower.getAttribute('data-count');
                        bookingWidgetObject.BookingWidgetChildrenInfant = childrenElementInfant.getAttribute('data-count');
                    } else {
                        bookingWidgetObject.BookingWidgetAdults = adultElement.getAttribute('data-count');
                        bookingWidgetObject.BookingWidgetChildren = childrenElement.getAttribute('data-count');
                    }

                } else {

                    bookingWidgetObject = {
                        IsSuccessfulSearch: true
                    };

                    if (!MystaysBookingWidget.Common.UseTravelClickBookingEngine()) {
                        bookingWidgetObject.BookingWidgetItemID = hotelcity.RWIthCode;
                        bookingWidgetObject.BookingWidgetAdults = adultElement.getAttribute('data-count');
                        bookingWidgetObject.BookingWidgetChildrenHigher = childrenElementHigher.getAttribute('data-count');
                        bookingWidgetObject.BookingWidgetChildrenLower = childrenElementLower.getAttribute('data-count');
                        bookingWidgetObject.BookingWidgetChildrenInfant = childrenElementInfant.getAttribute('data-count');
                    } else {
                        bookingWidgetObject.BookingWidgetItemID = hotelcity.TravelClickBookingID;
                        bookingWidgetObject.BookingWidgetAdults = adultElement.getAttribute('data-count');
                        bookingWidgetObject.BookingWidgetChildren = childrenElement.getAttribute('data-count');
                    }

                    if (hotelcity.Type === 'City') {
                        bookingWidgetObject.BookingWidgetItemID = 'undefined';
                    }

                }

                bookingWidgetObject.BookingWidgetSearchText = document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchInputClass()).value;
                bookingWidgetObject.BookingWidgetStartDate = MystaysBookingWidget.Common.CurrentRangeObject()._startDate;
                bookingWidgetObject.BookingWidgetEndDate = MystaysBookingWidget.Common.CurrentRangeObject()._endDate;
                bookingWidgetObject.BookingWidgetRooms = roomsElement.getAttribute('data-count');

                bookingWidgetObject.BookingWidgetPromoCode = promoCodeValue;
                UniversalTracking.Tracking.FireBookingWidgetClick(eventValue, bookingWidgetObject, MystaysBookingWidget.HotelSearch.Constants.APITargetLanguage().toLowerCase(), 2);
            } catch (e) {
                console.log(e);
            }
        },

        CustomHTMLEvents: {
            //Event fired when user clicks the book now button
            BooknowButtonClick: function BooknowButtonClick() {
                document.querySelector(MystaysBookingWidget.BookNowButton.Constants.BooknowButton()).addEventListener('click', function (e) {
                    MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                    if (MystaysBookingWidget.BookNowButton.ValidateBooknowForm()) {
                        MystaysBookingWidget.BookNowButton.BookNow();
                    }
                })
            },

            //When user focus promocode
            PromoCodeFocus: function PromoCodeFocus() {

                if (document.querySelector(MystaysBookingWidget.BookNowButton.Constants.PromoCodeField())) {
                    document.querySelector(MystaysBookingWidget.BookNowButton.Constants.PromoCodeField()).addEventListener('focus', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        if (MystaysBookingWidget.Helper.IsMobile()) {
                            MystaysBookingWidget.Common.ScrollTop(MystaysBookingWidget.BookNowButton.Constants.PromoCodeField());
                        }
                    })
                }

            },

            //When user eneters promocode
            PromoCodeInput: function PromoCodeInput() {
                if (document.querySelector(MystaysBookingWidget.BookNowButton.Constants.PromoCodeField())) {
                    document.querySelector(MystaysBookingWidget.BookNowButton.Constants.PromoCodeField()).addEventListener('input', function (e) {
                        MystaysBookingWidget.Common.CurrentEventTarget = e.target;
                        
                            MystaysBookingWidget.Helper.SetCookie('promocode', e.target.value);
                            MystaysBookingWidget.BookNowButton.FirePromocodeAPI(e.target.value);
                        
                    })
                }

            }


        },

        //Method to load promocode from 
        LoadPromoCode: function LoadPromoCode() {

            
            var promocode = MystaysBookingWidget.Helper.GetQueryString('promo');

            if (!promocode) {
                var promocode = MystaysBookingWidget.Helper.GetCookie('promocode');
            }

            if (promocode) {
                document.querySelector(MystaysBookingWidget.BookNowButton.Constants.PromoCodeField()).value = promocode;
                MystaysBookingWidget.BookNowButton.FirePromocodeAPI(promocode);
            }
        },

        //Validation to check if the form data is present
        ValidateBooknowForm: function ValidateBooknowForm() {
            var formOk = true;
            var eventValue = null;
            var hotelSearchInput = document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchInputClass());

            var hotel = JSON.parse(hotelSearchInput.getAttribute('data-HotelCity'));

            var selectedRangeObject = MystaysBookingWidget.Common.CurrentRangeObject()

            //Fire Universal tracker
            MystaysBookingWidget.BookNowButton.FireUniversalTracker(eventValue);

            if (hotel == null || hotelSearchInput.value === '') {
                hotelSearchInput.parentNode.classList.add(MystaysBookingWidget.HotelSearch.Constants.HotelSearchError());
                formOk = false;
                return formOk;
            }
            if (selectedRangeObject == null) {
                formOk = false;
                return formOk;
            }

            ////If hotel start date is greater than checkin date show error
            //if (hotel.StartDateForBooking.indexOf('0001-01-01') === -1 && hotel.StartDateForBooking != "null" && hotel.StartDateForBooking != "undefined" && (new Date(hotel.StartDateForBooking.substr(0, 10).replace("-", "/").replace("-","/")) > new Date(selectedRangeObject.startVal.split('|')[4]))) {
            //    var checkinButton = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckinButton());

            //    checkinButton.classList.add(MystaysBookingWidget.HotelSearch.Constants.HotelSearchStartDateError());

            //    var hotelstartDate = hotel.StartDateForBooking.substr(0, 10);
            //    var checkinDate = selectedRangeObject.startVal.split('|')[4];
            //    var errorMessage = MystaysBookingWidget.Helper.GetTranslation('StartDateError');

            //    checkinButton.setAttribute("title", (errorMessage.replace('{0}', hotel.Name).replace('{1}', hotelstartDate)));

            //    formOk = false;
            //} else {
            //    var checkinButton = document.querySelector(MystaysBookingWidget.BookingCalendar.Constants.CheckinButton());

            //    checkinButton.classList.remove(MystaysBookingWidget.HotelSearch.Constants.HotelSearchStartDateError());

            //    checkinButton.removeAttribute("title");

            //}

            //Adding analytics call
            if (formOk && typeof (mystays) != 'undefined' && mystays.analytics && mystays.analytics.addBookingRecord) {
                mystays.analytics.addBookingRecord(hotel.ItemID, $.datepicker.formatDate('yy-mm-dd', selectedRangeObject._startDate), $.datepicker.formatDate('yy-mm-dd', selectedRangeObject._endDate));
            }

            return formOk;
        },

        //Function to reorder child age string to append all blanks in the end (As if the blanks are in the middle then travel click breaks)
        ReorderChildAgeString: function ReorderChildAgeString(childAgeString){
            var reorderedString = '';
            var sortedArray = childAgeString.split(',').sort(function (a, b) {
                if (a=="") {
                    return +1;
                } else if (b=="") {
                    return -1;
                } else {
                    return b - a;
                }
                
            });
            reorderedString = sortedArray.join(',');
            return reorderedString;

        },

        GenerateBookingEngineURL: function GenerateBookingEngineURL() {
            var inputElement = document.querySelector(MystaysBookingWidget.HotelSearch.Constants.SearchInputClass());

            var adultElement = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.AdultElement()).children[0];
            var childrenElement = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElement()).children[0];
            var childrenElementHigher = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElementHigher()).children[0];
            var childrenElementLower = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElementLower()).children[0];
            var childrenElementInfant = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.ChildElementInfant()).children[0];
            var roomsElement = document.querySelector(MystaysBookingWidget.GuestsWidget.Constants.RoomElement()).children[0];

            var promoCodeValue = document.querySelector(MystaysBookingWidget.BookNowButton.Constants.PromoCodeField()).value;


            var hotelcity = JSON.parse(inputElement.getAttribute('data-HotelCity'));

            

            //RWith
            if (!MystaysBookingWidget.Common.UseTravelClickBookingEngine(hotelcity.ABTestBookingEnabled, hotelcity.UseTravelClickInJapan)) {
                var bookingengineurl = MystaysBookingWidget.BookNowButton.Constants.RWithURL;

                bookingengineurl = bookingengineurl.replace('{rwithbookingid}', hotelcity.RWIthCode);
                bookingengineurl = bookingengineurl.replace('{checkinyear}', MystaysBookingWidget.Common.CurrentRangeObject()._startDate.getFullYear());
                bookingengineurl = bookingengineurl.replace('{checkinmonth}', MystaysBookingWidget.Common.CurrentRangeObject()._startDate.getMonth() + 1);
                bookingengineurl = bookingengineurl.replace('{checkinday}', MystaysBookingWidget.Common.CurrentRangeObject()._startDate.getDate());
                bookingengineurl = bookingengineurl.replace('{checkoutyear}', MystaysBookingWidget.Common.CurrentRangeObject()._endDate.getFullYear());
                bookingengineurl = bookingengineurl.replace('{checkoutmonth}', MystaysBookingWidget.Common.CurrentRangeObject()._endDate.getMonth() + 1);
                bookingengineurl = bookingengineurl.replace('{checkoutday}', MystaysBookingWidget.Common.CurrentRangeObject()._endDate.getDate());
                bookingengineurl = bookingengineurl.replace('{adults}', adultElement.getAttribute('data-count'));
                bookingengineurl = bookingengineurl.replace('{childrenHigher}', childrenElementHigher.getAttribute('data-count'));
                bookingengineurl = bookingengineurl.replace('{childrenLower}', childrenElementLower.getAttribute('data-count'));
                bookingengineurl = bookingengineurl.replace('{childrenInfant}', childrenElementInfant.getAttribute('data-count'));
                bookingengineurl = bookingengineurl.replace('{rooms}', roomsElement.getAttribute('data-count'));

                if (promoCodeValue.toLowerCase() == 'sol10') {
                    promoCodeValue = '';
                }

                if (promoCodeValue != null && promoCodeValue != "") {
                    bookingengineurl = bookingengineurl + '&vipCode=' + promoCodeValue;
                }

            } else {

                //If the page is japanese and the request is going to TC (Through AB test or UserTravelClickForJapan) then calculate children as total of higher, lower and infants
                var isJapaneseTC = false;
                var children = childrenElement.getAttribute('data-count')
                if (MystaysBookingWidget.Common.SelectedLanguage == "ja") {
                    var isJapaneseTC = true;
                }

                if (isJapaneseTC) {
                    children = parseInt(childrenElementHigher.getAttribute('data-count')) + parseInt(childrenElementLower.getAttribute('data-count')) + parseInt(childrenElementInfant.getAttribute('data-count'));
                }


                if (hotelcity.Type === 'Hotel') {
                    var bookingengineurl = MystaysBookingWidget.BookNowButton.Constants.TravelClickHotelURL;

                    bookingengineurl = bookingengineurl.replace('{travelclickbookingid}', hotelcity.TravelClickBookingID);
                    bookingengineurl = bookingengineurl.replace('{travelclickbookingid}', hotelcity.TravelClickBookingID);
                    bookingengineurl = bookingengineurl.replace('{checkindate}', MystaysBookingWidget.Common.CurrentRangeObject().startVal.split('|')[3]);
                    bookingengineurl = bookingengineurl.replace('{checkoutdate}', MystaysBookingWidget.Common.CurrentRangeObject().endVal.split('|')[3]);
                    bookingengineurl = bookingengineurl.replace('{adults}', adultElement.getAttribute('data-count'));
                    bookingengineurl = bookingengineurl.replace('{children}', children);
                    bookingengineurl = bookingengineurl.replace('{rooms}', roomsElement.getAttribute('data-count'));
                } else if (hotelcity.Type === 'City') {
                    var bookingengineurl = MystaysBookingWidget.BookNowButton.Constants.TravelClickAreaURL;
                    bookingengineurl = bookingengineurl.replace('{areas}', hotelcity.TargetCities);
                    bookingengineurl = bookingengineurl.replace('{checkindate}', MystaysBookingWidget.Common.CurrentRangeObject().startVal.split('|')[3]);
                    bookingengineurl = bookingengineurl.replace('{checkoutdate}', MystaysBookingWidget.Common.CurrentRangeObject().endVal.split('|')[3]);
                    bookingengineurl = bookingengineurl.replace('{adults}', adultElement.getAttribute('data-count'));
                    bookingengineurl = bookingengineurl.replace('{children}', children);
                    bookingengineurl = bookingengineurl.replace('{rooms}', roomsElement.getAttribute('data-count'));
                }


                //If chldren are present then append  age of child
                if (childrenElement.getAttribute('data-count') > 0 && !isJapaneseTC ) {

                    var childAgeString = '';

                    //Looping through each child age selector to get the value
                    for (var i = 0; i < MystaysBookingWidget.Common.BookingWidgetContainerElement().getElementsByClassName(MystaysBookingWidget.GuestsWidget.Constants.ChildAgeContainerClass).length; i++) {

                        childAgeString += MystaysBookingWidget.Common.BookingWidgetContainerElement().getElementsByClassName(MystaysBookingWidget.GuestsWidget.Constants.ChildAgeContainerClass)[i].getElementsByTagName('select')[0].value + ',';
                    }
                    bookingengineurl = bookingengineurl.replace('{childage}', MystaysBookingWidget.BookNowButton.ReorderChildAgeString(childAgeString));
                } else {
                    bookingengineurl = bookingengineurl.replace('&childage={childage}', '');
                }

                bookingengineurl = bookingengineurl.replace('{language}', MystaysBookingWidget.BookNowButton.Constants.TravelClickLanguage());

                if (promoCodeValue != null && promoCodeValue != "") {
                    bookingengineurl = bookingengineurl.replace('{promocode}', promoCodeValue);
                } else {
                    bookingengineurl = bookingengineurl.replace('&discount={promocode}', '');
                }
            }
            //Appending CID(For tracking)
            if (MystaysBookingWidget.Helper.GetQueryString('cid')) {
                bookingengineurl = bookingengineurl + "&cid=" + MystaysBookingWidget.Helper.GetQueryString('cid');
            }

            if (UniversalTracking.Constants.TrackingCode != null) {
                bookingengineurl = bookingengineurl + "&UTCode=" + UniversalTracking.Constants.TrackingCode;
            }
            if (UniversalTracking.Constants.ContactID != null) {
                bookingengineurl = bookingengineurl + "&UTContact=" + UniversalTracking.Constants.ContactID;
            }

            return bookingengineurl;
        },


        //Load booking engine page
        BookNow: function BookNow() {


            //For IE11 or Edge open in self(Work around)
            if (MystaysBookingWidget.Helper.isIE11() || MystaysBookingWidget.Helper.IsMicrosoftEdge()) {
                window.open(MystaysBookingWidget.BookNowButton.GenerateBookingEngineURL(), '_self');
            } else {
                if (MystaysBookingWidget.Common.CurrentRangeObject()) {
                    MystaysBookingWidget.Common.CurrentRangeObject().hide();
                }
                

                //Firing with a slight delay to counter the mobiscrll animate out class issue
                window.setTimeout(function () {
                    window.open(MystaysBookingWidget.BookNowButton.GenerateBookingEngineURL(), '_blank');
                }, 300);

              
            }
        },


        Loaded: function Loaded() {

            //Firing these events only when it is not the meetin or wedding page
            
            MystaysBookingWidget.BookNowButton.LoadPromoCode();
            MystaysBookingWidget.BookNowButton.CustomHTMLEvents.BooknowButtonClick();
            MystaysBookingWidget.BookNowButton.CustomHTMLEvents.PromoCodeInput();
            

            MystaysBookingWidget.BookNowButton.CustomHTMLEvents.PromoCodeFocus();

        }
    },

    //This function is to be used when loading a booking widget with a preselected hotel
    LoadedWithPreselectedHotel: function LoadedWithPreselectedHotel(selectedLanguage, FilterCities, SearchHotels, BookingWidgetContainer) {
        MystaysBookingWidget.Common.CurrentEventTarget = document.querySelector(BookingWidgetContainer);

        
        MystaysBookingWidget.Loaded(selectedLanguage, FilterCities, SearchHotels, BookingWidgetContainer);
        //Attaching the event to fire hotel select
        MystaysBookingWidget.HotelSearch.CustomHTMLEvents.HotelItemClick(true, KeepCalendarClosed);
        


        var activeElement = document.querySelector(MystaysBookingWidget.HotelSearch.Constants.HotelBindListDefault() + ' .active');
        activeElement.click();
    },

    //Main initialization function
    Loaded: function Loaded(selectedLanguage, FilterCities, SearchHotels, BookingWidgetContainer, TranslationsPath) {
        if (document.querySelector(BookingWidgetContainer)) {

            selectedLanguage = selectedLanguage.toLowerCase();
            if (selectedLanguage == 'ja-jp') {
                MystaysBookingWidget.Common.SelectedLanguage = 'ja';
            } else if (selectedLanguage == 'en-us' || selectedLanguage == 'en') {
                MystaysBookingWidget.Common.SelectedLanguage = 'en';
            } else if (selectedLanguage == 'zh-cn') {
                MystaysBookingWidget.Common.SelectedLanguage = 'zh';
            } else if (selectedLanguage == 'zh-tw') {
                MystaysBookingWidget.Common.SelectedLanguage = 'tw';
            } else if (selectedLanguage == 'ko-kr') {
                MystaysBookingWidget.Common.SelectedLanguage = 'ko';
            }
			
			MystaysBookingWidget.Common.Constants.TranslationsPath=TranslationsPath;
			
			MystaysBookingWidget.Common.UpdateStaticLabels();
			
			


            //Adding additional space(' ') just for safety
            MystaysBookingWidget.Common.BookingWidgetContainerID = BookingWidgetContainer + ' ';
            MystaysBookingWidget.HotelSearch.Constants.FilterCities = FilterCities;

            
            MystaysBookingWidget.Common.RangeResponsive = null;
            
            

            if (SearchHotels) {
                MystaysBookingWidget.Common.SearchHotels = true;
                
            } else {
                MystaysBookingWidget.Common.SearchHotels = false;
            }

            MystaysBookingWidget.Helper.Loaded();
			MystaysBookingWidget.GuestsWidget.UpdateChildSection();
            MystaysRangeObj = MystaysBookingWidget.BookingCalendar.Loaded(BookingWidgetContainer);
            MystaysBookingWidget.Common.MystaysRangeArray.push(MystaysRangeObj);
            MystaysBookingWidget.GuestsWidget.Loaded();
            if (SearchHotels) {
                MystaysBookingWidget.HotelSearch.Loaded();
            }

            MystaysBookingWidget.BookNowButton.Loaded();


        }

    }
};