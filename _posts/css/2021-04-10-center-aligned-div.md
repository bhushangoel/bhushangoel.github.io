---
layout: post
title:  "Center aligned <div>"
author: Bhushan Goel
categories: [ CSS ]
tags: [ Code Implementation ]
description: "Learn to center align `<div>` with fixed and variable width and height"
featured: false
image: assets/images/css.png
comments: false
---
Learn to center align `<div>` with fixed and variable width and height

## With fixed width and height

<iframe width="100%" height="300" src="//jsfiddle.net/bhushangoel91/4omg3nf1/6/embedded/html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
<i>`https://jsfiddle.net/bhushangoel91/4omg3nf1/6/`</i>


Here, we have given `top` and `left` to internal `<div>` element and using the `calc()` method, we need to place the element `50%` from the top and left and **subtract half width and height** of an element from that.

One more point to note here is that we need to give `position: relative` to the container element and `position: absolute` to an internal one.

> This technique will only work, if height and width of an element is known.

## With variable width and height

<iframe width="100%" height="300" src="//jsfiddle.net/bhushangoel91/4omg3nf1/1/embedded/html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
<i>`https://jsfiddle.net/bhushangoel91/4omg3nf1/1/`</i>


There can be cases where the height and width of an element are not known. To handle such cases we can not rely on the above solution. Here, we need to use `transform` property to display an element at the center of the screen.

