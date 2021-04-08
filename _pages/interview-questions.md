---
layout: page 
title: Interview Questions 
permalink: /interview-questions 
comments: false
toc: true
---
<div class="row justify-content-between">
    <div class="col-md-8 pr-5">

        <h2 id="js">JavaScript</h2>
        <h3 id="js-theory">Theory</h3>
        <ol>
            <li>Closures</li>
            <li>Object.create</li>
            <li>Prototypes</li>
            <li>Different ways to create an object in JavaScript</li>
            <li>Function expression vs Function declaration</li>
            <li>Significance of <code>use strict</code></li>
            <li><code>null</code> vs <code>undefined</code> with explanation
            </li>
            <li>Number of ways to delete an element from an array
            </li>
            <li>A deep copy of an object
            </li>
            <li>Storage in a browser: Local Storage vs session Storage
            </li>
            <li>What is an event?
                <br>
                1. How does event propagation take place?
                <br>
                2. <code>stopPropagation</code> vs <code>stopImmediatePropagation</code></li>
            <li><code>for of</code> vs <code>for in</code>
            </li>
            <li>How can you implement Inheritance, Encapsulation and Abstraction in JS?
            </li>
        </ol>
        <ol>
            <li>Classical inheritance vs prototypal inheritance</li>
            <li>Async - Promises vs async-await vs observables</li>
            <li>Currying in JavaScript</li>
            <li>Debouncing vs throttling</li>
            <li>Destructuring and Rest parameter</li>
            <li>Spread operator</li>
            <li>Web workers</li>
            <li>Service workers</li>
            <li>Iterable vs Enumerable</li>
            <li>Application cache vs Browser cache</li>
        </ol>
        <ol>
            <li>HTTP, CORS, Caching</li>
            <li>PWA</li>
            <li>Server-side rendering</li>
            <li>Security of a web application
                <br> 1. XSS attack
                <br>2. CSRF
            </li>
            <li>Temporal dead zone</li>
            <li>Time to first byte</li>
        </ol>
        <h3 id="js-io"> Input/output </h3>
        <b> 1. What will get printed in <code>console.log()</code>?</b>
        <pre>
"use strict"
let x = 1;
let x = 2;
console.log(x); // ?
</pre>
        <pre>
"use strict"
var x = 1;
var x = 2;
console.log(x); // ?
</pre>
        <pre>
var x = 1;
var x = 2;
console.log(x); // ?
</pre>
        Solution 1 here
        <br>
        <b> 2. Is this statement correct? If yes, what will be the output here?</b>
        <pre>javascript
        let bob = a => a + 100;

        console.log(bob(2)); //?
        </pre>
        [Solution 2 here](js/js-interview/io-2.md)
        <br>
        <b> 3. What value will be displayed in the console?</b>
        <pre>
        var arr = [];
        arr[0] = 'a';
        arr[1] = 'b';
        arr.foo = 'c';

        console.log(arr.length);
        </pre>
        Solution 3 here
        <br> <b> 4. What will happen, if we declare an array using a <code>const</code> and try to change one of its
        values?
    </b>
        <pre>javascript
        const s = [5, 6, 7];
        s[2] = 45;
        console.log(s);
        </pre>
        <br> <b> 5. What will be the output?</b>
        <pre>javascript
         var obj = {a: 5};
         var obj2 = Object.create(obj);
         delete obj2.a;

         console.log(obj2.a);    // ?
        </pre>
        [Solution 5 here](js/js-interview/io-5.md)
        <br> <b> 6. What will be the output?</b>
        <pre>javascript
         let arr = [];
         arr[0] = 'a';
         console.log(arr['0'] === arr[0]);   // true or false
        </pre>
        <br> <b> 7. What is the length of an array?</b>
        <pre>javascript
let arr = [1 , , 3];
console.log(arr.length);   // ?
</pre>
        [Solution 7 here](js/js-interview/io-7.md)

        <h2 id="angularjs"> Angular JS</h2>
        <h3 id="angular-theory"> Theory-based</h3>
        <ol>
            <li>Components vs Directives</li>
            <li>componentFactoryResolver</li>
            <li>Decorator design pattern</li>
            <li>What are the modules, component and service?
                * How many types of modules are there?
                * Can you add multiple modules in a single angular application?
            </li>
            <li>How to detect changes in the input property passed from parent to child component?</li>
            <li>How to pass data from child to parent component?</li>
            <li>Lifecycle methods in angular</li>
            <li>Observables vs Promises in angular</li>
            <li>Data sharing between parent to child using -

                <code>@Input</code>
            </li>

            <li>Data sharing between child to parent using -

                <code>@ViewChild, @Output and Event-emiiter</code>
            </li>

            <li>AOT vs JIT, which one is better</li>
            <li>Dependency injection</li>
            <li>How would you create a filter using angular?</li>
            <li><code>Constructor</code>vs <code>ngOnInit</code></li>
            <li>Change detection and strategies - how to forcefully detect changes?</li>
            <li>DOM Sanitization</li>
            <li>Security Practices in angular</li>
            <li>View Encapsulation</li>
            <li>IVY</li>
            <li>Route guards</li>
        </ol>
        <h3 id="angular-scenario"> Scenario-Based</h3>
        <ol>
            <li>If the same service is added to the root and feature module, what will be the behavior?</li>
            <li>An observable returning a stream of data and if you subscribe at a later stage then how can you get
                previous data
                that have been missed?
            </li>

            <li>Digest cycle vs Change detection</li>
            <li>Can you load and unload an angular feature module?</li>
        </ol>

        <h2 id="html"> HTML</h2>
        <ol>
            <li>Direct tag to implement dropdown with search in HTML</li>
            <li>Semantic tags</li>
            <li>What's new in HTML 5?</li>
        </ol>

        <h2 id="css"> CSS</h2>
        <ol>
            <li>[How to align a div vertically and horizontally
                centered?](css/center-aligned-less-than-div-greater-than.md)
                * [Fixed dimension](css/center-aligned-less-than-div-greater-than.md#with-fixed-width-and-height)
                * [Dynamic dimension](css/center-aligned-less-than-div-greater-than.md#with-variable-width-and-height)
            </li>
            <li>Box model?</li>
            <li>Pseudo classes <code>(:hover, :active)</code> vs pseudo elements <code>(:after, :before)</code></li>
            <li>Positions - fixed, relative, absolute, static, sticky</li>
            <li>Explain the following CSS selectors
                <pre>
                div, p
               div p
               div > p
               div + p
               div ~ p
               </pre>
            </li>
            <li>What are CSS media queries and what are they used for?</li>
            <li>Bootstrap</li>
            <li>CSS Pre-processors
                * Sass \(scss\)
                * Less
            </li>
            <li>Flexbox</li>
            <li><code>box-shadow</code></li>
            <li><code>box model</code></li>
            <li><code>box-sizing</code></li>
            <li>Display properties - none, block, inline, inline-block</li>
            <li>vm, em, rem, vh, vw font-size properties</li>
            <li>CSS Animations</li>
            <li>How would you align an image to a circular div, just like on Instagram?</li>
            <li>How would you write a code to freeze the top row and column of a table?</li>
        </ol>

        <h2 id="ts"> TypeScript</h2>
        <ol>
            <li>Static vs dynamic typing</li>
            <li>Generics in typescript</li>
            <li>How can you define an optional value without using a question mark?</li>
        </ol>

        <h2 id="others"> Other Reference Links</h2>

        <ol>
            <li><a href="https://www.pluralsight.com/courses/advanced-javascript" target="_blank">Advance JS ($)</a>
            </li>
            <li><a href="https://medium.com/dailyjs" target="_blank">DailyJS</a></li>
            <li><a href="https://www.toptal.com/javascript" target="_blank">JS interview questions</a></li>
            <li><a href="https://www.toptal.com/angular-js/interview-questions" target="_blank">AngularJS interview
                questions</a></li>
            <li><a href="https://medium.com/dailyjs/parseint-mystery-7c4368ef7b21" target="_blank">ParseInt mystery</a>
            </li>
            <li><a href="https://medium.com/dailyjs/parseint-mystery-7c4368ef7b21" target="_blank">isArray</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP" target="_blank">HTTP Concept</a></li>
        </ol>
    </div>

    <div class="col-md-4">
        <div class="sticky-top sticky-top-80">
            <ul class="interview-sticky-menu">
                <li><a href="#js">Javascript</a></li>
                <ul class="interview-sticky-menu">
                    <li><a href="#js-theory">Theory</a></li>
                    <li><a href="#js-io">Input Output</a></li>
                </ul>
                <li><a href="#angularjs">AngularJS</a></li>
                <ul class="interview-sticky-menu">
                    <li><a href="#angular-theory">Theory</a></li>
                    <li><a href="#angular-scenario">Scenario based</a></li>
                </ul>
                <li><a href="#html">HTML</a></li>
                <li><a href="#css">CSS</a></li>
                <li><a href="#ts">Typescript</a></li>
                <li><a href="#others">Other links</a></li>
            </ul>
        </div>
    </div>
</div>


