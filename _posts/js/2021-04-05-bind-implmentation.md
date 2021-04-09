---
layout: post
title:  "bind () implementation"
author: Bhushan Goel
categories: [ Javascript ]
tags: [ Code Implementation ]
image: assets/images/js.png
description: "`bind()` is use to invoke a function in JS"
featured: true
comments: false
---

`bind()` is use to invoke a function in JS. It allows us to -

* pass our own context
* execute the function at some later point in time

```javascript
var obj = {
    x: 2,
    foo: function () {
        console.log(this.x);
    }
}

// error
var bar = obj.foo;
bar();  // undefined

// using bind()
var baz = obj.foo.bind({x: 3});
baz();  // 3
```

## Custom implementation

```javascript
var obj = {
    x: 2,
    foo: function () {
        console.log(this.x);
    }
}

// custom bind() - mybind()
Function.prototype.mybind = function (context) {
    console.log(this);  // ƒ () { console.log(this.x); }

    var self = this;
    return function () {
        self.call(context);
    }
}

var bazz = obj.foo.mybind({
    x: 33
});
bazz(); // 33
```

Here, we have defined `mybind()` on a Function prototype, so that it becomes available to every function instance. In that function, `this` points to the function we are trying to invoke.

As original bind method returns a bound function, we are also doing the same by returning a function from `mybind()`. Inside that we are using `call()` to invoke the actual function.

## Code

Play around with code at [Fiddle](https://jsfiddle.net/gxen43ma/16/)

