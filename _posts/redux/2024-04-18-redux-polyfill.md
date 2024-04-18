---
layout: post
title:  "Redux polyfill"
author: Bhushan Goel
categories: [ Redux ]
tags: [JS]
companies: []
image: assets/images/js.png
description: "Redux polyfill"
featured: true
comments: false
---

We use `Redux` a lot now a days. It is a state management library and has some core concepts like - 
1. Store
2. State
3. Reducer function
4. Actions
5. Dispatch actions

Normally we don't give much thought about how this library works under the hood. So, in this article I will try to implement a basic version on Redux and explain the working.

I will just touch upon 3 methods
1. createStore()
2. getState()
3. dispatch()

### Building Blocks:
Our simplified Redux implementation will consist of two main components: a state container and a method to update the state.

### State Container:
We'll start by defining an object called `Redux`, which will serve as our state container. This object will hold the current state information and provide methods to access and update this state.

```js
// const store = redux.createStore(reducer);
// store.getCurrentState();
//

// my redux
const Redux = {
  currentStateInfo: "",
  createStore: (rFn) => {
    Redux.currentStateInfo = rFn();
    return {
      getState: () => {
        return Redux.currentStateInfo;
      },
      dispatch: (obj) => {
        Redux.currentStateInfo = rFn(Redux.currentStateInfo, obj);
      },
    };
  },
};
```

Explanation:

- `currentStateInfo`: This property holds the current state information.
- `createStore`: This method is responsible for creating a Redux-like store. It takes a reducerFunction as an argument, which is a pure function that describes how the state should change in response to an action.
- Inside createStore, we initialize the `currentStateInfo` by invoking the `reducerFunction` once.
- The method returns an object with two methods:
   - `getState`: Returns the current state information.
   - `dispatch`: Accepts an action object, invokes the reducerFunction with the current state and the action, and updates the currentStateInfo accordingly.

`currentStateInfo` is accessed via the Redux object within the createStore method and the methods returned by createStore. 
This ensures that `currentStateInfo` remains a property of the Redux object and is accessible within the closure of the returned methods.

## Usage:
Now that we have our Redux-like store set up, let's see how we can use it.


```js

const defaultState = { login: false, name: "" };

const reducer = (state = defaultState, action = { type: "" }) => {
  console.log("Reducer called : ", action);
  switch (action.type) {
    case "LOGIN":
      return { login: true, name: action.name };
    case "LOGOUT":
      return { login: false, name: action.name };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);
console.log("store : ", store);

const currentState = store.getState();
console.log("currentState 1 : ", currentState);

const loginAction = () => {
  return {
    type: "LOGIN",
    name: 'abc'
  };
};

store.dispatch(loginAction());
console.log("currentState 2 : ", store.getState());

const logoutAction = () => {
  return {
    type: "LOGOUT",
    name: ''
  };
};

store.dispatch(logoutAction());
console.log("currentState 3 : ", store.getState());

```

### Conclusion:
In this blog post, we've implemented a simplified version of Redux in JavaScript. We learned about the core concepts of Redux, including the state container and reducer functions. While our implementation is basic, it demonstrates the fundamental principles of Redux and serves as a starting point for building more complex state management systems in JavaScript applications.

This can be asked in a mid-senior level interview round to check your understanding about the libraries or tools you use.