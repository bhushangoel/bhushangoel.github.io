---
layout: post
title:  "The Difference Between Throttling and Debouncing"
author: Bhushan Goel
categories: [ Javascript ]
tags: [ Walmart ]
description: "two techniques to limit the rate of calling a function"
comments: false
---

## Debouncing
In the `debouncing technique`, no matter how many times the user fires the event, the attached function will be executed only after the specified time **once the user stops firing the event**.

*For example:*

Suppose, there is a kid continously asking for a chocolate to his parents. They can debounce his request by saying that we will give you another chocolate after 30 min, once you stop asking.

```html
<input placeholder="Enter some text" name="name"/>
<p id="values"></p>
```

```js
const input = document.querySelector('input');
const log = document.getElementById('values');

const processChanges = debounce(() => {
  saveInput();
});

input.addEventListener('input', processChanges);

function debounce(func, timeout = 300) {
  console.log(func)
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

function saveInput() {
  console.log('Saving data');
}
```

### Use
Can be used in a situation where we need to hit an API on the basis of what user is typing in the search box. Api will only hit after a specified time once the user stops typing.

## Throttling
`Throttling` is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.

*For example:*

Suppose, there is a kid continously asking for a chocolate to his parents. They can throttle his request by saying that we will give you one chocolate after every 30 min.

### Use
If on window resize event we want to call some API, so instead of doing it on every resize event, we can limit the rate to once in every 100ms