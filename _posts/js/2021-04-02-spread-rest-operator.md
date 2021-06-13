---
layout: post
title:  "Spread and Rest operator"
author: Bhushan Goel
categories: [ Javascript ]
companies: [Nagarro]
tags: [ ES6 ]
description: "Spread and Rest operators are new operators added in ES6 version. "
featured: false
image: assets/images/js.png
comments: false
toc: true
youtube: "https://www.youtube.com/watch?v=jmJGsfk9ZeU"
---

<!-- [Rest](#rest-parameter) -->

ES6 version came out with some new features, **`...(triple dot)`** is one of those new JS feature.

It can be used in two different ways, as a -
* **Spread operator:** It is a new operator added in ES6 version. It takes an iterable\(array or string\) and expands it into individual elements. 
* **Rest parameter:** It allows a function to accept indefinite number of arguments as an array.
  
## Rest parameter

It allows a function to accept indefinite number of arguments as an array.

```js
function solve(...foo) {
  console.log(foo); // [1, 2, 3, 4]
}

solve(1,2,3,4);
```

- It is denoted by `...<variable_name>`
- There can be only **one** `rest parameter` passed as a function argument.

Before ES6 we had an `arguments` object, which is an array-like object. But is not a real array, which means array methods like `map`, `filter`, `sort`, `forEach` etc. can not be applied. Only `length` property works on arguments. 

Whereas `rest parameter` is a real array and all the array methods can be applied to it directly.

### arguments object

In this example, I have created a function `solve` and inside that, I am printing the arguments object, then its length and after that, I am trying to access a method that belongs to an array.

```js
function solve() {
  console.log(arguments);
  console.log(arguments.length);  // 4
  console.log(arguments.pop());
}

solve(10, 20, 30, 40);
```

And now If you run this, you will see that, In the first console, it prints a structure that looks like an object.

```json
{
  0: 10,
  1: 20,
  2: 30,
  3: 40
}
```

and we can access properties using **square brackets**, like this:

```js
arguments[0]; // 10
```

and, there is an **error** on the third `console` statement because the arguments object is not a real array and only length property is accessible.

```error
TypeError: arguments.pop is not a function
```

The `typeof` operator also returns `object` when used with arguments —

```js
console.log(typeof arguments); // 'object' 
```

However, it can be converted to an `array` by writing —

```js
var foo = Array.prototype.slice.call(arguments);
```

And now, If you try to access any `array` method on foo, you can do that.

```js
function solve() {

  var foo = Array.prototype.slice.call(arguments);

  console.log(foo);
  console.log(foo.length);
  console.log(foo.pop());
}

solve(1,2,3,4);
```

### rest parameter

Update the `solve` function, by adding a parameter with `triple dot(...)` as a prefix and name it whatever you want. I will name it as `foo`.

```js
// foo acts as a rest parameter here
function solve(...foo) {
  console.log(foo);   // [10, 20, 30, 40]
  console.log(foo.length);    // 4
  console.log(foo.pop());   // 40 (removed and returned the last element from an array)
}

solve(10, 20, 30, 40);
```

And now If you run this, you can see that the output looks exactly like an `array` and all methods of the array are available to us.

<span style="font-weight: bold; font-size: 20px;">Should be the last parameter</span>

You can also pass more parameters to this function and you need to keep in mind that `rest parameter` should be the **last parameter**, it can not be placed at the front or in between.

```js
function solve(a, ...foo, b) {
	console.log('a : ', a);
	console.log('foo : ', foo);
	console.log('b : ', b);
}

solve(1, 2);   // SyntaxError: Rest parameter must be last formal parameter
```

This code will throw an error.
```error
SyntaxError: Rest parameter must be last formal parameter
``` 

Now, let’s fix this code by placing the `rest parameter` at the end of the parameter list.So, now add two more parameters called `a` and `b`, and if the argument length is more than two then only `foo` will have values, otherwise, it will be printed as an empty array.

```js
function solve(a, b, ...foo) {
	console.log('a : ', a);   // 1
	console.log('foo : ', foo);   // []
	console.log('b : ', b);   // 2
}

solve(1, 2);
```

Now, if you add more arguments —

```js
function solve(a, b, ...foo) {
	console.log('a : ', a);   // 1
	console.log('foo : ', foo);   // [3, 4]
	console.log('b : ', b);   // 2
}

solve(1, 2, 3, 4);
```
The remaining elements will become part of the rest parameter array.


## Spread operator
It takes an iterable (array, object or string) and expands it into individual elements. 

**Some simple examples -**
```js
const shapes = ['square', 'circle', 'rectangle'];
console.log(...shapes);	// "square", "circle", "rectangle"
```

As you can see in this example - the array of strings have been expanded into their individual elements (strings).

Now, let us try the same for an array of numbers:

```js
const digits = [1,9,8,2];
console.log(...digits);
```

In this example - an array of integers have been expanded into their individual elements.

### Uses
Now, Let's see some practical use cases of spread operator.

**Copying array:**

Spread operator can be used to create **deep copies** of an `array` or `object`, provided they are **not nested**.

*Example —*

Create an array `shapes` with 3 items in it and then copy this into another array called `items` by using the spread operator.

Now, if you **modify** any element of `items`, it won’t change the shapes array and this shows that the spread operator created a **deep copy**.

```javascript
// Deep copy
let shapes = [1, 2, 3];
let items = [...shapes];

items[2] = 4;

console.log(shapes);    // [1, 2, 3]
console.log(items);    // [1, 2, 4]
```

Now, modify this example by adding one nested property in the `shapes` array and then follow the same process to copy shapes to the items array.

Now if you try to modify the nested property of items, it will change the `shapes` array and this shows that the spread operator creates a shallow copy in case of nesting. This holds same for `objects` as well.


```javascript
// Shallow copy
let shapes = [1, 2, [3]];
let items = [...shapes];

items[2][0] = 4;

console.log(shapes);    // [1, 2, [4]]
console.log(items);    // [1, 2, [4]]
console.log(shapes === items);     // false
```

**Cloning an object:**

Just like copying arrays, it can also be used to clone objects. But it creates a deep copy only if the object is one level deep, otherwise a shallow copy would be made. 


**Array concatenation:**

It can also be used to combine multiple arrays or arrays with other elements.

```javascript
// combinining multiple arrays
let arr = [1, 2, 3];
let arr2 = [4, 5, 6];

// using concat method
console.log(arr.concat(arr2));    // [1, 2, 3, 4, 5, 6]

// using spread syntax
console.log([...arr, ...arr2]);    // [1, 2, 3, 4, 5, 6]
```

**Extending an object/array:**

New properties to an existing array or an object can be added by using the `spread` operator. It will also create a `deep copy` only if the array or object is one level deep.

```javascript
// combinining object with other properties
let obj1 = { foo: 'bar', x: 42 };

let clonedObj = { ...obj1, z: 12 };

console.log(clonedObj);    // {foo: "bar", x: 42, z: 12}
```

```js
// combinining arrays with other elements
const shapes = [1,2,3]
const items = [...shapes, 9, 10];

console.log(items);   // [1, 2, 3, 9, 10]
```

**Finding min or max from an array:**

The `max` or `min` method takes comma-separated integers instead of an array and find out the min or max. So if you are given an array then you can simply use spread operator.

```javascript
let arr = [4, 7, 1, 2, 80, 0, 10, 9];

console.log(Math.max(...arr));    // 80
console.log(Math.min(...arr));    // 0
```

## Summary

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-fymr{border-color:inherit;font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-fymr">Rest parameter</th>
    <th class="tg-fymr">Spread operator</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">It allows a function to collect the number of arguments as an array</td>
    <td class="tg-0pky">It provides the ability to expand iterables</td>
  </tr>
  <tr>
    <td class="tg-0pky">It can used in place of <code>arguments</code> object</td>
    <td class="tg-0pky">It can be used in place of <code>concat(), Object.assign()</code> method</td>
  </tr>
  <tr>
    <td class="tg-0pky">Used an a <code>function parameter</code></td>
    <td class="tg-0pky">It is passed as a <code>function argument</code></td>
  </tr>
</tbody>
</table>

<hr>

<iframe width="560" height="315" src="https://www.youtube.com/embed/jmJGsfk9ZeU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Interview questions
<div class="interview-questions-section">
<details>
  <summary><b>Question 1: </b>What are some of the new features introduced in ES6?</summary>
<p>Along with let, const, arrow functions etc. a triple dot(...) operator was also introduced in ES6. It can be used in two different ways in JavaScript -- Rest parameter and Spread operator</p>
</details>

<details>
  <summary><b>Question 2: </b>Differentiate between rest and spread operator.</summary>
  <p><a href="#summary">Answer here</a></p>
</details>

<details>
  <summary><b>Question 3: </b>Rest parameter vs arguments object.</summary>
  <p><a href="#arguments-object">Answer here</a></p>
</details>

<details>
  <summary><b>Question 4: </b>Can we use <code>spread operator</code> to create a deep copy of an object/array?</summary>
<p> Yes, it can be used to create a deep copy, provided there is no nesting in array or object.</p>
</details>
</div>

