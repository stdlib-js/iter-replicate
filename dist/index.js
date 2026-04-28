"use strict";var p=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var c=p(function(h,f){
var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=require('@stdlib/assert-is-function/dist'),x=require('@stdlib/assert-is-iterator-like/dist'),y=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,u=require('@stdlib/symbol-iterator/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function l(r,e){var v,i,a,n;if(!x(r))throw new TypeError(s('0Pj46',r));if(!y(e))throw new TypeError(s('0Pj45',e));return n=e-1,i={},o(i,"next",m),o(i,"return",d),u&&q(r[u])&&o(i,u,g),i;function m(){var t;if(a)return{done:!0};if(n+=1,n===e){if(t=r.next(),t.done)return a=!0,t;n=0,v=t.value}return{value:v,done:!1}}function d(t){return a=!0,arguments.length?{value:t,done:!0}:{done:!0}}function g(){return l(r[u](),e)}}f.exports=l
});var b=c();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
