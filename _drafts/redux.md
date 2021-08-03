
## Basic components
- **reducer function**- It accepts current state. Reducers in Redux are responsible for the state modifications that take place in response to actions
- **createStore**- It accepts `reducer function`
    - getState: `store.getState()`
    - subscribe state: `store.subscribe()`
- **actions**
    - Creating action object
    - Creating actionCreator function- it simply returns the action object
    - Dispatch actions: `store.dispatch()`

*example*
```js
// store creation
const store = Redux.createStore(
   // reducer function
  (state = {login: false}) => state
);

// action
const login = {
  type: 'LOGIN'
}

// action creator function
const loginAction = () => {
  return login
};

// Dispatch the action here:
store.dispatch(loginAction());
```

## Concepts
- **combineReducers()**
Use to combine multiple reducers into a root reducer.
- Middlewares to handle asynchronous actions - Redux provides middleware designed specifically for this purpose, called *Redux Thunk middleware*. 

### **Redux thunk middleware**

*resources:*
- [freecodecamp](https://www.freecodecamp.org/news/redux-thunk-explained-with-examples/)
- [digital ocean](https://www.digitalocean.com/community/tutorials/redux-redux-thunk)

It is used to Handle Asynchronous Actions.

To include *Redux Thunk middleware*, you pass it as an argument to `Redux.applyMiddleware()`. This statement is then provided as a second optional parameter to the `createStore()` function. Take a look at the code at the bottom of the editor to see this. Then, to create an asynchronous action, you return a function in the action creator that takes `dispatch` as an argument. Within this function, you can dispatch actions and perform asynchronous requests.

In this example, an asynchronous request is simulated with a `setTimeout()` call. It's common to dispatch an action before initiating any asynchronous behavior so that your application state knows that some data is being requested (this state could display a loading icon, for instance). Then, once you receive the data, you dispatch another action which carries the data as a payload along with information that the action is completed.

Remember that you're passing `dispatch` as a parameter to this special action creator. This is what you'll use to dispatch your actions, you simply pass the action directly to dispatch and the middleware takes care of the rest.

```js
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // Dispatch request action here
    dispatch(requestingData());
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // Dispatch received data action here
    dispatch(receivedData());
    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
```