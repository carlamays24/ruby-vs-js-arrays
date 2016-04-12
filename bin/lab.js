'use strict';

// Lab 1

// Use `new Array` and method chaining to create a JavaScript Array
// with ten elements where elements are equal to their index multiplied by 2.
// Store the result and display it on the console with `console.log(<array name>)`

var a = [1, 2, 3, 4, 5,6,7,8,9];
var b = [];
a.forEach(function(x) { b.push(x*2); });
console.log(b);

// Lab 2

// Assign `20` to the element at `length+1`.

var a = [1, 2, 3, 4, 5,6,7,8,9];
var b = [];

a.forEach(function(x) { b.push(x*2); });
console.log(b);

b.push(20);
console.log(b)

// Access the 3rd element from the end of an array length of 5.

console.log(b[b.length - 3]);

// Access element 9 for a length of 5 elements.
??


// Assign `[-12, -49]` to the 5th element from the end for a length of 3.

// Access all the elements starting at index 1.
