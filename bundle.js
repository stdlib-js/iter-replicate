// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterReplicate=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var s=function(r,e,t){var n,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,p="set"in t,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},l=n,p=s,v=t()?l:p;var g=function(r,e,t){v(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=g,m=/./;var h=function(r){return"boolean"==typeof r};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var y=function(){return b&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,j=w;var E=function(r){return j.call(r)},P=Object.prototype.hasOwnProperty;var _=function(r,e){return null!=r&&P.call(r,e)},O="function"==typeof Symbol?Symbol.toStringTag:"",T=_,x=O,S=w;var V=E,k=function(r){var e,t,n;if(null==r)return S.call(r);t=r[x],e=T(r,x);try{r[x]=void 0}catch(e){return S.call(r)}return n=S.call(r),e?r[x]=t:delete r[x],n},I=y()?k:V,A=Boolean.prototype.toString;var R=I,F=function(r){try{return A.call(r),!0}catch(r){return!1}},$=y();var M=function(r){return"object"==typeof r&&(r instanceof Boolean||($?F(r):"[object Boolean]"===R(r)))},C=h,N=M;var B=d,G=function(r){return C(r)||N(r)},L=M;B(G,"isPrimitive",h),B(G,"isObject",L);var Z=G;var W=function(){return new Function("return this;")()},X="object"==typeof self?self:null,z="object"==typeof window?window:null,U="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Y="object"==typeof U?U:null;module.exports=Y;var D=Z.isPrimitive,q=W,H=X,J=z,K=r(Object.freeze({__proto__:null}));var Q=function(r){if(arguments.length){if(!D(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return q()}if(H)return H;if(J)return J;if(K)return K;throw new Error("unexpected error. Unable to resolve global object.")},rr=Q(),er=rr.document&&rr.document.childNodes,tr=Int8Array,nr=m,ir=er,or=tr;var ar=function(){return"function"==typeof nr||"object"==typeof or||"function"==typeof ir};var ur=function(){return/^\s*function\s*([^(]*)/i},cr=ur;d(cr,"REGEXP",ur());var fr=cr,sr=I;var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===sr(r)};var pr=function(r){return null!==r&&"object"==typeof r};d(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!lr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(pr));var vr=pr;var gr=I,dr=fr.REGEXP,mr=function(r){return vr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var hr=function(r){var e,t,n;if(("Object"===(t=gr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=dr.exec(n.toString()))return e[1]}return mr(r)?"Buffer":t},br=hr;var yr=hr;var wr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?br(r).toLowerCase():e},jr=function(r){return yr(r).toLowerCase()},Er=ar()?jr:wr;var Pr=function(r){return"function"===Er(r)},_r=Pr;var Or=function(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&_r(r.next)};var Tr=function(r){return"number"==typeof r},xr=Number,Sr=xr.prototype.toString;var Vr=I,kr=xr,Ir=function(r){try{return Sr.call(r),!0}catch(r){return!1}},Ar=y();var Rr=function(r){return"object"==typeof r&&(r instanceof kr||(Ar?Ir(r):"[object Number]"===Vr(r)))},Fr=Tr,$r=Rr;var Mr=d,Cr=function(r){return Fr(r)||$r(r)},Nr=Rr;Mr(Cr,"isPrimitive",Tr),Mr(Cr,"isObject",Nr);var Br=Cr,Gr=Number.POSITIVE_INFINITY,Lr=xr.NEGATIVE_INFINITY,Zr=Math.floor;var Wr=function(r){return Zr(r)===r},Xr=Gr,zr=Lr,Ur=Wr;var Yr=function(r){return r<Xr&&r>zr&&Ur(r)},Dr=Br.isPrimitive,qr=Yr;var Hr=function(r){return Dr(r)&&qr(r)},Jr=Br.isObject,Kr=Yr;var Qr=function(r){return Jr(r)&&Kr(r.valueOf())},re=Hr,ee=Qr;var te=d,ne=function(r){return re(r)||ee(r)},ie=Qr;te(ne,"isPrimitive",Hr),te(ne,"isObject",ie);var oe=ne,ae=oe.isPrimitive;var ue=function(r){return ae(r)&&r>0},ce=oe.isObject;var fe=function(r){return ce(r)&&r.valueOf()>0},se=ue,le=fe;var pe=d,ve=function(r){return se(r)||le(r)},ge=fe;pe(ve,"isPrimitive",ue),pe(ve,"isObject",ge);var de=ve,me=_;var he=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&me(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null;var be=function(r){return"string"==typeof r},ye=String.prototype.valueOf;var we=I,je=function(r){try{return ye.call(r),!0}catch(r){return!1}},Ee=y();var Pe=function(r){return"object"==typeof r&&(r instanceof String||(Ee?je(r):"[object String]"===we(r)))},_e=be,Oe=Pe;var Te=d,xe=function(r){return _e(r)||Oe(r)},Se=Pe;Te(xe,"isPrimitive",be),Te(xe,"isObject",Se);var Ve=xe,ke=Wr;var Ie=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ke(r.length)&&r.length>=0&&r.length<=9007199254740991};var Ae=function(r){return r!=r},Re=Br.isPrimitive,Fe=Ae;var $e=function(r){return Re(r)&&Fe(r)},Me=Br.isObject,Ce=Ae;var Ne=function(r){return Me(r)&&Ce(r.valueOf())},Be=$e,Ge=Ne;var Le=d,Ze=function(r){return Be(r)||Ge(r)},We=Ne;Le(Ze,"isPrimitive",$e),Le(Ze,"isObject",We);var Xe=Ie,ze=oe.isPrimitive,Ue=Ve.isPrimitive,Ye=Ze.isPrimitive;var De=function(r,e,t){var n,i,o;if(!Xe(r)&&!Ue(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!ze(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Ue(r)){if(!Ue(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Ye(e)){for(o=i;o<n;o++)if(Ye(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},qe=De,He=Ve.isPrimitive;var Je=function(r){if(!He(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Ke=Ve.isPrimitive;var Qe=function(r){if(!Ke(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},rt=Je,et=Qe,tt=Ve.isPrimitive;var nt=function(r){return tt(r)&&r===et(r)&&r!==rt(r)},it=Gr,ot=Lr;var at=function(r){return r==r&&r>ot&&r<it},ut=oe.isPrimitive;var ct=function(r){return ut(r)&&r>=0},ft=oe.isObject;var st=function(r){return ft(r)&&r.valueOf()>=0},lt=ct,pt=st;var vt=d,gt=function(r){return lt(r)||pt(r)},dt=st;vt(gt,"isPrimitive",ct),vt(gt,"isObject",dt);var mt=gt.isPrimitive,ht=Ve.isPrimitive;var bt=function(r,e){var t,n;if(!ht(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!mt(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},yt=oe.isPrimitive,wt=Ve.isPrimitive;var jt=function(r,e,t){var n,i;if(!wt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!wt(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!yt(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},Et=bt,Pt=jt;var _t=function(r,e,t){var n=!1,i=e-r.length;return i<0||(Pt(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+Et("0",i):Et("0",i)+r,n&&(r="-"+r)),r},Ot=nt,Tt=Qe,xt=Je,St=at,Vt=Br.isPrimitive,kt=_t;var It=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!St(n)){if(!Vt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=kt(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=kt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=Ot(r.specifier)?Tt(t):xt(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},At=Ve.isPrimitive,Rt=/[-\/\\^$*+?.()|[\]{}]/g;var Ft=function(r){var e,t;if(!At(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Rt,"\\$&"):(e=(e=r.substring(1,t)).replace(Rt,"\\$&"),r=r[0]+e+r.substring(t))},$t=RegExp.prototype.exec;var Mt=I,Ct=function(r){try{return $t.call(r),!0}catch(r){return!1}},Nt=y();var Bt=Ft,Gt=Pr,Lt=Ve.isPrimitive,Zt=function(r){return"object"==typeof r&&(r instanceof RegExp||(Nt?Ct(r):"[object RegExp]"===Mt(r)))};var Wt=nt,Xt=Qe,zt=Je,Ut=function(r,e,t){if(!Lt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Lt(e))e=Bt(e),e=new RegExp(e,"g");else if(!Zt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Lt(t)&&!Gt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Yt=at,Dt=Br.isPrimitive,qt=function(r){return Math.abs(r)},Ht=/e\+(\d)$/,Jt=/e-(\d)$/,Kt=/^(\d+)$/,Qt=/^(\d+)e/,rn=/\.0$/,en=/\.0*e/,tn=/(\..*[^0])0*e/;var nn=function(r){var e,t,n=parseFloat(r.arg);if(!Yt(n)){if(!Dt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":qt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Ut(t,tn,"$1e"),t=Ut(t,en,"e"),t=Ut(t,rn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Ut(t,Ht,"e+0$1"),t=Ut(t,Jt,"e-0$1"),r.alternate&&(t=Ut(t,Kt,"$1."),t=Ut(t,Qt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Wt(r.specifier)?Xt(t):zt(t)},on=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var an=bt;var un=Ve.isPrimitive,cn=qe,fn=Ae,sn=It,ln=nn,pn=function(r){var e,t,n,i,o;for(e=0,n=[],o=on.exec(r);o;)(t=r.slice(e,on.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=on.lastIndex,o=on.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},vn=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+an(" ",n):an(" ",n)+r},gn=_t,dn=String.fromCharCode;var mn=function(r){var e,t,n,i,o,a,u,c,f;if(!un(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=pn(r),a="",u=1,c=0;c<e.length;c++)if(n=e[c],un(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!cn(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,fn(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,fn(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=sn(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!fn(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=fn(o)?String(n.arg):dn(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=ln(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=gn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=vn(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a},hn=d,bn=Pr,yn=Or,wn=de.isPrimitive,jn=he,En=mn;var Pn=function r(e,t){var n,i,o,a;if(!yn(e))throw new TypeError(En("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",e));if(!wn(t))throw new TypeError(En("invalid argument. Second argument must be a positive integer. Value: `%s`.",t));return a=t-1,hn(i={},"next",(function(){var r;if(o)return{done:!0};if((a+=1)===t){if((r=e.next()).done)return o=!0,r;a=0,n=r.value}return{value:n,done:!1}})),hn(i,"return",(function(r){if(o=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),jn&&bn(e[jn])&&hn(i,jn,(function(){return r(e[jn](),t)})),i};return Pn}));
//# sourceMappingURL=bundle.js.map
