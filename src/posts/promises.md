---
title: Promises
date: 2021-07-16T18:06:11.216Z
image: /assets/promises.png
---

In short words, a promise is an object that represents an asynchronous operation. Its status is either pending or settled, and if settled it’s either resolve or rejected.

A promise can be worked in these three patterns: _callback-based_, _promise-based_ and _async/await_.

Let’s start with _a callback-based_. It’s maybe one of the oldest and most use before async/await came.

As we know a _callback_ is a function that will be called at some point in the future, once a task has been completed. That’s why callback was a good way to handle asynchronous operations.

Let’s look the follow example.

```
function asyncOperation (cb) {
    doSomeHeavyOperation((err, data) => {
        if (err) cb(err);
        else cb(null, data);
    })
}

const handleResult = (err, data) => {
  if (err) throw new Error('Something went wrong');
  console.log(data);
};

asyncOperation(handleResult);
```

In the example above we have a function call _asyncOperation_ that performs some asynchronous operation and receives as param a callback. When _doSomeHeavyOperation_ completes it returns an error as the first argument and the data as the second. If not error, _err_ would be _null_ or _undefined_. That’s why we validate if _err_ exist and depending on the result we call the callback with the error or the data.

Now, let’s see how will be the same example in _promise-based_.

You can tackle this exercise in two ways.

The first implementation has almost the same except for the _Promise_ constructor that is wrapping the callback-based _doSomeHeavyOperation_. What is happing below is that _asyncOperation_ is returning a promise object that initially gonna be pending and when the operation is complete it gonna be either resolve or reject depending if the process returns an error or not.

I know It can be a little confusing the concept, so I’m gonna try to explain it in the way I see it, so please bear with me.

as you can see the only thing new is the _Promise_ constructor, and why is the promise constructor (PC) wrapping the callback-based function?. Well, what you are trying to do is in some way converting that callback-based function into a promise-based. So implementing the _PC_ we make sure to always return a promise, so inside the constructor is the same but instead of calling the _cb_ for the response with call _resolve_ or _reject_. Easy right.

Now, the _asyncOperation_ function returns a promise and as we know promises can be chain and in order to obtain the result (either resolve or reject), we pipe _then_ for getting the result if everything went well or _catch_ if there was an error in the process.

_I really hope It was clear to you_

```
function asyncOperation() {
    return new Promise((resolve, reject) => {
        doSomeHeavyOperation((err, data) => {
            if (err) reject(err);
            else resolve(data);
        })
    })
}

const result = asyncOperation()

result
    .then(re => console.log(re))
    .catch(err => throw new Error(err))
```

The second way of doing it, it's gonna help you if you are using Node.

```
const { promisify } = require('util');

const doSomething = promisify(doSomeHeavyOperation);

function asyncOperation() {
    return doSomething()
}

const result = asyncOperation()

result
    .then(re => console.log(re))
    .catch(err => throw new Error(err))
```

What _promisify_ does is convert the callback based function into a promise based, simple right.

If you are like me maybe concept was not as clear, so let’s try to replicate what _promisify_ does.

```
function promisify(fn) {
    return new Promise((resolve, reject) => {
        fn((err, data) => {
            if (err) reject(err);
            else resolve(data);
        })
    })
}
```

More clear right.

> Hey! I don't say that, that's what *promisify* does but it's a way to see it.

And last but not least, let’s talk about _async/await_. I don’t know if it worths getting in deep about this because the majority of you guys know how it works. So, I’m gonna briefly talk about it.

The _async_ keyword before a function declares that the function is asynchronous, this means that this function is gonna return a promise.

The use of _async/await_ is great way of doing serialize execution of code.

Let’s work with the follow example.

```
const { promisify } = require('util');
const doSomething = promisify(doSomeHeavyOperation);

async function asyncOperation() {
    const result = await doSomething();
    console.log(result);
}

const result = asyncOperation();

result
    .catch(err => throw new Error(err))
```

Things change a little bit in comparison with the previous examples, but I guess you understand everything I did above. Either way, I gonna give you a brief explanation.

Like the previous example, I convert the callback-based function into a promise based and inside the async function _asyncOperation_, I wait for the operation to complete. When the operation is complete, two things could happen. The first one it’s that everything went well and we can output the result; and the second one is that an error is thrown, in that case, we need to handle (catch) this. That’s why you can see the _catch_ pipe to _result_ because remember an async function always return a promise.

You can also do it the next way.

```
const { promisify } = require('util');
const doSomething = promisify(doSomeHeavyOperation);

async function asyncOperation() {
    try {
      const result = await doSomething();
      console.log(result);
    }
    catch(err) {
        throw new Error(err)
    }
}

const result = asyncOperation();


```

In this case, the error is handle inside the function.

Let’s leave it here. **Promises** are a long topic and there are too many things to talk but I don’t want to write too much (and the truth is that if the text is too long I probably wouldn’t read it). What you read today was only a little part of the huge concept that is _promises_.

If for some reason you want me to write a little more about this and maybe do some real exercise hit me on [Twitter](https://twitter.com/fernandojpineda).