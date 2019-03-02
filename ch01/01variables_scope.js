'use strict';

// Referenced before declaration
console.log( example1 ); // Expect output: undefined
var example1 = 'example'; // due to this being var, this is also hoisted


// Declared and initialized
let example2 = { prop1: 'test' };
console.log( 'example:', example2 );
// Expect output: example: {prop1: 'test"}
// Value reassigned
example2 = 5;
console.log( example2 ); // Expect output: 5