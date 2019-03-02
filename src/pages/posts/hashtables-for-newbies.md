---
title: "Hashtables for newbies"
author: "zeyadetman"
categories: technical
comments: true
date: "2018-09-26"
---

# HashTables

Before we make a hashtable, let's talk about its components `arrays`, `functions`, and `hashing`. read them even if you know!

## Components

### Arrays?

`const colors = ['red','blue','orange']`

if we `console.log(colors[0])` the console displays the head which is `red`, we wrote the elements by this order and know what each index points to which color. This easy and explicit.

### Functions?

Functions are cool boxes, you pass it a value and tell it how to generate a result from it. ![](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Function_machine2.svg/1200px-Function_machine2.svg.png)

Have you ever wrote this in linear algebra class `f(x) = x+5`? in programming you can write it in same way `const f = x => x+5`, if we pass it a `3` the function returns `8` no fancy here.

### Hashing?

Hashing is kinda blackbox in tech talks, in other words it's a bunch of steps you're doing to convert a something to a unique `hash` or `value`, it's a oneway you can't go back. In programming we write those bunch of steps (hash Algorithm) in a function called hash function.

### Objects?

A key-value represented, like arrays but in array you get the value by index, in objects you get the value by its special key.

`const white = {code: '#fff', type: 'color'}`

If we want the `code` of `white` we simply write `white['code']`<sup>(1)</sup>, easy and fast huh?

## What is the hashtable?

In a simple sentence, Hashtable is data-structure to help you using an ordinary array as a key-value array!

### Let's exploring How?

We have a `colors` array like this:

```javascript
const colors = [
  { color: "white", code: "#fff" },
  { color: "orange", code: "#fc3" }
];
```

and The problem is we have to find the `code` of the color `orange`?!
without Hashtable the first naive solution is iterating the whole array and if color is orange display the code! slow, right?

```javascript
colors.map(color => {
  if (color["color"] === "orange") console.log(color["code"]);
});
```

Let's take another approach, converting it into a key-value array.
convert the last array to this array:

```javascript
const colors = ["#fff", "#fc3"];
```

and if we write `colors['orange']` the console displays `#fc3`!
To do this we have to `hash` the word `white` and `orange` to be equal index in size which is `>=` zero and less than the array size.

```javascript
const colors = [];

const hashFunction = key => {
  const letters = key.split("");
  const hashValue =
    letters.reduce((acc, cur) => acc + cur.charCodeAt(0), 0) %
    (!colors.length ? 1 : colors.length + 1);

  // in the line above, we made a '%' to range the
  // value to be between zero (included) and the length of
  // the list

  return hashValue;
};
colors[hashFunction("orange")] = "#fc3";
colors[hashFunction("white")] = "#fff";

console.log(colors[hashFunction("orange")]); // '#fc3'
```

Wow! that's Great! but if we have two colors return the same index we call it `Collision`, what should we do?!
In the actual implementations for the hashtable, the hash function must avoid the collision with two constraints:

- The index must be unique for each word.
- The index must be `>=` zero and `<` list length.

#### Notes:

(1) Write it `white['code']` don't `white[code]` whatever you wrote `code` in the object to avoid conflicts between ordinary variables.

You can read it on [GitHub](https://gist.github.com/zeyadetman/2843e7d8798a58c3c5149487999c0288).
