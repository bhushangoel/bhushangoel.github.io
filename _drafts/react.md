## props
- set default
```js
propsdefaultProps = {}
```
-  define the props you expect
```js
propTypes = {}
```
https://reactjs.org/docs/jsx-in-depth.html#specifying-the-react-element-type

### this.props
in class based components, props are accessed by prefixing `this`.

## stateless vs stateful components

- A `stateless functional component` is any function you write which **accepts props and returns JSX**. 
- A `stateless component`, on the other hand, is a **class that extends React.Component**, but does not use internal state.
- Finally, a `stateful component` is a **class component** that does maintain its own internal state. 

You may see stateful components referred to simply as components or React components.

- stateless functional component: functional component
- stateless component: class component
- stateful component: class component

## setState()

React may batch multiple state updates in order to improve performance. What this means is that state updates through the `setState` method can be **asynchronous**. 

There is an alternative syntax for the `setState` method which provides a way around this problem. This is rarely needed but it's good to keep it in mind! Please consult the React documentation for further details.

state updates may be asynchronous - this means React may batch multiple `setState()` calls into a single update. This means you can't rely on the previous value of this.state or this.props when calculating the next value. So, you should not use code like this:

```js
// Don't use this method
this.setState({
  counter: this.state.counter + this.props.increment
});
```
Instead, you should pass setState a function that allows you to access state and props. Using a function with setState guarantees you are working with the most current values of state and props. This means that the above should be rewritten as:

```js
// Use this method instead
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

## ReactDOMServer.renderToString

Render React on the Server with `renderToString`

So far, you have been rendering React components on the client. Normally, this is what you will always do. However, there are some use cases where it makes sense to render a React component on the server. Since React is a JavaScript view library and you can run JavaScript on the server with Node, this is possible. In fact, React provides a `renderToString()` method you can use for this purpose.

There are two key reasons why rendering on the server may be used in a real world app. 
- First, without doing this, your React apps would consist of a relatively empty HTML file and a large bundle of JavaScript when it's initially loaded to the browser. This may not be ideal for search engines that are trying to index the content of your pages so people can find you. If you render the initial HTML markup on the server and send this to the client, the initial page load contains all of the page's markup which can be crawled by search engines. 
- Second, this creates a faster initial page load experience because the rendered HTML is smaller than the JavaScript code of the entire app. React will still be able to recognize your app and manage it after the initial load.