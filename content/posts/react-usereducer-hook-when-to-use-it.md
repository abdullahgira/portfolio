---
title: React useReducer hook, When to use it?
date: "2021-02-04T20:24:10.419Z"
description: A case where you should prefer useReducer over useState?
socialImage: /blog/react-usereducer-hook-when-to-use-it/bird.jpg
---

One of the built-in hooks in React is the `useReducer` hook, which shares the same reducer concept as the Redux reducers. In this post, I will explain which cases are best suited for `useReducer`.

## Updating multiple states at once

Lets examine the following situation

```jsx
function Counter() {
  const [count, setCount] = React.useState(0)
  const [incrementCount, setIncrementCount] = React.useState(0)
  const [decrementCount, decrementCount] = React.useState(0)

  function onIncrement() {
    setCount(++count)
    setIncrementCount(++incrementCount)
  }

  function onDecrementCount() {
    setCount(--count)
    setDecrementCount(++decrementCount)
  }

  return (
    <div>
      <h3>Current count: {count}</h3>
      <h4>Incremented times: {incrementCount}</h4>
      <h4>Decrement times: {decrementCount}</h4>

      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  )
}
```

In this counter example, we are calculating the number of counts and the number of increments/decrements. As we can see, in `onIncrement` function we have to update the state two times in a row. Although updating states in react is an async process (, React may batch multiple setState() calls into a single update for performance), it's still preferred not to update states of the same component like this. That's where `useReducer` comes into play.

## useReducer

```jsx
const initialState = {
  count: 0,
  incrementCount: 0,
  decrementCount: 0,
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
        incrementCount: state.incrementCount + 1,
      }
    case "decrement":
      return {
        count: state.count - 1,
        decrementCount: state.decrementCount + 1,
      }
    default:
      return state
  }
}

function Couner() {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <div>
      <h3>Current count: {state.count}</h3>
      <h4>Incremented times: {state.incrementCount}</h4>
      <h4>Decrement times: {state.decrementCount}</h4>

      <button onClick={() => dispatch({type: "increment"})}>+</button>
      <button onClick={() => dispatch({type: "decrement"})}>-</button>
    </div>
  )
}
```

When calling `dispatch` React passes the current state and the `action` object passed to `dispatch` to the `reducer` function, and updates the state with whatever the `reducer` function returns, which is ideal for updating multiple states at one go.

## Conclusion

If an action has to trigger multiple state updates, we should instead use the useReducer hook for its clarity and easiness
