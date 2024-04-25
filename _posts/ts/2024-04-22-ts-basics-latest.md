---
layout: post
title:  "TypeScript main features handbook - 2024"
author: Bhushan Goel
categories: [ TypeScript ]
companies: []
tags: [ typeScript ]
description: "TypeScript main features handbook with code examples."
featured: false
comments: false
toc: true
---

## Typescript basic types and syntax

Feel free to copy paste these examples and play around. Refer to the youtube video mentioned in the article to get more clarity on the concepts.

### Youtube video reference

|URL	| Video | 	Notes |
|--|--|--|
| https://www.youtube.com/watch?v=d56mG7DezGs&t=695s	| TypeScript Tutorial for Beginners - YouTube	| annotating or explaining the type of a variable.	| 
| https://www.youtube.com/watch?v=d56mG7DezGs&t=774s	| TypeScript Tutorial for Beginners - YouTube	| configuring typescript	| 
| https://www.youtube.com/watch?v=d56mG7DezGs&t=936s	| TypeScript Tutorial for Beginners - YouTube	| structuring typescript project	| 
| https://www.youtube.com/watch?v=d56mG7DezGs&t=979s	| TypeScript Tutorial for Beginners - YouTube	| some useful settings in ts.config	| 
| https://www.youtube.com/watch?v=d56mG7DezGs&t=1073s	| TypeScript Tutorial for Beginners - YouTube	| enable sourcemap to debug typescript code in editor	| 
| https://www.youtube.com/watch?v=d56mG7DezGs&t=1451s	| TypeScript Tutorial for Beginners - YouTube	| in typescript we can separate digits using _ if we have a very large number	| 
| https://www.youtube.com/watch?v=d56mG7DezGs&t=1917s	| TypeScript Tutorial for Beginners - YouTube	| Tuples in typescript let marks: [number, string] = [88, 'Maths'];	| 
| https://www.youtube.com/watch?v=d56mG7DezGs&t=2140s	| TypeScript Tutorial for Beginners - YouTube	| Checkout the transpilation of enum in typescript (Quite interesting !)	| 


### Code 
paste it in your favorite editor and play around.

```ts
// annotating age with a type number

let sales: number = 123455;
let course: string = "typescript";
let is_published = true;
// 1. 'any' type : can be redeclared with any type (AVOID USING)
let level;

level = 1;
level = "a";

// 2. array
// valid
let number: number[] = [1, 2, 3];
// invalid
// let numberList: number[] = [1, 2, "3"];

// 3. tuples (represented as a plain JS array)
// for fixed length, mixed type array
let marks: [number, string] = [88, "Maths"];

// 4. enums (Pascal Case)
enum Size {
	Small = 0,
	Medium = 1,
	Large = 3,
}
console.log(Size);

// JS equivalent
// var Size = {};
// (function (Size) {
//     Size[Size["Small"] = 0] = "Small";
//     // explaining above line
//     size['small'] = 0;
//     console.log(size['small'] = 0); // 0, because the assignment operation (=) returns the value that was assigned, which in this case is 0.
//     size[0] = 'small';

//     Size[Size["Medium"] = 1] = "Medium";
//     Size[Size["Large"] = 3] = "Large";
// })(Size);

// 5. Functions
function calculateTax(income: number): number {
	if (income < 50_000) {
		return 1;
	}
	return 0;
}

// 6. Objects
type Employee = { readonly id: number; name: string; fax?: number };
let employee: Employee = {
	id: 1,
	name: "john",
};

// TYPES

// 1. Union type (using |)
function kgToLbs(weight: number | string): number | string {
	return weight;
}

// both are valid now
kgToLbs(55);
kgToLbs("55");

// 2. Intersection type (using &)

// 3. Literal type
// let's say quantity can only be 50 OR 100, now we can't assing type number, as
// number can be anything.
type Quantity = 50 | 100;
let quantity: Quantity = 50;
let quantity1: Quantity = 100;
// invalid
// let quantity2: Quantity = 101;

// OPTIONAL CHAINING (?)
type Customer = {
	birthDay: Date;
};

function getCustomer(id: number): Customer | null {
	return id === 0 ? null : { birthDay: new Date() };
}

let customer = getCustomer(0);
if (customer !== null) {
	// optional chaining added
	console.log(customer?.birthDay);
}

// same can also used with an array
let users: string[] = ["john"];
// Valid case, users is defined
let username: string = users[0];

let users1: string[] = [];
// Invalid case, users1 has no data
let username1: string = users1?.[0];
```