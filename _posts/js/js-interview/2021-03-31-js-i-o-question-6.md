---
layout: post
title:  "JS Input/Output Solution 6"
author: Bhushan Goel
categories: [ Javascript ]
tags: [ JS interview questions ]
description:
featured: false
comments: false
image: assets/images/js.png
---

#### What will be the output?

```javascript
 let arr = [];
 arr[0] = 'a';
 console.log(arr['0'] === arr[0]);   // ?
```

### Solution

```javascript
 let arr = [];
 arr[0] = 'a';
 console.log(arr['0'] === arr[0]);   // true
```

Why passing index value as string or number to an array variable returns same value?  

This is because, index value passed to an array gets converted to a number internally. So, `arr['0']` will be interpreted as `arr[0]`

