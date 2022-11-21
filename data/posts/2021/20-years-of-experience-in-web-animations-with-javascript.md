---
title: 20 years of experience in web animations with JavaScript
date: "2021-01-02"
description: Exploring CSS transition, animation, and web animations API gotchas, and how to overcome them 💪.
socialImage: /blog/20-years-of-experience-in-web-animations-with-javascript/blur-train.jpg
---

This post is a note-taking from <a href="https://www.youtube.com/watch?v=9-6CKCz58A8" target="_blank" rel='noopener'>Google Chrome Developers video</a> where Jake and Surma talks about Jake's journey with web animations.

## Table of content

- [CSS transition](#css-transition)
- [CSS transition problem](#transition-problem)
- [CSS animation](#css-animation)
- [Web animations API](#web-animations-api)
- [Fill forwards gotcha](#fill-forwards-gotcha)
- [🌟 Fill forwards solution](#fill-forwards-solution)

We will start the journey by first exploring the CSS transition.

## CSS transition <a name="css-transition"></a>

We will start the journey by first exploring the CSS transition.

```css
.box {
  transition: opacity 500ms ease-in-out;
  opacity: 0;
}
```

This is nice when you need to make hover effects for example **which is done in CSS**.

```css
.box:hover {
  opacity: 1;
}
```

## Transition problem <a name="transition-problem"></a>

Troubles start to come when using JavaScript for making transitions, For example, when a user clicks a button we want to start a transition.

```html
<body>
  <button onclick="onClickHandler()">Click me</button>
</body>
```

```js
function onClickHandler() {
  const el = document.createElement("div")
  el.style.opacity = "0"
  document.body.append(el)
  el.style.transition = "opacity 500ms ease-in-out"
  el.style.opacity = "1"
}
```

**Do you see the problem?**
![No transition happens when the button clicks](/transition-problem.gif "Transition Problem")

The problem is that the browser doesn't see the `opacity 0`; because the browser's render engine skips it, So the workaround is to use the `getComputedStyle(el).opacity`, since calling `getComputedStyle(el)` is not enough, **we have to specify the opacity and then the browser will start to think of the style**.

```js{5}
function onClickHandler() {
  const el = document.createElement("div")
  el.style.opacity = "0"
  document.body.append(el)
  getComputedStyle(el).opacity
  el.style.transition = "opacity 500ms ease-in-out"
  el.style.opacity = "1"
}
```

![Transition now works when the button is clicked](/transition-solution.gif "Transition Solution")

**Removing the element**

Now we want to fade the element out, so

```js
el.style.opacity = "0"
```

Easy right? Now we want to remove it from the document after the animation is done, so we listen to the `transitionend` event.

```js
el.style.opacity = "0"
el.addEventListener("transitionend", (event) => {
  el.remove()
})
```

**Do you see the problem?**

Not a problem if you didn't figure this one out, it's somewhat complicated, the problem is event bubbling (you can read more about this from [Wikipedia](https://en.wikipedia.org/wiki/Event_bubbling) or from [javascript.info](https://javascript.info/bubbling-and-capturing)). If the element you are listening to transitionend on had a parent that also has a transition going on (complicated transition scenario), the parent will also listen to that event and will be also removed from the dom. So we have to check that the element listening for the transitionend event is the one we expect.

```js{3}
el.style.opacity = "0"
el.addEventListener("transitionend", (event) => {
  if (event.target !== el) return
  el.remove()
})
```

## CSS animation <a name="css-animation"></a>

With the slightly newer CSS animations this just works

```css
@keyframes fade-in {
  from {
    opacity: 0;
  }
}
```

```js
const el = document.createElement("div")
el.style.animation = "fade-in 500ms ease-in-out"
document.body.append(el)
```

For fading out and removing

```css{7-11}
@keyframes fade-in {
  from {
    opacity: 0;
  }
}

@keyframes fade-out {
  from {
    opacity: 0;
  }
}
```

```js{3}
el.style.animation = "fade-out 500ms ease-in-out"
el.addEventListener("transitionend", (event) => {
  if (event.target !== el) return
  el.remove()
})
```

We still need to deal with the event bubbling issue.

## Web animations API <a name="web-animations-api"></a>

With web animations API we can now do all the animation within javascript, for fading in

```js
const el = document.createElement('div');
document.body.append(el);
el.animate(
  {opacity: '0', offset: 0},
  {duration: 1000, easing: 'ease-in-out'
);
```

The browser by default will assume that you want to animate the opacity to 1 so there is no need to specify that.
For fading out

```js
const animation = el.animate(
  {opacity: '0'},
  {duration: 1000, easing: 'ease-in-out'
);
animation.onfinish(() => el.remove());
```

### Animating to a lower opacity without removing from the DOM

What if you want to animate something from whatever the opacity now to 0.3 and leave it there without removing it from the dom. Something like this:

```js{2}
el.animate(
  {opacity: "0.3"},
  {
    duration: 500,
    easing: "ease-in-out",
  }
)
```

_NOTE: Providing one keyframe implies the end keyframe, for some reason!_

**Now, do you see the gotcha?**
![Animating to lower opacity demo](/animating-to-lower-opacity.gif "Animating to lower opacity problem")

The animation stops at the desired opacity, but once it is done animating the animation itself is gone, so it goes back to its original state.

The solution is to use `fill: forwards`

```js{6}
el.animate(
  {opacity: "0.3"},
  {
    duration: 500,
    easing: "ease-in-out",
    fill: "forwards",
  }
)
```

![Animating to lower opacity solution demo](/sol-animating-to-lower-opacity.gif "Animating to lower opacity solution")

## Fill fowrwards gotcha <a name="fill-forwards-gotcha"></a>

Suppose we later on decided to set the opacity of the `el` to 1

```js{9}
el.animate(
  {opacity: "0.3"},
  {
    duration: 500,
    easing: "ease-in-out",
    fill: "forwards",
  }
)
el.style.opacity = "1"
```

This does nothing! Because the animation has a higher priority than the style and it is still running. The only thing that the animation doesn't have priority over is important styles.

## 🌟 Fill fowrwards Solution <a name="fill-forwards-solution"></a>

```js{4,7-8}
function animateTo(element, keframes, options) {
  const anim = element.animate(keyframes, {
    ...options,
    fill: "both",
  })
  anim.addEventListener("finish", () => {
    anim.commitStyles()
    anim.cancel()
  })
  return anim
}
```

Note the highlighted lines, `anim.commitStyles()` will commit the last styles applied to the element, but this doesn't happen, because at this point the animation has ended and returned to its original state, so `commitStyles()` doesn't have any effect. In order for `anim.commitStyles()` we have to use `fill: 'both'`. With `anim.cancel()` we can feel safe about the `fill: 'both'` because once the animation is finished, it's gonna be removed.

That's it for this post, I hope you've enjoyed it.
