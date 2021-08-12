# next js getting started

## Setup flow
- Install `React` and `Next.js`
- Update `package.json`
- Create `pages` directory
    - files inside the `pages` directory runs on both `client` and the `server`
- Add `pages > index.js`
- Run SSR app using `node` command

## Include CSS using `nextJS`

We need to install a plugin called `@zeit/next-css`. 
```
npm i @zeit/next-css
```

After that in `next.config.js`, we need to add a `withCSS()`
```
const withCSS = require("@zeit/next-css");
module.exports = withCSS();
```

and then we can simply import our css file into `component.js`

```
import('./myApp.css');
```

## _document.js
`nextJS` gives us a special file called `_document.js` which we can use to put some information for all pages, _like_: putting up common `header` or `footer`.

> This file only rendered during server side rendering.

## _app.js
It just acts as a wrapper around the app.

```javascript
render() {
  return (
    <Container>
      <Component {...props}/>
    </Container>
  )
}
```

## **Some common issues**
**`1. Text content did not match or Server and Client`**

![SSR](https://github.com/bhushangoel/ctfi-cdn/blob/master/ssr-vs-csr.PNG?raw=true#post-img)

**Fix:**

Use static method **`getInitialProps`**

### **getInitialProps()**
On the pages rendered on the server `next` expects to find a static method called `getInitialProps()`. 
- It established whatever data it needs to be in the props - in this case it will establish that it needs `time`(timer app). 
- It will call the constructor of the component on the server side and pass time into it.
- It will then pass all of the `props` to the client and when client picks up the `HTML`, the `props` get fed to the `constructor` of that component

***facts:***

1. `getInitialProps` doesn't run on a client where node runs first and client runs the same page second.
2. If no servers are involved and page directly runs on the client side, `getInitialProps` runs strictly on the client.

3. `getInitialProps` always run before the `constructor`. So use the returned object from `getInitialProps` to populate the state inside `constructor`

```javascript
class Index extends React.Component {
  static getInitialProps() {
    return {
      time: new Date(),
    };
  }

  /*
  getIntialProps() runs before constructor()
   ||
  \_/

  */

  constructor(props) {
    super(props);
    this.state = {
      time: props.time,
    };
  }
}
```
**`2. Handling async requests on the server`**

Wait for the `async` event to complete before rendering the data.

**Fix:**

`getIntialProps` lets us returns the `Promise` as well.

```javascript
class Index extends React.Component {
  static getInitialProps() {
    // handling async requests
    const promise = new Promise((resolve, reject) => {
      setInterval(() => {
        resolve({
          time: new Date(),
        });
      }, 3000);
    });

    return promise;
  }

  constructor(props) {
    super(props);
    this.state = {
      time: props.time,
    };
  }
}
```

`getIntialProps` ran to completion including the `async` functions before the component constructor got called.
But waiting for 3 seconds for a page to display is not good.