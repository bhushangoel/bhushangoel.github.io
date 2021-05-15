---
layout: post
title:  "var Vs let Vs const"
author: Bhushan Goel
categories: [ Javascript ]
tags: [ ES6 ]
description: "All three of them are use to declare a local variable in JavaScript. let and const are newly added in ES6 version."
featured: false
image: assets/images/js.png
comments: false
toc: true
---

<!-- [var](#var) -->

A lot of new concepts were introduced in `ES6`. One of them is `let` and `const`.


**Why you should prefer `let/const` instead of `var` for declaring variables?**

To answer this question, we need to look at the following aspects for all 3 of them --

- scope
- How to use?
- Hoisting


## `var`
Before ES6 `var` was the only available way to declare variables.

### Scope
It is a `function scoped` which means variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function.

If declared outside of a function, the scope is the `global` scope.

**example:**
```javascript
function solve() {
	var a  = 10;
	console.log(a);    // 10
	if(true) {
		var a = 20;
		console.log(a);  // 20
	}
	console.log(a);  // 20
}

solve();
console.log(a); // a is not defined

/*
variable `a` on line 2 is declared inside function `solve`
and will only be accessible inside solve().

on line 12, error is printed because `a` can only be accessed
inside the scope of a function in which it is declared
*/
```

### How to use?
`var` can be redeclared and update. It mainly leads to confusion and causes an error in the application. That is why new methods to declare a variable were introduced in ES6.

**example:**
```javascript
var myName = "foo";
var myName = "bar";

console.log(myName);    // bar
```

### Hoisting
`var` works with hoisting, which means you can use the variable early and declare it at a later stage and your code will work fine.

**example:**
```javascript
// actual code
console.log(myName);    // undefined
var myName = "foo"; 

// (interpreted by compiler as)
var myName;
console.log(myName);
myName = "foo";
```

*This code won't break, you will just see `undefined` as an output.*

<hr>

## `let`
`let` is a new way of declaring a variable in javaScript. It was introduced in the ES6 version launched in 2015.

### Scope
`let` creates a **block-scoped** variable, that is their scope is limited to the `{}(curly braces)` only.

**example:**
```javascript
function solve() {
	let a  = 10;
	console.log(a);    // 10
	if(true) {
		let a = 20;
		console.log(a);  // 20
	}
	console.log(a);  // 10
}
```

### How to use?
It can be updated but can not be redeclared.

**example:**
```javascript
// SyntaxError: Identifier 'myName' has already been declared
let myName = "foo";
let myName = "bar";

// Updation is allowed
let myName = "foo";
myName = "bar";
console.log(myName);    // bar

```

### Hoisting
Hoisting also works with `let`, it also get **hoisted to the top** of its `scope` but in this instead of getting `undefined`, you will get a `reference error`.

**example:**
```javascript
if (true) {
  console.log(a);   // Uncaught ReferenceError: Cannot access 'a' before initialization

  let a = 5;
}
```

<hr>

## `const`
`const` is a new way of declaring a variable in javaScript. It was introduced in the ES6 version launched in 2015.

### Scope
`const` creates a **block-scoped** variable, that is their scope is limited to the `{}(curly braces)` only.

**example:**
```javascript
function solve() {
	const a  = 10;
	console.log(a);    // 10
	if(true) {
		const a = 20;
		console.log(a);  // 20
	}
	console.log(a);  // 10
}
```

### How to use?
It **can not** be either updated or redeclared.

**example:**
```javascript
// error
const myName = "foo";
const myName = "bar";

// error
const myName = "foo";
myName = "bar";

```
![const with primitives](https://raw.githubusercontent.com/bhushangoel/ctfi-cdn/master/855AE200-5F32-4C93-8067-70D5FA1E2FB3.jpeg#post-img)

But there is a caveat here. If you declare an `object` using `const`, it can be updated.

**example:**
```javascript
const obj = {
  a: 5
}

obj['a'] = 6;

console.log(obj);   // { a: 6 }
```

This is because in the case of object update, the object's memory reference does not change, and `const` only throws an error if the reference changes.

![const with objects](https://raw.githubusercontent.com/bhushangoel/ctfi-cdn/master/0F1624FA-099C-4B69-869D-D10E5AE1E606.jpeg#post-img)

### Hoisting
Hoisting also works with `const`, it also get **hoisted to the top** of its `scope` but in this instead of getting `undefined`, you will get a `reference error`.

**example:**
```javascript
if (true) {
  console.log(a);   // Uncaught ReferenceError: Cannot access 'a' before initialization

  const a = 5;
}
```
<hr>

## Summary

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-fymr{border-color:inherit;font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
.tg .tg-y698{background-color:#efefef;border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-fymr"></th>
    <th class="tg-fymr"><span style="font-weight:bold">Description</span></th>
    <th class="tg-fymr"><span style="font-weight:bold">Scope</span></th>
    <th class="tg-fymr">How to use?</th>
    <th class="tg-fymr">Hoisting</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">var</td>
    <td class="tg-0pky">Before ES6 var was the only available way to declare variables</td>
    <td class="tg-0pky">Function scoped.<br></td>
    <td class="tg-0pky"><span style="color:#32CB00">Can be redeclared</span><br><br><span style="font-weight:400;font-style:normal;color:#32CB00">Can be updated</span></td>
    <td class="tg-0pky">Hoisted</td>
  </tr>
  <tr>
    <td class="tg-y698">let</td>
    <td class="tg-y698">Introduced in ES6</td>
    <td class="tg-y698">Block scoped</td>
    <td class="tg-y698"><span style="font-weight:400;font-style:normal;color:#CB0000">Can not be redeclared</span><br><br><span style="font-weight:400;font-style:normal;color:#32CB00">Can be updated</span></td>
    <td class="tg-y698">Hoisted, but throws reference error</td>
  </tr>
  <tr>
    <td class="tg-0pky">const</td>
    <td class="tg-0pky"><span style="font-weight:400;font-style:normal">Introduced in ES6</span></td>
    <td class="tg-0pky"><span style="font-weight:400;font-style:normal">Block scoped</span></td>
    <td class="tg-0pky"><span style="font-weight:400;font-style:normal;color:#CB0000">Can not be redeclared</span><br><br><span style="font-weight:400;font-style:normal;color:#CB0000">Can not be updated</span></td>
    <td class="tg-0pky"><span style="font-weight:400;font-style:normal">Hoisted, but throws reference error</span></td>
  </tr>
</tbody>
</table>