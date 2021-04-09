---
layout: post
title:  "Object.create()"
author: Bhushan Goel
categories: [ Javascript ]
tags: [  ]
description: "Object.create() is a way to create a new object. It uses an existing object as the prototype of the newly created object."
featured: true
comments: false
image: assets/images/js.png
---


`Object.create()` is a way to create a new object. It uses an existing object as the prototype of the newly created object.

## Example

```javascript
const car = {
    wheels: 4
}

const bmw = Object.create(car);

console.log(bmw);   //   {}
                    //    __proto__:
                    //        wheels: 4
```

The newly create object will inherit all the prototype object properties. In this case - `bmw` is a `newly created object`, and it inherits all the `prototype object properties of car`.

