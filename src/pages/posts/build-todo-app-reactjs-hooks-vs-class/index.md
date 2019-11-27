---
title: "Build Todo App with ReactJS Functional Components (hooks) and Class Components"
layout: post
date: "2019-11-07"
categories: "technical"
author: zeyadetman
comments: true
---

Hello everyone, In this post we will write a todo app using class components and react hooks in functional components.
First of all, you haven't to re-write your projects to use hooks, you're completely free to use whatever you want, this post
to give you basic knowledge about react hooks and how to use this way.

# Todo App

## State

Let's start our app small with just input, this input will handle our new `todo` through the app.

In our class version, we create a class with `constructor` then create our state, that holds our variable `todoInput`,
then we write a `render` function and return our input element.

```js
import React from 'react';

export default class TodoInput extends React.Component{
  constructor(props){
   super(props);

   this.state = {
    todoInput: '',
   }
  }

  render() {
    return <input placeholder="ex. drink milk" onChange={(e) => this.setState({todoInput: e.target.value})} />
  }
}
```

### `useState` hook

In our functional version, we just imported `useState` hook to manage our state - we can use it multiple times or use another
hook called `useReducer` in complex state explained later - simply `useState` hook takes one argument the initial state, and
return an array with two values the first is the current value, and the second is the function to set this state/value.

```js
import React, { useState } from "react";

export default function TodoInput() {
  const [todoInput, setTodoInput] = useState("");
  return (
    <input
      placeholder='ex. drink milk'
      onChange={e => setTodoInput(e.target.value)}
    />
  );
}
```

If you're still confused about this line

```js
const [todoInput, setTodoInput] = useState("");
```

_Waiting my next post about destructuring in JavaScript._

### `useReducer` Hook

`useReducer` is a hook that takes two arguments callback function, and initial state, then return pair of values the state, and dispatch action that changes the state. The callback function takes two arguments, the current state, and action that dispatched from dispatch function, and returns the new state.
As we mentioned before, If we have a complex state management scenario, then `useReducer` will be great for this.
In our app, we need to create a state with all `todos` we've created and store it to localstorage, We need to intialize our `todos` state with its localstorage item, but in our first running there's no localstorage item for our state, its `null` so we need to check if it's `null` then initialize it with empty array. Also we need to handle remove and add todos so we can change our state and localstorage item.

In our class version:

```js
  constructor(props) {
    super(props);

    this.state = {
      todos: JSON.parse(localStorage.getItem("todos")) || []
    };

    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleRemoveItem(id) {
    const newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: [...newTodos] });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  handleAddTodo(todo) {
    if (this.state.todos) this.setState({ todos: [...this.state.todo, todo] });
    else this.setState({ todos: [todo] });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }
```

Using `useReducer` Hook we'll do something like this:

```js
import React, { useReducer } from "react";

const [todos, dispatch] = useReducer((state, action) => {
    if (action.type === "add") {
      if (state) state = [...state, action.value];
      else state = [action.value];
    } else if (action.type === "remove") {
      const newTodos = state.filter(todo => todo.id !== action.value);
      state = [...newTodos];
    }

    localStorage.setItem("todos", JSON.stringify(state));
    return state;
  }, JSON.parse(localStorage.getItem("todos")) || []);

  ...
  <label>
    Add new todo: <TodoInput handleAddTodo={(todo)=> { dispatch({ type: "add", value: todo }); }} />
  </label>
```

## Binding functions

Okay, until now we have known how to change our todo task (state), in the react lifecycle, But we need to save this todo
in somewhere so we can create multiple more than one todo. And here's what we're doing in our class component `Binding`.

**Binding:** Let's consider that you're getting a new mobile phone, and you need to view your data from your laptop, So you simply send them to your new laptop. Same with binding we have data called it `this` and need to send it from place to another.

in our class version we need to pass this from our entire class to our function, we write it like this

```js
class App extends React.Component {
  constructor(props) {
    super(props);
    ...
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  ...

  handleAddTodo(todo) {
    if (this.state.todos) this.setState({ todos: [...this.state.todo, todo] });
    else this.setState({ todos: [todo] });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  render() {
    return (
      <div className="App">
        <h1>Todo App React Class</h1>
        <label>
          Add new todo: <TodoInput handleAddTodo={this.handleAddTodo} />
        </label>
    ...
}
```

But in our functional version, there's no `this`, So we create our function easily like this:

```js
import React, { useState } from 'react';

export default function TodoInput() {
  ...
   const handleAddTodo = todo => {
    dispatch({ type: "add", value: todo });
  };

  return (
    <div className="App">
      <h1>Todo App React Hooks</h1>
      <label>
        Add new todo: <TodoInput handleAddTodo={handleAddTodo} />
      </label>
    ...
}
```

## Lifecycle

In Class version, we're using function like `componentDidMount`, `componentWillUnmount`, ...etc to handle state/props changes, But using hooks, React community found another concept, that every change in props/state is an effect to our component, So they create a new hook called `useEffect` that handle all the effects happened in the component (Lifecycle).

### `useEffect`

`useEffect` is a hook that control the lifecycle or changes through the entire component, takes two arguments a call function and array of dependicies, the callback function will trigger at the early mount of component and if one of this dependencies change.

#### `useEffect` Vs `componentDidMount`

`componentDidMount` is one of react lifecycle that fires after the component mount, So if we want to display a welcome message when the user open the app, we can do this:

In class version we will use `componentDidMount`:

```js
componentDidMount() {
    setTimeout(() => {
      this.setState({ showWelcomeMessage: false });
    }, 4000);
  }
```

In functional version we'll use `useEffect` hooks, we said that it takes array of dependencies, but we want to trigger the function only the component mount then there's no dependencies, So :

```js
useEffect(() => {
  setTimeout(() => {
    triggerWelcomeMessage(false);
  }, 4000);
}, []);
```

#### `useEffect` Vs `componentWillUnmount`

`componentWillUnmount` fires when we unmount the component, in our app we want to clear the storage when we close the app, and the main component of the app is `App` Tada :D

In class version

```js
componentWillUnmount() {
  localStorage.removeItem("todos");
}
```

In functional version we return this function in `useEffect` like this:

```js
useEffect(() => {
  return () => {
    localStorage.removeItem("todos");
  };
}, []);
```

_Note: we can use merge the previous hooks in one._

## `useContext` Hook

You may want to share state between all of app components, `theme` for example, for this purpose we can use `useContext` to achieve this.
To do this, we have to create a context then wrap our app main component in it, then pass the state or whatever we want as a object to it, in our app we need to create a theme mode night/day mode, so we can write it like this:

```js
// index.js

import React, { createContext } from "react";

export const TodoAppContext = createContext("");
function App() {
  ...
  const [themeMode, setThemeMode] = useState({ mode: "day" });

<TodoAppContext.Provider value={themeMode}>
      <div className={"App " + themeMode.mode}>
        <h1>
          Todo App React Hooks{" "}
          <button
            onClick={() => {
              setThemeMode(
                themeMode.mode === "day" ? { mode: "night" } : { mode: "day" }
              );
            }}
          >
            {themeMode.mode === "day" ? "night" : "day"}
          </button>
        </h1>
        ...
    </TodoAppContext.Provider>
```

We can import our context in other component like this:

```js
import { TodoAppContext } from "./index";

export default function Todos(props) {
  ...
  const theme = useContext(TodoAppContext);

  return (
    <ul className={theme.mode}>
```

Now we have built a Todo app with reactjs hooks, and know about hook basics.
Here's the full code of functional version of our app:
https://github.com/zeyadetman/todo-app-hooks

And this for our class version:
https://github.com/zeyadetman/todo-app-class
