---
layout: post 
title:  "Web workers"
author: Bhushan Goel 
categories: [ Javascript ]
tags: [ Web workers, PWA ]
description: "Spread operator is a new operator added in ES6 version. It takes an iterable (array or string) and expands
it into individual elements."
featured: false 
image: assets/images/js.png 
comments: false
---

Javascript is single-threaded and multiple scripts can not execute at the same time. So if we execute any heavy
computation task, then sometimes our page becomes unresponsive, and the user can not do anything else until that execution
gets completed.

_For example:_

```javascript
average = (numbers) => {
    let startTime = new Date().getTime();
    let len = numbers,
        sum = 0,
        i;

    if (len === 0) {
        return 0;
    }

    for (i = 0; i < len; i++) {
        console.log('i :: ', i)
        sum += i;
    }

    let endTime = new Date().getTime();
    alert('Average - ', sum / len);
}

hello = () => {
    alert("Hello World !!");
}

// Paste the above code in browser dev tool console and try to call average(10000) and hello one by one
```

In the above example, if you call `average` before the `hello` method, then your page will become unresponsive, and you won’t
be able to click on `Hello` until the execution of `average` gets completed.

You can see that when `average` is called with
`10000` as `input` first, it took **~1.82 seconds**. For that amount of time, the page becomes unresponsive, and you were not able
to click on the `hello button`.

## Asynchronous Programming

Javascript gives developers a way to write asynchronous code. By
writing `async` code you can avoid this kind of issue within your application. It enables your app UI to be responsive by
`“scheduling”` parts of the code to be executed a bit later in the event loop.

* A good example of `async` programming is an
  `XHR` request. In this, we hit an API asynchronously, and while waiting for the response, other code can be executed.
  This is limited to certain use cases related to web APIs mostly.

* Another way of writing async code is by using the
  `setTimeout` method. In some cases, you can achieve good results in unblocking the UI from longer-running computations by
  using `setTimeout`. _For example_, you can do this by batching a complex computation in separate `setTimeout` calls.


```javascript
average = (numbers) => {
    let startTime = new Date().getTime();
    var len = numbers,
        sum = 0,
        i;

    if (len === 0) {
        return 0;
    }

    let calculateSumAsync = (i) => {
        if (i < len) {
            // Put the next function call on the event loop.
            setTimeout(() => {
                sum += i;
                calculateSumAsync(i + 1);
            }, 0);
        } else {
            // The end of the array is reached so we're invoking the alert.
            let endTime = new Date().getTime();
            alert('Average - ', sum / len);
        }
    };

    calculateSumAsync(0);
};

hello = () => {
    alert('Hello World !!')
};
```

In this example, you can see that after you click on the `Calculate Average button`, you can still click on the `Hello
button` (_which in turn shows an alert message_). This way of programming is surely non-blocking but takes too much time,
and is not feasible in real-world applications.

Here, for the same input 10000, it took *~60 seconds*, which is very
inefficient. So, how do we solve these kinds of issues efficiently?

The answer is `Web Workers`.

**_What are web workers ?_**

Web workers in Javascript are a great way to execute some task which is very laborious and takes a lot of time into a thread
separate from the main thread. They *run in the background* and perform tasks without interfering with the user
interface.

Web Workers are not part of JavaScript. They’re a *browser feature* which can be accessed through JavaScript.
Web workers are created by a constructor function `Worker()` which runs a named `JS` file.

```javascript
// create a dedicated web worker
const myWorker = new Worker('worker.js');
```

If the specified file exists, then it will be downloaded asynchronously. If not, then the worker will _fail silently_, so
your application will still work in case of a 404.

We will learn more about creating web workers and how they work in the
next section.

A worker thread has its own context and therefore you can only **access selected features** inside a worker
thread, like `web sockets` and `indexed DB`.

There are some restrictions with web workers:

* You **can’t directly manipulate** the `DOM` from inside a worker.
* You can not use some default methods and properties of the window object since the **window object is not available** inside
  a worker thread.
* The context inside the worker thread can be accessed via `DedicatedWorkerGlobalScope` or `SharedWorkerGlobalScope`
  depending upon the usage.

## Creation of a web worker

There are two types of web workers:

**Dedicated web worker** — A dedicated worker is only accessible by the script that called it.

**Shared web worker** — A shared worker is accessible by multiple scripts — even if they are being accessed by
different `windows`, `iframes`, or even `workers`.

Let us discuss more-

Creation is pretty much the same for both **Dedicated and Shared web worker**.

#### Creating a new dedicated worker

It is simple. Just call the Worker constructor and pass
the path of the script you want to execute as the worker.

```javascript
// create a dedicated web worker
const myWorker = new Worker('worker.js');
```

#### Creating a new shared worker

It is pretty much the same as that of a dedicated worker, but with a different constructor
name

```javascript
// creating a shared web worker
const mySharedWorker = new SharedWorker('worker.js');
```

## Communication between main and worker thread

Communication between the `main thread` and the `worker thread` happens via the
`postMessage` method and `onmessage` event handler.

In the case of a **dedicated web worker**, the communication system is
simple. You just need to use the `postMessage` method whenever you want to send a message to the worker.

```javascript
// main.js
(() => {
// new worker
    let myWorker = new Worker('worker.js');

// event handler to recieve message from worker
    myWorker.onmessage = (e) => {
        document.getElementById('time').innerHTML = `${e.data.time} seconds`;
    };

    let average = (numbers) => {
// sending message to web worker with an argument
        myWorker.postMessage(numbers);
    }

    average(1000);
})();
```
As you can see on **_line 7_** in
`main.js` we have used the `onmessage` event on the worker instance. So whenever the worker thread uses postMessage,
onmessage in the main thread gets triggered.

Inside a web worker you can respond when the message is received, by writing an event handler(`onmessage`) block like this:

```javascript
// worker.js
onmessage = (e) => {
    let numbers = e.data;
    let startTime = new Date().getTime();
    let len = numbers,
        sum = 0,
        i;

    if (len === 0) {
        return 0;
    }

    for (i = 0; i < len; i++) {
        sum += i;
    }

    let endTime = new Date().getTime();
    postMessage({average: sum / len, time: ((endTime - startTime) / 1000)})
};
```

The `onmessage` handler allows you to run some code whenever a message is received.

Here we are calculating the average of
numbers and then using `postMessage()` again to post the result back to the main thread.

In the case of a _shared web worker_, the communication system is a little
different. As one worker is shared between multiple scripts, we need to communicate via the `port object` of the worker
instance.
This is done implicitly in the case of dedicated workers. You need to use the `postMessage` method whenever you want
to send a message to the worker.

```javascript
// main.js
(() => {
    // new worker
    let myWorker = new SharedWorker('worker.js');

    // event handler to recieve message from worker
    myWorker.onmessage = (e) => {
        document.getElementById('time').innerHTML = `${e.data.time} seconds`;
    };

    let average = (numbers) => {
    // sending message to web worker with an argument
        myWorker.port.postMessage(numbers);
    }

    average(1000);
})();

```

Inside a web worker (`main-shared-worker.js`) it is a little complex.

First, we use an `onconnect` handler to fire code
when a connection to the port happens (**_line 4_**). We use the ports attribute of this event object to grab the port and
store it in a variable (**_line 6_**). Next, we add a `message handler` on the port to do the calculation and return the result
to the main thread (**_line 9_** and **_line 27_**) like this:

```javascript
// main-shared-worker.js

// onconnect handler to fire code
onconnect = (e) => {
// grab the port and store it in a variable
    let port = e.port[0];

// add a message handler on the port
    port.onmessage = (e) => {
        let numbers = e.data;
        let startTime = new Date().getTime();
        let len = numbers,
            sum = 0,
            i;

        if (len === 0) {
            return 0;
        }

        for (i = 0; i < len; i++) {
            sum += i;
        }

        let endTime = new Date().getTime();

        // post message to the main thread using port
        port.postMessage({average: sum / len, time: ((endTime - startTime) / 1000)});
    };
};

```

## Termination of a web worker

If you need to immediately terminate a running worker from the main thread, you can do so by
calling the worker’s `terminate` method:

```javascript
// terminating a web worker instance
myWorker.terminate();

```

The worker thread is killed immediately without an opportunity to complete its operations.

## Spawning of web worker

Workers may spawn more workers if they wish. But they must be hosted within the same origin as the parent page.

## Importing Scripts
Worker threads have access to a global function, `importScripts()`, which lets them import scripts.

## Working Demo
We have discussed some of the approaches above to achieve `async` programming so that our UI doesn’t get blocked due to any heavy
computational task. But there are some limitations to those approaches. So we can use web workers to solve these kinds of
problems efficiently.

[Click here](http://bhushangoel.me/webworker-demo-1/) to run this live demo. Here, you will see 3 sections:

* **Blocking Code:** When you click on `calculate average`, the loader does not display and after some time you see the final
  result and time taken. This is because as soon as the average method gets called, `showLoader` method gets triggered
  also. But since JS is single-threaded, it won’t execute `showLoader` until the execution of average gets completed. So,
  you won’t be able to see the loader.

* **Async Code:** In this I tried to achieve the same functionality by using the `setTimeout` method and putting every function
  execution into an event loop. You will see the loader in this case, but the response takes time as compared to the
  method defined above.

* **Web worker:** This is an example of using a web worker. In this, you will see the loader as soon as you click on `calculate
  average` and you will get a response in the same time as method 1, for the same number.

### Advanced concepts
There are some advanced concepts related to web workers. We won’t be discussing them in detail, but its
good to know about them.

* **Content Security Policy** — Web workers have their own execution context independent of the document that created them.
  Because of this, they are not governed by the Content Security Policy of the parent thread/worker. The exception to this
  is if the worker script’s origin is a globally unique identifier (for example, if its URL has a scheme of data or blob).
  In this case, the worker inherits the content security policy of the document or worker that created it.

* **Transferring data to and from workers** — Data passed between the main and worker thread is copied and not shared. Objects
  are serialized as they’re handed to the worker, and subsequently, de-serialized on the other end. The page and worker do
  not share the same instance, so the end result is that a duplicate is created on each end. Browsers implemented the
  Structured Cloning algorithm to achieve this.

* **Embedded workers** — You can also embed the code of worker inside a web page (html). For this you need to add a script tag
  without a src attribute and assign a non-executable MIME type to it, like this:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>embedded worker</title>
    <!--script tag with un-identified MIME and w/o src attr -->
    <script type="text/js-worker">
    // This script WON'T be parsed by JS engines because its MIME type is text/js-worker.
    var myVar = 'Hello World!';

    // worker block
    function onmessage(e) {
      // worker code
    }
  
    </script>
</head>
<body></body>
</html>
```

[Github Repo](https://github.com/bhushangoel/webworker-demo-1)

[Web worker in action](https://bhushangoel.github.io/webworker-demo-1/JS)

