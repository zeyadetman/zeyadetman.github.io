---
title: Refactoring Functions
layout: post
date: "2019-02-14"
tags: ["technical"]
author: zeyadetman
comments: true
---

# Refactoring Functions

## Pure Functions Vs Impure Functions

Hello, in this post I'll explain the difference between pure and impure functions in JavaScript, and How to convert from impure to pure function.
Let's Begin with examples.

### Impure Function

<img src="https://i.imgur.com/zjtOVdy.png" width="550" alt="impure1" />

In the first code snippet if you call the function `forEachFunc` another time, you'll end up with different result and so on for each call. The impure function not depend on its arguments only but it may change from outside the function itself and this called "Side Effect".

#### Side Effect

The side effect doesn't limited to mutations it may include network(HTTP calls, DB calls, user inputs, ...etc). You can know more about side effects in impure functions related to JavaScripts in the resources in the last article.

### Pure Function

<img src="https://i.imgur.com/ABB1ehD.png" width="550" alt="pure1" />

In the second code snippet, whenever you called the function you'll get the same result, because it only depends on its arguments.

### Pure or Impure?

It depends, but if the two options are available to3 your situation, you have to use the pure functions, In pure functions you don't have to search for another variables that may change your functional result (Avoiding the side effects), easily to trace, more clearer, more readable.

## forEach Vs Map, Which one is better?

OK, It depends. if you want to mutate an exist list for example, `forEach` will be better, but this will consider as a side effect according to its explanation from [MDN forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach):

> forEach() executes the callback function once for each array element; unlike map() or reduce() it always returns the value undefined and is not chainable. The typical use case is to execute side effects at the end of a chain.

`map()` might be better if you want to mutate data or create a new array from another array. it's faster, side effects avoider, more readable.

<img src="https://i.imgur.com/Cl8sfdP.png" width="650" alt="performance between map() vs forEach()" />

In the following example it's better to use `map()` over `forEach()`

<img src="https://i.imgur.com/vIsBMgZ.png" width="550" alt="forEach() example" />

And this if we wrote it using `map()`

<img src="https://i.imgur.com/RFizC2d.png" width="550" alt="map() example" />

## Closing

In the end I'm not expert in JavaScript or functional programming, but I felt that I have things to say about this. So I put down some resources to read more. [Follow me on Twitter](https://twitter.com/zeyadetman).

Thanks for reading, and I hope this was hopeful to you!

Read Further...

- [Understanding Javascript Mutation and Pure Functions](https://blog.bitsrc.io/understanding-javascript-mutation-and-pure-functions-7231cc2180d3)
- [Identify Side Effects by Comparing Pure and Impure JavaScript Functions](https://egghead.io/lessons/javascript-identify-side-effects-by-comparing-pure-and-impure-javascript-functions-342b2167)
- [Master the JavaScript Interview: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
- [Pure versus impure functions](https://toddmotto.com/pure-versus-impure-functions)
- [mostly-adequate-guide Book, Chapter 3: Pure Happiness with Pure Functions](https://drboolean.gitbooks.io/mostly-adequate-guide-old/content/ch3.html)
- [JavaScript: What Are Pure Functions And Why Use Them?](https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c)
- [Javascript and Functional Programming — Pt. 3: Pure Functions](https://hackernoon.com/javascript-and-functional-programming-pt-3-pure-functions-d572bb52e21c)
- [Map.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)
- [JavaScript — Map vs. ForEach](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)
