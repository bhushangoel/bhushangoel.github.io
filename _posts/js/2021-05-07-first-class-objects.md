---
layout: post 
title:  "Functions : first class objects"
author: Bhushan Goel 
categories: [ Javascript ]
tags: [  ]
description: "Functions in JavaScript possess all the capabilities of objects and are thus treated like any other object in the language."
featured: false 
image: assets/images/js.png 
comments: false
---

[Interview Questions](#interview-questions)

`Functions` are first-class objects in JS.
They possess all the capabilities of objects and are thus treated like any other object in the language. 
So, we can say that functions are first-class objects.

They can be: 
- Created via `literals`
```javascript
function ninjaFunction() {
	// something happens here
}
```

- Assigns a new function to a `variable`
```javascript
var ninjaFunction = function() {
	// something happens here
}; 
```
			
- Adds a new function to an `array`
```javascript
ninjaArray.push(function(){
	// something happens here
}); 
```
		
- Assigns a new function as a property of another `object`
```javascript
ninja.data = function(){
	// something happens here
};
```

- Passed as `arguments` to other functions
```javascript
function call(ninjaFunction){ 
	ninjaFunction();
} 
call(function(){});
```

- `Returned` as values from functions
```javascript
function returnNewNinjaFunction() { 
	return function(){}; 
}
```

- They can possess `properties` that can be dynamically created and assigned:
```javascript
var ninjaFunction = function(){
    // something happens here
}; 
ninjaFunction.name = "Hanzo";
```

Whatever we can do with `objects`, we can do with `functions` as well. Functions are objects, just with an additional, special capability of being invokable: 
> Functions can be called or invoked in order to perform an action.

### Interview questions
* What do you mean by first class objects in JavaScript?