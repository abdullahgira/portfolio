---
title: React useLayoutEffect vs useEffect
date: "2021-01-23T15:14:27.226Z"
description: Exploring CSS transition, animation, and web animations API gotchas, and how to overcome them 💪.
socialImage: /blog/react-uselayouteffect-vs-useeffect/surface.jpg
---

They both do the same exact thing with a slightly different behavior, they even look the same.

```jsx
React.useEffect(() => {
  // ...
}, [])

React.useLayoutEffect(() => {
  // ...
}, [])
```

## useLayoutEffect

Runs before the component is rendered to the DOM, this is where you run code that has to be processed before the component is painted on the screen. For example, a chat box where you want to scroll to the bottom before the box is rendered.

```jsx
React.useLayoutEffect(() => {
  box.current.scrollTop = box.current.offsetHeight
}, [])
```

## useEffect

Runs after the component is rendered to the DOM, this is where you make all of your requests or handle animations and it is what you need 90% of the times. If you are going to use `React.useEffect` for scrolling to the bottom of the chat box, you will notice a flicker before it scrolls to the bottom.

```jsx
React.useEffect(() => {
  box.current.scrollTop = box.current.offsetHeight
}, [])
```

![Demo useLayoutEffect vs useEffect, where the useLayoutEffect scrolls to the bottom before the useEffect does](/uselayouteffect-vs-useeffect.gif "useLayoutEffect vs useEffect")

I had to slow down this demo because useEffect was re-rendering very quickly that it was almost impossible to notice the scroll due to the small set of data used here.

That's it, hope you found something useful.
