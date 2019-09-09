---
title: Another way to write your JavaScript
date: "2019-09-09"
author: zeyadetman
categories: programming, javascript
comments: true
layout: post
---

Hi all, in this post I'll share with you some JavaScript code, that we can write it in another way,
Both are better.

**1. Generate an array of sequential numbers `[1, 2, 3, ...., n]`**

If we want to generate an array like this `[1, 2, 3, 4, 5, 6, ...., n]`, We can write code using `new Array()` with
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill">`fill()`</a> so it'll be

```js
const N = 10;
new Array(N).fill().map((_, indx) => indx + 1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

<a href="https://docs.google.com/document/d/1FBxDuUJmUt_udO9ofJGXF4GAM2ZoiWI-PTEeq9Gbf1w/edit#heading=h.yf7gjfvrq7gx">_**Why `new Array(N).map()` doesn't work?**_</a>

Cool, But if we're working on a large array of sequential numbers, Is this method will be the best?
Mmmm, No! because `new Array()` creates <a href="https://v8.dev/blog/elements-kinds">a holey array</a>
which is slow compared to <a href="https://v8.dev/blog/elements-kinds">packed arrays</a>. So we can avoid this and re-write this method
using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from">`Array.from()`</a>
So the code will be

```js
const N = 10;
Array.from({ length: N }, (_, indx) => indx + 1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

<figure style="margin: 15px">
    <img src="https://i.imgur.com/UWkajiz.png" width="700px" alt="new array()" />
    <i><figcaption>source: <a href="https://slidr.io/mathiasbynens/v8-internals-for-javascript-developers#102">
    https://slidrio-decks.global.ssl.fastly.net/1259/original.pdf?1521622174</a> <br />slide: 102</figcaption></i>
</figure>

you can check the holey array in your Chrome Console, so if we write this `new Array(10)` your console will display
`[empty × 10]` which is an array of empty values.

More Resources:

1. https://v8.dev/blog/elements-kinds
2. https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
