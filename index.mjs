// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.1.0-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function o(d,m){var l,f,j,p;if(!r(d))throw new TypeError(i("0Pj46,G5",d));if(!n(m))throw new TypeError(i("0Pj45,IB",m));return p=m-1,e(f={},"next",(function(){var e;if(j)return{done:!0};if((p+=1)===m){if((e=d.next()).done)return j=!0,e;p=0,l=e.value}return{value:l,done:!1}})),e(f,"return",(function(e){if(j=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),s&&t(d[s])&&e(f,s,(function(){return o(d[s](),m)})),f}export{o as default};
//# sourceMappingURL=index.mjs.map