---
layout: post
title:  "Spread operator"
author: Bhushan Goel
categories: [ Javascript ]
tags: [ ES6 ]
description: "Spread operator is a new operator added in ES6 version. It takes an iterable (array or string) and expands it into individual elements."
featured: false
image: assets/images/js.png
comments: false
---

Spread operator is a new operator added in ES6 version. It takes an iterable\(array or string\) and expands it into individual elements.

## Demos

### Simple example

```javascript
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));  // 6
```

### Copying array

```javascript
// Deep copy
let arr = [1, 2, 3];
let arr2 = [...arr];

arr2[2] = 4;

console.log(arr);    // [1, 2, 3]
console.log(arr2);    // [1, 2, 4]
```

```javascript
// Shallow copy
let arr = [1, 2, [3]];
let arr2 = [...arr];

arr2[2][0] = 4;

console.log(arr);    // [1, 2, [4]]
console.log(arr2);    // [1, 2, [4]]
console.log(arr === arr2);     // false
```

Spread operator can also be used to copy an array. But it is effective only for one level deep, it may be unsuitable for copying multidimensional arrays, as the _Shallow copy_ example shows.

### Array concatenation

```javascript
let arr = [1, 2, 3];
let arr2 = [4, 5, 6];

// using concat method
console.log(arr.concat(arr2));    // [1, 2, 3, 4, 5, 6]

// using spread syntax
console.log([...arr, ...arr2]);    // [1, 2, 3, 4, 5, 6]
```

### Finding min or max from an array

```javascript
let arr = [4, 7, 1, 2, 80, 0, 10, 9];

console.log(Math.max(...arr));    // 80
console.log(Math.min(...arr));    // 0
```

`max` or `min` method takes comma separated integers instead of an array and find out the min or max.

### Cloning an object

```javascript
let obj1 = { foo: 'bar', x: 42 };

let clonedObj = { ...obj1, z: 12 };

console.log(clonedObj);    // {foo: "bar", x: 42, z: 12}
```

