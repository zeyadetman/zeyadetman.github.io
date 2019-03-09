---
title: "From ReactJS Class Component to Functional Component - useState (Part 1)"
date: "2019-03-09"
categories: "technical"
author: "zeyadetman"
toArabic: true
---

Hello everyone, In this post (Two parts) I'll convert a reactjs code from a class component to a functional component. Focusing on `useState` and `useEffect` hooks.
let's begin with the part 1 `useState` hook.

## State

### In Class Component

In the class component, we intialize the `state` object of `this` class in the `constructor` function to say this state belongs to this component, and its value intialized in the `constuctor`. We can change the state by calling `setState()` passing the new object.
Code for this will be something like this

```jsx
import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Current count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

One of the features using `setState()` is the callback, Yes you can pass a second argument as a callback. Which is a great feature.
example on this

```jsx
<button
  onClick={() =>
    this.setState({ count: this.state.count + 1 }, () => {
      console.log(this.state.count);
     })
  }
>
```

### In Functional Component

In a functional component, there's no `constructor()` no `this` keyword no `render()` function.
First we have to import `useState` from `react`.
`import React, { useState } from "react";`
`useState` takes just one argument which is the intial value, and returns a stateful value and a function to change it, we destructured it like this:
`const [state, setState] = useState(initialValue);`
To use it, simply we can use it like the class example.

```jsx
const [state, setState] = useState({
  count: 0
});

console.log(state.count); // 0
```

and update it like this

```jsx
setState({ count: state.count + 1 });
```

#### But, What if we have more than one value?

Here we have two options:

- first, simply use it like above.

```jsx
const [state, setState] = useState({
  count: 0,
  barcode: "1A"
});
```

BUT, when you change it, don't forget to pass the current state, and just change what you want, like this:

```jsx
setState({
  ...state,
  barcode: "2B"
});
```

if you write this `setState({barcode: "2B"});` you simply changed the state, and removed the `count` key.

- Second, you can use `useState` multiple times in the same component, one for `count` and one for `barcode` like this:

```jsx
const [count, setCount] = useState(0);
const [barcode, setBarcode] = useState("1A");
```

and to update it, just pass the value:

```jsx
setBarcode(value);
setCount(count + 1);
```

Unfortunately `useState` doesn't accept a second argument, So we have to use `useEffect` hook to handle the change on the component.
Before you go, please check the two codesandboxes to try what you learned in this article.

- [useState in Functional Component](https://codesandbox.io/s/kkm2o57ky3)

  <iframe src="https://codesandbox.io/embed/kkm2o57ky3?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

- [state in Class Component](https://codesandbox.io/s/l49v8r45xq)

  <iframe src="https://codesandbox.io/embed/l49v8r45xq?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

In Part 2 —We will expand our code to include `useEffect` hook.
