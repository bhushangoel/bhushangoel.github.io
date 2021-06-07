---
layout: post
title:  "JS Input/Output Solution 4"
author: Bhushan Goel
categories: [ Javascript ]
tags: [ JS input/output ]
description:
featured: false
comments: false
image: assets/images/js.png
---

#### What will happen, if we declare an array using a `const` and try to change one of its values?

```javascript
const s = [5, 6, 7];
s[2] = 45;
console.log(s);    // ?
```

### Solution

```javascript
const s = [5, 6, 7];
s[2] = 45;
console.log(s);    // [5, 6, 45]
```

You might think that value will not get modified here and we will receive an error: _"TypeError: Assignment to constant variable."_ 

But, instead our array value gets modified and prints a the modified array.

This is because, `const`prevents the reference of a variable from getting changed, but in the case of an `array` or an `object` the reference remains same and only the property is getting modified.

If you try to change the reference and point the variable to an entirely new object or array, then you will get an error.

```javascript
const s = [5, 6, 7];
s = [5, 6, 45]
console.log(s);    // TypeError: Assignment to constant variable
```

\_\_

