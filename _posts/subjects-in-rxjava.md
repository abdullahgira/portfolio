---
title: Subjcts in RxJava
date: "2017-08-19T22:40:32.169Z"
description: Effects are a part of your data flow.
socialImage: "/media/42-line-bible.jpg"
---

# Subjcts in RxJava

## Prerequisites

You need to know the difference between an Observable and an Observer to get the most out of this post.

## What are Subjects

Subjects act both as an Observable and as an observer at the same time. Because it is an observer, it can subscribe to one or more Observables, and because it is an Observable, it can pass through the items it observes by reemitting them, and it can also emit new items. Subjects receive the next events and emit them to their subscribers.

![Yoda sniffing the air. Caption: “I smell bacon.”](/code.png)

## Types of Subjects in RxJava

- PublishSubject
- BehaviorSubject
- ReplaySubject
- AsyncSubject

In this post, we will talk about **PublishSubject**.

## PublishSubject

You can use Publish subjects when you want new subscribers to be notified of new events that will come after they've subscribed.

## Example in kotlin

```kotlin
// create publish Subject
val publishSubject = PublishSubject.create<String>()

// send element to publish subject
publishSubject.onNext("event 1")

// create subscriber to publish subject
val subscriber1 = publishSubject.subscribeBy(
        onNext = {println("subscriber 1 $it")}
)

// send element to publish subject
publishSubject.onNext("event 2")

// create another subscriber to publish subject
val subscriber2 = publishSubject.subscribeBy(
        onNext = {println("subscriber 2 $it")}
)

// send element to publish subject
publishSubject.onNext("event 3")

// dispose subscriber1
subscriber1.dispose()

// send element to publish subject
publishSubject.onNext("event 4")

// send complete event to terminates publish subject observable sequence
publishSubject.onComplete()

//dispose subscriber2 because there is no more events will come for it
subscriber2.dispose()
```

The output will be:

```
subscriber 1 event 2
subscriber 1 event 3
subscriber 2 event 3
subscriber 2 event 4
```

That's it for PublishSubject, I hope you've learned something new, please drop me a comment if you didn't understand something, I also love to hear suggestions for improving, so if you have any, please drop me a comment.
