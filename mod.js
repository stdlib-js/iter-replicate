// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,y,"$1e"),i=f.call(i,v,"e"),i=f.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,w,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):l.call(i)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function x(e,r,t){var i=r-e.length;return i<0?e:e=t?e+E(i):E(i)+e}var k=String.fromCharCode,S=isNaN,I=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,i,a,o,p,l,u,f;if(!I(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,u=0;u<e.length;u++)if(s(i=e[u]))p+=i;else{if(r=void 0!==i.precision,!(i=j(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,S(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=x(i.arg,i.width,i.padRight)),p+=i.arg||"",l+=1}return p}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $(e){var r,t,i,n;for(t=[],n=0,i=T.exec(e);i;)(r=e.slice(n,T.lastIndex-i[0].length)).length&&t.push(r),t.push(_(i)),n=T.lastIndex,i=T.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function A(e){return"string"==typeof e}function F(e){var r,t,i;if(!A(e))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=$(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return V.apply(null,t)}var C,O=Object.prototype,R=O.toString,P=O.__defineGetter__,N=O.__defineSetter__,Z=O.__lookupGetter__,L=O.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Z.call(e,r)||L.call(e,r)?(i=e.__proto__,e.__proto__=O,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,t.get),o&&N&&N.call(e,r,t.set),e};var W=C;function G(e,r,t){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B=/./;function U(e){return"boolean"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return X&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;var q,D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"";q=M()?function(e){var r,t,i,n,a;if(null==e)return z.call(e);t=e[H],a=H,r=null!=(n=e)&&Y.call(n,a);try{e[H]=void 0}catch(r){return z.call(e)}return i=z.call(e),r?e[H]=t:delete e[H],i}:function(e){return z.call(e)};var J=q,K=Boolean,Q=Boolean.prototype.toString;var ee=M();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===J(e)))}function te(e){return U(e)||re(e)}function ie(e){return"number"==typeof e}function ne(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ae(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+ne(n):ne(n)+e,i&&(e="-"+e)),e}G(te,"isPrimitive",U),G(te,"isObject",re);var oe=String.prototype.toLowerCase,ce=String.prototype.toUpperCase;function se(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ie(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=ae(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=ae(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===ce.call(e.specifier)?ce.call(t):oe.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function pe(e){return"string"==typeof e}var le=Math.abs,ue=String.prototype.toLowerCase,fe=String.prototype.toUpperCase,ge=String.prototype.replace,de=/e\+(\d)$/,he=/e-(\d)$/,we=/^(\d+)$/,be=/^(\d+)e/,ve=/\.0$/,ye=/\.0*e/,me=/(\..*[^0])0*e/;function Ee(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ie(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":le(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=ge.call(t,me,"$1e"),t=ge.call(t,ye,"e"),t=ge.call(t,ve,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=ge.call(t,de,"e+0$1"),t=ge.call(t,he,"e-0$1"),e.alternate&&(t=ge.call(t,we,"$1."),t=ge.call(t,be,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===fe.call(e.specifier)?fe.call(t):ue.call(t)}function xe(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function ke(e,r,t){var i=r-e.length;return i<0?e:e=t?e+xe(i):xe(i)+e}var Se=String.fromCharCode,Ie=isNaN,je=Array.isArray;function Ve(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Te(e){var r,t,i,n,a,o,c,s,p;if(!je(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(pe(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Ve(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(n=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Ie(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Ie(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=se(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Ie(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Ie(a)?String(i.arg):Se(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Ee(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ae(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=ke(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var _e=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $e(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ae(e){var r,t,i,n;for(t=[],n=0,i=_e.exec(e);i;)(r=e.slice(n,_e.lastIndex-i[0].length)).length&&t.push(r),t.push($e(i)),n=_e.lastIndex,i=_e.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Fe(e){return"string"==typeof e}function Ce(e){var r,t,i;if(!Fe(e))throw new TypeError(Ce("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Ae(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return Te.apply(null,t)}function Oe(){return new Function("return this;")()}var Re="object"==typeof self?self:null,Pe="object"==typeof window?window:null,Ne="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ze="object"==typeof Ne?Ne:null,Le="object"==typeof globalThis?globalThis:null;var We=function(e){if(arguments.length){if(!U(e))throw new TypeError(Ce("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Oe()}if(Le)return Le;if(Re)return Re;if(Pe)return Pe;if(Ze)return Ze;throw new Error("unexpected error. Unable to resolve global object.")}(),Ge=We.document&&We.document.childNodes,Be=Int8Array;function Ue(){return/^\s*function\s*([^(]*)/i}var Xe,Me=/^\s*function\s*([^(]*)/i;G(Ue,"REGEXP",Me),Xe=Array.isArray?Array.isArray:function(e){return"[object Array]"===J(e)};var ze=Xe;function Ye(e){return"number"==typeof e}function qe(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function De(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+qe(n):qe(n)+e,i&&(e="-"+e)),e}var He=String.prototype.toLowerCase,Je=String.prototype.toUpperCase;function Ke(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!Ye(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=De(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=De(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Je.call(e.specifier)?Je.call(t):He.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Qe(e){return"string"==typeof e}var er=Math.abs,rr=String.prototype.toLowerCase,tr=String.prototype.toUpperCase,ir=String.prototype.replace,nr=/e\+(\d)$/,ar=/e-(\d)$/,or=/^(\d+)$/,cr=/^(\d+)e/,sr=/\.0$/,pr=/\.0*e/,lr=/(\..*[^0])0*e/;function ur(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!Ye(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":er(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=ir.call(t,lr,"$1e"),t=ir.call(t,pr,"e"),t=ir.call(t,sr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=ir.call(t,nr,"e+0$1"),t=ir.call(t,ar,"e-0$1"),e.alternate&&(t=ir.call(t,or,"$1."),t=ir.call(t,cr,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===tr.call(e.specifier)?tr.call(t):rr.call(t)}function fr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function gr(e,r,t){var i=r-e.length;return i<0?e:e=t?e+fr(i):fr(i)+e}var dr=String.fromCharCode,hr=isNaN,wr=Array.isArray;function br(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function vr(e){var r,t,i,n,a,o,c,s,p;if(!wr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Qe(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=br(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(n=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,hr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,hr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Ke(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!hr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=hr(a)?String(i.arg):dr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=ur(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=De(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=gr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var yr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function mr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Er(e){var r,t,i,n;for(t=[],n=0,i=yr.exec(e);i;)(r=e.slice(n,yr.lastIndex-i[0].length)).length&&t.push(r),t.push(mr(i)),n=yr.lastIndex,i=yr.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function xr(e){return"string"==typeof e}function kr(e){var r,t,i;if(!xr(e))throw new TypeError(kr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Er(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return vr.apply(null,t)}function Sr(e){return null!==e&&"object"==typeof e}var Ir=function(e){if("function"!=typeof e)throw new TypeError(kr("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!ze(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(Sr);function jr(e){var r,t,i,n;if(("Object"===(t=J(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=Me.exec(i.toString()))return r[1]}return Sr(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}G(Sr,"isObjectLikeArray",Ir);var Vr="function"==typeof B||"object"==typeof Be||"function"==typeof Ge?function(e){return jr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?jr(e).toLowerCase():r};function Tr(e){return"function"===Vr(e)}function _r(e){return"number"==typeof e}var $r=Number,Ar=$r.prototype.toString;var Fr=M();function Cr(e){return"object"==typeof e&&(e instanceof $r||(Fr?function(e){try{return Ar.call(e),!0}catch(e){return!1}}(e):"[object Number]"===J(e)))}function Or(e){return _r(e)||Cr(e)}G(Or,"isPrimitive",_r),G(Or,"isObject",Cr);var Rr=Number.POSITIVE_INFINITY,Pr=$r.NEGATIVE_INFINITY,Nr=Math.floor;function Zr(e){return e<Rr&&e>Pr&&Nr(r=e)===r;var r}function Lr(e){return _r(e)&&Zr(e)}function Wr(e){return Cr(e)&&Zr(e.valueOf())}function Gr(e){return Lr(e)||Wr(e)}function Br(e){return Lr(e)&&e>0}function Ur(e){return Wr(e)&&e.valueOf()>0}function Xr(e){return Br(e)||Ur(e)}G(Gr,"isPrimitive",Lr),G(Gr,"isObject",Wr),G(Xr,"isPrimitive",Br),G(Xr,"isObject",Ur);var Mr=Object.prototype.hasOwnProperty;var zr,Yr,qr="function"==typeof D&&"symbol"==typeof D("foo")&&(Yr="iterator",null!=(zr=D)&&Mr.call(zr,Yr))&&"symbol"==typeof D.iterator?Symbol.iterator:null;function Dr(){var e,r=arguments,t=r[0],i="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)i+="&arg[]="+encodeURIComponent(r[e]);return i}function Hr(e,r){var t,i,n,a;if(!function(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&Tr(e.next)}(e))throw new TypeError(Dr("0Pj46,G5",e));if(!Br(r))throw new TypeError(Dr("0Pj45,IB",r));return a=r-1,G(i={},"next",(function(){var i;if(n)return{done:!0};if((a+=1)===r){if((i=e.next()).done)return n=!0,i;a=0,t=i.value}return{value:t,done:!1}})),G(i,"return",(function(e){if(n=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),qr&&Tr(e[qr])&&G(i,qr,(function(){return Hr(e[qr](),r)})),i}export{Hr as default};
//# sourceMappingURL=mod.js.map
