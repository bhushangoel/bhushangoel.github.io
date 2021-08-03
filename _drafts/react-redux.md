 Redux is not designed to work with React out of the box, you need to use the `react-redux` package. It provides a way for you to pass Redux `state` and `dispatch` to your React components as `props`.

## Redux flow
First, define an action type ADD and set it to a const ADD. Next, define an action creator addMessage() which creates the action to add a message. You'll need to pass a message to this action creator and include the message in the returned action.

Then create a reducer called messageReducer() that handles the state for the messages. The initial state should equal an empty array. This reducer should add a message to the array of messages held in state, or return the current state. Finally, create your Redux store and pass it the reducer.

 - Define an action type ADD
 - Define an action creator addMessage() which creates the action to add a message.
 - Then create a reducer called messageReducer() that handles the state for the messages - (state, action)
 - Create redux store
 - Dispatch actions
 - Subscribe to store changes
 - store.getState()

 ```js
 // Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);
```

## Connect redux to react
React Redux provides its `react-redux` package to help accomplish these tasks.

A small API with two key features: `Provider` and `connect`
### `Provider`

The Provider is a wrapper component from React Redux that wraps your React app. This wrapper then allows you to access the Redux `store` and `dispatch` functions throughout your component tree.

`Provider` takes two props, the Redux store and the child components of your app. Defining the `Provider` for an App component might look like this:

```js
<Provider store={store}>
  <App/>
</Provider>
```

The below two methods are use to map `state` and `dispatch` to the `props` of one of your React components. 

**Map State to Props**

The `Provider` component allows you to provide `state` and `dispatch` **to your React components**, but you must specify exactly what state and actions you want. This way, you make sure that each component only has access to the state it needs. You accomplish this by creating two functions: `mapStateToProps()` and `mapDispatchToProps()`.

In these functions, you declare what pieces of state you want to have access to and which action creators you need to be able to dispatch. Once these functions are in place, you'll see how to use the React Redux `connect` method to connect them to your components in another challenge.

```js
function mapStateToProps(state) {
    return {
        messages: state.messages
    }
}
```

**Map Dispatch to Props**
The `mapDispatchToProps()` function is used to provide specific action creators to your React components so they can dispatch actions against the Redux store.

It returns an object that maps dispatch actions to property names, which become component `props`.

```js
function mapDispatchToProps(dispatch) {
  return {
    submitNewMessage: function(message) {
        // addMessage is an action creator
        dispatch(addMessage(message))
    }
  }
}
```

### `connect`
The `mapStateToProps()` and the `mapDispatchToProps()` functions, can be use to map `state` and `dispatch` to the `props` of one of your React components. The `connect` method from React Redux can handle this task.

This method takes two optional arguments, `mapStateToProps()` and `mapDispatchToProps()`. They are optional because you may have a component that only needs access to `state` but doesn't need to dispatch any actions, or vice versa.

```js
connect(mapStateToProps, mapDispatchToProps)(MyComponent)
```
*Note*: If you want to omit one of the arguments to the connect method, you pass `null` in its place.

## Types of components
### Presentational
This term generally refers to React components that are not directly connected to Redux. They are simply responsible for the presentation of UI and do this as a function of the props they receive.

### Container
Container components are connected to Redux. These are typically responsible for dispatching actions to the store and often pass store state to child components as props.