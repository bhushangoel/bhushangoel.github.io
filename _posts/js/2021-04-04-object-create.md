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

`Object.create()` is one of the 4 techniques to create a new object in JS.

> It creates a **new object** by copying an **existing object** into the **prototype of a new object**.

This is the main concept of `Object.create()`. If you remember this line then you will be able to answer any question related to this concept.


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

## Uses
`Object.create()` is mainly used to achieve classical inheritance.

## Interview questions
* [Object.create() - Input/Ouput](/io-5)
* What is the difference between `Object.create()` and `new` keyword?
  > Ans: It creates a **new object** by copying an **existing object** into the **prototype of a new object**.
* How `Object.create()` is different from other object creation methods?
  > Ans:  It creates a **new object** by copying an **existing object** into the **prototype of a new object**.
