/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 2.0

/// <reference types="https://cdn.jsdelivr.net/gh/stdlib-js/types@main/index.d.ts"/>

import { Iterator as Iter, IterableIterator } from '@stdlib/types/iter';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator = Iter | IterableIterator;

/**
* Returns an iterator which replicates each iterated value `n` times.
*
* ## Notes
*
* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
*
* @param iterator - input iterator
* @param n - number of times each iterated value is replicated
* @returns iterator
*
* @example
* var array2iterator = require( `@stdlib/array/to-iterator` );
*
* var src = array2iterator( [ 1, 2, 3, 4 ] );
* var iter = iterReplicate( src, 2 );
*
* var v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* v = iter.next().value;
* // returns 2
*
* // ...
*/
declare function iterReplicate( iterator: Iterator, n: number ): Iterator;


// EXPORTS //

export = iterReplicate;