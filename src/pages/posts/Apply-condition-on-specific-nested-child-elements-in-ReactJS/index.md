---
title: Apply condition on specific nested child elements in ReactJS
date: "2020-02-13"
author: zeyadetman
categories: programming, javascript, frontend
comments: true
layout: post
---


# Apply condition on specific nested child elements in ReactJS

## Intro

We have a reactjs app, this app contains a container component called `App` inside it, we have multiple nested components some of them contains `button` elements. What we want to do is disable all child `button`s programmatically without using styles way when I toggle a `switch` button in the container component `App`.

## Naïve Solution

The naïve solution to this problem is simple create a new state to store the value of the `switch` button, then iterate manually over each child components and searching for `button`, if you find a button pass the `switch` button state value to the component to update the button behavior whenever the `switch` changes `<Button {...(isDisable ? { disabled: true } : {})} />`.

If we have 10 nested buttons for example, it'll be hassle to iterate over them, also we may add more buttons or change the condition.  

take a look of the `Tab 1 Panel 1` button here: https://github.com/zeyadetman/action-on-specific-child-elements/tree/naive-solution

## Another Solution

Here's another solution to do, using `useRef` to get a reference to the component `App` then get all buttons inside it here's a code for this:

```js
const appRef = useRef(null);
useEffect(() => {
  // here we got all rendered buttons inside the component
  const appButtons = appRef.current.getElementsByTagName("button"); 
  for (let btn of appButtons) {
    if (!isEnabled) btn.disabled = true;
    else if (isEnabled) btn.disabled = false;
  }
}, [isDisable]);
return (
  <div ref={appRef}> 
```
In previous `useEffect` we got rendered buttons only not them all, and whenever a change happens the `useEffect` won't listen to it.

### Hack it

We've to check if there's change in DOM, then call the body of the `useEffect` again, So we'll create two states to handle the tabs and subTabs changes, they're only elements to change the DOM, then pass their values to the dependancy array of the `useEffect` to listen the changes:

```js
const [tabSelected, selectTab] = useState("1");
const [subTabSelected, selectSubTab] = useState("1");
.
.
.
useEffect(() => {
  // here we got all rendered buttons inside the component
  const appButtons = appRef.current.getElementsByTagName("button"); 
  for (let btn of appButtons) {
    if (!isEnabled) btn.disabled = true;
    else if (isEnabled) btn.disabled = false;
  }
}, [tabSelected, subTabSelected, isDisable]);
```

## Conclusion and corner cases

I think this solution is fit only when you have multiple nested element and you want to apply condition on them all without iterating over them manually.

### Corner cases

- If you want to exclude `button` from our previous app, you can add a class to it then check for it in the `useEffect` function.

- If the component will re-render and get back to its initial state, then you have to return a function in the `useEffect` to undo whatever you did in the `useEffect` body it's `componentWillUnmount` in React Lifecycle.

Here's the final commit to the app https://github.com/zeyadetman/action-on-specific-child-elements/tree/final-commit
