// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function o(d,m){var l,f,p,u;if(!r(d))throw new TypeError(i("0Cm4J",d));if(!n(m))throw new TypeError(i("0Cm4I",m));return u=m-1,e(f={},"next",(function(){var e;if(p)return{done:!0};if((u+=1)===m){if((e=d.next()).done)return p=!0,e;u=0,l=e.value}return{value:l,done:!1}})),e(f,"return",(function(e){if(p=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),s&&t(d[s])&&e(f,s,(function(){return o(d[s](),m)})),f}export{o as default};
//# sourceMappingURL=index.mjs.map
